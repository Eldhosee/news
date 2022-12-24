import React,{useEffect,useState} from 'react'
import { CardActionArea,Card, CardContent,CardMedia, Typography,Grid} from '@mui/material';
import './components.css';
import  axios from 'axios'
const Voice=(props)=>{
    const [headlines,setHeadlines]=useState([]);
    const [business,setBusiness]=useState([]);
    const options = {
        method: 'GET',
        url: `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=4e78b2a4ae704dad949d898adf6e435b`,
        
      };
      
      useEffect(()=>{
                axios.request(options)
                .then(function (response) {
                    setHeadlines(response.data.articles)
                    // console.log(headlines)
                })
               
                .catch(function (error) {
                    console.error(error);
                });
    },props.country);
    const options2 = {
      method: 'GET',
      url: `https://newsapi.org/v2/top-headlines?country=${props.country}&category=business&apiKey=4e78b2a4ae704dad949d898adf6e435b`,
      
    };
    
    useEffect(()=>{
              axios.request(options2)
              .then(function (response) {
                setBusiness(response.data.articles)
                  console.log(business)
              })
             
              .catch(function (error) {
                  console.error(error);
              });
  },props.country);
 
   return(
    <>
    <div className='main'>
      <div className='left'>
        <Grid container spacing={1} olumns={{ xs: 4, sm: 8, md: 12 }}>
                { headlines.map((item)=>
                  (
                      item.urlToImage && item.url)&&
                    (
                      <Grid item xs={12} sm={6} md={4}>
                        <CardActionArea >
                          <Card className='cardmain'>
                            <CardMedia
                            className='card'
                              component="img"
                              alt="images"
                              height="240"
                              width="500"
                              image={item.urlToImage}
                            />
                              <CardContent className='content'>
                                <Typography  color="black">
                                <h3>{item.title}</h3><hr/> 
                                <p>{item.publishedAt}: 
                                {item.description}</p>
                                </Typography>
                              </CardContent>
                          </Card>
                        </CardActionArea>
                      </Grid>
                    
                    
                )
              
                  )}
          </Grid>
        </div>
        <div className='right'>
          <h4>Business News</h4>
                      {business.map((item)=>
                      (
                        <>
                          <a href={item.url}><h5>{item.title}</h5></a>
                          <p id="p">{item.description}</p>
                          <hr/>
                        </>
                      ))}
        </div>
      </div>
    </>
    )
      };
   

export default Voice