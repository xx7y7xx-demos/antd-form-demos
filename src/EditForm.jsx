import React from 'react'
import { Form, Input } from 'antd'
import debugModule from 'debug'

const debug = debugModule('antd-form-demos:EditForm')
const FormItem = Form.Item

class EditForm extends React.Component {
  render () {
    debug('render()', this.props)
    const { form } = this.props
    const { getFieldDecorator } = form
    return (
      <Form layout='vertical'>
        <FormItem label='foo'>
          {getFieldDecorator('foo', {})(<Input />)}
        </FormItem>
        <FormItem label='bar'>
          {getFieldDecorator('bar', {})(<Input />)}
        </FormItem>
        <FormItem label='zzz'>
          {getFieldDecorator('zzz', {})(<Input />)}
        </FormItem>
      </Form>
    )
  }
}

const WrappedEditForm = Form.create({
  mapPropsToFields (props) {
    debug('mapPropsToFields(props=?)', props)
    return {
      foo: Form.createFormField({
        value: 'foo'
      }),
      bar: Form.createFormField({
        value: ''
      })
    }
  }
})(EditForm)

export default WrappedEditForm
