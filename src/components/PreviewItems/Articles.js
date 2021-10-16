import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "components/Loader/Loader";

import { Container, Header, Line, ItemsWrapper } from "./PreviewItems.styles";
import { PageCentered } from "components/Pages/Pages.styles";
import Article from "./Previews/Article";
const Articles = (props) => {

  useEffect(() => {
    (async () => {
      await getArticles();
    })();
  }, [window.location.pathname]);

  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);


  const getArticles = async () => {
    setLoading(true);
    const requestBody = {
      query: `
      query{
        articles(quantity: ${props.quantity | null}, random: ${Boolean(props.random | false)}){
          header
          description
          link
        }
      }
      `,
    };
    try {
      const {
        data: {
          data: { articles: response },
        },
      } = await axios.post(`http://localhost:8081/graphql`, requestBody);
      setArticles(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PageCentered>
      {loading ? <Loader /> : (
      <Container>
      <Header>{props.header}</Header>
      <Line></Line>
      <ItemsWrapper>
        {articles.map((article, index) => (
          <Article
            key={index}
            header={article.header}
            description={article.description}
            to={`/articles/${article.link}`}
          />
        ))}
      </ItemsWrapper>
    </Container>
      )}
    </PageCentered>
  );
};

export default Articles;
