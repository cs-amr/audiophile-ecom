import { createCategory } from "@/lib/createCategory";

export default function Form() {
  return (
    <form action={createCategory}>
      <label htmlFor="name">Name</label>
      <br />
      <input
        type="text"
        name="name"
        id="name"
        required
        placeholder="headphones"
        className="my-1 border p-1 focus:border focus:outline-none"
      />
      <button
        type="submit"
        className="ml-4 rounded-sm bg-black p-1 px-3 text-white"
      >
        add
      </button>
    </form>
  );
}
