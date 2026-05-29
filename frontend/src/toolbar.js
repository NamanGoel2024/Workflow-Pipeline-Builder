// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{
                        padding: '16px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '12px',
                        background: '#ffffff',
                        borderBottom: '1px solid #e2e8f0',
                    }}
                    >
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='api' label='API' />
                <DraggableNode type='filter' label='Filter' />
                <DraggableNode type='math' label='Math' />
                <DraggableNode type='delay' label='Delay' />
                <DraggableNode type='email' label='Email' />
            </div>
        </div>
    );
};
