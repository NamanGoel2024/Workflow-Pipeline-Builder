import { Handle, Position } from 'reactflow';
import '../../styles/node.css';

export const BaseNode = ({
  title,
  children,
  inputs = [],
  outputs = [],
  style = {},
}) => {
  return (
    <div className="node-card" style={style}>
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{ top: `${((index + 1) * 100) / (inputs.length + 1)}%` }}
        />
      ))}

      <div className="node-header">
        <div className="node-title">{title}</div>
      </div>

      <div className="node-body">
        {children}
      </div>

      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{ top: `${((index + 1) * 100) / (outputs.length + 1)}%` }}
        />
      ))}
    </div>
  );
};