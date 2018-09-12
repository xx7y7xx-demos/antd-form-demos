import React, { Component } from "react";
import { Form, Input } from "antd";
import debugModule from "debug";

const debug = debugModule("antd-form-demos:PoiForm");
const FormItem = Form.Item;

class PoiForm extends Component {
  /**
   * @returns {boolean} Return true when the form fields of main_name and native name are both empty at the same time
   */
  isBothEmpty = () => {
    const { form } = this.props;
    const { main_name, native_name } = form.getFieldsValue();
    if (main_name === "" && native_name === "") {
      return true;
    }
    return false;
  };

  /**
   * To validate again a field is just to clear the last time 'error' status
   */
  validateAgain = fieldName => {
    const { form } = this.props;
    // Re-validate the field only if the last status is 'error', otherwise causing
    // infinite loop of: validate(A), validate(B), validate(A), ...
    if (form.getFieldError(fieldName) !== undefined) {
      // If not given the force:true option, the last 'error' status will not be cleard
      form.validateFields([fieldName], { force: true });
    }
  };

  mainNameValidator = (rule, value, callback) => {
    debug("main_name.validator(rule=?,value=?)", rule, value);
    if (this.isBothEmpty()) {
      callback("Main Name and Native Name should not empty at the same time");
      return;
    }

    this.validateAgain("native_name");
    callback();
  };

  nativeNameValidator = (rule, value, callback) => {
    debug("native_name.validator(rule=?,value=?)", rule, value);
    if (this.isBothEmpty()) {
      callback("Main Name and Native Name should not empty at the same time");
      return;
    }

    this.validateAgain("main_name");
    callback();
  };

  render() {
    debug("render()", this.props);
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form layout="vertical">
        <FormItem label="Main Name">
          {getFieldDecorator("main_name", {
            rules: [{ validator: this.mainNameValidator }]
          })(<Input />)}
        </FormItem>
        <FormItem label="Native Name">
          {getFieldDecorator("native_name", {
            rules: [{ validator: this.nativeNameValidator }]
          })(<Input />)}
        </FormItem>
        <FormItem label="Address">
          {getFieldDecorator("address", {})(<Input />)}
        </FormItem>
      </Form>
    );
  }
}

const WrappedEditForm = Form.create({
  mapPropsToFields(props) {
    debug("mapPropsToFields(props=?)", props);
    return {
      main_name: Form.createFormField({ value: "Vivo" }),
      native_name: Form.createFormField({ value: "" })
    };
  }
})(PoiForm);

export default WrappedEditForm;
