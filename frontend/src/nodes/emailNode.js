import { BaseNode } from './base/BaseNode';

export const EmailNode = ({ id }) => {
  return (
    <BaseNode
      title="Email"
      inputs={[{ id: `${id}-message` }]}
      outputs={[{ id: `${id}-status` }]}
    >
      <div>Sends email notifications</div>
    </BaseNode>
  );
};