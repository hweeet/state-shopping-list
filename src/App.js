import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import AddItem from './AddItem';
import SearchItem from './SearchItem';



const App = () => {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')))
      /*useState([
        {
          id: 1,
          name: "milk",
          checked: true
        },
        {
          id: 2,
          name: "bread",
          checked: false
        },
        {
          id: 3,
          name: "cookies",
          checked: false
        },
        {
          id: 4,
          name: "butt paste",
          checked: true
        },
        {
          id: 5,
          name: "chocolate",
          checked: false
        }
      ])*/
        
        const [newItem, setNewItem] = useState('');
        const [search, setSearch] = useState('');
      
        const setAndSaveItems = (newItems) => {
          setItems(newItems);
          localStorage.setItem('shoppingList', JSON.stringify(newItems));
        }
        
        const handleCheck = (id) => {
          const listItems = items.map(item => item.id === id ? {...item, checked: !item.checked} : item)
          setAndSaveItems(listItems)
        }
      
        const handleDelete = (id) => {
          const listItems = items.filter((item) => item.id !== id)
          setAndSaveItems(listItems)
        }
      
      
        const addItem = (name) => {
          const id = items.length ? items[items.length -1].id + 1 : 1;
          const myNewItem = {id, name, checked: false } 
          const listItems = [...items, myNewItem]
          setAndSaveItems(listItems)
        }
      
        const handleSubmit = (e) => {
          e.preventDefault();
          if (!newItem) return;
          addItem(newItem);
          setNewItem('');
        }

  return (
    <div className="App">
      <Header />
      <AddItem handleSubmit={handleSubmit}
               newItem={newItem}
               setNewItem={setNewItem}/>
      <SearchItem search={search}
                  setSearch={setSearch}/>
      <Content items={items.filter(item => ((item.name).toLowerCase()).includes(search.toLowerCase()))}
               handleCheck={handleCheck}
               handleDelete={handleDelete}/>
      <Footer />
    </div>
  );
}

export default App;
