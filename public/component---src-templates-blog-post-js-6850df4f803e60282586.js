(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9eSz":function(e,t,a){"use strict";var r=a("mBgD");t.__esModule=!0,t.default=void 0;var i,n=r(a("GE+h")),l=r(a("Rz0W")),d=r(a("u0WH")),s=r(a("SM4Z")),o=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,r=m(t||a||[]);return r&&r.src},m=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=c(e),a=p(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,S=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&o.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var x=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+o+l+d+a+r+t+n+i+s+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=o.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,l=e.ariaHidden,d=o.default.createElement(V,(0,s.default)({ref:t,src:a},n,{ariaHidden:l}));return r.length>1?o.default.createElement("picture",null,i(r),d):d})),V=o.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,p=e.ariaHidden,m=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},m,{onLoad:l,onError:u,ref:t,loading:c,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));V.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var H=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=o.default.createRef(),a.placeholderRef=t.placeholderRef||o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),(a=p(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,d=void 0===l?{}:l,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,S=e.itemProp,w=e.loading,R=e.draggable,x=g||h;if(!x)return null;var H=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,P=(0,s.default)({opacity:H?1:0,transition:N?"opacity "+v+"ms":"none"},d),W="boolean"==typeof b?"lightgray":b,C={transitionDelay:v+"ms"},T=(0,s.default)({opacity:this.state.imgLoaded?0:1},N&&C,d,f),j={title:t,alt:this.state.isVisible?"":a,style:T,className:p,itemProp:S},k=this.state.isHydrated?m(x):x[0];if(g)return o.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:k.maxWidth?k.maxWidth+"px":null,maxHeight:k.maxHeight?k.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},o.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),W&&o.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:W,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&C)}),k.base64&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:k.base64,spreadProps:j,imageVariants:x,generateSources:I}),k.tracedSVG&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:k.tracedSVG,spreadProps:j,imageVariants:x,generateSources:L}),this.state.isVisible&&o.default.createElement("picture",null,E(x),o.default.createElement(V,{alt:a,title:t,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:R})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,s.default)({alt:a,title:t,loading:w},k,{imageVariants:x}))}}));if(h){var q=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},n);return"inherit"===n.display&&delete q.display,o.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},W&&o.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:W,width:k.width,opacity:this.state.imgLoaded?0:1,height:k.height},N&&C)}),k.base64&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:k.base64,spreadProps:j,imageVariants:x,generateSources:I}),k.tracedSVG&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:k.tracedSVG,spreadProps:j,imageVariants:x,generateSources:L}),this.state.isVisible&&o.default.createElement("picture",null,E(x),o.default.createElement(V,{alt:a,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:R})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,s.default)({alt:a,title:t,loading:w},k,{imageVariants:x}))}}))}return null},t}(o.default.Component);H.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),P=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function W(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");u.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}H.propTypes={resolutions:N,sizes:P,fixed:W(u.default.oneOfType([N,u.default.arrayOf(N)])),fluid:W(u.default.oneOfType([P,u.default.arrayOf(P)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var C=H;t.default=C},FyuP:function(e,t,a){},QmWP:function(e,t,a){},yZlL:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),l=a("9eSz"),d=a.n(l),s=a("4a3J"),o=(a("FyuP"),a("QmWP"),function(){var e,t=Object(n.useStaticQuery)("104267996").author,a=null==t||null===(e=t.avatar)||void 0===e?void 0:e.url;return i.a.createElement("div",{className:"bio"},a&&i.a.createElement("img",{alt:(null==t?void 0:t.firstName)||"",className:"bio-avatar",src:a}),(null==t?void 0:t.firstName)&&i.a.createElement("p",null," ",(null==t?void 0:t.description)||null," ",(null==t?void 0:t.twitter)&&i.a.createElement("a",{href:"https://twitter.com/"+((null==t?void 0:t.twitter)||"")},"You should follow them on Twitter")))}),u=a("Bl7J"),c=a("vrFN");t.default=function(e){var t,a,r,l,f,p,m=e.data,g=m.previous,h=m.next,b=m.post,v={fluid:null===(t=b.featuredImage)||void 0===t||null===(a=t.node)||void 0===a||null===(r=a.localFile)||void 0===r||null===(l=r.childImageSharp)||void 0===l?void 0:l.fluid,alt:(null===(f=b.featuredImage)||void 0===f||null===(p=f.node)||void 0===p?void 0:p.alt)||""};return i.a.createElement(u.a,null,i.a.createElement(c.a,{title:b.title,description:b.excerpt}),i.a.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},i.a.createElement("header",null,i.a.createElement("h1",{itemProp:"headline"},Object(s.a)(b.title)),i.a.createElement("p",null,b.date),(null==v?void 0:v.fluid)&&i.a.createElement(d.a,{fluid:v.fluid,alt:v.alt,style:{marginBottom:50}})),!!b.content&&i.a.createElement("section",{itemProp:"articleBody"},Object(s.a)(b.content)),i.a.createElement("hr",null),i.a.createElement("footer",null,i.a.createElement(o,null))),i.a.createElement("nav",{className:"blog-post-nav"},i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,g&&i.a.createElement(n.Link,{to:g.uri,rel:"prev"},"← ",Object(s.a)(g.title))),i.a.createElement("li",null,h&&i.a.createElement(n.Link,{to:h.uri,rel:"next"},Object(s.a)(h.title)," →")))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-6850df4f803e60282586.js.map