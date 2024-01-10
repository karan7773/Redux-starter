// import Counter from './features/counter/Counter';

import ListofPosts from "./features/posts/ListofPosts";

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      <ListofPosts/>
    </div>
  );
}

export default App;



//implementation for react redux
// import { useEffect } from 'react';
// import './App.css';
// import Store from './Store';
// import { bugAdded,bugRemoved,bugResolved} from './actions';
// useEffect(()=>{
//   const unsubscribe = Store.subscribe(()=>{
//     console.log("store changed! ", Store.getState());
//   })
//   Store.dispatch(bugAdded("Bug 1"));
//   Store.dispatch(bugResolved(2));
//   unsubscribe()
//   Store.dispatch(bugRemoved(1));
// },[])
