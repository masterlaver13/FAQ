import React, {useState} from 'react';

export default function Question({quest,answ}){

  console.log(quest);

  return(
    <div className="container">
      <div id="question1">
        <a href="#question1">{quest}</a>
        <div className="answer">
          <p>
            {answ}
          </p>
        </div>
      </div>
    </div>
  );
}
