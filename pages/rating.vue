<template>
  <div>
    <NavBar />
    <div class="flex pt-12">
      <div class="py-12 px-2 mx-auto w-full rating-wrapper">
        <div class="w-full text-center">
          <img src="~/assets/star.svg" alt="" class="mx-auto" />
          <div class="mb-6">
            <p class="greeting--text">Woohoo!</p>
            <p class="thank-you--text">Thank you for choosing FinStack!</p>
          </div>
          <div class="rating--box">
            <p class="rating--text">Rate our service</p>
            <div class="rating">
              <i class="rating-star"></i>
              <i class="rating-star"></i>
              <i class="rating-star"></i>
              <i class="rating-star"></i>
              <i class="rating-star"></i>
            </div>
          </div>
          <p class="review-request">Leave a review on</p>
          <button class="btn btn-block primary" @click="facebookReview">
            <img src="~/assets/svg/facebook.svg" alt="facebook" />
            facebook
          </button>
          <button class="btn btn-block" @click="twitterReview">
            <img src="~/assets/svg/twitter.svg" alt="twitter" />
            twitter
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useConversionStore } from "~~/store/conversion";
import { useAuthStore } from "~~/store/auth";
definePageMeta({
  middleware: ["auth"],
});
const token = useAuthStore().$state.user.access;
const config = useRuntimeConfig();
const trade = useConversionStore().$state.trade;
const exchange = useConversionStore().$state.exchange;
const score = ref(2);
const rateTrade = () => {
  const res = useFetch(`${config.public.baseURL}/trades/${trade.public_id}/`, {
    method: "PATCH",
    body: {
      rating: score.value,
    },
    onRequest({ request, options }) {
      options.headers = options.headers || {};
      options.headers.authorization = `Bearer ${token}`;
    },
    onResponse({ request, response, options }) {
      if (response.ok) {
        useConversionStore().setTrade(response._data.data);
        useNotification().toast.success("Thank you for your feedback.");
      } else {
        useNotification().toast.error(response._data.message);
      }
    },
  });
};
const facebookReview = () => {
  const appId = "YOUR_FACEBOOK_APP_ID";
  const pageId = "YOUR_FACEBOOK_PAGE_ID";
  const reviewLink = `https://www.facebook.com/${pageId}/reviews/?app_id=${appId}`;

  window.open(reviewLink, "_blank");
};

const twitterReview = () => {
  const twitterUsername = "YOUR_TWITTER_USERNAME"; // Replace with your Twitter username
  const reviewText =
    "I had a great experience with XYZ company! Highly recommended. #XYZCompany"; // Replace with your desired review text

  const tweetLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    reviewText
  )}&via=${twitterUsername}`;

  window.open(tweetLink, "_blank");
};
</script>

<style lang="less" scoped>
.rating-wrapper {
  width: 100%;
  max-width: 345px;
}
.greeting--text {
  font-family: "Lora";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  text-align: center;
  color: #373d4a;
  margin-top: 10px;
}
.thank-you--text {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #373d4a;
  margin-top: 10px;
}
.rating--text {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  /* identical to box height, or 27px */

  text-align: center;

  color: #000000;
}
.rating--box {
  margin: 55px 0;
}
.rating-star {
  margin-top: 16px;
}
.rating-star {
  position: relative;
  cursor: pointer;

  display: inline-block;
  width: 0;
  height: 0;

  margin-left: 0.9em;
  margin-right: 0.9em;
  margin-bottom: 1.2em;

  border-right: 0.3em solid transparent;
  border-bottom: 0.7em solid #000;
  border-left: 0.3em solid transparent;

  /* Controlls the size of the stars. */
  font-size: 16px;

  &.active {
    border-bottom: 0.7em solid #fc0;
  }

  &:before,
  &:after {
    content: "";

    display: block;
    width: 0;
    height: 0;

    position: absolute;
    top: 0.6em;
    left: -1em;

    border-right: 1em solid transparent;
    border-bottom: 0.7em solid #000;
    border-left: 1em solid transparent;

    transform: rotate(-35deg);
  }

  &.active {
    &:before,
    &:after {
      border-bottom: 0.7em solid #fc0;
    }
  }

  &:after {
    transform: rotate(35deg);
  }
}
.review-request {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  margin-bottom: 16px;
  /* identical to box height, or 27px */

  text-align: center;

  color: #000000;
}
.btn {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  text-transform: capitalize;
  margin-bottom: 8px;
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
  color: #1d9bf0;

  img {
    width: 23px;
    margin-right: 15px;
  }

  &.primary {
    color: #ffffff;
    background: #1877f2;
    border-color: #1877f2;
  }
}
</style>
