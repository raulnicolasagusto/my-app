'use client';
{/*  en el minuto 1:14:00 del video, cambia este componente como server y lo deja de esa forma */ }
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import { Search } from "lucide-react";


const SearchInput = () => {

    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");

    const HandleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      { /*  Para busquedas con espacios*/ }
        if (searchQuery.trim()) {
          router.push(`/search/${encodeURIComponent(searchQuery.trim())}`);
        }
    }

  return (
    <form onSubmit={HandleSubmit} className="relative w-full flex-1 max-w-[300px]">
      
        <input
         type="text"
         placeholder="Buscar cursos..."
         value={searchQuery}
         onChange={(e) => setSearchQuery(e.target.value)}
         className="w-full rounded-full bg-secondary/80 px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
         />
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"/>
    </form>
  )
}

export default SearchInput