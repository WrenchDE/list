(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-da214906"],{"38f2":function(t,e,n){"use strict";var a={props:{loading:{type:Boolean,default:function(){return!1}},tableData:{type:Array,default:function(){return[]}},hasSelection:{type:Boolean,default:function(){return!1}},hasIndex:{type:Boolean,default:function(){return!1}},tableStructure:{type:Array,default:function(){return[]}},filterBtn:{type:Function,default:function(){return!0}},formatter:{type:Function,default:function(t,e,n,a){return t[e.property]?t[e.property]:""}}},data:function(){return{}},methods:{handleSelectionChange:function(t){this.$emit("handleSelectionChange",t)},operateClick:function(t,e,n){this.$emit("operateClick",t,e,n)},cellClick:function(t,e,n,a){this.$emit("cellClick",t,e,n,a)}}},r=n("2877"),i=Object(r.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{height:"100%",data:t.tableData},on:{"selection-change":t.handleSelectionChange,"cell-click":t.cellClick}},[t.hasSelection?n("el-table-column",{attrs:{type:"selection",width:"55"}}):t._e(),t.hasIndex?n("el-table-column",{attrs:{type:"index",label:"序号"}}):t._e(),t._l(t.tableStructure,function(e,a){return n("el-table-column",{key:a,attrs:{prop:e.prop,label:e.label,align:e.align||"center",sortable:e.sortable,fixed:e.fixed,width:e.width,"filter-placement":"bottom-end","show-overflow-tooltip":!e.popover},scopedSlots:t._u([{key:"default",fn:function(a){return[e.contain?n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},t._l(e.contain,function(r,i){return n("div",{key:i},[t.filterBtn(a.row,r,a.column,a.row[e.prop],a.$index)?n("el-button",{style:r.style,attrs:{type:r.type||"text",size:r.size||"mini"},on:{click:function(e){return t.operateClick(a.row,a.$index,r)}}},[t._v(t._s(r.label))]):t._e()],1)}),0):t._e(),e.contain||e.other||e.popover?t._e():n("div",[t._v("\n        "+t._s(t.formatter(a.row,a.column,a.row[e.prop],a.$index))+"\n      ")]),e.other?n("div",{staticStyle:{"font-size":"20px"}},[Boolean(a.row.vary)?n("i",{staticClass:"list-icon-arrow-up",staticStyle:{color:"#67C23A"}}):n("i",{staticClass:"list-icon-arrow-down",staticStyle:{color:"#F56C6C"}})]):t._e(),e.popover?n("el-popover",{attrs:{trigger:"hover",placement:"top",width:"500"}},[n("div",[t._v("\n          "+t._s(t.formatter(a.row,a.column,a.row[e.prop],a.$index))+"\n        ")]),n("div",{staticStyle:{overflow:"hidden","text-overflow":"ellipsis","-o-text-overflow":"ellipsis","white-space":"nowrap"},attrs:{slot:"reference"},slot:"reference"},[t._v("\n          "+t._s(t.formatter(a.row,a.column,a.row[e.prop],a.$index))+"\n        ")])]):t._e()]}}],null,!0)})})],2)},[],!1,null,null,null);e.a=i.exports},4336:function(t,e,n){"use strict";var a=n("ed93");n.n(a).a},"4dc6":function(t,e,n){"use strict";n.r(e);var a=(n("a481"),n("96cf"),n("3b8d")),r=n("0dbc"),i=n("38f2"),o=n("365c"),l=n("0f06").api,c={headers:{"Content-Type":"multipart/form-data"}},s=function(t){return o.a.get("".concat(l,"/antistop/get"),{params:t})},d=function(t){var e=new FormData;for(var n in t)e.append(n,t[n]);return o.a.post("".concat(l,"/antistop/insert"),e,c)},u=function(t){var e=new FormData;for(var n in t)e.append(n,t[n]);return o.a.post("".concat(l,"/antistop/update"),e,c)},p=function(t){var e=new FormData;for(var n in t)e.append("id",t[n].id);return o.a.post("".concat(l,"/antistop/delete"),e,c)},f={components:{sxDynamicInlineForm:r.a,sxMinTable:i.a},data:function(){return{tableStructure:[{prop:"name",label:"名称"},{prop:"g",label:"相关搜索数据",popover:!0},{prop:"q",label:"搜索框下拉搜索数据",popover:!0},{label:"操作",width:"100",contain:[{label:"编辑",style:"color: #E6A23C"},{label:"删除",style:"color: #F56C6C"}]}],tableData:[],tableLoading:!1,addAndEditStructure:{data:[{type:"input",model:"name",label:"名称:",placeholder:"请输入名称",rules:[{required:!0,message:"请输入网站名称",trigger:"change"}]}]},addAndEditData:{},addAndDelFlag:!0,addAndDelDialog:!1,selectionData:[],currentPage:1,pageSize:10,total:0}},created:function(){this.show()},methods:{show:function(){var t=Object(a.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.tableLoading=!0,t.next=3,s(Object.assign({},{page:this.currentPage}));case 3:if(e=t.sent,this.tableLoading=!1,e){t.next=7;break}return t.abrupt("return");case 7:this.tableData=e.data.data,this.total=e.data.count;case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),formatter:function(t,e){if(t[e.property]){if("CreateTime"===e.property)return new Date(1e3*parseInt(t[e.property])).toLocaleString().replace(/:\d{1,2}$/," ");if("Classify"===e.property){if(1===parseInt(t[e.property]))return"天眼查";if(2===parseInt(t[e.property]))return"企查查"}return t[e.property]}return""},handleSelectionChange:function(t){this.selectionData=t},operateClick:function(t,e,n){switch(n.label){case"编辑":this.editHandle(t,e,n);break;case"删除":this.delHandle(t)}},cellClick:function(t,e){"p_url"===e.property&&window.open(t.p_url)},addHandle:function(){this.addAndEditData={},this.addAndDelDialog=!0,this.addAndDelFlag=!0},editHandle:function(t,e,n){this.addAndEditData=Object.assign({},t),this.addAndDelDialog=!0,this.addAndDelFlag=!1},delHandle:function(t){var e=this;if(t&&(this.selectionData=[],this.selectionData.push(t)),!this.selectionData.length)return this.$message({type:"info",message:"未选择"});this.$confirm("此操作将删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(a.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e.selectionData);case 2:t.sent&&e.show();case 4:case"end":return t.stop()}},t)})))},handleCurrentChange:function(t){this.show()},dialogVisibleHandle:function(){var t=Object(a.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null,e=Object.assign({},this.addAndEditData,this.$refs.addAndEditForm.getData()),!this.addAndDelFlag){t.next=8;break}return t.next=5,d(e);case 5:t.t0=t.sent,t.next=11;break;case 8:return t.next=10,u(e);case 10:t.t0=t.sent;case 11:t.t0&&(this.show(),this.addAndDelFlag={},this.addAndDelDialog=!1);case 14:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},h=(n("4336"),n("2877")),g=Object(h.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"websiteListContainer"},[n("div",{staticClass:"websiteListContent"},[n("div",{staticClass:"otherOperate"},[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.addHandle}},[t._v("添加")]),n("el-button",{attrs:{size:"small"},on:{click:function(e){return t.delHandle(!1)}}},[t._v("批量删除")])],1),n("sx-min-table",{attrs:{loading:t.tableLoading,hasSelection:"","table-structure":t.tableStructure,"table-data":t.tableData,formatter:t.formatter},on:{cellClick:t.cellClick,handleSelectionChange:t.handleSelectionChange,operateClick:t.operateClick}})],1),n("div",{staticStyle:{"margin-top":"40px","text-align":"center"}},[n("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageSize,layout:"total, prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1),t.addAndDelDialog?n("el-dialog",{attrs:{center:"","close-on-click-modal":!1,width:"500px",visible:t.addAndDelDialog},on:{"update:visible":function(e){t.addAndDelDialog=e}}},[n("sx-dynamic-inline-form",{ref:"addAndEditForm",attrs:{wrap:"",size:"small",structure:t.addAndEditStructure},on:{onSubmit:t.dialogVisibleHandle},model:{value:t.addAndEditData,callback:function(e){t.addAndEditData=e},expression:"addAndEditData"}}),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:t.dialogVisibleHandle}},[t._v("确 定")]),n("el-button",{staticStyle:{"margin-left":"30px"},on:{click:function(e){t.addAndDelDialog=!1}}},[t._v("取 消")])],1)],1):t._e()],1)},[],!1,null,"15ccb413",null);e.default=g.exports},ed93:function(t,e,n){}}]);