  import React from 'react';
  import TODO from './input';
  import listItem from './listItem.css';

 function toDoList(){
   return (
    <div className="toDoInput">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRP3o4flEYZOa-xtg8xmdEFuf2opyMnDllg9D_rE86Atnb-4_ogXHCzZgQVbDwClxB7R8&usqp=CAU" height={100}  alt="logo" />
        <p>
          It's My TO DO List :
        </p>  
     <TODO/>
      
    </div>
   );
}

export default toDoList;