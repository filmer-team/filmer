import React, {Component} from 'react';
import FTagList from "./FTagList";

import RsrcIconStar from "../resources/icon_star.svg"
import RsrcIconCheck from "../resources/icon_check.svg"

class FMovieLine extends Component
{

    render ()
    {
        return (
            <div className="fmovieline m-0 p-0">
                <hr class="m-0 my-md-2 my-3"/>
                <div className="d-xxl-flex align-items-center justify-content-between">
                    <div class="me-auto ffs-2 ffw-2 mb-md-2">{this.props.name}</div>
                    <div class="d-sm-flex justify-content-between">
                        <div class="justify-content-left my-3 my-sm-0">
                            <FTagList tags={this.props.tags}/>
                        </div>
                        <div class="d-flex">
                            <div class="d-flex align-items-center me-3">
                                <img src={RsrcIconStar} width="24px" class="me-2" alt=""/>
                                {this.props.score}/10
                            </div>
                            <img src={RsrcIconCheck} width="24px" class="me-2" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FMovieLine;