webpackJsonp([1],[,,,,,,,,,,,,,,,,function(t,e,s){"use strict";e.a={UPDATE_POSTS:"UPDATE_POSTS",MODIFY_POST:"MODIFY_POST",CHANGE_PAGE:"CHANGE_PAGE",CHANGE_ITEMS_PER_PAGE:"CHANGE_ITEMS_PER_PAGE",UPDATE_SEARCH:"UPDATE_SEARCH",SET_LOADING_STATUS:"SET_LOADING_STATUS",OPEN_EDITOR:"OPEN_EDITOR",CLOSE_EDITOR:"CLOSE_EDITOR"}},,,,,,,,,,function(t,e,s){"use strict";var n,a=s(60),i=s.n(a),o=s(17),r=s.n(o),c=s(10),l=s(2),u=s(16),p=s(48),_=s(50);c.a.use(l.e),e.a=new l.e.Store({state:{posts:{total:0,data:[],areLoading:!1},editor:{postEditing:null},pagination:{currentPage:1,itemsPerPage:5},search:{input:""}},mutations:(n={},i()(n,u.a.MODIFY_POST,function(t,e){var s=t.posts.data.findIndex(function(t){return t.id===e.id});console.log(s),r()(t.posts.data[s],e)}),i()(n,u.a.UPDATE_POSTS,function(t,e){t.posts.data=e.data,t.posts.total=e.total,t.posts.areLoading=!1}),i()(n,u.a.SET_LOADING_STATUS,function(t,e){t.posts.areLoading=e}),i()(n,u.a.CHANGE_PAGE,function(t,e){t.pagination.currentPage=e}),i()(n,u.a.CHANGE_ITEMS_PER_PAGE,function(t,e){t.pagination.itemsPerPage=e,t.pagination.currentPage=1}),i()(n,u.a.UPDATE_SEARCH,function(t,e){t.search.input=e}),i()(n,u.a.OPEN_EDITOR,function(t,e){var s=t.posts.data.findIndex(function(t){return t.id===e});t.editor.postEditing=r()({},t.posts.data[s])}),i()(n,u.a.CLOSE_EDITOR,function(t){t.editor.postEditing=null}),n),getters:_,actions:p})},function(t,e,s){s(92);var n=s(1)(s(51),s(110),null,null);t.exports=n.exports},,,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";e.a=function(t,e,s){var n=[],a=s%2==0,i=Math.floor(s/2),o=t-i,r=t+i;s>=e&&(o=1,r=e),a&&(o++,i--),o<1&&(o+=i,r+=i),r>e&&(a&&20===t&&i++,o-=i,r-=i);for(var c=o;c<=r;c++)n.push(c);return n}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(10),a=s(27),i=s.n(a),o=s(26);n.a.config.productionTip=!1,new n.a({el:"#app",store:o.a,template:"<App/>",components:{App:i.a}})},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(49),a=s(16);s.d(e,"fetchPosts",function(){return i}),s.d(e,"modifyPost",function(){return o}),s.d(e,"goToPage",function(){return r}),s.d(e,"nextPage",function(){return c}),s.d(e,"previousPage",function(){return l}),s.d(e,"changeItemsPerPage",function(){return u});var i=function(t){var e=t.commit,s=t.state;window.scrollTo(0,0),e(a.a.SET_LOADING_STATUS,!0),e(a.a.UPDATE_POSTS,[]);var i=s.pagination.currentPage,o=s.pagination.itemsPerPage,r=s.search.input;n.a.get("/posts",{params:{_expand:"user",_page:i,_limit:o,q:r}}).then(function(t){var s=t.data,n=t.headers["x-total-count"];e(a.a.UPDATE_POSTS,{data:s,total:n})})},o=function(t,e){var s=t.commit;t.dispatch;n.a.patch("/posts/"+e.id,{title:e.title,body:e.body}).then(function(t){s(a.a.CLOSE_EDITOR),s(a.a.MODIFY_POST,t.data)})},r=function(t,e){var s=t.commit,n=t.dispatch;s(a.a.CHANGE_PAGE,e),n("fetchPosts")},c=function(t){var e=t.commit,s=t.dispatch,n=t.state,i=n.pagination.currentPage+1;e(a.a.CHANGE_PAGE,i),s("fetchPosts")},l=function(t){var e=t.commit,s=t.dispatch,n=t.state,i=n.pagination.currentPage-1;e(a.a.CHANGE_PAGE,i),s("fetchPosts")},u=function(t,e){var s=t.commit,n=t.dispatch;s(a.a.CHANGE_ITEMS_PER_PAGE,e),n("fetchPosts")}},function(t,e,s){"use strict";var n=s(28),a=s.n(n);e.a=a.a.create({baseURL:"https://jsonplaceholder.typicode.com/",setTimeout:1e3})},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),s.d(e,"numberOfPages",function(){return n});var n=function(t){return Math.ceil(t.posts.total/t.pagination.itemsPerPage)||0}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(104),a=s.n(n),i=s(102),o=s.n(i),r=s(106),c=s.n(r),l=s(105),u=s.n(l),p=s(101),_=s.n(p);e.default={name:"app",components:{PostEditor:a.a,PaginationController:o.a,Search:c.a,PostFeed:u.a,Pagination:_.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(3),a=s.n(n),i=s(2);e.default={computed:a()({},s.i(i.a)({post:function(t){return t.editor.postEditing||{}}})),methods:a()({},s.i(i.c)(["modifyPost"]),s.i(i.d)({closeEditor:"CLOSE_EDITOR"}),{getActiveState:function(){return""===this.post.body||""===this.post.title?"is-disabled":null}})}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(3),a=s.n(n),i=s(46),o=s(2);e.default={name:"Pagination",props:{pageLimit:{type:Number,required:!1,default:5},includeNextAndPrev:{type:Boolean,required:!1,default:!1}},computed:a()({},s.i(o.a)({currentPage:function(t){return t.pagination.currentPage}}),s.i(o.b)(["numberOfPages"]),{pageOptions:function(){return s.i(i.a)(this.currentPage,this.numberOfPages,this.pageLimit)},firstPageVisible:function(){return-1===this.pageOptions.indexOf(1)},lastPageVisable:function(){return-1===this.pageOptions.indexOf(this.numberOfPages)}}),methods:a()({},s.i(o.c)(["goToPage","nextPage","previousPage"]),{getNextButtonClass:function(){return this.currentPage!==this.numberOfPages?null:"is-disabled"},getPrevButtonClass:function(){return 1!==this.currentPage?null:"is-disabled"},getActivePage:function(t){return t!==this.currentPage?null:"is-current"}})}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{itemsPerPageOptions:{type:Array,required:!1,default:function(){return[5,10,25]}}},computed:{totalItems:function(){return this.$store.state.posts.total},itemsPerPage:{get:function(){return this.$store.state.pagination.itemsPerPage},set:function(t){this.$store.dispatch("changeItemsPerPage",t)}},pageItemRange:function(){var t=this.$store.state.pagination.currentPage,e=this.itemsPerPage,s=t*e,n=1!==t?s-e+1:0;return s>this.totalItems&&(s=this.totalItems),n+" - "+s}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(3),a=s.n(n),i=s(2);e.default={props:["user","postTitle","postBody","postId"],methods:a()({},s.i(i.d)({openPost:"OPEN_EDITOR"}))}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(3),a=s.n(n),i=s(2),o=s(100),r=s.n(o);e.default={components:{Editor:r.a},computed:a()({},s.i(i.a)({post:function(t){return t.editor.postEditing}})),methods:a()({},s.i(i.d)({closeEditor:"CLOSE_EDITOR"}))}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(2),a=s(103),i=s.n(a);e.default={components:{Post:i.a},computed:{posts:function(){return this.$store.state.posts.data},loading:function(){return this.$store.state.posts.areLoading},noResults:function(){return this.posts<1&&!this.loading}},methods:s.i(n.c)(["deletePost"]),created:function(){this.$store.dispatch("fetchPosts")}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{input:{get:function(){return this.$store.state.search.input},set:function(t){this.$store.commit("UPDATE_SEARCH",t),this.$store.commit("CHANGE_PAGE",1),this.$store.dispatch("fetchPosts")}},numberOfResults:function(){return this.$store.state.posts.total}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,s){s(95);var n=s(1)(s(52),s(113),"data-v-c55b87c0",null);t.exports=n.exports},function(t,e,s){s(94);var n=s(1)(s(53),s(112),"data-v-84d02728",null);t.exports=n.exports},function(t,e,s){s(89);var n=s(1)(s(54),s(107),null,null);t.exports=n.exports},function(t,e,s){s(90);var n=s(1)(s(55),s(108),"data-v-1cb666da",null);t.exports=n.exports},function(t,e,s){s(96);var n=s(1)(s(56),s(114),null,null);t.exports=n.exports},function(t,e,s){s(91);var n=s(1)(s(57),s(109),"data-v-3df8bc5e",null);t.exports=n.exports},function(t,e,s){s(93);var n=s(1)(s(58),s(111),"data-v-60842a4a",null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"pagination-controller"},[s("div",{staticClass:"pagination-controller__info"},[s("div",{staticClass:"pagination-controller__info__items-showing"},[s("p",[t._v("Showing "+t._s(t.pageItemRange)+" posts of "+t._s(t.totalItems))])])]),t._v(" "),s("div",{staticClass:"pagination-controller__control"},[t._m(0),t._v(" "),s("div",{staticClass:"pagination-controller__control__input"},[s("p",[s("span",{staticClass:"pagination-controller__control__input--select"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.itemsPerPage,expression:"itemsPerPage"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.itemsPerPage=e.target.multiple?s:s[0]}}},t._l(t.itemsPerPageOptions,function(e){return s("option",{domProps:{value:e}},[t._v(t._s(e))])}))])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pagination-controller__control__description"},[s("p",[t._v("Posts Per Page:")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post"},[s("div",{staticClass:"post__header"},[s("div",{staticClass:"post__user"},[t._m(0),t._v(" "),s("div",{staticClass:"post__user__info"},[s("p",{staticClass:"post__user__info__name"},[t._v(t._s(t.user.name))]),t._v(" "),s("p",{staticClass:"post__user__info__username"},[t._v("@"+t._s(t.user.username))])])]),t._v(" "),s("a",{staticClass:"post__button",on:{click:function(e){t.openPost(t.postId)}}},[t._v("Edit")])]),t._v(" "),s("div",{staticClass:"post__title"},[s("h3",[t._v(t._s(t.postTitle))])]),t._v(" "),s("div",{staticClass:"post__body"},[s("p",[t._v(t._s(t.postBody))])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post__user__display"},[s("figure",{staticClass:"post__user__display__image"},[s("img",{attrs:{src:"http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/user-male-icon.png",alt:"Profile Image"}})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"post-feed"},[s("div",{staticClass:"post-feed__posts"},[t._l(t.posts,function(t){return s("post",{key:t.id,attrs:{user:t.user,"post-title":t.title,"post-body":t.body,"post-id":t.id}})}),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loader"}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.noResults,expression:"noResults"}],staticClass:"post-feed__no-result-message"},[t._v("\n      Sorry! :(  No Posts were found\n    ")])],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-container"},[s("div",{staticClass:"app",attrs:{id:"app"}},[s("post-editor"),t._v(" "),s("search"),t._v(" "),s("pagination-controller",{attrs:{"items-per-page-options":[5,10,15]}}),t._v(" "),s("post-feed"),t._v(" "),s("pagination",{attrs:{"page-limit":3,"include-next-and-prev":!0}}),t._v(" "),s("pagination-controller",{attrs:{"items-per-page-options":[5,10,15]}})],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search"},[s("p",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"search__input",attrs:{type:"text",placeholder:"SEARCH POSTS"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"pagination"},[t.includeNextAndPrev?s("a",{staticClass:"pagination__button--next",class:t.getNextButtonClass(),on:{click:t.nextPage}},[t._v("Next")]):t._e(),t._v(" "),t.includeNextAndPrev?s("a",{staticClass:"pagination__button--prev",class:t.getPrevButtonClass(),on:{click:t.previousPage}},[t._v("Previous")]):t._e(),t._v(" "),s("ul",{staticClass:"pagination__page-list"},[s("li",{directives:[{name:"show",rawName:"v-show",value:t.firstPageVisible&&t.pageOptions.length,expression:"firstPageVisible && pageOptions.length"}],on:{click:function(e){t.goToPage(1)}}},[s("a",{staticClass:"pagination__page-list__button--jump"},[t._v("\n        1\n      ")])]),t._v(" "),s("li",[s("span",{directives:[{name:"show",rawName:"v-show",value:t.firstPageVisible&&t.pageOptions.length,expression:"firstPageVisible && pageOptions.length"}],staticClass:"pagination-ellipsis"},[t._v("…")])]),t._v(" "),t._l(t.pageOptions,function(e){return s("li",{on:{click:function(s){t.goToPage(e)}}},[s("a",{staticClass:"pagination__page-list__button",class:t.getActivePage(e)},[t._v(t._s(e))])])}),t._v(" "),s("li",{directives:[{name:"show",rawName:"v-show",value:t.lastPageVisable&&t.pageOptions.length,expression:"lastPageVisable && pageOptions.length"}]},[s("span",{staticClass:"pagination-ellipsis"},[t._v("…")])]),t._v(" "),s("li",{directives:[{name:"show",rawName:"v-show",value:t.lastPageVisable&&t.pageOptions.length,expression:"lastPageVisable && pageOptions.length"}],on:{click:function(e){t.goToPage(t.numberOfPages)}}},[s("a",{staticClass:"pagination__page-list__button--jump"},[t._v(t._s(t.numberOfPages))])])],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"form"},[s("div",{staticClass:"form__field"},[s("label",{staticClass:"form__field__label",attrs:{for:"titleInput"}},[t._v("Post Title:")]),t._v(" "),s("p",{staticClass:"form__field__control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.post.title,expression:"post.title"}],staticClass:"form__field__input",attrs:{name:"titleInput",required:""},domProps:{value:t.post.title},on:{input:function(e){e.target.composing||(t.post.title=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form__field"},[s("label",{staticClass:"form__field__label",attrs:{for:"postBody"}},[t._v("Post Body:")]),t._v(" "),s("p",{staticClass:"form__field__control"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.post.body,expression:"post.body"}],staticClass:"form__field__textarea",attrs:{name:"postBody",required:""},domProps:{value:t.post.body},on:{input:function(e){e.target.composing||(t.post.body=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form__field--grouped"},[s("p",{staticClass:"form__field__control"},[s("button",{staticClass:"form__field__button",on:{click:function(e){e.preventDefault(),t.closeEditor(e)}}},[t._v("Cancel")])]),t._v(" "),s("p",{staticClass:"form__field__control"},[s("button",{staticClass:"form__field__button--cta",class:t.getActiveState(),attrs:{type:"submit"},on:{click:function(e){e.preventDefault(),t.modifyPost(t.post)}}},[t._v("Save")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{directives:[{name:"show",rawName:"v-show",value:t.post,expression:"post"}],staticClass:"post-editor"},[s("div",{staticClass:"post-editor__background",on:{click:t.closeEditor}}),t._v(" "),s("div",{staticClass:"post-editor__content"},[s("editor",{directives:[{name:"show",rawName:"v-show",value:t.post,expression:"post"}]})],1),t._v(" "),s("button",{staticClass:"post-editor__close",attrs:{type:"button"},on:{click:t.closeEditor}})])},staticRenderFns:[]}}],[47]);
//# sourceMappingURL=app.be8936b9b81a91482c58.js.map