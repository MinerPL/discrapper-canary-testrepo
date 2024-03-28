"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
});
var a = s("735250"),
  i = s("470079"),
  r = s("803997"),
  n = s.n(r),
  l = s("55935"),
  o = s("305878"),
  u = s("263704"),
  d = s("207343"),
  c = s("466111"),
  _ = s("981631"),
  E = s("689938"),
  T = s("388239");
let I = e => {
    let {
      IconComponent: t,
      className: s
    } = e;
    return (0, a.jsx)("div", {
      className: n()(T.iconCircle, s),
      children: (0, a.jsx)(t, {
        className: T.icon
      })
    })
  },
  R = e => {
    let {
      circle: t,
      smallHeader: s,
      text: i,
      className: r
    } = e;
    return (0, a.jsxs)("div", {
      className: n()(T.recommendationReason, r),
      children: [t, (0, a.jsxs)("div", {
        className: T.description,
        children: [null != s ? (0, a.jsx)("div", {
          className: T.smallHeader,
          children: s
        }) : null, (0, a.jsx)("div", {
          className: T.text,
          children: i
        })]
      })]
    })
  };
class S extends i.Component {
  render() {
    let {
      reason: e,
      className: t
    } = this.props;
    if (e.type === _.StoreRecommendationTypes.RECENT_RELEASE_DATE) return (0, a.jsx)(R, {
      className: t,
      circle: (0, a.jsx)(I, {
        IconComponent: o.default
      }),
      smallHeader: E.default.Messages.APPLICATION_STORE_NEW_RELEASE,
      text: (0, l.dateFormat)(e.releaseDate, "LL")
    });
    if (e.type === _.StoreRecommendationTypes.RELEASE_DATE) return (0, a.jsx)(R, {
      className: t,
      circle: (0, a.jsx)(I, {
        IconComponent: o.default
      }),
      smallHeader: E.default.Messages.APPLICATION_STORE_DETAILS_RELEASE_DATE,
      text: (0, l.dateFormat)(e.releaseDate, "LL")
    });
    if (e.type === _.StoreRecommendationTypes.EARLY_ACCESS) return null != e.releaseDate ? (0, a.jsx)(R, {
      className: t,
      circle: (0, a.jsx)(I, {
        IconComponent: d.default,
        className: T.earlyAccess
      }),
      smallHeader: E.default.Messages.APPLICATION_STORE_EARLY_ACCESS,
      text: (0, l.dateFormat)(e.releaseDate, "LL")
    }) : (0, a.jsx)(R, {
      className: t,
      circle: (0, a.jsx)(I, {
        IconComponent: d.default,
        className: T.earlyAccess
      }),
      text: E.default.Messages.APPLICATION_STORE_EARLY_ACCESS
    });
    return e.type === _.StoreRecommendationTypes.FLAVOR_TEXT ? (0, a.jsx)(R, {
      circle: (0, a.jsx)(I, {
        IconComponent: u.default
      }),
      text: e.flavorText,
      className: t
    }) : e.type === _.StoreRecommendationTypes.HAS_FREE_PREMIUM_CONTENT ? (0, a.jsx)(R, {
      className: t,
      circle: (0, a.jsx)(I, {
        IconComponent: c.default,
        className: T.premiumCircle
      }),
      text: E.default.Messages.APPLICATION_STORE_FREE_PREMIUM_CONTENT
    }) : null
  }
}