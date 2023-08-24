(window.webpackJsonp=window.webpackJsonp||[]).push([[42,28,89],{308:function(t,e,r){"use strict";r.r(e);r(113),r(31);var n=r(0),code=r(112),o=r(140),l=r(85),f=n.a.component("fgp-property-link",{components:{fgpCode:code.default,fgpSiteLink:o.default},mixins:[l.a],props:{name:{type:String,required:!0}}}),c=r(13),component=Object(c.a)(f,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("fgp-site-link",{attrs:{path:"".concat(t.fgp.paths.configuration,"#").concat(t.name)}},[t.$slots.default?[t._t("default")]:e("fgp-code",[t._v(t._s(t.name))])],2)}),[],!1,null,null,null);e.default=component.exports},316:function(t,e,r){"use strict";r.r(e);var n=r(0).a.component("fgp-warning",{}),o=r(13),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",{staticClass:"text-danger px-2"},[e("i",{staticClass:"fas fa-exclamation-triangle mr-1"}),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},348:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(309),l=r(308),f=r(316),c=n.a.component("fgp-http-proxy-username-property",{components:{fgpProperty:o.default,fgpPropertyLink:l.default,fgpWarning:f.default}}),d=r(13),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("fgp-property",{attrs:{name:"httpProxyUsername",type:"java.lang.String",required:!1,tasks:["installNode","installYarn"]}},[e("p",[t._v("\n        This property may be used to download distributions through the proxy server with a given identity (BASIC\n        scheme server-side). This property is ignored when no proxy server is used (see the\n        "),e("fgp-property-link",{attrs:{name:"httpProxyHost"}}),t._v(" property). Otherwise, the\n        "),e("fgp-property-link",{attrs:{name:"httpProxyPassword"}}),t._v(" property is also required.\n    ")],1),t._v(" "),e("fgp-warning",[t._v("\n        SECURITY: do not to store a plain text username in the build script. Store it in an environment variable or\n        an external user property, and use one or the other as the value of this property.\n    ")])],1)}),[],!1,null,null,null);e.default=component.exports}}]);