

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carvex",
  description: "Запчастини",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
