(this["webpackJsonpcasbin-editor"]=this["webpackJsonpcasbin-editor"]||[]).push([[0],{112:function(e,n,t){"use strict";t.r(n);var a,o=t(2),r=t.n(o),i=t(63),c=t.n(i),_=t(7),s={basic:{name:"ACL",model:"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act",policy:"p, alice, data1, read\np, bob, data2, write",request:"alice, data1, read",customConfig:void 0},basic_with_root:{name:"ACL with superuser",model:'[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act || r.sub == "root"',policy:"p, alice, data1, read\np, bob, data2, write",request:"alice, data1, read",customConfig:void 0},basic_without_resources:{name:"ACL without resources",model:"[request_definition]\nr = sub, act\n\n[policy_definition]\np = sub, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == p.sub && r.act == p.act",policy:"p, alice, read\np, bob, write",request:"alice, read",customConfig:void 0},basic_without_users:{name:"ACL without users",model:"[request_definition]\nr = obj, act\n\n[policy_definition]\np = obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.obj == p.obj && r.act == p.act",policy:"p, data1, read\np, data2, write",request:"data1, read",customConfig:void 0},rbac:{name:"RBAC",model:"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act",policy:"p, alice, data1, read\np, bob, data2, write\np, data2_admin, data2, read\np, data2_admin, data2, write\n\ng, alice, data2_admin",request:"alice, data2, read",customConfig:void 0},rbac_with_resource_roles:{name:"RBAC with resource roles",model:"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\ng2 = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = g(r.sub, p.sub) && g2(r.obj, p.obj) && r.act == p.act",policy:"p, alice, data1, read\np, bob, data2, write\np, data_group_admin, data_group, write\n\ng, alice, data_group_admin\ng2, data1, data_group\ng2, data2, data_group",request:"alice, data1, read\nalice, data1, write\nalice, data2, read\nalice, data2, write ",customConfig:void 0},rbac_with_domains:{name:"RBAC with domains/tenants",model:"[request_definition]\nr = sub, dom, obj, act\n\n[policy_definition]\np = sub, dom, obj, act\n\n[role_definition]\ng = _, _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = g(r.sub, p.sub, r.dom) && r.dom == p.dom && r.obj == p.obj && r.act == p.act",policy:"p, admin, domain1, data1, read\np, admin, domain1, data1, write\np, admin, domain2, data2, read\np, admin, domain2, data2, write\n\ng, alice, admin, domain1\ng, bob, admin, domain2",request:"alice, domain1, data1, read",customConfig:void 0},rbac_with_pattern:{name:"RBAC with pattern",model:"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = g(r.sub, p.sub) && regexMatch(r.act, p.act)",policy:"\np, pen_admin, data1, GET\n\ng, /book/:id, book_admin\n",request:"/book/1, data1, GET",customConfig:"\n(function() {\n  return {\n    /**\n     * Here is custom functions for Casbin.\n     * Currently, there are built-in globMatch, keyMatch, keyMatch2, keyMatch3, keyMatch4, regexMatch, ipMatch.\n     */\n    functions: {},\n    /**\n     * The value comes from config.functions, Casbin will not use this configuration if the value is undefined.\n     * example:\n     * matchingForGFunction: 'globMatch'\n     * matchingDomainForGFunction: 'keyMatch'\n     */\n    matchingForGFunction: 'keyMatch2',\n    matchingDomainForGFunction: undefined\n  };\n})();"},rbac_with_all_pattern:{name:"RBAC with all pattern",model:"[request_definition]\nr = sub, dom, obj, act\n\n[policy_definition]\np = sub, dom, obj, act\n\n[role_definition]\ng = _, _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = g(r.sub, p.sub, r.dom) && r.dom == p.dom && r.obj == p.obj &&  r.act == p.act",policy:"p, book_group, domain1, data1, read\np, book_group, domain2, data2, write\n\ng, /book/:id, book_group, *",request:"/book/1, domain1, data1, read\n/book/1, domain2, data2, write\n",customConfig:"\n(function() {\n  return {\n    /**\n     * Here is custom functions for Casbin.\n     * Currently, there are built-in globMatch, keyMatch, keyMatch2, keyMatch3, keyMatch4, regexMatch, ipMatch.\n     */\n    functions: {},\n    /**\n     * The value comes from config.functions, Casbin will not use this configuration if the value is undefined.\n     * example:\n     * matchingForGFunction: 'globMatch'\n     * matchingDomainForGFunction: 'keyMatch'\n     */\n    matchingForGFunction: 'keyMatch2',\n    matchingDomainForGFunction: 'keyMatch2'\n  };\n})();"},rbac_with_deny:{name:"RBAC with deny-override",model:"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act, eft\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow)) && !some(where (p.eft == deny))\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act",policy:"p, alice, data1, read, allow\np, bob, data2, write, allow\np, data2_admin, data2, read, allow\np, data2_admin, data2, write, allow\np, alice, data2, write, deny\n\ng, alice, data2_admin",request:"alice, data1, read\nalice, data2, write",customConfig:void 0},abac:{name:"ABAC",model:"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == r.obj.Owner",policy:"",request:"alice, { Owner: 'alice'}\nalice, { Owner: 'bob'}",customConfig:void 0},abac_with_policy_rule:{name:"ABAC with policy rule",model:"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub_rule, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = eval(p.sub_rule) && r.obj == p.obj && r.act == p.act",policy:"p, r.sub.Age > 18 && r.sub.Age < 60, /data1, read\n",request:"{ Age: 30}, /data1, read",customConfig:void 0},keymatch:{name:"RESTful (KeyMatch)",model:"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == p.sub && keyMatch(r.obj, p.obj) && regexMatch(r.act, p.act)",policy:"p, alice, /alice_data/*, GET\np, alice, /alice_data/resource1, POST\n\np, bob, /alice_data/resource2, GET\np, bob, /bob_data/*, POST\n\np, cathy, /cathy_data, (GET)|(POST)",request:"alice, /alice_data/hello, GET",customConfig:void 0},keymatch2:{name:"RESTful (KeyMatch2)",model:"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == p.sub && keyMatch2(r.obj, p.obj) && regexMatch(r.act, p.act)",policy:"p, alice, /alice_data/:resource, GET\np, alice, /alice_data2/:id/using/:resId, GET",request:"alice, /alice_data/hello, GET\nalice, /alice_data/hello, POST",customConfig:void 0},ipmatch:{name:"IP match",model:"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = ipMatch(r.sub, p.sub) && r.obj == p.obj && r.act == p.act",policy:"p, 192.168.2.0/24, data1, read\np, 10.0.0.0/16, data2, write",request:"192.168.2.1, data1, read\n10.0.2.3, data2, write",customConfig:void 0},priority:{name:"Priority",model:"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act, eft\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = priority(p.eft) || deny\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act",policy:"p, alice, data1, read, allow\np, data1_deny_group, data1, read, deny\np, data1_deny_group, data1, write, deny\np, alice, data1, write, allow\n\ng, alice, data1_deny_group\n\np, data2_allow_group, data2, read, allow\np, bob, data2, read, deny\np, bob, data2, write, deny\n\ng, bob, data2_allow_group",request:"alice, data1, read",customConfig:void 0}};function l(e,n){return"".concat(n.toUpperCase(),"_").concat(a[e])}function u(){var e=window.localStorage.getItem(a[a.MODEL].toString());return e||"basic"}function d(e,n="basic"){var t=window.localStorage.getItem(l(e,n));if(t)return t;var o=s[n];switch(e){case a.MODEL:return o.model;case a.POLICY:return o.policy;case a.REQUEST:return o.request;case a.CUSTOM_FUNCTION:return o.customConfig||"(function() {\n  return {\n    /**\n     * Here is custom functions for Casbin.\n     * Currently, there are built-in globMatch, keyMatch, keyMatch2, keyMatch3, keyMatch4, regexMatch, ipMatch.\n     */\n    functions: {},\n    /**\n     * The value comes from config.functions, Casbin will not use this configuration if the value is undefined.\n     * example:\n     * matchingForGFunction: 'globMatch'\n     * matchingDomainForGFunction: 'keyMatch'\n     */\n    matchingForGFunction: undefined,\n    matchingDomainForGFunction: undefined\n  };\n})();"}}!function(e){e[e.MODEL=0]="MODEL",e[e.POLICY=1]="POLICY",e[e.REQUEST=2]="REQUEST",e[e.CUSTOM_FUNCTION=3]="CUSTOM_FUNCTION"}(a||(a={}));var p=e=>r.a.createElement("select",{defaultValue:u(),onChange:n=>{var t,o=n.target.value;t=o,window.localStorage.setItem(a[a.MODEL],t),e.onChange(o)}},r.a.createElement("option",{value:"",disabled:!0},"Select your model"),Object.keys(s).map(e=>r.a.createElement("option",{key:e,value:e},s[e].name)));p.defaultProps={onChange:console.log,defaultValue:"basic"};var m=p,b=t(4),f=t(38),h=(t(80),t(81),t(82),t(83),t(84),t(85),t(12)),g=t.n(h);g.a.defineMode("casbin-conf",(function(){function e(e,n){var t=e.peek();if("["===t)return e.match("[request_definition")?(n.sec="r",e.skipTo("]"),e.eat("]"),"header"):e.match("[policy_definition")?(n.sec="p",e.skipTo("]"),e.eat("]"),"header"):e.match("[role_definition")?(n.sec="g",e.skipTo("]"),e.eat("]"),"header"):e.match("[policy_effect")?(n.sec="e",e.skipTo("]"),e.eat("]"),"header"):e.match("[matchers")?(n.sec="m",e.skipTo("]"),e.eat("]"),"header"):(n.sec="",e.skipToEnd(),"");if("#"===t)return e.skipToEnd(),"comment";if('"'===t)return e.skipToEnd(),e.skipTo('"'),e.eat('"'),"string";if("="===t&&(n.after_equal=!0,e.eat("=")),e.sol()&&(n.after_equal=!1),""===n.sec)return e.skipToEnd(),"";if(e.sol())return""!==n.sec?("g"===n.sec&&e.match(new RegExp("^g[2-9]?"))||e.match(n.sec))&&(" "===e.peek()||"="===e.peek())?"builtin":(n.sec="",void e.next()):void e.next();if(n.after_equal){if("r"===n.sec||"p"===n.sec){if(n.comma&&(n.comma=!1,e.match(new RegExp("^[_a-zA-Z][_a-zA-Z0-9]*"))))return"property";if(e.eat(",")||e.eat(" "))return n.comma=!0,""}else if("e"===n.sec){if(n.dot&&(n.dot=!1,e.match(new RegExp("^[_a-zA-Z][_a-zA-Z0-9]*"))))return"property";if(e.eat("."))return n.dot=!0,"";if(e.match("p")&&"."===e.peek())return"builtin";if(e.match("some")||e.match("where")||e.match("priority"))return"keyword";if(e.match("allow")||e.match("deny"))return"string"}else if("m"===n.sec){if(n.dot&&(n.dot=!1,e.match(new RegExp("^[_a-zA-Z][_a-zA-Z0-9]*"))))return"property";if(e.eat("."))return n.dot=!0,"";if((e.match("r")||e.match("p"))&&"."===e.peek())return"builtin";if(e.match(new RegExp("^[_a-zA-Z][_a-zA-Z0-9]*"))&&"("===e.peek())return"def"}e.next()}else e.next()}return{startState:function(){return{tokenize:e}},token:function(e,n){return n.tokenize(e,n)}}})),g.a.defineMode("casbin-csv",(function(){function e(e,n){var t=e.peek();return"#"===t?(e.skipToEnd(),"comment"):","===t?(e.eat(","),""):e.sol()&&e.match("p")?"def":e.sol()&&(e.match("g2")||e.match("g"))?"keyword":e.skipTo(",")?"string":(e.skipToEnd(),"property")}return{startState:function(){return{tokenize:e}},token:function(e,n){return n.tokenize(e,n)}}}));var E=e=>{var n=Object(o.useState)(d(e.persist,e.modelKind)),t=Object(_.a)(n,2),a=t[0],i=t[1],c=e.modelKind,s=e.onChange,p=e.persist;return Object(o.useEffect)(()=>{var e=d(p,c);i(e),s(e)},[c,p,s]),r.a.createElement("div",{style:e.style},r.a.createElement(f.Controlled,{onBeforeChange:(n,t,a)=>{i(a),e.onChange(a),function(e,n){var t=u()||"basic";window.localStorage.setItem(l(e,t),n)}(e.persist,a)},options:e.options,value:a}))};E.defaultProps={onChange:()=>{}};var y=e=>r.a.createElement(E,Object.assign({persist:a.CUSTOM_FUNCTION,options:{lineNumbers:!0,indentUnit:4,styleActiveLine:!0,matchBrackets:!0,mode:"javascript",lineWrapping:!0,theme:"monokai"}},e)),w=e=>r.a.createElement(E,Object.assign({persist:a.MODEL,options:{lineNumbers:!0,indentUnit:4,styleActiveLine:!0,matchBrackets:!0,mode:"casbin-conf",lineWrapping:!0,theme:"monokai"}},e)),O=e=>r.a.createElement(E,Object.assign({persist:a.POLICY,options:{lineNumbers:!0,indentUnit:4,styleActiveLine:!0,matchBrackets:!0,mode:"casbin-csv",lineWrapping:!0,theme:"monokai"}},e)),M=e=>r.a.createElement(E,Object.assign({persist:a.REQUEST,options:{lineNumbers:!0,indentUnit:4,styleActiveLine:!0,matchBrackets:!0,mode:"casbin-csv",lineWrapping:!0,theme:"monokai"}},e)),k=e=>r.a.createElement("div",{style:e.style},r.a.createElement(f.Controlled,{onBeforeChange:()=>{},value:e.value,options:{readOnly:!0,indentUnit:4,styleActiveLine:!0,matchBrackets:!0,mode:"javascript",lineWrapping:!0,theme:"monokai"}})),C=t(10),x=e=>r.a.createElement(b.a,{style:{marginRight:8},onClick:()=>{try{C.Config.newConfigFromText(e.model),e.onResponse(r.a.createElement(b.b,null,"Passed"))}catch(n){e.onResponse(r.a.createElement(b.b,{type:"error"},n.message))}}},"SYNTAX VALIDATE"),j=t(68),T=()=>{var e=Object(o.useState)(u()),n=Object(_.a)(e,2),t=n[0],i=n[1],c=Object(o.useState)(""),s=Object(_.a)(c,2),d=s[0],p=s[1],f=Object(o.useState)(""),h=Object(_.a)(f,2),g=h[0],E=h[1],C=Object(o.useState)(""),T=Object(_.a)(C,2),D=T[0],v=T[1],F=Object(o.useState)(""),P=Object(_.a)(F,2),A=P[0],R=P[1],U=Object(o.useState)(r.a.createElement(r.a.Fragment,null)),L=Object(_.a)(U,2),I=L[0],q=L[1],B=Object(o.useState)(""),K=Object(_.a)(B,2),G=K[0],W=K[1],S=Object(o.useState)(!0),N=Object(_.a)(S,2),z=N[0],Z=N[1];return Object(o.useEffect)(()=>{setTimeout(()=>{Z(!1)},2e3)}),r.a.createElement(r.a.Fragment,null,r.a.createElement(b.d,null,r.a.createElement(b.c,null,r.a.createElement(b.d,null,r.a.createElement(b.f,null,"Model"),r.a.createElement(m,{onChange:e=>{i(e)}}),r.a.createElement(b.a,{onClick:()=>{window.confirm("Confirm Reset?")&&(!function(e){for(var n in a)if(a.hasOwnProperty(n)){var t=parseInt(n,10);isNaN(t)&&window.localStorage.removeItem(l(t,e))}}(t),window.location.reload())},style:{marginLeft:8}},"Reset")),r.a.createElement(w,{modelKind:t,onChange:p})),r.a.createElement(b.c,null,r.a.createElement(b.f,null,"Policy"),r.a.createElement(O,{modelKind:t,onChange:E}))),r.a.createElement(b.d,null,r.a.createElement(b.c,null,r.a.createElement(b.f,null,"Request"),r.a.createElement(M,{modelKind:t,onChange:R})),r.a.createElement(b.c,null,r.a.createElement(b.f,null,"Enforcement Result"),r.a.createElement(k,{value:G}))),r.a.createElement(b.d,null,r.a.createElement(b.c,null,r.a.createElement(b.d,null,r.a.createElement(b.f,null,"Custom Config"),r.a.createElement(b.a,{onClick:()=>Z(!z)},"TOGGLE")),z&&r.a.createElement(y,{modelKind:t,onChange:v}))),r.a.createElement("div",{style:{padding:8}},r.a.createElement(x,{model:d,onResponse:e=>q(e)}),r.a.createElement(j.a,{modelKind:t,model:d,policy:g,customConfig:D,request:A,onResponse:e=>{Object(o.isValidElement)(e)?q(e):Array.isArray(e)&&W(e.join("\n"))}}),r.a.createElement("div",{style:{display:"inline-block"}},I)))},D=(t(111),()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement(b.e,null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/casbin/casbin-editor"},r.a.createElement("img",{alt:"GitHub stars",src:"https://img.shields.io/github/stars/casbin/casbin-editor?style=social"})),r.a.createElement("span",{style:{color:"#FFFFFF",float:"right",fontSize:14}},"Copyright \xa9 ",(new Date).getFullYear()," Casbin contributors.")))),v=document.getElementById("root");c.a.render(r.a.createElement(D,null),v)},4:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"f",(function(){return d})),t.d(n,"d",(function(){return p})),t.d(n,"c",(function(){return m})),t.d(n,"b",(function(){return b})),t.d(n,"e",(function(){return f}));var a=t(18),o=t(19);function r(){var e=Object(a.a)(["\n  padding: 1em;\n  background: #222;\n"]);return r=function(){return e},e}function i(){var e=Object(a.a)(["\n  color: ",";\n  font-weight: 600;\n  font-size: 14px;\n"]);return i=function(){return e},e}function c(){var e=Object(a.a)(["\n  flex: 1;\n"]);return c=function(){return e},e}function _(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]);return _=function(){return e},e}function s(){var e=Object(a.a)(["\n  padding: 8px;\n"]);return s=function(){return e},e}function l(){var e=Object(a.a)(["\n  border: 1px solid #443d80;\n  border-radius: 3px;\n  color: #443d80;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.2em;\n  padding: 10px;\n  text-decoration: none !important;\n  text-transform: uppercase;\n  transition: background 0.3s, color 0.3s;\n\n  :hover {\n    background: #443d80;\n    color: #fff;\n  }\n"]);return l=function(){return e},e}var u=o.a.button(l()),d=o.a.h4(s()),p=o.a.div(_()),m=o.a.div(c()),b=o.a.span(i(),e=>{switch(e.type){case"error":return"#db4545";case"pass":return"#39aa56"}});b.defaultProps={type:"pass"};var f=o.a.div(r())},68:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_runner_work_casbin_editor_casbin_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_home_runner_work_casbin_editor_casbin_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_casbin_editor_casbin_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),_home_runner_work_casbin_editor_casbin_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_home_runner_work_casbin_editor_casbin_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(11),_home_runner_work_casbin_editor_casbin_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_ui__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(4),casbin__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(10),needsAbacParsing=new Set(["abac","abac_with_policy_rule"]);function parseABACRequest(line){for(var value="",objectToken=0,parseToObject=!1,request=[],i=0;i<line.length;i++)" "!==line[i]&&(0!==objectToken||","!==line[i]?(value+=line[i],"{"!==line[i]?"}"===line[i]&&objectToken--:(parseToObject=!0,objectToken++)):(parseToObject&&(value=eval("(".concat(value,")"))),request.push(value),value="",parseToObject=!1));if(0!==objectToken)throw new Error("invalid request ".concat(line));return value&&(parseToObject&&(value=eval("(".concat(value,")"))),request.push(value)),request}function enforcer(e){return _enforcer.apply(this,arguments)}function _enforcer(){return _enforcer=Object(_home_runner_work_casbin_editor_casbin_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.a)(_home_runner_work_casbin_editor_casbin_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function _callee(props){var startTime,result,e,customConfigCode,builtinFunc,config,_config,rm,matchingForGFunction,matchingDomainForGFunction,requests,_iterator,_step,n,line,rvals,stopTime;return _home_runner_work_casbin_editor_casbin_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return startTime=performance.now(),result=[],_context.prev=3,_context.next=6,Object(casbin__WEBPACK_IMPORTED_MODULE_6__.newEnforcer)(Object(casbin__WEBPACK_IMPORTED_MODULE_6__.newModel)(props.model),props.policy?new casbin__WEBPACK_IMPORTED_MODULE_6__.StringAdapter(props.policy):void 0);case 6:if(e=_context.sent,customConfigCode=props.customConfig,!customConfigCode){_context.next=51;break}if(_context.prev=9,builtinFunc={keyMatch:casbin__WEBPACK_IMPORTED_MODULE_6__.Util.keyMatchFunc,keyMatch2:casbin__WEBPACK_IMPORTED_MODULE_6__.Util.keyMatch2Func,keyMatch3:casbin__WEBPACK_IMPORTED_MODULE_6__.Util.keyMatch3Func,keyMatch4:casbin__WEBPACK_IMPORTED_MODULE_6__.Util.keyMatch4Func,regexMatch:casbin__WEBPACK_IMPORTED_MODULE_6__.Util.regexMatchFunc,ipMatch:casbin__WEBPACK_IMPORTED_MODULE_6__.Util.ipMatchFunc,globMatch:casbin__WEBPACK_IMPORTED_MODULE_6__.Util.globMatch},config=eval(customConfigCode),!config){_context.next=45;break}if(config=Object(_home_runner_work_casbin_editor_casbin_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.a)(Object(_home_runner_work_casbin_editor_casbin_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.a)({},config),{},{functions:Object(_home_runner_work_casbin_editor_casbin_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.a)(Object(_home_runner_work_casbin_editor_casbin_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.a)({},config.functions),builtinFunc)}),(null===(_config=config)||void 0===_config?void 0:_config.functions)&&Object.keys(config.functions).forEach(n=>e.addFunction(n,config.functions[n])),rm=e.getRoleManager(),matchingForGFunction=config.matchingForGFunction,!matchingForGFunction){_context.next=30;break}if("function"!==typeof matchingForGFunction){_context.next=21;break}return _context.next=21,rm.addMatchingFunc(matchingForGFunction);case 21:if("string"!==typeof matchingForGFunction){_context.next=30;break}if(!(matchingForGFunction in config.functions)){_context.next=28;break}return console.warn("add matchingForGFunction"),_context.next=26,rm.addMatchingFunc(config.functions[matchingForGFunction]);case 26:_context.next=30;break;case 28:return props.onResponse(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_5__.b,{type:"error"},"Must sure the ",matchingForGFunction,"() in config.functions")),_context.abrupt("return");case 30:if(matchingDomainForGFunction=config.matchingDomainForGFunction,!matchingDomainForGFunction){_context.next=45;break}if("function"!==typeof matchingDomainForGFunction){_context.next=36;break}return console.warn("add addDomainMatchingFunc"),_context.next=36,rm.addDomainMatchingFunc(matchingDomainForGFunction);case 36:if("string"!==typeof matchingDomainForGFunction){_context.next=45;break}if(!(matchingDomainForGFunction in config.functions)){_context.next=43;break}return console.warn("add addDomainMatchingFunc"),_context.next=41,rm.addDomainMatchingFunc(config.functions[matchingDomainForGFunction]);case 41:_context.next=45;break;case 43:return props.onResponse(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_5__.b,{type:"error"},"Must sure the ",matchingDomainForGFunction,"() in config.functions")),_context.abrupt("return");case 45:_context.next=51;break;case 47:return _context.prev=47,_context.t0=_context.catch(9),props.onResponse(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_5__.b,{type:"error"},"Please check syntax in Custom Function Editor: ",_context.t0.message)),_context.abrupt("return");case 51:requests=props.request.split("\n"),_iterator=Object(_home_runner_work_casbin_editor_casbin_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__.a)(requests),_context.prev=53,_iterator.s();case 55:if((_step=_iterator.n()).done){_context.next=72;break}if(n=_step.value,line=n.trim(),line){_context.next=61;break}return result.push("// ignore"),_context.abrupt("continue",70);case 61:if("#"!==line[0]){_context.next=64;break}return result.push("// ignore"),_context.abrupt("continue",70);case 64:return rvals=needsAbacParsing.has(props.modelKind)?parseABACRequest(n):n.split(",").map(e=>e.trim()),_context.t1=result,_context.next=68,e.enforce(...rvals);case 68:_context.t2=_context.sent,_context.t1.push.call(_context.t1,_context.t2);case 70:_context.next=55;break;case 72:_context.next=77;break;case 74:_context.prev=74,_context.t3=_context.catch(53),_iterator.e(_context.t3);case 77:return _context.prev=77,_iterator.f(),_context.finish(77);case 80:stopTime=performance.now(),props.onResponse(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_5__.b,null,"Done in "+((stopTime-startTime)/1e3).toFixed(2)+"s")),props.onResponse(result),_context.next=89;break;case 85:_context.prev=85,_context.t4=_context.catch(3),props.onResponse(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_5__.b,{type:"error"},_context.t4.message)),props.onResponse([]);case 89:case"end":return _context.stop()}}),_callee,null,[[3,85],[9,47],[53,74,77,80]])}))),_enforcer.apply(this,arguments)}var RunTest=e=>react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_5__.a,{style:{marginRight:8},onClick:()=>enforcer(e)},"RUN THE TEST");__webpack_exports__.a=RunTest},71:function(e,n,t){e.exports=t(112)}},[[71,1,2]]]);
//# sourceMappingURL=main.53f3556f.chunk.js.map