import logo from "../../images/logo.svg";
import dribbbleIcon from "../../images/dribble.svg";
import {
  FacebookLogoIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@phosphor-icons/react";

export function Footer() {
  // eslint-disable-next-line prefer-const
  let data = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-teal-600">
            <img src={logo} alt="Logo da Empresa" className="h-8" />
          </div>

          <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75 hover:text-teal-600"
              >
                <span className="sr-only">Facebook</span>

                <FacebookLogoIcon size={24} weight="fill" />
              </a>
            </li>

            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75 hover:text-teal-600"
              >
                <span className="sr-only">Instagram</span>
                <InstagramLogoIcon size={24} weight="fill" />
              </a>
            </li>

            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75 hover:text-teal-600"
              >
                <span className="sr-only">Twitter</span>
                <TwitterLogoIcon size={24} weight="fill" />
              </a>
            </li>

            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75 hover:text-teal-600"
              >
                <span className="sr-only">GitHub</span>
                <GithubLogoIcon size={24} weight="fill" />
              </a>
            </li>

            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75 hover:text-teal-600"
              >
                <span className="sr-only">Dribbble</span>

                <img src={dribbbleIcon} alt="Dribbble" className="size-6" />
              </a>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
          <div>
            <p className="font-medium text-gray-900">Services</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  1on1 Coaching
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Company Review
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Accounts Review
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  HR Consulting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  SEO Optimisation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-900">Company</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Meet the Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Accounts Review
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-900">Helpful Links</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Live Chat
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-900">Legal</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Accessibility
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Returns Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Hiring-3 Statistics
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-gray-500">
          © {data}. MeLeva Carona. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
