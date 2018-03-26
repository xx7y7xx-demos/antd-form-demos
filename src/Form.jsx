import React from "react";
import { Form, Input } from "antd";
import debugModule from "debug";

const debug = debugModule("antd-form-demos:Form");
const FormItem = Form.Item;

const DelaySearchForm = Form.create()(props => {
  debug("mapPropsToFields()()", props);
  const { getFieldDecorator } = props.form;
  return (
    <Form>
      <FormItem className="afd-keywords" label="Keywords">
        {getFieldDecorator("keywords", {})(<Input />)}
      </FormItem>
    </Form>
  );
});

export default DelaySearchForm;
