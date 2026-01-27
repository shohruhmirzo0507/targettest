import React from "react";
import { Link, useRouteError } from "react-router-dom";
import gifFound from "../../public/notFound.gif";
import "./Pages.css";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  if (error.status == 404) {
    return (
      <div className="errorpage">
        <div>
          <img src={gifFound} alt="" />
          <h3>
            404 – Sahifa topilmadi Kechirasiz, siz qidirayotgan sahifa mavjud{" "}
            <br />
            emas yoki o‘chirilgan bo‘lishi mumkin. Iltimos, menyu orqali bosh
            sahifaga qayting.
          </h3>
          <Link to="/">Asosiy Menyu</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="errorpage">
      <div>
        <h3>
          Xatolik yuz berdi Kechirasiz, sahifani yuklashda xatolik yuz berdi.
          Iltimos, sahifani yangilang yoki birozdan so‘ng qayta urinib ko‘ring.
        </h3>
        <Link to="/">Go to Home</Link>
      </div>
    </div>
  );
}

export default ErrorPage;
