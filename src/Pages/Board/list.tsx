import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { Header } from "../../Components/Header";
import { Post } from "../../Components/Post";
import { Color } from "../../Styles/Color";
import { Navbar } from "../../Components/Navbar";
import AddPost from "../../Assets/img/SVG/boradListAddPost.svg";
import { GetBoardList } from "../../Apis/board";
import { useLocation, useNavigate } from "react-router-dom";
import { Cookie } from "../../Utils/cookie";

export const BoardList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedFilter, setSelectedFilter] = useState<"All" | "Friend">("All");
  const [posts, setPosts] = useState<any[]>([]);

  const getPosts = async () => {
    try {
      const token = Cookie.get("token");

      if(!token) {
        console.error("토큰 없음");
        return;
      }

      const selectType = selectedFilter === "All" ? 1 : 2;
      const postList = await GetBoardList(selectType, token);
      setPosts(postList);
    } catch(error) {
      console.error(error);
      
    }
  };

  useEffect(() => {
    getPosts();
  }, [selectedFilter, location.state?.fromAdd]);

  const emptyCount = Math.max(8 - posts.length, 0);

  const MoveAdd = () => {
    navigate("/boardadd");
  };

  return (
    <div css={Container}>
      <Header FontText="게시판" />
      <div css={ContentBox}>
        <div css={FilterBtnBox}>
          <button
            css={filterButtonStyle(selectedFilter === "All")}
            onClick={() => setSelectedFilter("All")}
          >
            전체
          </button>
          <button
            css={filterButtonStyle(selectedFilter === "Friend")}
            onClick={() => setSelectedFilter("Friend")}
          >
            친구
          </button>
        </div>
        <div css={PostWrapper}>
          {posts.map((post, i) => (
            <Post key={post.id || `post-${i}`} data={post} />
          ))}
          {[...Array(emptyCount)].map((_, i) => (
            <div css={EmptyBox} key={`empty-${i}`} />
          ))}
        </div>
        <div css={AddBtn} onClick={MoveAdd}>
          <img src={AddPost} alt="글쓰기 버튼" />
        </div>
        <Navbar />
      </div>
    </div>
  );
};

const Container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  background-color: #fff;
`;

const ContentBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  gap: 20px;
`;

const FilterBtnBox = css`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  width: 340px;
`;

const filterButtonStyle = (isActive: boolean) => css`
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  color: ${isActive ? Color.mainColor : "black"};
  text-decoration: ${isActive ? "underline" : "none"};
  cursor: pointer;
`;

const PostWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const EmptyBox = css`
  height: 80px;
  background-color: #fff;
`;

const AddBtn = css`
  position: fixed;
  bottom: 15vh;
  left: 70vw;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  border-radius: 10px;
  background-color: ${Color.mainColor};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
