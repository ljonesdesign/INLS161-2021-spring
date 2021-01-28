(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{114:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return d}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},u=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(o),m=r,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||a;return o?n.a.createElement(d,c(c({ref:t},p),{},{components:o})):n.a.createElement(d,c({ref:t},p))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=o[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},93:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return c})),o.d(t,"rightToc",(function(){return s})),o.d(t,"default",(function(){return l}));var r=o(3),n=o(7),a=(o(0),o(114)),i={title:"Scripting",sidebar_label:"03-05-2021 | Scripting"},c={unversionedId:"07-scripting",id:"07-scripting",isDocsHomePage:!1,title:"Scripting",description:"Client Side Script (JavaScript)",source:"@site/docs/07-scripting.md",slug:"/07-scripting",permalink:"/INLS161-2021-spring/docs/07-scripting",editUrl:"https://github.com/ljonesdesign/INLS161-2021-spring/edit/main/docs/07-scripting.md",version:"current",sidebar_label:"03-05-2021 | Scripting",sidebar:"someSidebar",previous:{title:"Templates",permalink:"/INLS161-2021-spring/docs/06-templates"},next:{title:"Website Checklist",permalink:"/INLS161-2021-spring/docs/07a-web-checklist"}},s=[{value:"Client Side Script (JavaScript)",id:"client-side-script-javascript",children:[]},{value:"Server Side Script (Google Font example)",id:"server-side-script-google-font-example",children:[]},{value:"Google Form",id:"google-form",children:[]}],p={rightToc:s};function l(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"client-side-script-javascript"},"Client Side Script (JavaScript)"),Object(a.b)("p",null,"I will demonstrate how you can implement some of these javascript samples shown here:"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.w3schools.com/js/js_examples.asp"}),"https://www.w3schools.com/js/js_examples.asp")),Object(a.b)("p",null,"We do not expect you to learn how to program in javascript in a part of one lecture and lab. We just want you to be able to grab some code and make it work for you."),Object(a.b)("p",null,"If you are interested in actually understanding some javascript, then you may want to invest 12 minutes here: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=Ukg_U3CnJWI"}),"https://www.youtube.com/watch?v=Ukg_U3CnJWI")),Object(a.b)("p",null,"Certainly one of the javascript examples from w3schools demos will to the job for your project. You should not just copy and paste it as is; you should make it work to suit your situation."),Object(a.b)("p",null,"Below is the sample code of how I did this for my  ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://opal.ils.unc.edu/~lblakej/website-helps/02-one-page-final-sample/"}),"one page site"),":"),Object(a.b)("iframe",{width:"100%",height:"300",src:"//jsfiddle.net/lblakej/7aLoqsw3/29/embedded/html,result/dark/",allowfullscreen:"allowfullscreen",allowpaymentrequest:!0,frameborder:"0"}),Object(a.b)("p",null,"Notice that the above code does not need to be enclosed in a script element. This is because the javascript is coded into the ",Object(a.b)("inlineCode",{parentName:"p"},"onclick")," attribute. The onclick attribute is the only place where javascript is to be found. All other parts of the code example are all basic HTML."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"That is the real learning objective: figure out how to do a little JavaScript hacking to make it work for you.")),Object(a.b)("p",null,"For example, if you choose ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_lightbulb"}),"this sample"),", don\u2019t just use the same image; use your own images. Students have figured this out over and over again, so you can do it too. ",Object(a.b)("em",null,"I have had to sit down and help some students that got stuck, so let me know if you need some extra help.")),Object(a.b)("p",null,"My one page theme, based on the bootstrap framework, also has ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://dimsemenov.com/plugins/magnific-popup/"}),"magnific popup javascript plugin"),". If you use the portfolio example with your own photos, then you can get credit if you make the photos pop up from the portfolio. If you don't use the portfolio, you can also use the magnific popup to get credit if you can make your single photo pop up. Check out the help info at ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://dimsemenov.com/plugins/magnific-popup/documentation.html"}),"magnific site documentation")," for help if you want to try this."),Object(a.b)("h2",{id:"server-side-script-google-font-example"},"Server Side Script (Google Font example)"),Object(a.b)("p",null,"Here is a link that describes how to integrate Google fonts into your site:"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.freecodecamp.org/news/how-to-use-google-fonts-in-your-next-web-design-project-e1ad48f1adfa/"}),"https://www.freecodecamp.org/news/how-to-use-google-fonts-in-your-next-web-design-project-e1ad48f1adfa/")),Object(a.b)("p",null,"There are other Server side scripts you can implement, but the Google fonts option is used by a lot of students to meet the server side script."),Object(a.b)("h2",{id:"google-form"},"Google Form"),Object(a.b)("p",null,"You can also use a Google Form to meet this objective. ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=BtoOHhA3aPQ"}),"Here is a video")))}l.isMDXComponent=!0}}]);