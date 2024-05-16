import {
  Container,
  BannerContainer,
  CommentsContainer,
  DescriptionContainer,
} from "./PostPage.styles";

// const postID = "664128a212f505651c18d676"

function PostPage() {
  // ACT 9 - Use postID variable to fetch the post data
  // ACT 10 - Get postID from route params
  return (
    <Container container>
      Post page
      <BannerContainer item>
        {/* ACT 1 - Render Banner component */}
        {/* ACT 3 - Send postImage and postTitle as props to Banner component */}
      </BannerContainer>
      <DescriptionContainer item>
        <p>{/* ACT 1 - Render post description */}</p>
      </DescriptionContainer>
      <CommentsContainer item>
        {/* ACT 1 - Render Comments component */}
        {/* ACT 3 - Send comments as prop to Comments component */}
      </CommentsContainer>
    </Container>
  );
}

export default PostPage;
