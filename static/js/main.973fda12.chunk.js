(this["webpackJsonpmezidia-jobs"]=this["webpackJsonpmezidia-jobs"]||[]).push([[0],{25:function(e,a,t){},43:function(e,a,t){e.exports=t(73)},73:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),r=t(8),s=t.n(r),c=(t(25),t(10)),i=t(11),o=t(14),m=t(13),d=t(42),u=t(3),E=function(e){var a,t={columns:[{label:"Name",field:"name",sort:"asc",width:150},{label:"Position",field:"position",sort:"asc",width:270},{label:"Office",field:"office",sort:"asc",width:200},{label:"Age",field:"age",sort:"asc",width:100},{label:"Start date",field:"date",sort:"asc",width:150},{label:"Salary",field:"salary",sort:"asc",width:100}],rows:[]},l=Object(d.a)(e.jobs.jobs);try{for(l.s();!(a=l.n()).done;){var r=a.value;t.rows.push({name:r.id,position:r.userId,office:r.title,age:r.completed.toString(),date:r.id,salary:r.id})}}catch(s){l.e(s)}finally{l.f()}return n.a.createElement(u.f,{bordered:!0,hover:!0,data:t})},h=t(15),f=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={isOpen:!1},e.hrefggleCollapse=function(){e.setState({isOpen:!e.state.isOpen})},e}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(h.a,null,n.a.createElement(u.q,{color:"default-color",dark:!0,expand:"md"},n.a.createElement(u.r,null,n.a.createElement("strong",{className:"white-text"},"Navbar")),n.a.createElement(u.t,{onClick:this.hrefggleCollapse}),n.a.createElement(u.d,{id:"navbarCollapse3",isOpen:this.state.isOpen,navbar:!0},n.a.createElement(u.s,{left:!0},n.a.createElement(u.o,{active:!0},n.a.createElement(u.p,{to:"#!"},"Home")),n.a.createElement(u.o,null,n.a.createElement(u.p,{to:"#!"},"Features")),n.a.createElement(u.o,null,n.a.createElement(u.p,{to:"#!"},"Pricing")),n.a.createElement(u.o,null,n.a.createElement(u.g,null,n.a.createElement(u.j,{nav:!0,caret:!0},n.a.createElement("div",{className:"d-none d-md-inline"},"Dropdown")),n.a.createElement(u.i,{className:"dropdown-default"},n.a.createElement(u.h,{href:"#!"},"Action"),n.a.createElement(u.h,{href:"#!"},"Another Action"),n.a.createElement(u.h,{href:"#!"},"Something else here"),n.a.createElement(u.h,{href:"#!"},"Something else here"))))),n.a.createElement(u.s,{right:!0},n.a.createElement(u.o,null,n.a.createElement(u.p,{className:"waves-effect waves-light",to:"#!"},n.a.createElement(u.l,{fab:!0,icon:"twitter"}))),n.a.createElement(u.o,null,n.a.createElement(u.p,{className:"waves-effect waves-light",to:"#!"},n.a.createElement(u.l,{fab:!0,icon:"google-plus-g"})))))))}}]),t}(l.Component),p=function(){return n.a.createElement(u.k,{color:"blue",className:"font-small pt-4 mt-4"},n.a.createElement(u.e,{fluid:!0,className:"text-center text-md-left"},n.a.createElement(u.w,null,n.a.createElement(u.c,{md:"6"},n.a.createElement("h5",{className:"title"},"Footer Content"),n.a.createElement("p",null,"Here you can use rows and columns here to organize your footer content.")),n.a.createElement(u.c,{md:"6"},n.a.createElement("h5",{className:"title"},"Links"),n.a.createElement("ul",null,n.a.createElement("li",{className:"list-unstyled"},n.a.createElement("a",{href:"#!"},"Link 1")),n.a.createElement("li",{className:"list-unstyled"},n.a.createElement("a",{href:"#!"},"Link 2")),n.a.createElement("li",{className:"list-unstyled"},n.a.createElement("a",{href:"#!"},"Link 3")),n.a.createElement("li",{className:"list-unstyled"},n.a.createElement("a",{href:"#!"},"Link 4")))))),n.a.createElement("div",{className:"footer-copyright text-center py-3"},n.a.createElement(u.e,{fluid:!0},"\xa9 ",(new Date).getFullYear()," Copyright: ",n.a.createElement("a",{href:"https://www.mdbootstrap.com"}," MDBootstrap.com "))))},b=t(41),v=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={fname:"Mark",lname:"Otto",email:void 0,city:"",state:"",jobPosition:""},e.submitHandler=function(e){e.preventDefault(),e.target.className+=" was-validated"},e.changeHandler=function(a){e.setState(Object(b.a)({},a.target.name,a.target.value))},e}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(u.e,null,n.a.createElement("form",{className:"needs-validation",onSubmit:this.submitHandler,noValidate:!0},n.a.createElement(u.w,null,n.a.createElement(u.c,{md:"4",className:"mb-3"},n.a.createElement("label",{htmlFor:"defaultFormRegisterNameEx",className:"grey-text"},"First name"),n.a.createElement("input",{value:this.state.fname,name:"fname",onChange:this.changeHandler,type:"text",id:"defaultFormRegisterNameEx",className:"form-control",placeholder:"First name",required:!0}),n.a.createElement("div",{className:"valid-feedback"},"Looks good!")),n.a.createElement(u.c,{md:"4",className:"mb-3"},n.a.createElement("label",{htmlFor:"defaultFormRegisterEmailEx2",className:"grey-text"},"Last name"),n.a.createElement("input",{value:this.state.lname,name:"lname",onChange:this.changeHandler,type:"text",id:"defaultFormRegisterEmailEx2",className:"form-control",placeholder:"Last name",required:!0}),n.a.createElement("div",{className:"valid-feedback"},"Looks good!")),n.a.createElement(u.c,{md:"4",className:"mb-3"},n.a.createElement("label",{htmlFor:"defaultFormRegisterConfirmEx3",className:"grey-text"},"Email"),n.a.createElement("input",{value:this.state.email,onChange:this.changeHandler,type:"email",id:"defaultFormRegisterConfirmEx3",className:"form-control",name:"email",placeholder:"Your Email address"}),n.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else."))),n.a.createElement(u.w,null,n.a.createElement(u.c,{md:"4",className:"mb-3"},n.a.createElement("label",{htmlFor:"defaultFormRegisterPasswordEx4",className:"grey-text"},"City"),n.a.createElement("input",{value:this.state.city,onChange:this.changeHandler,type:"text",id:"defaultFormRegisterPasswordEx4",className:"form-control",name:"city",placeholder:"City",required:!0}),n.a.createElement("div",{className:"invalid-feedback"},"Please provide a valid city."),n.a.createElement("div",{className:"valid-feedback"},"Looks good!")),n.a.createElement(u.c,{md:"4",className:"mb-3"},n.a.createElement("label",{htmlFor:"defaultFormRegisterPasswordEx4",className:"grey-text"},"State"),n.a.createElement("input",{value:this.state.state,onChange:this.changeHandler,type:"text",id:"defaultFormRegisterPasswordEx4",className:"form-control",name:"state",placeholder:"State",required:!0}),n.a.createElement("div",{className:"invalid-feedback"},"Please provide a valid state."),n.a.createElement("div",{className:"valid-feedback"},"Looks good!")),n.a.createElement(u.c,{md:"4",className:"mb-3"},n.a.createElement("label",{htmlFor:"defaultFormRegisterPasswordEx4",className:"grey-text"},"Job Position"),n.a.createElement("input",{value:this.state.jobPosition,onChange:this.changeHandler,type:"text",id:"defaultFormRegisterPasswordEx4",className:"form-control",name:"job-position",placeholder:"Job position",required:!0}),n.a.createElement("div",{className:"invalid-feedback"},"Please provide a valid Job position."),n.a.createElement("div",{className:"valid-feedback"},"Looks good!"))),n.a.createElement(u.c,{md:"4",className:"mb-3"},n.a.createElement("div",{className:"custom-control custom-checkbox pl-3"},n.a.createElement("input",{className:"custom-control-input",type:"checkbox",value:"",id:"invalidCheck",required:!0}),n.a.createElement("label",{className:"custom-control-label",htmlFor:"invalidCheck"},"Agree to terms and conditions"),n.a.createElement("div",{className:"invalid-feedback"},"You must agree before submitting."))),n.a.createElement(u.b,{color:"primary",type:"submit"},"Submit Form")))}}]),t}(n.a.Component),g=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={jobs:[]},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/todos/").then((function(e){return e.json()})).then((function(a){e.setState({jobs:a})}),(function(a){e.setState({isLoaded:!0,error:a})}))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(f,null),n.a.createElement(u.e,null,n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",{className:"h1"},"Mezidia jobs"),n.a.createElement("p",null,"Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum."))),n.a.createElement(E,{jobs:this.state}),n.a.createElement(v,null),n.a.createElement(p,null))}}]),t}(n.a.Component);t(70),t(71),t(72);s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.973fda12.chunk.js.map