import posts from "./posts.js";
import PostSummaryListItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return(`
    <ul class="list-group list-group-flush">
        ${
        posts.map(post => {
            return(PostSummaryListItem(post));
        }).join('')
    }
    </ul>
 `);
}
export default PostSummaryList;

