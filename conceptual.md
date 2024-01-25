### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  - React router is used for client-side routing.

- What is a single page application?
  - Loads inside of your browers once. It fetchs content without needing to do a round trip to a server, using client-side routing.

- What are some differences between client side and server side routing?
  - One would be that a server side routing sends an entirely new page and a page refresh must happen. A client side routing would rerender the same components with different data. Client side routing does not require a refresh.
  - Client side routing happens on the browser where server side routing takes place on the server env. 
  - All assets are loaded once to the browser when the user visits a client side routed application. For every route on a server side routing new assets are loaded every visit.
  - Client side routing can at times be slow during the first rendering. But will improve overtime. 

- What are two ways of handling redirects with React Router? When would you use each?
  - Previously the two ways were using `Redirect` or `useHistroy`. Now you would use `Navigate`. 

- What are two different ways to handle page-not-found user experiences using React Router? 
  - One way would be to redirect them to another page. Another way would be to render a 404 page if the page was not found.

- How do you grab URL parameters from within a component using React Router?
  - We use `const params = useParams();`. Then we can access those params based on their keys.

- What is context in React? When would you use it?
  - Context allows you to create a ContextProvider that can be consumed by children of that parent. This is very helpful if you have some children that are nested n number of times deep.

- Describe some differences between class-based components and function
  components in React.
  - Of course the syntax is very different and class-based components are extending the Reac.Component class.
  - state object for managing component state.
  - Methods are used instead of hooks

- What are some of the problems that hooks were designed to solve?
  - In general class components led to very comlex and nested code. Hooks simplify a lot of that. 
  - Easier management of state
  - Avoid 'wrapper hell'