
import React from "react";
import Index_header from "../components/Index_header.jsx";
import Index_nav from "../components/Index_nav.jsx";
import Index_banner from "../components/Index_banner.jsx";
import Index_kind from "../components/Index_kind.jsx";
import Index_box1 from "../components/Index_box1.jsx";
import Index_box2 from "../components/Index_box2.jsx";


export default class IndexPage extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>

                <Index_header />
                <Index_nav />
                <Index_banner />
                <Index_kind />
                <Index_box1 />
                <Index_box2 />

            </div>
        )
    }


}