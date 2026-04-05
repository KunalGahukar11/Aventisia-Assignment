import { Drawer, Input, Button } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react';

const CustomDrawer = ({ openDrawer, closeDrawer, addCard }) => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');

    const handleCreate = () => {
        if (!name.trim()) return;

        const newCard = {
            title: name,
            content: desc,
            createdAt: new Date().toLocaleDateString()
        };

        addCard(newCard);

        setName('');
        setDesc('');

        closeDrawer();
    };

    return (
        <Drawer
            title="Create New Knowledge Base"
            placement="right"
            onClose={closeDrawer}
            open={openDrawer}
            width={400}
            bodyStyle={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                paddingBottom: '80px'
            }}
        >

            <div className="flex flex-col gap-4">
                <div>
                    <label className="block mb-1">Name</label>
                    <Input
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block mb-1">Description</label>
                    <TextArea
                        rows={4}
                        placeholder="Enter description"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>
            </div>

            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: '100%',
                    padding: '12px 16px',
                    borderTop: '1px solid #f0f0f0',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    background: '#fff'
                }}
            >
                <Button
                    type="primary"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                    onClick={handleCreate}
                >
                    Create
                </Button>
            </div>
        </Drawer>
    );
};

export default CustomDrawer;