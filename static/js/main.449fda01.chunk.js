(this.webpackJsonpnaglfar=this.webpackJsonpnaglfar||[]).push([[0],{133:function(e){e.exports=JSON.parse('{"palette":{"common":{"black":"#000","white":"#fff"},"background":{"paper":"#fff","default":"#fafafa"},"primary":{"light":"rgba(78, 186, 170, 1)","main":"rgba(0, 137, 123, 1)","dark":"rgba(0, 91, 79, 1)","contrastText":"#fff"},"secondary":{"light":"rgba(110, 198, 255, 1)","main":"rgba(33, 150, 243, 1)","dark":"rgba(0, 105, 192, 1)","contrastText":"#fff"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"text":{"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","hint":"rgba(0, 0, 0, 0.38)"}}}')},168:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(13),i=n.n(a),s=n(47),j=n(18),o=n(228),l=n(58),u=n(87),h=n(15),b=n(219),d=n(138),O=n(220),x=n(221),m=n(222),g=n(137),f=n(216),v=n(217),p=n(57),y=n(231),w=n(127),C=n.n(w),S=n(129),k=n.n(S),A=n(128),T=n.n(A),E=[],F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONCATHISTORY":return e.includes(t.data)?e:e.concat(t.data);case"CLEARHISTORY":return[];default:return e}},N=n(2),D=function(){var e=Object(h.c)((function(e){return e.history})),t=Object(h.b)();return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(y.a,{separator:Object(N.jsx)(T.a,{fontSize:"small"}),style:{color:"white",marginLeft:-15},children:[Object(N.jsx)(g.a,{}),e.map((function(e){return Object(N.jsx)(s.b,{to:e,style:{textDecoration:"none"},children:Object(N.jsx)(g.a,{style:{color:"white"},variant:"inherit",children:e})},e)}))]}),0!==e.length&&Object(N.jsx)(p.a,{variant:"body2",onClick:function(){var e;t({type:"CLEARHISTORY",data:e})},children:Object(N.jsx)(k.a,{style:{color:"white"}})})]})},q=function(){var e=Object(h.c)((function(e){return e.title}));return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("title",{children:e}),Object(N.jsx)("div",{position:"static",style:{height:72}}),Object(N.jsx)(f.a,{position:"fixed",children:Object(N.jsxs)(v.a,{style:{width:"100%",paddingLeft:8},children:["\u2003",Object(N.jsx)(g.a,{variant:"h6",children:e}),"\u2003",Object(N.jsx)(s.b,{to:"/",children:Object(N.jsx)(p.a,{children:Object(N.jsx)(C.a,{style:{color:"white"}})})}),Object(N.jsx)(D,{})]})})]})},H=function(e){var t=Object(h.b)();return Object(N.jsx)("div",{children:Object(N.jsx)(s.b,{to:e.to,style:{textDecoration:"none"},onClick:function(){var n;n=e.to,t({type:"CONCATHISTORY",data:n})},children:e.children})})},R=n(7),B=n(218),I=function(e){var t=Object(c.useState)(!1),n=Object(R.a)(t,2),r=n[0],a=n[1];return Object(N.jsx)(B.a,{style:{width:"100%",height:"100%"},onMouseOver:function(){a(!0)},onMouseOut:function(){a(!1)},raised:r,children:e.children})},L=function(e){return{type:"SETSUBJECT",data:e}},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SETSUBJECT":return t.data;default:return e}},P=function(){return Object(h.b)()(L("")),Object(N.jsxs)(b.a,{children:[Object(N.jsx)(q,{}),Object(N.jsx)(d.a,{in:!0,children:Object(N.jsxs)(O.a,{container:!0,spacing:2,children:[Object(N.jsx)(O.a,{item:!0,lg:6,xs:12,children:Object(N.jsx)(H,{to:"/exam",style:{textDecoration:"none"},children:Object(N.jsx)(I,{children:Object(N.jsx)(x.a,{style:{width:"100%",height:"100%"},children:Object(N.jsx)(m.a,{style:{textAlign:"center"},children:Object(N.jsx)(g.a,{variant:"h6",children:"\u6765\u8fd9\u91cc\u8003\u8bd5"})})})})})}),Object(N.jsx)(O.a,{item:!0,lg:6,xs:12,children:Object(N.jsx)(H,{to:"/admin",style:{textDecoration:"none"},children:Object(N.jsx)(I,{children:Object(N.jsx)(x.a,{style:{width:"100%",height:"100%"},children:Object(N.jsx)(m.a,{style:{textAlign:"center"},children:Object(N.jsx)(g.a,{variant:"h6",children:"\u6765\u8fd9\u91cc\u7ba1\u7406"})})})})})})]})})]})},M=function(){var e=Object(h.c)((function(e){return e.links}));return Object(N.jsx)(O.a,{container:!0,spacing:2,children:e.map((function(e,t){return Object(c.createElement)(d.a,{in:!0,style:{transformOrigin:"0 0 0"},timeout:300*t,key:e.url},Object(N.jsx)(O.a,{item:!0,lg:3,md:6,sm:12,xs:12,children:Object(N.jsx)(H,{to:"/exam".concat(e.url),style:{textDecoration:"none"},children:Object(N.jsx)(I,{children:Object(N.jsx)(x.a,{style:{width:"100%",height:"100%"},children:Object(N.jsx)(m.a,{children:Object(N.jsxs)("li",{style:{color:e.color,marginLeft:20},children:[Object(N.jsx)(g.a,{gutterBottom:!0,children:e.text}),Object(N.jsx)("span",{children:Object(N.jsx)(g.a,{variant:"body2",style:{color:"#232129"},children:e.description})})]})})})})})},e.url))}))})},J=function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(q,{}),Object(N.jsxs)(b.a,{style:{maxWidth:"100%"},children:[Object(N.jsx)(g.a,{gutterBottom:!0,variant:"h6",children:"\u53ef\u7528\u9898\u5e93"}),Object(N.jsx)(M,{})]})]})},z=n(223),Y=n(224),_=n(141),G=n(227),U=n(66),Z=[{stem:"\u7b80\u8ff0\u4ec0\u4e48\u662f\u975e\u5bf9\u79f0\u52a0\u5bc6\uff1f",img:"https://cn.bing.com/th?id=OHR.HumpbackMom_ZH-CN0218207583_1920x1080.jpg"},{stem:"\u7f16\u5199\u8fd9\u4e2a\u7f51\u9875\u7528\u5230\u4e86\u54ea\u4e9b\u8bed\u8a00\uff1f"}],K=function(e,t){return{type:"ANSWERSA",data:{objnum:e,answer:t}}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ANSWERSA":var n=t.data.objnum,c=e[n],r=Object(U.a)(Object(U.a)({},c),{},{answer:t.data.answer});return e.map((function(e,t){return t===n?r:e}));case"ADDSA":var a={stem:t.data.stem,img:t.data.img};return e.concat(a);default:return e}},Q=function(e){var t=Object(h.b)();return Object(N.jsxs)(I,{children:[e.quest.img?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(z.a,{image:e.quest.img,style:{height:250}}),Object(N.jsx)(Y.a,{})]}):null,Object(N.jsxs)(m.a,{children:[Object(N.jsxs)(x.a,{onClick:function(){t(K(e.arynum,""))},children:[Object(N.jsx)(g.a,{gutterBottom:!0,children:e.quest.stem}),Object(N.jsx)(g.a,{variant:"body2",style:{color:"rgba(0, 0, 0, 0.54)"},children:"\uff08\u70b9\u6b64\u6e05\u9664\u672c\u9898\u7b54\u6848\uff09"})]}),Object(N.jsx)(_.a,{variant:"outlined",autoComplete:"off",onChange:function(n){t(K(e.arynum,n.target.value))},multiline:!0,rows:"4",rowsMax:"10",style:{width:"100%",paddingTop:5},InputProps:{startAdornment:Object(N.jsx)(G.a,{position:"start",children:"\u7b54\uff1a"})}})]})]})},V=function(e){var t=Object(h.c)((function(e){return e.shortanswers}));return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(g.a,{variant:"h6",gutterBottom:!0,children:"\u7b80\u7b54\u9898"}),Object(N.jsx)(O.a,{container:!0,spacing:2,children:t.map((function(e,t){return Object(c.createElement)(d.a,{in:!0,style:{transformOrigin:"0 0 0"},timeout:1e3*t,key:e.stem},Object(N.jsx)(O.a,{item:!0,lg:12,xs:12,children:Object(N.jsx)(Q,{quest:e,arynum:t})}))}))})]})},X=n(72),ee=n(172),te=n(233),ne=n(175),ce=n(229),re=n(230),ae=[{stem:"TCP/IP\u534f\u8bae\u6a21\u578b\u5206\u51e0\u5c42\uff1f",choice:["3","4","5","6"],correct:"4"},{stem:"\u5954\u817e\u5904\u7406\u5668\u539f\u6765\u8ba1\u5212\u53eb\u4ec0\u4e48\uff1f",img:"https://cn.bing.com/th?id=OHR.HumpbackMom_ZH-CN0218207583_1920x1080.jpg",choice:["8086","80386","80486","80586"],correct:"80586"}],ie=function(e,t){return{type:"ANSWERSC",data:{objnum:e,answer:t}}},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ANSWERSC":var n=t.data.objnum,c=e[n],r=Object(U.a)(Object(U.a)({},c),{},{answer:t.data.answer});return e.map((function(e,t){return t===n?r:e}));case"ADDSC":var a={stem:t.data.stem,img:t.data.img,choice:t.data.choice,correct:t.data.correct};return e.concat(a);default:return e}},je=function(e){var t=Object(h.b)();return Object(N.jsxs)(I,{children:[e.quest.img?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(z.a,{image:e.quest.img,style:{height:250}}),Object(N.jsx)(Y.a,{})]}):null,Object(N.jsxs)(m.a,{children:[Object(N.jsxs)(x.a,{onClick:function(){t(ie(e.arynum,""))},children:[Object(N.jsx)(g.a,{gutterBottom:!0,children:e.quest.stem}),Object(N.jsx)(g.a,{variant:"body2",style:{color:"rgba(0, 0, 0, 0.54)"},children:"\u9009\u9879\uff08\u70b9\u6b64\u6e05\u9664\u672c\u9898\u5df2\u9009\u9879\uff09"})]}),Object(N.jsxs)(X.a,{children:[Object(N.jsx)(ee.a,{}),Object(N.jsx)(te.a,{onChange:function(n){t(ie(e.arynum,n.target.value))},value:e.quest.answer?e.quest.answer:"",children:e.quest.choice.map((function(e){return Object(N.jsx)(ne.a,{value:e,control:Object(N.jsx)(ce.a,{}),label:e},Object(re.a)())}))})]})]})]})},oe=function(e){var t=Object(h.c)((function(e){return e.singlechoices}));return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(g.a,{variant:"h6",gutterBottom:!0,children:"\u5355\u9009\u9898"}),Object(N.jsx)(O.a,{container:!0,spacing:2,children:t.map((function(e,t){return Object(c.createElement)(d.a,{in:!0,style:{transformOrigin:"0 0 0"},timeout:300*t,key:e.stem},Object(N.jsx)(O.a,{item:!0,lg:12,xs:12,children:Object(N.jsx)(je,{quest:e,arynum:t})}))}))})]})},le=function(){return Object(h.b)()(L(Object(j.f)().subject)),Object(N.jsxs)(b.a,{children:[Object(N.jsx)(q,{}),Object(N.jsx)(oe,{}),Object(N.jsx)(V,{})]})},ue=n(107),he=n(111),be=n(232),de=n(63),Oe=n(131),xe=n.n(Oe),me=n(103),ge=n.n(me),fe=n(22),ve=function(e,t){return[].concat(Object(fe.a)(e.slice(0,t)),Object(fe.a)(e.slice(t+1,e.length)))},pe=function(e){var t=[];return e.forEach((function(e,n){e||t.push(n)})),t},ye=function(){var e=Object(u.b)().enqueueSnackbar;return{inherit:function(t){e(t,{variant:"default"})},success:function(t){e(t,{variant:"success"})},err:function(t){e(t,{variant:"error"})},warn:function(t){e(t,{variant:"warning"})},info:function(t){e(t,{variant:"info"})}}},we=function(e){return Array.from(new Set(e))},Ce=function(){var e=Object(c.useState)(""),t=Object(R.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),i=Object(R.a)(a,2),s=i[0],j=i[1],o=Object(c.useState)([""]),u=Object(R.a)(o,2),b=u[0],d=u[1],x=Object(c.useState)(""),m=Object(R.a)(x,2),f=m[0],v=m[1],p=Object(c.useState)(!1),y=Object(R.a)(p,2),w=y[0],C=y[1],S=Object(c.useState)(""),k=Object(R.a)(S,2),A=k[0],T=k[1],E=Object(h.b)(),F=ye();return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(g.a,{variant:"h6",children:"\u65b0\u589e\u9898\u76ee\uff1a"}),Object(N.jsxs)(O.a,{container:!0,spacing:2,children:[Object(N.jsx)(O.a,{item:!0,lg:3,xs:12,children:Object(N.jsx)(_.a,{label:"\u9898\u5e72",multiline:!0,required:!0,error:s,variant:"outlined",onChange:function(e){r(e.target.value),e.target.value?j(!1):j(!0)},style:{width:"100%"},value:n})},"stem"),Object(N.jsx)(O.a,{item:!0,lg:3,xs:12,children:Object(N.jsx)(_.a,{label:"\u56fe\u7247\u5730\u5740\uff08\u9009\u586b\uff09",multiline:!0,variant:"outlined",onChange:function(e){T(e.target.value)},style:{width:"100%"},value:A})},"img"),Object(N.jsx)(O.a,{item:!0,lg:3,xs:12,children:Object(N.jsxs)(X.a,{required:!0,error:w,variant:"outlined",style:{width:"100%"},children:[Object(N.jsx)(ue.a,{htmlFor:"fkyou",children:"\u6b63\u786e\u9009\u9879"}),Object(N.jsxs)(he.a,{native:!0,labelId:"sltlabel",label:"\u6b63\u786e\u9009\u9879",onChange:function(e){v(e.target.value),e.target.value?C(!1):C(!0)},inputProps:{id:"fkyou"},value:f,children:[Object(N.jsx)("option",{value:""}),b.map((function(e){return Object(N.jsx)("option",{value:e,children:e},Object(re.a)())}))]})]})},"correct"),Object(N.jsx)(O.a,{item:!0,lg:3,xs:12,children:Object(N.jsx)(l.a,{onClick:function(){var e=!1;if(n||(j(!0),F.err("\u9898\u5e72\u4e0d\u5f97\u4e3a\u7a7a"),e=!0),f||(C(!0),F.err("\u6b63\u786e\u9009\u9879\u4e0d\u5f97\u4e3a\u7a7a"),e=!0),0!==pe(b).length&&(pe(b).forEach((function(e){F.err("\u7b2c".concat(e+1,"\u4e2a\u9009\u9879\u4e0d\u5f97\u4e3a\u7a7a"))})),e=!0),b.length===we(b).length||e||F.warn("\u9009\u9879\u5b58\u5728\u91cd\u590d\uff0c\u5df2\u81ea\u52a8\u53bb\u9664"),!e){var t=we(b);E(function(e,t,n,c){return{type:"ADDSC",data:{stem:e,img:t,choice:n,correct:c}}}(n,A,t,f))}},variant:"contained",color:"primary",style:{height:56,width:"50%"},children:"\u63d0\u4ea4\u65b0\u9898\u76ee"})},"btn")]}),Object(N.jsx)(Y.a,{style:{marginTop:5,marginBottom:5}}),Object(N.jsx)(Se,{choices:b,setChoices:d,correct:f,setCorrect:v})]})},Se=function(e){var t=e.choices,n=e.setChoices,c=e.correct,r=e.setCorrect;return Object(N.jsxs)(O.a,{container:!0,spacing:2,children:[t.map((function(e,a){var i=function(){c===e&&r(""),function(e){var c=ve(t,e);n(c)}(a)};return Object(N.jsx)(O.a,{item:!0,lg:3,xs:12,children:Object(N.jsxs)(X.a,{variant:"outlined",style:{width:"100%"},error:!e,required:!0,children:[Object(N.jsx)(ue.a,{children:"\u9009\u9879".concat(a+1)}),Object(N.jsx)(be.a,{multiline:!0,onChange:function(e){var i=e.target.value;!function(e,a){c===t[e]&&r(a);var i=t.map((function(t,n){return n===e?a:t}));n(i)}(a,i)},value:e,labelWidth:42,endAdornment:Object(N.jsx)(G.a,{position:"end",children:a!==t.length-1?Object(N.jsx)(p.a,{onClick:i,children:Object(N.jsx)(ge.a,{})}):Object(N.jsxs)(N.Fragment,{children:[0!==a&&Object(N.jsx)(p.a,{onClick:i,children:Object(N.jsx)(ge.a,{})}),Object(N.jsx)(p.a,{onClick:function(){n(t.concat(""))},children:Object(N.jsx)(xe.a,{})})]})})})]})},a)})),Object(N.jsx)(O.a,{item:!0,lg:3,xs:12},"add")]})},ke=function(){var e=Object(h.c)((function(e){return e.singlechoices})).map((function(e,t){return{id:t+1,stem:e.stem,choice:e.choice.join(" / "),correct:e.correct}}));return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(q,{}),Object(N.jsxs)(b.a,{children:[Object(N.jsx)(de.a,{autoHeight:!0,rows:e,columns:[{field:"id",headerName:"\u9898\u53f7",width:100},{field:"stem",headerName:"\u9898\u5e72",width:280},{field:"choice",headerName:"\u9009\u9879",width:280},{field:"correct",headerName:"\u6b63\u786e\u7b54\u6848",width:200}],pageSize:5}),Object(N.jsx)(Ce,{})]})]})},Ae=function(){var e=Object(c.useState)(""),t=Object(R.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),i=Object(R.a)(a,2),s=i[0],j=i[1],o=Object(h.b)();return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(g.a,{variant:"h6",children:"\u65b0\u589e\u9898\u76ee\uff1a"}),Object(N.jsxs)(O.a,{container:!0,spacing:2,children:[Object(N.jsx)(O.a,{item:!0,lg:3,xs:12,children:Object(N.jsx)(_.a,{label:"\u9898\u5e72",multiline:!0,variant:"outlined",onChange:function(e){r(e.target.value)},style:{width:"100%"},value:n})},"stem"),Object(N.jsx)(O.a,{item:!0,lg:3,xs:12,children:Object(N.jsx)(_.a,{label:"\u56fe\u7247\u5730\u5740\uff08\u9009\u586b\uff09",multiline:!0,variant:"outlined",onChange:function(e){j(e.target.value)},style:{width:"100%"},value:s})},"img"),Object(N.jsx)(O.a,{item:!0,lg:3,xs:12,children:Object(N.jsx)(l.a,{onClick:function(){o(function(e,t){return{type:"ADDSA",data:{stem:e,img:t}}}(n,s))},variant:"contained",color:"primary",style:{height:56,width:"50%"},children:"\u63d0\u4ea4\u65b0\u9898\u76ee"})},"btn")]}),Object(N.jsx)(Y.a,{style:{marginTop:5,marginBottom:5}})]})},Te=function(){var e=Object(h.c)((function(e){return e.shortanswers})).map((function(e,t){return{id:t+1,stem:e.stem}}));return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(q,{}),Object(N.jsxs)(b.a,{children:[Object(N.jsx)(de.a,{autoHeight:!0,rows:e,columns:[{field:"id",headerName:"\u9898\u53f7",width:100},{field:"stem",headerName:"\u9898\u5e72",width:280}],pageSize:5}),Object(N.jsx)(Ae,{})]})]})},Ee=[{field:"id",headerName:"\u8c46\u74e3ID",width:140},{field:"SCscore",headerName:"\u9009\u62e9\u9898\u5f97\u5206",width:140},{field:"SAscore",headerName:"\u7b80\u7b54\u9898\u5f97\u5206",width:140}],Fe=[{id:"\u7530\u6240\u6d69\u4e8c",SCscore:114,SAscore:514},{id:"\u591a\u7530\u91ce\u6811\u4eba",SCscore:889,SAscore:464}],Ne=function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(q,{}),Object(N.jsxs)(b.a,{style:{height:500},children:[Object(N.jsx)(g.a,{variant:"h6",children:"\u5df2\u7b54\u9898\u7528\u6237\uff1a"}),Object(N.jsx)(de.a,{rows:Fe,columns:Ee,pageSize:5})]})]})},De=function(e){return Object(N.jsx)(O.a,{item:!0,lg:3,xs:12,children:Object(N.jsx)(H,{to:e.to,style:{textDecoration:"none",verticalAlign:"middle"},children:Object(N.jsx)(I,{children:Object(N.jsx)(m.a,{children:Object(N.jsx)(g.a,{color:"textPrimary",align:"center",variant:"h6",children:e.text})})})})})},qe=function(){switch(Object(j.f)().route){case"score":return Object(N.jsx)(Ne,{});case"scquests":return Object(N.jsx)(ke,{});case"saquests":return Object(N.jsx)(Te,{})}return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(q,{}),Object(N.jsx)(b.a,{style:{height:500},children:Object(N.jsx)(O.a,{container:!0,spacing:2,children:[{to:"/admin/score",text:"\u67e5\u770b\u6bcf\u4eba\u5206\u6570"},{to:"/admin/scquests",text:"\u7ba1\u7406\u9009\u62e9\u9898"},{to:"/admin/saquests",text:"\u7ba1\u7406\u7b80\u7b54\u9898"}].map((function(e){return Object(N.jsx)(De,{to:e.to,text:e.text},e.to)}))})})]})},He=n(61),Re=n(132),Be=[{text:"\u6d4b\u8bd5\u670d",url:"/it",description:"\u5148\u6765\u8fd9\u513f\u73a9\u73a9\u5427\uff1f",color:"#E95800",img:""}],Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADDALINK":return e.concat(t.data);default:return e}},Le=n(133),We=n(60),Pe=Object(We.a)(Le),Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGETHEME":return t.data;default:return e}},Je="\u7eb3\u65af\u5361\u79fb\u6c11\u5c40",ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGETITLE":return t.data;default:return e}},Ye=Object(He.combineReducers)({singlechoices:se,shortanswers:$,title:ze,links:Ie,theme:Me,history:F,subject:W}),_e=Object(He.createStore)(Ye,Object(Re.composeWithDevTools)()),Ge=function(){var e=Object(h.c)((function(e){return e.theme})),t=r.a.createRef(),n=function(e){return function(){t.current.closeSnackbar(e)}};return Object(N.jsx)(o.a,{theme:e,children:Object(N.jsx)(u.a,{maxSnack:4,preventDuplicate:!0,ref:t,action:function(e){return Object(N.jsx)(l.a,{onClick:n(e),style:{color:"#FFF"},children:"\u5173\u95ed"})},children:Object(N.jsx)(s.a,{children:Object(N.jsxs)(j.c,{children:[Object(N.jsx)(j.a,{path:"/admin/:route",children:Object(N.jsx)(qe,{})}),Object(N.jsx)(j.a,{path:"/admin",children:Object(N.jsx)(qe,{})}),Object(N.jsx)(j.a,{path:"/exam/:subject",children:Object(N.jsx)(le,{})}),Object(N.jsx)(j.a,{path:"/exam",children:Object(N.jsx)(J,{})}),Object(N.jsx)(j.a,{path:"/",children:Object(N.jsx)(P,{})})]})})})})},Ue=function(){return Object(N.jsx)(h.a,{store:_e,children:Object(N.jsx)(Ge,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ze=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,234)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},Ke=document.getElementById("root");Ke.hasChildNodes()?i.a.hydrate(Object(N.jsx)(Ue,{}),Ke):i.a.render(Object(N.jsx)(Ue,{}),Ke),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),Ze()}},[[168,1,2]]]);
//# sourceMappingURL=main.449fda01.chunk.js.map