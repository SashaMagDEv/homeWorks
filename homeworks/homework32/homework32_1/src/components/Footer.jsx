const Footer = () => {
    return (
        <footer className="mt-5 border-t border-gray-400 py-5 bg-gray-500 text-white text-center">
            <h1 className="text-lg font-semibold">Oleksandr | Web Developer</h1>
            <p className="text-sm">
                <span>Phone: <a href="tel:+380672436404" className="underline">+380672436404</a>
                </span> |{" "}
                <span>Email:<a href="mailto:magnuh10@gmail.com"
                                className="underline">magnuh10@gmail.com</a>
                </span> |{" "}
                <span>GitHub: <a href="https://github.com/SashaMagDEv" className="underline"
                                 target="_blank">SashaMagDEv</a>
                </span>
            </p>
        </footer>
    )
}
export default Footer;