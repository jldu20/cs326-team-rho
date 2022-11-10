Part 0: Project API Planning
Before you write any code, you will need to think of how the client should obtain information from the back-end server. Whether you use RESTful APIs or using other types of APIs, you will need to have different endpoints to provide different functionalities for the users. You will need to write out all APIs the server will provide with a brief description for each. You can also include examples of input and output. 
Alternatively, you can draw out a flow-chart with the information.
Put all this information in docs/milestone2.md

Endpoints
Login Endpoint: Get request that takes in a string for username and a string for the password

Request Help Form: POST request Create a profile for yourself with Name, Class, Availbility, Contact info

Become a tutor form: POST request Create a profile for yourself with Qualifications and Contact info 

Edit Profile: Put request Change any information or add anything new

View Resources by Class: GET request returns list of videos for a given class


URL: https://cs326-rho.herokuapp.com/ (home, request tutor, tutee list)

Breakdown:
Jerry: Revamped UI for request tutor, heroku deploy
Gordon: Revamped UI for Resources
Hadi: Revamped UI for tutee list


This is the resource page that has a search bar to search for resources relating to the search input. Also has links that the user can click to view resoruces relating to a classlevel. This is where the user can READ data. 

<img src="Resources Links.png" width="350" title="Resource Links">

This is a rough outline of a tutee profile. The tutee will be able to create a profile and is able to edit it. This is where the user can create, update and deleate a profile.

<img src="Tutee Profile.png" width="350" title="Tutee Profile">

This is a tutor application page where one can sign up to be a tutor. This is another create operation. 

<img src="Tutor Application.png" width="350" title="Tutor Application">