import React from "react";
import zhiKindService from "../service/zhiKindService";

export default class Index_kind extends React.Component {
    constructor() {
        super();
        this.state = {
            adImgs: []
        }
        this.initData = this.initData.bind(this);
        this.initData();
    }

    initData() {
        zhiKindService.getMainBannerAd((data) => {
            this.setState({ adImgs: data })

        });
    }

    render() {
        return (
            <div id="kind">
				<ul className="ul_1">

					{this.state.adImgs.map((item, index) => {
						return (
							<li key={index} >
								<a href="">
									<img src={item.imgUrl} />
									<p>白菜专区</p>
								</a>
							</li>
						)
					})}


				</ul>
				<dl>
					<dt></dt>
					<dd>
						<ul>
							<li>【新品】到站秀：夏普广视S60 4K液晶电视</li>
							<li>【新品】到站秀：夏普广视S60 4K液晶电视</li>
							<li>【新品】到站秀：夏普广视S60 4K液晶电视</li>
						</ul>
					</dd>
				</dl>
			</div>

        )
    }


}





