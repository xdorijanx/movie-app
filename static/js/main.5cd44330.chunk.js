(window["webpackJsonpmovie-app"]=window["webpackJsonpmovie-app"]||[]).push([[0],{65:function(e,t,a){e.exports=a(79)},70:function(e,t,a){},71:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(11),r=a.n(i),l=(a(70),a(71),a(14)),c=a(33),s=a(21),u=a(50),d=a(51),m=a(59),g=a(7),f=a(103),h=a(105),v=a(106),p=a(107),b=a(108),E=a(109),w=a(31),M=a(118),y=a(4),x=a(35),j=Object(y.a)((function(e){var t;return{card:(t={maxHeight:480,maxWidth:520,textAlign:"left",margin:e.spacing(10)+"px auto"},Object(g.a)(t,e.breakpoints.down("lg"),{maxWidth:420}),Object(g.a)(t,e.breakpoints.down("md"),{maxWidth:420}),Object(g.a)(t,e.breakpoints.down("sm"),{maxWidth:420}),Object(g.a)(t,e.breakpoints.down("xs"),{maxWidth:300}),t),cardMedia:{height:220,width:"93%",margin:"0 auto"},cardRoot:{overflow:"visible"},cardHeader:Object(g.a)({position:"relative",left:"91%",zIndex:1,bottom:36},e.breakpoints.down("xs"),{left:"86%"}),link:{textDecoration:"none",color:"inherit"}}}))((function(e){var t=e.name,a=e.releaseDate,i=e.rating,r=e.language,l=e.image,c=e.id,s=e.classes,u=e.fetchMovieDetails;return o.a.createElement(n.Fragment,null,o.a.createElement(f.a,{className:s.card,classes:{root:s.cardRoot}},o.a.createElement(x.b,{onClick:function(){return u(c)},className:s.link,to:{pathname:"/".concat(t),state:{name:t,image:l,releaseDate:a,rating:i,language:r}}},o.a.createElement(h.a,null,o.a.createElement(v.a,{avatar:o.a.createElement(p.a,{"aria-label":"rating",style:{backgroundColor:"#3f51b5"}},i),className:s.cardHeader}),o.a.createElement(b.a,{image:"https://image.tmdb.org/t/p/w500/".concat(l),className:s.cardMedia}),o.a.createElement(E.a,null,o.a.createElement(w.a,{component:"span"},o.a.createElement(M.a,{fontWeight:"fontWeightBold"},t," ( ",a.substring(0,4)," )")),o.a.createElement(w.a,{variant:"subtitle1"}," Language: ",r))))))})),k=a(110),_=Object(y.a)((function(e){return{container:{overflow:"hidden"}}}))((function(e){var t=e.data,a=e.classes,n=e.fetchMovieDetails;return o.a.createElement("div",null,o.a.createElement(k.a,{container:!0,justify:"space-around",className:a.container},t?t.map((function(e,t){return o.a.createElement(k.a,{key:e.original_title+t,item:!0,xs:12,md:6,lg:4},o.a.createElement(j,{fetchMovieDetails:n,name:e.original_title,releaseDate:e.release_date,rating:e.vote_average,language:e.original_language,image:e.backdrop_path,id:e.id}))})):o.a.createElement("h1",null,"Loading...")))})),C=a(111),S=a(112),O=a(113),D=a(56),N=a.n(D),B=Object(y.a)((function(e){return{buttonContainer:Object(g.a)({display:"flex",flexFlow:"row wrap",justifyContent:"space-around",position:"relative"},e.breakpoints.down("xs"),{justifyContent:"space-between"}),loadButton:{borderRadius:"50%",height:"70px",position:"absolute",left:"50%"},circuralProgress:{position:"absolute",zIndex:1,width:70,height:70,left:"50%"},shuffleButton:{borderRadius:"50%",height:"70px",width:"70px",backgroundColor:e.palette.primary.main}}}))((function(e){var t=e.classes,a=e.loadMoreMovies,n=e.loading,i=e.toggleModal;return o.a.createElement("div",{className:t.buttonContainer},o.a.createElement("span",null),o.a.createElement("div",null,o.a.createElement(C.a,{color:"primary",onClick:function(){return a()},variant:"contained",className:t.loadButton},"Load"),n&&o.a.createElement(S.a,{color:"secondary",size:70,className:t.circuralProgress})),o.a.createElement(O.a,{onClick:function(){return i(!0)},color:"secondary",className:t.shuffleButton},o.a.createElement(N.a,{fontSize:"large"})))})),G=a(119),I=a(114),W=a(81),A=a(80),R=a(115),T=a(124),z=a(122),P=a(123),U=a(116),H=a(120),F=Object(y.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:Object(g.a)({width:"30%",height:"50%"},e.breakpoints.down("sm"),{width:300,height:"70%"}),container:{width:"100%",height:"100%",display:"flex",flexFlow:"column nowrap"},formContainer:{display:"flex",justifyContent:"center",marginTop:"auto"},rollButton:{marginTop:"auto"},title:{padding:6}}}))((function(e){var t=e.open,a=e.toggleModal,n=e.classes,i=e.genre,r=e.handleGenreChange,l=e.searchByGenre;return o.a.createElement("div",null,o.a.createElement(G.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:n.modal,open:t,onClose:function(){return a(!1)},closeAfterTransition:!0,BackdropComponent:I.a,BackdropProps:{timeout:500}},o.a.createElement(W.a,{in:t},o.a.createElement(A.a,{className:n.paper,elevation:3},o.a.createElement("div",{className:n.container},o.a.createElement("div",null,o.a.createElement(w.a,{variant:"h4",className:n.title},"Movie Roulette")),o.a.createElement(R.a,null),o.a.createElement("div",{className:n.formContainer},o.a.createElement(T.a,{component:"fieldset",className:n.formControl},o.a.createElement(z.a,{component:"legend"},"Select Genre"),o.a.createElement(P.a,{"aria-label":"genre",name:"genre",value:i,onChange:r},o.a.createElement(U.a,{value:"action",control:o.a.createElement(H.a,null),label:"Action"}),o.a.createElement(U.a,{value:"adventure",control:o.a.createElement(H.a,null),label:"Adventure"}),o.a.createElement(U.a,{value:"animation",control:o.a.createElement(H.a,null),label:"Animation"}),o.a.createElement(U.a,{value:"sci-fi",control:o.a.createElement(H.a,null),label:"Sci-fi"})))),o.a.createElement(C.a,{className:n.rollButton,variant:"contained",onClick:l,color:"primary"},"Roll"))))))})),L=a(121),J=a(58),Y=a.n(J),$=Object(y.a)((function(e){return{card:{paddingTop:"1vh",minHeight:"100vh",width:"95vw",margin:"0 auto",boxShadow:"none",textAlign:"left"},cardMedia:Object(g.a)({height:"80vh",width:"95vw"},e.breakpoints.down("md"),{maxHeight:"281px",maxWidth:"500px",margin:"0 auto"}),rating_container:Object(g.a)({display:"flex",alignItems:"center",width:"50vw",justifyContent:"space-between"},e.breakpoints.down("sm"),{flexFlow:"column wrap",width:"100vw",fontSize:"x-large"}),movieTitle:Object(g.a)({},e.breakpoints.down("md"),{textAlign:"center"})}}))((function(e){var t=e.classes,a=e.movieDetails,n=e.rateMovie,i=e.guestSessionId,r=e.ratedMovies,l=0,c=null;return r&&a&&(c=r.filter((function(e){return e.id===a.id}))),o.a.createElement("div",null,null!==a?o.a.createElement(f.a,{className:t.card},o.a.createElement("div",null,o.a.createElement(w.a,{variant:"h4",gutterBottom:!0,className:t.movieTitle},a.name),o.a.createElement(b.a,{className:t.cardMedia,image:window.innerWidth>1e3?"https://image.tmdb.org/t/p/original/".concat(a.image):"https://image.tmdb.org/t/p/w500/".concat(a.image)})),o.a.createElement(E.a,null,o.a.createElement("div",{className:t.rating_container},o.a.createElement(w.a,null,o.a.createElement("strong",null,"Popularity : "),a.rating),o.a.createElement(L.a,{size:"medium",name:"hover-tooltip",max:10,value:a.rating,precision:.5,onChangeActive:function(e,t){l=t},onClick:function(){return n(a.id,i,l)}})),c&&c.length?o.a.createElement("div",{className:t.rating_container},o.a.createElement(w.a,null,o.a.createElement("strong",null,"Your rating : "),c[0].rating),o.a.createElement(L.a,{size:"medium",name:"hover-tooltip",max:10,value:c[0].rating,readOnly:!0})):null,o.a.createElement(w.a,null,o.a.createElement("strong",null,"Language: "),a.language),o.a.createElement(w.a,null,o.a.createElement("strong",null," Production Companies:")," ",Y()(a.productionCompanies.map((function(e){return e.name})))))):o.a.createElement(w.a,null,"No data available"))})),q=a(23),K=function(e){var t=e.data,a=e.loading,n=e.loadMoreMovies,i=e.toggleModal,r=e.open,l=e.genre,c=e.handleGenreChange,s=e.searchByGenre,u=e.fetchMovieDetails,d=e.movieDetails,m=e.rateMovie,g=e.guestSessionId,f=e.ratedMovies;return o.a.createElement("div",null,o.a.createElement(x.a,null,o.a.createElement(q.c,null,o.a.createElement(q.a,{exact:!0,path:"/",render:function(){return o.a.createElement("div",null,o.a.createElement(_,{data:t,fetchMovieDetails:u}),o.a.createElement(B,{loadMoreMovies:n,loading:a,toggleModal:i}),o.a.createElement(F,{open:r,toggleModal:i,genre:l,handleGenreChange:c,searchByGenre:s}))}}),o.a.createElement(q.a,{exact:!0,path:"/:moviename",render:function(e){return o.a.createElement($,Object.assign({},e,{movieDetails:d,rateMovie:m,guestSessionId:g,ratedMovies:f}))}}))))},Q=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={guestSessionId:null,moviesData:null,movieDetails:null,ratedMovies:null,loading:!0,page:1,modalOpen:!1,randomMovies:!1,genre:"action",allGenre:{action:28,adventure:12,animation:16,comedy:35,crime:80,documentary:99,"sci-fi":878,thriller:53}},a.fetchMoreMovies=function(e){if(!a.state.randomMovies)return function(){fetch("https://api.themoviedb.org/3/movie/popular?api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3&language=en-US&page=".concat(a.state.page)).then((function(e){return e.json()})).then((function(t){return a.setState({moviesData:e.concat(t.results),loading:!1})}))};a.fetchByGenre(e)},a.loadMoreMovies=function(){var e=Object(l.a)(a.state.moviesData);a.setState((function(e){return{page:e.page+1,loading:!0}}),a.fetchMoreMovies(e))},a.toggleModal=function(e){a.setState({modalOpen:e})},a.handleGenreChange=function(e){a.setState({genre:e.target.value})},a.fetchByGenre=function(e){Object(l.a)(a.state.genre);if(void 0===e)return function(){fetch("https://api.themoviedb.org/3/discover/movie?api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3&language=en-US&include_adult=false&include_video=false&page=".concat(a.state.page,"&with_genres=").concat(a.state.allGenre[a.state.genre])).then((function(e){return e.json()})).then((function(e){return a.setState({moviesData:e.results,loading:!1,modalOpen:!1})}))};fetch("https://api.themoviedb.org/3/discover/movie?api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3&language=en-US&include_adult=false&include_video=false&page=".concat(a.state.page,"&with_genres=").concat(a.state.allGenre[a.state.genre])).then((function(e){return e.json()})).then((function(t){return a.setState({moviesData:e.concat(t.results),loading:!1})}))},a.searchByGenre=function(){a.setState({page:Math.floor(499*Math.random()+1),loading:!0,randomMovies:!0},a.fetchByGenre())},a.fetchMovieDetails=function(e){fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3&language=en-US")).then((function(e){return e.json()})).then((function(e){return a.setState({movieDetails:{name:e.original_title,image:e.backdrop_path,rating:e.vote_average,language:e.original_language,productionCompanies:e.production_companies,overview:e.overview,id:e.id}})}))},a.rateMovie=function(e,t,n){fetch("https://api.themoviedb.org/3/movie/".concat(e,"/rating?guest_session_id=").concat(t,"&api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3"),{method:"POST",body:JSON.stringify({value:n}),headers:{"Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()})).then((function(e){return a.fetchRatedMovies(t)}))},a.fetchRatedMovies=function(e){fetch("https://api.themoviedb.org/3/guest_session/".concat(e,"/rated/movies?api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3&language=en-US&sort_by=created_at.asc")).then((function(e){return e.json()})).then((function(e){return a.setState({ratedMovies:e.results})}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.themoviedb.org/3/movie/popular?api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3&language=en-US&page=".concat(this.state.page)).then((function(e){return e.json()})).then((function(t){return e.setState({moviesData:t.results,loading:!1},(function(){fetch("https://api.themoviedb.org/3/authentication/guest_session/new?api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3").then((function(e){return e.json()})).then((function(t){e.setState({guestSessionId:t.guest_session_id})}))}))}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(K,{handleGenreChange:this.handleGenreChange,genre:this.state.genre,data:this.state.moviesData,loading:this.state.loading,loadMoreMovies:this.loadMoreMovies,toggleModal:this.toggleModal,open:this.state.modalOpen,searchByGenre:this.searchByGenre,movieDetails:this.state.movieDetails,fetchMovieDetails:this.fetchMovieDetails,rateMovie:this.rateMovie,guestSessionId:this.state.guestSessionId,ratedMovies:this.state.ratedMovies}))}}]),t}(n.Component);var V=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(Q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[65,1,2]]]);
//# sourceMappingURL=main.5cd44330.chunk.js.map