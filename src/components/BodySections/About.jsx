import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
      <div
          className="AboutBody flex justify-center items-center gap-2.5 relative h-screen
       w-full text-white font-bold bg-cover bg-no-repeat"
          id="about"
      >
          <div className="wrapper flex h-4/5 w-5/6">
              <div className="about-body-left h-full w-1/2 flex items-center justify-center"></div>
              <div className="about-body-right h-full w-1/2 flex flex-col gap-10 items-center justify-center">
                  <div className="about-body-right-title h-10 flex items-center justify-center text-3xl  text-amber-400">
                      Men haqimda:{" "}
                  </div>
                  <div className="about-body-right-content h-auto flex items-center justify-center text-justify">
                      Men har doim dizayn va texnologiyaning uyg‘unlashuvi
                      orqali chiroyli va qulay veb-saytlar yaratishga
                      qiziqqanman. Fullstack dasturchi sifatida g‘oyalarni kod
                      yordamida haqiqatga aylantirish va loyihalarning nafaqat
                      chiroyli, balki mukammal ishlashini ta'minlashdan
                      zavqlanaman. Foydalanuvchilar uchun sodda va tushunarli
                      tajribalar yaratishga harakat qilaman. Kod yozmayotgan
                      paytimda tabiat qo‘ynida sayr qilish, yangi taomlar
                      tayyorlash yoki yangi bilimlarni o‘rganish bilan
                      shug‘ullanaman.
                  </div>
              </div>
          </div>
      </div>
  );
};

export default About;
