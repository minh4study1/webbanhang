import React from "react";
import styles from "./styles.module.css"
import { Link } from "react-router-dom";

function Main() {
    return(
      
    <div>
  <body>
    
    <div id="header" className={styles.shell}>
      <div id="logo"><h1><a href="#">Cửa tiệm sách</a></h1><span><a href="#">minh dep trai</a></span></div>
      
      <div id="navigation">
        <ul>
          <li><a href="#" className={styles.active}>Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Promotions</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
      </div>
     
      <div className={styles.cl}>
        &nbsp;</div>
      
      <div id="login-details">
        <p>Welcome, <a href="#" id="user">Guest</a> .</p><p><a href="#" className={styles.cart} ><img src="./images/cart-icon.png" alt="" /></a>Shopping Cart (0) <a href="#" className={styles.sum}>$0.00</a></p>
      </div>
      
    </div>
   
    <div id="slider">
      <div className={styles.shell}>
        <ul>
          <li>
            <div className={styles.image}>
              <img src="./images/books.png" alt="" />
            </div>
            <div className={styles.details}>
              <h2>Bestsellers</h2>
              <h3>Special Offers</h3>
              <p className={styles.title}>Dark Nhân Tâm</p>
              <p className={styles.description}>Cuốn sách “Ba người thầy vĩ đại” là một trong những cuốn sách đang để gối đầu giường, một tác phẩm xuất sắc về việc thay đổi bản thân </p>
              <a href="#" className={styles.readmorebtn}>Read More</a>
            </div>
          </li>
          <li>
            <div className={styles.image}>
              <img src="./images/books.png" alt="" />
            </div>
            <div className={styles.details}>
              <h2>Bestsellers</h2>
              <h3>Special Offers</h3>
              <p className={styles.title}>Dark Nhân Tâm</p>
              <p className={styles.description}>Nghệ thuật từ chối cuốn sách giúp bạn chinh phục kỹ năng giao tiếp, giúp bạn biết cách ứng xử sao cho phù hợp với tất cả các mối quan hệ xung quanh.</p>
              <a href="#" className={styles.readmorebtn}>Read More</a>
            </div>
          </li>
          <li>
            <div className={styles.image}>
              <img src="./images/books.png" alt="" />
            </div>
            <div className={styles.details}>
              <h2>Bestsellers</h2>
              <h3>Special Offers</h3>
              <p className={styles.title}>Dark Nhân Tâm</p>
              <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id odio in tortor scelerisque dictum. Phasellus varius sem sit amet metus volutpat vel vehicula nunc lacinia.</p>
              <a href="#" className={styles.readmorebtn}>Read More</a>
            </div>
          </li>
          <li>
            <div className={styles.image}>
              <img src="./images/books.png" alt="" />
            </div>
            <div className={styles.details}>
              <h2>Bestsellers</h2>
              <h3>Special Offers</h3>
              <p className={styles.title}>Dark Nhân Tâm</p>
              <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id odio in tortor scelerisque dictum. Phasellus varius sem sit amet metus volutpat vel vehicula nunc lacinia.</p>
              <a href="#" className={styles.readmorebtn}>Read More</a>
            </div>
          </li>
        </ul>
        <div className={styles.nav}>
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
        </div>
      </div>
    </div>
    
    <div id="main" className={styles.shell}>
      
      <div id="sidebar">
        <ul className={styles.categories}>
          <li>
            <h4>Categories</h4>
            <ul>
              <li><a href="#">Lorem ipsum dolor</a></li>
              <li><a href="#">Morbi eget</a></li>
              <li><a href="#">Nulla egestas</a></li>
              <li><a href="#">Curabitur venenatis</a></li>
              <li><a href="#">Ut dictum purus</a></li>
              <li><a href="#">Curabitur imperdiet</a></li>
              <li><a href="#">Aliquam elementum</a></li>
            </ul>
          </li>
          <li>
            <h4>Authors</h4>
            <ul>
              <li><a href="#">Lorem ipsum dolor</a></li>
              <li><a href="#">Morbi eget</a></li>
              <li><a href="#">Nulla egestas</a></li>
              <li><a href="#">Curabitur venenatis</a></li>
              <li><a href="#">Ut dictum purus</a></li>
              <li><a href="#">Curabitur imperdiet</a></li>
              <li><a href="#">Lorem ipsum dolor</a></li>
              <li><a href="#">Morbi eget</a></li>
              <li><a href="#">Nulla egestas</a></li>
              <li><a href="#">Curabitur venenatis</a></li>
              <li><a href="#">Ut dictum purus</a></li>
              <li><a href="#">Curabitur imperdiet</a></li>
            </ul>
          </li>
        </ul>
      </div>
      
      <div id="content">
        
        <div className={styles.products}>
          <h3>Featured Products</h3>
          <ul>
            <li>
              <div className={styles.product}>
                <a href="#" className={styles.info}>
                  <span className={styles.holder}>
                    <img src="./images/image01.jpg" alt="" />
                    <span className={styles.bookname}>Book Name</span>
                    <span className={styles.author}>by John Smith</span>
                    <span className={styles.description}>Maecenas vehicula ante eu enim pharetra<br />scelerisque dignissim <br />sollicitudin nisi</span>
                  </span>
                </a>
                <a href="#" className={styles.buybtn}>BUY NOW <span className={styles.price}><span className={styles.low}>$</span>22<span className={styles.high}>00</span></span></a>
              </div>
            </li>
            <li>
              <div className={styles.produc}>
                <a href="#" className={styles.info}>
                  <span className={styles.holder}>
                    <img src="./images/image02.jpg" alt="" />
                    <span className={styles.bookname}>Book Name</span>
                    <span className={styles.author}>by John Smith</span>
                    <span className={styles.description}>Maecenas vehicula ante eu enim pharetra<br />scelerisque dignissim <br />sollicitudin nisi</span>
                  </span>
                </a>
                <a href="#" className={styles.buybtn}>BUY NOW <span className={styles.price}><span className={styles.low}>$</span>22<span className={styles.high}>00</span></span></a>
              </div>
            </li>
            <li>
              <div className={styles.product}>
                <a href="#" className={styles.info}>
                  <span className={styles.holder}>
                    <img src="./images/image03.jpg" alt="" />
                    <span className={styles.bookname}>Book Name</span>
                    <span className={styles.author}>by John Smith</span>
                    <span className={styles.description}>Maecenas vehicula ante eu enim pharetra<br />scelerisque dignissim <br />sollicitudin nisi</span>
                  </span>
                </a>
                <a href="#" className={styles.buybtn}>BUY NOW <span className={styles.price}><span className={styles.low}>$</span>22<span className={styles.high}>00</span></span></a>
              </div>
            </li>
            <li>
              <div className={styles.product}>
                <a href="#" className={styles.info}>
                  <span className={styles.holder}>
                    <img src="./images/image04.jpg" alt="" />
                    <span className={styles.bookname}>Book Name</span>
                    <span className={styles.author}>by John Smith</span>
                    <span className={styles.description}>Maecenas vehicula ante eu enim pharetra<br />scelerisque dignissim <br />sollicitudin nisi</span>
                  </span>
                </a>
                <a href="#" className={styles.buybtn}>BUY NOW <span className={styles.price}><span className={styles.low}>$</span>22<span className={styles.high}>00</span></span></a>
              </div>
            </li>
            <li>
              <div className={styles.product}>
                <a href="#" className={styles.info}>
                  <span className={styles.holder}>
                    <img src="./images/image05.jpg" alt="" />
                    <span className={styles.bookname}>Book Name</span>
                    <span className={styles.author}>by John Smith</span>
                    <span className={styles.description}>Maecenas vehicula ante eu enim pharetra<br />scelerisque dignissim <br />sollicitudin nisi</span>
                  </span>
                </a>
                <a href="#" className={styles.buybtn}>BUY NOW <span className={styles.price}><span className={styles.low}>$</span>22<span className={styles.high}>00</span></span></a>
              </div>
            </li>
            <li>
              <div className={styles.product}>
                <a href="#" className={styles.info}>
                  <span className={styles.holder}>
                    <img src="./images/image06.jpg" alt="" />
                    <span className={styles.bookname}>Book Name</span>
                    <span className={styles.author}>by John Smith</span>
                    <span className={styles.description}>Maecenas vehicula ante eu enim pharetra<br />scelerisque dignissim <br />sollicitudin nisi</span>
                  </span>
                </a>
                <a href="#" className={styles.buybtn}>BUY NOW <span className={styles.price}><span className={styles.low}>$</span>22<span className={styles.high}>00</span></span></a>
              </div>
            </li>
            <li>
              <div className={styles.product}>
                <a href="#" className={styles.info}>
                  <span className={styles.holder}>
                    <img src="./images/image07.jpg" alt="" />
                    <span className={styles.bookname}>Book Name</span>
                    <span className={styles.author}>by John Smith</span>
                    <span className={styles.description}>Maecenas vehicula ante eu enim pharetra<br />scelerisque dignissim <br />sollicitudin nisi</span>
                  </span>
                </a>
                <a href="#" className={styles.buybtn}>BUY NOW <span className={styles.price}><span className={styles.low}>$</span>22<span className={styles.high}>00</span></span></a>
              </div>
            </li>
            <li>
              <div className={styles.product}>
                <a href="#" className={styles.info}>
                  <span className={styles.holder}>
                    <img src="./images/image08.jpg" alt="" />
                    <span className={styles.bookname}>Book Name</span>
                    <span className={styles.author}>by John Smith</span>
                    <span className={styles.description}>Maecenas vehicula ante eu enim pharetra<br />scelerisque dignissim <br />sollicitudin nisi</span>
                  </span>
                </a>
                <a href="#" className={styles.buybtn}>BUY NOW <span className={styles.price}><span className={styles.low}>$</span>22<span className={styles.high}>00</span></span></a>
              </div>
            </li>
          </ul>
        
        </div>
        <div className={styles.cl}>&nbsp;</div>
        
        <div id="best-sellers">
          <h3>Best Sellers</h3>
          <ul>
            <li>
              <div className={styles.product}>
                <a href="#">
                  <img src="./images/image-best01.jpg" alt="" />
                  <span className={styles.bookname}>Book Name </span>
                  <span className={styles.author}>by John Smith</span>
                  <span className={styles.price}><span className={styles.low}>$</span>35<span className={styles.high}>00</span></span>
                </a>
              </div>
            </li>
            <li>
              <div className={styles.product}>
                <a href="#">
                  <img src="./images/image-best02.jpg" alt="" />
                  <span className={styles.bookname}>Book Name </span>
                  <span className={styles.author}>by John Smith</span>
                  <span className={styles.price}><span className={styles.low}>$</span>45<span className={styles.high}>00</span></span>
                </a>
              </div>
            </li>
            <li>
              <div className={styles.product}>
                <a href="#">
                  <img src="./images/image-best03.jpg" alt="" />
                  <span className={styles.bookname}>Book Name </span>
                  <span className={styles.author}>by John Smith</span>
                  <span className={styles.price}><span className={styles.low}>$</span>15<span className={styles.high}>00</span></span>
                </a>
              </div>
            </li>
            <li>
              <div className={styles.product}>
                <a href="#">
                  <img src="./images/image-best04.jpg" alt="" />
                  <span className={styles.bookname}>Book Name </span>
                  <span className={styles.author}>by John Smith</span>
                  <span className={styles.price}><span className={styles.low}>$</span>27<span className={styles.high}>99</span></span>
                </a>
              </div>
            </li>
            <li>
              <div className={styles.product}>
                <a href="#">
                  <img src="./images/image-best01.jpg" alt="" />
                  <span className={styles.bookname}>Book Name </span>
                  <span className={styles.author}>by John Smith</span>
                  <span className={styles.price}><span className={styles.low}>$</span>35<span className={styles.high}>00</span></span>
                </a>
              </div>
            </li>
            <li>
              <div className={styles.product}>
                <a href="#">
                  <img src="./images/image-best02.jpg" alt="" />
                  <span className={styles.bookname}>Book Name </span>
                  <span className={styles.author}>by John Smith</span>
                  <span className={styles.price}><span className={styles.low}>$</span>45<span className={styles.high}>00</span></span>
                </a>
              </div>
            </li>
            <li>
              <div className={styles.product}>
                <a href="#">
                  <img src="./images/image-best03.jpg" alt="" />
                  <span className={styles.bookname}>Book Name </span>
                  <span className={styles.author}>by John Smith</span>
                  <span className={styles.price}><span className={styles.low}>$</span>15<span className={styles.high}>00</span></span>
                </a>
              </div>
            </li>
            <li>
              <div className={styles.product}>
                <a href="#">
                  <img src="./images/image-best04.jpg" alt="" />
                  <span className={styles.bookname}>Book Name </span>
                  <span className={styles.author}>by John Smith</span>
                  <span className={styles.price}><span className={styles.low}>$</span>27<span className={styles.high}>99</span></span>
                </a>
              </div>
            </li>
          </ul>
        </div>
       
      </div>
      
      <div className={styles.cl}>&nbsp;</div>
    </div>
    
    <div id="footer" className={styles.shell}>
      <div className={styles.top}>
        <div className={styles.cnt}>
          <div className={styles.colabout}>
            <h4>About BestSellers</h4>
            <p>Nulla porttitor pretium mattis. Mauris lorem massa, ultricies non mattis bibendum, semper ut erat. Morbi vulputate placerat ligula. Fusce <br />convallis, nisl a pellentesque viverra, ipsum leo sodales sapien, vitae egestas dolor nisl eu tortor. Etiam ut elit vitae nisl tempor tincidunt. Nunc sed elementum est. Phasellus sodales viverra mauris nec dictum. Fusce a leo libero. Cras accumsan enim nec massa semper eu hendrerit nisl faucibus. Sed lectus ligula, consequat eget bibendum eu, consequat nec nisl. In sed consequat elit. Praesent nec iaculis sapien. <br />Curabitur gravida pretium tincidunt.  </p>
          </div>
          <div className={styles.colstore}>
            <h4>Store</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Special Offers</a></li>
              <li><a href="#">Log In</a></li>
              <li><a href="#">Account</a></li>
              <li><a href="#">Basket</a></li>
              <li><a href="#">Checkout</a></li>
            </ul>
          </div>
          <div className={styles.col} id="newsletter">
            <h4>Newsletter</h4>
            <p>Lorem ipsum dolor sit amet  consectetur. </p>
            <form action="" method="post">
              <input type="text" className={styles.field} value="Your Name" title="Your Name" />
              <input type="text" className={styles.field} value="Email" title="Email" />
              <div className={styles.formbuttons}><input type="submit" value="Submit" className={styles.submitbtn} /></div>
            </form>
          </div>
          <div className={styles.cl}>&nbsp;</div>
          <div className={styles.copy}>
            <p>&copy; <a href="#">BestSeller.com</a>. Design by <a href="https://www.facebook.com/profile.php?id=100008389802078">NhatMinh</a></p>
          </div>
        </div>
      </div>
    </div>
   
  </body></div>
    )
    
}
export default Main;