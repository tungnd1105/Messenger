import React from "react";
import {Router} from "react-router-dom";
import {History, createBrowserHistory} from 'history';

export const history: History = createBrowserHistory();

interface BrowserRouterProps {
  history: History;
  baseName?: string;
  children?: React.ReactNode;
}

export const BrowserRouter: React.FunctionComponent<BrowserRouterProps> = (props: BrowserRouterProps) => {
  const {baseName, history, children} = props
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  });

  React.useLayoutEffect(() =>
    history.listen(setState), [history]
  );

  return <Router
    basename={baseName}
    children={children}
    navigator={history}
    location={state.location}
    navigationType={state.action}
  />
}