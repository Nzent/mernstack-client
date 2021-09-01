import React from 'react'
import { Button, Card, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.css'
import Checkbox from 'antd/lib/checkbox/Checkbox';
export default function Index() {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };



    return (
        <div className='login-container'>

            <Card title="Login to ABC Management" bordered={false} className='login-card' cover={
                <img
                    alt="login"
                    src="https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                />
            }>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        rules={[{ required: true, type: 'email', message: 'Please input your Email!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="example@mail.com" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item style={{textAlign:'right'}}>
                        <Button style={{marginRight:'5px'}}>register now!</Button>
                        or
                        <Button style={{marginLeft:'5px'}} type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </Card>

        </div>
    )
}
