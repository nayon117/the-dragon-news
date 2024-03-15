import { getCategoryNews } from "@/utils/getCategoryNews";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";

const DynamicNewsPage = async ({ params, searchParams }) => {
  const { data } = await getCategoryNews(searchParams.category);
  // console.log(data);
  return (
    <div className="my-5">
      <p>
        Total {searchParams.category} news is {data.length}{" "}
      </p>
      <Grid
        className="mt-5"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
       {
        data?.map(news=>(
            <Grid key={news.id} item xs={6}>
            <Card className="my-6">
              <CardActionArea>
                <CardMedia>
                  <Image src={news.thumbnail_url} width={800} height={600} alt="top news image" />
                </CardMedia>
                <CardContent>
                  <p className="bg-red-500 text-white w-28 px-2 py-1 rounded my-5">
                   {news?.category}
                  </p>
                  <Typography gutterBottom>
                   {news?.title}
                  </Typography>
                  <Typography gutterBottom className="my-3">
                    By {news.author.name} - {news.author.published_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {news.details}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))
       }
      </Grid>
    </div>
  );
};
export default DynamicNewsPage;
