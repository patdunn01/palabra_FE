import { getSpanishWords } from "../utils/api";
import { useState, useEffect } from "react";

function Spanish() {
  const [spanishWordData, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    getSpanishWords()
      .then((words) => {
        setWords(words);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const randomWords = spanishWordData
    .sort(() => 0.5 - Math.random())
    .slice(0, 8);


  // let answeredQuestions = [];

  return (
    <div className="home">
      <p>Some Spanish Words to Learn</p>
      <ul className="words-list">
        {randomWords.map((word) => (
          <div key={word._id} className={`${answer === word.english ? 'correct-answer' : 'words-list-item'}`}>
            <p>{word.word}</p>
            <p>{word.sentence}</p>
            {word.answers.map((answer) => (
              <button
                
                key={answer}
                onClick={() => {
                  if (answer === word.english) {
                    setAnswer(answer);
                    console.log(answer);
                    console.log("correct");
                    setAnswer("");
                  } else {
                    console.log("incorrect");
                  }
                }}
              >
                {answer}
              </button>
            ))}
          </div>
        ))}
      </ul>
    </div>
  );
}
export default Spanish;
