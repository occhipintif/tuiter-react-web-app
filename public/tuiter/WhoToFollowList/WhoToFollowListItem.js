const WhoToFollowListItem = (who) => {
    return(`
   <li class="list-group-item">
                    <div class="row">
                        <div class="col-2 d-flex justify-content-start align-items-center">
                            <img src=${who.avatarIcon}
                                 class="rounded-circle"
                                 style="width:50px;"></div>
                        <span class="col-5 fw-bold d-flex justify-content-start text-nowrap flex-nowrap"><p>${who.userName}
                            <i class="fa-solid fa-circle-check"></i>
                            <br><span class="fw-normal">@${who.handle}</span></p></span>
                        <div class="col d-flex justify-content-end align-items-center flex-nowrap">
                            <button class="btn btn-primary rounded-pill d-flex justify-content-start">
                                Follow
                            </button>
                        </div>
                    </div></li>
 `);
}
export default WhoToFollowListItem;