import React from "react";

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <div className="left">
                    <div className="logo">
                        <img src="/logotype/logotype.svg" />
                    </div>
                    <nav className='navigation'>
                        <div className="link active-link">
                            <a href="#">Каталог</a>
                            <div className="underline"></div>
                        </div>
                        <div className="link">
                            <a href="#">Новости</a>
                            <div className="underline"></div>
                        </div>
                        <div className="link">
                            <a href="#">Доставка</a>
                            <div className="underline"></div>
                        </div>
                        <div className="link">
                            <a href="#">О нас</a>
                            <div className="underline"></div>
                        </div>
                        <div className="link">
                            <a href="#">Контакты</a>
                            <div className="underline"></div>
                        </div>
                    </nav>
                </div>
                <div className="right">
                    <div className="actions">
                        <button className="action">
                            <img src="/icons/like.svg" />
                        </button>
                        <button className="action">
                            <img src="/icons/user.svg" />
                        </button>
                        <button className="action">
                            <img src="/icons/basket.svg" />
                        </button>
                    </div>
                </div>
            </header>

            {children}

            <footer>
                <button className="top-scroll-button">
                    <span>ВВЕРХ</span>
                </button>
                <div className="inner-footer">
                    <div className="left">
                        <div className="logo">
                            <img src="/logotype/logotype.svg" />
                        </div>
                        <p>© 2021 “Copper Pro” <br /> Все права защищенны</p>
                        <a href="#">Политика конфиденциальности</a>
                    </div>
                    <div className="right">
                        <nav className="links-bar navigation">
                            <span>Навигатор</span>
                            <a href="#">Каталог</a>
                            <a href="#">Новости</a>
                            <a href="#">Доставка</a>
                            <a href="#">О нас</a>
                            <a href="#">Контакты</a>
                        </nav>
                        <nav className="links-bar catalog">
                            <span>Каталог</span>
                            <a href="#">Для эфирных масел</a>
                            <a href="#">Для гидролатов</a>
                            <a href="#">Медная посуда</a>
                            <a href="#">Аксессуары из меди</a>
                            <a href="#">Индивидуальный заказ</a>
                            <a href="#">Скидки и предложения</a>
                        </nav>
                        <nav className="links-bar contacts">
                            <span>Контакты</span>
                            <a href="#">Бажана 8-Б, Киев, <br /> 02132 Украина</a>
                            <a href="#">+38 (096) 990 67 56</a>
                            <a href="#">a.alambik@gmail.com</a>
                        </nav>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Layout