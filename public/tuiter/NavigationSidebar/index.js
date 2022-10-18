const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
     <a class="list-group-item" href="/">
       <div class="row d-flex justify-content-center">
            <i class="col-1 fa fa-home d-flex justify-content-center align-items-center"></i>
            <div class="col-9 d-none d-lg-block">Home</div></div></a>
     <a class="list-group-item" href="/">
        <div class="row d-flex justify-content-center">
            <i class="col-1 fa fa-hashtag d-flex justify-content-center align-items-center"></i>
            <div class="col-9 d-none d-lg-block">Explore</div></div></a>
     <a class="list-group-item" href="/">
        <div class="row d-flex justify-content-center">
                        <i class="col-1 fa fa-bell d-flex justify-content-center align-items-center"></i>
                        <div class="col-9 d-none d-lg-block">Notifications</div></div>
            </a>
     <a class="list-group-item" href="/">
        <div class="row d-flex justify-content-center">
                        <i class="col-1 fa fa-envelope d-flex justify-content-center align-items-center"></i>
                        <div class="col-9 d-none d-lg-block">Messages</div></div>
            </a>
     <a class="list-group-item" href="/">
        <div class="row d-flex justify-content-center">
                        <i class="col-1 fa fa-bookmark d-flex justify-content-center align-items-center"></i>
                        <div class="col-9 d-none d-lg-block">Bookmarks</div></div>
            </a>
     <a class="list-group-item" href="/">
        <div class="row d-flex justify-content-center">
                        <i class="col-1 fa fa-list d-flex justify-content-center align-items-center"></i>
                        <div class="col-9 d-none d-lg-block">Lists</div></div>
            </a>
     <a class="list-group-item" href="/">
        <div class="row d-flex justify-content-center">
                        <i class="col-1 fa fa-user d-flex justify-content-center align-items-center"></i>
                        <div class="col-9 d-none d-lg-block">Profile</div></div>
            </a>
     <a class="list-group-item" href="/">
        <div class="row d-flex justify-content-center align-items-center">
                        <span class="col-1 fa-stack d-flex justify-content-center align-items-center">
                        <i class="fa fa-circle fa-stack-1x"></i>
                        <i class="fa-solid fa-ellipsis fa-stack-1x fa-inverse"></i>
                    </span>
                        <div class="col-9 d-none d-lg-block">More</div></div>
            </a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
   </div>
   <div class="d-grid mt-2">
     <a href="tuit.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;