(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{261:function(t,e,n){"use strict";n.r(e);var r=n(26);n(71),n(147),n(47),n(12);e.default={state:function(){return{user:null,isLogin:!1,change_password:null}},mutations:{setUser:function(t,e){t.user=e},setChangePassword:function(t,e){t.change_password=e},setLogin:function(t,e){t.isLogin=e}},getters:{getterUser:function(t){return t.user},getterChangePassword:function(t){return t.change_password},getterLogin:function(t){return t.isLogin}},actions:{updateLoginUser:function(t,e){var n=t.commit;e.data_user?(n("setUser",e.data_user),n("setLogin",!0)):["/pages/"].find((function(t){return e.current_route.indexOf(t)>=0}))&&this.$router.push("/account/login")},loginUser:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.commit,r.next=3,n.$apiTest.$post("/users/login",e).then((function(t){var body=t.body,e={id:body.user.id,name:body.user.name,email:body.user.email};n.$cookies.set("user-app",JSON.stringify(e),{path:"/",maxAge:604800}),o("setUser",e),o("setLogin",!0),o("setNotification",{content:{type:"request"},type:"success",body:{title:"Hello ".concat(body.user.name),message:"Welcome to Test IKBO"}})})).catch((function(t){o("setNotification",{content:{type:"request"},type:"error",body:t.response.data})}));case 3:case"end":return r.stop()}}),r)})))()},createUser:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.commit,r.next=3,n.$apiTest.$post("/users/create",e).then((function(t){var body=t.body,e={id:body.id,name:body.name,email:body.email};n.$cookies.set("user-app",JSON.stringify(e),{path:"/",maxAge:604800}),o("setUser",e),o("setLogin",!0),o("setNotification",{content:{type:"request"},type:"success",body:{title:"Hello ".concat(body.user.name),message:"Welcome to Test IKBO"}})})).catch((function(t){o("setNotification",{content:{type:"request"},type:"error",body:t.response.data})}));case 3:case"end":return r.stop()}}),r)})))()},logoutUser:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.commit,n.$cookies.remove("user-app"),r("setUser",null),r("setLogin",!1);case 4:case"end":return e.stop()}}),e)})))()},updateUserPassword:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.commit,r.next=3,n.$apiTest.$put("/users/update-password",e).then((function(t){var title=t.title,e=t.message;o("setNotification",{content:{type:"request"},type:"success",body:{title:title,message:e}}),o("setChangePassword",{body:{message:"Successfully Updated Password"}})})).catch((function(t){o("setNotification",{content:{type:"request"},type:"error",body:t.response.data})}));case 3:case"end":return r.stop()}}),r)})))()}}}},262:function(t,e,n){"use strict";n.r(e);var r=n(26);n(71);e.default={state:function(){return{variants:[],locations:[],inventory_variants:[]}},mutations:{setVariants:function(t,e){t.variants=e},setLocations:function(t,e){t.locations=e},setInventoryVariants:function(t,e){t.inventory_variants=e}},getters:{getterVariants:function(t){return t.variants},getterLocations:function(t){return t.locations},getterInventoryVariants:function(t){return t.inventory_variants}},actions:{getInventoryVariantData:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.commit,r.next=3,n.$apiTest.$post("/inventory-variants/list",e).then((function(t){o("setInventoryVariants",t.body)})).catch((function(t){o("setNotification",{content:{type:"request"},type:"error",body:t.response.data})}));case 3:case"end":return r.stop()}}),r)})))()},getVariantData:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.commit,r.next=3,n.$apiTest.$post("/products/list",e).then((function(t){o("setVariants",t.body)})).catch((function(t){o("setNotification",{content:{type:"request"},type:"error",body:t.response.data})}));case 3:case"end":return r.stop()}}),r)})))()},getLocationData:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.commit,r.next=3,n.$apiTest.$post("/inventory-locations/list",e).then((function(t){o("setLocations",t.body)})).catch((function(t){o("setNotification",{content:{type:"request"},type:"error",body:t.response.data})}));case 3:case"end":return r.stop()}}),r)})))()},registerInventoryVariant:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.commit,r.next=3,n.$apiTest.$post("/inventory-variants/create",e).then((function(t){o("setNotification",{content:{type:"request"},type:"success",body:t})})).catch((function(t){o("setNotification",{content:{type:"request"},type:"error",body:t.response.data})}));case 3:case"end":return r.stop()}}),r)})))()},registerInventoryTransaction:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.commit,r.next=3,n.$apiTest.$post("/inventory-transactions/create",e).then((function(t){o("setNotification",{content:{type:"request"},type:"success",body:t})})).catch((function(t){o("setNotification",{content:{type:"request"},type:"error",body:t.response.data})}));case 3:case"end":return r.stop()}}),r)})))()},registerProduct:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.commit,r.next=3,n.$apiTest.$post("/products/create",e).then((function(t){o("setNotification",{content:{type:"request"},type:"success",body:t})})).catch((function(t){o("setNotification",{content:{type:"request"},type:"error",body:t.response.data})}));case 3:case"end":return r.stop()}}),r)})))()}}}},280:function(t,e,n){"use strict";var r=n(11),o=n(374),c=n.n(o),f=n(375),d=n.n(f),m=n(281),v=n(376),y=n.n(v),l=n(377);r.a.use(l.a,{transition:"Vue-Toastification__fade",maxToasts:20,newestOnTop:!0}),r.a.component("validation-provider",m.b),r.a.component("validation-observer",m.a),r.a.component("v-select",d.a),r.a.use(c.a),r.a.use(y.a)},282:function(t,e,n){"use strict";n(39),n(12);e.a=function(t,e){var n=t.$axios,r=t.$config,o=t.app,c=n.create({baseURL:r.apiTest.baseURL,headers:r.apiTest.headers});c.interceptors.request.use((function(t){var e=o.$cookies.get("token-app");return t.url="".concat(t.url).concat(t.url.indexOf("?")>=0?"&":"?","app_version=").concat(o.$cookies.get("app-version")),t.headers.common["x-access-token"]=e||r.apiTest.defaultToken,t}),(function(t){return Promise.reject(t)})),c.interceptors.response.use((function(t){var e,n;null!==(e=t.data)&&void 0!==e&&e.app_version&&"null"=="".concat(o.$cookies.get("app-version"))&&o.$cookies.set("app-version",null===(n=t.data)||void 0===n?void 0:n.app_version,{path:"/",maxAge:604800});return t}),(function(t){return Promise.reject(t)})),e("apiTest",c)}},384:function(t,e,n){n(385),t.exports=n(386)},439:function(t,e,n){t.exports={}},440:function(t,e,n){t.exports={}},441:function(t,e,n){t.exports={}},442:function(t,e,n){"use strict";n.r(e);var r=n(11),o=n(38),c=n(261),f=n(262);r.a.use(o.a);e.default=function(){return new o.a.Store({state:{app_version:null,notification:null},getters:{getterAppVersion:function(t){return t.app_version},getterNotification:function(t){return t.notification}},mutations:{setAppVersion:function(t,e){t.app_version=e},setNotification:function(t,e){t.notification=e}},actions:{addNotification:function(t,e){(0,t.commit)("setNotification",e)}},modules:{user:c.default,inventory:f.default}})}}},[[384,8,5,0,1]]]);
//# sourceMappingURL=18c7bca.js.map