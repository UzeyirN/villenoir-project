import React, { useState, useEffect } from 'react'
import '../../styles/HomeSections/FeaturedProducts.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
const FeaturedProducts = () => {


    const [featured, setFeatured] = useState(null)

    const getData = () => {
        fetch('http://localhost:3070/featured')
            .then((response) => response.json())
            .then((data) => setFeatured(data));
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className="featured-products__wrapper">
                <div style={{ margin: "0 auto 50px auto", textAlign: "center" }}>
                    <p className='lato-font' style={{ fontSize: "14px", fontWeight: "700", color: "RGB(176, 151, 109)" }}>CAREFULLY SELECTED PRODUCTS</p>
                    <h2 className='playfair-font' style={{ fontSize: "41px" }}>Featured Products</h2>
                </div>
                <div className="container">
                    <div className="row justify-content-between">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={0}
                            slidesPerView={3}
                            navigation={true}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            breakpoints={{
                                300: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }}
                        >{
                                featured?.map(({image,brand,appelation,price}) => (
                                    <SwiperSlide>

                                        <div className="card-wrapper">
                                            <div className="card-f">
                                                <div className="card-body">
                                                    <img style={{ height: "100%" }} src={image} alt="" />
                                                    <button className='feature-fav__btn'>
                                                        <i class="fa-solid fa-heart"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="card-content__f">
                                                <p className='lato-font' style={{ color: "RGB(176, 151, 109)" }}>{brand}</p>
                                                <Link className='playfair-font card-link' style={{ marginBottom: "20px", fontSize: "20px" }} >{appelation}</Link>
                                                <div style={{ color: "RGB(176, 151, 109)", margin: "30px 0", fontSize: "21px" }} className='notoserif-font'>${price}</div>
                                                <button className='lato-font add-button'>ADD TO CART</button>
                                            </div>
                                        </div>


                                    </SwiperSlide>
                                ))
                            }
                            {/* <SwiperSlide>
                                <div className="card-wrapper">
                                    <div className="card-f">
                                        <div className="card-body">
                                            <img style={{ height: "100%" }} src="https://cdn11.bigcommerce.com/s-qbep6rt4nh/images/stencil/500x659/products/116/386/White-Chardonnay-w-cup__40812.1488466018.png?c=2" alt="" />
                                            <button className='feature-fav__btn'>
                                                <i class="fa-solid fa-heart"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-content__f">
                                        <p className='lato-font' style={{ color: "RGB(176, 151, 109)" }}>SUTTER HOME</p>
                                        <Link className='playfair-font card-link' style={{ marginBottom: "20px", fontSize: "20px" }} >Villenoir Chardonnay</Link>
                                        <div style={{ color: "RGB(176, 151, 109)", margin: "30px 0", fontSize: "21px" }} className='notoserif-font'>$100.00</div>
                                        <button className='lato-font add-button'>ADD TO CART</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-wrapper">
                                    <div className="card-f">
                                        <div className="card-body">
                                            <img style={{ height: "100%" }} src="https://cdn11.bigcommerce.com/s-qbep6rt4nh/images/stencil/500x659/products/116/386/White-Chardonnay-w-cup__40812.1488466018.png?c=2" alt="" />
                                            <button className='feature-fav__btn'>
                                                <i class="fa-solid fa-heart"></i>
                                            </button>
                                        </div>

                                    </div>
                                    <div className="card-content__f">
                                        <p className='lato-font' style={{ color: "RGB(176, 151, 109)" }}>SUTTER HOME</p>
                                        <Link className='playfair-font card-link' style={{ marginBottom: "20px", fontSize: "20px" }} >Villenoir Chardonnay</Link>
                                        <div style={{ color: "RGB(176, 151, 109)", margin: "30px 0", fontSize: "21px" }} className='notoserif-font'>$100.00</div>
                                        <button className='lato-font add-button'>ADD TO CART</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-wrapper">
                                    <div className="card-f">
                                        <div className="card-body">
                                            <img style={{ height: "100%" }} src="https://cdn11.bigcommerce.com/s-qbep6rt4nh/images/stencil/500x659/products/116/386/White-Chardonnay-w-cup__40812.1488466018.png?c=2" alt="" />
                                            <button className='feature-fav__btn'>
                                                <i class="fa-solid fa-heart"></i>
                                            </button>
                                        </div>

                                    </div>
                                    <div className="card-content__f">
                                        <p className='lato-font' style={{ color: "RGB(176, 151, 109)" }}>SUTTER HOME</p>
                                        <Link className='playfair-font card-link' style={{ marginBottom: "20px", fontSize: "20px" }} >Villenoir Chardonnay</Link>
                                        <div style={{ color: "RGB(176, 151, 109)", margin: "30px 0", fontSize: "21px" }} className='notoserif-font'>$100.00</div>
                                        <button className='lato-font add-button'>ADD TO CART</button>
                                    </div>
                                </div>
                            </SwiperSlide> */}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedProducts