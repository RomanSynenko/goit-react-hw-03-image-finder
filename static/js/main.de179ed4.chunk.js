(this.webpackJsonplesson1=this.webpackJsonplesson1||[]).push([[0],{13:function(e,a,t){e.exports={ImageGalleryItem:"ImageGallery_ImageGalleryItem__1bKjf",ImageGalleryItem_image:"ImageGallery_ImageGalleryItem_image__NOchK"}},14:function(e,a,t){e.exports={Overlay:"Modal_Overlay__GdBBv",Modal:"Modal_Modal__3oRzX"}},25:function(e,a,t){e.exports={ImageGallery:"Gallery_ImageGallery__1GLsA"}},26:function(e,a,t){e.exports={Button:"Button_Button__Y_zoh"}},28:function(e,a,t){e.exports={Loader:"Loader_Loader__BIuQd"}},33:function(e,a,t){},76:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),o=t(9),c=t.n(o),s=(t(33),t(12)),l=t.n(s),i=t(24),u=t(15),h=t(4),m=t(5),d=t(7),g=t(6),p=t(8),b=t.n(p),f=t(0),j=function(e){Object(d.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(h.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={search:""},e.handleChange=function(a){e.setState({search:a.currentTarget.value})},e.handleSubmit=function(a){a.preventDefault(),e.props.onSubmitForm(e.state.search),e.setState({search:""})},e}return Object(m.a)(t,[{key:"render",value:function(){return Object(f.jsx)("header",{className:b.a.Searchbar,children:Object(f.jsxs)("form",{className:b.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(f.jsx)("button",{type:"submit",className:b.a.SearchForm_button,children:Object(f.jsx)("span",{className:b.a.SearchForm_button_label,children:"Search"})}),Object(f.jsx)("input",{className:b.a.SearchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.search,onChange:this.handleChange})]})})}}]),t}(r.Component),_=t(13),O=t.n(_),y=t.p+"static/media/defaultImage.a234994d.jpeg",v=function(e){var a=e.webformatURL,t=e.tags,r=e.largeImageURL,n=e.onOpenModal;return Object(f.jsx)("li",{className:O.a.ImageGalleryItem,children:Object(f.jsx)("img",{src:a,"data-src":r,alt:t,className:O.a.ImageGalleryItem_image,onClick:n})})};v.defaultProps={webformatURL:y,tag:"img"};var S=v,w=t(25),x=t.n(w),I=function(e){var a=e.images,t=e.onOpenModal;return Object(f.jsx)("ul",{className:x.a.ImageGallery,children:a.map((function(e){var a=e.id,r=e.webformatURL,n=e.largeImageURL,o=e.tags;return Object(f.jsx)(S,{webformatURL:r,tags:o,largeImageURL:n,onOpenModal:t},a)}))})},M=t(10),L=t.n(M);L.a.defaults.url="https://pixabay.com/api";var k=function(e){var a=e.search,t=void 0===a?"":a,r=e.page,n=void 0===r?1:r,o=e.pageSize,c=void 0===o?12:o;return L.a.get("".concat(L.a.defaults.url,"/?q=").concat(t,"&page=").concat(n,"&key=").concat("20020370-9a83858931624ea8d777f9f7a","&image_type=photo&orientation=horizontal&per_page=").concat(c)).then((function(e){return e.data.hits})).catch((function(){return[]}))},B=t(2),C=t.n(B),F=t(26),G=t.n(F),N=function(e){var a=e.loadMore;return Object(f.jsx)("button",{className:G.a.Button,type:"button",onClick:a,children:"Load more"})};N.prototype={loadMore:C.a.func.isRequired};var U=N,R=t(27),D=t.n(R),E=(t(74),t(28)),J=t.n(E),K=function(e){Object(d.a)(t,e);var a=Object(g.a)(t);function t(){return Object(h.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return Object(f.jsx)(D.a,{className:J.a.Loader,type:"Puff",color:"#3f51b5",height:100,width:100})}}]),t}(r.Component),z=t(14),A=t.n(z),T=document.querySelector("#modal-root"),q=function(e){Object(d.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(h.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).handleKeyDown=function(a){"Escape"===a.code&&e.props.onCloseModal()},e.handleBackdropClick=function(a){a.currentTarget===a.target&&e.props.onCloseModal()},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(f.jsx)("div",{className:A.a.Overlay,onClick:this.handleBackdropClick,children:Object(f.jsx)("div",{className:A.a.Modal,children:Object(f.jsx)("img",{src:this.props.largeImg})})}),T)}}]),t}(r.Component),P=function(e){Object(d.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(h.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={img:[],search:"",page:1,isLoader:!1,error:null,showButtonLoader:!1,showModal:!1,largeImg:""},e.searchImages=function(){var a=e.state,t=a.search,r=a.page,n=a.img,o={page:r,search:t};e.setState({isLoader:!0}),k(o).then((function(a){e.setState((function(e){return{img:[].concat(Object(u.a)(e.img),Object(u.a)(a)),page:e.page+1}})),n.length<12&&e.setState({showBtn:!1}),e.windowsScroll()})).catch((function(a){return e.setState({error:a})})).finally((function(){e.setState({isLoader:!1,showButtonLoader:!0})}))},e.onSearchChange=function(a){e.setState({search:a,page:1,img:[],error:null})},e.windowsScroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.toggleModal=function(){var a=Object(i.a)(l.a.mark((function a(t){var r;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.setState((function(e){return{showModal:!e.showModal}}));case 2:e.state.showModal&&(r=t.target.dataset.src,e.setState({largeImg:r}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(m.a)(t,[{key:"componentDidUpdate",value:function(e,a){a.search!==this.state.search&&this.searchImages()}},{key:"render",value:function(){var e=this.state,a=e.isLoader,t=e.showButtonLoader,r=e.error,n=e.showModal,o=e.largeImg;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(j,{onSubmitForm:this.onSearchChange}),r&&Object(f.jsx)("h1",{children:"Image don't search"}),Object(f.jsx)(I,{images:this.state.img,onOpenModal:this.toggleModal}),a&&Object(f.jsx)(K,{}),t&&Object(f.jsx)(U,{loadMore:this.searchImages}),n&&Object(f.jsx)(q,{onCloseModal:this.toggleModal,largeImg:o})]})}}]),t}(r.Component);t(75);c.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(P,{})}),document.getElementById("root"))},8:function(e,a,t){e.exports={Searchbar:"SearchBar_Searchbar__fm7yU",SearchForm:"SearchBar_SearchForm__17EbJ",SearchForm_button:"SearchBar_SearchForm_button__1JtyG",SearchForm_button_label:"SearchBar_SearchForm_button_label__pSmTZ",SearchForm_input:"SearchBar_SearchForm_input__34JIe"}}},[[76,1,2]]]);
//# sourceMappingURL=main.de179ed4.chunk.js.map