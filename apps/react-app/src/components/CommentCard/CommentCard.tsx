import { Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Container, Content, Author } from "./CommentCard.styles";

const comment = {
  _id: "1",
  author: "Santiago Hernandez",
  content: "This is a wonderful place to travel",
  createdAt: "",
  updatedAt: "",
  __v: "",
};

function CommentCard() {
  return (
    <Container item sm={8}>
      <AccountCircleIcon />
      <Content>
        <Author>{ comment.author }</Author>
        <Typography>{ comment.content }</Typography>
      </Content>
    </Container>
  );
}

export default CommentCard;
