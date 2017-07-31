import React from "react";
import "../static/js/swiper.min";
import zhiBannerService from "../service/zhiBannerService";


export default class Index_banner extends React.Component {
    constructor() {
        super();
        this.state = {
            adImgs: []
        }
        this.initData = this.initData.bind(this);
        this.initData();
    }

    initData() {
        zhiBannerService.getMainBannerAd((data) => {
            this.setState({ adImgs: data })

        });
    }

    componentDidUpdate() {
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            autoplay: 2000,
            speed: 500,
            // 如果需要分页器
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplayDisableOnInteraction: false,

        });
    }

    render() {
        return (
            <div id="banner">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {this.state.adImgs.map((item, index) => {
                            return (<div key={index} className="swiper-slide">
                                <img src={item.imgUrl} />
                            </div>)
                        })}

                        {/* <div className="swiper-slide">
                            <img src="../src/static/img/small/595af3557f78a6889.jpg" />
                        </div>
                        <div className="swiper-slide">
                            <img src="../src/static/img/small/595af04368af27702.jpg" />
                        </div>
                        <div className="swiper-slide">
                            <img src="../src/static/img/small/595b01e76018a344.jpg" />
                        </div> */}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }


}