import { Header } from "../../Components/Header";
import { css } from "@emotion/react";
import ViewDetail from "../../Assets/img/SVG/Detail.svg";
import Profile from "../../Assets/img/SVG/DefaultProfileImg.svg";
import { Font } from "../../Styles/Font";
import { Navbar } from "../../Components/Navbar";
import DefaultLike from "../../Assets/img/SVG/DefaultLike.svg";
import FilledLike from "../../Assets/img/SVG/ClickedLike.svg";
import { Color } from "../../Styles/Color";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  BoardViewResponse,
  DeleteBoard,
  DeleteBoardLike,
  GetBoardView,
  PatchBoardEdit,
  PostBoardLike,
} from "../../Apis/board";

export const BoardView = () => {
  const { id } = useParams<{ id: string }>();
  const [board, setBoard] = useState<BoardViewResponse>();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    GetBoardView(id)
      .then((res) => {
        const data = res.data.data;
        setBoard(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const handleLike = async () => {
    if (!id || !board) return;

    const prevBoard = { ...board };

    const isLikedNow = !board.isLiked;

    setBoard({
      ...board,
      data: {
        ...board.data,
        isLiked: !board.isLiked,
        likeCount: board.likeCount + (board.isLiked ? -1 : 1),
      },
    });

    try {
      if (isLikedNow) {
        await PostBoardLike(id);
      } else {
        await DeleteBoardLike(id);
      }

      const res = await GetBoardView(id);
      setBoard(res.data.data);
    } catch (err) {
      console.error(err);
      setBoard(prevBoard);
    }
  };

  const handleDetailClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleEdit = () => {
    if(!id) return;
    navigate(`/board/edit/${board?.id}`);
    setShowModal(false);
  };

  const handleDelete = async () => {
    if(!id) return;
    console.log(id);
    try {
      await DeleteBoard(id);
      setShowModal(false);
      navigate("/boardlist")
    } catch(err) {
      console.error(err);
    }
  };

  return (
    <>
      <div css={Container}>
        <div css={ContentWrapper}>
          <Header FontText="게시글 상세" />
          <div css={ProfileBox}>
            <div css={ProfileBoxLeft}>
              <img src={Profile} alt="" />
              <div>
                <p>{board?.userName}</p>
              </div>
            </div>
            <button css={DetailBtn} onClick={handleDetailClick}>
              <img src={ViewDetail} alt="" />
            </button>
          </div>
          <Font
            text={board?.title ?? "제목 없음"}
            kind="bodyTItle"
            color={"defaultBlack"}
          />
          {board?.fileUrl && <img src={board.fileUrl} />}
          <p css={ContentText}>{board?.content}</p>
          <div css={LikeBtn} onClick={handleLike}>
            <img src={board?.isLiked ? FilledLike : DefaultLike} alt="" />
            <p>{board?.likeCount ?? 0}</p>
          </div>
        </div>
      </div>

      {showModal && (
        <div css={ModalOverlay} onClick={closeModal}>
          <div css={ModalBox} onClick={(e) => e.stopPropagation()}>
            <button css={ModalButton} onClick={handleEdit}>
              수정
            </button>
            <button css={[ModalButton, DeleteButton]} onClick={handleDelete}>
              삭제
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const Container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 350px;
  min-height: 100vh;
  background-color: white;
  border-radius: 12px;
`;

const ContentWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  flex-grow: 1;
`;

const NavbarWrapper = css`
  display: flex;
  position: absolute;
  bottom: 0;
  justify-content: center;
  padding: 8px 0;
  width: 100%;
  border-top: 1px solid #e0e0e0;
`;

const ProfileBox = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProfileBoxLeft = css`
  display: flex;
  align-items: center;
  gap: 10px;

  > img {
    width: 50px;
    height: 50px;
  }
`;

const ContentText = css`
  width: 100%;
`;

const LikeBtn = css`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 2px;

  > p {
    ${Color.disableGray}
  }
`;

const DetailBtn = css`
  background: transparent;
  border: none;
  cursor: pointer;
  width: 40px;
`;

const ModalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalBox = css`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  width: 120px;
`;

const ModalButton = css`
  padding: 12px;
  border: none;
  background: white;
  text-align: left;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: #f5f5f5;
  }
`;

const DeleteButton = css`
  color: red;
`;
