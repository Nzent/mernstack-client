import { Button } from 'antd'
import Title from 'antd/lib/typography/Title'
import React, { useState } from 'react'
import UsersTable from '../components/table/userstable'
import { UserAddOutlined } from '@ant-design/icons'
import FormComponent from '../components/form/adduser'
import Modal from 'antd/lib/modal/Modal'
export default function Home() {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <div className='page-title'>
                <Title level={2}>Users table</Title>
            </div>
            <div className='table-head'>
                <Button key="1" onClick={() => setVisible(true)}><UserAddOutlined />Add new user</Button>
            </div>
            <UsersTable />
            {/* Add user model */}
            <Modal
                title="Add new user"
                centered
                visible={visible}
                onCancel={() => setVisible(false)}
                footer="" >
                <FormComponent />
            </Modal>
        </>
    )
}
