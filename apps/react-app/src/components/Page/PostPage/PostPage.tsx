import Banner from "../../Banner";
import Comments from "../../Comments";
import {
  Container,
  BannerContainer,
  CommentsContainer,
  DescriptionContainer,
} from "./PostPage.styles";

const post = {
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Eiffel_tower_%28369%29.JPG/800px-Eiffel_tower_%28369%29.JPG?20160209051035",
  title: "Eiifel Tower",
  postID: "1",
  comments: [
    {
      _id: "1",
      author: "Santiago Hernandez",
      content: "Maravilloso",
      createdAt: "",
      updatedAt: "",
      __v: "",
    },
  ],
  description: "Venga a descubrir la Torre Eiffel en un viaje ascendente único en el mundo y déjese llevar por las emociones que vivirá en su ascenso desde el atrio hasta la cima.",
};

function PostPage() {
  return (
    <Container container>
      Post page
      <BannerContainer item>
        {/* ACT 1 - Render Banner component */} <Banner></Banner>
        {/* ACT 3 - Send postImage and postTitle as props to Banner component */}
      </BannerContainer>
      <DescriptionContainer item>
        <p>{ post.description }</p> {/* ACT 1 - Render post description */}
      </DescriptionContainer>
      <CommentsContainer item>
        <Comments></Comments> {/* ACT 1 - Render Comments component */}
        {/* ACT 3 - Send comments as prop to Comments component */}
      </CommentsContainer>
    </Container>
  );
}

export default PostPage;
