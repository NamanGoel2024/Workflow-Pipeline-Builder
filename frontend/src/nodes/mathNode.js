import { BaseNode } from './base/BaseNode';

export const MathNode = ({ id }) => {
  return (
    <BaseNode
      title="Math"
      inputs={[
        { id: `${id}-a` },
        { id: `${id}-b` },
      ]}
      outputs={[{ id: `${id}-result` }]}
    >
      <div>Performs calculations</div>
    </BaseNode>
  );
};