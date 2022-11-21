import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";
import {createTuitThunk, deleteTuitThunk} from "../../services/tuits-thunks";
import React from "react";

const TuitItem = (
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
const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
}
const createTuitHandler = (id) => {
    dispatch(createTuitThunk(id));
}
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-auto">
                    <img width={50}
                         className="float-end rounded-circle"
                         src={`/images/${tuit.image}`}/>
                </div>
                <div className="col-auto">{tuit.userName}</div>
                <div className="col-auto">{tuit.handle}</div>
                <div className="col-auto">{tuit.time}</div>
                <div className="col-10">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                </div>
                <div>{tuit.tuit}</div>
            </div>
            <TuitStats/>
        </li>
    );
};
export default TuitItem;