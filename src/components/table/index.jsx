import React from 'react'
import { Table, Tag, Space } from 'antd';
const { Column, ColumnGroup } = Table;

export default function Index() {
    const data = [
        {
            key: '1',
            firstName: 'John',
            lastName: 'Brown',
            dob: '02/14/1996',
            department: 'Gampaha',
            email: 'sample@gmail.com',
            phone: '077123456',
            address: 'New York No. 1 Lake Park',
            role: ['Super Admin'],
        },
        {
            key: '2',
            firstName: 'John',
            lastName: 'Brown',
            dob: '02/14/1996',
            department: 'Gampaha',
            email: 'sample@gmail.com',
            phone: '077123456',
            address: 'New York No. 1 Lake Park',
            role: ['Super Admin'],
        },
        {
            key: '3',
            firstName: 'John',
            lastName: 'Brown',
            dob: '02/14/1996',
            department: 'Gampaha',
            email: 'sample@gmail.com',
            phone: '077123456',
            address: 'New York No. 1 Lake Park',
            role: ['Super Admin'],
        },
       
    ];
    return (
        <div>
            <Table dataSource={data} size='large' pagination={{pageSize:50}} bordered scroll={{ x:1000}}>
                {/* Name of the user */}
                <ColumnGroup title="Name">
                    <Column title="First Name" dataIndex="firstName" key="firstName" />
                    <Column title="Last Name" dataIndex="lastName" key="lastName" />
                </ColumnGroup>
                {/* DOB */}
                <Column title="DOB" dataIndex="dob" key="dob" />
                {/* Department */}
                <Column title="Department" dataIndex="department" key="department" />
                {/* Email */}
                <Column title="Email" dataIndex="email" key="email" />
                {/* Phone */}
                <Column title="Phone" dataIndex="phone" key="phone" />
                {/* Address */}
                <Column title="Address" dataIndex="address" key="address" />
                {/* Tags */}
                <Column
                    title="Role"
                    dataIndex="role"
                    key="1"
                    render={tags => (
                        <>
                            {tags.map(tag => (
                                <Tag color="red" key={tag}>
                                    {tag}
                                </Tag>
                            ))}
                        </>
                    )}
                />
                {/* Actions */}
                <Column
                    title="Action"
                    key="action"
                    render={() => (
                        <Space size="middle">
                            <a href='#'>Edit</a>
                            <a href='#'>Update</a>
                            <a href='#'>Delete</a>
                        </Space>
                    )}
                />
            </Table>,
        </div>
    )
}
