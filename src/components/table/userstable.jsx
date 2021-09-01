import React, { useState } from 'react'
import { Table, Tag, Space, Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import UpdateUserForm from '../form/updateuser';
import { ExclamationCircleOutlined } from '@ant-design/icons'
import confirm from 'antd/lib/modal/confirm';
import { useSelector } from 'react-redux';
const { Column, ColumnGroup } = Table;

export default function Index() {


    const [currentId, setCurrentID] = useState(null)
    // Edit user model visibility
    const [visible, setVisible] = useState(false);

    // initialize redux store
    const users = useSelector((state) => state.users);

    // function for edit button on the table
    function updateUser(e) {
        setVisible(true)
        setCurrentID(e)
    }

    function showDeleteConfirm(e) {
        confirm({
            title: `Are you sure delete this user? id: ${currentId}`,
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
                <Table dataSource={users} rowKey={users => users._id} size='large' pagination={{ pageSize: 50 }} bordered scroll={{ x: 1000 }}>

                    {/* Name of the user */}
                    <ColumnGroup title="Name">
                        <Column title="First Name" dataIndex="first_name" key="first_name" sorter={{ compare: (a, b) => a.first_name.length - b.first_name.length }} />
                        <Column title="Last Name" dataIndex="last_name" key="last_name" sorter={{ compare: (a, b) => a.last_name.length - b.last_name.length }} />
                    </ColumnGroup>
                    {/* DOB */}
                    <Column title="DOB" dataIndex="dob" key="dob" sorter={{ compare: (a, b) => a.dob - b.dob, multiple: 3 }} />
                    {/* Department */}
                    <Column title="Department" dataIndex="department" key="department" sorter={{ compare: (a, b) => a.department - b.department }} />
                    {/* Email */}
                    <Column title="Email" dataIndex="email" key="email" sorter={{ compare: (a, b) => a.email - b.email }}/>
                    {/* Phone */}
                    <Column title="Phone" dataIndex="phone" key="phone" sorter={{ compare: (a, b) => a.phone - b.phone }}/>
                    {/* Address */}
                    <Column title="Address" dataIndex="address" key="address" sorter={{ compare: (a, b) => a.address - b.address }}/>
                    {/* Tags */}
                    <Column
                        title="Role"
                        dataIndex="role"
                        key="role"
                        render={tags => (
                            <>
                                {tags.map(tag => (
                                    <Tag color="red" key='role'>
                                        {tag}
                                    </Tag>
                                ))}
                            </>
                        )}
                    />
                    {/* Actions */}
                    <Column
                        title="Action"
                        key="_id"
                        dataIndex="_id"
                        render={(_id) => (
                            <Space size="middle" key={_id}>
                                <Button href='#' onClick={() => updateUser(_id)} >Update</Button>
                                <a href='#' onClick={showDeleteConfirm}>Delete</a>
                            </Space>
                        )}
                    />
                </Table>,
            </div>

            {/* Update model */}
            <Modal
                title="Update user"
                centered
                visible={visible}
                // onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                footer=""
            >
                <UpdateUserForm currentId={currentId} />
            </Modal>
        </>
    )
}
