export function bugAdded(description){
    return {
        type:"BugAdded",
        payload:{
          description:description
        }
    }
}

export function bugRemoved(id){
    return {
        type: "BugRemoved",
        payload:{
          id:id
        }
    }
}

export function bugResolved(id){
    return {
        type:"BugResolved",
        payload:{
            id:id,
            description:`Resolved ${id}`
        }
    }
}