import React from "react";
import {BrowserRouter as Router , Route, Link} from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";


export default class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            // <IndexPage />

            <Router>
                <div>
                    <Route exact path="/" component={IndexPage} />

                    <footer>
                        <ul>
                            <li><Link to="/">
                                    <img src="../src/static/img/small/29.png" alt="" />
                                    <p>首页</p>
                                </Link></li>
                            <li><a href="">
                                    <img src="../src/static/img/small/30.png" alt="" />
                                    <p>好价</p>
                                </a></li>
                            <li><a href="">
                                    <img src="../src/static/img/small/31.png" alt="" />
                                    <p>好物</p>
                                </a></li>
                            <li><a href="">
                                    <img src="../src/static/img/small/32.png" alt="" />
                                    <p>好文</p>
                                </a></li>
                            <li><a href="">
                                    <img src="../src/static/img/small/33.png" alt="" />
                                    <p>我的</p>
                                </a></li>
                        </ul>
                    </footer>
                    
                    {/* <section id="classify">
                        <ul>
                            <li><Link to="/"><img src="src/static/images/t1.png" alt="首页" /></Link></li>
                            <li><a href="category.html"><img src="src/static/images/t2.png" alt="分类" /></a></li>
                            <li><a href="jingxuan.html"><img src="src/static/images/t3.png" alt="发现" /></a></li>
                            <li><a href="ShoppingCart.html"><img src="src/static/images/t4.png" alt="购物车" /></a></li>
                            <li><a href="myCart.html"><img src="src/static/images/t5.png" alt="我的" /></a></li>
                        </ul>
                    </section> */}
                </div>
            </Router>
            
        )
    }


}