import React from "react";

function Navbar() {
  return (
    <nav className="text-2xl font-heading text-medium-violet">
      <ul className="flex gap-14  flex-wrap">
        <a
          href=""
          className="border-2 px-5 py-1 border-medium-violet hover:bg-medium-violet hover:text-light-violet"
        >
          <li className="flex gap-2 place-items-center ">
              <svg
              className="fill-current"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0H8V1.9H6V3.8H4V5.7H2V7.6H0V9.5H2V19H9V13.3H11V19H18V9.5H20V7.6H18V5.7H16V3.8H14V1.9H12V0ZM12 1.9V3.8H14V5.7H16V7.6H18V9.5H16V17.1H13V11.4H7V17.1H4V9.5H2V7.6H4V5.7H6V3.8H8V1.9H12Z" />
              </svg>
            Home
          </li>
        </a>
        <a
          href=""
          className="border-2 px-5 py-1 border-medium-violet hover:bg-medium-violet hover:text-light-violet"
        >
          <li className="flex gap-2 place-items-center ">
              <svg
              className="fill-current"
                width="18"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2v6l-2-2-2 2V2H6v16h10V2h-2ZM0 5V3h2V2a2 2 0 0 1 2-2h12c1.05 0 2 .95 2 2v16c0 1.05-.95 2-2 2H4c-1.05 0-2-.95-2-2v-1H0v-2h2v-4H0V9h2V5H0Zm2-2v2h2V3H2Zm0 14h2v-2H2v2Zm0-6h2V9H2v2Z"
                />
              </svg>
            Blog
          </li>
        </a>
        <a
          href=""
          className="border-2 px-5 py-1 border-medium-violet hover:bg-medium-violet hover:text-light-violet"
        >
          <li className="flex gap-2 place-items-center ">
              <svg
              className="fill-current"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.1 14.025c0 .11.085.2.188.2h4.624c.103 0 .188-.09.188-.2v-1.2c0-.11-.085-.2-.188-.2h-4.625c-.102 0-.187.09-.187.2v1.2Zm-4.872.152 4.8-4.024a.202.202 0 0 0 0-.308l-4.8-4.023a.199.199 0 0 0-.328.153v1.568c0 .06.025.114.072.152L7.718 10l-2.744 2.305a.202.202 0 0 0-.073.152v1.568c0 .17.197.262.327.152ZM19.2 0H.8a.8.8 0 0 0-.8.8v18.4a.8.8 0 0 0 .8.8h18.4a.8.8 0 0 0 .8-.8V.8a.8.8 0 0 0-.8-.8Zm-1 18.2H1.8V1.8h16.4v16.4Z"
                />
              </svg>
            Code
          </li>
        </a>
        <a
          href=""
          className="border-2 px-5 py-1 border-medium-violet hover:bg-medium-violet hover:text-light-violet"
        >
          <li className="flex gap-2 place-items-center ">
              <svg
              className="fill-current"
                width="15"
                height="22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.286 3.85c0-.146.056-.286.157-.389A.529.529 0 0 1 4.82 3.3h5.358c.142 0 .278.058.378.161a.557.557 0 0 1 0 .778.529.529 0 0 1-.378.161H4.82a.529.529 0 0 1-.378-.161.558.558 0 0 1-.157-.389ZM2.679 6.6a.529.529 0 0 0-.38.161.558.558 0 0 0 0 .778c.101.103.238.161.38.161h9.643a.529.529 0 0 0 .378-.161.558.558 0 0 0 0-.778.529.529 0 0 0-.378-.161H2.678Zm-.536 2.75c0-.146.056-.286.157-.389a.529.529 0 0 1 .379-.161h9.643c.142 0 .278.058.378.161a.558.558 0 0 1 0 .778.529.529 0 0 1-.378.161H2.678a.529.529 0 0 1-.38-.161.558.558 0 0 1-.156-.389ZM2.679 11a.529.529 0 0 0-.38.161.557.557 0 0 0 0 .778c.101.103.238.161.38.161h9.643a.53.53 0 0 0 .378-.161.558.558 0 0 0 0-.778.529.529 0 0 0-.378-.161H2.678Z"
                />
                <path
                  clip-rule="evenodd"
                  d="M15 17.6a2.23 2.23 0 0 1-.628 1.556 2.115 2.115 0 0 1-1.515.644H11.25V22l-1.607-.825L8.036 22v-2.2H2.143a2.115 2.115 0 0 1-1.515-.644A2.23 2.23 0 0 1 0 17.6V2.2C0 1.617.226 1.057.628.644A2.115 2.115 0 0 1 2.143 0h10.714c.569 0 1.114.232 1.515.644.402.413.628.973.628 1.556v15.4ZM2.143 1.1c-.284 0-.557.116-.758.322-.2.206-.314.486-.314.778v15.4c0 .292.113.572.314.778.201.206.474.322.758.322h5.893v-1.295a2.253 2.253 0 0 1-.346-2.36c.17-.386.444-.713.79-.943a2.103 2.103 0 0 1 2.325 0c.347.23.621.557.79.943a2.253 2.253 0 0 1-.345 2.36V18.7h1.607c.284 0 .557-.116.758-.322.2-.206.314-.486.314-.778V2.2c0-.292-.113-.572-.314-.778a1.058 1.058 0 0 0-.758-.322H2.143Zm8.036 16.98a2.09 2.09 0 0 1-1.072 0v2.14l.536-.275.536.275v-2.14Zm-.536-1.03c.284 0 .556-.116.757-.322.201-.207.314-.486.314-.778 0-.292-.113-.571-.314-.778a1.058 1.058 0 0 0-.757-.322c-.284 0-.557.116-.758.322-.2.207-.314.486-.314.778 0 .292.113.572.314.778.201.206.474.322.758.322Z"
                />
              </svg>
            Resume
          </li>
        </a>
        <a
          href=""
          className="border-2 px-5 py-1 border-medium-violet hover:bg-medium-violet hover:text-light-violet"
        >
          <li className="flex gap-2 place-items-center ">
              <svg
              className="fill-current"
                width="24"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 0H5v2H3v6h2v2h6V8H5V2h6V0Zm0 2h2v6h-2V2ZM0 14h2v4h12v2H0v-6Zm2 0h12v-2H2v2Zm14 0h-2v6h2v-6ZM15 0h4v2h-4V0Zm4 8h-4v2h4V8Zm0-6h2v6h-2V2Zm5 12h-2v4h-4v2h6v-6Zm-6-2h4v2h-4v-2Z"
                />
              </svg>
            Social
          </li>
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
