import { GrLinkNext } from "react-icons/gr";
import MenuLinks from "../components/MenuLinks";
import "./Pages.css"

function Home() {
  return (
    <>
      <div className="home__main">
        <div className="home__content">
          <h1 className="home__title">
            <span> Target IT School </span>
            <br />
            <span> Online Test platformasiga </span>
            <br />
            <span>xush kelibsiz!</span>
          </h1>
          <p>
            Online test tizimi. Bu yerda o'qituvchilar va o'quvchilar o'zlarini
            sinovdan o'tkazib, bilim darajasini oshirishlari mumkin. Hamda
            interaktiv testlar orqali o'z bilimlaringizni mustahkamlashingizga,
            yangi bilimlarni oson topishingiz va o'zingizni sinab ko'rishingiz
            uchun yordam beradi.
          </p>
          <button type="button">
            {" "}
            Testni boshlash uchun bo'limlardan birini tanlang <GrLinkNext />
          </button>
        </div>
        <div className="home__list">
          <MenuLinks/>
        </div>
      </div>
    </>
  );
}

export default Home;
