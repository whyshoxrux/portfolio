import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [modal, setModal] = useState(false);
  const botToken = "7387865263:AAH3HqDaf_n8qe92-_iYIN6_wCBAZRVtNOo"; // Bot tokeningiz
  const chatId = "800955323"; // Telegram chat IDingizni kiriting

  const toggleModal = () => {
    setModal(!modal);
  };

  const escapeMarkdown = (text) => {
    return text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const firstName = escapeMarkdown(formData.get("firstName"));
    const lastName = escapeMarkdown(formData.get("lastName"));
    const phone = escapeMarkdown(formData.get("phone"));
    const subject = escapeMarkdown(formData.get("subject"));
    const message = escapeMarkdown(formData.get("message"));

    const telegramMessage = `
📬 *Yangi Xabar:*
👤 *Ism:* ${firstName} ${lastName}
📞 *Telefon:* ${phone}
📌 *Mavzu:* ${subject}
📝 *Xabar:* ${message}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: telegramMessage,
            parse_mode: "MarkdownV2",
          }),
        }
      );

      if (response.ok) {
        toggleModal();
        e.target.reset();
      } else {
        console.error("Telegram API xatosi:", await response.json());
      }
    } catch (error) {
      console.error("Telegramga xabar yuborishda xatolik yuz berdi:", error);
    }
  };

  return (
    <div
      className="ContactBody flex flex-col justify-center items-center h-screen w-full
relative bg-cover bg-no-repeat text-white"
      id="contact"
    >
      <div className="flex w-9/12 h-5/6 justify-center items-center">
        <div className="ContactBody-title text-3xl font-extrabold absolute right-10 top-6 font-mono  text-amber-400">
          ..// contact
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="flex flex-col gap-4 pt-6 pb-6 pl-10 pr-10 bg-black/70 rounded-2xl">
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName">Ism:</label>
                <input
                  type="text"
                  placeholder="Ismingizni kiriting"
                  className="text-black p-2 rounded"
                  name="firstName"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName">Familiya:</label>
                <input
                  type="text"
                  placeholder="Familiyangizni kiriting"
                  className="text-black p-2 rounded"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone">Telefon raqamingizni kiriting:</label>
              <input
                type="text"
                name="phone"
                placeholder="Telefon raqami"
                required
                className="text-black p-2 rounded"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="subject">Yozish:</label>
              <input
                type="text"
                placeholder="Xabaringizni kiriting"
                className="text-black p-2 rounded"
                name="subject"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="message">Men bilan bog'laning:</label>
              <textarea
                placeholder="Xabar..."
                className="text-black h-20 p-2 rounded"
                name="message"
                rows={3}
                required
              />
            </div>
            <div className="flex gap-5 justify-center items-center">
              <button
                type="submit"
                className="p-3 rounded-full bg-green-600 font-semibold flex gap-1 items-center hover:bg-amber-400 hover:text-black"
              >
                Jo'natish
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
              <span>yoki</span>
              <a
                href="https://mail.google.com/mail/?view=cm&to=tohirovshohruxbek@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-green-600 font-semibold flex gap-1 items-center hover:bg-amber-400 hover:text-black"
              >
                Email orqali bog'lanish
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </form>
        {modal && (
          <div className="modal w-screen h-screen top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center rounded-xl">
            <div
              onClick={toggleModal}
              className=" bg-black/60 backdrop-blur-sm w-screen h-screen top-0 left-0 right-0 bottom-0 fixed"
            ></div>
            <div className=" bg-white/80 relative flex flex-col justify-center items-center gap-4 rounded-xl  pt-4 pb-4 pl-8 pr-8">
              <span className=" text-black font-semibold text-lg">
                Xabar muvaffaqiyatli jo'natildi.
              </span>
              <span className=" text-black font-semibold text-lg">Rahmat!</span>
              <button
                onClick={toggleModal}
                className="pt-2 pb-2 pl-4 pr-4 rounded-full font-semibold bg-green-600  hover:bg-amber-400 hover:text-black"
              >
                Yopish
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="footer w-full h-1/6 bg-black/50 flex flex-col items-center justify-center text-amber-200/70">
        <span>A Vite+TailWindCSS+React App</span>
        <span className=" font-semibold">
          Toxirov Shoxrux tomonidan yasaldi va rivojlantirildi
        </span>
        <span>All Rights Reserved@2024</span>
      </div>
    </div>
  );
};

export default Contact;
