
import React, { useState } from 'react';

const Item = () => {
  const [userAnswers, setUserAnswers] = useState(Array(4).fill(null));
  const [results, setResults] = useState('');

  const riddles = [
    {
      id: 1,
      description: 'Висит груша - нельзя скушать',
      option1: 'Чужая груша',
      option2: 'Боксерская груша',
      option3: 'Лампочка',
      option4: 'Не груша',
      correct: 3
    },
    {
      id: 2,
      description: 'Легче пера, но дольше двух минут его не удержишь. Что это такое?',
      option1: 'Железо',
      option2: 'Дыхание',
      option3: 'Вата',
      option4: 'Мысль',
      correct: 2
    },
    {
      id: 3,
      description: 'Что полно дыр, но держит воду?',
      option1: 'Сыр',
      option2: 'Губка',
      option3: 'Земля',
      option4: 'Пемза',
      correct: 2
    },
    {
      id: 4,
      description: 'В каком месяце 28 дней?',
      option1: 'В Феврале',
      option2: 'В Марте',
      option3: 'Ни в каком',
      option4: 'Во всех',
      correct: 4
    }
  ];

  const handleSelect = (index, value) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = parseInt(value);
    setUserAnswers(newAnswers);
  };

  const handleClick = () => {
    let correctCount = 0;
    riddles.forEach((riddle) => {
      const index = riddle.id - 1;
      if (userAnswers[index] === riddle.correct) {
        correctCount++;
      }
    });
    setResults(`Правильно отгадано ${correctCount} загадок из ${riddles.length}`);
  };

  return (
    <div>
      {riddles.map((riddle) => (
        <div key={riddle.id}>
          <p>{riddle.description}</p>
          <select name={`Выберите ответ для загадки ${riddle.id}`} onChange={(e) => handleSelect(riddle.id - 1, e.target.value)}>
            <option value='1'>{riddle.option1}</option>
            <option value='2'>{riddle.option2}</option>
            <option value='3'>{riddle.option3}</option>
            <option value='4'>{riddle.option4}</option>
          </select>
        </div>
      ))}
      <button onClick={handleClick} style={{ color: "black", fontSize: "15px" }}>Проверить ответы</button>
      <p>{results}</p>
    </div>
  );
};

export default Item;
