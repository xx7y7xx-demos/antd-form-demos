import React from "react";
import { Form, Checkbox } from "antd";
import debugModule from "debug";

const debug = debugModule("antd-form-demos:Wrapper");
const FormItem = Form.Item;

export class Wrapper extends React.Component {
  render() {
    debug("render()", this.props);
    return (
      <div>
        <FormItem className="afd-checkbox" label="">
          {this.props.getFieldDecorator("bar", {
            valuePropName: "checked"
          })(<Checkbox />)}
        </FormItem>
      </div>
    );
  }
}

export default Wrapper;
