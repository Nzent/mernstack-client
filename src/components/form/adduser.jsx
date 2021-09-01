import React, { useState } from 'react'
import { Form, Input, Button, DatePicker, Select, InputNumber, notification } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Option } from 'antd/lib/mentions';
import { useDispatch } from 'react-redux';
import { createUser } from '../../actions/users';


export default function FormComponent() {
    // redux store initialize 
    const dispatch = useDispatch()


    // loading state
    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm();
    //Submit successful function
    const onFinish = (values) => {
        setLoading(true)
        dispatch(createUser(values))
        form.resetFields()
    };

    // Submit failed function
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                {/* First name */}
                <Form.Item
                    key="1"
                    label="First Name"
                    name="first_name"
                    rules={[{ type: 'string', required: true, message: 'This field is required !' }]}>
                    <Input />
                </Form.Item>
                {/* Lats name */}
                <Form.Item
                    key="2"
                    label="Last Name"
                    name="last_name"
                    rules={[{ type: 'string', required: true, message: 'This field is required !' }]}>
                    <Input />
                </Form.Item>

                {/* Date of birth */}
                <Form.Item
                    key="3"
                    label="Date of birth"
                    name='dob'
                    rules={[{ type: 'date', required: true, message: 'This field is required !' }]}>
                    <DatePicker />
                </Form.Item>

                {/* Department */}
                <Form.Item
                    key="4"
                    label="Department"
                    name='department'
                    rules={[{ type: 'string', required: true, message: 'This field is required !' }]}>
                    <Input />
                </Form.Item>
                {/* email */}
                <Form.Item
                    key="5"
                    label="Email"
                    name='email'
                    rules={[{ type: 'email', required: true, message: 'This field is required !' }]}>
                    <Input />
                </Form.Item>
                {/* Phone */}
                <Form.Item
                    key="6"
                    label="Phone"
                    name='phone'
                    rules={[{ type: 'number', max: '10', min: '3', required: true, message: 'This field is required !' }]}>
                    <InputNumber />
                </Form.Item>
                {/* Address */}
                <Form.Item
                    key="7"
                    label="Address"
                    name='address'
                    rules={[{ type: 'string', required: true, message: 'This field is required !' }]}>
                    <Input.TextArea />
                </Form.Item>
                {/* Role */}
                <Form.Item
                    key="8"
                    label="Role"
                    name='role'
                    rules={[{ type: 'array', required: true, defaultField: 'employee', message: 'This field is required !' }]}
                >
                    <Select defaultValue='employee' mode='tags'>
                        <Option value="employee">Employee</Option>
                        <Option value="agent">Agent</Option>
                        <Option value="manager">Manager</Option>
                        <Option value="teamleader">Team leader</Option>
                    </Select>
                </Form.Item>
                <Form.Item key="10" wrapperCol={{ offset: 8, span: 16, }} style={{ textAlign: 'right' }}>
                    <Button type="primary" htmlType="submit" >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div >
    )
}
