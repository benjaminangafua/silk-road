<template>
    <div id="prty-grd">
        <div class="grid-container">
            <div class="sidebar">
                <div class="sidebar-label">

                    <div>
                        <div>Search</div><br>
                        <div class="search"><input type="search" placeholder="Search"></div>
                    </div>
                    <br>
                    <div>
                        <div>Location</div>
                        <input type="text" placeholder="Most Recent" name="" id="">
                        <select name="" id=""> 
                            <option value=""></option>
                            <option value="">1</option>
                            <option value="">2</option>
                        </select>
                    </div>
                    <br>
                    <div>
                        <div>Category</div>
                        <input type="text" placeholder="Most Recent" name="" id="">

                        <select name="" id="">
                            <option value=""></option>
                            <option value="">1</option>
                            <option value="">2</option>
                        </select>
                        <br>
                    </div>
                    <br>
                    <div>
                        <div>No. of Bedrooms</div>
                        <input type="text" placeholder="Most Recent" name="" id="">

                        <select name="" id=""> 
                            <option value=""></option>
                            <option value="">1</option>
                            <option value="">2</option>
                        </select>
                    </div>
                    <br>
                    <div>
                        <div>No. of Bathrooms</div>
                        <input type="text" placeholder="Most Recent" name="" id="">
                        <select name="" id="">
                            <option value=""></option>
                            <option value="">1</option>
                            <option value="">2</option>
                        </select>
                    </div>
                    <br>
                    <div class="grd-range">
                        <label class="grd-price" for="Price">Price: $<span id="val-less">00</span>.00 - $<span id="val">10,000</span>.00</label> <br>
                        <input type="range" class="input-rng" min="0" max="10000" value="5000" name="" id="">
                    </div>
                    <div class="side-btn">Done</div>

                </div>
            </div>
            <div class="main-content">
                <div class="content-nav">
                    <div class="nav-txt">
                        <div class="active">All</div>
                        <div>Recent</div>
                        <div>Sale</div>
                    </div>
                    <div class="nav-icon">
                        <div class="grd-ls">
                            <div>VIEW</div>
                            <div><router-link to="/property-list"><i class="fas fa-bars"></i>LIST</router-link></div>
                            <div>
                              <router-link to="/property-grid"> <i class="fas fa-th"></i>GRID </router-link>
                            </div>
                        </div>
                        <div class="srch-filter">
                            <div class="srt">Sort by</div>
                            <div class="srt">
                                <input type="text" placeholder="Most Recent">
                                <select name="" id=""> 
                                    <option value=""></option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-grids">
                    <div class="content-grid">
                        <div class="carts">
                            <div class="img"><img src="../assets/images/building1.jpg" alt=""></div>
                            <div class="cart-txt">
                                <div class="price"><strong>$500.00/</strong> month</div>

                                <div class="sm-t bed-room">3 Bedroom Townhouse</div>
                                <div class="sm-t"><img src="" alt="">45 Circle Dr, Monrovia, Liberia</div>
                                <div class="sm-t">Peter Wayne</div>
                            </div>
                            <div class="icons-layout">
                                <div class="icon">1</div>
                                <div class="icon">2</div>
                                <div class="icon">3</div>
                                <div class="icon">4</div>
                            </div>
                        </div>
                        <div class="carts">
                            <div class="img"><img src="../assets/images/building2.jpg" alt=""></div>
                            <div class="cart-txt">
                                <div class="price"><strong>$500.00/</strong>month</div>

                                <div class="sm-t bed-room">3 Bedroom Townhouse</div>
                                <div class="sm-t"><img src="" alt="">45 Circle Dr, Monrovia, Liberia</div>
                                <div class="sm-t">Peter Wayne</div>
                            </div>
                            <div class="icons-layout">
                                <div class="icon">1</div>
                                <div class="icon">2</div>
                                <div class="icon">3</div>
                                <div class="icon">4</div>
                            </div>
                        </div>
                        <div class="carts">
                            <div class="img"><img src="../assets/images/building3.jpg" alt=""></div>
                            <div class="cart-txt">
                                <div class="price"><strong>$500.00/</strong>month</div>

                                <div class="sm-t bed-room">3 Bedroom Townhouse</div>
                                <div class="sm-t"><img src="" alt="">45 Circle Dr, Monrovia, Liberia</div>
                                <div class="sm-t">Peter Wayne</div>
                            </div>
                            <div class="icons-layout">
                                <div class="icon">1</div>
                                <div class="icon">2</div>
                                <div class="icon">3</div>
                                <div class="icon">4</div>
                            </div>
                        </div>
                        <div class="carts">
                            <div class="img"><img src="../assets/images/building4.jpg" alt=""></div>
                            <div class="cart-txt">
                                <div class="price"><strong>$500.00/</strong>month</div>

                                <div class="sm-t bed-room">3 Bedroom Townhouse</div>
                                <div class="sm-t"><img src="" alt="">45 Circle Dr, Monrovia, Liberia</div>
                                <div class="sm-t">Peter Wayne</div>
                            </div>
                            <div class="icons-layout">
                                <div class="icon">1</div>
                                <div class="icon">2</div>
                                <div class="icon">3</div>
                                <div class="icon">4</div>
                            </div>
                        </div>
                        <div class="carts">
                            <div class="img"><img src="../assets/images/building5.jpg" alt=""></div>
                            <div class="cart-txt">
                                <div class="price"><strong>$500.00/</strong>month</div>

                                <div class="sm-t bed-room">3 Bedroom Townhouse</div>
                                <div class="sm-t"><img src="" alt="">45 Circle Dr, Monrovia, Liberia</div>
                                <div class="sm-t">Peter Wayne</div>
                            </div>
                            <div class="icons-layout">
                                <div class="icon">1</div>
                                <div class="icon">2</div>
                                <div class="icon">3</div>
                                <div class="icon">4</div>
                            </div>
                        </div>
                        <div class="carts">
                            <div class="img"><img src="../assets/images/building6.jpg" alt=""></div>
                            <div class="cart-txt">
                                <div class="price"><strong>$500.00/</strong>month</div>

                                <div class="sm-t bed-room">3 Bedroom Townhouse</div>
                                <div class="sm-t"><img src="" alt="">45 Circle Dr, Monrovia, Liberia</div>
                                <div class="sm-t">Peter Wayne</div>
                            </div>
                            <div class="icons-layout">
                                <div class="icon">1</div>
                                <div class="icon">2</div>
                                <div class="icon">3</div>
                                <div class="icon">4</div>
                            </div>
                        </div>

                        <div class="carts">
                            <div class="img"><img src="../assets/images/building11.jpg" alt=""></div>
                            <div class="cart-txt">
                                <div class="price"><strong>$500.00/</strong>month</div>

                                <div class="sm-t bed-room">3 Bedroom Townhouse</div>
                                <div class="sm-t"><img src="" alt="">45 Circle Dr, Monrovia, Liberia</div>
                                <div class="sm-t">Peter Wayne</div>
                            </div>
                            <div class="icons-layout">
                                <div class="icon">1</div>
                                <div class="icon">2</div>
                                <div class="icon">3</div>
                                <div class="icon">4</div>
                            </div>
                        </div>

                        <div class="carts">
                            <div class="img"><img src="../assets/images/building8.jpg" alt=""></div>
                            <div class="cart-txt">
                                <div class="price"><strong>$500.00/</strong>month</div>

                                <div class="sm-t bed-room">3 Bedroom Townhouse</div>
                                <div class="sm-t"><img src="" alt="">45 Circle Dr, Monrovia, Liberia</div>
                                <div class="sm-t">Peter Wayne</div>
                            </div>
                            <div class="icons-layout">
                                <div class="icon">1</div>
                                <div class="icon">2</div>
                                <div class="icon">3</div>
                                <div class="icon">4</div>
                            </div>
                        </div>

                        <div class="carts">
                            <div class="img"><img src="../assets/images/building9.jpg" alt=""></div>
                            <div class="cart-txt">
                                <div class="price"><strong>$500.00/</strong>month</div>

                                <div class="sm-t bed-room">3 Bedroom Townhouse</div>
                                <div class="sm-t"><img src="" alt="">45 Circle Dr, Monrovia, Liberia</div>
                                <div class="sm-t">Peter Wayne</div>
                            </div>
                            <div class="icons-layout">
                                <div class="icon">1</div>
                                <div class="icon">2</div>
                                <div class="icon">3</div>
                                <div class="icon">4</div>
                            </div>
                        </div>
                    </div>
                    <div class="advertisement">
                        Advertisement
                    </div>
                </div>
            </div>
        </div>
        <div class="learn-more">Learn More</div>
        <Footer />
 </div>       
            
        </template>
    <script>
        import Footer from '../components/Footer.vue'
        export default {name: "PropertyGrid", components: {Footer}}
        // let range = document.querySelector("input[type=range]")
        // let val = document.getElementById("val")
        // let value_less = document.getElementById("val-less")
        // val.innerHTML = range.value

        // range.addEventListener("input", () => {
        //     val.innerHTML = Number(range.value) //0 | 10000 -  decrease
        //         // value_less.innerHTML =  0 + Number(range.value) //increases
        //     let absolute_value = Number(range.value)

        //     let hr = `${(absolute_value * 100)/10000}%`
        //     bg_color = `linear-gradient(90deg, rgb(32, 178, 170) ${hr},  rgba(32, 178, 171, 0.342) ${hr})`;
        //     range.style.background = bg_color;
        // })
    </script>