How to use the Website:
    From the home page, we have 3 pages working, resources, tutee list, request tutor. If you hover over
    the profile image in the top right of the screen there will be multiple opitions... My account, Update Profile,
    Delete Profile, and Create profile. As of now the only link that works is update profile. We hope to use this dropdown
    as an easy way for the user to preform the CRUD operations on their profile. 

URL: https://cs326-rho.herokuapp.com/ (home, request tutor, tutee list)

Student structure for database:
    student document
    {
	    _id: <ObjectId1>,
	    Name: String,  // The name of the student
        Email: String // The students UMass email so tutor can contact student
        Course: String // The specific course the student wants help in
        Grade: String // The grade the student is, Freshman, sophmore, junior, or senior
        Description: String // Description of the kind of help the tutee wants from the tutor

    }
