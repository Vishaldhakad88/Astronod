import React from "react";
import './about.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import acharyaji from "../assets/acharyaji.jpeg";

function About() {
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />

      <div className="responsive-container">
        <div className="image-section">
          <img src={acharyaji} alt="Example" className="responsive-image" />
        </div>
        <div className="text-section">
          <h2>About Acharyaji</h2>
          <p>
            Acharya Sumedh Narayan Soni is a renowned Vedic astrologer offering
            astrological consultation, tarot card reading, and Vaastu
            consultation worldwide. Acharya Ji started Rudra Astrology Centre 10
            years back with the vision to guide people with ancient knowledge of
            Vedic Astrology. With his immense knowledge and sharp intuition,
            Acharyaji has helped thousands of people worldwide with their
            problems related to health, wealth, education, love, career, etc.
            Acharya Ji stresses the importance of saatvic remedies like Vedic
            Poojas, Gemstones, Yantras, Crystals which have a substantial and
            long-term effect. Acharya Ji is regularly consulted by many known
            politicians, actors, and leading business people. Acharya Sumedh
            Narayan Soni is Jyotish Praveen, Jyotish Visharad, Jyotish Acharya,
            Vaastu Ratan Acharya Sumedh Narayan Soni is a renowned Vedic
            astrologer. He offers astrological consultations, tarot card
            reading, and Vastu consultations to people worldwide. Acharyaji
            started Rudra Astrology Centre 10 years back with a vision to guide
            people and help them make their lives better with the ancient
            knowledge of Vedic Astrology. With his immense knowledge and sharp
            intuition, Acharyaji has helped thousands of people worldwide with
            resolutions of problems related to health, wealth, education, love,
            career, etc. Acharyaji stresses the importance of Satvic remedies
            like Vedic Poojas, Gemstones, Yantras, and Crystals which have a
            substantial and long-term effect. Acharya Ji is regularly consulted
            by many well-known politicians, actors, and leading business people.
            Acharyaji is Jyotish Praveen, Jyotish Visharad, Jyotish Acharya, and
            Vastu Ratan. That is why he provides Vedic astrology consultation to
            all the people facing problems in their lives. He provides the
            consultation and helps in giving the remedies to those problems.
            Perhaps that is why he is the best online astrologer in Mohali who
            can solve all your problems. From black magic removal to Nava Graha
            Shanti pooja, Rudra Astrology Center can solve all your problems
            with the help of our Acharya Ji. He can let you know about your
            issues beforehand to make an informed decision without any worry. He
            is an astrology consultant who tells about Vastu, positions of
            planets, Vedic poojas, gemstones, crystals, Yantras, and whatnot.
            With the help of these, you can also get your love problem solution
            from Acharya Ji. That is why Rudra Astrology Center is considered
            the best website where you can find Acharaya Ji, who will help you
            with accurate guidance and suggestions. Since everybody is facing
            different kinds of problems and difficulties nowadays, it is crucial
            to get the proper guidance and remedies to those problems to lead a
            happy and peaceful life. And Rudra Astrology Center helps you find
            those problems and solutions. Since Rudra Astrology Center has the
            best Acharya Ji online to guide you in your life, it is the best
            place to solve your problems. Besides that, you can also learn
            astrology at Rudra Astrology Center with the same Acharya Ji. We
            believe that your problems are ours, and we can solve anything
            together.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
