# Initial Goal
Create a clicker component that tracks state using the Redux State store

# Redux Setup
* Setup the store
* Define our Actions
* * Clicker -> Click (CLICKER_UPDATE)
* Define the state (clicker.reducer.ts)
* * Typing the state
* * Aggregate State
* Define reducers
* * Reducer will receive the action, and move the state forward
* * Aggregate Reducers
* Create Component
* * Setup component prop interface
* * Wire component to get props from store
* * Wire component to get props from dispatcher
* * Connect component to store using connect method
* * Ensure connect returned value is a default export
* * In App.ts (or anywhere else) you import the default export of the component
* Add Provider into component tree, at a high level above all components
        which require state

* Index renders App -> App brings in store which holds navbar and components
*       -> store has itself and middleware enhancements, is highest point (aside from app itself) and holds states
*       -> components import interfaces from reducer and functions from actions respectively
*               *nav bar doesn't really import anything except the clicker interface since it directly uses that state
*                -> The reducer imports interfaces from the actions. Depending on passed in action type, sends out data
*                       -> -Reducers has an index which collects the functions from other reducers, aggregates them and makes interfaces that will be used elsewhere. And exports that as the main state to the store!
*                               -> Actions defines types of possible actions, and dispatches passed in data.
* math and utilities is only used for testing

* Index renders App -> App beings you to starting nav bar and components
*       -> When you interact with a component it calls the action with passed info
*               -> That action then calls to the reducer to do something with that info (change state)
*                        -> The store registers that changed state
*                                -> Because state has changed, re-render all to have new state

* 1) Index renders App (which has store and components
2) User interacts with a component on the app
3) The component has data and functions to send a payload of information (ideally what is used to update the state)
4) This payload is sent to the Action Creator (for our purposes, it doubles as the dispatcher)
5) The Action Creator dispatches this payload of information (associated with a type) to the reducer
6) The reducer reads this type and attempts to apply the payload of data to a valid interface (it wants to use the data properly). If successful, the reducer will update the state (and by extension, update the store)
7) The store updated, it will now re-render the Application for further use