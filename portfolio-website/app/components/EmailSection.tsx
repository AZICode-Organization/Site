"use client";
import React, {useState} from 'react'
import linkedin from '../../public/images/linkedin-icon.svg';
import facebook from '../../public/images/facebook-icon.svg';
import instagram from '../../public/images/instagram-icon.svg';
import whatsapp from '../../public/images/whatsapp-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  const [emailSubmit, setEmailSubmit] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email: (e.target as HTMLFormElement).email.value,
      subject: (e.target as HTMLFormElement).subject.value,
      message: (e.target as HTMLFormElement).message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      setEmailSubmit(true);
    }
  };
  return (
    <section className="grid md:grid-cols-2 my-0 md:my-12 py-24 gap-4 px-4 md:px-16">
      <div>
        <h5 className="text-xl font-bold text-black my-2">Pegue um café e vamos conversar!</h5>
        <p className="text-[#4b4d4d] mb-4 max-w-md">
          Quer saber mais sobre como podemos ajudar a sua empresa a crescer com soluções digitais inovadoras?
          Estamos prontos para conversar sobre seus projetos e ideias. Preencha o formulário ao lado e entraremos
          em contato com você o mais rápido possível. Seja para tirar dúvidas, discutir novos projetos ou apenas
          trocar ideias, estamos aqui para te ouvir!
        </p>
        <div className="socials flex flex-row gap-2 mb-4 md:mb-0">
          <Link href="https://www.linkedin.com/in/carlos-%C3%A1quila/">
            <Image src={linkedin} alt="LinkedIn" className="cursor-pointer" />
          </Link>
          <Link href="https://www.facebook.com/donat.darkhannaz">
            <Image src={facebook} alt="Facebook" className="cursor-pointer" />
          </Link>
          <Link href="https://www.instagram.com/azicode/">
            <Image src={instagram} alt="Instagram" className="cursor-pointer" />
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=5535992501377">
            <Image src={whatsapp} alt="WhatsApp" className="cursor-pointer" />
          </Link>
        </div>
      </div>

      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="text-gray-500 block mb-2 text-sm font-medium">Seu email</label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-transparent border border-gray-500 text-gray-500 placeholder-gray-500 text-sm rounded-lg block w-full p-2.5"
              placeholder="alan.turing@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="text-gray-500 block mb-2 text-sm font-medium">Assunto</label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-transparent border border-gray-500 text-gray-500 placeholder-gray-500 text-sm rounded-lg block w-full p-2.5"
              placeholder="Chatbot para e-commerce"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-gray-500 block mb-2 text-sm font-medium">Mensagem</label>
            <textarea
              name="message"
              id="message"
              required
              className="bg-transparent border border-gray-500 text-gray-500 placeholder-gray-500 text-sm rounded-lg block w-full p-2.5"
              placeholder="Olá, gostaria de saber mais sobre o chatbot para e-commerce."
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-900 text-white py-3 px-4 rounded-lg text-sm font-semibold hover:bg-indigo-950"
          >
            Enviar
          </button>
          {emailSubmit && (
            <p className="text-green-500 text-sm mt-2">Email enviado com sucesso!</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default EmailSection
