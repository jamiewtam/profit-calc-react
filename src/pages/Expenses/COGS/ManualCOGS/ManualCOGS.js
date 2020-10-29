import React from "react";

//COMPONENTS
import { SearchableTable } from "../../../../components/General/SearchableTable";
import PageContainer from "../../../../Layouts/Pages/PageContainer";
import CardContainer from "../../../../Layouts/Pages/CardContainer";
import Loading from "../../../../components/General/Loading";
import {
  ButtonSuccess,
  ButtonSync,
} from "../../../../components/General/Buttons";
import { ToggleElement } from "../../../../components/Settings/Forms";
//FUNCTION
import {
  getAllManualCOGS,
  updateManualCOGSItem,
  syncAllProductsRedis,
  syncAllShopifyCostPerItemRedis,
  toggleManualCOGS,
} from "../../../../api/expenses";
import { columns, formatManualCOGS } from "./components";
import { userContext } from "../../../../util/Context/userContext";

const ManualCOGS = () => {
  const { cogsSetting } = React.useContext(userContext);

  const [manualCOGSTable, setManualCOGSTable] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [cogsToggle, setCogsToggle] = React.useState(cogsSetting);

  const handleSubmit = (event, productId) => {
    event.preventDefault();
    const COGSItem = manualCOGSTable.find((cogs) => {
      return cogs.id === productId;
    });

    const newCOGS = parseFloat(COGSItem.cogsValue);
    const newShippingCost = parseFloat(COGSItem.shippingCostValue);
    const productID = COGSItem.variantID;
    updateManualCOGSItem(productID, newCOGS, newShippingCost);
  };

  const handleChange = (type, newAmount, productId) => {
    setManualCOGSTable((prevManualCOGSTable) => {
      const cogsToUpdateIndex = prevManualCOGSTable.findIndex((cogs) => {
        return cogs.id === productId;
      });

      prevManualCOGSTable[cogsToUpdateIndex][type] = newAmount;

      return prevManualCOGSTable;
    });
  };

  const handleSyncAllProducts = (event) => {
    event.preventDefault();
    syncAllProductsRedis();
  };

  const handleSyncAllCostPerItem = (event) => {
    event.preventDefault();
    syncAllShopifyCostPerItemRedis();
  };

  const handleCOGSToggle = async () => {
    await toggleManualCOGS();
    setCogsToggle((prevToggle) => {
      return !prevToggle;
    });
  };

  manualCOGSTable.forEach((element) => {
    element.cogs = (
      <input
        style={{ maxWidth: "100%" }}
        defaultValue={element.cogsValue}
        onChange={(event) =>
          handleChange(
            "cogsValue",
            event.target.value,
            element.id,
            handleChange
          )
        }
      />
    );

    element.shippingCost = (
      <input
        style={{ maxWidth: "100%" }}
        defaultValue={element.shippingCostValue}
        onChange={(event) =>
          handleChange(
            "shippingCostValue",
            event.target.value,
            element.id,
            handleChange
          )
        }
      />
    );
    element.submit = (
      <ButtonSuccess
        style={{ maxWidth: "100%" }}
        onClick={(event) => handleSubmit(event, element.id)}
        title="Save"
      />
    );
  });

  React.useEffect(() => {
    getAllManualCOGS().then((data) => {
      setManualCOGSTable(formatManualCOGS(data));
      setLoading(false);
    });
  }, [setManualCOGSTable]);

  if (loading) {
    return <Loading />;
  }

  return (
    <PageContainer>
      <CardContainer>
        <div style={{ float: "right" }}>
          <ToggleElement checked={cogsToggle} onChange={handleCOGSToggle} />
        </div>
        <h1 className="mb-2" id="cogs-title">
          Cost of Goods Sold
        </h1>
        <p>
          The below must be re-synced to account for new products or changed
          Shopify "Cost per Items".
        </p>
        <ButtonSync
          buttonClass="btn-success"
          title="Sync All Products from Shopify"
          onClick={handleSyncAllProducts}
        />
        <ButtonSync
          buttonClass="btn-primary"
          title="Sync Cost per item from Shopify"
          style={{ marginLeft: "10px" }}
          onClick={handleSyncAllCostPerItem}
        />
        <br />
        <br />
        <SearchableTable columns={columns} products={manualCOGSTable} />
      </CardContainer>
    </PageContainer>
  );
};

export default ManualCOGS;
