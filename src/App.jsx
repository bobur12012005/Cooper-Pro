import { useState } from 'react'
import './App.css'
import Product from './components/Product'
import AllProduct from './components/AllProduct'
import Person from './components/Person'
import Reason from './components/Reason'
import Layout from './Layout/Layout'

function App() {
    const production = [
        {
            id: 1,
            description: 'Для эфирных масел',
            image: '/images/production[1].jpg'
        },
        {
            id: 2,
            description: 'Для гидролатов',
            image: '/images/production[2].jpg'
        },
        {
            id: 3,
            description: 'Медная посуда',
            image: '/images/production[3].jpg'
        },
        {
            id: 4,
            description: 'Аксессуары из меди',
            image: '/images/production[4].jpg'
        },
        {
            id: 5,
            description: 'Индивидуальный заказ',
            image: '/images/production[5].jpg'
        }
    ]

    const products = [
        {
            id: 1,
            description: 'Медный чайник с фарфоровой ручкой',
            image: '/images/production[1].jpg',
            price: '1 953 грн'
        },
        {
            id: 2,
            description: 'Медный чайник с фарфоровой ручкой',
            image: '/images/production[2].jpg',
            price: '1 953 грн'
        },
        {
            id: 3,
            description: 'Медный чайник с фарфоровой ручкой',
            image: '/images/production[3].jpg',
            price: '1 953 грн'
        }
    ]

    const people = [
        {
            id: 1,
            name: 'Иван Иванов',
            about: 'Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.',
            date: '20.10.21',
            image: '/images/person.jpg'
        },
        {
            id: 2,
            name: 'Иван Иванов',
            about: 'Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.',
            date: '20.10.21',
            image: '/images/person.jpg'
        },
        {
            id: 3,
            name: 'Иван Иванов',
            about: 'Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.',
            date: '20.10.21',
            image: '/images/person.jpg'
        }
    ]

    const choiseReasons = [
        {
            id: 1,
            title: 'Аутентичность',
            description: 'Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен.',
            poster: '/icons/star.svg'
        },
        {
            id: 2,
            title: 'Изысканность',
            description: 'Наши изделия из меди являются очень практичными. В то же время они наполнят особой магией ваш дом или рабочее....',
            poster: '/icons/moon.svg'
        },
        {
            id: 3,
            title: 'Честная оплата',
            description: 'Мы стремимся предоставить лучший товар по лучшей цене с сервисом высокого уровня. Но все начинается c....',
            poster: '/icons/money.svg'
        },
        {
            id: 4,
            title: 'Большой ассортимент',
            description: 'У нас есть все от миниатюрных настольных паровых дистилляторов эфирных масел до крупногабаритного оборудования...',
            poster: '/icons/flask.svg'
        },
        {
            id: 5,
            title: 'Доставка по всему миру',
            description: 'Вы можете получить нашу продукцию в кратчайшие сроки в любую точку земного шара.',
            poster: '/icons/world.svg'
        },
        {
            id: 6,
            title: 'Гарантия качества',
            description: 'Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции.',
            poster: '/icons/shield.svg'
        },
        {
            id: 7,
            title: 'Удобство в использовании',
            description: 'Наши изделия из меди имеют уникальный дизайн, который разрабатывался нами с целью получения максимальной...',
            poster: '/icons/potion.svg'
        },
        {
            id: 8,
            title: 'Забота об окружающей среде',
            description: 'От 2 до 5% от стоимости каждого приобретенного товара в нашем магазине мы направляем на защиту....',
            poster: '/icons/landscape.svg'
        }
    ]

    return (
        <Layout>
                <main>
                <section className='header-section'>
                    <button className="left-slider">
                        <img src="/icons/left.svg" />
                    </button>
                    <button className="right-slider">
                        <img src="/icons/right.svg" />
                    </button>
                    <div className="inner-header-section">
                        <h2>ХИТ ПРОДАЖ</h2>
                        <div className="line"></div>
                        <p>Дистиллятор для <br /> эфирных масел </p>
                        <div className="price-place">
                            <span className='price-text'>Цена</span>
                            <span className='price'>4 906 грн</span>
                        </div>
                        <button>Купить</button>
                        <div className="other">
                            <div className="tripple-dot">
                                <div className="dot-place active-dot">
                                    <div className="dot"></div>
                                    <div className="mouse-place">
                                        <div className="vertical-line"></div>
                                        <div className="mouse">
                                            <img src="/icons/mouse.svg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="dot-place">
                                    <div className="dot"></div>
                                    <div className="mouse-place">
                                        <div className="vertical-line"></div>
                                        <div className="mouse">
                                            <img src="/icons/mouse.svg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="dot-place">
                                    <div className="dot"></div>
                                    <div className="mouse-place">
                                        <div className="vertical-line"></div>
                                        <div className="mouse">
                                            <img src="/icons/mouse.svg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='production'>
                    <div className="top">
                        <h2>НАША ПРОДУКЦИЯ</h2>
                    </div>
                    <div className="products-container">
                        {production.map(item => <Product item={item} />)}
                        <div className="product">
                            <div className="inner-product">
                                <div className="product-top">
                                    <span className='span1'>-30%</span>
                                    <span className='span2'>-50%</span>
                                    <span className='span3'>-80%</span>
                                </div>
                                <span>Скидки и предложения</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='all-products'>
                    <button className="left-slider">
                        <img src="/icons/left-black.svg" />
                    </button>
                    <button className="right-slider">
                        <img src="/icons/right-black.svg" />
                    </button>
                    <div className="inner-box">
                        <div className="top">
                            <h2>ЛУЧШИЕ ПРОДАЖИ</h2>
                        </div>
                        <div className="products-container">
                            {products.map(item => <AllProduct item={item} />)}
                        </div>
                        <div className="bottom">
                            <div className="tripple-dot">
                                <div className="dot active-dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                            <button>Перейти в каталог</button>
                        </div>
                    </div>
                </section>

                <section className='all-products all2'>
                    <button className="left-slider">
                        <img src="/icons/left-black.svg" />
                    </button>
                    <button className="right-slider">
                        <img src="/icons/right-black.svg" />
                    </button>
                    <div className="inner-box">
                        <div className="top">
                            <h2>НОВИНКИ</h2>
                        </div>
                        <div className="products-container">
                            {products.map(item => <AllProduct item={item} />)}
                        </div>
                        <div className="bottom">
                            <div className="tripple-dot">
                                <div className="dot active-dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                            <button>Перейти в каталог</button>
                        </div>
                    </div>
                </section>

                <section className='bg-2'>
                    <div className="inner-bg-color">
                        <img className="bg-text" src='/icons/COOPER_PRO.svg' />
                        <img className='bg-2-img' src="/images/left-side-bg-2.png" />
                        <img className='under' src="/icons/under.svg" />
                        <img className='something' src="/icons/something.svg" />
                        <div className="inner-cont">
                            <h2>1 + 1 = 3</h2>
                            <p>Закажите два товара и <br /> получите третий бесплатно</p>
                            <button>Перейти в каталог</button>
                        </div>
                    </div>
                </section>

                <section className='all-products all2'>
                    <button className="left-slider">
                        <img src="/icons/left-black.svg" />
                    </button>
                    <button className="right-slider">
                        <img src="/icons/right-black.svg" />
                    </button>
                    <div className="inner-box">
                        <div className="top">
                            <h2>МЫ РЕКОМЕНДУЕМ</h2>
                        </div>
                        <div className="products-container">
                            {products.map(item => <AllProduct item={item} />)}
                        </div>
                        <div className="bottom">
                            <div className="tripple-dot">
                                <div className="dot active-dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                            <button>Перейти в каталог</button>
                        </div>
                    </div>
                </section>

                <section className='all-products'>
                    <button className="left-slider">
                        <img src="/icons/left-black.svg" />
                    </button>
                    <button className="right-slider">
                        <img src="/icons/right-black.svg" />
                    </button>
                    <div className="inner-box">
                        <div className="top">
                            <h2>СКИДКИ</h2>
                        </div>
                        <div className="products-container">
                            {products.map(item => <AllProduct item={item} />)}
                        </div>
                        <div className="bottom">
                            <div className="tripple-dot">
                                <div className="dot active-dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                            <button>Перейти в каталог</button>
                        </div>
                    </div>
                </section>

                <section className='about-us'>
                    <button className="left-slider">
                        <img src="/icons/left-black.svg" />
                    </button>
                    <button className="right-slider">
                        <img src="/icons/right-black.svg" />
                    </button>
                    <div className="inner-about-us">
                        <div className="top">
                            <h2>ЧТО ДУМАЮТ О НАС</h2>
                        </div>
                        <div className="cont">
                            {people.map(item => <Person item={item} />)}
                        </div>
                        <div className="bottom">
                            <div className="tripple-dot">
                                <div className="dot active-dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='reasons'>
                    <div className="inner-reasons">
                        <div className="top">
                            <h2>ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
                        </div>
                        <div className="cont">
                            {choiseReasons.map(item => <Reason item={item} />)}
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export default App