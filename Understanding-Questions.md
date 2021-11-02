# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* 
<!--
The handleClick function is called.  
Dispatch is run, with the action creator addOne passed in as its argument
Dispatch calls the reducer function 'reducer', which it's connected to via the useReducer hook
Reducer is passes the action creator, with type ADD_ONE
The switch statement then call for the matching case and returns an updated state object
The UI is then re-rendered to reflect the changes
 -->

* TotalDisplay shows the total plus 1.
