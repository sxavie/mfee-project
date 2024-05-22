import { Title, Container, FormContainer } from "./Comments.styles";
import CommentCard from '../CommentCard/CommentCard';
import { CommentResponse } from "../../types";

//✅ ACT 3 - Receive comments prop
interface Props {
  comments: CommentResponse[];
}

function Comments( { comments }: Props ) {
  return (
    <Container container>
      <Title item sm={8}>
        <h4>Comments</h4>
      </Title>
      {/*✅ ACT 1 = Render CommentCard component */}
      {/*✅ ACT 3 - Send one comment (comments[0]) as prop to CommentCard component */}
      {/* <CommentCard comment={ comments[0] } />  */}
      {/*✅ ACT 5 - Iterate comments to render CommentCard component for each comment */}
      {
        comments.map((comment:CommentResponse) => (
          <CommentCard comment={ comment } />
        ))
      }
      <FormContainer item sm={8}>
        Form
      </FormContainer>
    </Container>
  );
}

export default Comments;
