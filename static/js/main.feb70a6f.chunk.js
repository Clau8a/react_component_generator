(this.webpackJsonpreact_component_generator=this.webpackJsonpreact_component_generator||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(6),c=t.n(r),m=(t(14),t(7));var o=function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement("a",{className:"navbar-brand",href:"#"},"RCG"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:" navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link",href:"/"},"Home ",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link",href:"https://github.com/Clau8a/react_component_generator",target:"_blank",rel:"noopener noreferrer"},"gihub ",l.a.createElement("span",{className:"sr-only"},"(current)")))))),l.a.createElement("div",{className:"container"}))},s=t(8),u=t(3),i=t(1),p=[{id:1,name:"string",defaultValue:"''"},{id:2,name:"number",defaultValue:"null"},{id:3,name:"object",defaultValue:"null"},{id:4,name:"func",defaultValue:"f => f"},{id:5,name:"array",defaultValue:"[]"},{id:6,name:"arrayof(string)",defaultValue:"null"},{id:7,name:"arrayof(number)",defaultValue:"null"}],d={componentName:"MyComponent",usePropTypes:!1,useDefaultProps:!1,params:[],newParam:{name:"",type:"",isRequired:!1},useSemiColon:!0},E=function(e,a){switch(a.type){case"SET_NAME":return Object(i.a)(Object(i.a)({},e),{},{componentName:a.payload});case"SET_USE_PROPTYPES":return Object(i.a)(Object(i.a)({},e),{},{usePropTypes:a.payload});case"SET_USE_DEFAULTPROPS":return Object(i.a)(Object(i.a)({},e),{},{useDefaultProps:a.payload});case"SET_PARAMS":return Object(i.a)(Object(i.a)({},e),{},{params:a.payload});case"SET_NEW_PARAM":return Object(i.a)(Object(i.a)({},e),{},{newParam:a.payload});default:return Object(i.a)({},e)}},f=function(e){var a=e.state,t=e.dispatch,n=a.componentName,r=a.usePropTypes,c=a.useDefaultProps,m=a.params,o=a.newParam,E=function(e){var a=e.target,n=a.name,l=a.value;console.log("SET_".concat(n.toUpperCase()),l),t({type:"SET_".concat(n.toUpperCase()),payload:l})},f=function(e,a){var n=e.target,l=n.name,r=n.value;t({type:"SET_PARAMS",payload:m.map((function(e){return e.id===a?Object(i.a)(Object(i.a)({},e),{},Object(u.a)({},l,r)):e}))})},v=function(e){var a=e.target,n=a.name,l=a.value;t({type:"SET_NEW_PARAM",payload:Object(i.a)(Object(i.a)({},o),{},Object(u.a)({},n,l))})};return l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-6 form-group"},l.a.createElement("label",null,"Component Name"),l.a.createElement("input",{className:"form-control",name:"NAME",value:n,onChange:E})),l.a.createElement("div",{className:"col-12 col-md-2 form-group"},l.a.createElement("label",null,"PropTypes"),l.a.createElement("div",{className:"form-group form-check"},l.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"proptypes",checked:r,onChange:function(){return E({target:{name:"use_proptypes",value:!r}})}}))),l.a.createElement("div",{className:"col-12 col-md-2 form-group"},l.a.createElement("label",null,"defaultProps"),l.a.createElement("div",{className:"form-group form-check"},l.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"defaultprops",checked:c,onChange:function(){return E({target:{name:"use_defaultprops",value:!c}})}})))),l.a.createElement("label",null,"Parameters"),l.a.createElement("hr",null),l.a.createElement("div",{className:""},m.map((function(e){return l.a.createElement("div",{className:"row",key:e.id},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{className:"form-control",name:"name",value:e.name,onChange:function(a){return f(a,e.id)}})),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("label",null,"Type"),l.a.createElement("select",{className:"form-control",name:"type",value:e.type,onChange:function(a){return f(a,e.id)}},p.map((function(e){return l.a.createElement("option",{key:e.id,value:e.id},e.name)})))),l.a.createElement("div",{className:"col-md-2"},l.a.createElement("label",null,"required?"),l.a.createElement("div",{className:"form-group form-check"},l.a.createElement("input",{type:"checkbox",className:"form-check-input",checked:e.isRequired,onChange:function(a){return f({target:{name:"isRequired",value:!e.isRequired}},e.id)}}))))})),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),e.target.checkValidity()&&(t({type:"SET_PARAMS",payload:[].concat(Object(s.a)(m),[Object(i.a)(Object(i.a)({},o),{},{id:m.length+1})])}),t({type:"SET_NEW_PARAM",payload:d.newParam}))}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{className:"form-control",value:o.name,name:"name",onChange:v,required:!0})),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("label",null,"Type"),l.a.createElement("select",{className:"form-control",value:o.type,name:"type",onChange:v,required:!0},l.a.createElement("option",{value:""},"Select type"),p.map((function(e){return l.a.createElement("option",{key:e.id,value:e.id},e.name)})))),l.a.createElement("div",{className:"col-md-2"},l.a.createElement("label",null,"required?"),l.a.createElement("div",{className:"form-group form-check"},l.a.createElement("input",{type:"checkbox",className:"form-check-input",checked:o.isRequired,onChange:function(e){return v({target:{name:"isRequired",value:!o.isRequired}})}})))),l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn-success",type:"submit"},"Add")))))},v=(t(15),function(e){return l.a.createElement("div",null,e.map((function(e){return l.a.createElement("label",{key:e.name+e.id},"\xa0\xa0","".concat(e.name,": PropTypes.").concat(p.find((function(a){return a.id===parseInt(e.type,10)})).name).concat(e.isRequired?".isRequired":"",","))})))}),b=function(e){var a=e.componentName,t=e.useProptypes,n=e.params;return t?l.a.createElement("div",null,l.a.createElement("label",null,l.a.createElement("b",null,a),".propTypes = {"),l.a.createElement(v,{params:n}),l.a.createElement("label",null,"};")):null},N=function(e){var a=e.componentName,t=e.useDefaultProps,n=e.params;return t?l.a.createElement("div",null,l.a.createElement("label",null,l.a.createElement("b",null,a),".defaultProps = {"),l.a.createElement("div",null,n.filter((function(e){return!e.isRequired})).map((function(e){return l.a.createElement("label",{key:e.name+e.id},"\xa0\xa0","".concat(e.name,": ").concat(p.find((function(a){return a.id===parseInt(e.type,10)})).defaultValue,","))}))),l.a.createElement("label",null,"};")):null},y=function(e){var a=e.componentName;return l.a.createElement("label",null,l.a.createElement("span",{className:"reservedWord"},"export default"),l.a.createElement("b",null," ",a),";")},g=function(e){var a=e.componentName,t=e.params;return 0===t.length?l.a.createElement("label",null,l.a.createElement("span",{className:"reservedWord"},"const ")," ",l.a.createElement("b",null,a)," = () =>{"):l.a.createElement(l.a.Fragment,null,l.a.createElement("label",null,l.a.createElement("span",{className:"reservedWord"},"const ")," ",l.a.createElement("b",null,a),"  = ({"),"\xa0\xa0",t.map((function(e){return l.a.createElement("span",{key:e.id},"".concat(e.name,", "))})),l.a.createElement("label",null,"})=>{"))},h=function(){return l.a.createElement("label",null," \xa0\xa0",l.a.createElement("span",{className:"reservedWord"},"return")," <></>;")},P=function(){return l.a.createElement("label",null,l.a.createElement("span",{className:"reservedWord"},"import "),"React",l.a.createElement("span",{className:"reservedWord"}," from "),l.a.createElement("span",{className:"string"},"'react'"),";")},k=function(e){return e.usePropTypes?l.a.createElement("label",null,l.a.createElement("span",{className:"reservedWord"},"import "),"PropTypes",l.a.createElement("span",{className:"reservedWord"}," from "),l.a.createElement("span",{className:"string"},"'prop-types'"),";"):null},T=function(e){var a=e.usePropTypes,t=e.componentName,n=e.params,r=e.useDefaultProps;return l.a.createElement("div",{className:"compiled"},l.a.createElement("code",null,l.a.createElement(P,null),l.a.createElement(k,{usePropTypes:a}),t&&l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(g,{componentName:t,params:n}),l.a.createElement(h,null),l.a.createElement("label",null,"};"),l.a.createElement("br",null),l.a.createElement(b,{componentName:t,usePropTypes:a,params:n}),l.a.createElement("br",null),l.a.createElement(N,{componentName:t,useDefaultProps:r,params:n}),l.a.createElement(y,{componentName:t}))))},S=function(e){var a=e.state;return l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},"Component ",l.a.createElement("b",null,a.componentName)),l.a.createElement("div",{className:"card-body"},l.a.createElement(T,a))))},_=function(){return l.a.createElement("header",{style:{margin:"1em 0"}},l.a.createElement("h2",null,"React component Generator"))};var O=function(){var e=l.a.useReducer(E,d),a=Object(m.a)(e,2),t=a[0],n=a[1];return l.a.createElement("div",null,l.a.createElement(o,null),l.a.createElement("div",{className:"container"},l.a.createElement(_,null),l.a.createElement("div",{className:"wrapper"},l.a.createElement(f,{state:t,dispatch:n}),l.a.createElement(S,{state:t}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(16);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.feb70a6f.chunk.js.map