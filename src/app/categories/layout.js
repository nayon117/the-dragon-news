import { Box, Container, Grid } from "@mui/material";

const CategoriesLayout = () => {
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            {/* <LatestNews /> */}
          </Grid>
          <Grid item xs={9}>
            {/* <Sidebar /> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default CategoriesLayout;
