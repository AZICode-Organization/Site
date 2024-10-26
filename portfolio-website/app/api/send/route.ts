import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email, subject, message } = await request.json();
    // Gmail
    //const transporter = nodemailer.createTransport({
      //host: process.env.SMTP_HOST, // aqui vai o host do seu email ex
      //port: Number(process.env.SMTP_PORT),
      //secure: false,
      //service: 'gmail',
      //auth: {
        //type: 'OAuth2',
        //user: process.env.SMTP_USER,
        //clientId: process.env.SMTP_CLIENT_ID,
        //clientSecret: process.env.SMTP_CLIENT_SECRET,
        //refreshToken: process.env.SMTP_REFRESH_TOKEN,
      //},
    //});

    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465, // Use 587 se estiver usando TLS em vez de SSL
      secure: true, // true para 465, false para outras portas
      auth: {
        user: process.env.SMTP_USER_ZOHO, // Seu e-mail Zoho
        pass: process.env.SMTP_PASS_ZOHO, // Senha ou senha para aplicativo do Zoho
      },
    });

    await transporter.sendMail({
      //from: process.env.SMTP_USER, gmail
      from: process.env.SMTP_USER_ZOHO, // Zoho
      //to: process.env.SMTP_USER, gmail
      to: process.env.SMTP_USER_ZOHO, // Zoho
      subject,
      text: message,
      replyTo: email,
    });

    return NextResponse.json({ message: 'Email sent' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
};