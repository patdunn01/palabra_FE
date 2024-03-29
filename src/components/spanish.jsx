import { getSpanishWords } from "../utils/api";
import { useState, useEffect, useRef } from "react";
import { ReactComponent as Loading } from "../icons/Loading.svg";

function Spanish() {
  const [loading, setLoading] = useState(true);
  const [winner, setWinner] = useState(false);
  const [error, setError] = useState(null);
  const [clickedCorrectAnswers, setClickedCorrectAnswers] = useState([]);
  const [randomWords, setRandomWords] = useState([]);

  const wordRefs = useRef([]); // Refs for each word element to scroll to

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetchSpanishWords();
    }, 4000);
  }, []);

  const fetchSpanishWords = () => {
    setLoading(true);
    getSpanishWords()
      .then((words) => {
        setLoading(false);
        setWinner(false);
        setClickedCorrectAnswers([]);
        setRandomWords(words.sort(() => 0.5 - Math.random()).slice(0, 8));
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  const correctAnswers = randomWords.map((word) => {
    return word.english;
  });

  useEffect(() => {
    if (clickedCorrectAnswers.length > 0) {
      const currentIndex = clickedCorrectAnswers.length - 1;
      const nextWordRef = wordRefs.current[currentIndex + 1];
      if (nextWordRef) {
        setTimeout(() => {
          nextWordRef.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 450);
      }
    }
  }, [clickedCorrectAnswers, correctAnswers]);

  const handleAnswerClick = (event, answer, word) => {
    if (answer === word.english) {
      setClickedCorrectAnswers((prevAnswers) => [...prevAnswers, word.english]);
      event.target.classList.add("correct-answer");
      if (clickedCorrectAnswers.length === correctAnswers.length - 1) {
        setTimeout(() => {
          setWinner(true);
        }, 700);
      }
      event.target.closest(".word").classList.add("correctWord");
    } else {
      event.target.classList.add("incorrect-answer");
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <Loading className="loading_icon" />
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (winner) {
    return (
      <div className="home">
        <p>8/8 Well Done!</p>
        <button className="new_round_button" onClick={fetchSpanishWords}>Learn More</button>
      </div>
    );
  }

  return (
    <div className="language-main">
      <ul className="words-list">
        {randomWords.map((word, index) => (
          <div
            key={word._id}
            className="word"
            ref={(el) => (wordRefs.current[index] = el)}
          >
            <p className="words-list-title">{word.word}</p>
            <p className="words-list-sentence">{word.sentence}</p>
            <p className="words-list-question">In English "{word.word}" is...</p> 
            {word.answers.sort().map((answer) => (
              <button
                className="words-list-item"
                key={answer}
                onClick={(event) => handleAnswerClick(event, answer, word)}
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
