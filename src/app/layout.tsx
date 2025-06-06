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
  description: 'Academia de música en Córdoba Capital. Clases de guitarra, piano, canto, folclore, violín, bajo, batería y grabación digital en home studio.',
  keywords: [
    'academia de música en Córdoba',
    'formación musical Córdoba',
    'escuela de música en Córdoba',
    'producción musical en Córdoba',
    'cursos de música en Córdoba',
    'córdoba',
    'guitarra',
    'clases de guitarra Córdoba',
    'canto',
    'clases de canto Córdoba',
    'piano',
    'clases de piano Córdoba',
    'teclado',
    'clases de teclado Córdoba',
    'batería',
    'clases de bateria Córdoba',
    'violín',
    'clases de violin Córdoba',
    'bajo',
    'clases de bajo Córdoba',
    'home studio',
    'clases de home studio Córdoba',
    'grabación en home studio',
    'formación musical',
    'producción artística',
    'aprender música desde cero',
    'talleres musicales Córdoba',
    'clases presenciales de música'
  ],
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/src/app/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      url: '/src/app/favicon-96x96.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/src/app/apple-touch-icon.png',
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
