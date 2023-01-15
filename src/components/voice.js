import React, { useEffect, useState } from 'react'
import { CardActionArea, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import './components.css';
import axios from 'axios'
const Voice = (props) => {

  const [headlines, setHeadlines] = useState([]);
  const [business, setBusiness] = useState([]);
  var API_URL = ''
  var temp = 0
  var search = props.search
  var category = props.category

  if (props.country && category) {
    API_URL = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4e78b2a4ae704dad949d898adf6e435b`
    console.log("country and category")
    if (search) {
      temp = 3
    }
    else {
      temp = 1
    }
  }


  else if (props.country) {
    API_URL = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=4e78b2a4ae704dad949d898adf6e435b`
    console.log("country")
    temp = 2
  }
  const options = {
    method: 'GET',
    url: API_URL,

  };

  const options2 = {
    method: 'GET',
    url: `https://newsapi.org/v2/top-headlines?country=${props.country}&category=business&apiKey=4e78b2a4ae704dad949d898adf6e435b`,

  };
  const options3 = {
    method: 'GET',
    url: `https://newsapi.org/v2/everything?q=${props.search}&apiKey=4e78b2a4ae704dad949d898adf6e435b`,

  };

  useEffect(() => {
    axios.request(options)
      .then(function (response) {
        setHeadlines(response.data.articles)
        console.log(headlines)
        props.changeQuery('')
        temp = 1
      })

      .catch(function (error) {
        console.error(error);
      });
  }, [props.country, props.category]);

  useEffect(() => {
    axios.request(options2)
      .then(function (response) {
        setBusiness(response.data.articles)
        console.log(business)
      })

      .catch(function (error) {
        console.error(error);
      });
  }, props.country);
  useEffect(() => {
    axios.request(options3)
      .then(function (response) {
        setHeadlines(response.data.articles)
        console.log(headlines)

      })

      .catch(function (error) {
        console.error(error);
      });
  }, [props.search]);



  return (
    <>
      <div className='main'>
        <div className='left'>
          {temp == 1 && <><h1>{props.category}</h1></>}
          {temp == 2 && <><h1>Top Headlines</h1></>}
          {temp == 3 && <h1>Top Headlines on {search}</h1>}
          <Grid container spacing={1} olumns={{ xs: 4, sm: 8, md: 12 }}>
            {headlines.map((item) =>
              (
                item.urlToImage && item.url) &&
              (
                <Grid item xs={12} sm={6} md={4}>
                  <CardActionArea href={item.url}>
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
                        <Typography color="black">
                          <h3>{item.title}</h3><hr />
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
          {business.map((item) =>
          (
            <>
              <a href={item.url}><h5>{item.title}</h5></a>
              <p id="p">{item.description}</p>
              <hr />
            </>
          ))}
        </div>
      </div>
    </>
  )
};


export default Voice