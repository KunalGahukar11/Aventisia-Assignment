import { PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Drawer, Input, Pagination } from 'antd'
import React, { useState } from 'react'
import CustomCard from '../components/CustomCard'
import CustomDrawer from '../components/CustomDrawer'

const KnowledgeBase = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [cardList, setCardList] = useState([
        {
            title: "test",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, architecto quam laboriosam illo rerum debitis, corrupti vel, adipisci ad nesciunt omnis sequi earum qui tenetur optio soluta illum laudantium quis.",
            createdAt: "05/04/2026"
        },
        {
            title: "test",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, architecto quam laboriosam illo rerum debitis, corrupti vel, adipisci ad nesciunt omnis sequi earum qui tenetur optio soluta illum laudantium quis.",
            createdAt: "05/04/2026"
        },
        {
            title: "test",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, architecto quam laboriosam illo rerum debitis, corrupti vel, adipisci ad nesciunt omnis sequi earum qui tenetur optio soluta illum laudantium quis.",
            createdAt: "05/04/2026"
        },
    ]);

    const addCard = (newCard) => {
        setCardList((prev) => [newCard, ...prev]);
    };

    const closeDrawer = () => {
        setOpenDrawer(false);
    };

    return (
        <div className='flex flex-col h-full'>
            <header className='flex justify-between items-center p-2  w-11/12 mx-auto my-4'>
                <h3 className='font-bold text-2xl'>Knowledge Base</h3>
                <div className='flex gap-2'>
                    <Input prefix={<SearchOutlined />} placeholder='Search...' style={{ color: 'grey' }} />
                    <Button style={{
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        border: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                    }} icon={<PlusOutlined />}
                        onClick={() => setOpenDrawer(true)}>Create New</Button>
                </div>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 overflow-y-auto flex-1 hide-scrollbar'>
                {
                    cardList.map((card, index) => (
                        <CustomCard title={card.title}
                            content={card.content}
                            createdAt={card.createdAt}>
                        </CustomCard>
                    ))
                }
            </main>
            <footer className="w-11/12 mx-auto mt-5 py-3 flex justify-end border-t border-gray-300">
                <Pagination align='end'></Pagination>
            </footer>

            <CustomDrawer openDrawer={openDrawer} closeDrawer={closeDrawer} addCard={addCard}></CustomDrawer>
        </div>
    )
}

export default KnowledgeBase