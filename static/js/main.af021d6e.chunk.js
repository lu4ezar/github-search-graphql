(this["webpackJsonpgithub-search-graphql"]=this["webpackJsonpgithub-search-graphql"]||[]).push([[0],{50:function(e,n,t){e.exports=t(80)},55:function(e,n,t){},80:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(23),o=t.n(i),l=(t(55),t(11)),c=t(22),u=t(15),d=t(5),m=t(6);function s(){var e=Object(d.a)(["\n  grid-area: header;\n  text-transform: uppercase;\n  display: flex;\n  justify-content: center;\n  font-size: 2rem;\n  @media (min-width: 1024px) {\n    justify-content: flex-end;\n  }\n"]);return s=function(){return e},e}var h=m.a.div(s()),p=function(){return a.a.createElement(h,null,"GITHUB SEARCH")},f=t(9);function g(){var e=Object(d.a)(["\n  text-decoration: none;\n  color: black;\n  &:visited,\n  :hover,\n  :active {\n    color: black;\n  }\n"]);return g=function(){return e},e}function b(){var e=Object(d.a)(["\n  flex-basis: 50%;\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5em;\n  box-sizing: border-box;\n  overflow: hidden;\n  & .not-allowed {\n    white-space: nowrap;\n    cursor: not-allowed;\n    font-size: 0.95em;\n    display: contents;\n    @media (min-width: 576px) and (max-width: 1024px) {\n      letter-spacing: -0.05em;\n    }\n  }\n"]);return b=function(){return e},e}function v(){var e=Object(d.a)(["\n  display: flex;\n  font-size: 0.5rem;\n  width: 100%;\n  border: 4px double #262323;\n  box-shadow: inset -1px 0px 5px #262323;\n  @media (max-width: 575px) {\n    box-sizing: border-box;\n  }\n  @media (min-width: 576px) {\n    justify-content: center;\n    flex-flow: row wrap;\n    font-size: 1vmax;\n    width: 14vmax;\n    min-width: 14vmax;\n    height: 14vmax;\n    min-height: 14vmax;\n  }\n  @media (min-width: 1024px) {\n    font-size: 0.9vmin;\n    width: 14vmin;\n    min-width: 14vmin;\n    height: 14vmin;\n    min-height: 14vmin;\n  }\n"]);return v=function(){return e},e}function x(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  align-items: center;\n  word-break: break-word;\n  justify-content: space-around;\n  @media (min-width: 576px) {\n    height: 100%;\n  }\n  & p,\n  & h3 {\n    margin: 0;\n    min-width: 90%;\n  }\n  .description {\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 4;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n"]);return x=function(){return e},e}function w(){var e=Object(d.a)(["\n  box-sizing: border-box;\n  box-shadow: inset 0px 0px 5px #262323;\n  display: flex;\n  flex-flow: column wrap;\n  padding: 0.5em;\n  border-radius: 4px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  @media (min-width: 576px) {\n    flex-flow: row nowrap;\n    align-items: center;\n  }\n"]);return w=function(){return e},e}var E=m.a.div(w()),y=m.a.div(x()),j=m.a.div(v()),O=m.a.div(b()),z=m.a.a(g());function k(){var e=Object(d.a)(["\n  @media (max-width: 1023px) {\n    margin: 0.3rem 0;\n  }\n"]);return k=function(){return e},e}function S(){var e=Object(d.a)(["\n  flex: 1 0 auto;\n  display: none;\n  @media (min-width: 576px) {\n    display: flex;\n  }\n"]);return S=function(){return e},e}function C(){var e=Object(d.a)(["\n  grid-area: footer;\n  text-transform: uppercase;\n  font-weight: bold;\n  user-select: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5vmax;\n"]);return C=function(){return e},e}var H=m.a.div(C()),N=m.a.div(S()),I=Object(m.a)(z)(k()),_=function(){return a.a.createElement(H,null,a.a.createElement(N,null,"https://github.com/lu4ezar/github-search-graphql"),a.a.createElement(I,{href:"https://github.com/lu4ezar/github-search-graphql",title:"view src on Github"},a.a.createElement(f.h,{icon:f.f,verticalAlign:"middle",size:"medium"})))};function R(){var e=Object(d.a)(["\n  width: 0;\n  position: relative;\n  right: 1em;\n  cursor: pointer;\n  color: #262323;\n  visibility: hidden;\n  font-weight: bold;\n  &.show {\n    visibility: visible;\n  }\n"]);return R=function(){return e},e}function q(){var e=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-area: aside_input;\n  & label {\n    max-width: 90%;\n    padding: 0.5rem 0;\n  }\n  & input {\n    background: transparent;\n    border: 0;\n    outline: 0;\n    border-bottom: 2px solid black;\n    margin-bottom: 0.1rem;\n    text-align: center;\n    font-weight: bold;\n    font-size: 1rem;\n    width: 100%;\n    @media (min-width: 1024px) {\n      font-size: 1.5rem;\n    }\n    &::placeholder {\n      font-weight: normal;\n      font-style: italic;\n    }\n  }\n"]);return q=function(){return e},e}var A=m.a.div(q()),F=m.a.span(R()),T=function(e){var n=e.value,t=e.onChange,r=e.clearInput;return a.a.createElement(A,null,a.a.createElement("label",{htmlFor:"search"},a.a.createElement("input",{id:"search",type:"search",onChange:t,placeholder:"github-search-graphql",value:n})),a.a.createElement(F,{className:n?"show":"",onClick:r,title:"clear input"},"\xd7"))};function M(){var e=Object(d.a)(["\n  list-style-type: none;\n  text-transform: lowercase;\n  font-style: italic;\n  cursor: pointer;\n  margin: 0.5rem;\n  font-weight: normal;\n  transition: background 0.4s;\n  border-radius: 2px;\n  padding: 0.2rem;\n  text-align: center;\n  outline: none;\n  &:hover {\n    background: #e6e6e6;\n  }\n"]);return M=function(){return e},e}function G(){var e=Object(d.a)(["\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  max-height: 100%;\n  transition: max-height 0.2s;\n  &.collapsed {\n    max-height: 0px;\n    transition: max-height 0.2s;\n    @media (min-width: 1024px) {\n      max-height: 100%;\n    }\n  }\n"]);return G=function(){return e},e}function $(){var e=Object(d.a)(["\n  position: relative;\n  right: -2rem;\n  @media (min-width: 1024px) {\n    display: none;\n  }\n"]);return $=function(){return e},e}function P(){var e=Object(d.a)(["\n  background-color: transparent;\n  color: #262323;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 1rem;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  @media (min-width: 1024px) {\n    cursor: auto;\n  }\n"]);return P=function(){return e},e}function U(){var e=Object(d.a)(["\n  display: flex;\n  height: 2rem;\n"]);return U=function(){return e},e}function B(){var e=Object(d.a)(["\n  grid-area: aside_recent;\n  display: flex;\n  flex-direction: column;\n"]);return B=function(){return e},e}var J=m.a.div(B()),L=m.a.div(U()),D=m.a.button(P()),K=m.a.span($()),Q=m.a.ul(G()),Y=m.a.li(M()),V=function(e){var n=e.searchHistory,t=e.getSearchStringFromHistory,i=Object(r.useState)(!0),o=Object(u.a)(i,2),l=o[0],c=o[1],d=function(e){c(!0),t(e)},m=n.length?n.map((function(e,n){return a.a.createElement(Y,{title:'search for "'.concat(e,'" again'),key:e,onClick:function(){return d(e)},onKeyDown:function(){return d(e)},role:"button",tabIndex:n},e)})):null,s=l?f.b:f.a;return a.a.createElement(J,null,a.a.createElement(L,null,a.a.createElement(D,{type:"button",onClick:function(){return c(!l)}},"Search History",!!n.length&&a.a.createElement(K,{title:"expand/collapse"},a.a.createElement(f.h,{icon:s,size:"medium"})))),a.a.createElement(Q,{className:l?"collapsed":"","data-testid":"history"},m))},W=t(18),X=t(48),Z=t(46),ee=t(38),ne=t(39),te=t(40),re=t.n(te),ae=t(30),ie=t(32);function oe(){var e=Object(d.a)(["\n  query GetRepos($searchString: String!, $after: String) {\n    search(type: REPOSITORY, after: $after, first: 30, query: $searchString) {\n      edges {\n        node {\n          ... on Repository {\n            homepageUrl\n            name\n            description\n            url\n            stargazers {\n              totalCount\n            }\n            watchers {\n              totalCount\n            }\n          }\n        }\n        cursor\n      }\n    }\n  }\n"]);return oe=function(){return e},e}var le=Object(ie.b)(oe()),ce=new ie.a({uri:"https://github-search-graphql.herokuapp.com/"}),ue=function(e){var n,t=e.searchString,a=e.updateHistory,i=Object(r.useState)(!0),o=Object(u.a)(i,2),l=o[0],d=o[1],m=Object(ae.a)(le,{notifyOnNetworkStatusChange:!0,onCompleted:function(){d(!0),a(t)}}),s=Object(u.a)(m,2),h=s[0],p=s[1],f=p.data,g=p.loading,b=p.error,v=p.fetchMore;Object(r.useEffect)((function(){var e=re()(h,500);return t.length>3&&e({variables:{searchString:t}}),function(){return e.cancel()}}),[h,t]);var x=function(e,n){var t,r,a=n.fetchMoreResult;return(null===a||void 0===a||null===(t=a.search)||void 0===t||null===(r=t.edges)||void 0===r?void 0:r.length)?(d(!0),Object(W.a)({},a,{search:Object(W.a)({},a.search,{edges:[].concat(Object(c.a)(null===e||void 0===e?void 0:e.search.edges),Object(c.a)(null===a||void 0===a?void 0:a.search.edges))})})):(d(!1),e)};return{loading:g,repos:null===f||void 0===f||null===(n=f.search)||void 0===n?void 0:n.edges,error:null===b||void 0===b?void 0:b.message,hasNextPage:l,fetchMore:function(){var e=f.search.edges,n=e[e.length-1].cursor;try{return v({variables:{after:n},updateQuery:x})}catch(t){return}}}},de=function(e){var n=e.style,t=e.homepageUrl,r=e.name,i=e.description,o=e.url,l=e.stargazers,c=e.watchers;return a.a.createElement(E,{style:n,role:"listitem"},a.a.createElement(y,null,a.a.createElement("h3",null,a.a.createElement(z,{href:t||o,title:"open homepage in new tab",target:"_blank",rel:"noopener noreferrer"},r)),a.a.createElement("p",{className:"description"},i||"No description was provided")),a.a.createElement(j,null,a.a.createElement(O,null,t?a.a.createElement(a.a.Fragment,null,a.a.createElement(z,{title:"homepage",href:t,target:"_blank",rel:"noopener noreferrer"},a.a.createElement(f.h,{icon:f.e,size:"medium",verticalAlign:"middle"})),a.a.createElement("div",null,"Homepage")):a.a.createElement("div",{className:"not-allowed",title:"no homepage"},a.a.createElement(f.h,{icon:f.c,size:"medium",verticalAlign:"middle"}),a.a.createElement("div",null,"No Homepage"))),a.a.createElement(O,null,a.a.createElement(z,{title:"github page",href:o,target:"_blank",rel:"noopener noreferrer"},a.a.createElement(f.h,{icon:f.f,size:"medium",verticalAlign:"middle"})),a.a.createElement("div",null,"Github")),a.a.createElement(O,{title:"stargazers"},a.a.createElement(f.h,{icon:f.g,size:"medium",verticalAlign:"middle"}),a.a.createElement("div",null,l.totalCount)),a.a.createElement(O,{title:"watchers"},a.a.createElement(f.h,{icon:f.d,size:"medium",verticalAlign:"middle"}),a.a.createElement("div",null,c.totalCount))))},me=t(13),se=t.n(me),he=function(e){var n=e.style;return a.a.createElement(me.SkeletonTheme,{color:"silver"},a.a.createElement(E,{style:n,role:"listitem"},a.a.createElement(y,null,a.a.createElement("h3",null,a.a.createElement(se.a,null)),a.a.createElement("p",null,a.a.createElement(se.a,{count:3}))),a.a.createElement(j,null,a.a.createElement(O,null,a.a.createElement(se.a,{circle:!0,width:50,height:50}),a.a.createElement(se.a,{width:50})),a.a.createElement(O,null,a.a.createElement(se.a,{circle:!0,width:50,height:50}),a.a.createElement(se.a,{width:50})),a.a.createElement(O,null,a.a.createElement(se.a,{circle:!0,width:50,height:50}),a.a.createElement(se.a,{width:50})),a.a.createElement(O,null,a.a.createElement(se.a,{circle:!0,width:50,height:50}),a.a.createElement(se.a,{width:50})))))},pe=t(83),fe=t(45),ge=t.n(fe);function be(){var e=Object(d.a)(["\n  display: flex;\n  grid-area: list;\n  box-sizing: border-box;\n  justify-content: center;\n  align-items: center;\n  background: grey !important;\n  z-index: 100;\n  opacity: 0.7;\n  pointer-events: none;\n  &.enter {\n    opacity: 0;\n    transition: opacity 300ms linear;\n  }\n  &.enter-active {\n    opacity: 0.8;\n    transition: opacity 300ms linear;\n  }\n  &.exit {\n    opacity: 0.8;\n    transition: opacity 300ms linear;\n  }\n  &.exit-active {\n    opacity: 0;\n    transition: opacity 300ms linear;\n  }\n"]);return be=function(){return e},e}var ve=m.a.div(be()),xe=function(e){var n=e.loading;return a.a.createElement(pe.a,{in:n,timeout:300,mountOnEnter:!0,unmountOnExit:!0},a.a.createElement(ve,{"data-testid":"spinner"},a.a.createElement(ge.a,{type:"Oval",color:"black",height:100,width:100})))};function we(){var e=Object(d.a)(["\n  grid-area: list;\n  padding: 0 1rem !important;\n  @media (min-width: 1024px) {\n    padding: 0 0 0 1rem !important;\n  }\n"]);return we=function(){return e},e}var Ee=m.a.div(we()),ye=function(e){var n=ue(e),t=n.loading,i=n.repos,o=void 0===i?[]:i,l=n.error,c=n.fetchMore,u=n.hasNextPage,d=u?o.length+10:o.length,m=t?function(){}:c,s=function(e){return!u||e<o.length},h=Object(r.forwardRef)((function(e,n){var t=e.style,r=Object(X.a)(e,["style"]);return a.a.createElement("div",Object.assign({ref:n,style:Object(W.a)({},t,{height:"".concat(parseFloat(t.height)+15,"px"),paddingTop:15})},r))})),p=function(e){var n=e.index,t=e.style,r=Object(W.a)({},t,{top:Number(t.top)+15,height:Number(t.height)-25});return s(n)?a.a.createElement(de,Object.assign({style:r},o[n].node)):a.a.createElement(he,{style:r})};return a.a.createElement(a.a.Fragment,null,a.a.createElement(Ee,{"data-testid":"repoList"},!!o.length&&o.length&&a.a.createElement(ee.a,null,(function(e){var n=e.height,t=e.width;return a.a.createElement(ne.a,{isItemLoaded:s,itemCount:d,loadMoreItems:m},(function(e){var r=e.onItemsRendered,i=e.ref;return a.a.createElement(Z.a,{innerElementType:h,initialScrollOffset:0,height:n,width:t,itemCount:d,itemSize:225,ref:i,onItemsRendered:r},p)}))})),l&&a.a.createElement("p",null,l)),a.a.createElement(xe,{loading:t}))};function je(){var e=Object(d.a)(['\n  height: 100%;\n  box-sizing: border-box;\n  display: grid;\n  background: #b59797;\n  grid-gap: 1rem;\n  padding: 1rem;\n  grid-template-rows: auto auto 1fr auto auto;\n  grid-template-areas:\n    "header"\n    "aside_input"\n    "list"\n    "aside_recent"\n    "footer";\n  @media (min-width: 1024px) {\n    font-size: 1.5rem;\n    grid-template-areas:\n      "header header"\n      "aside_input list"\n      "aside_recent list"\n      "aside_recent footer";\n    padding: 2rem 5rem 2rem 5rem;\n    grid-template-columns: 2fr 4fr;\n    grid-template-rows: auto 1fr 7fr auto;\n  }\n  @media (min-width: 1280px) {\n    padding: 2rem 10rem 2rem 10rem;\n  }\n  & > div {\n    border-radius: 4px;\n    box-shadow: 2px 5px 10px #262323;\n    background: azure;\n    padding: 0 1rem;\n    text-align: center;\n    @media (min-width: 1024px) {\n      padding: 1rem;\n    }\n  }\n']);return je=function(){return e},e}var Oe=m.a.div(je()),ze=function(e,n){return n.includes(e)||n.unshift(e)>10&&n.pop(),n},ke=function(){var e=Object(r.useState)(""),n=Object(u.a)(e,2),t=n[0],i=n[1],o=Object(r.useState)([]),l=Object(u.a)(o,2),d=l[0],m=l[1];return a.a.createElement(Oe,null,a.a.createElement(p,null),a.a.createElement(T,{value:t,onChange:function(e){i(e.currentTarget.value)},clearInput:function(){i("")}}),a.a.createElement(V,{searchHistory:d,getSearchStringFromHistory:function(e){i(e)}}),a.a.createElement(ye,{searchString:t,updateHistory:function(){var e=ze(t,Object(c.a)(d));m(e)}}),a.a.createElement(_,null))};o.a.render(a.a.createElement(l.a,{client:ce},a.a.createElement(ke,null)),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.af021d6e.chunk.js.map