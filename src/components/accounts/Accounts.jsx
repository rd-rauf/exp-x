import { Switch, Route } from 'react-router-dom';

export default function Accounts(props) {
    const { match } = props;
    return (
        <>
            <h1>Accounts Page</h1>
            <Switch>
                <Route path={`${match.url}/inner1`} component={Inner1} />
                <Route path={`${match.url}/inner2`} component={Inner2} />
            </Switch>
        </>
    );
}

export function Inner1(props) {
    const { match } = props;
    console.log(`${match.url}/nested1`);
    return (
        <>
            <h1>Inner 1</h1>
            <Switch>
                {/* <Route path={`${match.url}/nested1`} component={Nested1} /> */}
                <Route path={`${match.url}/nested1`} render={(props) => (
                    ( <h1>Nested 1</h1> )
                ) } />
            </Switch>
        </>
    );
}

export function Inner2() {
    return (
        <h1>Inner 2</h1>
    );
}

export function Nested1() {
    return (
        <h1>Nested 1</h1>
    );
}