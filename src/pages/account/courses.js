import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "features/userSlice";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Footer from "components/Footer/Footer";
import Sidebar from "components/Account/Sidebar/Sidebar";
import StartedCoursesCard from "components/Account/Cards/StartedCourses";
import { PageAccount, PageSection } from "components/Pages/Pages.styles";
import NavbarClean from "components/Navbar/NavbarClean";
import FinishedCoursesCard from "components/Account/Cards/FinishedCourses";
const Courses = () => {
  const history = useHistory();

  const [coursesFinished, setCoursesFinished] = useState([])
  const [coursesStarted, setCoursesStarted] = useState([])
  useEffect(() => {
    if (!user) history.push("/login");
      (async function() {
        await getUserInfo()
      })()
  }, []);


  const user = useSelector(selectUser);

  const getUserInfo = async () => {
    try {
      const requestBody = {
        query: `
        query {
          getUserInfo {
            email
            coursesFinished {
              link
              header
              description
            }
            coursesStarted {
              link
              header
              description
            }
          }
          }
      `
      };
    
      const {data: {data: {getUserInfo}}} = await axios.post(`http://localhost:8081/graphql`, requestBody, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setCoursesFinished(getUserInfo.coursesFinished)
      setCoursesStarted(getUserInfo.coursesStarted)
    } catch (error) {
      console.log(error)
    }
    }

  return (
    <>
      {user && (
        <>
          <NavbarClean />
          <PageAccount>
            <Sidebar />
            <PageSection>
              <StartedCoursesCard coursesStarted={coursesStarted}/>
              <FinishedCoursesCard coursesFinished={coursesFinished}/>
            </PageSection>
          </PageAccount>
          <Footer />
        </>
      )}
    </>
  );
};

export default Courses;
