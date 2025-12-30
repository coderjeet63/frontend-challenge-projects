import React from 'react'

function Second() {
    const servicesData = [
  {
    id: 1,
    icon: "fa-solid fa-user",
    title: "Service 1",
    description: `With the idea of imparting programming
    knowledge, Mr. Sandeep Jain, an IIT
    Roorkee alumnus started a dream,
    GeeksforGeeks. Whether programming
    excites you or you feel stifled,
    how to ace data structures and
    algorithms, GeeksforGeeks is a
    one-stop solution.`,
    linkText: "Learn More",
    link: "#"
  },
  {
    id: 2,
    icon: "fa-solid fa-cart-shopping",
    title: "Service 2",
    description: `With the idea of imparting programming
    knowledge, Mr. Sandeep Jain, an IIT
    Roorkee alumnus started a dream,
    GeeksforGeeks. Whether programming
    excites you or you feel stifled,
    how to ace data structures and
    algorithms, GeeksforGeeks is a
    one-stop solution.`,
    linkText: "Learn More",
    link: "#"
  },
  {
    id: 3,
    icon: "fa-solid fa-toolbox",
    title: "Service 3",
    description: `With the idea of imparting programming
    knowledge, Mr. Sandeep Jain, an IIT
    Roorkee alumnus started a dream,
    GeeksforGeeks. Whether programming
    excites you or you feel stifled,
    how to ace data structures and
    algorithms, GeeksforGeeks is a
    one-stop solution.`,
    linkText: "Learn More",
    link: "#"
  },
  {
    id: 4,
    icon: "fa-brands fa-android",
    title: "Service 4",
    description: `With the idea of imparting programming
    knowledge, Mr. Sandeep Jain, an IIT
    Roorkee alumnus started a dream,
    GeeksforGeeks. Whether programming
    excites you or you feel stifled,
    how to ace data structures and
    algorithms, GeeksforGeeks is a
    one-stop solution.`,
    linkText: "Learn More",
    link: "#"
  },
  {
    id: 5,
    icon: "fa-solid fa-database",
    title: "Service 5",
    description: `With the idea of imparting programming
    knowledge, Mr. Sandeep Jain, an IIT
    Roorkee alumnus started a dream,
    GeeksforGeeks. Whether programming
    excites you or you feel stifled,
    how to ace data structures and
    algorithms, GeeksforGeeks is a
    one-stop solution.`,
    linkText: "Learn More",
    link: "#"
  },
  {
    id: 6,
    icon: "fa-solid fa-pen",
    title: "Service 6",
    description: `With the idea of imparting programming
    knowledge, Mr. Sandeep Jain, an IIT
    Roorkee alumnus started a dream,
    GeeksforGeeks. Whether programming
    excites you or you feel stifled,
    how to ace data structures and
    algorithms, GeeksforGeeks is a
    one-stop solution.`,
    linkText: "Learn More",
    link: "#"
  }
];

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center">
     {servicesData.map(service => (
  <div key={service.id} className='max-w-60 min-h-40 border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center p-4 hover:scale-105 transition-transform duration-500 ease-in-out '>
    <i className={service.icon}></i>
    <h3>{service.title}</h3>
    <p>{service.description}</p>
    <a href={service.link}>{service.linkText}</a>
  </div>
))}
    </div>
  )
}

export default Second