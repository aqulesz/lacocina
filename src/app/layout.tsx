import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Academia La Cocina Formación y Producción Artística',
   description: 'Academia de música en Córdoba Capital. Clases de guitarra, piano, canto, batería, violín, bajo y grabación en home studio. Aprendé con profesionales y desarrollá tu talento musical.',
  keywords: [
    'academia de música en Córdoba',
    'clases de música Córdoba',
    'formación musical Córdoba',
    'escuela de música en Córdoba',
    'producción musical en Córdoba',
    'cursos de música en Córdoba',
    'clases de guitarra Córdoba',
    'clases de piano Córdoba',
    'clases de canto en Córdoba',
    'clases de batería Córdoba',
    'clases de violín Córdoba',
    'clases de bajo eléctrico Córdoba',
    'clases de teclado Córdoba',
    'grabación en home studio',
    'producción musical desde casa',
    'curso de grabación digital',
    'formación en producción artística',
    'profesores de música Córdoba',
    'aprender música desde cero',
    'talleres musicales Córdoba',
    'clases presenciales de música'
  ],
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: 'https://academialacocina.com/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      url: 'https://academialacocina.com/favicon-96x96.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: 'https://academialacocina.com/apple-touch-icon.png',
    },
  ],
  openGraph: {
    title: 'La Cocina - Formación y Producción Artística en Córdoba',
    description: 'Academia de música en Córdoba Capital. Clases de guitarra, piano, canto, batería, violín, bajo y grabación en home studio.',
    url: 'https://academialacocina.com',
    siteName: 'La Cocina',
    images: [
      {
        url: 'https://academialacocina.com/preview.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Cocina - Formación y Producción Artística en Córdoba',
    description: 'Academia de música en Córdoba Capital. Clases de guitarra, piano, canto, batería, violín, bajo y grabación en home studio.',
    images: ['https://academialacocina.com/preview.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
