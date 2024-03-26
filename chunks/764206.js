"use strict";
s.r(t), s.d(t, {
  default: function() {
    return a
  }
});
var a, r = s("37983"),
  i = s("884691"),
  n = s("414456"),
  l = s.n(n),
  o = s("888400"),
  u = s("943232"),
  d = s("36694"),
  c = s("76638"),
  _ = s("216422"),
  E = s("49111"),
  T = s("782340"),
  I = s("202812");
let f = e => {
    let {
      IconComponent: t,
      className: s
    } = e;
    return (0, r.jsx)("div", {
      className: l(I.iconCircle, s),
      children: (0, r.jsx)(t, {
        className: I.icon
      })
    })
  },
  S = e => {
    let {
      circle: t,
      smallHeader: s,
      text: a,
      className: i
    } = e;
    return (0, r.jsxs)("div", {
      className: l(I.recommendationReason, i),
      children: [t, (0, r.jsxs)("div", {
        className: I.description,
        children: [null != s ? (0, r.jsx)("div", {
          className: I.smallHeader,
          children: s
        }) : null, (0, r.jsx)("div", {
          className: I.text,
          children: a
        })]
      })]
    })
  };
a = class extends i.Component {
  render() {
    let {
      reason: e,
      className: t
    } = this.props;
    if (e.type === E.StoreRecommendationTypes.RECENT_RELEASE_DATE) return (0, r.jsx)(S, {
      className: t,
      circle: (0, r.jsx)(f, {
        IconComponent: u.default
      }),
      smallHeader: T.default.Messages.APPLICATION_STORE_NEW_RELEASE,
      text: (0, o.dateFormat)(e.releaseDate, "LL")
    });
    if (e.type === E.StoreRecommendationTypes.RELEASE_DATE) return (0, r.jsx)(S, {
      className: t,
      circle: (0, r.jsx)(f, {
        IconComponent: u.default
      }),
      smallHeader: T.default.Messages.APPLICATION_STORE_DETAILS_RELEASE_DATE,
      text: (0, o.dateFormat)(e.releaseDate, "LL")
    });
    if (e.type === E.StoreRecommendationTypes.EARLY_ACCESS) return null != e.releaseDate ? (0, r.jsx)(S, {
      className: t,
      circle: (0, r.jsx)(f, {
        IconComponent: c.default,
        className: I.earlyAccess
      }),
      smallHeader: T.default.Messages.APPLICATION_STORE_EARLY_ACCESS,
      text: (0, o.dateFormat)(e.releaseDate, "LL")
    }) : (0, r.jsx)(S, {
      className: t,
      circle: (0, r.jsx)(f, {
        IconComponent: c.default,
        className: I.earlyAccess
      }),
      text: T.default.Messages.APPLICATION_STORE_EARLY_ACCESS
    });
    return e.type === E.StoreRecommendationTypes.FLAVOR_TEXT ? (0, r.jsx)(S, {
      circle: (0, r.jsx)(f, {
        IconComponent: d.default
      }),
      text: e.flavorText,
      className: t
    }) : e.type === E.StoreRecommendationTypes.HAS_FREE_PREMIUM_CONTENT ? (0, r.jsx)(S, {
      className: t,
      circle: (0, r.jsx)(f, {
        IconComponent: _.default,
        className: I.premiumCircle
      }),
      text: T.default.Messages.APPLICATION_STORE_FREE_PREMIUM_CONTENT
    }) : null
  }
}