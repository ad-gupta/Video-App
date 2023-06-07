import axios from "axios";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { format } from "timeago.js";

const Container = styled.div`
  width: 300px;
  margin: 20px 0;
  background-color: ${({ theme }) => theme.bgLighter};
  border-radius: 15px;
  cursor: pointer;
`;

const VideoImg = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 15px;
`;

const Wrapper = styled.div``;

const IconAndTitle = styled.div`
  display: flex;
  gap: 10px;
`;

const Icon = styled.img`
  border-radius: 50%;
  height: 27px;
  width: 25px;
  margin-top: 15px;
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
  margin-left: 35px;
  gap: 10px;
`;

const Views = styled.p`
  color: ${({ theme }) => theme.textSoft};
`;

const Time = styled.p`
  color: ${({ theme }) => theme.textSoft};
`;
const Card = ({
  _id,
  userId,
  title,
  desc,
  imgUrl,
  videoUrl,
  views,
  tags,
  likes,
  dislikes,
  createdAt,
  ownerName,
  userImgUrl,
}) => {

  const [channel, setChannel] = useState([]);

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`http://localhost:8000/api/users/${userId}`);
      setChannel(res.data);
      // console.log(res)
    };
    fetchChannel();
  }, [userId]);
  return (
    <Container>
      <VideoImg src={imgUrl} />
      <Wrapper>
        <IconAndTitle>
          <Icon src={channel.imgUrl} alt="image" />
          <div>
            <Title>{title} </Title>
            <Owner>{channel.name}</Owner>
          </div>
        </IconAndTitle>
        <ViewsAndTime>
          <Views>{views} views • </Views>
          <Time>{format(createdAt)} </Time>
        </ViewsAndTime>
      </Wrapper>
    </Container>
  );
};

export default Card;
