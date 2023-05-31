import AdminPage from "../page/AdminPage";
import Auth from "../page/Auth";
import CoursPage from "../page/CoursPage";
import EducationPage from "../page/EducationPage";
import QuestionPage from "../page/QuestionPage";
import TestResultPage from "../page/TestResultPage";
import TestingPage from "../page/TestingPage";
import TopicTitlePage from "../page/TopicTitlePage";
import UserPage from "../page/UserPage";
import {
  ADMIN_ROUTE,
  COURS_ROUTE,
  EDUCATION_ROUTE,
  LOGIN_ROUTE,
  QUESTION_ROUTE,
  REGISTRATION_ROUTE,
  STATISTIC_ROUTE,
  TEMA_ROUTE,
  TESTING_ROUTE,
  USER_ROUTE,
} from "../utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: AdminPage,
  },
  {
    path: USER_ROUTE,
    Component: UserPage,
  },
  {
    path: COURS_ROUTE,
    Component: CoursPage,
  },
  {
    path: EDUCATION_ROUTE,
    Component: EducationPage,
  },
  {
    path: QUESTION_ROUTE,
    Component: QuestionPage,
  },
  {
    path: STATISTIC_ROUTE,
    Component: TestResultPage,
  },
  {
    path: TEMA_ROUTE,
    Component: TopicTitlePage,
  },
  {
    path: TESTING_ROUTE,
    Component: TestingPage,
  },
];

export const studentRoutes = [
  {
    path: USER_ROUTE,
    Component: UserPage,
  },
  {
    path: COURS_ROUTE,
    Component: CoursPage,
  },
  {
    path: EDUCATION_ROUTE,
    Component: EducationPage,
  },
  {
    path: QUESTION_ROUTE,
    Component: QuestionPage,
  },
  {
    path: STATISTIC_ROUTE,
    Component: TestResultPage,
  },
  {
    path: TEMA_ROUTE,
    Component: TopicTitlePage,
  },
  {
    path: TESTING_ROUTE,
    Component: TestingPage,
  },
];

export const publicRoutes = [
  {
    path: EDUCATION_ROUTE,
    Component: EducationPage,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  // {
  //   path: COURS_ROUTE,
  //   Component: CoursPage,
  // },
];
