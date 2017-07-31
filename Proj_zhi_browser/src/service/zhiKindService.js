"use strict"
import callApi from "../utils/fetchApi";
import zhiCommon from "../constants/zhiCommon";


module.exports = {


    getMainBannerAd:function(cb){
        let url = zhiCommon.KINDURLLINK;
        fetch(url).then((response)=>{
            response.json().then((data)=>{
                cb(data.imgs);
            })
        })
    }

}