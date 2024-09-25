import React,{useState} from 'react';
import './App.css';
import 'h8k-components';
import './components/Articles'

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {

    const [sortType, setSortType] = useState('mostRecent');

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button 
                data-testid="most-upvoted-link" 
                className="small"
                onClick={() => setSortType('mostUpvoted')}
                >
                    Most Upvoted
                </button>
                <button 
                data-testid="most-recent-link" 
                className="small"
                onClick={() => setSortType('mostRecent')}
                >
                    Most Recent
                </button>
            </div>
            <Articles articles={articles} sortType={sortType} />
        </div>
    );

}

export default App;
