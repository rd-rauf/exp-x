import { Route, Switch } from 'react-router-dom';

import SignIn from '../sign-in/SignIn';
import SignUp from '../sign-up/SignUp';
import Accounts from '../accounts/Accounts';
import Heads from '../heads/Heads';
import ContentArea from './ContentArea';

const Content = () => {
    return (
        <>
            <ContentArea>
                <Switch>
                    <Route path="/" exact component={SignIn}></Route>
                    <Route path="/sign-in" component={SignIn}></Route>
                    <Route path="/sign-up" component={SignUp}></Route>
                    <Route path="/accounts" component={Accounts}></Route>
                    <Route path="/heads" component={Heads}></Route>
                </Switch>
            </ContentArea>
        </>
    );
}

export default Content;