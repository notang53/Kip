import React from "react";
import { useLocation } from "react-router-dom";
import StudentDashboard from "../../components/Dashboard/StudentDashBoard";

const StudentDashboardPage = () => {
  const { state } = useLocation();

  return (
    <StudentDashboard username={state?.username} />
  );
};

export default StudentDashboardPage;