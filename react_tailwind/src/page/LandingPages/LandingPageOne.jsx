import React from "react";
import image from "../../assets/img/guilherme-stecanella-4jy1DQKmX2w-unsplash.jpg";

const LandingPage = () => {
  return (
    <React.Fragment>
      <nav className="py-6 bg-violet-100">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-3xl font-bold">Page LOGO</h3>
            </div>
            <ul className="flex justify-end items-center">
              <li className="px-3 py-2 text-center">
                <a
                  className="px-3 pb-1 hover:border-b-4 hover:border-violet-800"
                  href="/"
                >
                  Blog
                </a>
              </li>
              <li className="px-3 py-2 text-center">
                <a
                  className="px-3 pb-1 hover:border-b-4 hover:border-violet-800"
                  href="/"
                >
                  About
                </a>
              </li>
              <li className="px-3 py-2 text-center">
                <a
                  className="px-3 pb-1 hover:border-b-4 hover:border-violet-800"
                  href="/"
                >
                  How it works?
                </a>
              </li>
              <li className="px-3 py-2 text-center">
                <a
                  className="px-3 pb-1 hover:border-b-4 hover:border-violet-800"
                  href="/"
                >
                  Pricing
                </a>
              </li>
              <button
                className="
                px-6
                py-4
                ml-6
                rounded-full
                bg-white
                text-violet-800
                hover:bg-violet-800 hover:text-violet-100
              "
              >
                Login
              </button>
            </ul>
          </div>
        </div>
      </nav>
      <div className="bg-violet-100">
        <div className="w-1/2 text-center m-auto pt-32 pb-52">
          <h6 className="uppercase text-violet-800">how it works</h6>
          <h3 className="mt-4 text-7xl font-medium">
            It's time to fill up your memories.
          </h3>
          <button
            className="
            mt-4
            p-4
            px-10
            bg-violet-800
            rounded-full
            capitalize
            text-white
            font-medium
            hover:bg-violet-900
          "
          >
            learn more
          </button>
        </div>
      </div>

      <div className="-mt-20">
        <div className="w-3/4 m-auto">
          <div
            className="
            grid
            sm:grid-cols-1 sm:grid-rows-2
            md:grid-cols-2 md:grid-rows-1
          "
          >
            <div
              className="bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${image})`,
              }}
            ></div>
            <div className="bg-violet-800 text-white font-light py-36 px-24">
              <h6 className="uppercase">Getting Started</h6>
              <ul className="w-2/3 leading-7 ml-6">
                <li className="mt-5">
                  <p className="font-semibold">Download the Momunto app</p>
                  Momunto App is available in
                  <a
                    className="underline underline-offset-2 hover:font-medium"
                    href="/"
                  >
                    {" "}
                    AppStore
                  </a>
                  and
                  <a
                    className="underline underline-offset-2 hover:font-medium"
                    href="/"
                  >
                    {" "}
                    Google Play Store
                  </a>
                </li>
                <li className="mt-5">
                  <p className="font-semibold">Create an account</p>
                  To create an account, simply fill the registration form
                </li>
                <li className="mt-5">
                  <p className="font-semibold">Invite all your family</p>
                  See
                  <a
                    className="underline underline-offset-2 hover:font-medium"
                    href="/"
                  >
                    {" "}
                    how to add a family memeber
                  </a>
                </li>
                <li className="mt-5">
                  <p className="font-semibold">Start sharing and chatting.</p>
                  See
                  <a
                    className="underline underline-offset-2 hover:font-medium"
                    href="/"
                  >
                    how to upload images and videos
                  </a>
                  or
                  <a
                    href="/"
                    className="underline underline-offset-2 hover:font-medium"
                  >
                    start a video chat
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="w-1/2 text-center m-auto pt-32 pb-52">
          <h6 className="uppercase text-violet-800">how it works</h6>
          <h3 className="mt-4 text-7xl font-medium">A little extra help</h3>
          <p className="mt-4 text-2xl">
            It may be a bit confusing the first time so we've put together some
            instructions, if you need a little help
          </p>
        </div>
      </div>

      <footer className="py-10 bg-violet-900 text-white">
        <div className="container mx-auto">
          <div className="flex sm:flex-col md:flex-row p-10">
            <div className="md:w-2/3 grow">
              <h3 className="capitalize text-xl font-medium">useful links</h3>
              <ul className="mt-5">
                <li className="p-2">
                  <a
                    className="
                    hover:text-violet-100
                    hover:underline
                    hover:underline-offset-2
                  "
                    href="/"
                  >
                    Blog
                  </a>
                </li>
                <li className="p-2">
                  <a
                    className="
                    hover:text-violet-100
                    hover:underline
                    hover:underline-offset-2
                  "
                    href="/"
                  >
                    About
                  </a>
                </li>
                <li className="p-2">
                  <a
                    className="
                    hover:text-violet-100
                    hover:underline
                    hover:underline-offset-2
                  "
                    href="/"
                  >
                    How It Works?
                  </a>
                </li>
                <li className="p-2">
                  <a
                    className="
                    hover:text-violet-100
                    hover:underline
                    hover:underline-offset-2
                  "
                    href="/"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 grow md:text-right">
              <h3 className="capitalize text-3xl font-medium"> Momunto </h3>
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum distinctio culpa id, blanditiis inventore vel amet!
              </p>
              <p className="mt-10">call us: 98765432100</p>
            </div>
          </div>
        </div>
        <p className="text-center text-xl">&copy; Copyright 2021-22</p>
      </footer>
    </React.Fragment>
  );
};

export default LandingPage;
