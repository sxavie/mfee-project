import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { BannerContent, BannerTitle, Container } from "./Banner.styles";

const postImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Big_Ben%2C_London_%2830977153027%29.jpg/763px-Big_Ben%2C_London_%2830977153027%29.jpg?20181120005805";
const postTitle = "London - Big Ben";

function Banner() {
  return (
    <Container image={postImage}>
      <BannerContent>
        <Button sx={{ color: "white" }} startIcon={<ArrowBackIosIcon />}>
          View Posts
        </Button>
        <BannerTitle variant="h3">
          { postTitle }
        </BannerTitle>
      </BannerContent>
    </Container>
  );
}

export default Banner;
