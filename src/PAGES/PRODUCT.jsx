
export default function PRODUCT() {
  return (
<>
  <link rel="stylesheet" href="STYLES/HEADER.css" />
  <link rel="stylesheet" href="STYLES/UPPERBODY.css" />
  <link rel="stylesheet" href="STYLES/MIDDLEBODY.css" />
  <link rel="stylesheet" href="STYLES/LOWERBODY.css" />
  <link rel="stylesheet" href="STYLES/GENERAL.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <title>SHOP.CO</title>
  <div className="header">
    <div className="middle-section">

      {/* <p className="category">HOME</p> */}
      {/* <p className="category">PRODUCT</p> */}
      {/* <p class="category">New Arrivals</p>  */}
      {/* <p className="category">CATEGORY</p> */}
    </div>
 
  </div>
  {/* THIS IS THE PATH WHERE I WANT TO SHOW THE CUSTOMER WHERE IS HE */}
  <div className="path">
    <p className="path-p">Home</p>
    <img
      className="chevron-right"
      src="./ICONS/chevron_right_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"
    />
    <p className="path-p">Shop</p>
    <img
      className="chevron-right"
      src="./ICONS/chevron_right_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"
    />
    <p className="path-p">Men</p>
    <img
      className="chevron-right"
      src="./ICONS/chevron_right_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"
    />
    <p>T-shirt</p>
  </div>
  {/* THIS IS THE UPPERBODDY DIV WHERE YOU CAN SEE CLOTHES WITH PRICES , VARIANTS , DESCRIPTION AND SIZES */}
  <div className="upperbody">
    {/* THIS IS THE COMBINE DIV OF BOTH VARIANTS OF PRODUCTS IMAGES AND THE IMAGE CUSTOMER IS SEEING WITH DESCRIPTION*/}
    <div className="combined-div">
      <div className="upperbody-div-images">
        <img className="side-images-variants" src="./IMAGES/GREEN SHIRT.png" />
        <img
          className="side-images-variants"
          src="./IMAGES/BEADY GREEN SHIRT.png"
        />
        <img
          className="side-images-variants"
          src="./IMAGES/MAN WITH GREEN SHIRT 2.png"
        />
      </div>
      <div className="upperbody-div-images2">
        <img className="side-images-variants2" src="./IMAGES/GREEN SHIRT.png" />
      </div>
      {/* THIS THE INFORMATION BESIDES THE PRODUCT */}
      <div className="descritption">
        <div>
          <p className="GREENSHIRT-heading">ONE LIFE GRAPHIC T-SHIRT</p>
          {/* THIS DIV IS COMBINING BOTH STARS AND RATING IN NUMBERS */}
          <div className="RATING">
            <div className="star-div">
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
            </div>
            <div className="rating-numbers">4/5</div>
          </div>
          <div className="price">
            $260 <span className="previous-price">$300</span>
          </div>
          <div className="product-description">
            <p>
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>
          </div>
          {/* THIS IS THE DIV WHICH HAS TEXT OF COLOR AND COLOR ITSELF */}
          <div className="preference">
            <p className="text-color-of-clothes">Select Colors</p>
            <div className="all-colors">
              <div className="color-of-clothes">
                <img className="tick" src="ICONS/Tick.png" />
              </div>
              <div className="color-of-clothes2"></div>
              <div className="color-of-clothes3"></div>
            </div>
          </div>
          {/*  SIZE FOR PRODUCT */}
          <div className="size-for-product">
            <div className="size-text">
              <p>Choose Size</p>
            </div>
            <div>
              <button className="size-btns">Small</button>
              <button className="size-btns">Medium</button>
              <button className="size-btns">Large</button>
              <button className="size-btns">X-Large</button>
            </div>
          </div>
          {/* BUTTONS OF QUANTITY */}
          <div className="quantity">
            <button className="quantity-button">
              <p>
                <span className="minus">-</span> 1{" "}
                <span className="plus">+</span>
              </p>
            </button>
            <button className="add-to-cart-button">
              <p>Add to Cart</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* THIS DIV IS MIDDLE PART OF THE BODY */}
  <div className="middlebody">
    {/* THIS IS THE CONTAINER FOR PRODUCT DETAILS , REVIEWS , FAQS */}
    <div className="product-details-reviews-faqs-div">
      <div className="product-details">
        <p className="Product-Details">Product Details</p>
      </div>
      <div className="rating-and-reviews-div">
        <p className="rating-and-reviews">Rating &amp; Reviews</p>
      </div>
      <div>
        <p>FAQs</p>
      </div>
    </div>
    <div className="all-reviews-heading">
      {" "}
      {/*THIS CONTAINER IS THE HEADING BEFORE CUSTOMER REVIEWS */}
      <div>
        <p className="all-reviews-text">All Reviews</p>
      </div>
      <div className="number-of-reviews">
        <p>(451)</p>
      </div>
      <div className="sort">
        <img className="fliter-list" src="ICONS/FILTER-LIST.png" />
      </div>
      <div className="latest-button-and-write-a-review-button-div">
        <button className="latest-button">Latest</button>
        <img
          className="keyboard-arrow-down"
          src="ICONS/KEYBOARD-ARROW-DOWN.png"
        />
        <button className="write-a-review-button">Write a Review</button>
      </div>
    </div>
    <div className="all-reviews">
      <div className="reviews-flex">
        <div className="customer-name-and-star">
          <div className="customers-stars">
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
          </div>
          <div className="customer-name">
            Samantha D.
            <i className="fa fa-check-circle" />
          </div>
          <div>
            <p className="review">
              "I absolutely love this t-shirt! The design is unique and the
              fabric feels so comfortable. As a fellow designer, I appreciate
              the attention to detail. It's become my favorite go-to shirt."
            </p>
            <div className="date-div">
              <br />
              Posted on August 14,2023
            </div>
            <p />
          </div>
        </div>
        <div className="customer-name-and-star2">
          <div className="customers-stars">
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
          </div>
          <div className="customer-name">
            Ethan R.
            <i className="fa fa-check-circle" />
          </div>
          <div>
            <p className="review">
              "This t-shirt is a must-have for anyone who appreciates good
              design. The minimalistic yet stylish pattern caught my eye, and
              the fit is perfect. I can see the designer's touch in every aspect
              of this shirt."
            </p>
            <div className="date-div">
              <br />
              Posted on August 16, 2023
            </div>
            <p />
          </div>
        </div>
        <div className="customer-name-and-star3">
          <div className="customers-stars">
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
          </div>
          <div className="customer-name">
            Liam K.
            <i className="fa fa-check-circle" />
          </div>
          <div>
            <p className="review">
              "This t-shirt is a fusion of comfort and creativity. The fabric is
              soft, and the design speaks volumes about the designer's skill.
              It's like wearing a piece of art that reflects my passion for both
              design and fashion."
            </p>
            <div className="date-div">
              <br />
              Posted on August 18,2023
            </div>
            <p />
          </div>
        </div>
      </div>
      <div className="reviews-flex2">
        <div className="customer-name-and-star">
          <div className="customers-stars">
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
          </div>
          <div className="customer-name">
            Alex M.
            <i className="fa fa-check-circle" />
          </div>
          <div>
            <p className="review">
              "The t-shirt exceeded my expectations! The colors are vibrant and
              the print quality is top-notch. Being a UI/UX designer myself, I'm
              quite picky about aesthetics, and this t-shirt definitely gets a
              thumbs up from me."
            </p>
            <div className="date-div">
              <br />
              Posted on August 15,2023
            </div>
            <p />
          </div>
        </div>
        <div className="customer-name-and-star2">
          <div className="customers-stars">
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
          </div>
          <div className="customer-name">
            Olivia P.
            <i className="fa fa-check-circle" />
          </div>
          <div>
            <p className="review">
              "As a UI/UX enthusiast, I value simplicity and functionality. This
              t-shirt not only represents those principles but also feels great
              to wear. It's evident that the designer poured their creativity
              into making this t-shirt stand out."
            </p>
            <div className="date-div">Posted on August 17, 2023</div>
            <p />
          </div>
        </div>
        <div className="customer-name-and-star3">
          <div className="customers-stars">
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
          </div>
          <div className="customer-name">
            Ava H.
            <i className="fa fa-check-circle" />
          </div>
          <div>
            <p className="review">
              "I'm not just wearing a t-shirt; I'm wearing a piece of design
              philosophy. The intricate details and thoughtful layout of the
              design make this shirt a conversation starter."
            </p>
            <div className="date-div">
              <br />
              Posted on August 19,2023
            </div>
            <p />
          </div>
        </div>
      </div>
    </div>
    <button className="more-reviews">Learn more reviews</button>
  </div>
  {/* THIS IS THE LOWER PART OF BODY */}
  <div className="outer-3">
    <div className="you-might-also-like">YOU MIGHT ALSO LIKE</div>
    <div className="items-to-shop">
      <div className="item1">
        <img
          className="item1-image"
          src="./IMAGES/POLO-WITH-CONTRAST-TRIME.png"
        />
        <div className="shirt-descrition-div">
          <p className="shirt-descrition">Polo with Contrast Trims</p>
        </div>
        <div className="starandnumber">
          <div className="star-div">
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
          </div>
          <div className="rating">4.0/5</div>
        </div>
        <div className="allprices">
          <div className="price">$212</div>
          <div className="previous-price">$242</div>
          <div>
            <button className="discount-button">-20%</button>
          </div>
        </div>
      </div>
      <div className="item2">
        <img
          className="item2-image"
          src="./IMAGES/Gradient Graphic T-shirt.png"
        />
        <div className="shirt-descrition-div">
          <p className="shirt-descrition">Gradient Graphic T-shirt</p>
        </div>
        <div className="starandnumber">
          <div className="star-div">
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
          </div>
          <div className="rating">3.0/5</div>
        </div>
        <div className="allprices">
          <div className="price">$145</div>
        </div>
      </div>
      <div className="item3">
        <img
          className="item3-image"
          src="./IMAGES/Polo with Tipping Details.png"
        />
        <div className="shirt-descrition-div">
          <p className="shirt-descrition">Polo with Tipping Details</p>
        </div>
        <div className="starandnumber">
          <div className="star-div">
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
          </div>
          <div className="rating">4.0/5</div>
        </div>
        <div className="allprices">
          <div className="price">$180</div>
        </div>
      </div>
      <div className="item4">
        <img className="item4-image" src="./IMAGES/BLACKSTRIPPED T-SHIRT.png" />
        <div className="shirt-descrition-div">
          <p className="shirt-descrition">Black Striped T-shirt</p>
        </div>
        <div className="starandnumber">
          <div className="star-div">
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
          </div>
          <div className="rating">5.0/5</div>
        </div>
        <div className="allprices">
          <div className="price">$120</div>
          <div className="previous-price">$150</div>
          <div>
            <button className="discount-button">-30%</button>
          </div>
        </div>
      </div>
    </div>
    <div className="outer6">
      <div className=" UPDATES">
        <p className="updates-p">
          STAY UPTO DATE ABOUT
          <br /> OUR LATEST OFFERS
          <br />
        </p>
        <div>
          <input
            className="newsletter"
            type="text"
            placeholder="Enter your e-mail address"
          />
          <button className="button-discription">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  </div>
</>
  );
}  

