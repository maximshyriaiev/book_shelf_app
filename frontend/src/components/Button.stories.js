import React from 'react';
import Button from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        label: { control: 'text' },
        onClick: { action: 'clicked' },
    },
};

export const Default = {
    args: {
        label: 'Натисни мене',
    },
};

export const LargeButton = {
    args: {
        label: 'Велика кнопка',
    },
    parameters: {
    },
};

export const WithCustomStyle = {
    args: {
        label: 'Стильована кнопка',
    },
    render: (args) => (
        <Button
            {...args}
            style={{
                backgroundColor: '#28a745',
                fontSize: '18px',
                padding: '14px 28px',
            }}
        />
    ),
};