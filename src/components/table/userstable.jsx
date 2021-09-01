import React, { useState } from 'react'
import { Table, Tag, Space, Input, Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import FormComponet from '../form/adduser';
import { ExclamationCircleOutlined, SearchOutlined } from '@ant-design/icons'
import confirm from 'antd/lib/modal/confirm';
import { useSelector } from 'react-redux';
const { Column, ColumnGroup } = Table;

export default function Index() {

    // Edit user model visibility
    const [visible, setVisible] = useState(false);

    // initialize redux store
    const users = useSelector((state) => state.users);

    // function for edit button on the table
    function useredit(e) {
        setVisible(true)
        alert(e)
    }

    function showDeleteConfirm(e) {
        confirm({
            title: 'Are you sure delete this user?',
            icon: <ExclamationCircleOutlined />,
            content: 'This action is irreversible',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            type: 'danger',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        })
    }
    return (
        <>
            <div>
                <Table dataSource={users} size='large' pagination={{ pageSize: 50 }} bordered scroll={{ x: 1000 }}>
                    {/* Name of the user */}
                    <ColumnGroup title="Name">
                        <Column title="First Name" dataIndex="first_name" key="firstName" sorter={{ compare: (a, b) => a.first_name.length - b.first_name.length }} />
                        <Column title="Last Name" dataIndex="last_name" key="lastName" sorter={{ compare: (a, b) => a.last_name.length - b.last_name.length }} />
                    </ColumnGroup>
                    {/* DOB */}
                    <Column title="DOB" dataIndex="dob" key="dob" sorter={{ compare: (a, b) => a.dob - b.dob, multiple: 3 }} />
                    {/* Department */}
                    <Column title="Department" dataIndex="department" key="department" sorter={{ compare: (a, b) => a.department - b.department }} />
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
                                <a href='#' onClick={(e) => useredit(e)}>Edit</a>
                                <a href='#' onClick={showDeleteConfirm}>Delete</a>
                            </Space>
                        )}
                    />
                </Table>,
            </div>

            {/* Edit model */}
            <Modal
                title="Edit user"
                centered
                visible={visible}
                // onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                footer=""
            >
                <FormComponet />
            </Modal>
        </>
    )
}
