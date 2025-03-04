import { searchCourses } from "@/sanity/lib/courses/searchCourses";
import { redirect } from "next/navigation";
import { Search } from "lucide-react";
import CourseCard from "@/components/CourseCard";

async function SearchPage({
  params,
}: {
  params: { term: string };
}) {
  const term = decodeURIComponent(params.term);

  if (!term) {
    return redirect("/");
  }

  const decodedTerm = decodeURIComponent(term);
  const courses = await searchCourses(decodedTerm);
  

  return (
    <div className="h-full pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Search className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">Search Results || Resultados de búsqueda</h1>
            <p className="text-muted-foreground">
              Found {courses.length} result{courses.length === 1 ? "" : "s"} for
              &quot;{decodedTerm}&quot;
            </p>
          </div>
        </div>

        {courses.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">No courses found || No se encontraron resultados</h2>
            <p className="text-muted-foreground mb-8">
              Try searching with different keywords || Intenta con otras palabras claves
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard
                key={course._id}
                course={course}
                href={`/courses/${course.slug}`}
              />
            ))}
          </div>
        )}
      </div>      
    </div>
  )
}

export default SearchPage;
