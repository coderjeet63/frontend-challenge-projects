import React from "react";

function Card() {
  const cards = [1,2,3,4,5,6,7,8,9,10];

  return (
    <div className="grid grid-flow-col auto-cols-max gap-4 overflow-x-hidden">
      {cards.map((card) => (
        <div
          key={card}
          className="
            relative 
            w-[112px] h-[156px] 
            lg:w-[140px] lg:h-[196px]
            rounded-xl
            bg-gradient-to-br 
            from-[#1f2937] via-[#111827] to-black
            shadow-lg
            hover:scale-105
            hover:shadow-red-500/30
            transition-all duration-300
          "
        >
          {/* subtle shine */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/10 to-transparent opacity-0 hover:opacity-100 transition" />
        </div>
      ))}
    </div>
  );
}

export default Card;
