<template>
  <div class="subscr">
    <div class="main-container">
      <header>
        <div class="cc">
          <div class="logo">
            <img :src="require('../assets/sublogo.svg')" alt="" />
            <p>Questions?<a href="#"> Write us</a></p>
          </div>
          <ul class="main-section-header__nav">
            <li class="nav-item">
              <img :src="require('../assets/wallet.svg')" alt="" /> Balance:
              {{ POINTS }} slp
            </li>
            <li class="nav-item">
              <img :src="require('../assets/usericon.svg')" alt="" />Alex
            </li>
            <li class="nav-item">
              <img :src="require('../assets/bell.svg')" alt="" />
            </li>
          </ul>
        </div>
      </header>
      <section>
        <div class="section-heading">
          <div class="title">Select plan</div>
          <div class="date-picker">
            <span class="chechked-value" :class="{ active: !che }"
              >Monthly</span
            >
            <div>
              <input
                type="checkbox"
                class="checkbox"
                id="checkbox"
                v-model="che"
              />
              <label for="checkbox"></label>
            </div>

            <span class="chechked-value" :class="{ active: che }">Yearly</span>
          </div>
        </div>
        <div class="cart-section">
          <div class="base-cart cart">
            <div class="cart-heading">Base</div>
            <div class="cart-content">
              <div>
                <p>
                  Individuals discovery by name, email,<br />
                  <span class="grayed">phone, alias, photo</span>
                </p>

                <img :src="require('../assets/okicon.svg')" alt="" />
              </div>
              <div>
                <p>Advanced social links analysis</p>

                <img :src="require('../assets/okicon.svg')" alt="" />
              </div>
              <div>
                <p>Export basic report to PDF</p>

                <img :src="require('../assets/okicon.svg')" alt="" />
              </div>
              <div>
                <p>Target individual discovery by photo</p>

                <img :src="require('../assets/okicon.svg')" alt="" />
              </div>
              <div class="monthly">
                <span>Monthly package</span>
                <span>12 000 slp</span>
              </div>
              <div class="cart-price">
                <span v-show="!che">$120 / month</span
                ><span v-show="che">$1000 / year</span>
              </div>
              <div class="btn-container">
                <button @click="buy(12000), spend(120), $router.push('/')">
                  Pay
                </button>
              </div>
            </div>
          </div>
          <div class="pro-cart cart">
            <div class="cart-heading">Pro</div>
            <div class="cart-content">
              <div class="features">
                <span>Features of Base Plan</span>
                <span>+</span>
              </div>
              <div>
                <p>
                  Report builder
                  <span class="grayed"
                    >allows flexible report<br />
                    customization and export.</span
                  >
                </p>

                <img :src="require('../assets/okicon.svg')" alt="" />
              </div>
              <div>
                <p>
                  Search posts <span class="grayed">by hashtag, keywords.</span>
                </p>

                <img :src="require('../assets/okicon.svg')" alt="" />
              </div>
              <div>
                <p>Dedicated support</p>

                <img :src="require('../assets/okicon.svg')" alt="" />
              </div>
              <div>
                <p>
                  Target individual activity.<br />
                  <span class="grayed">Monitoring in social networks</span>
                </p>

                <img :src="require('../assets/okicon.svg')" alt="" />
              </div>
              <div class="monthly">
                <span>Monthly package</span>
                <span>12 000 slp</span>
              </div>
              <div class="cart-price">
                <span v-show="!che">$120 / month</span
                ><span v-show="che">$1000 / year</span>
              </div>
              <div class="btn-container">
                <button type="button" disabled>Pay</button>
              </div>
            </div>
          </div>
          <div class="enterprice-cart cart">
            <div class="cart-content">
              <div class="img-bgc">
                <img :src="require('../assets/interprice.svg')" alt="" />
              </div>

              <p>
                Didn't find what you were looking <br />
                for? Contact us to learn about <br />
                cooperation opportunities!
              </p>

              <div class="container">
                <button class="interprice-btn">Contact us</button>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-text">
          <span
            >Our service supports searches in Twitter, Instagram, Facebook and
            other major social networks</span
          >
          <span><a href="#">I have problems with payments</a></span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      che: false,
    };
  },
  methods: {
    ...mapActions(["SUM_POINTS", "SPEND_MONEY"]),
    buy(value) {
      this.SUM_POINTS(value);
    },
    spend(value) {
      if (this.MONEY > 0) {
        this.SPEND_MONEY(value);
      } else {
        alert("no money");
      }
    },
  },
  computed: {
    ...mapGetters(["NAME", "MONEY", "POINTS"]),
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  width: 1440px;
  margin: 0 auto;
}
.subscr {
  background: #e5e5e5;
  height: 100vh;
}
header {
  .cc {
    width: 1400px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
  }
  background: #60bce3;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  .logo {
    display: flex;
    align-items: center;
  }
  a {
    color: #ffffff;
  }
  p {
    color: #ffffff;
    margin-left: 24px;
  }
  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    li {
      padding: 0 15px;
      display: flex;
      align-items: center;
      color: white;
    }
  }
}
section {
  width: 70%;
  margin: 0 auto;
  padding: 5px;
}
.img-bgc {
  img {
    width: 100%;
  }
  max-width: 100%;
  height: 198px;
  background: white;
  background-size: cover;
}
.active {
  color: #60bce3 !important;
}
.date-picker {
  display: flex;
  align-items: center;
  div {
    margin: 0 15px;
  }
}
.chechked-value {
  font-size: 22px;
  line-height: 32px;
  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: -0.02em;
  color: #bfd2df;
}
.section-heading {
  margin: 0 auto;
  margin-top: 125px;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    font-weight: 600;
    font-size: 28px;
    line-height: 48px;
    letter-spacing: 0.05em;
    color: #585859;
  }
}
.cart {
  width: 30% !important;
}
.features {
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #bfd2df;
  justify-content: space-around !important;
}
.cart-section {
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
}

.cart-heading {
  font-weight: 600;
  padding: 10px 0;
  font-size: 22px;
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #5692ec;
  background: #ffffff;
  border-radius: 5px 5px 0 0;
}
.cart-content {
  padding: 25px;
  background: #f8fcff;
  border-radius: 0 0 5px 5px;
  div {
    display: flex;
    justify-content: space-between;
  }
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.08em;
    color: #585859;
  }
}
.monthly {
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.04em;
  color: #8d8d8e;
  margin: 60px 0 8px 0;
}
.cart-price {
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.12em;
  color: #60bce3;
  span {
    margin: 0 auto;
  }
}
.btn-container {
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px 0;
    margin-top: 16px;
    color: white;
    width: 100%;
    background: #60bce3;
    border-radius: 5px;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.08em;
    &:disabled {
      background: #e9ebec;
      cursor: default;
    }
  }
}
.container {
  margin-top: 133px;
}
.interprice-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #60bce3;
  padding: 14px 0;
  margin-top: 16px;
  color: #60bce3;
  width: 100%;
  border-radius: 5px;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.08em;
}
.grayed {
  color: #8d8d8e;
}
.pro-cart {
  .monthly {
    margin-top: -8px;
  }
}
.enterprice-cart {
  // height: 480px;
  text-align: center;
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;

  .cart-content {
    // padding: 0;
    p {
      // margin-bottom: 143px;
      margin: 25px 0 0 0;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      letter-spacing: 0.04em;
      color: #bfd2df;
    }
  }
}

.footer-text {
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #bfd2df;
}

.checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
  margin: 10px 0 0 20px;
}
.checkbox + label {
  position: relative;
  padding: 0 0 0 50px;
  cursor: pointer;
}
.checkbox + label:before {
  content: "";
  position: absolute;
  top: -4px;
  left: 0;
  width: 45px;
  height: 28px;
  border-radius: 50px;
  background: #60bce3;
  transition: 0.2s;
}
.checkbox + label:after {
  content: "";
  position: absolute;
  top: -2px;
  left: 2px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: 0.2s;
}
.checkbox:checked + label:before {
  background: #60bce3;
}
.checkbox:checked + label:after {
  left: 19px;
}
</style>