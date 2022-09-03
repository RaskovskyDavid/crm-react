import React from 'react'
import { Formik, Form, Field } from 'formik'
const Formulario = () => {
    const handleSubmit = async (valores) => {
        // try {
        //     let respuesta 
        //     if(cliente.id) {
        //         // Editando un registro
        //         const url = `${import.meta.env.VITE_API_URL}/${cliente.id}`
        //         respuesta = await fetch(url, {
        //             method: 'PUT',
        //             body: JSON.stringify(valores),
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             }
        //         })

        //     } else {
        //         // Nuevo Registro
        //         const url = import.meta.env.VITE_API_URL
        //         respuesta = await fetch(url, {
        //             method: 'POST',
        //             body: JSON.stringify(valores),
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             }
        //         })
        //     }

        //     await respuesta.json()
        //     navigate('/clientes')
        // } catch (error) {
        //     console.log(error)
        // }
    }
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md 
            md:w-3/4 mx-auto text-left">
                <h1 className="text-gray-600 font-bold text-xl uppercase text-center">Editar Cliente</h1>
        <Formik
            initialValues={{
                nombre: "",
                empresa:  "",
                email: "",
                telefono:  "",
                notas: "",
            }}
            onSubmit={ async (values, {resetForm}) => {
                await handleSubmit(values)
                resetForm()
            }}
        >
            {() => (
            <Form className="mt-10">
                <div className="mb-4">
                <label className="text-gray-800"
                                htmlFor="nombre"
                            >Nombre:</label>
                    <Field 
                                id="nombre"
                                type="text"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                placeholder="Nombre del Cliente"
                                name="nombre"
                            />
                </div>
                <div className="mb-4">
                            <label
                                className="text-gray-800"
                                htmlFor="empresa"
                            >Empresa:</label>
                            <Field 
                                id="empresa"
                                type="text"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                placeholder="Empresa del Cliente"
                                name="empresa"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="text-gray-800"
                                htmlFor="email"
                            >E-mail:</label>
                            <Field 
                                id="email"
                                type="email"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                placeholder="Email del Cliente"
                                name="email"
                            />
                        </div>        
                        <div className="mb-4">
                            <label
                                className="text-gray-800"
                                htmlFor="telefono"
                            >Teléfono:</label>
                            <Field 
                                id="telefono"
                                type="tel"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                placeholder="Teléfono del Cliente"
                                name="telefono"
                            />
                        </div>  
                        <div className="mb-4">
                            <label
                                className="text-gray-800"
                                htmlFor="notas"
                            >Notas:</label>
                            <Field 
                                as="textarea"
                                id="notas"
                                type="text"
                                className="mt-2 block w-full p-3 bg-gray-50 h-40"
                                placeholder="Notas del Cliente"
                                name="notas"
                            />
                        <input
                            type="submit"
                            value='Editar Cliente'
                            className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
                        />    
                        </div>        
            </Form>
             )}
        </Formik>
      
    </div>
  )
}

export default Formulario
