(window.webpackJsonp=window.webpackJsonp||[]).push([[1,16,20,25,26,28,30,31,32,74,81],{308:function(e,t,n){"use strict";n.r(t);n(113),n(31);var o=n(0),code=n(112),r=n(140),l=n(85),c=o.a.component("fgp-property-link",{components:{fgpCode:code.default,fgpSiteLink:r.default},mixins:[l.a],props:{name:{type:String,required:!0}}}),d=n(13),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("fgp-site-link",{attrs:{path:"".concat(e.fgp.paths.configuration,"#").concat(e.name)}},[e.$slots.default?[e._t("default")]:t("fgp-code",[e._v(e._s(e.name))])],2)}),[],!1,null,null,null);t.default=component.exports},310:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(84),l=o.a.component("fgp-gradle-docs-link",{components:{fgpLink:r.default},props:{path:{type:String,default:null},hoverStyleDisabled:{type:Boolean,default:!1}}}),c=n(13),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("fgp-link",{attrs:{href:"https://docs.gradle.org".concat(e.path),"hover-style-disabled":e.hoverStyleDisabled}},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},311:function(e,t,n){"use strict";n.r(t);n(113),n(31);var o=n(0),code=n(112),r=n(140),l=n(85),c=o.a.component("fgp-task-link",{components:{fgpCode:code.default,fgpSiteLink:r.default},mixins:[l.a],props:{name:{type:String,required:!0}}}),d=n(13),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("fgp-site-link",{attrs:{path:"".concat(e.fgp.paths.tasks,"#").concat(e.name)}},[t("fgp-code",[e._v(e._s(e.name))])],1)}),[],!1,null,null,null);t.default=component.exports},312:function(e,t,n){"use strict";n.r(t);n(31);var o=n(0),r=n(310),l=n(308),c=n(140),d=n(311),f=n(313),_=n(314),v=o.a.component("fgp-task",{components:{fgpGradleDocsLink:r.default,fgpPropertyLink:l.default,fgpSiteLink:c.default,fgpTaskLink:d.default,fgpTaskLinkAnchor:f.default,fgpTaskPropertyType:_.default},props:{name:{type:String,required:!0},type:{type:Boolean,default:!1},dependingTasks:{type:Array,default:function(){return[]}},inputs:{type:Array,default:function(){return[]}},outputs:{type:Array,default:function(){return[]}},cacheable:{type:Boolean,default:!1}},computed:{skippable:function(){return!!this.$slots.skipConditions}}}),k=n(13),component=Object(k.a)(v,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("article",{staticClass:"mb-3 border-bottom"},[t("header",[t("h4",[t("fgp-task-link-anchor",{attrs:{name:e.name}}),e._v(" "),e.type?[e._v("Type")]:[e._v("Task")],e._v(" "),t("fgp-code",[e._v("\n                "+e._s(e.name)+"\n            ")]),e._v("\n            -\n            "),e._t("title"),e._v(" "),e.cacheable?t("fgp-gradle-docs-link",{staticClass:"badge badge-dark",attrs:{path:"/current/userguide/build_cache.html#sec:task_output_caching_details",title:"Cacheable task","hover-style-disabled":""}},[e._v("C")]):e._e(),e._v(" "),t("fgp-site-link",{staticClass:"small text-info",attrs:{path:"#app"}},[e._v("↑")])],2),e._v(" "),t("ul",[e.dependingTasks.length>0?t("li",[e._v("\n                Depends on:\n                "),e._l(e.dependingTasks,(function(n,o){return t("span",{key:n},[t("fgp-task-link",{attrs:{name:n}}),o<e.dependingTasks.length-1?[e._v(", ")]:e._e()],2)}))],2):e._e(),e._v(" "),e.inputs.length>0?t("li",[e._v("\n                Inputs:\n                "),t("ul",e._l(e.inputs,(function(input,n){return t("li",{key:n},[t("fgp-task-property-type",{attrs:{type:input.type}}),t("fgp-code",[e._v(e._s(input.name))]),e._v(":\n                        "),"P"===input.binding?[t("fgp-property-link",{attrs:{name:input.property}}),e._v(" property\n                        ")]:e._e(),e._v(" "),"C"===input.binding?e._t(input.name):e._e()],2)})),0)]):e._e(),e._v(" "),e.outputs.length>0?t("li",[e._v("\n                Outputs:\n                "),t("ul",e._l(e.outputs,(function(output,n){return t("li",{key:n},[t("fgp-task-property-type",{attrs:{type:output.type}}),t("fgp-code",[e._v(e._s(output.name))]),e._v(":\n                        "),"C"===output.binding?e._t(output.name):e._e()],2)})),0)]):e._e(),e._v(" "),e.skippable?t("li",[e._v("\n                Skipped when "),e._t("skipConditions")],2):e._e()])]),e._v(" "),t("section",{staticClass:"px-3"},[e._t("description")],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Header:n(114).default})},313:function(e,t,n){"use strict";n.r(t);n(31);var o=n(0).a.component("fgp-task-link-anchor",{props:{name:{type:String,required:!0}}}),r=n(13),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("span",{staticClass:"text-info",attrs:{id:e.name}},[e._v("#")])}),[],!1,null,null,null);t.default=component.exports},314:function(e,t,n){"use strict";n.r(t);n(46);var o=n(0),r=n(310),l="ET",c="F",d="S",f="RF",_=o.a.component("fgp-task-property-type",{components:{fgpGradleDocsLink:r.default},props:{type:{type:String,required:!0,validator:function(e){return[l,c,f,d].includes(e)}}},computed:{gradleDocsLinkPath:function(){switch(this.type){case f:return"/current/javadoc/org/gradle/api/file/RegularFileProperty.html";case l:case c:case d:return"/current/javadoc/org/gradle/api/provider/Property.html";default:return null}},gradleDocsLinkTitle:function(){switch(this.type){case l:return"Provider of org.siouan.frontendgradleplugin.domain.ExecutableType instance (task is out-of-date if the value changes)";case c:return"Provider of java.io.File instance (task is out-of-date if the path changes)";case f:return"Provider of org.gradle.api.file.RegularFile instance (task is out-of-date if the content changes)";case d:return"Provider of java.lang.String instance (task is out-of-date if the value changes)";default:return null}},chipClass:function(){switch(this.type){case l:return"badge-dark";case c:case d:return"badge-primary";case f:return"badge-danger";default:return null}}}}),v=n(13),component=Object(v.a)(_,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("fgp-gradle-docs-link",{staticClass:"badge mr-1",class:e.chipClass,attrs:{path:e.gradleDocsLinkPath,title:e.gradleDocsLinkTitle,"hover-style-disabled":""}},[e._v(e._s(e.type))])}),[],!1,null,null,null);t.default=component.exports},321:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(84),l=o.a.component("fgp-yarn-link",{components:{fgpLink:r.default},props:{label:{type:String,default:null},labelKey:{type:String,default:"navigation.yarnBerry.label"},path:{type:String,default:""},title:{type:String,default:null}},computed:{href:function(){return"https://yarnpkg.com/".concat(this.path)},internalLabel:function(){return this.label||this.$t(this.labelKey)},internalTitle:function(){return this.title||this.$t("navigation.yarnBerry.title")}}}),c=n(13),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("fgp-link",{attrs:{href:e.href,title:e.internalTitle}},[e._v(e._s(e.internalLabel))])}),[],!1,null,null,null);t.default=component.exports},326:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(310),l=o.a.component("fgp-gradle-task-outcome-link",{components:{fgpGradleDocsLink:r.default},props:{outcome:{type:String,required:!0}}}),c=n(13),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("fgp-gradle-docs-link",{attrs:{path:"/current/userguide/more_about_tasks.html#sec:task_outcomes"}},[e._v(e._s(e.outcome))])}),[],!1,null,null,null);t.default=component.exports},328:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(84),l=o.a.component("fgp-npm-link",{components:{fgpLink:r.default}}),c=n(13),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("fgp-link",{attrs:{href:"https://www.npmjs.com"}},[e._v(e._s(e.$t("navigation.npm.label")))])}),[],!1,null,null,null);t.default=component.exports},388:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(84),l=o.a.component("fgp-npm-docs-link",{components:{fgpLink:r.default},props:{path:{type:String,default:null},hoverStyleDisabled:{type:Boolean,default:!1}}}),c=n(13),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("fgp-link",{attrs:{href:"https://docs.npmjs.com".concat(e.path),"hover-style-disabled":e.hoverStyleDisabled}},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},410:function(e,t,n){"use strict";n.r(t);var o=n(0),code=n(112),r=n(326),l=n(388),c=n(328),d=n(308),f=n(312),_=n(311),v=n(321),k=o.a.component("fgp-install-frontend-task",{components:{fgpCode:code.default,fgpGradleTaskOutcomeLink:r.default,fgpNpmDocsLink:l.default,fgpNpmLink:c.default,fgpPropertyLink:d.default,fgpTask:f.default,fgpTaskLink:_.default,fgpYarnLink:v.default},data:function(){return{inputs:[{name:"packageJsonDirectory",type:"F",binding:"P",property:"packageJsonDirectory"},{name:"nodeInstallDirectory",type:"F",binding:"P",property:"nodeInstallDirectory"},{name:"script",type:"S",binding:"P",property:"installScript"}]}}}),m=n(13),component=Object(m.a)(k,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("fgp-task",{attrs:{name:"installFrontend","depending-tasks":["installPackageManager"],inputs:e.inputs},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Install frontend dependencies")]},proxy:!0},{key:"skipConditions",fn:function(){return[e._v("\n        task "),t("fgp-task-link",{attrs:{name:"installPackageManager"}}),e._v(" was skipped.\n    ")]},proxy:!0},{key:"description",fn:function(){return[t("p",[e._v("\n            Depending on the package manager, this task executes either command "),t("fgp-code",[e._v("npm install")]),e._v(", or\n            command "),t("fgp-code",[e._v("pnpm install")]),e._v(", or command "),t("fgp-code",[e._v("yarn install")]),e._v(", by default.\n            Consequently, the command shall install project dependencies according to the algorithm followed by each\n            package manager (see hereafter). Optionally, this command may be customized\n            with the "),t("fgp-property-link",{attrs:{name:"installScript"}}),e._v(" property (e.g. to run a "),t("fgp-code",[e._v("npm ci")]),e._v("\n            command instead). On a developer workstation, executing this task is a good starting point to setup a\n            workspace for development as it will install the "),t("fgp-nodejs-link"),e._v(" distribution (if not provided)\n            as well as dependencies.\n        ")],1),e._v(" "),t("div",{staticClass:"card my-3"},[t("div",{staticClass:"card-body"},[t("h5",{staticClass:"card-title"},[e._v("About\n                    "),t("fgp-gradle-docs-link",{attrs:{path:"/current/userguide/incremental_build.html"}},[e._v("incremental build")]),e._v("\n                    and up-to-date checks")],1),e._v(" "),t("div",{staticClass:"card-text"},[t("p",[e._v("\n                    If you execute this task several times in a row, you may notice the\n                    "),t("fgp-code",[e._v("npm")]),e._v("/"),t("fgp-code",[e._v("pnpm")]),e._v("/"),t("fgp-code",[e._v("yarn")]),e._v(" command is always\n                    executed: Gradle does not reuse task outputs based on a previous execution with the\n                    "),t("fgp-gradle-task-outcome-link",{attrs:{outcome:"SUCCESS"}}),e._v(" outcome. This is the expected behaviour\n                    "),t("span",{staticClass:"font-italic"},[e._v("by default")]),e._v(" because the task does not declare any relevant\n                    input(s) and output(s) Gradle could track to know the task is already\n                    "),t("fgp-gradle-task-outcome-link",{attrs:{outcome:"UP-TO-DATE"}}),e._v(" (e.g. unlike the\n                    "),t("fgp-task-link",{attrs:{name:"installNode"}}),e._v(" task). Resolving these inputs/outputs is a bit complex,\n                    since it depends on the package manager, the value of the\n                    "),t("fgp-property-link",{attrs:{name:"installScript"}}),e._v(" property, and the files present in the project.\n                    That's why incremental build for this task is not available out-of-the-box by now. However,\n                    some "),t("fgp-repo-link",{attrs:{path:"/tree/main/examples"}},[e._v("examples")]),e._v(" provide guidelines\n                    to customize this task and limit executions under certain circumstances. Notes hereafter provide\n                    also some unofficial ideas:\n                    ")],1),e._v(" "),t("ul",[t("li",[t("fgp-npm-link"),e._v(": inputs may be one or\n                            more of files "),t("fgp-code",[e._v("package.json")]),e._v(",\n                            "),t("fgp-code",[e._v("npm-shrinkwrap.json")]),e._v(", "),t("fgp-code",[e._v("package-lock.json")]),e._v(",\n                            "),t("fgp-code",[e._v("yarn.lock")]),e._v(", while outputs may be the\n                            "),t("fgp-code",[e._v("node_modules")]),e._v(" directory and the\n                            "),t("fgp-code",[e._v("package-lock.json")]),e._v(" file (see\n                            "),t("fgp-npm-docs-link",{attrs:{path:"/cli/v9/commands/npm-install"}},[e._v("npm install")]),e._v(").\n                            If the "),t("fgp-property-link",{attrs:{name:"installScript"}}),e._v(" property is set with\n                            "),t("fgp-code",[e._v("ci")]),e._v(", files "),t("fgp-code",[e._v("npm-shrinkwrap.json")]),e._v(" and\n                            "),t("fgp-code",[e._v("package-lock.json")]),e._v(" may be the only possible input file, if one or\n                            the other exists, and the "),t("fgp-code",[e._v("node_modules")]),e._v(" directory the only output.\n                        ")],1),e._v(" "),t("li",[t("fgp-pnpm-link"),e._v(": inputs may be one or\n                            more of files "),t("fgp-code",[e._v("package.json")]),e._v(", "),t("fgp-code",[e._v("pnpm-lock.yaml")]),e._v(",\n                            while outputs may be the "),t("fgp-code",[e._v("node_modules")]),e._v(" directory and the\n                            "),t("fgp-code",[e._v("pnpm-lock.yaml")]),e._v(" file.\n                        ")],1),e._v(" "),t("li",[t("fgp-yarn-link"),e._v(": inputs may be one or\n                            more of files "),t("fgp-code",[e._v("package.json")]),e._v(", "),t("fgp-code",[e._v("yarn.lock")]),e._v(",\n                            while outputs may be the\n                            "),t("fgp-code",[e._v("node_modules")]),e._v(" directory, or the "),t("fgp-code",[e._v(".pnp.cjs")]),e._v(" file\n                            and the "),t("fgp-code",[e._v(".yarn/cache")]),e._v(" directory\n                            ("),t("fgp-yarn-link",{attrs:{label:"Zero-installs",title:"Zero-Install feature"}}),e._v("), and the\n                            "),t("fgp-code",[e._v("yarn.lock")]),e._v(" file.\n                        ")],1)]),e._v(" "),t("p",[e._v("\n                    If you are about to tweak this task to declare additional inputs and outputs, take a look at\n                    these "),t("fgp-site-link",{attrs:{path:"#tweaking-tasks"}},[e._v("recommendations")]),e._v(".\n                    ")],1)])])])]},proxy:!0}])})}),[],!1,null,null,null);t.default=component.exports}}]);