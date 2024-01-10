 let lastId=0;

function Reducer(state=[],action){
    switch (action.type){
        case "BugAdded":
            return[
                ...state,
                {
                    id:++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        case "BugRemoved":
            return state.filter(bug => bug.id !== action.payload.id);
        
        case "BugResolved":
            return state.map(bug=> 
                bug.id!== action.payload.id ? bug : {...bug,resolved:true}
            );
        default:
            return state;
    }

}

export default Reducer;