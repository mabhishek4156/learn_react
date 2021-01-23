import React from "react";

const Todos = () => {
  // let todos = ["goto home", "ready for office", "take tea"];
  let names = ["abhi", "india", "anss"];
  let name = {
    firstName: "Abhi",
    lastName: "Mishra",
    middleName: "Nothing",
  };

  const user = {
    id: 101,
    email: "jack@dev.com",
    personalInfo: {
      name: "Jack",
      address: {
        line1: "westwish st",
        line2: "washmasher",
        city: "wallas",
        state: "WX",
      },
    },
  };
  let costumer = {
    name: "sp",
    address: "raipur",
    bloodGroup: "B+",
    CompanyName: "Alco",
    empID: "421",
    
  };

  // let browser = {
  //   name: "chrome",
  //   version: 85.0,
  //   company: "google",
  //   luanched: "Jan 2020",
  //   features: ["fast", "easy to use", "better than others"],
  // };

  // let bike = {
  //   name: "hero",
  //   milage: "100",
  //   model: "2015",
  // };

  let data = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
  ];

  console.log("hello");

  return (
    <div>
      {/* <ul>
        {todos.map((item) => (
          <li>{item}</li>
        ))}
      </ul> */}
      {names.map((item) => (
        <p>{item}</p>
      ))}
      <h1>{name.firstName}</h1>
      <h2>{name.lastName}</h2>
      <h3>{name.middleName}</h3>

      <p key="hii">{user.id}</p>
      <p key="hello">{user.email}</p>
      <p>{user.personalInfo.name}</p>
      <p>{user.personalInfo.address.line1}</p>
      <p>{user.personalInfo.address.city}</p>
      <p>{user.personalInfo.address.line2}</p>
      <p>{user.personalInfo.address.state}</p>

      <h1>{names[0]}</h1>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2>

      {/* <h1>{data[0].title}</h1>
      <h1>{data[1].id}</h1> */}

      <div>
        {data.map((item) => (
          <p>{item.title}</p>
        ))}
      </div>
    </div>
  );
};

export default Todos;
