import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const New = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const capitalizedString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;
    setloading(true);
    let data = await fetch(url);
    props.setProgress(40);

    let parsedData = await data.json();

    props.setProgress(70);
    setarticles(parsedData.articles || []);
    settotalResults(parsedData.totalResults || 0);
    setloading(false);

    props.setProgress(100);
  };
  useEffect(() => {
    document.title = `${capitalizedString(props.category)} - PingPress`;
    updateNews();
  }, [props.category, updateNews]);

  //   const handlePrevClick = async () => {
  //     setpage(page - 1);
  //     updateNews();
  //   };

  //   const handleNextClick = async () => {
  //     // if (
  //     //   this.state.page + 1 >
  //     //   Math.ceil(this.state.totalResults / props.pagesize)
  //     // ) {
  //     // } else {
  //     //   let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
  //     //     props.category
  //     //   }&apiKey=6f339b64d209488e94f6df0faee063a9&page=${
  //     //     this.state.page + 1
  //     //   }&pagesize=${props.pagesize}`;
  //     //   this.setState({ loading: true });

  //     //   let data = await fetch(url);
  //     //   let parsedData = await data.json();
  //     //   console.log(parsedData);
  //     //   this.setState({
  //     //     page: this.state.page + 1,
  //     //     articles: parsedData.articles,
  //     //     loading: false,
  //     //   });
  //     // }
  //     setpage(page - 1);
  //     updateNews();
  //   };

  const fetchMoreData = async () => {
    setloading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pagesize=${props.pagesize}`;
    setpage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();

    setarticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
    setloading(false);
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "20px", marginTop: "90px" }}>
        PingPress - Top {capitalizedString(props.category)} Headlines
      </h1>
      <InfiniteScroll
        dataLength={articles ? articles.length : 0}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={loading && <Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4 mb-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

New.defaultProps = {
  country: "us",
  pagesize: 9,
  category: "general",
};

New.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};

export default New;
