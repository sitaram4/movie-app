import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers'
import thunk from 'redux-thunk';
//function logger(obj,next,action)
//logger(obj)(next)(action)

// const logger = function({dispatch,getState}){
//   return function(next){
//     return function(action){
//       //middleware code
//       console.log('ACTION_TYPE=',action.type);
//       next(action);
//     }
//   }
// }

//better way to write logger middleware
const logger = ({dispatch,getState}) => (next) => (action) =>{
        //middleware code
        if(typeof action !== 'function'){
          console.log('ACTION_TYPE=',action.type);
        }
        next(action);
}

// const thunk = ({dispatch,getState}) => (next) => (action) =>{
//   if(typeof action === 'function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// }
const store =createStore(rootReducer,applyMiddleware(logger,thunk));

export const StoreContext=createContext();
console.log('Store Context',StoreContext); 
console.log('store',store);

class Provider extends React.Component {
  render(){
    const {store} = this.props;
    return(
      <StoreContext.Provider value={store}>
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}

// const connectedAppComponent =connect(callback)(App);
export function connect(callback){
  return function(Component){
     class ConnectedComponent extends React.Component{
      constructor(props){
        super();
        this.unsubscribe=props.store.subscribe(()=>this.forceUpdate());//to update whenever store changes
      };
      componentWillUnmount(){
        this.unsubscribe();
      }
      render(){
        const {store} =this.props
        const state = store.getState();
        const dataTobePassedAsProps = callback(state);
            return (<Component 
                    {...dataTobePassedAsProps} 
                    dispatch={store.dispatch}
                    />)
          
      }
    }
    class ConnectedComponentWrapper extends React.Component{
      render(){
        return(
        <StoreContext.Consumer>
          {(store) => <ConnectedComponent store={store}/>}
        </StoreContext.Consumer>)
      }
    }
    return ConnectedComponentWrapper;
  }
}
// console.log('BEFORE STATE',store.getState());
// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Superman'}]
// })
// console.log('After STATE',store.getState());

ReactDOM.render(
    <Provider store={store}>
    {/* now store is available to each and every component in App and its descendent */}
    <App />
    </Provider>,
  document.getElementById('root')
);


