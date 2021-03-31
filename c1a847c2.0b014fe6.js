(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{115:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),p=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,f=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return t?a.a.createElement(f,s(s({ref:n},c),{},{components:t})):a.a.createElement(f,s({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},99:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),i=(t(0),t(115)),o={slug:"file-naming-conventions",title:"File Naming Conventions",author:"Lawrence Jones",tags:["unix","linux","file names"]},s={permalink:"/INLS161-2021-spring/blog/file-naming-conventions",editUrl:"https://github.com/ljonesdesign/INLS161-2012-spring/edit/main/blog/2021-03-31.md",source:"@site/blog/2021-03-31.md",description:"File names with umlauts, accents, etc, can cause issues on older systems. They should work fine on newer systems that are up-to-date.",date:"2021-03-31T00:00:00.000Z",tags:[{label:"unix",permalink:"/INLS161-2021-spring/blog/tags/unix"},{label:"linux",permalink:"/INLS161-2021-spring/blog/tags/linux"},{label:"file names",permalink:"/INLS161-2021-spring/blog/tags/file-names"}],title:"File Naming Conventions",readingTime:1.255,truncated:!1},l=[],c={rightToc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"File names with umlauts, accents, etc, can cause issues on older systems. They should work fine on newer systems that are up-to-date."),Object(i.b)("p",null,"The safest approach is to completely avoid using any special characters."),Object(i.b)("p",null,"Generally, I don\u2019t use any characters for file naming outside of these: numbers, lowercase English characters, hyphens ",Object(i.b)("inlineCode",{parentName:"p"},"-"),", and sometimes an underscore ",Object(i.b)("inlineCode",{parentName:"p"},"_"),"."),Object(i.b)("p",null,"I avoid using the period except for separating the filename from a file name extension. I always use hyphens to in spaces unless specifically directed to use underscores. Underscores are better than spaces, but hyphens are better than underscores because Search Engine Optimization (SEO) algorithims perfer hyphens. For that reason, I don't usually use ",Object(i.b)("inlineCode",{parentName:"p"},"CamelCase")," and stick to all lower case and hyphens.  "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"1-2-3-4-5-6-7-8-9-0-a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z.jpg")),Object(i.b)("p",null,"I have noticed that php developers will use underscores for system files that are included in other system files in template folders:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"_init.php\n_main.php\n_uikit.php\nadmin.php\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Here is a ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.paho.org/par/index.php?option=com_docman&view=download&alias=560-guide-to-proper-file-naming&category_slug=organizacion-de-la-representacion&Itemid=253"}),"nice file naming overview from the Pan Health Organization"),". (They obviously must deal with multiple language character sets all the time)."),Object(i.b)("li",{parentName:"ul"},"This pdf file below from the University of Aberdeen contains good information, but I find it ironic that the pdf file name does not use file naming conventions. (Note the four separate ",Object(i.b)("inlineCode",{parentName:"li"},"@20"),"s that are inserted in the empty spaces.\n",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.abdn.ac.uk/staffnet/documents/policy-zone-information-policies/File%20Naming%20Conventions%20July%202017.pdf"}),"https://www.abdn.ac.uk/staffnet/documents/policy-zone-information-policies/File%20Naming%20Conventions%20July%202017.pdf")),Object(i.b)("li",{parentName:"ul"},"Here is another source for file naming guidelines: ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developers.google.com/style/filenames"}),"https://developers.google.com/style/filenames")," In this case the period denotes the subdomain ",Object(i.b)("inlineCode",{parentName:"li"},"developers")," this is another reason to not use periods indiscriminately. Periods are usually used for very specific reasons.")))}p.isMDXComponent=!0}}]);