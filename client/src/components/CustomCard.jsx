import React from 'react'
import { Button, Card } from 'antd'
import { MoreOutlined } from '@ant-design/icons'

const CustomCard = ({ title, content, createdAt }) => {
    return (
        <Card title={title} extra={
            <MoreOutlined />
        }>
            <div className='text-gray-600'>
                {content}
            </div>

            <div className="mt-4 pt-2 border-t border-gray-200 text-xs text-gray-600">
                Created at: {createdAt}
            </div>
        </Card>
    )
}

export default CustomCard