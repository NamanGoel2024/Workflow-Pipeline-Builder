import { BaseNode } from './base/BaseNode';

export const APINode = ({ id }) => {
  return (
    <BaseNode
      title="API"
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-response` }]}
    >
      <div>External API Request</div>
    </BaseNode>
  );
};