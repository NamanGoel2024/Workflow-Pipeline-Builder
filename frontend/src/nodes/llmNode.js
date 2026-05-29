import { BaseNode } from './base/BaseNode';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="LLM"
      inputs={[
        { id: `${id}-system` },
        { id: `${id}-prompt` },
      ]}
      outputs={[
        { id: `${id}-response` },
      ]}
    >
      <div style={{ fontSize: 14 }}>
        AI model processing node
      </div>
    </BaseNode>
  );
};