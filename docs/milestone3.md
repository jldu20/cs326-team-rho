How to use the Website:
    From the home page, we have 3 pages working, resources, tutee list, request tutor. If you hover over
    the profile image in the top right of the screen there will be multiple opitions... My account, Update Profile,
    Delete Profile, and Create profile. Update profile will take you to a page where you can make changes to your current
    profile, Delete Profile, will simply remove your profile from the MongoDB database, and create profile will take you to the page
    where the end user can make a profile. The search bar on the tutee list page allows you search for a specific student by name. 

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

Breakdown:
Jerry: 
    secret keys for database access. 
    creating cards in tutee list when submit button is clicked on the request tutor page
    worked on search button in tutee list to filter out names of tutees

Gordon: 
    Connected frontend to backend
    set up mongodb connection and database interaction

Hadi: 
    Revamped UI for multiple pages 
    Added search bar and dropdown menu