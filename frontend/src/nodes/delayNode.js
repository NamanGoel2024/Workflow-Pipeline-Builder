import { BaseNode } from './base/BaseNode';

export const DelayNode = ({ id }) => {
  return (
    <BaseNode
      title="Delay"
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-output` }]}
    >
      <div>Adds execution delay</div>
    </BaseNode>
  );
};