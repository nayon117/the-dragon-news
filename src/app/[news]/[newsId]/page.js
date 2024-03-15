import { getSingleNews } from "@/utils/getSingleNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const NewsDetailsPage = async ({ params }) => {
  const { data:news } = await getSingleNews(params.newsId);
  // console.log(data);
  return (
    <Box className="my-12">
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Image src={news.thumbnail_url} width={800} height={500} alt="news image"/>
            <Grid container spacing={2} className="mt-3">
          <Grid item lg={6}>
            <Image src={news.image_url} width={800} height={500} alt="news image"/>
          </Grid>
          <Grid item lg={6}>
          <Image src={news.image_url} width={800} height={500} alt="news image"/>
          </Grid>
        </Grid>
          </Grid>
          
          <Grid item lg={6}>
            <Typography variant="h6" component="h2" >{news.title}</Typography>
            <Box sx={{
                display:"flex",
                alignItems:"center",
                gap:2
            }} >
            <Avatar alt="author image" src={news.author.img} />
            <Typography >{news.author.name}</Typography>
            <Typography > publish: {news.author.published_date}</Typography>
            </Box>
            <Typography className="text-justify whitespace-pre-line my-5 text-gray-700" >{news.details}</Typography>
            <Typography variant="h6" >``Many desktop publishing packages and web page editor now use their default model text </Typography>
            <Typography variant="h6" > -- Hasibul Hasan Nayon </Typography>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default NewsDetailsPage;
