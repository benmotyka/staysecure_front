import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  Footer,
  Body,
  HeaderContainer,
  Header,
  Question,
  AnswersContainer,
  Answer,
} from "./Quiz.styles";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Button from "components/Button/Button";
import { finishedQuizesAtom } from "store/state/cache";
import { useResetRecoilState } from "recoil";
import { useGlobalLoader } from "store/actions/global";

const Quiz = (props) => {
  const history = useHistory();
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [choosenAnswer, setChoosenAnswer] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);
  const resetQuizesCache = useResetRecoilState(finishedQuizesAtom);
  const { startGlobalLoader, stopGlobalLoader } = useGlobalLoader();

  const { t } = useTranslation();
  useEffect(() => {
    finishQuiz(); //required for simulating asynchronous change of state for useranswers
  }, [quizFinished]);

  const finishQuiz = async () => {
    if (!quizFinished) return;
    const requestBody = {
      query: `
            mutation FinishQuiz($course: String!, $answers: String!){
              finishQuiz(courseLink: $course, userAnswers: $answers){
                correctAnswers
                numberOfQuestions
              }
            }
            `,
      variables: {
        course: props.courseLink,
        answers: JSON.stringify(userAnswers),
      },
    };
    try {
      startGlobalLoader("finishQuiz");
      await axios.post(
        `${window.env.API_URL}/graphql`,
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${props.user.token}`,
          },
        }
      );
      resetQuizesCache();

    } catch (error) {
      console.log(error);
    } finally {
      stopGlobalLoader("finishQuiz");
      history.push(`/quiz-summary/${props.courseLink}`);
    }
  };

  const updateUserAnswer = (question) => {
    if (choosenAnswer === null) return;
    setUserAnswers((userAnswers) => [
      ...userAnswers,
      { question, answer: choosenAnswer },
    ]);
    if (currentQuestion >= props.quizData.length - 1) {
      return;
    }
    setChoosenAnswer(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
        <Container>
          {props.quizData.map((item, index) => {
            if (index === currentQuestion)
              return (
                <>
                  <Body>
                    <HeaderContainer>
                      <Header>
                        {t("quiz.question")} {index + 1}/{props.quizData.length}
                      </Header>
                      <Question>{item.question[props.language]}</Question>
                    </HeaderContainer>
                    <AnswersContainer>
                      {item.answers.map((answer, index) => (
                        <Answer
                          key={index}
                          choosen={choosenAnswer === answer}
                          onClick={() => {
                            setChoosenAnswer(answer);
                          }}
                        >
                          {answer.text[props.language]}
                        </Answer>
                      ))}
                    </AnswersContainer>
                  </Body>
                  <Footer>

                    {currentQuestion >= props.quizData.length - 1 ? (
                      <Button
                      text={t("quiz.finishQuiz")}
                      disabled={!choosenAnswer}
                      onClick={() => {
                        updateUserAnswer(item.question);
                        setQuizFinished(true);
                        finishQuiz();
                      }}
                    />
                    ) : (
                      <Button
                        text={t("quiz.nextQuestion")}
                        disabled={!choosenAnswer}
                        onClick={() => {
                          updateUserAnswer(item.question);
                        }}
                      />
                    )}
                  </Footer>
                </>
              );
          })}
        </Container>
  );
};

export default Quiz;
