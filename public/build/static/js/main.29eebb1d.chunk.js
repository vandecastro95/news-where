(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(17),i=t.n(r),o=(t(81),t(82),t(107)),c=Object(o.a)({root:{background:"black",color:"white",display:"flex",alignContent:"center",justifyContent:"center",position:"sticky",top:"0",zIndex:"10",maxWidth:"70rem",margin:"0 auto"},header:{maxWidth:"60rem",background:"black",display:"flex"},headerTitle:{alignSelf:"flex-start",margin:"0",paddingRight:"1rem",lineHeight:"0",border:"none",borderRight:"white solid 1px"},appTitle:{textDecoration:"underline",paddingLeft:"1rem"}});function u(){var e=c();return n.a.createElement("div",{className:e.root},n.a.createElement("div",{className:e.header},n.a.createElement("div",{className:e.headerTitle},n.a.createElement("h4",{className:e.appTitle}," News, Where? "))))}var s=t(34),m=t(35),d=t(42),b=t(36),p=t(43),h=t(18),v=t(55),g=t(8),f=t(135),x=t(32),y=t.n(x),w=t(40),E=t(127),C=t(136),S=t(128),k=t(132),j=t(130),N=t(129),O=t(133),z=t(131),I=Object(E.a)({card:Object(h.a)({margin:"1rem",display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:350,textAlign:"left"},"@media (max-width: 480px)",{margin:".5rem"}),media:{minHeight:190,zIndex:"0"},title:{fontSize:"1rem",fontWeight:"fontWeightBold",margin:".5rem 0"},subtitle:{fontSize:".8rem",letterSpacing:".2px",color:""},footer:{background:"#232323",color:"white"},footerText:{textDecoration:"none",color:"white","&:hover":{textDecoration:"none",color:"#ff8a80"}}});function T(e){var a=I();return n.a.createElement(C.a,{className:a.card},n.a.createElement(S.a,null,e.urlToImage&&n.a.createElement(N.a,{className:a.media,image:e.urlToImage,title:e.title}),n.a.createElement(j.a,null,n.a.createElement(z.a,{gutterBottom:!0,className:a.title,variant:"h1",component:"p"},e.title),n.a.createElement(z.a,{variant:"body2",className:a.subtitle,color:"textSecondary",component:"p"},e.description))),n.a.createElement(k.a,{className:a.footer},n.a.createElement(O.a,{size:"small"},n.a.createElement("a",{className:a.footerText,href:e.url},"Learn More"))))}var A=t(63),W=t.n(A),H=function(e){var a=e.type,t=e.color;return n.a.createElement(W.a,{type:a,style:{margin:"0 auto"},color:t,height:100,width:100})},B=t(50),L=t(69),R=[{value:"ar",label:"Argentina"},{value:"au",label:"Australia"},{value:"at",label:"Austria"},{value:"be",label:"Belgium"},{value:"br",label:"Brazil"},{value:"bg",label:"Bulgaria"},{value:"ca",label:"Canada"},{value:"cn",label:"China"},{value:"co",label:"Colombia"},{value:"cu",label:"Cuba"},{value:"cz",label:"Czech Republic"},{value:"eg",label:"Egypt"},{value:"fr",label:"France"},{value:"de",label:"Germany"},{value:"gr",label:"Greece"},{value:"hk",label:"Hong Kong"},{value:"hu",label:"Hungary"},{value:"in",label:"India"},{value:"id",label:"Indonesia"},{value:"ie",label:"Ireland"},{value:"il",label:"Israel"},{value:"it",label:"Italy"},{value:"jp",label:"Japan"},{value:"lv",label:"Latvia"},{value:"lt",label:"Lithuania"},{value:"my",label:"Malaysia"},{value:"mx",label:"Mexico"},{value:"ma",label:"Morocco"},{value:"nl",label:"Neatherlands"},{value:"nz",label:"New Zealand"},{value:"ng",label:"Nigeria"},{value:"no",label:"Norway"},{value:"ph",label:"Philippines"},{value:"pl",label:"Poland"},{value:"pt",label:"Portugal"},{value:"ro",label:"Romania"},{value:"ru",label:"Russia"},{value:"sa",label:"Saudi Arabia"},{value:"rs",label:"Serbia"},{value:"sg",label:"Singapore"},{value:"sk",label:"Slovakia"},{value:"si",label:"Slovenia"},{value:"za",label:"South Africa"},{value:"kr",label:"South Korea"},{value:"se",label:"Sweden"},{value:"cd",label:"Switzerland"},{value:"tw",label:"Taiwan"},{value:"th",label:"Thailand"},{value:"tr",label:"Turkey"},{value:"ae",label:"UAE"},{value:"ua",label:"Ukraine"},{value:"gb",label:"United Kingdom"},{value:"us",label:"United States"},{value:"ve",label:"Venezuela"}],M={placeholder:function(e,a){return Object(B.a)({},e,{margin:"0 auto",width:"100%",fontSize:"37px",lineHeight:"36px",letterSpacing:"normal",color:"#484848",flex:"1",padding:"0 -6px",fontWeight:"bold",fontFamily:"Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif"})},singleValue:function(e,a){return Object(B.a)({},e,{margin:"0 auto",width:"100%",fontSize:"37px",lineHeight:"36px",letterSpacing:"normal",color:"#484848",flex:"1",padding:"0 -6px",fontWeight:"bold",fontFamily:"Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif"})},control:function(){return{display:"flex",alignItems:"center",border:0,height:"auto",background:"transparent","&:hover":{boxShadow:"none"}}},menu:function(){return{backgroundColor:"white",boxShadow:"1px 2px 6px #888888",position:"absolute",left:0,top:"calc(100% + 1px)",width:"100%",zIndex:2,alignItems:"center",maxHeight:"400px"}},menuList:function(){return{overflowY:"auto",maxHeight:"400px"}}},D=function(e){function a(){var e,t;Object(s.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(b.a)(a)).call.apply(e,[this].concat(n)))).state={selectedOption:null},t.handleChange=function(e){t.setState({selectedOption:e}),t.props.selectedCountry(e.value)},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.state.selectedOption;return n.a.createElement(L.a,{className:this.props.classes.root,styles:M,placeholder:"United States of America",classNamePrefix:"react-select",value:e,onChange:this.handleChange,options:R,inputProps:!0})}}]),a}(n.a.Component),F=Object(g.a)(function(e){return{root:Object(h.a)({maxWidth:"70rem",margin:".1rem auto",paddingTop:"1rem",textAlign:"center"},"@media (max-width:780px)",{maxWidth:"100%"})}})(D),P=t(134);function U(){var e=Object(v.a)(["\nquery countryName($country: String) {\n    articles(country: $country) {\n       author\n       title\n       description\n       url\n       urlToImage\n       publishedAt\n       content\n     }     \n }"]);return U=function(){return e},e}var q=y()(U()),J=function(e){function a(){var e,t;Object(s.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(b.a)(a)).call.apply(e,[this].concat(n)))).state={selectedCountry:"us"},t.handleChange=function(e){t.setState({selectedCountry:e})},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.state.selectedCountry;return n.a.createElement("div",{className:this.props.classes.root},n.a.createElement(F,{selectedCountry:this.handleChange}),n.a.createElement("div",null,n.a.createElement("br",null),n.a.createElement(P.a,null),n.a.createElement(w.b,{query:q,variables:{country:a}},function(a){var t=a.loading,l=a.error,r=a.data;if(t)return n.a.createElement("div",{p:3,style:{width:"100px",height:"100px",margin:"0 auto",padding:"10rem"}},n.a.createElement(H,{color:"black",type:"cylon"}));if(l)throw l;return r?n.a.createElement(f.a,{container:!0,spacing:0,className:e.props.classes.newsListContainer},r&&r.articles.map(function(a){return a.urlToImage&&n.a.createElement(f.a,{item:!0,xs:12,md:6,lg:4,className:e.props.classes.box,key:a.title},n.a.createElement(T,a))})):void 0})))}}]),a}(n.a.Component),K=Object(g.a)(function(e){return{root:Object(h.a)({background:"#fafafa",color:"black",maxWidth:"70rem",margin:"0 auto",marginTop:".3rem"},"@media (min-width: 480px)",{margin:"0 auto"}),newsListContainer:{width:"100%",display:"flex",flexDirection:"row",flexWrap:"wrap",alignContent:"flex-start",justifyContent:"flex-start",lineHeight:"0"},box:Object(h.a)({},"@media (max-width: 480px)",{margin:"0 auto"})}})(J),$=new(t(70).a)({uri:"/graphql"});var G=function(){return n.a.createElement(w.a,{client:$},n.a.createElement(u,null),n.a.createElement("div",{className:"App"},n.a.createElement(K,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},76:function(e,a,t){e.exports=t(106)},81:function(e,a,t){},82:function(e,a,t){}},[[76,1,2]]]);
//# sourceMappingURL=main.29eebb1d.chunk.js.map