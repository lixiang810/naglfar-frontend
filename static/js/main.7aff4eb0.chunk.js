(this.webpackJsonpnaglfar=this.webpackJsonpnaglfar||[]).push([[0],{133:function(e){e.exports=JSON.parse('{"palette":{"common":{"black":"#000","white":"#fff"},"background":{"paper":"#fff","default":"#fafafa"},"primary":{"light":"rgba(78, 186, 170, 1)","main":"rgba(0, 137, 123, 1)","dark":"rgba(0, 91, 79, 1)","contrastText":"#fff"},"secondary":{"light":"rgba(110, 198, 255, 1)","main":"rgba(33, 150, 243, 1)","dark":"rgba(0, 105, 192, 1)","contrastText":"#fff"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"text":{"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","hint":"rgba(0, 0, 0, 0.38)"}}}')},168:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(13),i=n.n(a),s=n(47),o=n(18),j=n(228),l=n(58),u=n(87),h=n(15),b=n(219),d=n(138),O=n(220),x=n(221),m=n(222),g=n(137),f=n(216),v=n(217),p=n(57),y=n(231),w=n(127),S=n.n(w),C=n(129),k=n.n(C),A=n(128),E=n.n(A),F=[],N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONCATHISTORY":return e.includes(t.data)?e:e.concat(t.data);case"CLEARHISTORY":return[];default:return e}},T=n(2),D=function(){var e=Object(h.c)((function(e){return e.history})),t=Object(h.b)();return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)(y.a,{separator:Object(T.jsx)(E.a,{fontSize:"small"}),style:{color:"white",marginLeft:-15},children:[Object(T.jsx)(g.a,{}),e.map((function(e){return Object(T.jsx)(s.b,{to:e,style:{textDecoration:"none"},children:Object(T.jsx)(g.a,{style:{color:"white"},variant:"inherit",children:e})},e)}))]}),0!==e.length&&Object(T.jsx)(p.a,{variant:"body2",onClick:function(){var e;t({type:"CLEARHISTORY",data:e})},children:Object(T.jsx)(k.a,{style:{color:"white"}})})]})},q=function(){var e=Object(h.c)((function(e){return e.title}));return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("title",{children:e}),Object(T.jsx)("div",{position:"static",style:{height:72}}),Object(T.jsx)(f.a,{position:"fixed",children:Object(T.jsxs)(v.a,{style:{width:"100%",paddingLeft:8},children:["\u2003",Object(T.jsx)(g.a,{variant:"h6",children:e}),"\u2003",Object(T.jsx)(s.b,{to:"/",children:Object(T.jsx)(p.a,{children:Object(T.jsx)(S.a,{style:{color:"white"}})})}),Object(T.jsx)(D,{})]})})]})},H=function(e){var t=Object(h.b)();return Object(T.jsx)("div",{children:Object(T.jsx)(s.b,{to:e.to,style:{textDecoration:"none"},onClick:function(){var n;n=e.to,t({type:"CONCATHISTORY",data:n})},children:e.children})})},R=n(7),B=n(218),I=function(e){var t=Object(c.useState)(!1),n=Object(R.a)(t,2),r=n[0],a=n[1];return Object(T.jsx)(B.a,{style:{width:"100%",height:"100%"},onMouseOver:function(){a(!0)},onMouseOut:function(){a(!1)},raised:r,children:e.children})},L=function(e){return{type:"SETSUBJECT",data:e}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SETSUBJECT":return t.data;default:return e}},W=function(){return Object(h.b)()(L("")),Object(T.jsxs)(b.a,{children:[Object(T.jsx)(q,{}),Object(T.jsx)(d.a,{in:!0,children:Object(T.jsxs)(O.a,{container:!0,spacing:2,children:[Object(T.jsx)(O.a,{item:!0,lg:6,xs:12,children:Object(T.jsx)(H,{to:"/exam",style:{textDecoration:"none"},children:Object(T.jsx)(I,{children:Object(T.jsx)(x.a,{style:{width:"100%",height:"100%"},children:Object(T.jsx)(m.a,{style:{textAlign:"center"},children:Object(T.jsx)(g.a,{variant:"h6",children:"\u6765\u8fd9\u91cc\u8003\u8bd5"})})})})})}),Object(T.jsx)(O.a,{item:!0,lg:6,xs:12,children:Object(T.jsx)(H,{to:"/admin",style:{textDecoration:"none"},children:Object(T.jsx)(I,{children:Object(T.jsx)(x.a,{style:{width:"100%",height:"100%"},children:Object(T.jsx)(m.a,{style:{textAlign:"center"},children:Object(T.jsx)(g.a,{variant:"h6",children:"\u6765\u8fd9\u91cc\u7ba1\u7406"})})})})})})]})})]})},P=function(){var e=Object(h.c)((function(e){return e.links}));return Object(T.jsx)(O.a,{container:!0,spacing:2,children:e.map((function(e,t){return Object(c.createElement)(d.a,{in:!0,style:{transformOrigin:"0 0 0"},timeout:300*t,key:e.url},Object(T.jsx)(O.a,{item:!0,lg:3,md:6,sm:12,xs:12,children:Object(T.jsx)(H,{to:"/exam".concat(e.url),style:{textDecoration:"none"},children:Object(T.jsx)(I,{children:Object(T.jsx)(x.a,{style:{width:"100%",height:"100%"},children:Object(T.jsx)(m.a,{children:Object(T.jsxs)("li",{style:{color:e.color,marginLeft:20},children:[Object(T.jsx)(g.a,{gutterBottom:!0,children:e.text}),Object(T.jsx)("span",{children:Object(T.jsx)(g.a,{variant:"body2",style:{color:"#232129"},children:e.description})})]})})})})})},e.url))}))})},J=function(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(q,{}),Object(T.jsxs)(b.a,{style:{maxWidth:"100%"},children:[Object(T.jsx)(g.a,{gutterBottom:!0,variant:"h6",children:"\u53ef\u7528\u9898\u5e93"}),Object(T.jsx)(P,{})]})]})},z=n(223),Y=n(224),_=n(141),G=n(227),U=n(66),Z=[{stem:"\u7b80\u8ff0\u4ec0\u4e48\u662f\u975e\u5bf9\u79f0\u52a0\u5bc6\uff1f",img:"https://cn.bing.com/th?id=OHR.HumpbackMom_ZH-CN0218207583_1920x1080.jpg"},{stem:"\u7f16\u5199\u8fd9\u4e2a\u7f51\u9875\u7528\u5230\u4e86\u54ea\u4e9b\u8bed\u8a00\uff1f"}],K=function(e,t){return{type:"ANSWERSA",data:{objnum:e,answer:t}}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ANSWERSA":var n=t.data.objnum,c=e[n],r=Object(U.a)(Object(U.a)({},c),{},{answer:t.data.answer});return e.map((function(e,t){return t===n?r:e}));case"ADDSA":var a={stem:t.data.stem,img:t.data.img};return e.concat(a);default:return e}},Q=function(e){var t=Object(h.b)();return Object(T.jsxs)(I,{children:[e.quest.img?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(z.a,{image:e.quest.img,style:{height:250}}),Object(T.jsx)(Y.a,{})]}):null,Object(T.jsxs)(m.a,{children:[Object(T.jsxs)(x.a,{onClick:function(){t(K(e.arynum,""))},children:[Object(T.jsx)(g.a,{gutterBottom:!0,children:e.quest.stem}),Object(T.jsx)(g.a,{variant:"body2",style:{color:"rgba(0, 0, 0, 0.54)"},children:"\uff08\u70b9\u6b64\u6e05\u9664\u672c\u9898\u7b54\u6848\uff09"})]}),Object(T.jsx)(_.a,{variant:"outlined",autoComplete:"off",onChange:function(n){t(K(e.arynum,n.target.value))},multiline:!0,rows:"4",rowsMax:"10",style:{width:"100%",paddingTop:5},InputProps:{startAdornment:Object(T.jsx)(G.a,{position:"start",children:"\u7b54\uff1a"})}})]})]})},V=function(e){var t=Object(h.c)((function(e){return e.shortanswers}));return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(g.a,{variant:"h6",gutterBottom:!0,children:"\u7b80\u7b54\u9898"}),Object(T.jsx)(O.a,{container:!0,spacing:2,children:t.map((function(e,t){return Object(c.createElement)(d.a,{in:!0,style:{transformOrigin:"0 0 0"},timeout:1e3*t,key:e.stem},Object(T.jsx)(O.a,{item:!0,lg:12,xs:12,children:Object(T.jsx)(Q,{quest:e,arynum:t})}))}))})]})},X=n(72),ee=n(172),te=n(233),ne=n(175),ce=n(229),re=n(230),ae=n(22),ie=function(e,t){return[].concat(Object(ae.a)(e.slice(0,t)),Object(ae.a)(e.slice(t+1,e.length)))},se=function(e,t){for(var n=e,c=0;c<t.length;c++){var r=t[c];n=ie(n,r-c)}return n},oe=ie,je=[{stem:"\u201c\u65e0\u77e5\u4e4b\u5e55\u201d\u7684\u6982\u5ff5\u51fa\u81ea\uff1f",img:"",choice:["\u300a\u8d44\u672c\u8bba\u300b\u2014\u2014\u9a6c\u514b\u601d","\u300a\u6b63\u4e49\u8bba\u300b\u2014\u2014\u7f57\u5c14\u65af","\u300a\u903b\u8f91\u54f2\u5b66\u8bba\u300b\u2014\u2014\u7ef4\u7279\u6839\u65af\u5766","\u300a\u541b\u4e3b\u8bba\u300b\u2014\u2014\u9a6c\u57fa\u96c5\u7ef4\u5229"],correct:"\u300a\u6b63\u4e49\u8bba\u300b\u2014\u2014\u7f57\u5c14\u65af"},{stem:"\u4e16\u754c\u4e0a\u5e94\u7528\u6700\u5e7f\u6cdb\u7684\u97f3\u5f8b\u5236\u662f\uff1f",img:"",choice:["\u5341\u4e8c\u5e73\u5747\u5f8b","\u5341\u516d\u5e73\u5747\u5f8b"],correct:"\u5341\u4e8c\u5e73\u5747\u5f8b"},{stem:"\u201c\u751f\u4ea7\u7684\u53d1\u5c55\u548c\u79c1\u6709\u5236\u7684\u4ea7\u751f\uff0c\u4f7f\u4eba\u7c7b\u8131\u79bb\u4e86\u2018\u81ea\u7136\u72b6\u6001\u2019\uff0c\u4ea7\u751f\u4e86\u8d2b\u5bcc\u4e0d\u5747\u7684\u793e\u4f1a\u73b0\u8c61\u201d\uff0c\u8fd9\u79cd\u8bf4\u6cd5\u6700\u65e9\u51fa\u81ea\uff1f",img:"",choice:["\u300a\u5fb7\u610f\u5fd7\u610f\u8bc6\u5f62\u6001\u300b\u2014\u2014\u9a6c\u514b\u601d","\u300a\u5171\u4ea7\u515a\u5ba3\u8a00\u300b\u2014\u2014\u9a6c\u514b\u601d\u3001\u6069\u683c\u65af","\u300a\u8bba\u4eba\u7c7b\u4e0d\u5e73\u7b49\u7684\u8d77\u6e90\u548c\u57fa\u7840\u300b\u2014\u2014\u5362\u68ad","\u300a\u7eaf\u7cb9\u7406\u6027\u6279\u5224\u300b\u2014\u2014\u5eb7\u5fb7"],correct:"\u300a\u8bba\u4eba\u7c7b\u4e0d\u5e73\u7b49\u7684\u8d77\u6e90\u548c\u57fa\u7840\u300b\u2014\u2014\u5362\u68ad"},{stem:"\u300a\u5171\u4ea7\u515a\u5ba3\u8a00\u300b\u8ba4\u4e3a\uff0c\u5de5\u4eba\u9769\u547d\u7684\u7b2c\u4e00\u6b65\u5c31\u662f\u4f7f\u65e0\u4ea7\u9636\u7ea7\u4e0a\u5347\u4e3a\u7edf\u6cbb\u9636\u7ea7\uff0c\u4e89\u5f97\uff08\uff09",img:"",choice:["\u81ea\u7531","\u5e73\u7b49","\u8d22\u5bcc","\u6c11\u4e3b"],correct:"\u6c11\u4e3b"},{stem:"TCP/IP\u534f\u8bae\u6a21\u578b\u5206\u51e0\u5c42\uff1f",choice:["3","4","5","6"],correct:"4"},{stem:"\u5954\u817e\u5904\u7406\u5668\u539f\u6765\u8ba1\u5212\u53eb\u4ec0\u4e48\uff1f",img:"https://cn.bing.com/th?id=OHR.HumpbackMom_ZH-CN0218207583_1920x1080.jpg",choice:["8086","80386","80486","80586"],correct:"80586"}],le=function(e,t){return{type:"ANSWERSC",data:{objnum:e,answer:t}}},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ANSWERSC":var n=t.data.objnum,c=e[n],r=Object(U.a)(Object(U.a)({},c),{},{answer:t.data.answer});return e.map((function(e,t){return t===n?r:e}));case"ADDSC":var a={stem:t.data.stem,img:t.data.img,choice:t.data.choice,correct:t.data.correct};return e.concat(a);case"DELSC":var i=se(e,t.data.indexAry);return i;default:return e}},he=function(e){var t=Object(h.b)();return Object(T.jsxs)(I,{children:[e.quest.img?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(z.a,{image:e.quest.img,style:{height:250}}),Object(T.jsx)(Y.a,{})]}):null,Object(T.jsxs)(m.a,{children:[Object(T.jsxs)(x.a,{onClick:function(){t(le(e.arynum,""))},children:[Object(T.jsx)(g.a,{gutterBottom:!0,children:e.quest.stem}),Object(T.jsx)(g.a,{variant:"body2",style:{color:"rgba(0, 0, 0, 0.54)"},children:"\uff08\u70b9\u6b64\u6e05\u9664\u672c\u9898\u5df2\u9009\u9879\uff09"})]}),Object(T.jsxs)(X.a,{children:[Object(T.jsx)(ee.a,{}),Object(T.jsx)(te.a,{onChange:function(n){t(le(e.arynum,n.target.value))},value:e.quest.answer?e.quest.answer:"",children:e.quest.choice.map((function(e){return Object(T.jsx)(ne.a,{value:e,control:Object(T.jsx)(ce.a,{}),label:e},Object(re.a)())}))})]})]})]})},be=function(e){var t=Object(h.c)((function(e){return e.singlechoices}));return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(g.a,{variant:"h6",gutterBottom:!0,children:"\u5355\u9009\u9898"}),Object(T.jsx)(O.a,{container:!0,spacing:2,children:t.map((function(e,t){return Object(c.createElement)(d.a,{in:!0,style:{transformOrigin:"0 0 0"},timeout:300*t,key:e.stem},Object(T.jsx)(O.a,{item:!0,lg:12,xs:12,children:Object(T.jsx)(he,{quest:e,arynum:t})}))}))})]})},de=function(){return Object(h.b)()(L(Object(o.f)().subject)),Object(T.jsxs)(b.a,{children:[Object(T.jsx)(q,{}),Object(T.jsx)(be,{}),Object(T.jsx)(V,{})]})},Oe=n(107),xe=n(111),me=n(232),ge=n(63),fe=n(131),ve=n.n(fe),pe=n(103),ye=n.n(pe),we=function(e){var t=[];return e.forEach((function(e,n){e||t.push(n)})),t},Se=function(){var e=Object(u.b)().enqueueSnackbar;return{inherit:function(t){e(t,{variant:"default"})},success:function(t){e(t,{variant:"success"})},err:function(t){e(t,{variant:"error"})},warn:function(t){e(t,{variant:"warning"})},info:function(t){e(t,{variant:"info"})}}},Ce=function(e){return Array.from(new Set(e))},ke=function(){var e=Object(c.useState)(""),t=Object(R.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),i=Object(R.a)(a,2),s=i[0],o=i[1],j=Object(c.useState)([""]),u=Object(R.a)(j,2),b=u[0],d=u[1],x=Object(c.useState)(""),m=Object(R.a)(x,2),f=m[0],v=m[1],p=Object(c.useState)(!1),y=Object(R.a)(p,2),w=y[0],S=y[1],C=Object(c.useState)(""),k=Object(R.a)(C,2),A=k[0],E=k[1],F=Object(h.b)(),N=Se();return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(g.a,{variant:"h6",children:"\u65b0\u589e\u9898\u76ee\uff1a"}),Object(T.jsxs)(O.a,{container:!0,spacing:2,children:[Object(T.jsx)(O.a,{item:!0,lg:3,xs:12,children:Object(T.jsx)(_.a,{label:"\u9898\u5e72",multiline:!0,required:!0,error:s,variant:"outlined",onChange:function(e){r(e.target.value),e.target.value?o(!1):o(!0)},style:{width:"100%"},value:n})},"stem"),Object(T.jsx)(O.a,{item:!0,lg:3,xs:12,children:Object(T.jsx)(_.a,{label:"\u56fe\u7247\u5730\u5740\uff08\u9009\u586b\uff09",multiline:!0,variant:"outlined",onChange:function(e){E(e.target.value)},style:{width:"100%"},value:A})},"img"),Object(T.jsx)(O.a,{item:!0,lg:3,xs:12,children:Object(T.jsxs)(X.a,{required:!0,error:w,variant:"outlined",style:{width:"100%"},children:[Object(T.jsx)(Oe.a,{htmlFor:"fkyou",children:"\u6b63\u786e\u9009\u9879"}),Object(T.jsxs)(xe.a,{native:!0,labelId:"sltlabel",label:"\u6b63\u786e\u9009\u9879",onChange:function(e){v(e.target.value),e.target.value?S(!1):S(!0)},inputProps:{id:"fkyou"},value:f,children:[Object(T.jsx)("option",{value:""}),b.map((function(e){return Object(T.jsx)("option",{value:e,children:e},Object(re.a)())}))]})]})},"correct"),Object(T.jsx)(O.a,{item:!0,lg:3,xs:12,children:Object(T.jsx)(l.a,{onClick:function(){var e=!1;if(n||(o(!0),N.err("\u9898\u5e72\u4e0d\u5f97\u4e3a\u7a7a"),e=!0),f||(S(!0),N.err("\u6b63\u786e\u9009\u9879\u4e0d\u5f97\u4e3a\u7a7a"),e=!0),0!==we(b).length&&(we(b).forEach((function(e){N.err("\u7b2c".concat(e+1,"\u4e2a\u9009\u9879\u4e0d\u5f97\u4e3a\u7a7a"))})),e=!0),b.length===Ce(b).length||e||N.warn("\u9009\u9879\u5b58\u5728\u91cd\u590d\uff0c\u5df2\u81ea\u52a8\u53bb\u9664"),!e){var t=Ce(b);F(function(e,t,n,c){return{type:"ADDSC",data:{stem:e,img:t,choice:n,correct:c}}}(n,A,t,f))}},variant:"contained",color:"primary",style:{height:56,width:"50%"},children:"\u63d0\u4ea4\u65b0\u9898\u76ee"})},"btn")]}),Object(T.jsx)(Y.a,{style:{marginTop:5,marginBottom:5}}),Object(T.jsx)(Ae,{choices:b,setChoices:d,correct:f,setCorrect:v})]})},Ae=function(e){var t=e.choices,n=e.setChoices,c=e.correct,r=e.setCorrect;return Object(T.jsxs)(O.a,{container:!0,spacing:2,children:[t.map((function(e,a){var i=function(){c===e&&r(""),function(e){var c=oe(t,e);n(c)}(a)};return Object(T.jsx)(O.a,{item:!0,lg:3,xs:12,children:Object(T.jsxs)(X.a,{variant:"outlined",style:{width:"100%"},error:!e,required:!0,children:[Object(T.jsx)(Oe.a,{children:"\u9009\u9879".concat(a+1)}),Object(T.jsx)(me.a,{multiline:!0,onChange:function(e){var i=e.target.value;!function(e,a){c===t[e]&&r(a);var i=t.map((function(t,n){return n===e?a:t}));n(i)}(a,i)},value:e,labelWidth:42,endAdornment:Object(T.jsx)(G.a,{position:"end",children:a!==t.length-1?Object(T.jsx)(p.a,{onClick:i,children:Object(T.jsx)(ye.a,{})}):Object(T.jsxs)(T.Fragment,{children:[0!==a&&Object(T.jsx)(p.a,{onClick:i,children:Object(T.jsx)(ye.a,{})}),Object(T.jsx)(p.a,{onClick:function(){n(t.concat(""))},children:Object(T.jsx)(ve.a,{})})]})})})]})},a)})),Object(T.jsx)(O.a,{item:!0,lg:3,xs:12},"add")]})},Ee=function(){var e=Object(c.useState)([]),t=Object(R.a)(e,2),n=t[0],r=t[1],a=Object(h.c)((function(e){return e.singlechoices})),i=Object(h.b)(),s=a.map((function(e,t){return{id:t+1,stem:e.stem,choice:e.choice.join(" / "),correct:e.correct}}));return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(q,{}),Object(T.jsxs)(b.a,{children:[Object(T.jsx)(ge.a,{autoHeight:!0,rows:s,columns:[{field:"id",headerName:"\u9898\u53f7",width:100},{field:"stem",headerName:"\u9898\u5e72",width:280},{field:"choice",headerName:"\u9009\u9879",width:280},{field:"correct",headerName:"\u6b63\u786e\u7b54\u6848",width:200}],pageSize:5,checkboxSelection:!0,onSelectionModelChange:function(e){r(e.selectionModel.map((function(e){return Number(e)-1})))},selectionModel:n.map((function(e){return(e+1).toString()}))}),0!==n.length&&Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(l.a,{variant:"contained",color:"primary",onClick:function(){i({type:"DELSC",data:{indexAry:n}}),r([])},children:"\u5220\u9664\u6240\u9009\u9879"})}),Object(T.jsx)(ke,{})]})]})},Fe=function(){var e=Object(c.useState)(""),t=Object(R.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),i=Object(R.a)(a,2),s=i[0],o=i[1],j=Object(h.b)();return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(g.a,{variant:"h6",children:"\u65b0\u589e\u9898\u76ee\uff1a"}),Object(T.jsxs)(O.a,{container:!0,spacing:2,children:[Object(T.jsx)(O.a,{item:!0,lg:3,xs:12,children:Object(T.jsx)(_.a,{label:"\u9898\u5e72",multiline:!0,variant:"outlined",onChange:function(e){r(e.target.value)},style:{width:"100%"},value:n})},"stem"),Object(T.jsx)(O.a,{item:!0,lg:3,xs:12,children:Object(T.jsx)(_.a,{label:"\u56fe\u7247\u5730\u5740\uff08\u9009\u586b\uff09",multiline:!0,variant:"outlined",onChange:function(e){o(e.target.value)},style:{width:"100%"},value:s})},"img"),Object(T.jsx)(O.a,{item:!0,lg:3,xs:12,children:Object(T.jsx)(l.a,{onClick:function(){j(function(e,t){return{type:"ADDSA",data:{stem:e,img:t}}}(n,s))},variant:"contained",color:"primary",style:{height:56,width:"50%"},children:"\u63d0\u4ea4\u65b0\u9898\u76ee"})},"btn")]}),Object(T.jsx)(Y.a,{style:{marginTop:5,marginBottom:5}})]})},Ne=function(){var e=Object(h.c)((function(e){return e.shortanswers})).map((function(e,t){return{id:t+1,stem:e.stem}}));return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(q,{}),Object(T.jsxs)(b.a,{children:[Object(T.jsx)(ge.a,{autoHeight:!0,rows:e,columns:[{field:"id",headerName:"\u9898\u53f7",width:100},{field:"stem",headerName:"\u9898\u5e72",width:280}],pageSize:5}),Object(T.jsx)(Fe,{})]})]})},Te=[{field:"id",headerName:"\u8c46\u74e3ID",width:140},{field:"SCscore",headerName:"\u9009\u62e9\u9898\u5f97\u5206",width:140},{field:"SAscore",headerName:"\u7b80\u7b54\u9898\u5f97\u5206",width:140}],De=[{id:"\u7530\u6240\u6d69\u4e8c",SCscore:114,SAscore:514},{id:"\u591a\u7530\u91ce\u6811\u4eba",SCscore:889,SAscore:464}],qe=function(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(q,{}),Object(T.jsxs)(b.a,{style:{height:500},children:[Object(T.jsx)(g.a,{variant:"h6",children:"\u5df2\u7b54\u9898\u7528\u6237\uff1a"}),Object(T.jsx)(ge.a,{rows:De,columns:Te,pageSize:5})]})]})},He=function(e){return Object(T.jsx)(O.a,{item:!0,lg:3,xs:12,children:Object(T.jsx)(H,{to:e.to,style:{textDecoration:"none",verticalAlign:"middle"},children:Object(T.jsx)(I,{children:Object(T.jsx)(m.a,{children:Object(T.jsx)(g.a,{color:"textPrimary",align:"center",variant:"h6",children:e.text})})})})})},Re=function(){switch(Object(o.f)().route){case"score":return Object(T.jsx)(qe,{});case"scquests":return Object(T.jsx)(Ee,{});case"saquests":return Object(T.jsx)(Ne,{})}return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(q,{}),Object(T.jsx)(b.a,{style:{height:500},children:Object(T.jsx)(O.a,{container:!0,spacing:2,children:[{to:"/admin/score",text:"\u67e5\u770b\u6bcf\u4eba\u5206\u6570"},{to:"/admin/scquests",text:"\u7ba1\u7406\u9009\u62e9\u9898"},{to:"/admin/saquests",text:"\u7ba1\u7406\u7b80\u7b54\u9898"}].map((function(e){return Object(T.jsx)(He,{to:e.to,text:e.text},e.to)}))})})]})},Be=n(61),Ie=n(132),Le=[{text:"\u6d4b\u8bd5\u670d",url:"/it",description:"\u5148\u6765\u8fd9\u513f\u73a9\u73a9\u5427\uff1f",color:"#E95800",img:""}],Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADDALINK":return e.concat(t.data);default:return e}},We=n(133),Pe=n(60),Je=Object(Pe.a)(We),ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGETHEME":return t.data;default:return e}},Ye="\u7eb3\u65af\u5361\u79fb\u6c11\u5c40",_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGETITLE":return t.data;default:return e}},Ge=Object(Be.combineReducers)({singlechoices:ue,shortanswers:$,title:_e,links:Me,theme:ze,history:N,subject:M}),Ue=Object(Be.createStore)(Ge,Object(Ie.composeWithDevTools)()),Ze=function(){var e=Object(h.c)((function(e){return e.theme})),t=r.a.createRef(),n=function(e){return function(){t.current.closeSnackbar(e)}};return Object(T.jsx)(j.a,{theme:e,children:Object(T.jsx)(u.a,{maxSnack:4,preventDuplicate:!0,ref:t,action:function(e){return Object(T.jsx)(l.a,{onClick:n(e),style:{color:"#FFF"},children:"\u5173\u95ed"})},children:Object(T.jsx)(s.a,{children:Object(T.jsxs)(o.c,{children:[Object(T.jsx)(o.a,{path:"/admin/:route",children:Object(T.jsx)(Re,{})}),Object(T.jsx)(o.a,{path:"/admin",children:Object(T.jsx)(Re,{})}),Object(T.jsx)(o.a,{path:"/exam/:subject",children:Object(T.jsx)(de,{})}),Object(T.jsx)(o.a,{path:"/exam",children:Object(T.jsx)(J,{})}),Object(T.jsx)(o.a,{path:"/",children:Object(T.jsx)(W,{})})]})})})})},Ke=function(){return Object(T.jsx)(h.a,{store:Ue,children:Object(T.jsx)(Ze,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $e=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,234)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},Qe=document.getElementById("root");Qe.hasChildNodes()?i.a.hydrate(Object(T.jsx)(Ke,{}),Qe):i.a.render(Object(T.jsx)(Ke,{}),Qe),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),$e()}},[[168,1,2]]]);
//# sourceMappingURL=main.7aff4eb0.chunk.js.map