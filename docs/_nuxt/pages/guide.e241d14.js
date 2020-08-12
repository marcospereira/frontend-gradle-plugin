(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{197:function(t,e,n){"use strict";var r=n(0).a.component("fgp-info",{}),l=n(4),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"text-info px-2"},[e("i",{staticClass:"fas fa-info-circle mr-1"}),this._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},199:function(t,e,n){"use strict";n(195);var r=n(0),l=n(47),o=r.a.component("fgp-yarn-link",{components:{fgpLink:l.a},props:{version:{type:Number,default:1}},data:function(){return{yarnUrls:["https://classic.yarnpkg.com/","https://yarnpkg.com/"]}}}),c=n(4),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("fgp-link",{attrs:{href:t.yarnUrls[t.version-1],title:t.$t("navigation.yarn"+t.version+".title")}},[t._v(t._s(t.$t("navigation.yarn"+t.version+".label")))])}),[],!1,null,null,null);e.a=component.exports},200:function(t,e,n){"use strict";n(19),n(194);e.a={head:function(){var t={meta:[],links:[]};return t.title=this.htmlTitle?this.htmlTitle:"Gradle Node plugin to build JS applications with NPM or Yarn",t.meta.push({hid:"description",name:"description",content:this.metaDescription?this.metaDescription:"Build frontend applications with Node.js/NPM/Yarn: distribution management, configurable tasks (build, test, publish), support of NPX"}),t.meta.push({name:"og:title",content:t.title}),t.meta.push({name:"og:description",content:t.meta.find((function(meta){return"description"===meta.name})).content}),this.linkCanonicalHref&&t.links.push({rel:"canonical",href:this.linkCanonicalHref}),t}}},201:function(t,e,n){"use strict";var r=n(0).a.component("fgp-main-title",{}),l=n(4),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h1",[this._t("default")],2)])}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Header:n(69).default})},202:function(t,e,n){"use strict";var r=n(0).a.component("fgp-nodejs-link",{}),l=n(4),component=Object(l.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("fgp-link",{attrs:{href:"https://nodejs.org/"}},[this._v(this._s(this.$t("navigation.nodejs.label")))])}),[],!1,null,null,null);e.a=component.exports},203:function(t,e,n){"use strict";n(90),n(26),n(27),n(13),n(70);var r=n(50),l=n(0),o=n(71);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=l.a.component("fgp-gradle-scripts",{computed:f({groovyTabClass:function(){return{active:this.groovyTabVisible}},kotlinTabClass:function(){return{active:this.kotlinTabVisible}}},Object(o.b)("gradle-scripts",["groovyTabVisible","kotlinTabVisible"])),methods:f({},Object(o.c)("gradle-scripts",["setGroovyTabVisible","setKotlinTabVisible"]))}),v=n(4),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-2"},[n("ul",{staticClass:"nav nav-tabs"},[n("li",{staticClass:"nav-item",on:{click:function(e){return t.setGroovyTabVisible()}}},[n("a",{staticClass:"nav-link",class:t.groovyTabClass,attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[t._v("Groovy")])]),t._v(" "),n("li",{staticClass:"nav-item",on:{click:function(e){return t.setKotlinTabVisible()}}},[n("a",{staticClass:"nav-link",class:t.kotlinTabClass,attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[t._v("Kotlin")])])]),t._v(" "),n("div",{staticClass:"pt-3 pb-1 pl-3 bg-light"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.groovyTabVisible,expression:"groovyTabVisible"}]},[t._t("groovy")],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.kotlinTabVisible,expression:"kotlinTabVisible"}]},[t._t("kotlin")],2)])])}),[],!1,null,null,null);e.a=component.exports},204:function(t,e,n){"use strict";var r=n(0).a.component("fgp-sub-title",{}),l=n(4),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h2",[this._t("default")],2)])}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Header:n(69).default})},205:function(t,e,n){"use strict";var r=n(0),l=n(47),o=r.a.component("fgp-gradle-docs-link",{components:{fgpLink:l.a},props:{path:{type:String,default:null}}}),c=n(4),component=Object(c.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("fgp-link",{attrs:{href:"https://docs.gradle.org"+this.path}},[this._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},208:function(t,e,n){"use strict";var r=n(0),l=n(47),o=r.a.component("fgp-gradle-link",{components:{fgpLink:l.a},props:{path:{type:String,default:null}},computed:{gradleUrl:function(){return this.path?"".concat("https://gradle.org").concat(this.path):"https://gradle.org"}}}),c=n(4),component=Object(c.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("fgp-link",{attrs:{href:this.gradleUrl}},[this._v(this._s(this.$t("navigation.gradle.label")))])}),[],!1,null,null,null);e.a=component.exports},214:function(t,e,n){"use strict";n.r(e);var r=n(0),l=n(48),code=n(68),o=n(205),c=n(208),f=n(203),d=n(197),v=n(201),h=n(202),_=n(200),m=n(91),k=n(89),y=n(204),j=n(199),O=r.a.component("fgp-guide",{components:{fgpCode:code.default,fgpGradleDocsLink:o.a,fgpGradleLink:c.a,fgpGradleScripts:f.a,fgpInfo:d.a,fgpMainTitle:v.a,fgpNodejsLink:h.a,fgpRepoLink:m.a,fgpSiteLink:k.a,fgpSubTitle:y.a,fgpYarnLink:j.a},mixins:[l.a,_.a],data:function(){return{htmlTitle:"Getting started: building a JS application with Gradle and Node.js",metaDescription:"Guide to get started with the plugin: requirements, supported Node.js and Yarn distributions, installation steps."}}}),w=n(4),component=Object(w.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("fgp-main-title",[t._v("Getting started")]),t._v(" "),n("fgp-sub-title",[t._v("Requirements")]),t._v(" "),n("ul",[n("li",[n("fgp-gradle-link"),t._v(" 5.1+")],1),t._v(" "),n("li",[t._v("JDK 8+ 64 bits")]),t._v(" "),n("li",[t._v("\n                The plugin is built and tested on Linux, Mac OS, Windows (see the list of build environments used in\n                the "),n("fgp-repo-link",{attrs:{path:"/blob/master/CONTRIBUTING.md"}},[t._v("contributing notes")]),t._v(").\n            ")],1)]),t._v(" "),n("fgp-sub-title",[t._v("Supported distributions")]),t._v(" "),n("ul",[n("li",[n("fgp-nodejs-link"),t._v(" 6.2.1+")],1),t._v(" "),n("li",[n("fgp-yarn-link"),t._v(" 1.0+ ("),n("fgp-yarn-link",{attrs:{version:2}}),t._v(" not supported)")],1)]),t._v(" "),n("fgp-sub-title",[t._v("Steps")]),t._v(" "),n("fgp-info",[t._v("\n            Starting from release "),n("fgp-repo-link",{attrs:{path:"/releases/tag/v3.0.1"}},[t._v("3.0.1")]),t._v(", ID\n            "),n("fgp-code",[t._v("org.siouan.frontend")]),t._v(" and classpath\n            "),n("fgp-code",[t._v("org.siouan:frontend-gradle-plugin:<version>")]),t._v(" are deprecated. If you are already using\n            the plugin, we recommend "),n("fgp-repo-link",{attrs:{path:"/releases/tag/v3.0.1"}},[t._v("upgrading")]),t._v(" to the latest\n            release as soon as possible.\n        ")],1),t._v(" "),n("ol",[n("li",[t._v("\n                Install the plugin.\n                "),n("ul",{staticClass:"list-unstyled my-2 mr-3"},[n("li",[n("p",{staticClass:"mb-2"},[t._v("\n                            Using\n                            "),n("fgp-gradle-docs-link",{attrs:{path:"/current/userguide/plugins.html#sec:plugins_block"}},[t._v("Gradle DSL")]),t._v(" "),n("span",{staticClass:"text-muted"},[t._v("(recommended)")])],1),t._v(" "),n("fgp-gradle-scripts",{scopedSlots:t._u([{key:"groovy",fn:function(){return[n("pre",[n("fgp-code",[t._v("plugins {\n    id 'org.siouan.frontend-jdk8' version '3.0.1'\n}")])],1)]},proxy:!0},{key:"kotlin",fn:function(){return[n("pre",[n("fgp-code",[t._v('plugins {\n    id("org.siouan.frontend-jdk8") version "3.0.1"\n}')])],1)]},proxy:!0}])})],1),t._v(" "),n("li",[n("p",{staticClass:"mb-2"},[t._v("\n                            Using\n                            "),n("fgp-gradle-docs-link",{attrs:{path:"/current/userguide/plugins.html#sec:applying_plugins_buildscript"}},[t._v("Gradle build script block")])],1),t._v(" "),n("fgp-gradle-scripts",{scopedSlots:t._u([{key:"groovy",fn:function(){return[n("pre",[n("fgp-code",[t._v("buildscript {\n    repositories {\n        url 'https://plugins.gradle.org/m2/'\n    }\n    dependencies {\n        classpath 'org.siouan:frontend-gradle-plugin-jdk8:3.0.1'\n    }\n}\n\napply plugin: 'org.siouan.frontend-jdk8'")])],1)]},proxy:!0},{key:"kotlin",fn:function(){return[n("pre",[n("fgp-code",[t._v('buildscript {\n    repositories {\n        url = uri("https://plugins.gradle.org/m2/")\n    }\n    dependencies {\n        classpath("org.siouan:frontend-gradle-plugin-jdk8:3.0.1")\n    }\n}\n\napply(plugin = "org.siouan.frontend-jdk8")')])],1)]},proxy:!0}])})],1)])]),t._v(" "),n("li",[n("fgp-site-link",{attrs:{path:t.fgp.paths.configuration}},[t._v("Configure")]),t._v(" your project, optionally\n                with the help of "),n("fgp-repo-link",{attrs:{path:"/tree/master/examples"}},[t._v("examples")]),t._v(" provided for\n                typical use cases.\n            ")],1),t._v(" "),n("li",[t._v("Run "),n("fgp-code",[t._v("gradlew build")]),t._v(".")],1),t._v(" "),n("li",[t._v("\n                If you need to run\n                "),n("fgp-code",[t._v("node")]),t._v("/"),n("fgp-code",[t._v("npm")]),t._v("/"),n("fgp-code",[t._v("npx")]),t._v("/"),n("fgp-code",[t._v("yarn")]),t._v("\n                executables from a command line (e.g. to start a development server), take a look at the\n                "),n("fgp-site-link",{attrs:{path:t.fgp.paths.faqs}},[t._v("FAQ")]),t._v(".\n            ")],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);