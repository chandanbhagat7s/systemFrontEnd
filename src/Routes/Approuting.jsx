import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "../Components/Login";
import BranchDash from "../Layout/Dashboards/BranchDash";
import DeniedAccess from "../Components/DeniedAccess";
import Authentication from "../Components/Authenticater";
import CreateAccounts from "../Components/BranchComponents/CreateAccounts";
import InfoCollectorDash from "../Layout/Dashboards/InfoCollectorDash";
import CollectorFillInformation from "../Components/BranchComponents/Cpr/CollectorFillInformation";
import InfoCards from "../Components/BranchComponents/Cpr/InfoCards";
import InfoConfirmer from "../Layout/Dashboards/InfoConfirmer";
import ApproveInformation from "../Components/BranchComponents/Cpr/ApproveInformation";
import AccountentDash from "../Layout/Dashboards/AccountentDash";
import AdminDash from "../Layout/Dashboards/AdminDash";
import TeacherDash from "../Layout/Dashboards/TeachersDash";
import HeadOfTeacherDash from "../Layout/Dashboards/HeadOfTeacherDash";

export default function Approuting() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />}></Route>

      <Route element={<Authentication allow={["ADMIN"]} />}>
        <Route path="/dashboard/main-admin" element={<AdminDash />}></Route>
      </Route>

      <Route element={<Authentication allow={["BRANCH_ADMIN"]} />}>
        <Route
          path="/dashboard/branch-admin"
          element={<BranchDash></BranchDash>}
        ></Route>
      </Route>
      <Route element={<Authentication allow={["TEACHER"]} />}>
        <Route path="/dashboard/teacher" element={<TeacherDash />}></Route>
      </Route>
      <Route element={<Authentication allow={["TEACHERS_HEAD"]} />}>
        <Route
          path="/dashboard/teachers-head"
          element={<HeadOfTeacherDash />}
        ></Route>
      </Route>

      <Route element={<Authentication allow={["CPR_COLLECTOR"]} />}>
        <Route
          path="/dashboard/infor-collector"
          element={<InfoCollectorDash />}
        ></Route>
      </Route>

      <Route element={<Authentication allow={["CPR_CONFIRMER"]} />}>
        <Route
          path="/dashboard/admission-confirmer"
          element={<InfoConfirmer></InfoConfirmer>}
        ></Route>
      </Route>
      <Route element={<Authentication allow={["CPR_ACCOUNTENT"]} />}>
        <Route
          path="/dashboard/accountent"
          element={
            <AccountentDash>
              <>done</>
            </AccountentDash>
          }
        ></Route>
      </Route>

      <Route path="/denide" element={<DeniedAccess />}></Route>
    </Routes>
  );
}
