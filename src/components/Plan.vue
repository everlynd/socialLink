<template>
  <div class="main">
    <div
      class="overlay"
      v-show="buyModalIsOpen || infoModalIsOpen"
      @click="(buyModalIsOpen = false), (infoModalIsOpen = false)"
    ></div>
    <div class="aside-container">
      <div class="aside-header">
        <div class="logo">
          <img :src="require('../assets/logo.svg')" alt="" />
        </div>
      </div>

      <div class="aside-content">
        <div class="hello-section">
          <h2><a href="#"> Hi,alex!</a></h2>
          <p>Questions?<a href="#"> Write us</a></p>
        </div>
        <div class="cases-container">
          <div class="cases-heading">
            <span
              ><img :src="require('../assets/casesicon.svg')" alt="" />
              Cases</span
            ><button @click="isCasesOpen = !isCasesOpen">+</button>
          </div>
          <ul class="dropdown-menu" v-if="isCasesOpen">
            <li class="dropdown-item">
              <span class="case-number">Case 1</span
              ><span class="day-timer">1 day ago</span>
            </li>
            <li class="dropdown-item">
              <span class="case-number">Case 2</span
              ><span class="day-timer">1 day ago</span>
            </li>
            <li class="dropdown-item">
              <span class="case-number">Case 3</span
              ><span class="day-timer">1 day ago</span>
            </li>
            <li class="dropdown-item">
              <span class="case-number">Case 4</span
              ><span class="day-timer">1 day ago</span>
            </li>
            <li class="dropdown-item">
              <span class="case-number">Case 5</span
              ><span class="day-timer">1 day ago</span>
            </li>
            <li class="dropdown-item">
              <span class="case-number">Case 6</span
              ><span class="day-timer">1 day ago</span>
            </li>
            <li class="dropdown-item">
              <span class="case-number">Case 7</span
              ><span class="day-timer">1 day ago</span>
            </li>
            <li class="dropdown-item">
              <span class="case-number">Case 8</span
              ><span class="day-timer">1 day ago</span>
            </li>
            <li class="dropdown-item">
              <span class="case-number">Case 9</span
              ><span class="day-timer">1 day ago</span>
            </li>
            <li class="dropdown-item">
              <span class="case-number">Case 10</span
              ><span class="day-timer">1 day ago</span>
            </li>
          </ul>
          <div class="btn-container">
            <button>Show moore</button> <button>Hide</button>
          </div>
        </div>
        <div class="new-search">
          <img :src="require('../assets/search.svg')" alt="" />
          <span>Add new search</span>
        </div>
        <div class="plan">
          <img :src="require('../assets/plan.svg')" alt="" />
          <span>Plan</span>
        </div>
        <div class="face-galery">
          <img :src="require('../assets/face.svg')" alt="" />
        </div>
      </div>
    </div>
    <div class="info-modal modal" v-show="infoModalIsOpen">
      <div class="modal-heading">Your Gamayun subscription is invalid</div>
      <p class="modal-text">
        You need to purchase a license to use these features.
      </p>
      <div class="modal-btn-container">
        <button class="back-btn" @click="infoModalIsOpen = !infoModalIsOpen">
          &lt; Back
        </button>
        <button @click="$router.push('/subscription')">Go</button>
      </div>
    </div>
    <div class="buy-modal modal" v-show="buyModalIsOpen">
      <div class="close-btn" @click="buyModalIsOpen = !buyModalIsOpen">
        &times;
      </div>
      <div class="modal-heading">
        Your balance has been replenished <br />by {{ currentPrice }} slp
      </div>
      <p class="modal-text">
        Your “Free trial” will be valid until 12.01.2021.
      </p>
      <div class="modal-btn-container">
        <button @click="buyModalIsOpen = !buyModalIsOpen">Go</button>
      </div>
    </div>
    <div class="main-section-container">
      <div class="main-section-header">
        <div class="main-section-header__title">
          <span v-show="MONEY > 0">Plan “Base“ (Active until 12.01.2021)</span>
          <span v-show="MONEY < 0"
            >You have run out of SL points (noMoney)
            <button class="span-btn" @click="addMoney()">
              Click Here to Add Money
            </button>
          </span>
        </div>
        <ul class="main-section-header__nav">
          <li class="nav-item" @click="log">
            <img :src="require('../assets/wallet.svg')" alt="wallet" /> Balance:
            {{ points }} slp
          </li>
          <li class="nav-item">
            <img :src="require('../assets/usericon.svg')" alt="user" />Alex
          </li>
          <li class="nav-item">
            <img :src="require('../assets/bell.svg')" alt="bell" />
          </li>
        </ul>
      </div>
      <div class="main-section__content">
        <h2>Plan</h2>
        <div class="content-item">
          <div class="content-item__data">
            <div class="content-item__heading">
              <h3>Gamayun base</h3>
              <span class="content-price">$99 / month</span>
            </div>
            <div>
              <span class="data-item"
                >Expired date: <span class="grayed">21.02.2022</span>
              </span>
              <span class="data-status active">active</span>
            </div>
            <div>
              <span class="data-item">Monthly package: 12 000 slp </span>
              <span class="data-status active">active</span>
            </div>
            <div class="lastItem">
              <div>
                <span class="data-item">Auto renewal subscription: on</span>
                <span class="data-status cancel">Cancel</span>
              </div>
              <button class="editplan" @click="$router.push('/subscription')">
                Edit plan
              </button>
            </div>
          </div>
        </div>
        <div class="content-item">
          <div class="content-item__data">
            <div class="content-item__heading">
              <h3>Social links Pro</h3>
            </div>
            <div>
              <span class="data-item"
                >Expired date: <span class="grayed">21.02.2022</span>
              </span>
              <span class="data-status active">active</span>
            </div>
            <div>
              <span class="data-item"
                >Daily limit:
                <span class="grayed">1 000 000 slp</span>
              </span>
              <span class="data-status"
                ><img
                  :src="require('../assets/arrowbottom.svg')"
                  alt=""
                  @click="isOpenMenu = !isOpenMenu"
                />
              </span>
              <div class="dropped-menu" v-if="isOpenMenu">
                <h4>Limits</h4>
                <div class="phone-data">
                  <span class="data-item"
                    >IP vs Phone:
                    <span class="grayed">10 000 </span>
                  </span>
                  <span class="data-item"
                    >IP vs Email:
                    <span class="grayed">10 000 </span>
                  </span>
                  <span class="data-item"
                    >Azure face search:
                    <span class="grayed">10 000 </span>
                  </span>
                  <span class="data-item"
                    >Domain emails:
                    <span class="grayed">10 000 </span>
                  </span>
                </div>
                <div class="facebook">
                  <span class="data-item"
                    >Facebook:
                    <span class="grayed">1 000 000 </span>
                  </span>
                  <span class="data-item"
                    >Facebook group members:
                    <span class="grayed">10 000 </span>
                  </span>
                  <span class="data-item"
                    >Facebook search profile detailed:
                    <span class="grayed"> 10 000 </span>
                  </span>
                </div>
                <div class="sldb">
                  <span class="data-item"
                    >Sldb:
                    <span class="grayed"> 10 000 </span>
                  </span>
                  <span class="data-item"
                    >Sldb2:
                    <span class="grayed"> 10 000 </span>
                  </span>
                  <span class="data-item"
                    >Sldbl:
                    <span class="grayed"> 10 000 </span>
                  </span>
                </div>
                <div class="misc">
                  <span class="data-item"
                    >Bloxy:
                    <span class="grayed">30 000 </span>
                  </span>
                  <span class="data-item"
                    >Social mapper:
                    <span class="grayed">10 000 </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="lastItem">
              <div>
                <span class="data-item"
                  >API Key:
                  <span class="grayed"
                    >staff-9NEWSrpEbMt1ayPLDQqsgvybbl
                  </span></span
                >
                <span class="data-status"
                  ><img :src="require('../assets/arrowbottom.svg')" alt=""
                /></span>
              </div>
            </div>
          </div>
        </div>
        <div class="content-item">
          <div class="content-item__data">
            <div class="content-item__heading">
              <h3>Gamayun base</h3>
              <span class="content-price">$99 / month</span>
            </div>
            <div>
              <span class="data-item"
                >Expired date: <span class="grayed">21.02.2022</span>
              </span>
              <span class="data-status active">active</span>
            </div>
            <div>
              <span class="data-item">Monthly package: 12 000 slp </span>
              <span class="data-status active">active</span>
            </div>
            <div class="lastItem">
              <div>
                <span class="data-item">Auto renewal subscription: on</span>
                <span class="data-status cancel">Cancel</span>
              </div>
              <button class="editplan" @click="$router.push('/subscription')">
                Edit plan
              </button>
            </div>
          </div>
        </div>
        <h2>Buy SL points</h2>
        <div class="content-item">
          <div class="content-item__data">
            <div class="slp-item">
              <span class="data-item">100 slp </span>
              <span class="data-status active"
                >$10
                <button
                  class="buy-btn"
                  @click="
                    (buyModalIsOpen = !buyModalIsOpen),
                      buy(firstValue),
                      spend(10)
                  "
                >
                  Buy
                </button></span
              >
            </div>
            <div class="slp-item">
              <span class="data-item">500 slp </span>
              <span class="data-status active"
                >$40
                <button
                  class="buy-btn"
                  @click="
                    (buyModalIsOpen = !buyModalIsOpen),
                      buy(secondValue),
                      spend(40)
                  "
                >
                  Buy
                </button></span
              >
            </div>
            <div class="slp-item">
              <span class="data-item">1000 slp </span>
              <span class="data-status active"
                >$70
                <button
                  class="buy-btn"
                  @click="
                    (buyModalIsOpen = !buyModalIsOpen),
                      buy(thirdValue),
                      spend(70)
                  "
                >
                  Buy
                </button></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isOpenMenu: false,
      isCasesOpen: false,
      buyModalIsOpen: false,
      infoModalIsOpen: false,
      firstValue: 100,
      secondValue: 500,
      thirdValue: 1000,
      currentPrice: null,
    };
  },
  methods: {
    ...mapActions(["SUM_POINTS", "SPEND_MONEY", "ADD_MONEY"]),
    buy(value) {
      if (this.MONEY > 0) {
        this.SUM_POINTS(value);
        this.currentPrice = value;
      }
    },
    spend(value) {
      if (this.MONEY > 0) {
        this.SPEND_MONEY(value);
      } else {
        this.buyModalIsOpen = false;
        this.infoModalIsOpen = true;
      }
    },
    addMoney() {
      this.ADD_MONEY(500);
    },
    log() {
      console.log(this.$store.state.user.points);
    },
  },
  computed: {
    ...mapGetters(["NAME", "MONEY", "POINTS"]),
    points: {
      get() {
        return this.POINTS;
      },
      set(value) {
        this.SUM_POINTS(value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.span-btn {
  color: #60bce3;
  background-color: #fff;
  border-radius: 55px;
  padding: 5px 15px;
  font-size: 15px;
  font-weight: 600;
}
.nav-item {
  display: flex;
  align-items: center;
  img {
    margin-right: 15px;
    &:last-child {
      margin: 0;
    }
  }
}
.data-status {
  cursor: pointer;
}
.hide {
  display: none;
}
.show {
  display: block;
}

.main {
  display: flex;
  height: 100vh;
}
</style>