import React from "react";
//COMPONENTS
import PageContainer from "../../Layouts/Pages/PageContainer";
import CardContainer from "../../Layouts/Pages/CardContainer";
import {
  CreateNewRevenueByDate,
  RevenueByDateFromDB,
  allRevenueByDateHeaders,
  submitRevenueByDateHeaders,
  RevenueByDateReducer,
} from "./components";
import { Table, TableHead, TableBody } from "../../components/General/Table";
import { ToggleElement } from "../../components/Settings/Forms";
import Loading from "../../components/General/Loading";
//FUNCTIONS
import { userContext } from "../../util/Context/userContext";
import {
  toggleRevenueByDate,
  renderRevenueByDateTable,
  createNewRevenueByDate,
  editRevenueByDate,
  deleteRevenueByDate,
} from "../../api/revenue";

const RevenueByDate = () => {
  //REDUCER
  const [state, dispatch] = React.useReducer(RevenueByDateReducer, {
    amount: "",
    expenseDate: "2020-01-01",
  });
  // SETUP STATE
  const [RevenueByDateDB, setRevenueByDateDB] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [submit, setSubmit] = React.useState(false);
  // USER CONTEXT
  const { revenueByDateSetting, timeZone } = React.useContext(userContext);
  const [toggleSetting, setToggleSetting] = React.useState(
    revenueByDateSetting
  );

  // TOGGLE DASHBOARD SETTING
  const handleToggle = async () => {
    await toggleRevenueByDate();
    setToggleSetting((prevToggle) => {
      return !prevToggle;
    });
  };

  // START CREATE NEW EXPENSE ------------------------
  const handleNewDateOrAmountChange = (inputName, value) => {
    dispatch({
      type: "UPDATE",
      [inputName]: value,
    });
  };
  const handleNewSubmit = async (event) => {
    event.preventDefault();
    await createNewRevenueByDate(state);
    dispatch({
      type: "RESET",
    });
    setSubmit((prevSubmit) => {
      return !prevSubmit;
    });
  };
  //END CREATE NEW EXPENSE ------------------------

  //START EDIT/DELETE EXISTING EXPENSE ------------------------
  const handleExistingAmountChange = (expenseID, value) => {
    setRevenueByDateDB((prevRevenueByDateDB) => {
      const index = prevRevenueByDateDB.findIndex((exp) => {
        return exp._id === expenseID;
      });
      prevRevenueByDateDB[index].amount = value * 1;
      return prevRevenueByDateDB;
    });
  };
  const handleEditSubmit = (expenseID, amount) => {
    editRevenueByDate(expenseID, amount);
  };
  const handleDeleteSubmit = (expenseID) => {
    deleteRevenueByDate(expenseID);
    setSubmit((prevSubmit) => {
      return !prevSubmit;
    });
  };
  //END EDIT/DELETE EXISTING EXPENSE ------------------------

  //LOAD TABLE DATA ------------------------
  React.useEffect(() => {
    renderRevenueByDateTable().then((data) => {
      setLoading(false);
      setRevenueByDateDB(data);
    });
  }, [submit]);

  if (loading) {
    return <Loading />;
  }

  return (
    <PageContainer pageTitle="Revenue By Date">
      <CardContainer>
        <Table>
          <TableHead headers={submitRevenueByDateHeaders} />
          <TableBody>
            <CreateNewRevenueByDate
              handleChange={handleNewDateOrAmountChange}
              handleSubmit={handleNewSubmit}
              state={state}
            />
          </TableBody>
        </Table>
        <br />
        <p>
          Each daily total will be included in the COGS amount located on the
          dashboard.
        </p>
        <hr />
        <ToggleElement checked={toggleSetting} onChange={handleToggle} />
      </CardContainer>
      <CardContainer>
        <Table>
          <TableHead headers={allRevenueByDateHeaders} />
          <TableBody>
            <RevenueByDateFromDB
              RevenueByDateDB={RevenueByDateDB}
              timeZone={timeZone}
              handleRevenueByDateChange={handleExistingAmountChange}
              handleRevenueByDateEdit={handleEditSubmit}
              handleRevenueByDateDelete={handleDeleteSubmit}
            />
          </TableBody>
        </Table>
      </CardContainer>
    </PageContainer>
  );
};

export default RevenueByDate;
