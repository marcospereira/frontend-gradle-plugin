(window.webpackJsonp=window.webpackJsonp||[]).push([[9,6,24,28],{308:function(t,e,n){"use strict";n.r(e);n(113),n(31);var o=n(0),code=n(112),l=n(140),r=n(85),f=o.a.component("fgp-property-link",{components:{fgpCode:code.default,fgpSiteLink:l.default},mixins:[r.a],props:{name:{type:String,required:!0}}}),c=n(13),component=Object(c.a)(f,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("fgp-site-link",{attrs:{path:"".concat(t.fgp.paths.configuration,"#").concat(t.name)}},[t.$slots.default?[t._t("default")]:e("fgp-code",[t._v(t._s(t.name))])],2)}),[],!1,null,null,null);e.default=component.exports},317:function(t,e,n){"use strict";n.r(e);var o=n(0),l=n(84),r="https://nodejs.org",f=o.a.component("fgp-nodejs-link",{components:{fgpLink:l.default},props:{path:{type:String,default:"/"},label:{type:String,default:null}},computed:{internalLabel:function(){return this.label||this.$t("navigation.nodejs.label")},nodeUrl:function(){return this.path?"".concat(r).concat(this.path):r}}}),c=n(13),component=Object(c.a)(f,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("fgp-link",{attrs:{href:t.nodeUrl}},[t._v(t._s(t.internalLabel))])}),[],!1,null,null,null);e.default=component.exports},319:function(t,e,n){"use strict";n.r(e);var o=n(0),l=n(140),r=o.a.component("fgp-faq",{components:{fgpSiteLink:l.default}}),f=n(13),component=Object(f.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("article",{staticClass:"mt-4 pb-2 border-bottom"},[e("header",[e("h4",[t._t("question"),t._v(" "),e("fgp-site-link",{staticClass:"small text-info",attrs:{path:"#app"}},[t._v("↑")])],2)]),t._v(" "),e("section",{staticClass:"px-3"},[t._t("answer")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(114).default})},380:function(t,e,n){"use strict";n.r(e);var o=n(0),code=n(112),l=n(319),r=n(317),f=n(308),c=o.a.component("fgp-node-corepack-npm-pnpm-yarn-direct-use-faq",{components:{fgpCode:code.default,fgpFaq:l.default,fgpNodejsLink:r.default,fgpPropertyLink:f.default}}),d=n(13),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("fgp-faq",{scopedSlots:t._u([{key:"question",fn:function(){return[t._v("\n        How to use "),e("fgp-code",[t._v("node")]),t._v("/"),e("fgp-code",[t._v("corepack")]),t._v("/"),e("fgp-code",[t._v("npm")]),t._v("/"),e("fgp-code",[t._v("pnpm")]),t._v("/"),e("fgp-code",[t._v("yarn")]),t._v(" executables apart from Gradle when the "),e("fgp-nodejs-link"),t._v("\n        distribution is downloaded by the plugin?\n    ")]},proxy:!0},{key:"answer",fn:function(){return[e("ul",[e("li",[t._v("\n                Create a "),e("fgp-code",[t._v("NODEJS_HOME")]),t._v(" environment variable (or a name of your choice) containing\n                the real path set in the "),e("fgp-property-link",{attrs:{name:"nodeInstallDirectory"}}),t._v(" property.\n            ")],1),t._v(" "),e("li",[t._v("\n                Add the directory containing executables to the "),e("fgp-code",[t._v("PATH")]),t._v(" environment variable:\n                "),e("ul",[e("li",[t._v("On Unix-like O/S, add the "),e("fgp-code",[t._v("$NODEJS_HOME/bin")]),t._v(" path.")],1),t._v(" "),e("li",[t._v("On Windows O/S, add "),e("fgp-code",[t._v("%NODEJS_HOME%")]),t._v(" path.")],1)])],1)])]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports}}]);