import React from "react";

export const Accelerator = () => {

  return (
    <div>
      <div className="row mb-4 mt-2">
        <div className="col-md-3">
          <label className="pb-2">
            <b>Define Past Due Period</b>
            <b className="bg-gray  dot">i</b>
          </label>
          <select name="Days" className="form-control custom-select-arrow">
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
            <input type="number" className="form-control"/>
            <span>Days</span>
          </div>
        </div>
        <div className="col-md-3">
          <label className="pb-2">
            <b> Show Balances Above</b>
            <b className="bg-gray dot">i</b>
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fa fa-usd" aria-hidden="true"></i>
            </span>
            <input type="number" className="form-control"/>
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
            <input type="number" className="form-control"/>
          </div>
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
