import React from 'react'
import linkedin from '../../public/images/linkedin-icon.svg';
import facebook from '../../public/images/facebook-icon.svg';
import instagram from '../../public/images/instagram-icon.svg';
import whatsapp from '../../public/images/whatsapp-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 bg-black">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Vamos Conectar</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Quer saber mais sobre como podemos ajudar a sua empresa a crescer com soluções digitais inovadoras?
          Estamos prontos para conversar sobre seus projetos e ideias. Preencha o formulário ao lado e entraremos
          em contato com você o mais rápido possível. Seja para tirar dúvidas, discutir novos projetos ou apenas
          trocar ideias, estamos aqui para te ouvir!
        </p>
        <div className="socials flex flex-row gap-2">
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
        <form className="flex flex-col gap-4">
          <label htmlFor="email" className="text-white">Seu email</label>
          <input
            type="email"
            id="email"
            required
            placeholder="alan.turing@gmail.com"

          />
        </form>
      </div>
    </section>
  )
}

export default EmailSection
