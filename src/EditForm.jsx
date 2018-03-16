import React from "react";
import { Modal, Form, Checkbox } from "antd";
import debugModule from "debug";

import Wrapper from "./Wrapper";

const debug = debugModule("antd-form-demos:EditForm");
const FormItem = Form.Item;

const EditForm = Form.create({
  mapPropsToFields(props) {
    const formValues = {};
    formValues.foo = Form.createFormField({
      value: false
    });
    formValues.bar = Form.createFormField({
      value: false
    });
    return formValues;
  }
})(props => {
  debug("mapPropsToFields()()", props);
  const { onCancel, onSubmit, form } = props;
  const { getFieldDecorator } = form;
  return (
    <Modal
      className="afd-dialog"
      visible={true}
      title="Antd Form Demo Dialog"
      okText="Submit"
      onCancel={onCancel}
      onOk={onSubmit}
      width={800}
    >
      <Form layout="vertical">
        <FormItem className="afd-checkbox" label="">
          {getFieldDecorator("foo", {
            valuePropName: "checked"
          })(<Checkbox />)}
        </FormItem>
        <Wrapper getFieldDecorator={getFieldDecorator} />
      </Form>
    </Modal>
  );
});

export default EditForm;
