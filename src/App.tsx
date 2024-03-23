import { useState } from 'react';
import './App.css';
import { CheckList, idValue } from './Checklist';

function App() {
  const [checkedId,setCheckedId] = useState<idValue | null>(null)
  function handleCheckedIdsChange(newCheckedIds: idValue[]){
    const newCheckedIdArr = newCheckedIds.filter((id) => id !== checkedId)
    if (newCheckedIdArr.length === 1){
      setCheckedId(newCheckedIdArr[0])
    } else {
      setCheckedId(null)
    }
  }
  return (
    <div>
      <CheckList
        data={[
          { id: 1, name: 'Tomek', role: 'Manager' },
          { id: 2, name: 'Natalia', role: 'Developer' },
          { id: 3, name: 'Sara', role: 'Developer' },
          { id: 4, name: 'Władysław', role: 'UX' },
          { id: 5, name: 'Kajetan', role: 'QA' },
        ]}
        id="id"
        primary="name"
        secondary="role"
        style={{
          width: '300px',
          maxHeight: '380px',
          overflowY: 'auto'
        }}
        checkedIds={checkedId === null ? []: [checkedId]}
        onCheckedIdsChange={handleCheckedIdsChange}
        // renderItem={(item) => (
        //   <li key={item.id} className=''>
        //     <div className=''>{item.name}</div>
        //     <div className=''>{item.role}</div>
        //   </li>
        // )}
      />
    </div>
  )
}
export default App;