"use client" //it's must for error page
const ErrorPage = ({error, reset}) =>{

    return (
        <div>
            <h1 className="text-center text-red-500 my-5 text-xl">Something went wrong!</h1>
            <p className="text-center text-red-500 my-5 text-xl">{error.message}</p>
        </div>
    )
}
export default ErrorPage;