import React from 'react'

function Card() {
  const cardsData = [
    {
      id: 1,
      title: "Tile 1",
      description: `GeeksforGeeks is a leading
      platform that provides computer
      science resources and coding
      challenges for programmers and
      technology enthusiasts ndosdsd[osd[posdp]].`
    },
    {
      id: 2,
      title: "Tile 2",
      description: `Practice coding problems and
      improve problem-solving skills.`
    },
    {
      id: 3,
      title: "Tile 3",
      description: `Learn DSA, web development,
      and system design concepts.`
    },
    {
      id: 4,
      title: "Tile 4",
      description: `Prepare for interviews with
      structured learning paths.`
    }
  ];

  return (
    <div className="min-h-screen grid grid-cols-2 gap-4 place-items-center">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="max-w-60 min-h-40 border-2 border-gray-300 rounded-lg flex flex-col justify-start items-start p-4"
        >
          <p className="font-semibold">{card.title}</p>
          <p className="text-sm text-gray-700 mt-2">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Card
