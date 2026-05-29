// draggableNode.js

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{
                cursor: 'grab',
                minWidth: '120px',
                height: '70px',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '14px',
                background: '#4f46e5',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 700,
                boxShadow: '0 6px 18px rgba(79,70,229,0.25)',
              }}
        draggable
      >
          <span style={{ color: '#fff' }}>{label}</span>
      </div>
    );
  };
  