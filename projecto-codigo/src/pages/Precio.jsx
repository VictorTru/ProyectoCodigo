import React from "react";

const Precio = () => {
  return (
    <div>
      <>
        {/* Container for demo purpose */}
        <div className="container my-24 px-6 mx-auto">
          {/* Section: Design Block */}
          <section className="mb-32 text-gray-800">
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n      #pricing-block-5 {\n        height: 300px;\n        padding-top: 55px;\n      }\n\n      @media (min-width: 992px) {\n        #pricing-block-5 {\n          height: 400px;\n          padding-top: 80px;\n        }\n      }\n      .background-radial-gradient {\n        background-color:#4D96A9}\n    ",
              }}
            />
            <div
              id="pricing-block-5"
              className="background-radial-gradient text-center text-white"
            >
              <h2 className="text-3xl font-bold text-center mb-12">
                Nuestros Precios
              </h2>
            </div>
            <div
              className="grid lg:grid-cols-3 px-6 md:px-12 xl:px-32"
              style={{ marginTop: "-200px" }}
            >
              <div className="p-0 py-12">
                <div className="block rounded-lg shadow-lg bg-white h-full lg:rounded-tr-none lg:rounded-br-none">
                  <div className="p-6 border-b border-gray-300 text-center">
                    <p className="uppercase mb-4 text-sm">
                      <strong>Precio Basico</strong>
                    </p>
                    <h3 className="text-2xl mb-6">
                      <strong>S/. 80</strong>
                      <small className="text-gray-500 text-sm">/año</small>
                    </h3>
                    <button
                      type="button"
                      className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
                      style={{ backgroundColor: "hsl(0, 0%, 95%)" }}
                      data-mdb-ripple="true"
                      data-ripple-color="primary"
                    >
                      Comprar
                    </button>
                  </div>
                  <div className="p-6">
                    <ol className="list-inside">
                      <li className="mb-4 flex items-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          className="text-green-600 w-4 h-4 mr-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        1 sesión de coaching virtual de 60 minutos
                      </li>
                      <li className="mb-4 flex items-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          className="text-green-600 w-4 h-4 mr-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        Acceso a herramientas y recursos para el
                        autoconocimiento y el desarrollo personal
                      </li>
                      <li className="mb-4 flex items-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          className="text-green-600 w-4 h-4 mr-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        Seguimiento y apoyo por correo electrónico después de la
                        sesión
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="p-0">
                <div className="block rounded-lg shadow-lg bg-[#B3BFDD] h-full z-10">
                  <div className="p-6 border-b border-gray-300 text-center">
                    <p className="uppercase mb-4 text-sm">
                      <strong>Plan Profresional</strong>
                    </p>
                    <h3 className="text-2xl mb-6">
                      <strong>S/. 140</strong>
                      <small className="text-gray-500 text-sm">/año</small>
                    </h3>
                    <button
                      type="button"
                      className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                    >
                      Comprar
                    </button>
                  </div>
                  <div className="p-6">
                    <ol className="list-inside">
                      <li className="mb-4 flex items-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          className="text-green-600 w-4 h-4 mr-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        1 sesión de coaching virtual de 60 minutos
                      </li>

                      <li className="mb-4 flex items-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          className="text-green-600 w-4 h-4 mr-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        1 sesion de Psicologia emocional de 60 minutos
                      </li>

                      <li className="mb-4 flex items-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          className="text-green-600 w-4 h-4 mr-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        Acceso a herramientas y recursos para el
                        autoconocimiento y el desarrollo personal
                      </li>
                      <li className="mb-4 flex items-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          className="text-green-600 w-4 h-4 mr-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        Seguimiento y apoyo por correo electrónico después de la
                        sesión
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="p-0 py-12">
                <div className="block rounded-lg shadow-lg bg-white h-full lg:rounded-tl-none lg:rounded-bl-none">
                  <div className="p-6 border-b border-gray-300 text-center">
                    <p className="uppercase mb-4 text-sm">
                      <strong>Plan Master</strong>
                    </p>
                    <h3 className="text-2xl mb-6">
                      <strong>S/.170 </strong>
                      <small className="text-gray-500 text-sm">/año</small>
                    </h3>
                    <button
                      type="button"
                      className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
                      style={{ backgroundColor: "hsl(0, 0%, 95%)" }}
                      data-mdb-ripple="true"
                      data-ripple-color="primary"
                    >
                      Comprar
                    </button>
                  </div>
                  <div className="p-6">
                    <ol className="list-inside">
                      <li className="mb-4 flex items-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          className="text-green-600 w-4 h-4 mr-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        1 sesión de coaching virtual de 90 minutos
                      </li>

                      <li className="mb-4 flex items-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          className="text-green-600 w-4 h-4 mr-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        1 sesion de Psicologia emocional de 90 minutos
                      </li>

                      <li className="mb-4 flex items-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          className="text-green-600 w-4 h-4 mr-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        Acceso a herramientas y recursos para el
                        autoconocimiento y el desarrollo personal
                      </li>
                      <li className="mb-4 flex items-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          className="text-green-600 w-4 h-4 mr-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        Seguimiento y apoyo por correo electrónico después de la
                        sesión
                      </li>
                     
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section: Design Block */}
        </div>
        {/* Container for demo purpose */}
      </>
    </div>
  );
};

export default Precio;
