import { Link } from "react-router-dom";
import dribbbleIcon from "../../assets/dribble.svg";
import {
  FacebookLogoIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@phosphor-icons/react";

export function Footer() {
  const data = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-teal-600">
            <img src="../../../public/img/logo.png" alt="logo" className="w-35 items-center" />
          </div>

          <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
            <li>
              <Link
                to="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75 hover:text-teal-600"
              >
                <span className="sr-only">Facebook</span>
                <FacebookLogoIcon size={24} weight="fill" />
              </Link>
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
            <p className="font-medium text-gray-900">Serviços</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Oferecer Carona
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Procurar Carona
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Cálculo de Custos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Avaliações de Usuários
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Viagens Seguras
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-900">Empresa</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="/sobre"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Sobre o MeLeva
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Nossa Missão
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Sustentabilidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Imprensa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Carreiras
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-900">Links Úteis</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="/contato"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Dúvidas Frequentes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Blog de Viagens
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
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Regras de Convivência
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Política de Cancelamento
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-gray-500">
          © {data}. MeLeva Carona. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
