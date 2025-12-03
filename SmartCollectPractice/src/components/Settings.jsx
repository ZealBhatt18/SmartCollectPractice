import { useEffect, useState } from "react";
import { Accelerator } from "./Accelerator";
import ProfitRecovery from "./ProfitRecovery";
import Collections from "./Collections";

const Settings = () => {
  const [selectSettings, setSelectSettings] = useState("Accelerator");
  return (
    <>
      <div className="col-md-12">
        <div className="box box-primary">
          <div className="box-header">
            <h6>TSI Service Setup</h6>
          </div>
          <div className="box-body">
            <div className="row pb-4">
              <div className="col-md-4">
                <label className="pb-2">
                  <b> Use Service</b>
                </label>
                <b className="bg-gray dot">i</b>
                <select
                  name="service-selector"
                  className="form-control custom-select-arrow"
                >
                  <option value="Accelerator">Accelerator</option>
                  <option value="Profit">Profit Recovery</option>
                  <option value="Collections">Collections</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="pb-2">
                  <b>Archive After(Days)</b>{" "}
                </label>
                <b className="bg-gray dot">i</b>
                <input type="number" className="form-control" />
              </div>
              <div className="col-md-4">
                <label className="pb-2">
                  <b>TSI Payment Code</b>
                </label>
                <b className="bg-gray dot">i</b>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="tabs">
              <div className="row">
                <div className="col-md-12">
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <div
                        className={
                          selectSettings.toLowerCase() === "accelerator"
                            ? "nav-link cur active "
                            : "nav-link cur"
                        }
                        aria-current="page"
                        onClick={() => tabFN("Accelerator")}
                      >
                        Accelerator
                      </div>
                    </li>
                    <li className="nav-item">
                      <div
                        className={
                          selectSettings.toLowerCase() === "profit recovery"
                            ? "nav-link cur active "
                            : "nav-link cur"
                        }
                        aria-current="page"
                        onClick={() => tabFN("Profit Recovery")}
                      >
                        Profit Recovery
                      </div>
                    </li>
                    <li className="nav-item">
                      <div
                        className={
                          selectSettings.toLowerCase() === "collections"
                            ? "nav-link cur active "
                            : "nav-link cur"
                        }
                        aria-current="page"
                        onClick={() => tabFN("collections")}
                      >
                        Collections
                      </div>
                    </li>
                  </ul>
                </div>
                {selectSettings.toLowerCase() === "accelerator" && (
                  <div>
                    <Accelerator />
                  </div>
                )}
                {selectSettings.toLowerCase() === "profit recovery" && (
                  <div>
                    <ProfitRecovery />
                  </div>
                )}
                {selectSettings.toLowerCase() === "collections" && (
                  <div>
                    <Collections />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 m-2">
        <div className="box box-primary">
          <div className="box-header">
            <h6>
              <b>Client Details</b>
            </h6>
          </div>
          <div className="box-body">
            {/* <ClientDetails activeMenu={activeMenu} /> */}
          </div>
        </div>
      </div>
      <div className="save-btn text-end">
        <button
          style={{
            backgroundColor: "#3c8dbc",
            color: "white",
            width: "70px",
            border: "none",
            height: "35px",
            borderRadius: "4px",
          }}
          className="p-1"
        >
          Save
        </button>
      </div>
    </>
  );
};

export default Settings;
