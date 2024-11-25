// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';

// import ErrorHandler from '../common/ErrorHandler';
// import NavigationComponent from '../bs-nav/NavigationComponent';

// const RootComponent = () => {
//     return (
//         <div className='container'>
//             <ErrorHandler>
//                 <Router>
//                     <NavigationComponent />
//                     <footer className="fixed-bottom bg-dark text-white-50">
//                         <div className="container text-center ">
//                             <small>Copyright &copy; Technizer India</small>
//                         </div>
//                     </footer>
//                 </Router>
//             </ErrorHandler>
//         </div>
//     );
// };

// export default RootComponent;

// ------------------------------------------------------ Using Custom History

import React from 'react';
import { Router } from 'react-router-dom';

import ErrorHandler from '../common/ErrorHandler';
import NavigationComponent from '../bs-nav/NavigationComponent';

import history from '../../utilities/history';

const RootComponent = () => {
    return (
        <div className='container'>
            <ErrorHandler>
                <Router history={history}>
                    <NavigationComponent />
                    <footer className="fixed-bottom bg-dark text-white-50">
                        <div className="container text-center ">
                            <small>Copyright &copy; Technizer India</small>
                        </div>
                    </footer>
                </Router>
            </ErrorHandler>
        </div>
    );
};

export default RootComponent;