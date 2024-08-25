import { useReducer } from 'react';
import ProjectStore from '../context/store';
import { initialState, reducer } from './reducer';

const StoreProvider = ({ children }) => {
    return (
        <ProjectStore.Provider value={useReducer(reducer, initialState)}>
            {children}
        </ProjectStore.Provider>
    );
};

export default StoreProvider;
