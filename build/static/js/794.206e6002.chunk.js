"use strict";(self.webpackChunkdocuments_react=self.webpackChunkdocuments_react||[]).push([[794],{1794:function(e,t,n){n.r(t);var o=n(2791),r=n(6584),l=n(2443),i=n.n(l),s=n(4294),a=n(7621),d=n(890),c=n(1582),p=n(5770),m=n(697),u=n(7886),x=n(9434),h=n(9706),f=n(184);t.default=()=>{const e=(0,x.I0)(),[t,n]=(0,o.useState)({updated:new Date,templates:[{title:"header",editor:(0,f.jsx)(r.CKEditor,{editor:i(),data:"<p>Hello from CKEditor\xa05!</p>"})},{title:"footer",editor:(0,f.jsx)(r.CKEditor,{editor:i(),data:"<p>Hello from CKEditor\xa05!</p>"})}]}),l=(0,x.v9)((e=>e.peoples));(0,o.useEffect)((()=>{e({type:h.Uy})}),[]),(0,o.useEffect)((()=>{console.log(t)}),[t]);const c=(0,o.useCallback)((()=>{e({type:h.a6,opened:!0,data:{title:"select field",content:j(l.data,(()=>{}))}})}),[l]),p=(0,o.useCallback)((()=>{let e=t.templates;e.splice(t.templates.length-1,0,{title:"body",editor:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r.CKEditor,{editor:i(),data:"<p>Hello from CKEditor\xa05!</p>"}),(0,f.jsx)(s.Z,{variant:"contained",onClick:c,sx:{margin:"1rem"},children:"ADD USERS"},t.templates.length-1)]})}),n({templates:e,updated:new Date})}),[t]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s.Z,{variant:"contained",onClick:p,children:"ADD TEMPLATE"}),t.templates.map(((e,t)=>(0,f.jsxs)(a.Z,{sx:{margin:"2rem",padding:"2rem"},children:[(0,f.jsx)(d.Z,{children:e.title}),e.editor]})))]})};const j=(e,t)=>{console.log(e);return(0,f.jsxs)(c.Z,{sx:{width:"100%"},children:[(0,f.jsx)(c.Z,{direction:"row",children:(0,f.jsx)(p.Z,{renderOption:(e,t)=>(0,f.jsx)(m.Z,{component:"li",sx:{"& > img":{mr:2,flexShrink:0}},children:t.fullName}),renderInput:e=>(0,f.jsx)(u.Z,{label:"name",inputProps:{...e.inputProps,autoComplete:"new-password"}}),options:e,onChange:e=>{console.log(e)}})}),(0,f.jsx)(s.Z,{variant:"contained",onClick:()=>{},children:"Submit"})]})}}}]);
//# sourceMappingURL=794.206e6002.chunk.js.map