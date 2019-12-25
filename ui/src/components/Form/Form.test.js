import React from "react";
import { shallow } from "enzyme";
import DynamicForm from "./index";
import { addNoteFields } from "../../constants";

describe("Form snapshot renders", () => {
  it("should render makeDonation form and fields correctly", () => {
    const component = shallow(<DynamicForm fields={addNoteFields} />);

    expect(component).toMatchSnapshot();
  });
});
