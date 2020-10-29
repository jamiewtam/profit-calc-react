import React from "react";
//COMPONENTS
import PageContainer from "../../../Layouts/Pages/PageContainer";
import CardContainer from "../../../Layouts/Pages/CardContainer";
import { SearchableTable } from "../../../components/General/SearchableTable";
import { ButtonSuccess } from "../../../components/General/Buttons";
import { ToggleElement } from "../../../components/Settings/Forms";
// FUNCTIONS
import { columns, formatCustomCountryExp } from "./components";
import { userContext } from "../../../util/Context/userContext";
import {
  toggleCustomCountryExp,
  updateCustomCountryExp,
} from "../../../api/expenses";

const CustomCountryExpense = () => {
  const {
    customCountryExpSetting,
    customCountryExp,
    customCountryProductCost,
  } = React.useContext(userContext);

  const [customCountryExpDB, setCustomCountryExpDB] = React.useState([]);
  const [customCountryExpToggle, setCustomCountryExpToggle] = React.useState(
    customCountryExpSetting
  );

  const handleCustomCountryExpToggle = async () => {
    await toggleCustomCountryExp();
    setCustomCountryExpToggle((prevToggle) => {
      return !prevToggle;
    });
  };

  const handleSubmit = (event, countryName) => {
    event.preventDefault();
    const countryItem = customCountryExpDB.find((country) => {
      return country.countryName === countryName;
    });
    const newCOGS = parseFloat(countryItem.cost);
    const newShippingCost = parseFloat(countryItem.shipping);
    updateCustomCountryExp(countryName, newCOGS, newShippingCost);
  };

  const handleChange = (type, newAmount, countryName) => {
    console.log(type, newAmount, countryName);
    setCustomCountryExpDB((prevCustomCountryExp) => {
      const countryToUpdateIndex = prevCustomCountryExp.findIndex((country) => {
        return country.countryName === countryName;
      });

      prevCustomCountryExp[countryToUpdateIndex][type] = newAmount;

      return prevCustomCountryExp;
    });
  };

  customCountryExpDB.forEach((element) => {
    element.costInput = (
      <input
        style={{ maxWidth: "100%" }}
        defaultValue={element.cost}
        onChange={(event) =>
          handleChange(
            "cost",
            event.target.value,
            element.countryName,
            handleChange
          )
        }
      />
    );

    element.shippingInput = (
      <input
        style={{ maxWidth: "100%" }}
        defaultValue={element.shipping}
        onChange={(event) =>
          handleChange(
            "shipping",
            event.target.value,
            element.countryName,
            handleChange
          )
        }
      />
    );
    element.submit = (
      <ButtonSuccess
        style={{ maxWidth: "100%" }}
        onClick={(event) => handleSubmit(event, element.countryName)}
        title="Save"
      />
    );
  });

  React.useEffect(() => {
    const shippingCosts = JSON.parse(customCountryExp);
    const productCosts = JSON.parse(customCountryProductCost);
    setCustomCountryExpDB(formatCustomCountryExp(productCosts, shippingCosts));
  }, [setCustomCountryExpDB, customCountryExp, customCountryProductCost]);

  return (
    <PageContainer>
      <CardContainer>
        <h1>Custom Product & Shipping Costs By Country</h1>
        <div style={{ float: "right" }}>
          <ToggleElement
            checked={customCountryExpToggle}
            onChange={handleCustomCountryExpToggle}
          />
        </div>
        <SearchableTable columns={columns} products={customCountryExpDB} />
      </CardContainer>
    </PageContainer>
  );
};

export default CustomCountryExpense;
