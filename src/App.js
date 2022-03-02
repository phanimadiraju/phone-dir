import React,{Component}from 'react';
import  './App.css';
import Header from './Header';


class App extends Component {
  
  render(){
    let subscribers=[
      { id:1,
        name:'Phani',
        phone:'9988776655'
      },
      { id:2,
        name:'Kishore',
        phone:'9988665544'

      },
      {
        id:3,
        name:'Abdul',
        phone:'9977668855'
      }
    ]
    return (
      <div>
        <Header/>
        <div className='component-body-container'>
      <button className='custom-btn add-btn'>Add</button>
      <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
    </div>
    {
      subscribers.map(sub =>{
        return <div key={sub.id} className="grid-container">
          <span className='grid-item'>{sub.name}</span>
          <span className='grid-item'>{sub.phone}</span>
          <span className='grid-item'><button className='custom-btn delete-btn'>Delete</button></span>
          </div>
      })
    }
        
      </div>
    );
  }
  
}

export default App;
