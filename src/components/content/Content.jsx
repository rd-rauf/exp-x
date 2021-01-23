import { Route, Switch } from 'react-router-dom';
import Accounts from '../accounts/Accounts';
import Heads from '../heads/Heads';

const Content = () => {
    return ( 
        <>
            <Switch>
                <Route path="/accounts" component={Accounts}></Route>
                <Route path="/heads" component={Heads}></Route>
                <Route path="/" component={SignIn}></Route>
            </Switch>
        </>
     );
}

export function SignIn(props) {
    return (
        <h1>User login</h1>
    )
}

export default Content;