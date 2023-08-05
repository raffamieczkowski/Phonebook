"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[969],{5598:function(e,n,t){t.d(n,{t:function(){return p},CR:function(){return g},jj:function(){return I},wn:function(){return b},aN:function(){return k},U0:function(){return Z},B2:function(){return C}});t(8429),t(2360);var r=t(1686),i=t.n(r),o=t(9434),a=t(3634),s=t(2946),l=t(6314),c=t(3996),d=t(8551),u=t(184),p=function(){var e=(0,o.I0)(),n=(0,o.v9)(s.Af).map((function(e){return e.name}));return(0,u.jsxs)(l.Z,{component:"form",onSubmit:function(t){t.preventDefault();var r={name:t.target.elements.name.value,number:t.target.elements.number.value};if(n.includes(r.name))return t.target.reset(),i().Notify.warning("".concat(r.name," is already in contacts"),{width:"500px",position:"center-top",distance:"18px",svgSize:"120px",timeout:3e3,borderRadius:"3px",fontFamily:"Dosis",fontSize:"20px"});e((0,a.uK)(r)),i().Notify.success("".concat(r.name," added"),{width:"500px",position:"center-top",distance:"18px",svgSize:"120px",timeout:3e3,borderRadius:"3px",fontFamily:"Dosis",fontSize:"20px"}),t.target.reset()},direction:"row",alignItems:"center",spacing:2,children:[(0,u.jsx)(c.Z,{type:"text",name:"name",pattern:"^[A-Za-z.'\\- ]+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,label:"Contact name"}),(0,u.jsx)(c.Z,{type:"tel",name:"number",pattern:"^\\+?\\d{1,4}?\\s?\\(?\\d{1,4}?\\)?\\s?\\d{1,4}\\s?\\d{1,4}\\s?\\d{1,9}$",title:"number number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,label:"Contact number"}),(0,u.jsx)(d.Z,{type:"submit",variant:"contained",children:"Add contact"})]})},m=t(9439),f=t(2791),x=t(890),h={list:{listStyle:"none",padding:"0"},listItem:{marginBottom:"20px"},contactInfo:{display:"flex",alignItems:"center",marginBottom:"10px"},contactName:{fontWeight:"bold",fontSize:"20px",marginRight:"10px",color:"#ffcc33"},contactNumber:{fontSize:"16px",marginRight:"10px"},editForm:{display:"flex",alignItems:"center",marginBottom:"10px"},editInput:{marginRight:"10px"},editButton:{marginLeft:"10px"}},g=function(){var e=(0,o.v9)(s.hF),n=(0,f.useState)(null),t=(0,m.Z)(n,2),r=t[0],p=t[1],g=(0,f.useState)(""),j=(0,m.Z)(g,2),v=j[0],y=j[1],b=(0,f.useState)(""),w=(0,m.Z)(b,2),Z=w[0],C=w[1],k=(0,o.I0)();return(0,u.jsx)("ul",{style:h.list,children:e.map((function(e){return(0,u.jsx)("li",{style:h.listItem,children:r===e.id?(0,u.jsxs)("form",{style:h.editForm,children:[(0,u.jsx)(c.Z,{type:"text",value:v,onChange:function(e){return y(e.target.value)},style:h.editInput}),(0,u.jsx)(c.Z,{type:"text",value:Z,onChange:function(e){return C(e.target.value)},style:h.editInput}),(0,u.jsx)(l.Z,{direction:"row",spacing:2,children:(0,u.jsx)(d.Z,{variant:"contained",color:"primary",onClick:function(){return function(e){var n={id:e,name:v,number:Z};k((0,a.mP)(n)),i().Notify.info("".concat(v," edited"),{width:"500px",position:"center-top",distance:"18px",svgSize:"120px",timeout:3e3,borderRadius:"3px",fontFamily:"Dosis",fontSize:"20px"}),p(null),y(""),C("")}(e.id)},children:"Save"})})]}):(0,u.jsxs)("div",{style:h.contactInfo,children:[(0,u.jsx)(x.Z,{style:h.contactName,children:e.name}),(0,u.jsx)(x.Z,{style:h.contactNumber,children:e.number}),(0,u.jsxs)(l.Z,{direction:"row",spacing:2,children:[(0,u.jsx)(d.Z,{variant:"outlined",color:"primary",onClick:function(){return n=e.id,t=e.name,r=e.number,p(n),y(t),void C(r);var n,t,r},children:"Edit"}),(0,u.jsx)(d.Z,{variant:"outlined",color:"secondary",onClick:function(){return n=e.id,k((0,a.GK)(n)),void i().Notify.failure("Contact DELETED",{width:"500px",position:"center-top",distance:"18px",svgSize:"120px",timeout:3e3,borderRadius:"3px",fontFamily:"Dosis",fontSize:"20px"});var n},style:h.editButton,children:"Delete"})]})]})},e.id)}))})},j=t(3165),v=t(6098),y=t(5403),b=function(){var e=(0,o.I0)();return(0,u.jsxs)(l.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,u.jsx)(y.Z,{}),(0,u.jsx)(v.ZP,{onChange:function(n){return e((0,j.W)(n.target.value))},placeholder:"Find contact by name",inputProps:{"aria-label":"search"}})]})},w=(t(1204),t(9273)),Z=function(){var e=(0,o.I0)();return(0,u.jsx)("div",{style:{paddingTop:"30px",display:"flex",justifyContent:"center",backgroundColor:"#000033",color:"#ffcc33"},children:(0,u.jsx)("form",{onSubmit:function(n){n.preventDefault();var t=n.currentTarget;e((0,w.Ib)({email:t.elements.email.value,password:t.elements.password.value})),t.reset()},children:(0,u.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:(0,u.jsxs)(l.Z,{spacing:2,sx:{width:"300px"},children:[(0,u.jsx)(c.Z,{fullWidth:!0,label:"Email",type:"email",name:"email",placeholder:"example@example.com",style:{backgroundColor:"#fff",borderRadius:"0"}}),(0,u.jsx)(c.Z,{fullWidth:!0,label:"Password",type:"password",name:"password",placeholder:"password",style:{backgroundColor:"#fff",borderRadius:"0"}}),(0,u.jsx)("div",{style:{marginBottom:"10px"},children:(0,u.jsx)(d.Z,{type:"submit",variant:"contained",color:"primary",sx:{width:"100%",backgroundColor:"#ffcc33",color:"#000033",borderRadius:"0"},children:"Log in"})})]})})})})},C=(t(9783),t(633),function(){var e=(0,o.I0)();return(0,u.jsx)("div",{style:{paddingTop:"30px",display:"flex",justifyContent:"center",backgroundColor:"#000033",color:"#ffcc33"},children:(0,u.jsx)("form",{onSubmit:function(n){n.preventDefault();var t=n.currentTarget;e((0,w.z2)({name:t.elements.name.value,email:t.elements.email.value,password:t.elements.password.value})),t.reset()},children:(0,u.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:(0,u.jsxs)(l.Z,{spacing:2,sx:{width:"300px"},children:[(0,u.jsx)(c.Z,{fullWidth:!0,label:"Username",type:"text",name:"name",placeholder:"John Brown",style:{backgroundColor:"#fff",borderRadius:"0"}}),(0,u.jsx)(c.Z,{fullWidth:!0,label:"Email",type:"email",name:"email",placeholder:"example@example.com",style:{backgroundColor:"#fff",borderRadius:"0"}}),(0,u.jsx)(c.Z,{fullWidth:!0,label:"Password",type:"password",name:"password",placeholder:"password",style:{backgroundColor:"#fff",borderRadius:"0"}}),(0,u.jsx)("div",{style:{marginBottom:"10px"},children:(0,u.jsx)(d.Z,{type:"submit",variant:"contained",color:"primary",sx:{width:"100%",backgroundColor:"#ffcc33",color:"#000033",borderRadius:"0"},children:"Register"})})]})})})})}),k=(t(234),function(){return(0,u.jsx)("div",{children:(0,u.jsx)("span",{children:"Loading..."})})}),I=function(){return(0,u.jsxs)("div",{children:[(0,u.jsx)("p",{}),(0,u.jsx)("span",{children:"Loading error!"})]})};t(1347)},969:function(e,n,t){t.r(n);t(2791);var r=t(4270),i=t(9434),o=t(5598),a=t(2946),s=t(184);n.default=function(){var e=(0,i.v9)(a.xU),n=(0,i.v9)(a.zh);return(0,s.jsxs)("div",{children:[(0,s.jsx)(r.q,{children:(0,s.jsx)("title",{children:"Contacts"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{children:(0,s.jsx)("h1",{children:"Phonebook"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)(o.t,{}),(0,s.jsx)(o.wn,{})]}),(0,s.jsxs)("div",{children:[e?(0,s.jsx)(o.aN,{}):(0,s.jsx)(o.CR,{}),n&&(0,s.jsx)(o.jj,{})]})]})]})}},2946:function(e,n,t){t.d(n,{Af:function(){return i},hF:function(){return s},xU:function(){return o},zh:function(){return a}});var r=t(6916),i=function(e){return e.contacts.contacts},o=function(e){return e.contacts.isLoading},a=function(e){return e.contacts.error},s=(0,r.P1)([i,function(e){return e.filters}],(function(e,n){return""===n?e:e.filter((function(e){return e.name.toLowerCase().includes(n.filter)}))}))}}]);
//# sourceMappingURL=969.27a3462b.chunk.js.map