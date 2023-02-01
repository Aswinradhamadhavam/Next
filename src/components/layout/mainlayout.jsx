import { Footer } from "../footer/footer";
import HeaderPage from "../header/header";

export default function MainLayout({ children }) {
  return (
    <div>
      <HeaderPage />
      <main> {children}</main>

      <Footer />
    </div>
  );
}
