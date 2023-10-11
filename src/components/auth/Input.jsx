import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons"
function Input({ name, type, label, handleChange, handleShowPassword }) {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block font-medium">
                {label}
            </label>
            <div className="flex gap-2">
                <input
                    type={type}
                    id={name}
                    name={name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                    placeholder={label}
                />
                {name === 'password' && <button className="px-3 py-2 border rounded focus:outline-none focus:border-blue-500" onClick={handleShowPassword}>
                    {type === 'password' ? <EyeClosedIcon /> : <EyeOpenIcon />}
                </button>}
            </div>

        </div>
    )
}

export default Input