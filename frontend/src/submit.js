import axios from 'axios';
import { useStore } from './store';

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/pipelines/parse',
        {
          nodes,
          edges,
        }
      );

      const data = response.data;

      alert(
        `Pipeline Information

Nodes: ${data.num_nodes}
Edges: ${data.num_edges}
Is DAG: ${data.is_dag ? 'Yes' : 'No'}`
      );
    } catch (error) {
      console.error(error);
      alert('Failed to parse pipeline.');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <button
        className="pipeline-button"
        onClick={handleSubmit}
      >
        Submit Pipeline
      </button>
    </div>
  );
};