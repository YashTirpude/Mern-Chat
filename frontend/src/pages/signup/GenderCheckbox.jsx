import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="cursor-pointer gap-2 label">
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-info border-slate-700"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="cursor-pointer gap-2 label">
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-info border-slate-700"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;