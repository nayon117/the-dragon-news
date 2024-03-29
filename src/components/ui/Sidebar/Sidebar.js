import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import topNews from "@/assets/side-top-news.png";

const Sidebar = () => {
  return (
    <Box>
      <Card className="my-6">
        <CardActionArea>
          <CardMedia>
            <Image src={topNews} width={800} alt="top news image" />
          </CardMedia>
          <CardContent>
            <p className="bg-red-500 text-white w-28 px-2 py-1 rounded my-5">
              Technology
            </p>
            <Typography gutterBottom variant="h5" component="div">
              Bitcoin climbs as Elon Musk says Tesla will accept it again
            </Typography>
            <Typography gutterBottom className="my-3">
              By Hasibul Hasan - March 14,2024
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Bitcoin climbed above $40,000 on Monday, after Elon Musk said
              Tesla would accept it as payment when miners use more clean
              energy.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};
export default Sidebar;
