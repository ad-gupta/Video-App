import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 20px 0;
  background-color: ${({ theme }) => theme.bgLighter};
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  // justify-content: space-around;
  gap: 20px;
`;

const VideoImg = styled.img`
  width: 25vw;
  margin: 10px;
  border-radius: 5px;

  @media (min-width: 1024px) {
    width: 12vw;
    height: auto;
    border-radius: 10px;
  }
`;

const Wrapper = styled.div`
  margin-left: 10px;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.text};
`;

const Owner = styled.p`
  color: ${({ theme }) => theme.textSoft};
`;

const ViewsAndTime = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.textSoft};
`;

const Views = styled.p`
  color: ${({ theme }) => theme.textSoft};
`;

const Time = styled.p`
  color: ${({ theme }) => theme.textSoft};
`;
const RecCard = ({ size }) => {
  return (
    <Link to="/video/test" style={{textDecoration: "none"}}>
      <Container>
        <VideoImg src="/planet.jpg" alt="image" />
        <Wrapper>
          <Title>My First Video</Title>
          <Owner>AD Gupta</Owner>
          <ViewsAndTime>
            <Views>4865</Views>
            <Time>- 1 day ago</Time>
          </ViewsAndTime>
        </Wrapper>
      </Container>
    </Link>
  );
};

export default RecCard;
