export default function FormError({ name, isError }: { name: string, isError: boolean }) {
    const capitalized = `${name.split('').shift()?.toLocaleUpperCase()}${name.split('').slice(1).join('')}`

    return <>{isError ? <div className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 rounded relative" role="alert">
        < span className="block sm:inline text-sm" > {capitalized} invalide</span >
    </div > : null}</>
}