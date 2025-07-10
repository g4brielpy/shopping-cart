import { FaReact } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export function FooterPage() {
  return (
    <footer className="bg-black/50 text-white py-8">
      <section className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="flex items-center gap-2 text-lg md:text-xl">
          <FaReact className="text-cyan-400" />
          <strong>Shopping</strong>
        </div>

        <div className="text-sm md:text-base text-gray-300">
          <p>Produtos de todas as categorias</p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} Shopping. Todos os direitos
            reservados. <br />
            Criado por Gabriel Iuri
          </p>
        </div>

        <div className="flex gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/g4briel-yur1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/g4brielpy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaGithubSquare />
          </a>
        </div>
      </section>
    </footer>
  );
}
