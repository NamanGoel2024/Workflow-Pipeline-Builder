import { useState } from 'react';
import { BaseNode } from './base/BaseNode';

export const OutputNode = ({ id, data }) => {
  const [name, setName] = useState(
    data?.outputName || id.replace('customOutput-', 'output_')
  );

  const [type, setType] = useState(data?.outputType || 'Text');

  return (
    <BaseNode
      title="Output"
      inputs={[{ id: `${id}-value` }]}
    >
      <div className="node-field">
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="node-field">
        <label>Type</label>

        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option>Text</option>
          <option>Image</option>
        </select>
      </div>
    </BaseNode>
  );
};