(this.webpackJsonpgitproject=this.webpackJsonpgitproject||[]).push([[0],{102:function(e,n,t){},110:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(10),o=t.n(i),l=(t(102),t(58)),c=t(65),u=t(38),s={counter:0};Object(u.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;switch((arguments.length>1?arguments[1]:void 0).type){case"INCREMENT":return Object(c.a)({},e,{counter:e.counter+1});case"DECREMENT":return Object(c.a)({},e,{counter:e.counter-1});default:return e}}),s,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var m={type:"DECREMENT"},d={type:"INCREMENT"},p=t(42),v=t(24),g=t(155),E=t(150),f=t(146),b=t(148),h=t(149),w=t(72),y=Object(w.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),O=function(e){e.stats;var n=Object(a.useState)(""),t=Object(p.a)(n,2),i=t[0],o=t[1],l=Object(a.useState)(localStorage.getItem("token")),c=Object(p.a)(l,2),u=c[0],s=c[1],m=y();return u?r.a.createElement(v.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement(f.a,{component:"main",maxWidth:"xs"},r.a.createElement(b.a,null),r.a.createElement("div",{className:m.paper},r.a.createElement(h.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Your personal GitHub token",type:"password",id:"password",autoComplete:"current-password",value:i,onChange:function(e){return o(e.target.value)}}),r.a.createElement(E.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:m.submit,onClick:function(){localStorage.setItem("token",i),o(),s(localStorage.getItem("token")),window.location.reload(!0)}},"Sign In"))))},I=t(44),S=t(75),N=t(76),j=t(84),x=t(77),k=t(88),_=t(14),C=t(20),R=t.n(C),$=t(35),U=t(55),q=t.n(U);function T(){var e=Object(_.a)(["\n  mutation($id: ID!) {\n    addStar(input: { starrableId: $id }) {\n      starrable {\n        id\n        viewerHasStarred\n      }\n    }\n  }\n"]);return T=function(){return e},e}var L=R()(T()),D=function(e){var n=e.id;return r.a.createElement($.a,{mutation:L,variables:{id:n}},(function(e){return r.a.createElement(q.a,{onClick:e,className:"hover"},"star")}))};function H(){var e=Object(_.a)(["\nmutation RemoveStar($id:ID!){\n   removeStar(input:{starrableId:$id}){\n    starrable{\n      id\n      viewerHasStarred\n    }\n  }\n}"]);return H=function(){return e},e}var z=R()(H()),P=function(e){var n=e.id;return r.a.createElement($.a,{mutation:z,variables:{id:n}},(function(e){return r.a.createElement(q.a,{color:"secondary",onClick:e,className:"hover"},"removestar")}))},V=t(56),X=t.n(V),F=t(57),A=t.n(F);t(37);function B(){var e=Object(_.a)(["\n  query Reps($quer: String!) {\n    search(query: $quer, type: REPOSITORY, first: 10) {\n      edges {\n        node {\n          ... on Repository {\n            id\n            name\n            viewerHasStarred\n            url\n            isPrivate\n            isArchived\n            owner {\n            login\n            avatarUrl\n          }\n          }\n        }\n      }\n    }\n  }\n"]);return B=function(){return e},e}var G=R()(B()),M=function(e){function n(){var e,t;Object(S.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(j.a)(this,(e=Object(x.a)(n)).call.apply(e,[this].concat(r)))).state={selectedRepositoryIds:[]},t}return Object(k.a)(n,e),Object(N.a)(n,[{key:"render",value:function(){return r.a.createElement(W,{login:this.props.login,repositories:this.props.repositories,selectedRepositoryIds:this.state.selectedRepositoryIds})}}]),n}(r.a.Component),W=function(e){var n=e.login,t=e.repositories,a=e.selectedRepositoryIds;return r.a.createElement("ul",null,t.edges.map((function(e){var t=e.node;return a.includes(t.id)&&["row"].push("row_selected"),n="undefined"!=typeof t.owner?t.owner.login:n,r.a.createElement("div",{className:"RepositoryItem",key:t.id},t.isPrivate&&r.a.createElement(X.a,null),!t.isPrivate&&r.a.createElement(A.a,null),r.a.createElement("a",{href:n+"/repository/"+t.name},t.name),!t.viewerHasStarred&&r.a.createElement(D,{className:"hover",id:t.id}),t.viewerHasStarred&&r.a.createElement(P,{id:t.id}))})))},J=function(e){var n=e.quer;return r.a.createElement($.b,{query:G,variables:{quer:n}},(function(e){var n=e.data;return e.loading?r.a.createElement("div",null,"Loading ..."):n?r.a.createElement("div",null,r.a.createElement(M,{repositories:n.search})):r.a.createElement("p",null,"Nothing was found")}))};function Y(){var e=Object(_.a)(["\nquery User($login:String!){\n    user(login: $login) {\n        login\n        name\n        avatarUrl\n        bio\n        email  } \n        }\n        "]);return Y=function(){return e},e}var K=R()(Y()),Q=function(e){var n=e.login;return r.a.createElement($.b,{query:K,variables:{login:n}},(function(e){var n=e.data;return e.loading?r.a.createElement("div",null,"Loading ..."):n?r.a.createElement(Z,{data:n}):r.a.createElement("p",null,"Nothing was found")}))},Z=function(e){var n=e.data;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:n.user.avatarUrl,alt:"avatar",width:"100%"}),r.a.createElement("h1",null,r.a.createElement("a",{href:n.user.login},n.user.login)),r.a.createElement("p",{className:"login"}," ",n.user.name))};var ee=function(){var e=r.a.useState(""),n=Object(p.a)(e,2),t=n[0],i=n[1],o=Object(a.useState)(!0),l=Object(p.a)(o,2),c=l[0],u=l[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"Search"},r.a.createElement("button",{className:"button",onClick:function(){return u(!c)}}," ",c?"By users":"By repositories"," "),r.a.createElement("input",{type:"text",className:"searchTerm",placeholder:"Search",value:t,onChange:function(e){i(e.target.value)}}),r.a.createElement("div",{className:"App"},c?r.a.createElement(Q,{login:t}):r.a.createElement(J,{quer:t}))))};function ne(){return localStorage.getItem("token")?r.a.createElement("div",null,r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:"search"},r.a.createElement(ee,{class:"searchTerm"})))):r.a.createElement(v.a,{to:"/auth"})}var te=t(151);function ae(){var e=Object(_.a)(["\nmutation($id:ID!){\n   unfollowUser(input: {userId:$id} ) {\n        user{\n            id\n            viewerIsFollowing\n        }\n  }\n}"]);return ae=function(){return e},e}function re(){var e=Object(_.a)(["\nmutation($id:ID!){\n   followUser(input: {userId:$id} ) {\n        user{\n            id\n            viewerIsFollowing\n        }\n  }\n}"]);return re=function(){return e},e}var ie=R()(re()),oe=R()(ae()),le=function(e){var n=e.id;return r.a.createElement($.a,{mutation:ie,variables:{id:n}},(function(e){return r.a.createElement(E.a,{color:"default",onClick:e},"Follow")}))},ce=function(e){var n=e.id;return r.a.createElement($.a,{mutation:oe,variables:{id:n}},(function(e){return r.a.createElement(E.a,{color:"primary",onClick:e},"Unfollow")}))};function ue(){var e=Object(_.a)(["\nquery Userrepositories($login:String!){\n  user(login: $login) {\n    id\n    isViewer\n    viewerIsFollowing\n    avatarUrl\n    bio\n    email\n    login\n    name\n    repositories(first: 10) {\n      edges {\n        node {\n          id\n          name\n          stargazers {\n            totalCount\n          }\n          viewerHasStarred\n          isPrivate\n        }\n      }\n    }\n  }\n}\n"]);return ue=function(){return e},e}function se(){var e=Object(_.a)(["\nquery Myrepositories($first:Int!){\n    viewer {\n        id\n        isViewer\n        viewerIsFollowing\n        name\n        login\n        avatarUrl\n        bio\n        email   \n        repositories(first: $first) {\n            edges {\n                node {\n                    id\n                    name\n                    stargazers{\n                        totalCount\n                    }\n                    viewerHasStarred\n                    isPrivate\n                }\n            }\n        }\n    }\n}\n"]);return se=function(){return e},e}var me=R()(se());function de(e){var n=e.data;return r.a.createElement("div",null,r.a.createElement(te.a,{container:!0,spacing:0,justify:"center"},r.a.createElement(te.a,{item:!0,xs:3},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"UserCard"},r.a.createElement("img",{src:n.avatarUrl,alt:"avatar",width:"100%"}),r.a.createElement("h1",null," ",n.name),r.a.createElement("p",{className:"login"}," ",n.login),r.a.createElement("p",null," ",n.email),r.a.createElement("p",null," ",n.bio),!n.isViewer&&!n.viewerIsFollowing&&r.a.createElement(le,{id:n.id}),!n.isViewer&&n.viewerIsFollowing&&r.a.createElement(ce,{id:n.id})))),r.a.createElement(te.a,{item:!0,xs:4},r.a.createElement("h2",null,"Repositories"),r.a.createElement(M,{repositories:n.repositories,login:n.login}))))}var pe=R()(ue());function ve(){var e=Object(v.g)().login;return r.a.createElement($.b,{query:pe,variables:{login:e}},(function(e){var n=e.data;return e.loading?r.a.createElement("p",null,"loading..."):r.a.createElement(de,{data:n.user})}))}var ge=function(){return r.a.createElement($.b,{query:me,variables:{first:10}},(function(e){var n=e.data;return e.loading?r.a.createElement("p",null,"loading..."):r.a.createElement(de,{data:n.viewer})}))},Ee=t(80),fe=t.n(Ee);function be(){var e=Object(_.a)(["\n  query Repos($name: String!, $login: String!) {\n    repository(owner:$login, name: $name) {\n            id\n            url\n            viewerHasStarred\n            isPrivate\n            isArchived\n            primaryLanguage {\n                name\n            }\n            stargazers {\n                totalCount\n            }\n            description\n            owner {\n                login\n                avatarUrl\n            }\n        }\n  }\n"]);return be=function(){return e},e}var he=R()(be());function we(e){var n=e.data;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"RepositoryCard"},r.a.createElement("p",{className:"login"}," ",n.repository.owner.login),n.repository.isPrivate&&r.a.createElement(X.a,null),!n.repository.isPrivate&&r.a.createElement(A.a,null),n.repository.isArchived&&r.a.createElement(fe.a,null),r.a.createElement("p",null,r.a.createElement("a",{href:n.repository.url}," Link on GitHub")),r.a.createElement("p",{className:"login"}," ",n.repository.stargazers.totalCount," stars"),r.a.createElement("p",null," Language:",n.repository.primaryLanguage&&n.repository.primaryLanguage.name),n.repository.description))}var ye=function(){var e=Object(v.g)(),n=e.login,t=e.name;return r.a.createElement($.b,{query:he,variables:{login:n,name:t}},(function(e){var n=e.data;return e.loading?r.a.createElement("div",null,"Loading ..."):n?r.a.createElement(we,{data:n}):r.a.createElement("p",null,"Nothing was found")}))};var Oe=function(){var e=localStorage.getItem("token");return r.a.createElement(I.a,null,r.a.createElement(v.d,null,e&&r.a.createElement(v.b,{path:"/myprofile",component:ge}),r.a.createElement(v.b,{exact:!0,path:"/auth",component:O}),e&&r.a.createElement(v.b,{path:"/:login/repository/:name",component:ye}),e&&r.a.createElement(v.b,{path:"/:login/",component:ve}),e&&r.a.createElement(v.b,{exact:!0,path:"/",component:ne}),r.a.createElement(v.a,{to:"/auth"})))};var Ie=function(){return r.a.createElement(Oe,null)},Se=Object(l.b)((function(e){return{counter:e.counter}}),(function(e){return{increment:function(){return e(d)},decrement:function(){return e(m)}}}))(Ie);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ne={user:{},loggedIn:!1,repList:"myreps"};var je=Object(u.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"LOGIN":return{user:n.user,loggedIn:!0};case"LOGOUT":var t=localStorage.getItem("currentUser");return localStorage.removeItem("currentUser"),t.next(null),{user:{},loggedIn:!1};default:return e}}),Ne,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),xe=t(13),ke=t(33),_e=t(85),Ce=t(83),Re=t(152),$e=t(153),Ue=t(154),qe=t(48);function Te(){var e=Object(_.a)(["\n    margin-top: 100px;\n    justify-content: center;\n    width: 337px;\n    height: 278px;\n    border: 1px solid #E0E0E0;\n    box-sizing: border-box;\n    border-radius: 18px;"]);return Te=function(){return e},e}function Le(){var e=Object(_.a)(["\n    width: 300px;\n    height: 15%;\n    margin: 10px 10px;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    border-radius: 10px;"]);return Le=function(){return e},e}function De(){var e=Object(_.a)(["\n    text-transform: uppercase;\n    text-align:center;\n    width: 592px;\n    font-family: Roboto serif;\n    font-style: normal;\n    font-weight: 200;\n    font-size: 48px;\n\n    color: #333333;"]);return De=function(){return e},e}function He(){var e=Object(_.a)(["\n    width: 100px;\n    height: 25px;\n    margin: 10px 10px;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    border-radius: 10px;\n    background-color: cornflowerblue;\n    color: white;\n"]);return He=function(){return e},e}var ze=qe.a.button(He()),Pe=(qe.a.h1(De()),qe.a.input(Le()),qe.a.div(Te()),t(157));var Ve=new Ce.a,Xe=new _e.a({uri:"https://api.github.com/graphql",headers:{authorization:"Bearer ".concat(localStorage.getItem("token"))}}),Fe=document.getElementById("root"),Ae=new ke.a({link:Xe,cache:Ve});o.a.render(r.a.createElement(l.a,{store:je},r.a.createElement(xe.a,{client:Ae},r.a.createElement((function(){var e=localStorage.getItem("token");return r.a.createElement(Re.a,{position:"static"},r.a.createElement($e.a,null,r.a.createElement(h.a,{variant:"h6"},r.a.createElement("a",{href:"/"},"GitHub Client")),r.a.createElement("div",null,r.a.createElement(Ue.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit"},r.a.createElement("a",{href:"/myprofile"},r.a.createElement(Pe.a,null)))),e&&r.a.createElement(ze,{onClick:function(){return localStorage.removeItem("token"),window.location.reload(!0),r.a.createElement(v.a,{to:"/auth"})}},"Log out")))}),null),r.a.createElement(Se,null))),Fe),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},37:function(e,n,t){},97:function(e,n,t){e.exports=t(110)}},[[97,1,2]]]);
//# sourceMappingURL=main.3b3b725d.chunk.js.map