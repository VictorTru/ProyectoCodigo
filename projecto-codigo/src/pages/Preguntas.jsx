import React from 'react'
import image from '../assets/image/pregunta.png'

const Preguntas = () => {
  return (
    <div><>
    {/* Container for demo purpose */}
    <div className="container my-24 px-6 mx-auto">
      {/* Section: Design Block */}
      <section className="mb-32 text-gray-800">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-x-12 lg:mb-0">
        <div className="mb-6 md:mb-0">
            <p className="font-bold mb-4">¿Como funciona la pagina?</p>
            <p className="text-gray-500 mb-12">
            Es una plataforma en la cual se va ayudar a las personas a encontrar su profesional ideal para el ambito del cuerpo, mente y alma.
            </p>
            <p className="font-bold mb-4">
            ¿Como agendo una cita?
            </p>
            <p className="text-gray-500 mb-12">
            Seleccionando en la pestaña de categoria se va a poder visualizar la lista con los profesionales ademas de su horario en el cual se seleccionando la hora indicada  se podra reservar la cita, para reservar una cita es necesario haberse registrado previamente una vez confirmado esto se procedera al pago.
            </p>
            <p className="font-bold mb-4">
            ¿Cuanto tiempo dura una cita?
            </p>
            <p className="text-gray-500 mb-12">
            La duracion estandar por cita es de 60 minutos
            </p>
           
          </div>
        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-11/12">
        <img
          src={image}
          className="w-full"
          alt="Phone image"
        />
      </div>
        
        </div>
      </section>
      {/* Section: Design Block */}
    </div>
    {/* Container for demo purpose */}
  </>
  </div>
  )
}

export default Preguntas