import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";
import { PageCentered, PageWrapper } from "components/Pages/Pages.styles";
import ArticleContent from "components/Article/Article";
import Articles from "components/PreviewItems/Articles";
import { useTranslation } from "react-i18next";

const Article = (props) => {
  const {t, i18n} = useTranslation()

  useEffect(() => {
    (async () => {
      await getArticle();
    })();
  }, [window.location.pathname]);

  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState({
    header: '',
    description: '',
    categories: {
      pl: null
    },
    urls: []
  });

  const getArticle = async () => {
    const requestBody = {
      query: `
          query{
            article(link: ${JSON.stringify(props.match.params.articleName)}, language: "${i18n.language}"){
              header
              description
              categories {
                ${i18n.language}
              }
              urls
            }
          }
          `,
    };
    try {
      const {
        data: {
          data: { article: response },
        },
      } = await axios.post(`${window.env.API_URL}/graphql`, requestBody);
      setArticle(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <PageWrapper>
        <PageCentered>
          {!loading ? <ArticleContent data={article} /> : null}
        </PageCentered>
            <Articles header={t('similarArticles')} quantity={6} random/>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default Article;
