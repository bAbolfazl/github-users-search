import './App.css';
import { Route, Switch } from 'react-router';
import Index from './pages/index/index.component';

import 'bootstrap/dist/css/bootstrap.min.css'
import UserSingle from './components/userSingle/userSingle.component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/user/:id" component={UserSingle} />
      </Switch>
    </div>
  );
}

export default App;
