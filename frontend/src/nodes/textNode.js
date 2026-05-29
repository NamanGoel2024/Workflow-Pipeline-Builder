import { useMemo, useState } from 'react';
import { BaseNode } from './base/BaseNode';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');

  const variables = useMemo(() => {
    const matches = text.match(/{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g) || [];

    return matches.map((match) => ({
      id: `${id}-${match}`,
      name: match,
    }));
  }, [text, id]);

  const width = Math.max(260, text.length * 7);

  const height = Math.max(140, 120 + variables.length * 25);

  return (
    <BaseNode
      title="Text"
      style={{ width, minHeight: height }}
      inputs={variables}
      outputs={[{ id: `${id}-output` }]}
    >
      <div className="node-field">
        <label>Text</label>

        <textarea
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </BaseNode>
  );
};