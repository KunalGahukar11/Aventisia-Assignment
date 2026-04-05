import React, { useState } from 'react'
import { RobotOutlined, BookOutlined, MacCommandOutlined, BankOutlined, ScheduleOutlined, BarcodeOutlined, ThunderboltOutlined, OpenAIFilled, CodeSandboxOutlined } from '@ant-design/icons'

const SideBar = () => {
    const [activeMenu, setActiveMenu] = useState('knowledge base');

    const sideBarMenuLists = [
        {
            title: "MY PROJECTS",
            key: "my project",
            subMenu: [
                {
                    label: "Agents",
                    key: 'agents',
                    icon: <RobotOutlined />
                },
                {
                    label: "Ai Models",
                    key: 'ai models',
                    icon: <OpenAIFilled />
                },
                {
                    label: "Library",
                    key: 'library',
                    icon: <BookOutlined />
                },
            ]
        },
        {
            title: "ORCHESTRATOR",
            key: "orchestrator",
            subMenu: [
                {
                    label: "Published",
                    key: 'published',
                    icon: <MacCommandOutlined />
                },
                {
                    label: "Queues",
                    key: 'queues',
                    icon: <ScheduleOutlined />
                },
                {
                    label: "Vault",
                    key: 'vault',
                    icon: <BankOutlined />
                },
                {
                    label: "Knowledge Base",
                    key: 'knowledge base',
                    icon: <CodeSandboxOutlined />
                },
                {
                    label: "Triggers",
                    key: 'triggers',
                    icon: <ThunderboltOutlined />
                },
            ]
        }
    ];

    return (
        <div>
            {
                sideBarMenuLists.map((item) => {
                    return (
                        <div key={item.key} className='flex flex-col gap-4 p-3'>
                            <h3 className='text-gray-400 font-medium text-sm'>{item.title}</h3>
                            {
                                item.subMenu?.length > 0 && (
                                    <ul>
                                        {
                                            item.subMenu.map((sub) => {
                                                return (
                                                    <li key={sub.key} className={`flex items-center gap-4 pl-3 my-5 ${activeMenu === sub.key ? "active-menu" : ""}`}>
                                                        {sub.icon && React.cloneElement(sub.icon, {
                                                            className: `sidebar-icon ${activeMenu === sub.key ? "active-icon" : ""}`
                                                        })}
                                                        <span className='text-sm font-normal'>{sub.label}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                )
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SideBar