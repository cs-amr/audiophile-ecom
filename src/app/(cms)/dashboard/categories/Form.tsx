
import { createCategory } from "@/lib/createCategory"


export default function Form() {
    return (
        <form action={createCategory}>
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" name="name" id="name" required placeholder="headphones" className="p-1 my-1 border focus:border focus:outline-none" />
            <button type="submit" className="bg-black  text-white p-1 rounded-sm px-3">add</button>
        </form>
    )
}
