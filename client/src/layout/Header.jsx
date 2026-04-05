import React from 'react'
import { Dropdown, Button, Input, Avatar } from 'antd'
import { DownOutlined, SearchOutlined, BellOutlined } from '@ant-design/icons'
import { icons } from 'antd/es/image/PreviewGroup'

const Header = () => {
    const menuItem = [
        {
            label: '1st menu item',
            key: '1',
        },
        {
            label: '2nd menu item',
            key: '2',
        },
    ]

    return (
        <div className='flex items-center justify-between p-3'>
            <div className='flex gap-4 items-center'>
                <h2 className='text-white font-semibold'>Worcspace</h2>
                <Dropdown menu={{ items: menuItem, className: 'custom-menu' }} >
                    <Button style={{
                        backgroundColor: '#495892',
                        border: 'none',
                        outline: 'none',
                        borderRadius: '999px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                        icon={<DownOutlined />} iconPlacement='end'>Worcspace</Button>
                </Dropdown>
            </div>

            <div className='flex items-center flex-1 justify-center px-4'>
                <Input className="custom-input w-full max-w-md" style={{ backgroundColor: '#423c7a', border: 'none', outline: 'none', color: 'grey' }} prefix={<SearchOutlined />} placeholder='Search...' />
            </div>

            <div className='flex items-center gap-3'>
                <BellOutlined style={{ color: 'grey' }} />
                <Avatar style={{ backgroundColor: '#aface5', color: 'black', fontWeight: 'bold' }}>KG</Avatar>
            </div>
        </div>
    )
}

export default Header