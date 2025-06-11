import { Header } from "../../Components/Header";
import PostAddImg from "../../Assets/img/SVG/PostAddImg.svg";
import { Input } from "../../Components/Input";
import { css } from "@emotion/react";
import { Button } from "../../Components/Button";
import { Navbar } from "../../Components/Navbar";
import { Color } from "../../Styles/Color";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { GetBoardView, PatchBoardEdit } from "../../Apis/board";

export const BoardEdit = () => {
  const { id } = useParams<{ id: string }>();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>(PostAddImg);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    GetBoardView(id)
      .then((res) => {
        const data = res.data.data;
        setTitle(data.title);
        setContent(data.content);
        setFileUrl(data.fileUrl || null);
        if (data.fileUrl) {
          setPreviewUrl(data.fileUrl);
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(imageUrl);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleSave = async () => {
    if (!id) return;

    const formData = new FormData();
    const json = JSON.stringify({ title, content });
    const blob = new Blob([json], { type: "application/json" });
    formData.append("request", blob);

    if (file) {
      formData.append("file", file);
    }

    try {
      await PatchBoardEdit(id, formData);
      navigate(`/board/${id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div css={Container}>
        <Header FontText="게시글 수정" />
        <div css={ContentBox}>
          <div css={ImgBox}>
            <label>사진</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
            <img
              src={previewUrl}
              alt="미리보기"
              onClick={handleImageClick}
              css={Image}
            />
          </div>
          <Input
            type={"text"}
            placeholder="게시글 제목을 입력해주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            css={TextArea}
            placeholder="내용을 입력해주세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <Button text="게시글 저장" onClick={handleSave} />
          <div css={NavBox}>
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
};

// 💅 스타일
const Container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
`;

const ContentBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-bottom: 80px;
`;

const ImgBox = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Image = css`
  width: 340px;
  height: 185px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid #ffffff;
`;

const TextArea = css`
  width: 320px;
  height: 210px;
  resize: none;
  border: 1px solid ${Color.disableGray};
  border-radius: 15px;
  outline: none;
  padding: 16px 20px;
`;

const NavBox = css`
  width: 100%;
  position: fixed;
  bottom: 0%;
  background-color: white;
`;
