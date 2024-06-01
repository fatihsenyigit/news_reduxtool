import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../redux/newsSlice";
import loadingGif from '../assets/loading.gif'
import { clearNewsData } from "../redux/newsSlice";

const News = () => {
  const dispatch = useDispatch()
  const {newsData, loading, error} = useSelector((state)=> state.news)
  useEffect(() => {
    dispatch(getNews())
    return ()=> {
      dispatch(clearNewsData())
    }
  }, [])
  
  return (
    <>
      <h1 >News</h1>
      {loading && <img src={loadingGif} alt='gif'/>}
      {error && <Typography variant='h2' color='error' component='div'>something went wrong</Typography>}
      <Box
        xs={{ d: "flex" }}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        {newsData?.map((item, index) => (
          <Card sx={{ maxWidth: 345, m: 5, maxHeight: 600 }} key={index}>
            <CardMedia
              component="img"
              height="250"
              image={item?.urlToImage}
              alt="img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item?.content}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small" href={item?.url} target="_blank">
                Detail
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default News;
