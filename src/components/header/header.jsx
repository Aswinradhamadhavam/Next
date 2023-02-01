import Link from "next/link";

export default function HeaderPage() {
  return (
    <header>
      <div>
        <div className="topNav">
          <img src={"/images/logo_black.png"} width={50} height={50} />
          <nav>
            <ul>
              <li>
        
                <Link href="/" legacyBehavior><a>Home</a></Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/Aboutus">About Us</Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title">sed ut perspiciatis unde omnis</p>
      </div>
    </header>
  );
}
