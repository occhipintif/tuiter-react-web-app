import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="col">
                <div class="row">
                    <div class="col-9">
                        <div class="row">
                            <span class="col-1 d-flex flex-nowrap position-absolute"><i class="fa fa-search"></i></span>
                            <input type="text" class="d-flex flex-nowrap form-control rounded-pill col-9" placeholder="        Search Twitter">
                        </div>
                    </div>
                <div class="col d-flex justify-content-end align-items-center"><i class="fa fa-gear fa-2x" style="color: rgb(29,161,242)"></i></div>
            </div>
           <ul class="nav nav-tabs m-2">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-none d-md-block" href="#">Entertainment</a>
                </li>
            </ul>
           <div class="card" style="width: 100%;">
                <img src="../../images/spacex.jpg"
                     class="card-img-top" alt="...">
                ${PostSummaryList()}
           </div>
           </div>
    `);
}
export default ExploreComponent;
