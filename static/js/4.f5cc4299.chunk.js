(this.webpackJsonp01_spa=this.webpackJsonp01_spa||[]).push([[4],{294:function(e,a,s){e.exports={dialogs:"dialogs_dialogs__2B_-5",dialog_items:"dialogs_dialog_items__2rDHt",item:"dialogs_item__36gje",active:"dialogs_active__25GoT",item_link:"dialogs_item_link__1Xcxc",dialog_messages:"dialogs_dialog_messages__135AZ",add_new_message:"dialogs_add_new_message__1ha54",message:"dialogs_message__1Id2-",add_new_message__block_textarea:"dialogs_add_new_message__block_textarea__2W-Ox",add_new_message__textarea:"dialogs_add_new_message__textarea__2uZMV",add_new_message__block_btn:"dialogs_add_new_message__block_btn__3gLWV",add_new_message__button:"dialogs_add_new_message__button__3eToU"}},300:function(e,a,s){"use strict";s.r(a);var t=s(129),_=s(0),n=s.n(_),m=s(294),d=s.n(m),i=function(e){return n.a.createElement("div",{className:d.a.message},e.message)},l=s(12),g=function(e){return n.a.createElement("div",{className:d.a.item},n.a.createElement(l.b,{to:"/dialogs/"+e.id},n.a.createElement("div",{className:d.a.item_link},n.a.createElement("img",{src:e.img,alt:e.name}),n.a.createElement("div",null,e.name))))},o=s(130),c=s(50),r=s(49),u=Object(c.a)(50),b=function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit,className:d.a.add_new_message},n.a.createElement("div",{className:d.a.add_new_message__block_textarea},n.a.createElement(o.a,{component:r.b,type:"text",name:"messageBody",className:d.a.add_new_message__textarea,placeholder:"enter new message",validate:[c.b,u]})),n.a.createElement("div",{className:d.a.add_new_message__block_btn},n.a.createElement("button",{type:"submit",className:d.a.add_new_message__button}," Add message")))},w=s(131),E=Object(w.a)({form:"login"})(b),f=function(e){var a=e.dialogsData.map((function(e){return n.a.createElement(g,{name:e.name,id:e.id,img:e.img})})),s=e.messagesData.map((function(e){return n.a.createElement(i,{message:e.message,id:e.id})}));return n.a.createElement("div",{className:d.a.dialogs},n.a.createElement("div",{className:d.a.dialog_items},a),n.a.createElement("div",{className:d.a.dialog_messages},s),n.a.createElement(E,{onSubmit:function(a){e.SendMessage(a.messageBody)}}))},v=s(11),p=(s(41),s(9));a.default=Object(p.d)(Object(v.b)((function(e){return{dialogsData:e.dialogsPage.dialogsData,messagesData:e.dialogsPage.messagesData}}),(function(e){return{SendMessage:function(a){var s=Object(t.b)(a);e(s)}}})))(f)}}]);
//# sourceMappingURL=4.f5cc4299.chunk.js.map