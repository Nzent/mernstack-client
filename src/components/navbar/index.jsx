import React from 'react'
import { Button, Dropdown, Menu, PageHeader } from 'antd';
import { LoginOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons'
import Avatar from 'antd/lib/avatar/avatar';
export default function Index() {

    const menu = (
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
                        <Button key="2"><UserAddOutlined />Add user</Button>,
                        <Dropdown overlay={menu} placement="bottomLeft">
                            <Avatar className='navavatar'
                                src={<img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            />
                        </Dropdown>
                    ]}
                />
            </div>
        </>
    )
}
