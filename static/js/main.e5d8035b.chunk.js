(this.webpackJsonpgitproject=this.webpackJsonpgitproject||[]).push([[0],{102:function(e,n,t){},110:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(10),i=t.n(o),l=(t(102),t(59)),c=t(16),u=t(40);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(t,!0).forEach((function(n){Object(c.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d={counter:0};Object(u.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;switch((arguments.length>1?arguments[1]:void 0).type){case"INCREMENT":return m({},e,{counter:e.counter+1});case"DECREMENT":return m({},e,{counter:e.counter-1});default:return e}}),d,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var p={type:"DECREMENT"},v={type:"INCREMENT"},g=t(43),E=t(24),f=t(155),b=t(150),h=t(146),w=t(148),y=t(149),O=t(74),S=Object(O.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),j=function(e){e.stats;var n=Object(r.useState)(""),t=Object(g.a)(n,2),o=t[0],i=t[1],l=Object(r.useState)(localStorage.getItem("token")),c=Object(g.a)(l,2),u=c[0],s=c[1],m=S();return u?a.a.createElement(E.a,{to:"/"}):a.a.createElement("div",null,a.a.createElement(h.a,{component:"main",maxWidth:"xs"},a.a.createElement(w.a,null),a.a.createElement("div",{className:m.paper},a.a.createElement(y.a,{component:"h1",variant:"h5"},"Sign in"),a.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Your personal GitHub token",type:"password",id:"password",autoComplete:"current-password",value:o,onChange:function(e){return i(e.target.value)}}),a.a.createElement(b.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:m.submit,onClick:function(){localStorage.setItem("token",o),i(),s(localStorage.getItem("token")),console.log(localStorage.getItem("token")),window.location.reload(!0)}},"Sign In"))))},I=t(45),N=t(53),x=t(31),k=t(77),_=t(78),C=t(87),R=t(14),$=t(20),U=t.n($),D=t(37),q=t(56),T=t.n(q);function P(){var e=Object(R.a)(["\n  mutation($id: ID!) {\n    addStar(input: { starrableId: $id }) {\n      starrable {\n        id\n        viewerHasStarred\n      }\n    }\n  }\n"]);return P=function(){return e},e}var L=U()(P()),H=function(e){var n=e.id;return a.a.createElement(D.a,{mutation:L,variables:{id:n}},(function(e){return a.a.createElement(T.a,{onClick:e,className:"hover"},"star")}))};function z(){var e=Object(R.a)(["\nmutation RemoveStar($id:ID!){\n   removeStar(input:{starrableId:$id}){\n    starrable{\n      id\n      viewerHasStarred\n    }\n  }\n}"]);return z=function(){return e},e}var V=U()(z()),X=function(e){var n=e.id;return a.a.createElement(D.a,{mutation:V,variables:{id:n}},(function(e){return a.a.createElement(T.a,{color:"secondary",onClick:e,className:"hover"},"removestar")}))},F=t(57),A=t.n(F),B=t(58),G=t.n(B);t(39);function M(){var e=Object(R.a)(["\n  query Reps($quer: String!) {\n    search(query: $quer, type: REPOSITORY, first: 10) {\n      edges {\n        node {\n          ... on Repository {\n            id\n            name\n            viewerHasStarred\n            url\n            isPrivate\n            isArchived\n            owner {\n            login\n            avatarUrl\n          }\n          }\n        }\n      }\n    }\n  }\n"]);return M=function(){return e},e}var W=U()(M()),J=function(e){function n(){var e,t;Object(N.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(k.a)(this,(e=Object(_.a)(n)).call.apply(e,[this].concat(a)))).state={selectedRepositoryIds:[]},t}return Object(C.a)(n,e),Object(x.a)(n,[{key:"render",value:function(){return a.a.createElement(Y,{login:this.props.login,repositories:this.props.repositories,selectedRepositoryIds:this.state.selectedRepositoryIds})}}]),n}(a.a.Component),Y=function(e){var n=e.login,t=e.repositories,r=e.selectedRepositoryIds;return a.a.createElement("ul",null,t.edges.map((function(e){var t=e.node;return r.includes(t.id)&&["row"].push("row_selected"),n="undefined"!=typeof t.owner?t.owner.login:n,a.a.createElement("div",{className:"RepositoryItem",key:t.id},t.isPrivate&&a.a.createElement(A.a,null),!t.isPrivate&&a.a.createElement(G.a,null),a.a.createElement("a",{href:n+"/repository/"+t.name},t.name),!t.viewerHasStarred&&a.a.createElement(H,{className:"hover",id:t.id}),t.viewerHasStarred&&a.a.createElement(X,{id:t.id}))})))},K=function(e){var n=e.quer;return a.a.createElement(D.b,{query:W,variables:{quer:n}},(function(e){var n=e.data;return e.loading?a.a.createElement("div",null,"Loading ..."):n?a.a.createElement("div",null,a.a.createElement(J,{repositories:n.search})):a.a.createElement("p",null,"Nothing was found")}))};function Q(){var e=Object(R.a)(["\nquery User($login:String!){\n    user(login: $login) {\n        login\n        name\n        avatarUrl\n        bio\n        email  } \n        }\n        "]);return Q=function(){return e},e}var Z=U()(Q()),ee=function(e){var n=e.login;return a.a.createElement(D.b,{query:Z,variables:{login:n}},(function(e){var n=e.data;return e.loading?a.a.createElement("div",null,"Loading ..."):n?a.a.createElement(ne,{data:n}):a.a.createElement("p",null,"Nothing was found")}))},ne=function(e){var n=e.data;return a.a.createElement("div",{className:"card"},a.a.createElement("img",{src:n.user.avatarUrl,alt:"avatar",width:"100%"}),a.a.createElement("h1",null,a.a.createElement("a",{href:n.user.login},n.user.login)),a.a.createElement("p",{className:"login"}," ",n.user.name))};var te=function(){var e=a.a.useState(""),n=Object(g.a)(e,2),t=n[0],o=n[1],i=Object(r.useState)(!0),l=Object(g.a)(i,2),c=l[0],u=l[1];return a.a.createElement("div",null,a.a.createElement("div",{className:"Search"},a.a.createElement("button",{className:"button",onClick:function(){return u(!c)}}," ",c?"By users":"By repositories"," "),a.a.createElement("input",{type:"text",className:"searchTerm",placeholder:"Search",value:t,onChange:function(e){o(e.target.value)}}),a.a.createElement("div",{className:"App"},c?a.a.createElement(ee,{login:t}):a.a.createElement(K,{quer:t}))))};function re(){return localStorage.getItem("token")?a.a.createElement("div",null,a.a.createElement("div",{className:"wrap"},a.a.createElement("div",{className:"search"},a.a.createElement(te,{class:"searchTerm"})))):a.a.createElement(E.a,{to:"/auth"})}var ae=t(151);function oe(){var e=Object(R.a)(["\nmutation($id:ID!){\n   unfollowUser(input: {userId:$id} ) {\n        user{\n            id\n            viewerIsFollowing\n        }\n  }\n}"]);return oe=function(){return e},e}function ie(){var e=Object(R.a)(["\nmutation($id:ID!){\n   followUser(input: {userId:$id} ) {\n        user{\n            id\n            viewerIsFollowing\n        }\n  }\n}"]);return ie=function(){return e},e}var le=U()(ie()),ce=U()(oe()),ue=function(e){var n=e.id;return a.a.createElement(D.a,{mutation:le,variables:{id:n}},(function(e){return a.a.createElement(b.a,{color:"default",onClick:e},"Follow")}))},se=function(e){var n=e.id;return a.a.createElement(D.a,{mutation:ce,variables:{id:n}},(function(e){return a.a.createElement(b.a,{color:"primary",onClick:e},"Unfollow")}))};function me(){var e=Object(R.a)(["\nquery Userrepositories($login:String!){\n  user(login: $login) {\n    id\n    isViewer\n    viewerIsFollowing\n    avatarUrl\n    bio\n    email\n    login\n    name\n    repositories(first: 10) {\n      edges {\n        node {\n          id\n          name\n          stargazers {\n            totalCount\n          }\n          viewerHasStarred\n          isPrivate\n        }\n      }\n    }\n  }\n}\n"]);return me=function(){return e},e}function de(){var e=Object(R.a)(["\nquery Myrepositories($first:Int!){\n    viewer {\n        id\n        isViewer\n        viewerIsFollowing\n        name\n        login\n        avatarUrl\n        bio\n        email   \n        repositories(first: $first) {\n            edges {\n                node {\n                    id\n                    name\n                    stargazers{\n                        totalCount\n                    }\n                    viewerHasStarred\n                    isPrivate\n                }\n            }\n        }\n    }\n}\n"]);return de=function(){return e},e}var pe=U()(de());function ve(e){var n=e.data;return a.a.createElement("div",null,a.a.createElement(ae.a,{container:!0,spacing:0,justify:"center"},a.a.createElement(ae.a,{item:!0,xs:3},a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"UserCard"},a.a.createElement("img",{src:n.avatarUrl,alt:"avatar",width:"100%"}),a.a.createElement("h1",null," ",n.name),a.a.createElement("p",{className:"login"}," ",n.login),a.a.createElement("p",null," ",n.email),a.a.createElement("p",null," ",n.bio),!n.isViewer&&!n.viewerIsFollowing&&a.a.createElement(ue,{id:n.id}),!n.isViewer&&n.viewerIsFollowing&&a.a.createElement(se,{id:n.id})))),a.a.createElement(ae.a,{item:!0,xs:4},a.a.createElement("h2",null,"Repositories"),a.a.createElement(J,{repositories:n.repositories,login:n.login}))))}var ge=U()(me());function Ee(){var e=Object(E.g)().login;return a.a.createElement(D.b,{query:ge,variables:{login:e}},(function(e){var n=e.data;return e.loading?a.a.createElement("p",null,"loading..."):a.a.createElement(ve,{data:n.user})}))}var fe=function(){return a.a.createElement(D.b,{query:pe,variables:{first:10}},(function(e){var n=e.data;return e.loading?a.a.createElement("p",null,"loading..."):a.a.createElement(ve,{data:n.viewer})}))},be=t(81),he=t.n(be);function we(){var e=Object(R.a)(["\n  query Repos($name: String!, $login: String!) {\n    repository(owner:$login, name: $name) {\n            id\n            url\n            viewerHasStarred\n            isPrivate\n            isArchived\n            primaryLanguage {\n                name\n            }\n            stargazers {\n                totalCount\n            }\n            description\n            owner {\n                login\n                avatarUrl\n            }\n        }\n  }\n"]);return we=function(){return e},e}var ye=U()(we());function Oe(e){var n=e.data;return a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"RepositoryCard"},a.a.createElement("p",{className:"login"}," ",n.repository.owner.login),n.repository.isPrivate&&a.a.createElement(A.a,null),!n.repository.isPrivate&&a.a.createElement(G.a,null),n.repository.isArchived&&a.a.createElement(he.a,null),a.a.createElement("p",null,a.a.createElement("a",{href:n.repository.url}," Link on GitHub")),a.a.createElement("p",{className:"login"}," ",n.repository.stargazers.totalCount," stars"),a.a.createElement("p",null," Language:",n.repository.primaryLanguage&&n.repository.primaryLanguage.name),n.repository.description))}var Se=function(){var e=Object(E.g)(),n=e.login,t=e.name;return a.a.createElement(D.b,{query:ye,variables:{login:n,name:t}},(function(e){var n=e.data;return e.loading?a.a.createElement("div",null,"Loading ..."):n?a.a.createElement(Oe,{data:n}):a.a.createElement("p",null,"Nothing was found")}))};var je=function(){var e=localStorage.getItem("token");return a.a.createElement(I.a,null,a.a.createElement(E.d,null,e&&a.a.createElement(E.b,{path:"/myprofile",component:fe}),a.a.createElement(E.b,{path:"/auth",component:j}),e&&a.a.createElement(E.b,{path:"/:login/repository/:name",component:Se}),e&&a.a.createElement(E.b,{path:"/:login/",component:Ee}),e&&a.a.createElement(E.b,{path:"/",component:re}),a.a.createElement(E.a,{to:"/auth"})))};var Ie=function(){return a.a.createElement(je,null)},Ne=Object(l.b)((function(e){return{counter:e.counter}}),(function(e){return{increment:function(){return e(v)},decrement:function(){return e(p)}}}))(Ie);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var xe={user:{},loggedIn:!1,repList:"myreps"};var ke=Object(u.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"LOGIN":return{user:n.user,loggedIn:!0};case"LOGOUT":var t=localStorage.getItem("currentUser");return localStorage.removeItem("currentUser"),t.next(null),{user:{},loggedIn:!1};default:return e}}),xe,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),_e=t(13),Ce=t(34),Re=t(85),$e=t(84),Ue=t(152),De=t(153),qe=t(154),Te=t(48);function Pe(){var e=Object(R.a)(["\n    margin-top: 100px;\n    justify-content: center;\n    width: 337px;\n    height: 278px;\n    border: 1px solid #E0E0E0;\n    box-sizing: border-box;\n    border-radius: 18px;"]);return Pe=function(){return e},e}function Le(){var e=Object(R.a)(["\n    width: 300px;\n    height: 15%;\n    margin: 10px 10px;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    border-radius: 10px;"]);return Le=function(){return e},e}function He(){var e=Object(R.a)(["\n    text-transform: uppercase;\n    text-align:center;\n    width: 592px;\n    font-family: Roboto serif;\n    font-style: normal;\n    font-weight: 200;\n    font-size: 48px;\n\n    color: #333333;"]);return He=function(){return e},e}function ze(){var e=Object(R.a)(["\n    width: 100px;\n    height: 25px;\n    margin: 10px 10px;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    border-radius: 10px;\n    background-color: cornflowerblue;\n    color: white;\n"]);return ze=function(){return e},e}var Ve=Te.a.button(ze()),Xe=(Te.a.h1(He()),Te.a.input(Le()),Te.a.div(Pe()),t(156));var Fe=new $e.a,Ae=new Re.a({uri:"https://api.github.com/graphql",headers:{authorization:"Bearer ".concat(localStorage.getItem("token"))}}),Be=document.getElementById("root"),Ge=new Ce.a({link:Ae,cache:Fe});i.a.render(a.a.createElement(l.a,{store:ke},a.a.createElement(_e.a,{client:Ge},a.a.createElement((function(){var e=localStorage.getItem("token");return a.a.createElement(Ue.a,{position:"static"},a.a.createElement(De.a,null,a.a.createElement(y.a,{variant:"h6"},a.a.createElement("a",{href:"/"},"GitHub Client")),a.a.createElement("div",null,a.a.createElement(qe.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit"},a.a.createElement("a",{href:"/myprofile"},a.a.createElement(Xe.a,null)))),e&&a.a.createElement(Ve,{onClick:function(){return localStorage.removeItem("token"),window.location.reload(!0),a.a.createElement(E.a,{to:"/auth"})}},"Log out")))}),null),a.a.createElement(Ne,null))),Be),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},39:function(e,n,t){},97:function(e,n,t){e.exports=t(110)}},[[97,1,2]]]);
//# sourceMappingURL=main.e5d8035b.chunk.js.map