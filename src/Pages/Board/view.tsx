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
import { useParams } from "react-router-dom";
import {
  BoardViewResponse,
  DeleteBoardLike,
  GetBoardView,
  PostBoardLike,
} from "../../Apis/board";

export const BoardView = () => {
  const { id } = useParams<{ id: string }>();
  const [board, setBoard] = useState<BoardViewResponse>();

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
            <img src={ViewDetail} alt="" />
          </div>
          <Font
            text={board?.title ?? "제목 없음"}
            kind="bodyTItle"
            color={"defaultBlack"}
          />
          {board?.fileUrl && <img src={board.fileUrl} css={Image} />}
          <p css={ContentText}>{board?.content}</p>
          <div css={LikeBtn} onClick={handleLike}>
            <img src={board?.isLiked ? FilledLike : DefaultLike} alt="" />
            <p>{board?.likeCount ?? 0}</p>
          </div>
        </div>
      </div>
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

const Image = css`
  width: 100%;
`;
