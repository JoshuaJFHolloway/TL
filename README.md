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

- Run 'git clone https://github.com/JoshuaJFHolloway/TL' in your terminal


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
data from the api call. Then inside of that component will be the individual list of stops. Each stop will be a
component itself and depending upon props it receives it will be either active or not. When 'active' it will
render the component in normal weighted font and inactive will be greyed. The first and last components receiving an image of the
circle filled in black. There are other things to bear in mind, such as the departing and arriving stations being
in bold.

It came apparent to me that there are different ways to bring this create this application. At this planning stage,
creating a table of components for the list makes most sense. Once again using a loop which will loop through creating
each individual train stop component until the loop reaches its limiter (this would be set by the number of stops said
route has. This will be pulled down from the api call into the loop). Hence, provisionally, these will be the
components I will create:

- departingServices.js (wrapper) - Api call made here.
- trainTile.js (one of the individual tiles that the wrapper will hold)
- serviceWrapper.js (holds the calling points)
- serviceHeader.js (Farringdon to West Hempstead part at the top of the calling points)
- callingPoint.js (one of the individual calling point tiles that the wrapper holds) 

I understand that it is preferable to use CSS only and not images. I will look to create the
project using images at first and then trade them out for pure CSS solutions if I have the time.

### Edge Cases

// discuss edge cases

## Things I am not happy with

// discuss what you would like to improve about the current codebase

## Trade offs

// what trade offs did you make and why

## Future Additions

// explain how application can be improved


## Screenshots of use!

Below you can see a screenshot of the application once loaded.

// add screenshots that show use of application


## Contributors

Joshua Holloway