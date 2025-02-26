import { StructureBuilder } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Adminstrador")
    .items([
      // Course Content
      S.listItem()
        .title("Cursos")
        .child(
          S.documentTypeList("course")
            .title("Cursos")
            .child((courseId) =>
              S.list()
                .title("Opciones de curso")
                .items([
                  // Option to edit course content
                  S.listItem()
                    .title("Contenido del curso")
                    .child(
                      S.document().schemaType("course").documentId(courseId)
                    ),
                  // Option to view course enrollments
                  S.listItem()  
                    .title("Ver estudiantes")
                    .child(
                      S.documentList()
                        .title("Inscripciones a Cursos")
                        .filter(
                          '_type == "enrollment" && course._ref == $courseId'
                        )
                        .params({ courseId })
                    ),
                ])
            )
        ),

      S.divider(),

      // Users
      S.listItem()
        .title("Gestion de usuarios")
        .child(
          S.list()
            .title("Selecciona un tipo de usuario")
            .items([
              // Instructors with options
              S.listItem()
                .title("Profesores/Instructores")
                .schemaType("instructor")
                .child(
                  S.documentTypeList("instructor")
                    .title("Profesores/Instructores")
                    .child((instructorId) =>
                      S.list()
                        .title("Opciones del Profesor/Instructor")
                        .items([
                          // Option to edit instructor details
                          S.listItem()
                            .title("Editar detalles del profesor/instructor")
                            .child(
                              S.document()
                                .schemaType("instructor")
                                .documentId(instructorId)
                            ),
                          // Option to view instructor's courses
                          S.listItem()
                            .title("Ver cursos del instructor")
                            .child(
                              S.documentList()
                                .title("Cursos del Instructor")
                                .filter(
                                  '_type == "course" && instructor._ref == $instructorId'
                                )
                                .params({ instructorId })
                            ),
                        ])
                    )
                ),
              // Students with options
              S.listItem()
                .title("Estudiantes")
                .schemaType("student")
                .child(
                  S.documentTypeList("student")
                    .title("Estudiantes")
                    .child((studentId) =>
                      S.list()
                        .title("Opciones del Estudiante")
                        .items([
                          // Option to edit student details
                          S.listItem()
                            .title("Editar detalles del estudiante")
                            .child(
                              S.document()
                                .schemaType("student")
                                .documentId(studentId)
                            ),
                          // Option to view enrollments
                          S.listItem()
                            .title("Ver matriculas")
                            .child(
                              S.documentList()
                                .title("Matriculas del Estudiante")
                                .filter(
                                  '_type == "enrollment" && student._ref == $studentId'
                                )
                                .params({ studentId })
                            ),
                          // Option to view completed lessons
                          S.listItem()
                            .title("Ver cursos completadas")
                            .child(
                              S.documentList()
                                .title("Cursos completados")
                                .schemaType("lessonCompletion")
                                .filter(
                                  '_type == "lessonCompletion" && student._ref == $studentId'
                                )
                                .params({ studentId })
                                .defaultOrdering([
                                  { field: "completedAt", direction: "desc" },
                                ])
                            ),
                        ])
                    )
                ),
            ])
        ),

      S.divider(),

      // System Management
      S.listItem()
        .title("Gestion del sistema")
        .child(
          S.list()
            .title("Gestion del sistema")
            .items([S.documentTypeListItem("category").title("Categorias")])
        ),
    ]);