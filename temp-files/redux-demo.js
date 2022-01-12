const redux = require("redux");

// Standard Javascript function that will be called from redux library.
// And it will recieve two pieces of input/parameter i.e. old/existing state
// and dispatch action - it will return New State Object. So input should be pure function.

// Point to remember -> we should not pass side effects as in HTTP requests or write something
// to local storage.
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
