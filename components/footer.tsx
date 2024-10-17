// Footer.js
export const Footer = () => {
  return (
    <footer className="bg-[#0c1533] w-full dark:bg-gray-900">
      <div className="container mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-6 md:mb-0">
            <a className="flex items-center" href="#home">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                UX Club
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Events
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a className="hover:underline" href="/design-a-thon">
                    UXperience
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                About
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a className="hover:underline" href="/about">
                    Meet the Team
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Connect
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    className="hover:underline"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfsK7f1D7whW0AGTJS97xpqPdUru_e6SYNhyejdGkcowByRng/viewform"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Join Us
                  </a>
                </li>
                <li>
                  <a
                    className="hover:underline"
                    href="mailto:uxclub16@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Send us a message
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a className="hover:underline" href="#home">
              UX Club™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              aria-label="LinkedIn"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              href="https://www.linkedin.com/company/uxutd/" // Replace with your LinkedIn URL
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M100.28 448H7.4V149.24h92.88V448zM53.86 109.63C24.12 109.63 0 85.51 0 65.62 0 45.72 24.12 21.6 53.86 21.6c29.84 0 53.86 24.12 53.86 43.98 0 19.9-24.02 43.99-53.86 43.99zM447.93 448h-92.9V302.45c0-34.39-12.23-57.78-42.56-57.78-23.16 0-36.9 15.59-42.9 30.64-2.21 5.33-2.74 12.82-2.74 20.23V448h-92.89s1.24-237.7 0-262.76h92.89v37.39c-0.19.29-.47.72-.78 1.1h.78v-.01c12.82-19.57 35.79-47.58 87.12-47.58 63.72 0 111.63 41.6 111.63 131.09V448z" />
              </svg>
            </a>
            <a
              aria-label="Discord"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              href="https://discord.gg/68crdRwSD5"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 21 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
            </a>
            <a
              aria-label="Instragram"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              href="#home"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.1 141c-63.6 0-115.1 51.5-115.1 115.1S160.5 371.1 224.1 371.1 339.2 319.6 339.2 256 287.7 141 224.1 141zm0 189.6c-41.1 0-74.5-33.4-74.5-74.5s33.4-74.5 74.5-74.5 74.5 33.4 74.5 74.5-33.4 74.5-74.5 74.5zm146.4-194.3c0 14.9-12 27-27 27-14.9 0-27-12-27-27s12-27 27-27 27 12 27 27zm76.1 27.2c-1.7-35.7-9.9-67.3-36.2-93.5-26.2-26.2-57.8-34.4-93.5-36.2-37.3-2.1-148.7-2.1-186 0-35.7 1.7-67.3 9.9-93.5 36.2s-34.4 57.8-36.2 93.5c-2.1 37.3-2.1 148.7 0 186 1.7 35.7 9.9 67.3 36.2 93.5 26.2 26.2 57.8 34.4 93.5 36.2 37.3 2.1 148.7 2.1 186 0 35.7-1.7 67.3-9.9 93.5-36.2 26.2-26.2 34.4-57.8 36.2-93.5 2.1-37.3 2.1-148.7 0-186zm-48.9 224c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.9 9s-103.4 2.6-132.9-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.9s-2.6-103.4 9-132.9c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.9-9s103.4-2.6 132.9 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.9s2.6 103.4-9 132.9z" />
              </svg>
            </a>
            <a
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              href="mailto:uxutdallas@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.5 3h21a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 19.5v-15A1.5 1.5 0 0 1 1.5 3zm10.5 8.25L2.604 5.394a.75.75 0 1 0-.854 1.213l9.25 6.5a.75.75 0 0 0 .896 0l9.25-6.5a.75.75 0 1 0-.854-1.213L12 11.25z" />
              </svg>
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
