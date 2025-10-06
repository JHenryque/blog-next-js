type RouteAboutMeType = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RouteAboutMeType>) {
  return (
    <html lang="pt-BR">
      <body>
        <h1>Login</h1>

        <main>{children}</main>

        <footer>Footer</footer>
      </body>
    </html>
  );
}
