import React from "react";
import SidebarBtnElement from "./SidebarBtnElement";
import { FormElements } from "./FormElements";

const FormElementsSidebar = () => {
  return (
    <div>
      {" "}
      Element
      <SidebarBtnElement formElement={FormElements.TextField} />
    </div>
  );
};

export default FormElementsSidebar;
