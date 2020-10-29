import React from "react";
//COMPONENTS
import PageContainer from "../../../../Layouts/Pages/PageContainer";
import CardContainer from "../../../../Layouts/Pages/CardContainer";
import {
  CreateNewCOGSByDate,
  COGSByDateFromDB,
  allCOGSByDateHeaders,
  submitCOGSByDateHeaders,
  COGSByDateReducer,
} from "./components";
import {
  Table,
  TableHead,
  TableBody,
} from "../../../../components/General/Table";
import { ToggleElement } from "../../../../components/Settings/Forms";
import Loading from "../../../../components/General/Loading";
//FUNCTIONS
import { userContext } from "../../../../util/Context/userContext";
import {
  updateCOGSByDateToggle,
  renderCOGSByDateTable,
  createCOGSByDateItem,
  editCOGSByDateItem,
  deleteCOGSByDateItem,
} from "../../../../api/expenses";

const COGSByDate = () => {
  //REDUCER
  const [state, dispatch] = React.useReducer(COGSByDateReducer, {
    amount: "",
    expenseDate: "2020-01-01",
  });
  // SETUP STATE
  const [COGSByDateDB, setCOGSByDateDB] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [submit, setSubmit] = React.useState(false);
  // USER CONTEXT
  const { cogsByDateSetting, timeZone } = React.useContext(userContext);
  const [toggleSetting, setToggleSetting] = React.useState(cogsByDateSetting);

  // TOGGLE DASHBOARD SETTING
  const handleToggle = async () => {
    await updateCOGSByDateToggle();
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
    await createCOGSByDateItem(state);
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
    setCOGSByDateDB((prevCOGSByDateDB) => {
      const index = prevCOGSByDateDB.findIndex((exp) => {
        return exp._id === expenseID;
      });
      prevCOGSByDateDB[index].amount = value * 1;
      return prevCOGSByDateDB;
    });
  };
  const handleEditSubmit = (expenseID, amount) => {
    editCOGSByDateItem(expenseID, amount);
  };
  const handleDeleteSubmit = (expenseID) => {
    deleteCOGSByDateItem(expenseID);
    setSubmit((prevSubmit) => {
      return !prevSubmit;
    });
  };
  //END EDIT/DELETE EXISTING EXPENSE ------------------------

  //LOAD TABLE DATA ------------------------
  React.useEffect(() => {
    renderCOGSByDateTable().then((data) => {
      setLoading(false);
      setCOGSByDateDB(data);
    });
  }, [submit]);

  if (loading) {
    return <Loading />;
  }

  return (
    <PageContainer pageTitle="COGS By Date">
      <CardContainer>
        <Table>
          <TableHead headers={submitCOGSByDateHeaders} />
          <TableBody>
            <CreateNewCOGSByDate
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
          <TableHead headers={allCOGSByDateHeaders} />
          <TableBody>
            <COGSByDateFromDB
              COGSByDateDB={COGSByDateDB}
              timeZone={timeZone}
              handleCOGSByDateChange={handleExistingAmountChange}
              handleCOGSByDateEdit={handleEditSubmit}
              handleCOGSByDateDelete={handleDeleteSubmit}
            />
          </TableBody>
        </Table>
      </CardContainer>
    </PageContainer>
  );
};

export default COGSByDate;
