const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 text-gray-900 dark:text-gray-100">
                    Contáctame
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Si deseas ponerte en contacto conmigo, no dudes en enviarme un correo electrónico a{" "}
                    <a href="mailto:ceciliaga604@gmail.com" className="text-sky-500 dark:text-sky-400">
                        ceciliaga604@gmail.com
                    </a>
                    . También puedes encontrarme en mis redes sociales.
                </p>
            </div>
        </section>
    );
};

export default Contact;
