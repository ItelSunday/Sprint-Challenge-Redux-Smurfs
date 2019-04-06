1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

There is .map(), .reduce(), and .filter(). 
They return new arrays and do not mutate the original state. We can use Object.assign() to create an empty object and pass in other properties as we wish.


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are objects that contain a type and a payload. They contain data to be sent or dispatched to the reducer to tell the reducer what data to change

Reducers is to update the store with that data. It checks the actions that are received, and makes necessary changes to return an object which is then passed on to the store to be updated. 

Store is where all the data is held. It's single source of truth because all components have access to it at any time, this inclues state and reducers, and rendes it to their presentational components.


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is an immutable and read only and can be managed and synced across every level of the application.
It's a good time to use Application state when the software scales up. 

Component state can only be created and managed via components and managing it can be a hassle. 

Class components can be used to create local state and methods that track an input field in a form or when you need lifecycle methods, but the application state can be used all the time.

1.  What is middleware?
Middleware extends the functionality of our Redux package to allow for things like, promises (which are asynchronous). It intercepts actions before it flows to the reducers so there can be more precise control of the flow. We use redux-thunk and redux-logger this week as middleware.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux thunk is a middleware that has the the capability to handle asynchronous operations inside action creators since the flow from actions to reducers are synchronous, redux thunk makes making API calls with axios possible by delaying the flow between actions and reducers.

1.  Which `react-redux` method links up our `components` with our `redux store`?
Connect is a method provided to link up our components with our redux store by using the first parameter mapStateToProps and the second parameter as mapDispatchToProps. The former maps the state to the current component's props and the latter maps the actions to the current component's props.
