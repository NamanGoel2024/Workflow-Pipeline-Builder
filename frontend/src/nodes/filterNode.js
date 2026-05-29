import { BaseNode } from './base/BaseNode';

export const FilterNode = ({ id }) => {
  return (
    <BaseNode
      title="Filter"
      inputs={[{ id: `${id}-items` }]}
      outputs={[{ id: `${id}-filtered` }]}
    >
      <div>Filters incoming data</div>
    </BaseNode>
  );
};