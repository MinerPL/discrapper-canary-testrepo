"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("803997"),
  r = s.n(i),
  n = s("981631"),
  l = s("535146");
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
t.default = e => {
  let {
    agency: t,
    rating: s,
    className: i
  } = e, n = u[t][s];
  return null == n ? null : (0, a.jsx)("div", {
    className: r()(l.contentRating, n, i)
  })
}