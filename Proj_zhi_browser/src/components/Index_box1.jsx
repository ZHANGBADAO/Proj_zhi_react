import React from "react";

export default class Index_box1 extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {

    }

    render() {
        return (

            <div id="box1">
                <h3>值得选</h3>
                <div className="box_t">
                    <div className="box_t_l"><img src="Proj_zhi_react/src/static/img/small/16.png"/></div>
                    <div className="box_t_r"><img src="Proj_zhi_react/src/static/img/small/17.png"/></div>
                </div>
                <div className="box_b">
                    <ul>
                        <li><img src="Proj_zhi_react/src/static/img/small/18.png"/></li>
                        <li><img src="Proj_zhi_react/src/static/img/small/19.png"/></li>
                        <li><img src="Proj_zhi_react/src/static/img/small/20.png"/></li>
                        <li><img src="Proj_zhi_react/src/static/img/small/21.png"/></li>
                    </ul>
                </div>
                <div className="ad">
                    <img src="Proj_zhi_react/src/static/img/small/22.png"/>
                </div>
            </div>
            
        )
    }


}