import React from "react";
import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) =>{
    const notesInitial = [
        {
          "_id": "62f91a6ba4665cc51b6eceb0",
          "user": "62d82f6ca63a078cf28598ac",
          "title": "latest new ",
          "tag": "personal",
          "description": "latest this is desdasda dsfs  2",
          "date": "2022-08-14T15:53:15.384Z",
          "__v": 0
        },
        {
          "_id": "62f91c7e8f480793953d5d9b",
          "user": "62d82f6ca63a078cf28598ac",
          "title": "latest new ",
          "tag": "personal",
          "description": "latest this is desdasda dsfs  2",
          "date": "2022-08-14T16:02:06.877Z",
          "__v": 0
        },
        {
          "_id": "62f9da95df0967115e78bb72",
          "user": "62d82f6ca63a078cf28598ac",
          "title": "latest new 2",
          "tag": "personal",
          "description": "latest this is desdasda dsfs  2",
          "date": "2022-08-15T05:33:09.866Z",
          "__v": 0
        },
        {
          "_id": "62f9da5695df0967115e78bb72",
          "user": "62d82f6ca63a078cf28598ac",
          "title": "latest new 2",
          "tag": "personal",
          "description": "latest this is desdasda dsfs  2",
          "date": "2022-08-15T05:33:09.866Z",
          "__v": 0
        }
      ]

      const [notes, setnotes] = useState(notesInitial)
    return(
        <NoteContext.Provider value={{notes,setnotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

// const NoteState = (props) =>{
//     const s1={
//         "name" : "Sanju",
//         "class" : "5b"
//     }

//     const [state,setState] = useState(s1);

//     const update = () =>{
//         setTimeout(()=>{
//             setState({
//                 "name":"Larry",
//                 "class":"10b"
//             })
//         },1000)
//     }
//     return(
//         <NoteContext.Provider value={{state , update}}>
            
//             {props.children}
//         </NoteContext.Provider>
//     )
// }

export default NoteState;