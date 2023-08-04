"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[969],{2484:function(e,n,t){t.d(n,{t:function(){return l},CR:function(){return m},jj:function(){return w},wn:function(){return h},aN:function(){return _},U0:function(){return v},B2:function(){return b}});t(3999),t(2360);var r=t(1686),i=t.n(r),a=t(9434),s=t(3634),o=t(2946),u={container:"ContactForm_container__qpJ1N",formGroup:"ContactForm_formGroup__wsR1+",button:"ContactForm_button__eSwX9"},c=t(184),l=function(){var e=(0,a.I0)(),n=(0,a.v9)(o.Af).map((function(e){return e.name}));return(0,c.jsx)("div",{className:u.wrapper,children:(0,c.jsxs)("form",{onSubmit:function(t){t.preventDefault();var r={name:t.target.elements.name.value,number:t.target.elements.number.value};if(n.includes(r.name))return t.target.reset(),i().Notify.warning("".concat(r.name," is alredy in contacts"),{width:"500px",position:"center-top",distance:"18px",svgSize:"120px",timeout:3e3,borderRadius:"3px",fontFamily:"Dosis",fontSize:"20px"});e((0,s.uK)(r)),i().Notify.success("".concat(r.name," added"),{width:"500px",position:"center-top",distance:"18px",svgSize:"120px",timeout:3e3,borderRadius:"3px",fontFamily:"Dosis",fontSize:"20px"}),t.target.reset()},className:u.form,children:[(0,c.jsx)("label",{className:u.form__name,children:(0,c.jsx)("input",{type:"text",name:"name",pattern:"^[A-Za-z.'\\- ]+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,className:u.form__input,placeholder:"Contact name"})}),(0,c.jsx)("label",{className:u.form__number,children:(0,c.jsx)("input",{type:"tel",name:"number",pattern:"^\\+?\\d{1,4}?\\s?\\(?\\d{1,4}?\\)?\\s?\\d{1,4}\\s?\\d{1,4}\\s?\\d{1,9}$",title:"number number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Contact number",className:u.form__input})}),(0,c.jsx)("button",{type:"submit",className:u.form__button,children:"Add contact"})]})})},d=t(9439),p=t(2791),m=function(){var e=(0,a.v9)(o.hF),n=(0,p.useState)(null),t=(0,d.Z)(n,2),r=t[0],u=t[1],l=(0,p.useState)(""),m=(0,d.Z)(l,2),x=m[0],f=m[1],h=(0,p.useState)(""),j=(0,d.Z)(h,2),v=j[0],b=j[1],_=(0,a.I0)();return(0,c.jsx)("ul",{children:e.map((function(e){return(0,c.jsx)("li",{children:r===e.id?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("input",{type:"text",value:x,onChange:function(e){return f(e.target.value)}}),(0,c.jsx)("input",{type:"text",value:v,onChange:function(e){return b(e.target.value)}}),(0,c.jsx)("button",{type:"button",onClick:function(){return function(e){var n={id:e,name:x,number:v};_((0,s.mP)(n)),i().Notify.info("".concat(x," edited"),{width:"500px",position:"center-top",distance:"18px",svgSize:"120px",timeout:3e3,borderRadius:"3px",fontFamily:"Dosis",fontSize:"20px"}),u(null),f(""),b("")}(e.id)},children:"Save"})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("p",{children:e.name}),(0,c.jsx)("p",{children:e.number}),(0,c.jsxs)("div",{children:[(0,c.jsx)("button",{type:"button",onClick:function(){return n=e.id,t=e.name,r=e.number,u(n),f(t),void b(r);var n,t,r},children:"Edit"}),(0,c.jsx)("button",{type:"button",onClick:function(){return n=e.id,_((0,s.GK)(n)),void i().Notify.failure("Contact DELETED",{width:"500px",position:"center-top",distance:"18px",svgSize:"120px",timeout:3e3,borderRadius:"3px",fontFamily:"Dosis",fontSize:"20px"});var n},children:"Delete"})]})]})},e.id)}))})},x=t(3165),f={searchContainer:"Filter_searchContainer__VH6C3",searchInput:"Filter_searchInput__n8k5T"},h=function(){var e=(0,a.I0)();return(0,c.jsx)("div",{className:f.filter,children:(0,c.jsx)("input",{className:f.filter__input,onChange:function(n){return e((0,x.W)(n.target.value))},placeholder:"Find contact by name"})})},j=(t(1204),t(9273)),v=function(){var e=(0,a.I0)();return(0,c.jsx)("div",{children:(0,c.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t=n.currentTarget;e((0,j.Ib)({email:t.elements.email.value,password:t.elements.password.value})),t.reset()},children:[(0,c.jsxs)("label",{children:["Email",(0,c.jsx)("input",{type:"email",name:"email",placeholder:"example@example.com"})]}),(0,c.jsxs)("label",{children:["Password",(0,c.jsx)("input",{type:"password",name:"password",placeholder:"password"})]}),(0,c.jsx)("button",{type:"submit",children:"Log in"})]})})},b=(t(9783),t(633),function(){var e=(0,a.I0)();return(0,c.jsx)("div",{children:(0,c.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t=n.currentTarget;e((0,j.z2)({name:t.elements.name.value,email:t.elements.email.value,password:t.elements.password.value})),t.reset()},children:[(0,c.jsxs)("label",{children:["Username",(0,c.jsx)("input",{type:"text",name:"name",placeholder:"John Brown"})]}),(0,c.jsxs)("label",{children:["Email",(0,c.jsx)("input",{type:"email",name:"email",placeholder:"example@example.com"})]}),(0,c.jsxs)("label",{children:["Password",(0,c.jsx)("input",{type:"password",name:"password",placeholder:"password"})]}),(0,c.jsx)("button",{type:"submit",children:"Register"})]})})}),_=(t(234),function(){return(0,c.jsx)("div",{children:(0,c.jsx)("span",{children:"Loading..."})})}),w=function(){return(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{}),(0,c.jsx)("span",{children:"Loading error!"})]})};t(1347)},969:function(e,n,t){t.r(n);t(2791);var r=t(4270),i=t(9434),a=t(2484),s=t(2946),o=t(184);n.default=function(){var e=(0,i.v9)(s.xU),n=(0,i.v9)(s.zh);return(0,o.jsxs)("div",{children:[(0,o.jsx)(r.q,{children:(0,o.jsx)("title",{children:"Contacts"})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{children:(0,o.jsx)("h1",{children:"Phonebook"})}),(0,o.jsxs)("div",{children:[(0,o.jsx)(a.t,{}),(0,o.jsx)(a.wn,{})]}),(0,o.jsxs)("div",{children:[e?(0,o.jsx)(a.aN,{}):(0,o.jsx)(a.CR,{}),n&&(0,o.jsx)(a.jj,{})]})]})]})}},2946:function(e,n,t){t.d(n,{Af:function(){return i},hF:function(){return o},xU:function(){return a},zh:function(){return s}});var r=t(6916),i=function(e){return e.contacts.contacts},a=function(e){return e.contacts.isLoading},s=function(e){return e.contacts.error},o=(0,r.P1)([i,function(e){return e.filters}],(function(e,n){return""===n?e:e.filter((function(e){return e.name.toLowerCase().includes(n.filter)}))}))}}]);
//# sourceMappingURL=969.403ef185.chunk.js.map