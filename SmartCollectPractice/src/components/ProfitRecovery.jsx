import React from "react";

const ProfitRecovery = ({show_balance_above,maximum_balance, do_not_show_older_than_days,past_due}) => {

  console.log(past_due);
  
  return (
    <div>
      <div className="row mb-4 mt-2">
        <div className="col-md-3">
          <label className="pb-2">
            <b>Define Past Due Period</b>
            <b className="bg-gray  dot">i</b>
          </label>
          <select name="days" className="form-control custom-select-arrow" defaultValue={past_due}>
            <option value="30">30 Days</option>
            <option value="60">60 Days</option>
            <option value="90">90 Days</option>
          </select>
        </div>
        <div className="col-md-3">
          <label className="pb-2">
            <b>Do Not Show Charges Older than</b>
            <b className="bg-gray  dot">i</b>
          </label>
          <div className="d-flex align-items-center gap-2">
            <input
              type="checkbox"
              className="form-check-input me-2"
              id="include-all-charges"
              style={{
                width: "1.6em",
                height: "1.6em",
                border: "1px solid gray",
              }}
            />
            <input type="number" className="form-control" value={do_not_show_older_than_days}/>
            <span>Days</span>
          </div>
        </div>

        <div className="col-md-3">
          <label className="pb-2">
            <b> Show Balances Above</b>
            <b className="bg-gray  dot">i</b>
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fa fa-usd" aria-hidden="true"></i>
            </span>
            <input type="number" className="form-control" value={show_balance_above}/>
          </div>
        </div>
        <div className="col-md-3">
          <label className="pb-2">
            <b>Maximum Balance</b>
            <b className="bg-gray  dot">i</b>
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fa fa-usd" aria-hidden="true"></i>
            </span>
            <input type="number" className="form-control" value={maximum_balance}/>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <label className="pb-2">
            <b>Service Code</b>
            <b className="bg-gray  dot">i</b>
          </label>
          <select
            name="service-code-selector"
            className="form-control mb-4 custom-select-arrow"
          >
            <option value="Accelerator">Diplomatic</option>
            <option value="Profit">Intensive</option>
            <option value="Collections">Bad Check</option>
          </select>
        </div>
        <div className="col-md-3">
          <label className="pb-2">
            <b>PIF Code</b>
            <b className="bg-gray  dot">i</b>
          </label>
          <select
            name="pif-code-selector"
            className="form-control mb-4 custom-select-arrow"
          >
            <option value="Profit">Paid In Full</option>
            <option value="Accelerator">
              Paid In full Send Thank You letter
            </option>
          </select>
        </div>
      </div>
      <div className="row">
        <label>
          <input
            type="checkbox"
            className="form-check-input me-2"
            id="include-all-charges"
            defaultChecked="true"
            style={{
              width: "1.3em",
              height: "1.3em",
              border: "1px solid gray",
            }}
          />
          <b>Include All Charges If At Least One Charge Is Past Due</b>
          <b className="bg-gray  dot">i</b>
        </label>
      </div>
    </div>
  );
};

export default ProfitRecovery;
