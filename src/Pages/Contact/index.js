import { Conteudo, Botao, Formulario, Enviar, EntradaDados} from './styles';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmailEndreu', 'template_78rnjck', form.current, 'user_vfotJF2gDnPBfMvi4zrRE')
      .then((result) => {
        alert('Mensagem enviada com sucesso!');
      }, (error) => {
        alert(error.message);
      });
      e.target.reset();
  };

  return (
    <>
      <Conteudo>
        <Botao>Contato</Botao>
        <p>Ficou interessado e quer entrar em contato?<br />Preencha o formulário abaixo, te responderei o mais breve possível</p>
        <Formulario ref={form} onSubmit={sendEmail}>
          <label>Nome</label>
          <EntradaDados type="text" name="user_name" required/>
          <label>E-mail</label>
          <EntradaDados type="email" name="user_email" required pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$"/>
          <label>Assunto</label>
          <EntradaDados type="subject" name="user_subject" required/>
          <label>Mensagem</label>
          <textarea name="message" required/>
          <Enviar type="submit" value="Send" />
        </Formulario>
      </Conteudo>
    </>
  );
}
