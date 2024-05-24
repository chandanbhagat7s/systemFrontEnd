import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "../Components/Login";
import BranchDash from "../Layout/Dashboards/BranchDash";
import DeniedAccess from "../Components/DeniedAccess";
import Authentication from "../Components/Authenticater";
import CreateAccounts from "../Components/BranchComponents/CreateAccounts";
import InfoCollectorDash from "../Layout/Dashboards/InfoCollectorDash";
import CollectorFillInformation from "../Components/BranchComponents/CollectorFillInformation";

export default function Approuting() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />}></Route>

      <Route element={<Authentication allow={["BRANCH_ADMIN"]} />}>
        <Route
          path="/dashboard/branch-admin"
          element={
            <BranchDash>
              <CreateAccounts />
            </BranchDash>
          }
        ></Route>
      </Route>

      <Route element={<Authentication allow={["CPR_COLLECTOR"]} />}>
        <Route
          path="/dashboard/infor-collector"
          element={<InfoCollectorDash />}
        ></Route>
        <Route
          path="/dashboard/infor-collector/fill-new-information"
          element={
            <InfoCollectorDash>
              <CollectorFillInformation />
            </InfoCollectorDash>
          }
        ></Route>
      </Route>
      <Route element={<Authentication allow={["CPR_CONFIRMER"]} />}>
        <Route
          path="/dashboard/branch-admin"
          element={
            <BranchDash>
              <CreateAccounts />
            </BranchDash>
          }
        ></Route>
      </Route>
      <Route element={<Authentication allow={["CPR_ACCOUNTENT"]} />}>
        <Route
          path="/dashboard/infor-collector"
          element={
            <BranchDash>
              <InfoCollectorDash />
            </BranchDash>
          }
        ></Route>
      </Route>

      <Route path="/denide" element={<DeniedAccess />}></Route>
    </Routes>
  );
}
