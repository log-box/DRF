(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{39:function(t,e,n){},40:function(t,e,n){},60:function(t,e,n){},69:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),r=n(33),s=n.n(r),a=(n(39),n(8)),i=n(9),j=n(11),u=n(10),l=(n(40),n(0)),d=function(t){var e=t.todouser;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.username}),Object(l.jsx)("td",{children:e.first_name}),Object(l.jsx)("td",{children:e.last_name}),Object(l.jsx)("td",{children:e.email})]})},h=function(t){var e=t.todousers;return Object(l.jsxs)("table",{children:[Object(l.jsx)("th",{children:"TodoUserName"}),Object(l.jsx)("th",{children:"First name"}),Object(l.jsx)("th",{children:"Last Name"}),Object(l.jsx)("th",{children:"Email"}),e.map((function(t){return Object(l.jsx)(d,{todouser:t})}))]})},b=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"footer",children:"Footer"})}}]),n}(c.Component),O=b,p=n(13),x=n.n(p),f=(n(60),function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{class:"header"})}}]),n}(c.Component)),v=f,g=function(t){var e=t.todo,n=t.deleteTodo;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.id}),Object(l.jsx)("td",{children:e.project}),Object(l.jsx)("td",{children:e.todo_text}),Object(l.jsx)("td",{children:e.created}),Object(l.jsx)("td",{children:e.updated}),Object(l.jsx)("td",{children:e.user}),Object(l.jsx)("td",{children:e.is_active.toString()}),Object(l.jsx)("td",{children:Object(l.jsx)("button",{type:"button",onClick:function(){return n(e.id)},children:" \u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})]})},m=function(t){var e=t.todos,n=t.deleteTodo;return Object(l.jsxs)("table",{children:[Object(l.jsx)("th",{children:"TodoId"}),Object(l.jsx)("th",{children:"TodoProject"}),Object(l.jsx)("th",{children:"Text"}),Object(l.jsx)("th",{children:"Created"}),Object(l.jsx)("th",{children:"Updated"}),Object(l.jsx)("th",{children:"User"}),Object(l.jsx)("th",{children:"\u0421\u0442\u0430\u0442\u0443\u0441"}),Object(l.jsx)("th",{}),e.map((function(t){return Object(l.jsx)(g,{todo:t,deleteTodo:n})}))]})},k=n(12),_=function(t){var e=t.project,n=t.deleteProject;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.id}),Object(l.jsx)("td",{children:e.project_name}),Object(l.jsx)("td",{children:e.project_user}),Object(l.jsx)("td",{children:e.repository}),Object(l.jsx)("td",{children:Object(l.jsx)("button",{type:"button",onClick:function(){return n(e.id)},children:" \u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})]})},y=function(t){var e=t.projects,n=t.deleteProject;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("table",{children:[Object(l.jsx)("th",{children:"Project ID"}),Object(l.jsx)("th",{children:"Project name"}),Object(l.jsx)("th",{children:"Project user"}),Object(l.jsx)("th",{children:"Project repository"}),Object(l.jsx)("th",{}),e.map((function(t){return Object(l.jsx)(_,{project:t,deleteProject:n})}))]}),Object(l.jsx)(k.b,{to:"/projects/create",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442"})]})},C=n(2),A=function(t){var e=t.todos,n=Object(C.f)().id;console.log({id:n});var c=e.filter((function(t){return t.project.includes(parseInt(n))}));return Object(l.jsxs)("table",{children:[Object(l.jsx)("th",{children:"TodoProject"}),Object(l.jsx)("th",{children:"Text"}),Object(l.jsx)("th",{children:"Created"}),Object(l.jsx)("th",{children:"Updated"}),Object(l.jsx)("th",{children:"User"}),c.map((function(t){return Object(l.jsx)(g,{todo:t})}))]})},S=n(19),P=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(t){var c;return Object(a.a)(this,n),(c=e.call(this,t)).state={login:"",password:""},c}return Object(i.a)(n,[{key:"handleChange",value:function(t){this.setState(Object(S.a)({},t.target.name,t.target.value)),console.log([t.target.name],t.target.value)}},{key:"handleSubmit",value:function(t){this.props.get_token(this.state.login,this.state.password),t.preventDefault()}},{key:"render",value:function(){var t=this;return Object(l.jsxs)("form",{onSubmit:function(e){return t.handleSubmit(e)},children:[Object(l.jsx)("input",{type:"text",name:"login",placeholder:"login",value:this.state.login,onChange:function(e){return t.handleChange(e)}}),Object(l.jsx)("input",{type:"password",name:"password",placeholder:"password",value:this.state.password,onChange:function(e){return t.handleChange(e)}}),Object(l.jsx)("input",{type:"submit",value:"Login"})]})}}]),n}(o.a.Component),T=n(24),w=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(t){var c;return Object(a.a)(this,n),(c=e.call(this,t)).state={project_name:"",project_user:[]},c}return Object(i.a)(n,[{key:"handleChange",value:function(t){this.setState(Object(S.a)({},t.target.name,t.target.value)),console.log([t.target.name],t.target.value)}},{key:"handleProjectChange",value:function(t){if(t.target.selectedOptions){for(var e=[],n=0;n<t.target.selectedOptions.length;n++)e.push(t.target.selectedOptions.item(n).value);this.setState({project_user:e})}else this.setState({project_user:[]})}},{key:"handleSubmit",value:function(t){this.props.createProject(this.state.project_name,this.state.project_user),t.preventDefault()}},{key:"render",value:function(){var t=this;return Object(l.jsxs)("form",{onSubmit:function(e){return t.handleSubmit(e)},children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"login",children:"projectName"}),Object(l.jsx)("input",{type:"text",className:"form-control",name:"project_name",value:this.state.project_name,onChange:function(e){return t.handleChange(e)}})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"author",children:"user"}),Object(l.jsx)("select",{name:"project_user",multiple:!0,onChange:function(e){return t.handleProjectChange(e)},children:this.props.todousers.map((function(t){return Object(l.jsx)("option",{value:t.id,children:t.username})}))})]}),Object(l.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Save"})]})}}]),n}(o.a.Component),F=function(t){var e=t.location;return Object(l.jsx)("div",{children:Object(l.jsxs)("h1",{children:["\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 '",e.pathname,"' \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"]})})},N=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(t){var c;return Object(a.a)(this,n),(c=e.call(this,t)).state={todousers:[],todos:[],projects:[],token:[]},c}return Object(i.a)(n,[{key:"load_data",value:function(){var t=this,e=this.get_headers();x.a.get("http://127.0.0.1:8000/api/users",{headers:e}).then((function(e){var n=e.data;t.setState({todousers:n})})).catch((function(e){console.log(e),t.setState({todousers:[]})})),x.a.get("http://127.0.0.1:8000/api/projects",{headers:e}).then((function(e){var n=e.data.results;t.setState({projects:n})})).catch((function(t){return console.log(t)})),x.a.get("http://127.0.0.1:8000/api/todos",{headers:e}).then((function(e){var n=e.data.results;t.setState({todos:n})})).catch((function(t){return console.log(t)})),console.log(this.state.todos)}},{key:"set_token",value:function(t){var e=this;(new T.a).set("token",t),this.setState({token:t},(function(){return e.load_data()}))}},{key:"deleteTodo",value:function(t){var e=this,n=this.get_headers();console.log(t),x.a.delete("http://127.0.0.1:8000/api/todos/".concat(t),{headers:n}).then((function(n){e.setState({todos:e.state.todos.filter((function(e){return e.id!==t}))})})).catch((function(t){return console.log(t)}))}},{key:"deleteProject",value:function(t){var e=this,n=this.get_headers();console.log(t),x.a.delete("http://127.0.0.1:8000/api/projects/".concat(t),{headers:n}).then((function(t){e.load_data()})).catch((function(t){return console.log(t)}))}},{key:"createProject",value:function(t,e){var n=this,c=this.get_headers(),o={project_name:t,project_user:[e]};console.log(o),x.a.post("http://127.0.0.1:8000/api/projects/",o,{headers:c}).then((function(t){n.load_data()})).catch((function(t){return console.log(t)}))}},{key:"is_authenticated",value:function(){return""!=this.state.token}},{key:"logout",value:function(){this.set_token("")}},{key:"get_token_from_storage",value:function(){var t=this,e=(new T.a).get("token");this.setState({token:e},(function(){return t.load_data()}))}},{key:"get_token",value:function(t,e){var n=this;x.a.post("http://127.0.0.1:8000/api-token-auth/",{username:t,password:e}).then((function(t){n.set_token(t.data.token)})).catch((function(t){return alert("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c")}))}},{key:"get_headers",value:function(){var t={"Content-Type":"application/json"};return console.log(this.state.token),this.is_authenticated()&&(t.Authorization="Token "+this.state.token),console.log("AAAAAAAAAAAAAAAAAAAA",t),t}},{key:"componentDidMount",value:function(){this.get_token_from_storage()}},{key:"render",value:function(){var t=this;return Object(l.jsxs)("div",{children:[Object(l.jsx)(v,{}),Object(l.jsxs)(k.a,{children:[Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(k.b,{to:"/",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})}),Object(l.jsx)("li",{children:Object(l.jsx)(k.b,{to:"/projects",children:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b"})}),Object(l.jsx)("li",{children:Object(l.jsx)(k.b,{to:"/todos",children:"\u0417\u0430\u043c\u0435\u0442\u043a\u0438 TODO"})}),Object(l.jsx)("li",{children:this.is_authenticated()?Object(l.jsx)("button",{onClick:function(){return t.logout()},children:"Logout"}):Object(l.jsx)(k.b,{to:"/login",children:"Login"})})]})}),Object(l.jsxs)(C.c,{children:[Object(l.jsx)(C.a,{exact:!0,path:"/",component:function(){return Object(l.jsx)(h,{todousers:t.state.todousers})}}),Object(l.jsx)(C.a,{exact:!0,path:"/projects",component:function(){return Object(l.jsx)(y,{projects:t.state.projects,deleteProject:function(e){return t.deleteProject(e)}})}}),Object(l.jsx)(C.a,{exact:!0,path:"/projects/create",component:function(){return Object(l.jsx)(w,{createProject:function(e,n){return t.createProject(e,n)},todousers:t.state.todousers})}}),Object(l.jsx)(C.a,{exact:!0,path:"/todos",component:function(){return Object(l.jsx)(m,{todos:t.state.todos,deleteTodo:function(e){return t.deleteTodo(e)}})}}),Object(l.jsx)(C.a,{exact:!0,path:"/login",component:function(){return Object(l.jsx)(P,{get_token:function(e,n){return t.get_token(e,n)}})}}),Object(l.jsxs)(C.a,{path:"/projects/:id",children:[Object(l.jsx)(A,{todos:this.state.projects}),"} />"]}),Object(l.jsx)(C.a,{component:F})]})]}),Object(l.jsx)(O,{})]})}}]),n}(o.a.Component),D=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),c(t),o(t),r(t),s(t)}))};s.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),D()}},[[69,1,2]]]);
//# sourceMappingURL=main.0abf1ea6.chunk.js.map