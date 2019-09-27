# SmartWatch Dashboard UI

**Name: Josh Lindsay**

**Project: Develop a front-end interface using Electron to display a JSON object containing smartwatch data via a rest API**

**Note: This project is incomplete but it demonstrates the complete use of the front-end Vue along with leaflet for map functionality. It is currently on the TODO list to finish as mainly only content and documentation needs to be added.

License: [MIT Licence](https://opensource.org/licenses/MIT)

## Project Overview

This project is essentially a single page web app built with the vue front-end javascript framework. It can be run as a web app or an electron web app.

### Why Vue?

I had previous experience with using the python frameworks Flask and Django to develop fullstack web applications. However, since this project is exclusively front-end, both those frameworks would be overkill as they are much more geared towards back-end development. Also, since electron is built on Javascript it makes to use the same language instead of introducing more complexity by using python.

The page could be made using old school seperate html, css, and js files with the help of a lightweight library like bootrsrap as I don't need to worry about much in terms of scalability. Although the simplest of possible implementations, this is not suited for two reasons.

1. It does not provide me with any additonal knowledge. As I will be graduating soon and gearing up for the workforce, I need a portfolio and skillset that tailors to the needs of employers. For web development, there is now the expectaction of using frameworks. It is the best use of my time to leverage the time spent of school projects with developing useful skills for the workforce.
2. The web app needs to be modular. Since different smartwatches collect different data, the web page must display different data in different ways depending on the user. Modular development is much more difficult with pure javascript as complexity and dependencies grow quickly. Especially since at the start of development it is unknown what data will be provided.

Javascript frameworks solve both these problems as they are in demand and designed around components. So, I can simply design the components for all the different smartwatch data and render only the relevant components.

There are three main Javascript frameworks: React, Vue, and Angular. Angular is built by google and extremely powerful, but follows the "everything but the kitchen sink" mentality. Since I follow the "only as complex as it needs to be" mentality, Angular would be ill suited. The majorty of features, dependencies, and bulky code included would not be used by the project so it would be wasted. React is the most popular of the frameworks. It is maintained by FaceBook and has a large enterprise userbase. However, it is a little more strict than Vue in addition to having a steeper learning curve. Vue follows the same basic scructure as React, but is more flexible and lighter with a smaller filesize and less dependencies. Since this project is relatively simple and light weight, Vue is more suited being the simpler more flexible framework. It also has the same logic and similar practices as React so the knowledhe can be extended to React if I have to in the future.

In terms of development of speed and relevance, Vue is the best compromise.

## Vue Overview

Vue is for single page web apps so it breaks things down into components (or vue's) instead of strictly pages. So, each page contais its own html, css, and javascript instead of having things like global css files for all pages (although that can be implemented). Each .vue file consists of three sections:
1. **template** - this is the html that will be displayed. Since vue deisgns everyhting around components, it is required that everything be wrapped inside a single div. It supports most dynamic templating functions like looping through lists, inseting other components, passing in data/variables, etc.
2. **style** - this is the css style for the page. This can either by global or local to the component.
3. **script** - this is the javascript code and logic for the page. An important note is that this is not the traditional javascript we are used to being implemented on pages. It is the code for the vue project. It is where you import depencies, state/data, and export page information to be used in other modules of the Vue framework.

## Component Management

Vue manages these components with two components, a router and a store. The store is what is referred to as state management'.

### Store
The store is implemented using a third party framework, Vuex. It is in charge of passing the data to all the various modules. If data is modified, it also done through the store. Although it requires a bit of extra setup at first, it makes development much quicker and scalable on larger web apps. Data does not need to be "passed down" or "passed up" between components if there are nested subcomponents.

The store lifecycle is as follows:
1. **state** - the actual data/variables/objects that are accessed by the components
2. **mutations** - the methods that can change the data in state
3. **actions** - the "actions" called inside components which trigger a mutation
4. **getters** - the methods called to access the data inside state. This portion is optional and not included in this project as I did not desire to adhere strictly to Object Oriented design principles.

The state management flow is easier to understand with an example. In this application, when the web page lauches it calls an action to query a server for a JSON object. This action triggers a mutation which parses the JSON object assigns the values inside to the variables in state. Then, the components in the webpage can access the values in the state.

### Router
The router is responsible for choosing which component to display and how to navigate between them. It is made of a Router object which consits of many routes.

A route is as follows:
1. path - the path of the. Works similar to a normal web app but instead of linking to url.domain/path it links to url.domian/#/path. This is because # specifies where to visit (or jump to) on a page instead of visiting a seperate page. Since Vue and other frameworks are for single page web apps, there is technically only one page.
2. name - the name of the route. This is done for easier referencing in html templating and so the page can be changed without requiring refactoring elsewhere.
3. component - specifies which component to render when that path is visited.

## Project Structure


## Problems Faced and Solutions
