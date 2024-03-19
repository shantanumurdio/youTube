import React from "react";
import Button from "./Button";

const buttonNames = [
  "All",
  "Gaming",
  "Song",
  "Live",
  "Sports",
  "News",
  "Cricket",
  "Trending",
  "Cooking",
  "Environment",
  "English",
  "Health",
];


const ButtonList = () =>{
  return(
    <div className="flex">
      {buttonNames.map((name,index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  )
}



export default ButtonList;
