import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const TimeSheet=lazy(()=>import("../container/TimeSheet"));
const PrivateRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="">
         <Route
          path="/timesheet"
          element={
            <Suspense>
              <TimeSheet/>
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default PrivateRoute;
