# Trainline

**Task specifications**

We want to create a simple two "page" web application to display train services. Our UX designer has created some mockups:

On the first page there is a list of all departing services, like this:

<a href="https://imgbb.com/"><img src="https://image.ibb.co/jOY9o9/Farringdon_to_West_Hampstead_Thameslink_Services.png" alt="Farringdon_to_West_Hampstead_Thameslink_Services" border="0"></a>

When user clicks/taps on a service, calling points are displayed:
    
<a href="https://ibb.co/j0h8gU"><img src="https://image.ibb.co/c328gU/Farringdon_to_West_Hampstead_Thameslink_Live_Departures_Arrivals.png" alt="Farringdon_to_West_Hampstead_Thameslink_Live_Departures_Arrivals" border="0"></a>

Implementation details:

Create a React application with those two pages. Use the following data:

    List of departing services: wat-departures.json
    Click on first service: WAT-service-origin-W92931-2018-04-24.json
    Click on second service: WAT-service-origin-W92443-2018-04-24.json

These files include origins and destinations as codes, get your app working but just displaying these codes. We have estimated the test to take a few hours, but feel free to use more time if you need it. Feel free to make tradeoffs or simplify things.

Nice to have:

    Is it a responsive app?
    CSS-only solution (no images)
    Routing

We will pay attention to:

    Code quality
    Readme: have you made any trade-offs? What do you
    Naming conventions
    Consistency
    Styling
    Tests quality
    Commit history

## Tech Stack

React JS, Jest, Sinon, Enzyme.


## Installation

- Run 'git clone https://github.com/JoshuaJFHolloway/Trainline' in your terminal


## Usage

- Run 'npm install'
- Run 'npm start'
- Visit 'localhost:3000' in your browser to see the app
- To see tests, run 'npm t'


## Approach

The first thing I did was identify what the components in the application would be by examining the photos
supplied. This allowed me to understand how the react project would be structured and where state would be held.

It is clear that there is a lot of repetition in the UX design mock ups. The same component will be repeatedly
rendered but with different props being passed to it. My first thought is that I would create a component to
act as the tab you click on in the first image (10:59 Bedford, plat 4 etc). Loop over that component and feed it
data from the JSON files. Then inside of that component will be the individual list of stops. Each stop will be a
component itself and depending upon props it receives it will be either active or not. When 'active' it will
render the component in normal weighted font and inactive will be greyed. The first and last components receiving an image of the
circle filled in black. There are other things to bear in mind, such as the departing and arriving stations being
in bold.

It came apparent to me that there are different ways to bring this create this application. At this planning stage,
creating a table of components for the list makes most sense. Once again using a loop which will loop through creating
each individual train stop component until the loop reaches its limiter (this would be set by the number of stops said
route has. This will be pulled down from the JSON files into the loop). Hence, provisionally, these will be the
components I will create:

- DepartingServices.js (wrapper) - JSON files pulled in here.
- TrainTab.js (one of the individual tiles that the wrapper will hold)
- ServiceWrapper.js (holds the calling points)
- ServiceHeader.js (Farringdon to West Hempstead part at the top of the calling points)
- CallingPoint.js (one of the individual calling point tiles that the wrapper holds) 

I understand that it is preferable to use CSS only and not images. I will look to create the
project using images at first and then trade them out for pure CSS solutions if I have the time.

### Edge Cases

There are multiple edge cases in this project that I am aware of. For example, sometimes there is not a 
platform organised for the train to pull up at. I dealt with this by assigning it a 'TBC' tag. However,
with these changing lengths of text in my departing services application it meant that the CSS padding I
inserted was making things unaligned. This was the same with strings in the divs. I means that the end product
was not uniform. The buttons aren't all in the same place.

To have dealt with this I would possibly create columns within the div itself or use other CSS measurements
like vh or rem to make things neater and more aligned.


## Things I am not happy with

- Not having tested the life cycle method componentDidMount in departingServices:

I am aware that my setupTests.js file disables life cycle methods when testing to make things easier, but, I am
not too experienced with how to test them directly. I know I could possibly test to make sure it is called and 
test that it changes the state to how I expect. But the state change is huge and I don't want to create a large
variable to compare with. I know that I don't need to test fetch and componentDidMount directly as they have
their own internal testing. 


- Not having completed the callingPoints component:

I knew that I could have completed this part of the project had I just created the project without react router.
I have many times before in projects created a button, given it an onClick function, updated state, and then rendered
accordingly. And this is what I could have done with this. However, I wanted to learn react router and it also
architecturally felt wrong to use a button. If this project was to scale, it just is not useful to have multiple
buttons of different onClick functions. All changing the state and then passing down JSON. It feels sloppy and not scaleable.
React router on the other hand cleans things up and allows for me to do something which I quite liked: using string interpolation 
to import the correct JSON file depending upon the callingPoint clicked. However, ultimately, the fact that the project is not
complete is a disappointment.

- Not having tested the react router:

As I have not used it before I did not know how to test it or whether my use of it in the project was correct.
Any advice on this would be welcome.

## Trade offs

- Using a table to organise the departing services:

I did this to give a more stricter layout to the page, allow me to create a trainTab component and 
plant it nicely within a column of table data rows. However, I understand that this isnt pure CSS
and would have taken the time to do it without a table had this exercise been focused more on the presentation
of the code itself. I know that having a polished look was not priority.


- React router and time:

As aforementioned in the previous section, I decided to learn react router. It was both a learning opportunity
and an architectural decision. The trade off of doing this instead of using buttons and onClick functions that just
conditionally rendered either the BSK route or the SHP route is that I was not able to complete the assignment.
My solution so far allows for infinitely more scalability over not using react router. It is a trade off that I
don't regret in some ways because it is now clear to me how useful react router is to react projects.


## What I am content with

- Extract logic out:
 
I did this where I could to prevent one function doing anything more than it should have. I did however 
found myself wondering whether the componentDidMount function could have done a little less. Especially
pertinent in the construction of the departingServices component.


- Using React Router:

I really enjoyed using it and working it out. It felt especially useful to use it in this project and it just fit
very well architecturally, so I am pleased I took the time to understand it.


- CSS for the departingServices file:

I know its not perfect and there are some issues with the alignment of information inside each service. But I
like how it turned out. Its not far from looking very alike to the image supplied to us.


- Using react lifecycle method componentDidMount:

There are many ways that the state in the component could have been updated. But I felt that my use of
this lifecycle method really synergised well with taking the JSON and updating the state in one motion.


## Future Additions

This is what I had planned to do:

- Creating a state of arrays that held all useful information needed for the callingPoints page:

Just like in departingServices.js the state would be created from the componentDidMount function and the
functions beneath would handle the logic required to update the state in the best format possible.

To work out whether something was on Time, Departed or Expected I was taking the scheduled and actual time
for both the departure and arrival of each stop for that train. If the actual departure === the scheduled
departure then the function would return 'on Time". However, if they do not equal each other and hasDeparted
=== true then it would return 'dept.actual departure time'. If they do not equal each other and 
hasDeparted is false then it would return 'exp. real time info'.


- The css for the callingPoints component:

It would be much like the departingServices component. A table of a long column of data that would hold each
individual time, station, expected time of arrival and circle I was going to create. When the hasDeparted JSON
field === true I would make said trainTab greyed. This would be done the same way I made the 'on Time' string go green
in the departingServices file. Use in line styling, if hasDeparted === false then add grey as a style to the strings,
otherwise leave them as they are, black.


- Making the starting and concluding stations black:

I would have achieved this by setting the state originally with these two stations. Then inside the trainStopTab
component I would once again conditionally render styling depending on whether the props passed to it to render that
stop === the starting or concluding stations strings passed down from state. If they do then give that div a bolder
css. Those two stations will be kept in state individually as they need to be used for the header component that sits
on top of the list of stops.


- Import an error view for when people click on arrows to see calling points on pages that do not exist:

This would have been achieved with a simple Error.js file that would be rendered in error handling that I would
add to the fetch of the JSON file in the callingPoints.js component. The error.js file would simply say that the
page does not exist before providing a '<Link to="/">Return to Departing Services</Link>' line so that the user
can return to the services page. 


This would have been handy for all the arrows on the services page that lead to nowhere:

- Add underlaying div which I would make grey for the shadowed effect on the departingServices component.


## Screenshots of use!

Below you can see a screenshot of the application once loaded.

<a href="https://ibb.co/kpyFi9"><img src="https://preview.ibb.co/mMZo39/Screen_Shot_2018_08_13_at_01_14_32.png" alt="Screen_Shot_2018_08_13_at_01_14_32" border="0"></a>

The arrows take you to the url of said departing train which would show the list of its stops.

## Contributors

Joshua Holloway