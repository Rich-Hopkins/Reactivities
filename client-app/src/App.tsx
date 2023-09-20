import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
      .then(response => {
        setActivities(response.data)
      })
  }, []);

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities'></Header>
      <List>
        {activities
          .sort((a, b) => a.date > b.date? 1 : -1)
          .map((activity: any) => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>
    </div>
  )
}

export default App
