var parent = React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child1"},
[React.createElement("h1",{id:"h1tag"},"I am  h1 tag"),
React.createElement("h1",{id:"h2tag"},"I am  h2 tag")]),

React.createElement("div",{id:"child2"},
[React.createElement("h1",{id:"h1tag"},"I am  h1 tag"),
React.createElement("h1",{id:"h2tag"},"I am  h2 tag")])]);

//var heading = React.createElement("h1", {id:"heading", xys :"abc"}, "hello world from React -JS from seperate file");
console,console.log(parent);
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);