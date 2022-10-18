const PostSummaryListItem = (post) => {
    return(`
   <li className="list-group-item">
    <div className="row">
        <p className="fw-bold col">
            <span className="text-muted fw-normal">${post.topic}</span>
            <br>${post.userName} 
            <i className="fa-solid fa-circle-check"></i><span className="text-muted fw-normal"> - ${post.time}</span>
            <br>${post.title}</p>
        <div className="col d-flex justify-content-end align-items-center">
            <img src=${post.image}
                 className="rounded"
                 style="width:110px;"></div>
    </div>
</li>
 `);
}
export default PostSummaryListItem;