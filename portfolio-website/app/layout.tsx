import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AZI CODE | Soluções Tecnológicas Sob Medida",
  description: "A AZI CODE revoluciona a gestão empresarial com soluções inovadoras em software, automação e tecnologia.",
  openGraph: {
    title: "AZI CODE | Soluções Tecnológicas Sob Medida",
    description: "Soluções inovadoras em desenvolvimento de software e automação empresarial.",
    url: "https://www.azicode.com.br",
    siteName: "AZI CODE",
    images: [
      {
        url: "https://www.azicode.com.br/images/imagem-de-destaque.png",
        width: 1200,
        height: 630,
        alt: "AZI CODE - Soluções Tecnológicas",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AZI CODE | Soluções Tecnológicas Sob Medida",
    description: "Soluções inovadoras em desenvolvimento de software e automação empresarial.",
    images: ["https://www.azicode.com.br/images/imagem-de-destaque.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
       <head>
        <meta name="robots" content="index, follow" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
