import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Loader from "components/Loader/Loader";
import { useSelector } from "react-redux";
import { selectUser } from "features/userSlice";
import Navbar from "components/Navbar/Navbar";
import { PageCentered } from "components/Pages/Pages.styles";
import QuizSummaryWidget from "components/QuizSummaryWidget/QuizSummaryWidget";
const QuizSummary = (props) => {
  const user = useSelector(selectUser);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [summaryData, setSummaryData] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    (async () => {
      if (!user) history.push("/login");
      await getSummaryData();
    })();
  }, []);

  const getSummaryData = async () => {
    setLoading(true);
    const requestBody = {
      query: `
    query GetQuizSummaryData($courseLink: String!){
      getQuizSummaryData(courseLink: $courseLink){
        userAnswers
        quizData {
          question
          answers {
            text
            isCorrect
          }
        }
        }
      }
          `,
      variables: {
        courseLink: props.match.params.courseName,
      },
    };

    try {
      const { data: response } = await axios.post(
        `${window.env.API_URL}/graphql`,
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (response.errors) {
        history.push(`/`);
      }
      setUserAnswers(JSON.parse(response.data.getQuizSummaryData.userAnswers));
      setSummaryData(response.data.getQuizSummaryData.quizData);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <>
          <Navbar/>
      {loading ? (
        <Loader />
      ) : (
        <>
          <PageCentered>
            <QuizSummaryWidget
              quizName={props.match.params.courseName}
              userAnswers={userAnswers}
              summaryData={summaryData}
            />
          </PageCentered>
        </>
      )}
    </>
  );
};

export default QuizSummary;