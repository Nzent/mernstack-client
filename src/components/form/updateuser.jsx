import React from 'react'
import { Form, Input, Button, DatePicker, Select, InputNumber } from 'antd';
import { Option } from 'antd/lib/mentions';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../actions/users';
import moment from 'moment';
import { RetweetOutlined } from '@ant-design/icons';


export default function FormComponent({ currentId }) {
    // pull selected user data from api
    const user = useSelector((state) => currentId ? state.users.find((p) => p._id === currentId) : null);

    const dispatch = useDispatch()
    // Populate form values from id 
    const [form] = Form.useForm();


    // set form data to selected user details
    form.setFieldsValue({
        first_name: user.first_name,
        last_name: user.last_name,
        dob: moment(user.dob),
        department: user.department,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
    });


    //Submit successful function
    const onFinish = (values) => {

        if (currentId) dispatch(updateUser(currentId, values))
        form.resetFields()
        window.location.reload(false);//refresh page to new data
    };

    // Submit failed function
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <h1>Update user form</h1>
                {console.log('form', user)}
            </div>
            <Form
                form={form}
                // key={formData._id}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{}}
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
                {/* Submit */}
                <Form.Item key="10" wrapperCol={{ offset: 8, span: 16, }} style={{ textAlign: 'right' }}>
                    <Button type="primary" htmlType="submit" >
                        Update <RetweetOutlined />
                    </Button>
                </Form.Item>
            </Form>
        </div >
    )
}
