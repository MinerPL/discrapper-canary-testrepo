"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("37983");
s("884691");
var r = s("414456"),
  i = s.n(r),
  n = s("49111"),
  l = s("755907");
let o = {
    ESRB: {
      EVERYONE: "1",
      EVERYONE_TEN_PLUS: "2",
      TEEN: "3",
      MATURE: "4",
      ADULT: "5",
      RATING_PENDING: "6"
    },
    PEGI: {
      THREE: "1",
      SEVEN: "2",
      TWELVE: "3",
      SIXTEEN: "4",
      EIGHTEEN: "5"
    }
  },
  u = {
    [n.ContentRatingAgencies.ESRB]: {
      [o.ESRB.EVERYONE]: l.esrbEveryone,
      [o.ESRB.EVERYONE_TEN_PLUS]: l.esrbEveryoneTenPlus,
      [o.ESRB.TEEN]: l.esrbTeen,
      [o.ESRB.MATURE]: l.esrbMature,
      [o.ESRB.ADULT]: l.esrbAdult,
      [o.ESRB.RATING_PENDING]: l.esrbRatingPending
    },
    [n.ContentRatingAgencies.PEGI]: {
      [o.PEGI.THREE]: l.pegiThree,
      [o.PEGI.SEVEN]: l.pegiSeven,
      [o.PEGI.TWELVE]: l.pegiTwelve,
      [o.PEGI.SIXTEEN]: l.pegiSixteen,
      [o.PEGI.EIGHTEEN]: l.pegiEighteen
    }
  };
var d = e => {
  let {
    agency: t,
    rating: s,
    className: r
  } = e, n = u[t][s];
  return null == n ? null : (0, a.jsx)("div", {
    className: i(l.contentRating, n, r)
  })
}