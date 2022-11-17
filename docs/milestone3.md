Student structure for database:

    student document
    {
	    _id: <ObjectId1>,
	    student_name: String,  // The name of the student
	    school_year: Integer,  // The school year the student is in
        description_of_help: String, // Description for what the student needs help with
        email: String // The students UMass email so tutor can contact student

    }

Tutor structure for database:
    tutor document
    {
	    _id: <ObjectId1>,
	    tutor_name: String,  // The name of the tutor
	    school_year: Integer,  // The school year the tutor is in
        age: Integer, // How old the tutor is
        tutorable_courses: String // courses that the tutor is confident in tutoring
        email: String // the tutors email

    }
