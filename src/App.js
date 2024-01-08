// import { useEffect } from 'react';
// import './App.css';
// import Store from './Store';
// import { bugAdded,bugRemoved,bugResolved} from './actions';

import Counter from './features/counter/Counter';

function App() {

  // useEffect(()=>{
  //   const unsubscribe = Store.subscribe(()=>{
  //     console.log("store changed! ", Store.getState());
  //   })
  //   Store.dispatch(bugAdded("Bug 1"));
  //   Store.dispatch(bugResolved(2));
  //   unsubscribe()
  //   Store.dispatch(bugRemoved(1));
  // },[])

  return (
    <div className="App">
      hello world
      <Counter/>
    </div>
  );
}

export default App;
