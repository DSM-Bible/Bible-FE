import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { Header } from "../../Components/Header";
import { Post } from "../../Components/Post";
import { Color } from "../../Styles/Color";
import { Navbar } from "../../Components/Navbar";
import AddPost from "../../Assets/img/SVG/boradListAddPost.svg";
import { GetBoardList, Data } from "../../Apis/board";
import {useNavigate } from "react-router-dom";

export const BoardList = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState<1 | 2>(1);
  const [posts, setPosts] = useState<Data[]>([]);

  useEffect(() => {
    const getList = async () => {
      try{
        const response = await GetBoardList(selectedFilter);
        setPosts(response.data.data.list);
      }
      catch (error) {
        console.error(error);
      }
    }
    getList();
  }, [selectedFilter])

  const MoveAdd = () => {
    navigate("/boardadd");
  };

  return (
    <>
      <div css={Container}>
        <header css={HeaderBox}>
          <Header FontText="게시판" />
        </header>
        <div css={ContentBox}>
          <div css={FilterBtnBox}>
            <button
              css={filterButtonStyle(selectedFilter === 1)}
              onClick={() => setSelectedFilter(1)}
            >
              전체
            </button>
            <button
              css={filterButtonStyle(selectedFilter === 2)}
              onClick={() => setSelectedFilter(2)}
            >
              친구
            </button>
          </div>
          <div css={PostWrapper}>
            {Array.isArray(posts) &&
              posts.map((post, i) => (
                <Post key={`post-${post.id}-${i}`} list={post} onClick={() => navigate(`/board/${post.id}`)} />
              ))}
          </div>
          <div css={AddBtn} onClick={MoveAdd}>
            <img src={AddPost} alt="글쓰기 버튼" />
          </div>
          <nav css={NavbarBox}>
            <Navbar />
          </nav>
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
  position: relative;
  min-height: 100vh;
  background-color: #fff;
`;

const HeaderBox = css`
  position: fixed;
  top: 0px;
  height: 100px;
  background-color: white;
  z-index: 20;
`;

const ContentBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 160px;
  margin-bottom: 70px;
  width: 400px;
  gap: 20px;
`;

const FilterBtnBox = css`
  display: flex;
  position: fixed;
  top: 100px;
  justify-content: flex-start;
  gap: 20px;
  width: 340px;
  height: 60px;
  background-color: white;
  padding-left: 10px;
  z-index: 20;
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

const AddBtn = css`
  position: fixed;
  bottom: 12vh;
  right: 3vw;
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

const NavbarBox = css`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white
`;
