(this.webpackJsonp01_spa=this.webpackJsonp01_spa||[]).push([[3],{295:function(e,t,a){e.exports={profile_block:"profileInfo_profile_block__3uLBK",photo:"profileInfo_photo__rDY5z",name:"profileInfo_name__3TJT-",name_input:"profileInfo_name_input__3hniE",contacts:"profileInfo_contacts__3fDYR",status:"profileInfo_status__3cswA",look_job:"profileInfo_look_job__3MuFI",inputPhoto:"profileInfo_inputPhoto__yZc-o",editBtn:"profileInfo_editBtn__317ju"}},296:function(e,t,a){e.exports={myPosts:"myPosts_myPosts__3aNwc",newPost:"myPosts_newPost__3Bzbq",newPost__button:"myPosts_newPost__button__ImRPF",posts:"myPosts_posts__2xQuF"}},297:function(e,t,a){},298:function(e,t,a){e.exports={post:"post_post__3xCi7",post_text:"post_post_text__3-yHt"}},299:function(e,t,a){"use strict";a.r(t);var n=a(29),o=a(30),s=a(32),r=a(31),l=a(0),c=a.n(l),i=(a(297),a(98)),u=a(295),m=a.n(u),p=a(96),f=a.n(p),d=a(60),E=function(e){var t=Object(l.useState)(!1),a=Object(i.a)(t,2),n=a[0],o=a[1],s=Object(l.useState)(e.status),r=Object(i.a)(s,2),u=r[0],p=r[1];Object(l.useEffect)((function(){p(e.status)}),[e.status]);return c.a.createElement("div",{className:m.a.status},c.a.createElement("b",null,"Status:"),!n&&c.a.createElement("div",null,e.isOwner?c.a.createElement("span",{onDoubleClick:function(){o(!0)}}," ",e.status||"---"," "):c.a.createElement("span",null," ",e.status||"---"," ")),n&&c.a.createElement("div",null,c.a.createElement("input",{autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(u)},value:u,onChange:function(e){p(e.currentTarget.value)}})))},b=a(130),_=a(49),h=a(50),v=a(38),P=a.n(v),g=function(e){var t=e.profile,a=e.status,n=e.updateStatus,o=e.isOwner,s=(e.onEditMode,e.onMainPhotoSelected),r=e.handleSubmit,l=e.error;Object(h.a)(50);return c.a.createElement("form",{className:m.a.profile_block,onSubmit:r},c.a.createElement("div",{className:m.a.photo},c.a.createElement("img",{src:t.photos.large?t.photos.large:f.a,alt:"profile"}),c.a.createElement("div",{className:m.a.inputPhoto}," ",o&&c.a.createElement("input",{type:"file",onChange:s}))),c.a.createElement(b.a,{component:_.a,type:"text",name:"fullName",className:m.a.name_input,placeholder:"enter fullname"}),c.a.createElement(E,{profile:t,status:a,updateStatus:n,isOwner:o}),c.a.createElement("div",{className:m.a.look_job},c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job description:")),c.a.createElement("div",null,c.a.createElement(b.a,{component:_.a,type:"checkbox",name:"lookingForAJob"}),c.a.createElement(b.a,{component:_.b,type:"text",name:"lookingForAJobDescription",placeholder:"enter looking For A Job Description"}),c.a.createElement(b.a,{component:_.b,type:"text",name:"aboutMe",placeholder:"enter aboutMe"}))),c.a.createElement("div",{className:m.a.contacts},c.a.createElement("div",null,c.a.createElement("b",null,"Contacts:")),Object.keys(t.contacts).map((function(e){return c.a.createElement(S,{key:e,contactKey:e,contactValue:c.a.createElement(b.a,{component:_.a,type:"text",name:"contacts."+e,placeholder:e})})}))),o&&c.a.createElement("div",{className:m.a.editBtn},c.a.createElement("button",null,"save profile")),l&&c.a.createElement("div",{className:P.a.formSummaryError},l))},y=a(131),O=function(e){var t=e.profile,a=e.status,n=e.updateStatus,o=e.isOwner,s=e.onEditMode,r=e.onMainPhotoSelected;return c.a.createElement("div",{className:m.a.profile_block},c.a.createElement("div",{className:m.a.photo},c.a.createElement("img",{src:t.photos.large?t.photos.large:f.a,alt:"profile"}),c.a.createElement("div",{className:m.a.inputPhoto}," ",o&&c.a.createElement("input",{type:"file",onChange:r}))),c.a.createElement("div",{className:m.a.name},t.fullName),c.a.createElement(E,{profile:t,status:a,updateStatus:n,isOwner:o}),c.a.createElement("div",{className:m.a.look_job},c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job description:")),c.a.createElement("div",null,t.lookingForAJob?t.lookingForAJobDescription:"No")),c.a.createElement("div",{className:m.a.contacts},c.a.createElement("div",null,c.a.createElement("b",null,"Contacts:")),Object.keys(t.contacts).map((function(e){return c.a.createElement(S,{key:e,contactKey:e,contactValue:t.contacts[e]})}))),o&&c.a.createElement("div",{className:m.a.editBtn},c.a.createElement("button",{onClick:s},"edit profile")))},S=function(e){var t=e.contactKey,a=e.contactValue;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,t," : ",a))},k=Object(y.a)({form:"profileData"})(g),j=function(e){var t=e.profile,a=e.status,n=e.updateStatus,o=e.isOwner,s=e.savePhoto,r=e.saveProfile,u=Object(l.useState)(!1),m=Object(i.a)(u,2),p=m[0],f=m[1],E=function(){f(!p)},b=function(e){e.target.files.length&&s(e.target.files[0])};if(!t)return c.a.createElement(d.a,null);return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("img",{src:"https://static.ngs.ru/news/99/preview/4714ecaebbaf4a7f76cf322e68baad5a149080807_824_549_c.png",alt:"MyProfile"})),p?c.a.createElement(k,{initialValues:t,profile:t,status:a,updateStatus:n,isOwner:o,onEditMode:E,onMainPhotoSelected:b,onSubmit:function(e){r(e).then((function(){f(!1)}))}}):c.a.createElement(O,{profile:t,status:a,updateStatus:n,isOwner:o,onEditMode:E,onMainPhotoSelected:b}))},w=a(97),N=a(296),I=a.n(N),x=a(298),M=a.n(x),A=function(e){return c.a.createElement("div",{className:M.a.post},c.a.createElement("img",{src:"https://www.meme-arsenal.com/memes/bf0296e8bfa92558d0ca180289194068.jpg",alt:"avatar"}),c.a.createElement("span",{className:M.a.post_text},e.message," "),c.a.createElement("div",null,"Liked ",e.liked))},D=Object(h.a)(10),F=function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit,className:I.a.newPost},c.a.createElement("div",null,c.a.createElement(b.a,{component:_.b,type:"text",placeholder:"new post",name:"newPostBody",validate:[h.b,D]})),c.a.createElement("div",null,c.a.createElement("button",{className:I.a.newPost__button,type:"submit"},"Add post")))},B=a(26),C=function(e){var t=e.postData.map((function(e){return c.a.createElement(A,{key:e.id,id:e.id,message:e.message,liked:e.liked})})),a=Object(y.a)({form:"addPost"})(F);return c.a.createElement("div",{className:I.a.myPosts},c.a.createElement("h3",null,"My posts:"),c.a.createElement(a,{onSubmit:function(t){e.addPost(t.newPostBody),Object(B.a)()}}),c.a.createElement("div",{className:I.a.posts},t))},J=a(11),U=Object(J.b)((function(e){return{postData:e.profilePage.postData}}),{addPost:w.a})(C),z=function(e){var t=e.isOwner,a=e.profile,n=e.status,o=e.updateStatus,s=e.savePhoto,r=e.saveProfile;return c.a.createElement("div",null,c.a.createElement(j,{isOwner:t,profile:a,status:n,updateStatus:o,savePhoto:s,saveProfile:r}),c.a.createElement(U,null))},K=a(10),L=a(9),V=(a(41),function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var o=arguments.length,s=new Array(o),r=0;r<o;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).refreshProfileAndStatus=function(){var t=e.props.match.params.userId?e.props.match.params.userId:e.props.authorizedUserId;e.props.setUserProfile(t),e.props.getUserStatus(t)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.refreshProfileAndStatus()}},{key:"componentDidUpdate",value:function(e,t){e.match.params.userId!==this.props.match.params.userId&&this.refreshProfileAndStatus()}},{key:"render",value:function(){return c.a.createElement(z,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),a}(l.Component));t.default=Object(L.d)(Object(J.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{addPost:w.a,setUserProfile:w.f,getUserStatus:w.c,updateStatus:w.g,savePhoto:w.d,saveProfile:w.e}),K.g)(V)}}]);
//# sourceMappingURL=3.2baad37e.chunk.js.map