import { Link } from "wouter";

const TopBar = ({ brands }) => {
  return (
    <div className="w-screen h-full bg-black">
      <div className="px-3 py-5 flex flex-col">
        {/* brands */}
        <div className="flex items-center flex-wrap gap-5">
          {brands.map((brand) => (
            <div key={brand.id}>
              <Link href="/products">
                <img src={brand.image} className="w-14" alt="" />
              </Link>
            </div>
          ))}
        </div>

        {/* contact data */}
        <div className="mt-7 flex items-center justify-center">
          <div className="flex items-center gap-2 border-r-[1px] border-r-[var(--gray)] px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#C7C7C7"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#C7C7C7"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <span className="text-[var(--gray)] font-medium text-sm">
              1145236585
            </span>
          </div>

          <div className="flex items-center gap-2 px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#C7C7C7"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>

            <span className="text-[var(--gray)] font-medium text-sm">
              contacto@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
