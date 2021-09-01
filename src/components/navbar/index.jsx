import React from 'react'
import { Button, Dropdown, Menu, PageHeader } from 'antd';
import { LoginOutlined, UserOutlined } from '@ant-design/icons'
import Avatar from 'antd/lib/avatar/avatar';
import { Link } from 'react-router-dom';
export default function Index() {
    const menu = (
        // Drop down menu of the navbar
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="#">
                    <UserOutlined /> My Profile
                </a>
            </Menu.Item>
            <hr />
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="#">
                    <LoginOutlined /> Log oout
                </a>
            </Menu.Item>
        </Menu>
    );
    return (
        <>
            <div>
                <PageHeader
                    className="site-page-header"
                    title="ABC Management"
                    subTitle="User management system"
                    extra={[
                        <Link to='/'><Button key="1"><UserOutlined />Users</Button></Link>,
                        <Link to='/login'><Button key="3"><LoginOutlined />Login</Button></Link>,
                        <Dropdown overlay={menu} placement="bottomLeft">
                            <Avatar className='navavatar'
                                src={<img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            />
                        </Dropdown>
                    ]}
                />
            </div>
            {/* Add new user modal */}
        </>
    )
}
