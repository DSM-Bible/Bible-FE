import { Header } from "../../Components/Header";
import PostAddImg from "../../Assets/img/SVG/PostAddImg.svg";
import { Input } from "../../Components/Input";
import { css } from "@emotion/react";
import { Button } from "../../Components/Button";
import { Color } from "../../Styles/Color";
import { useRef, useState } from "react";
import { BoardApi } from "../../Apis/board";
import { useNavigate } from "react-router-dom";

export const BoardAdd = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>(PostAddImg);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    if (selectedFile) {
      setFile(selectedFile);

      const imageUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(imageUrl);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async () => {
    const requestData = {
      title: title,
      content: content,
    };

    const formData = new FormData();
    formData.append(
      "request",
      new Blob([JSON.stringify(requestData)], { type: "application/json" })
    );

    if (file) {
      formData.append("file", file);
    }

    BoardApi(formData)
      .then(() => {
        navigate("/boardlist", { state: { fromAdd: true } });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div css={Container}>
        <Header FontText="게시글 작성" />
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
              alt="업로드"
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
          <Button text="게시글 저장" onClick={handleSubmit} />
        </div>
      </div>
    </>
  );
};

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
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const ImgBox = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
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

const Image = css`
  width: 340px;
  height: 185px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid #ffffff;
`;
