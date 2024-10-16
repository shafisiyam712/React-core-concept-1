// export default function Todo({task}){
//     return (
//         <li>task {task}</li>
//     )
// }

//conditional rendering option 1
// export default function Todo({task,isDone}){
//    if(isDone==true){
//     return <li>finished {task}</li>
//    }
//    else
//    return <li>work on {task}</li>
// }

//conditional rendering option 2

// export default function Todo({task,isDone}){
//     if(isDone==true){
//      return <li>finished {task}</li>
//     }
//     return <li>work on {task}</li>
//  }


//conditional rendering option 3 (ternary operator)

// export default function Todo({task, isDone}){
//     return (
//         <li>{isDone? 'finished':'work on'}  task {task}</li>
//     )
// }

//conditional rendering option 4 (&&operator)

// export default function Todo({task, isDone}){
//     return (
//         <li>task {task} {isDone && ': Done'}</li>
//     )
// }

//conditional rendering option 4 (||operator)

// export default function Todo({task, isDone}){
//     return (
//         <li>task {task} {isDone || ': Do it'}</li>
//     )
// }

//conditional rendering option 5

export default function Todo({task,isDone}){
    let listItem;
   if(isDone==true){
    listItem=<li>finished {task}</li>
   }
   else{
     listItem= <li>work on {task}</li>
   }
  return listItem;
}