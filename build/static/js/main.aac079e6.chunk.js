(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{35:function(e,t,a){"use strict";a.r(t);var s=a(1),r=a.n(s),i=a(19),n=a.n(i),o=a(6),c=a(7),l=a(9),d=a(8),j=a(11),h=a(2),m=a(0),p=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsx)("section",{id:"about",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"three columns",children:Object(m.jsx)("img",{id:"hideMe",className:"about-image",src:"images/profilepic.jpg",alt:""})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("h2",{children:"About Me"}),Object(m.jsx)("p",{children:e.aboutme}),Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"columns contact-details",children:[Object(m.jsx)("h2",{children:"Contact Details"}),Object(m.jsxs)("p",{className:"address",children:[Object(m.jsx)("span",{children:e.name}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:e.address}),Object(m.jsx)("br",{}),"or email me ",Object(m.jsx)("br",{}),Object(m.jsx)("a",{href:e.website,target:"_blank",rel:"noreferrer",children:"missjodyrussell@gmail.com"})]})]})})]})]})})}}]),a}(s.Component),u={imagebaseurl:"https://github.com/missjody/workportfolio",name:"Jody Russell",role:"Web Developer with front and back end experience working with the MERN stack",linkedinId:"missjodyrussell",roleDescription:" I also have a background in consumer lending in the credit union industry.",socialLinks:[{name:"github",url:"https://github.com/missjody",icon:"FaGithub"},{name:"linkedin",url:"https://www.linkedin.com/in/missjodyrussell/",icon:"FaLinkedinIn"},{name:"email",url:"mailto: missjodyrussell@gmail.com",icon:"FaEnvelope"},{name:"resume",url:"https://docs.google.com/document/d/107RY7M08vqm8F77XxjkhaZFULj07Vj3bdn56fxxYONk/edit?usp=sharing",icon:"FaFile"}],aboutme:"In April 2020 I graduated from the University of Denver\u2019s Full Stack program, which covered HTML, CSS, JS, and React. I also gained experience in setting up databases and servers to connect to front-end, including MongoDB, Mongoose, and Express. Outside of class I have explored additional technologies: Adobe Xd, Green Sock animation, Materialize CSS, Nextjs, Redux, Sass and ChartJS. Currently working as a Software QA Tester.",address:"405.780.4121",website:"mailto:missjodyrussell@gmail.com",portfolio:[{modalID:"0",name:"Loan Payment Calculator",description:"Calculate your estimated monthly loan payment based on entered parameters.",longDescription:"This react calculator project was built in incremental steps, starting from simple Javascript and ending as a React application. Currently version 6 is in development, with additional user interface options being implemented as well as resolving responsive issues.",imgurl:"images/calculator.jpg",github:"https://github.com/missjody/loan_calculator",deployed:"https://loan-calculator-project.herokuapp.com/"},{modalID:"1",name:"Streamer",description:"Store what movies and tv shows are on your watch list. For this project I created the layout and color scheme of the entire page, as well as working with routes to call to The Movie Database api and Chart.js.",longDescription:"To try the application out use username 'test@test.com', and password 'test'. This single page application was created using Handlebars.js, and was a group project in the bootcamp I attended. I was originally tasked with creating the color pallete for the project, designing the user interface for each of the pages, generating dynamically with Handlesbars.js, and integrating the Chart.js technology. In it's current form I have updated the Owl Carousels to resolve overlapping image issues, and have resolved the error of adding selections when their is more than one option on the selected page.",imgurl:"images/streamer.jpg",github:"https://github.com/missjody/Streamer",deployed:"https://infinite-bayou-97369.herokuapp.com/"},{modalID:"2",name:"Surata",description:"React password protected productivity application, including the ability to set up goals and sub tasks, a Pomodoro timer, and a meditation page.",longDescription:"To test use username 'test' and password 'test'. React password protected productivity application, including the ability to set up goals and sub tasks, a Pomodoro timer, and a meditation page. This was the final group project in the bootcamp I attended. I created the the meditation page using GSAP and React-Sound, and designed the splash page, as well as overall color scheme and hero images. In it's current form I have updated the project to remove illustrations previously seen on the splash page and Pomodoro page.",imgurl:"images/surata1.jpg",github:"https://github.com/missjody/productivity-app",deployed:"https://newsurata.herokuapp.com/"}],articles:[{artId:"0",name:"Deploying to Azure",description:"In an effort to create resources for myself that will also help others with their programming journey, this article outlines the steps neccessary to deploy a React application to Microsoft Azure.",longDescription:"In an effort to create resources for myself that will also help others with their programming journey, this article outlines the steps neccessary to deploy a React application to Microsoft Azure. Following the steps will assist anyone interested in deploying this way.",imgurl:"images/azure.JPG",article:"https://docs.google.com/document/d/1DvHVMeTab2jGcIs8IAllv6Nq5VNFFBs7DIveaKww7GA/edit?usp=sharing"}]},b=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(p,{resumeData:u})})},g=function(){Object(s.useEffect)((function(){document.getElementById("projectsBox").scrollIntoView({behavior:"smooth"})}));var e=Object(h.f)(),t=u.portfolio[e.id];return Object(m.jsxs)("div",{id:"projectsBox",children:[Object(m.jsx)("h1",{style:{color:"white"},children:t.name}),Object(m.jsx)("h3",{style:{color:"white"},children:t.longDescription}),Object(m.jsx)("a",{display:"block",target:"_blank",href:"".concat(t.deployed),rel:"noreferrer",children:"Deployed Project  |"}),Object(m.jsx)("a",{display:"block",target:"_blank",href:"".concat(t.github),rel:"noreferrer",children:"  GitHub Repository"})]})},O=function(){Object(s.useEffect)((function(){document.getElementById("projectsBox").scrollIntoView({behavior:"smooth"})}));var e=Object(h.f)(),t=u.articles[e.id];return Object(m.jsxs)("div",{id:"projectsBox",children:[Object(m.jsx)("h1",{style:{color:"white"},children:t.name}),Object(m.jsx)("h3",{style:{color:"white"},children:t.longDescription}),Object(m.jsx)("a",{display:"block",target:"_blank",href:"".concat(t.article),rel:"noreferrer",children:"Article Link"})]})},x=a(14),f=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsxs)("footer",{children:[Object(m.jsx)("h1",{onClick:function(e){e.preventDefault(),window.scroll({top:0,left:0,behavior:"smooth"}),window.location="/"},children:r.a.createElement(x.FaHome)}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"twelve columns",children:Object(m.jsx)("ul",{className:"social-links",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{target:"_blank",href:e.url,rel:"noreferrer",children:r.a.createElement(x[e.icon])})},e.name)}))})})})]})}}]),a}(s.Component),v=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsx)("section",{id:"portfolio",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"twelve columns collapsed",children:[Object(m.jsx)("h1",{children:"Check Out Some of My Works."}),Object(m.jsxs)("div",{className:"bgrid-quarters s-bgrid-thirds portfolio-wrapper cf",children:[e.portfolio&&e.portfolio.map((function(e){return Object(m.jsx)("div",{className:"columns portfolio-item",children:Object(m.jsxs)("div",{className:"item-wrap",children:[Object(m.jsx)("img",{src:"".concat(e.imgurl),alt:"project example",className:"item-img"}),Object(m.jsx)("div",{className:"overlay",children:Object(m.jsxs)("div",{className:"portfolio-item-meta",children:[Object(m.jsx)("h5",{children:e.name}),Object(m.jsxs)(j.b,{to:"/project/".concat(e.modalID),children:["   ",Object(m.jsx)("p",{children:e.description})," "]})]})})]})},e.name)})),e.articles&&e.articles.map((function(e){return Object(m.jsx)("div",{className:"columns portfolio-item",children:Object(m.jsxs)("div",{className:"item-wrap",children:[Object(m.jsx)("img",{src:"".concat(e.imgurl),alt:"project example",className:"item-img"}),Object(m.jsx)("div",{className:"overlay",children:Object(m.jsxs)("div",{className:"portfolio-item-meta",children:[Object(m.jsx)("h5",{children:e.name}),Object(m.jsxs)(j.b,{to:"/article/".concat(e.artId),children:["   ",Object(m.jsx)("p",{children:e.description})," "]})]})})]})},e.name)}))]})]})})})}}]),a}(s.Component),y=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)("section",{id:"wrongTurn",children:Object(m.jsx)("h1",{id:"wrongTurnH",children:" Sorry, that page does not exist "})})})}}]),a}(s.Component),w=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsx)(r.a.Fragment,{children:Object(m.jsx)("header",{id:"home",children:Object(m.jsx)("div",{className:"row banner",children:Object(m.jsxs)("div",{className:"banner-text",children:[Object(m.jsxs)("h1",{className:"responsive-headline",children:["I am ",e.name,"."]}),Object(m.jsxs)("h3",{className:"hide-me",style:{color:"#2b2b2b",fontFamily:"sans-serif "},children:["I am a ",e.role,".",e.roleDescription]}),Object(m.jsx)("ul",{className:"social",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(m.jsx)("div",{children:r.a.createElement(x[e.icon])})})},e.name)}))})]})})})})}}]),a}(s.Component),k=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(m.jsx)(j.a,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)(w,{resumeData:u}),Object(m.jsxs)(h.c,{children:[Object(m.jsx)(h.a,{exact:!0,path:["/","/home"],children:Object(m.jsx)(b,{})}),Object(m.jsx)(h.a,{path:"/project/:id",children:Object(m.jsx)(g,{})}),Object(m.jsx)(h.a,{path:"/article/:id",children:Object(m.jsx)(O,{})}),Object(m.jsx)(h.a,{children:Object(m.jsx)(y,{})})]}),Object(m.jsx)(v,{resumeData:u}),Object(m.jsx)(f,{resumeData:u})]})})}}]),a}(s.Component);a(21).polyfill(),n.a.render(Object(m.jsx)(k,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.aac079e6.chunk.js.map