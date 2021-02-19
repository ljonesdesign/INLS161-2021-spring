(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),r=(n(0),n(114)),l={title:"CSS Overview and Task 02.02 Focus",sidebar_label:"02-19-2021 | CSS"},i={unversionedId:"05-css",id:"05-css",isDocsHomePage:!1,title:"CSS Overview and Task 02.02 Focus",description:"Session Video",source:"@site/docs/05-css.md",slug:"/05-css",permalink:"/INLS161-2021-spring/docs/05-css",editUrl:"https://github.com/ljonesdesign/INLS161-2021-spring/edit/main/docs/05-css.md",version:"current",sidebar_label:"02-19-2021 | CSS",sidebar:"someSidebar",previous:{title:"HTML",permalink:"/INLS161-2021-spring/docs/04-html"},next:{title:"Templates",permalink:"/INLS161-2021-spring/docs/06-templates"}},s=[{value:"Session Video",id:"session-video",children:[]},{value:"HTML Review",id:"html-review",children:[]},{value:"Inline CSS",id:"inline-css",children:[]},{value:"Adding Styles in the head of the HTML Document",id:"adding-styles-in-the-head-of-the-html-document",children:[]},{value:"CSS Placed in a Separate Document",id:"css-placed-in-a-separate-document",children:[]},{value:"Linking The webpage to the CSS File (Same level in folder)",id:"linking-the-webpage-to-the-css-file-same-level-in-folder",children:[]},{value:"Linking to a Stylesheet (Stylesheet(s) in Directory in the root folder)",id:"linking-to-a-stylesheet-stylesheets-in-directory-in-the-root-folder",children:[]},{value:"Experiment with some css",id:"experiment-with-some-css",children:[]}],c={rightToc:s};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"session-video"},"Session Video"),Object(r.b)("p",null,"This class was cancelled due to inclement weather conditions. Here is a video that will walk you through getting your task 02.02 completed. If you are not able to see the video, you will need to login into ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://uncch.hosted.panopto.com"}),"https://uncch.hosted.panopto.com"),"."),Object(r.b)("iframe",{src:"https://uncch.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=2752cc5b-fca5-4ad7-a231-acd3011bd838&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all",allowfullscreen:!0,height:"405",width:"720"}),Object(r.b)("h2",{id:"html-review"},"HTML Review"),Object(r.b)("p",null,"This is the basic page that we hard coded last week. We did it line by line in notepad without any auto completion:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n  <head>\n   <meta charset="utf-8"> \x3c!-- this is now required for validation --\x3e\n   <title>Task 02.01 Assignment</title>\n  </head>\n  <body>\n   <h1>Hard coded page.</h1>\n   <p>This is a paragraph.</p>\n  </body>\n</html>\n')),Object(r.b)("p",null,"There is no CSS styling in the code above. (You can change the Title to 02.02 Assignment)"),Object(r.b)("h2",{id:"inline-css"},"Inline CSS"),Object(r.b)("p",null,"The best way to learn css concepts is to continue to hard code; however, cutting and pasting simple code is acceptable. Or you can use your autocomplete function in your text editor. Open up your last project and add some more code:"),Object(r.b)("p",null,"So let's put in some ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://codepen.io/lblakej/pen/RwajaEZ"}),"inline css")," with a style attribute."),Object(r.b)("p",null,"Find the h1 tag, click after the 1 and before the closing h1 bracket and add some space, like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"<h1                   >Hard coded page.</h1>\n")),Object(r.b)("p",null,"Confirm that you moved the angle bracket with the text."),Object(r.b)("p",null,"Then, add add the following code in the space:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'style="color:red;"\n')),Object(r.b)("p",null,"Every part of the attribute data has to go inside the first pair of brackets. Now look below. Look back and forth between these two boxes and confirm that ",Object(r.b)("inlineCode",{parentName:"p"},'style="color:red;"')," is in there in that particular order. This syntax will be repeated over and over with all of the other attributes that you will learn. Eventually, it will get easier to recognize the pattern."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'<h1 style="color:red;">Hard coded page.</h1>\n')),Object(r.b)("p",null,"See this ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://codepen.io/lblakej/pen/RwajaEZ"}),"codepen example"),", to see it live."),Object(r.b)("p",null,"Different text editors use different highlighting, but are consistent regarding elements, attributes, and values."),Object(r.b)("p",null,"Save your file with the changes, leaving the inline style in place. We need to keep that in the document to demo and discuss the concept of ",Object(r.b)("strong",{parentName:"p"},"cascading.")," Preview your saved file in a browser to confirm that the heading is red."),Object(r.b)("p",null,"This is what your code should look like after saving:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n  <head>\n   <title>Task 02.02 Assignment</title>\n  </head>\n  <body>\n   <h1 style="color:red;">Hard coded page.</h1>\n   <p>This is a paragraph.</p>\n  </body>\n</html>\n')),Object(r.b)("h2",{id:"adding-styles-in-the-head-of-the-html-document"},"Adding Styles in the head of the HTML Document"),Object(r.b)("p",null,"Inline styles are not optimal. It is ",Object(r.b)("strong",{parentName:"p"},"much")," better to add them to the head of the document. But not the ",Object(r.b)("strong",{parentName:"p"},"best")," way. We will get to the best way after this example."),Object(r.b)("p",null,"Add this code block in the head:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"<style>\n  p  {\n    color:blue;\n      }\n</style>\n")),Object(r.b)("p",null,"Like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n  <head>\n   <title>Task 02.01 Assignment</title>\n   \x3c!-- below title --\x3e\n   <style>\n    p  {\n      color:blue;\n        }\n  </style>\n  \x3c!-- above the closing head tag --\x3e\n  </head>\n  <body>\n   <h1 style="color:red;">Hard coded page.</h1>\n   <p>This is a paragraph.</p>\n  </body>\n</html>\n')),Object(r.b)("p",null,"Leave the code as is and save and preview your file. Confirm that you have a blue paragraph and a red heading 1. If you add another paragraph element in the body, will it also be blue?"),Object(r.b)("p",null,"There are some situations where it is okay to put one or two styles in the head of the same document. But it is never optimal to put a lot of CSS code in the top of your document."),Object(r.b)("h2",{id:"css-placed-in-a-separate-document"},"CSS Placed in a Separate Document"),Object(r.b)("p",null,"The best way to add multiple styles to your webpage or website is to put the styles in a separate document and then link them to your web page or web pages."),Object(r.b)("p",null,"Within your root folder, create a file named  ",Object(r.b)("inlineCode",{parentName:"p"},"style.css"),"."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"You can also name it as you wish. Examples might be ",Object(r.b)("inlineCode",{parentName:"em"},"main.css")," or ",Object(r.b)("inlineCode",{parentName:"em"},"primary.css")," or ",Object(r.b)("inlineCode",{parentName:"em"},"unc_theme.css")," but make sure you don't leave spaces or use bad naming conventions. Do try to make it understandable and relevant.")),Object(r.b)("p",null,"In the new empty file enter a body tag and give it a background color of tan or choose another. ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3schools.com/colors/colors_names.asp"}),"Here is a list of CSS Named background colors"),". There are only 140 named colors. All named colors can also be described in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3schools.com/colors/colors_hexadecimal.asp"}),"HEX values")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"body {\n  background-color: tan;\n}\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Notice that you ",Object(r.b)("strong",{parentName:"p"},"do not")," need to include the ",Object(r.b)("inlineCode",{parentName:"p"},"<style>")," tags if you are putting your styles in a separate css file.")),Object(r.b)("p",null,"It's time to address a common confusion before we go on... Linking a css file to an HTML file is very different than creating a text link out to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://gfycat.com/hoarsetightcapybara"}),"a funny cat gif"),". That is an ",Object(r.b)("strong",{parentName:"p"},"anchor link")," and it looks like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'<a href="https:/gfycat.com/hoarsetightcapybara">a funny cat gif</a>\n')),Object(r.b)("p",null,"HENCE, why it starts with an ",Object(r.b)("strong",{parentName:"p"},"a"),"; a is for anchor. These anchor links have to go in the ",Object(r.b)("strong",{parentName:"p"},"body")," of your html file. By the way, as you may have already found out, the link is not really a funny cat gif."),Object(r.b)("h2",{id:"linking-the-webpage-to-the-css-file-same-level-in-folder"},"Linking The webpage to the CSS File (Same level in folder)"),Object(r.b)("p",null,"Here is what the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3schools.com/tags/tag_link.asp"}),"HTML Link tag")," looks like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'   <link rel="stylesheet" href="style.css">\n')),Object(r.b)("p",null,"The link to a CSS file must go in the ",Object(r.b)("strong",{parentName:"p"},"head")," of your web page. If you have multiple web pages that use the same css file, they also must include the exact same link in the head of the html page."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'<!DOCTYPE html>\n<html lang="en">\n  <head>\n   <title>Task 02.02 Assignment</title>    \n   <link rel="stylesheet" href="style.css">\n</head>\n')),Object(r.b)("p",null,"The file name must exactly match the file name you created, and, this is very important, it must be at the same level of your index.html or other html files, in the directory, for it to work as shown above."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"- index.html\n- style.css\n")),Object(r.b)("h2",{id:"linking-to-a-stylesheet-stylesheets-in-directory-in-the-root-folder"},"Linking to a Stylesheet (Stylesheet(s) in Directory in the root folder)"),Object(r.b)("p",null,"Look at the file set up below. There are two stylesheets in the stylesDirectory. You must reference them so that they can be found in the directory:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"index.html\nstylesDirectory\n   style.css\n   unc_theme.css\n")),Object(r.b)("p",null,"Here is how you link to just the style.css file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'<!DOCTYPE html>\n<html lang="en">\n  <head>\n   <title>Task 02.02 Assignment</title>    \n <link rel="stylesheet" href="stylesDirectory/style.css">\n</head>\n')),Object(r.b)("p",null,"Here is how you link to both ",Object(r.b)("inlineCode",{parentName:"p"},"style.css")," and ",Object(r.b)("inlineCode",{parentName:"p"},"unc_theme.css")," file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'<!DOCTYPE html>\n<html lang="en">\n  <head>\n   <title>Task 02.02 Assignment</title>    \n <link rel="stylesheet" href="stylesDirectory/style.css">\n <link rel="stylesheet" href="stylesDirectory/unc_theme.css">\n</head>\n')),Object(r.b)("h2",{id:"experiment-with-some-css"},"Experiment with some css"),Object(r.b)("p",null,"You now know all you need to know to start experimenting with CSS. Have some fun! But make sure your CSS validates before you submit your 02.02 Assignment in Sakai."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.color-hex.com/"}),"Color Hex Color Codes")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS"}),"CSS Basics")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"}),"Custom Properties (variables)"))))}b.isMDXComponent=!0},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),b=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=b(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=b(n),d=a,u=h["".concat(l,".").concat(d)]||h[d]||p[d]||r;return n?o.a.createElement(u,i(i({ref:t},c),{},{components:n})):o.a.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);