import { ReactComponent as Bubble } from "../icons/SpeechBubbles.svg";
import { ReactComponent as TextingBubbles } from "../icons/TextingBubbles.svg";
import { ReactComponent as Brain } from "../icons/Brain.svg";
import { useEffect } from "react";

export default function About() {

  console.log("hello")

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1>Our Mission</h1>
      <div className="about">
        <div className="about_paragraph">
          <Bubble className="about_bubble" />
          <p>
            While learning the basics of a language is essential and provides a
            solid foundation, the true beauty and richness of expression come
            from delving into the higher levels of vocabulary. Basic language
            skills allow for functional communication, but it is at the advanced
            levels where one can truly paint vivid pictures with words and
            convey complex ideas.
          </p>
        </div>
      </div>
      <div className="about">
        <div className="about_paragraph">
          <p>
            By expanding their vocabulary, language learners gain access to a
            wider array of words with nuanced meanings, idiomatic expressions,
            and cultural references. This depth of knowledge enables them to
            capture subtleties, convey emotions, and engage in sophisticated
            conversations. Learning higher-level words adds color, precision,
            and elegance to communication.
          </p>
          <TextingBubbles className="texting_bubbles" />
        </div>
      </div>
      <div className="about">
        <div className="about_paragraph">
        <Brain className="brain" />
          <p>
            At Palabra, we embrace the power and beauty of language by guiding
            language learners on a journey to unlock the full potential of their
            communication.
          </p>
        </div>
      </div>
    </div>
  );
}
