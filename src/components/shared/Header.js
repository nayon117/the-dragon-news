import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headerlogo from '@/assets/The Dragon News.png'
import { getCurrentDate } from "@/utils/getCurrentDate";

const Header = () => {
    const currentDate = getCurrentDate()
    return(
        <Box className="w-full my-5">
           <Container>
            <Image src={headerlogo} width={400} height={400} alt="header logo" className="mx-auto" />
            <Typography color="gray" variant="body2" textAlign="center" className="my-2">
            Journalism without fear and favour
          </Typography>
            <Typography textAlign="center">
           {currentDate}
          </Typography>
           </Container>
        </Box>
    )
}
export default Header;