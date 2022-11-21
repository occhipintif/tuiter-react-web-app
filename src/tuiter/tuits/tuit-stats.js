import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";
const TuitStats = (
    {
        tuit = {
            "_id": 123,
            "topic": "Space",
            "userName": "SpaceX",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "time": "2h",
            "image": "relativity.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-auto">{tuit.replies}</div>
                <div className="col-auto">{tuit.retuits}</div>
                <div className="col-auto">
                    Likes: {tuit.likes}
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        likes: tuit.likes + 1
                    }))} className="bi bi-heart-fill me-2 text-danger"></i>
                </div>
                <i className="col-auto bi bi-share"></i>
            </div>
        </li>
    );
};
export default TuitStats;