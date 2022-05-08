import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container, Header, Line, ItemsWrapper, Wrapper } from "./PreviewItems.styles";
import { useTranslation } from "react-i18next";

import Course from "./Previews/Course";
import LocalLoader from "components/Loader/LocalLoader";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { coursesAtom } from "store/state/cache";
const Courses = (props) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    (async () => {
      await getCourses();
    })();
  }, []);

  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  const cachedItems = useRecoilValue(coursesAtom)
  const setCachedItems = useSetRecoilState(coursesAtom);

  const getCourses = async () => {
    try {
    if (cachedItems.length) {
      return setCourses(cachedItems)
    }
    const requestBody = {
      query: `
          query{
            courses(language: "${
        i18n.language
      }"){
              header
              description
              difficulty
              link
            }
          }
          `,
    };
      const {
        data: {
          data: { courses: response },
        },
      } = await axios.post(`${window.env.API_URL}/graphql`, requestBody);
      setCourses(response);
      setCachedItems(response)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Wrapper>
      <Container>
        <Header>{props.header}</Header>
        <Line />
        {loading ? (
          <LocalLoader />
        ) : (
          <ItemsWrapper>
            {courses.map((course, index) => (
              <Course
                key={index}
                to={`/course-preview/${course.link}`}
                img="preview.png"
                header={course.header}
                description={course.description}
                difficulty={course.difficulty}
              />
            ))}
          </ItemsWrapper>
        )}
      </Container>
    </Wrapper>
  );
};

export default Courses;
