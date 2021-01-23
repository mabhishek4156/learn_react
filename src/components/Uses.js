import axios from "axios";
import React from "react";

export const Uses = () => {
  // const [name, setName] = React.useState("Abhi");
  // const [hide, setHide] = React.useState(false);
  // const [items, setitems] = React.useState([])

  // const [name, setName] = React.useState("Abhi");
  // setName('ABhishek')
  // console.log(hide);
  // console.log(items);

  console.log("Hello");
  let nums = [2, 3, 4, 5, 6];
  nums.map((a) => console.log(a));

  // https://jsonplaceholder.typicode.com/todos/

  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => {console.log(res.data[7]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {/* {hide && 'core'}
      <button
        onClick={() => {
          setName("Abhishek");
          setHide(!hide);
          items.push('Byy')
          items.push('Hello')
          items.push('See you')
          items.push('Soon')
          items.shift()
          items.unshift('Good Night')
          items.pop()
        }}
      >
        cclick
      </button>
      <p>{items.length}</p> */}
    </div>
  );
};
