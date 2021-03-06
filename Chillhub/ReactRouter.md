# React Router & Route & Fragments

How to install Router
`yarn add react-router-dom`

**Route는 Router안에서만 작동한다.**

`[Router.js]`

```js

import React from 'react'
import {HashRouter as Router} from "react-router-dom"

<Router>
    <>
    <Route path="/" exact component={}/>
    <Route path="/tv" exact component={TV}/>
    <Route path="/search" exact component={Search}/>
    </>
</Router>
```

**React에는 두개의 컴포넌트를 return할 수 없다는 규칙이 있다.**
**Fragments allow you to return as many components you want.**

`[App.js]`

```js [App.js]
import React from "react";
import Router from "Components/Router";

function App() {
  return (
    <>
      <h1>Coin Explorer</h1>
      <Router />
    </>
  );
}
export default App;
```
