import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  HeaderWrapper,
  Header,
  CategoriesWrapper,
  ItemsWrapper,
  Item,
  Category,
  Container,
  Question,
  Answer,
  Text,
  Highlight,
} from "./Faq.styles";
import Parser from "html-react-parser";

import faqData from "./Faq.data";
import FadeIn from "components/FadeIn/FadeIn";
import ContactForm from "components/ContactForm/ContactForm";
import BasicInput from "components/BasicInput/BasicInput";

const Faq = () => {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("account");
  const [faqSearch, setFaqSearch] = useState("");
  const [searchFaqItems, setSearchFaqItems] = useState([]);
  const [contactForm, showContactForm] = useState(false);

  const updateFaqSearch = (value) => {
    setFaqSearch(value);
    if (value.length <= 3) return;
    setSearchFaqItems(
      faqData.filter(
        (faqItem) =>
          faqItem.question.toLowerCase().includes(value) ||
          faqItem.answer.toLowerCase().includes(value)
      )
    );
  };

  return (
    <Container>
      <HeaderWrapper>
        <Header>{t("faq.header")}</Header>
        <BasicInput
          placeholder={t("faq.inputPlaceholder")}
          onChange={(e) => updateFaqSearch(e.target.value)}
          maxLength="25"
          type="text"
          fullWidth
        />
      </HeaderWrapper>
      {faqSearch.length > 3 ? (
        <>
          <Text>
            {t("faq.searchResultsFor")} <Highlight>{faqSearch}</Highlight>
          </Text>
          <ItemsWrapper>
            {searchFaqItems
              .filter((item) => item.language === i18n.language)
              .map((item) => (
                <Item key={item.question}>
                  <Question>{item.question}</Question>
                  <Answer>{item.answer}</Answer>
                </Item>
              ))}
          </ItemsWrapper>
        </>
      ) : (
        <>
          <CategoriesWrapper>
            <Category
              active={activeCategory === "account"}
              onClick={() => setActiveCategory("account")}
            >
              {t("faq.categories.account")}
            </Category>
            <Category
              active={activeCategory === "courses"}
              onClick={() => setActiveCategory("courses")}
            >
              {t("faq.categories.courses")}
            </Category>
            <Category
              active={activeCategory === "quizes"}
              onClick={() => setActiveCategory("quizes")}
            >
              {t("faq.categories.quizes")}
            </Category>
          </CategoriesWrapper>
          <ItemsWrapper>
            {faqData
              .filter(
                (item) =>
                  item.language === i18n.language &&
                  item.category === activeCategory
              )
              .map((item) => (
                <Item key={item.question}>
                  <Question>{item.question}</Question>
                  <Answer>{Parser(item.answer)}</Answer>
                </Item>
              ))}
          </ItemsWrapper>
        </>
      )}
      <Text center>
        {t("faq.stillHaveQuestions1")}{" "}
        <Highlight pointer onClick={() => showContactForm(!contactForm)}>
          {t("faq.stillHaveQuestions2")}
        </Highlight>{" "}
        {t("faq.stillHaveQuestions3")}
      </Text>
      <ItemsWrapper noBg>
        <FadeIn in={contactForm}>
          <ContactForm />
        </FadeIn>
      </ItemsWrapper>
    </Container>
  );
};

export default Faq;
