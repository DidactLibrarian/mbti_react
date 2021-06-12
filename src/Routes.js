import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { TestReady, TestProcess, TestResult } from './pages';

const Routes = function () {
  return (
    <Router>
      <Route exact path="/" component={TestReady} />
      <Route path="/process" component={TestProcess} />
      <Route path="/result" component={TestResult} />
    </Router>
  );
};

export default Routes;
