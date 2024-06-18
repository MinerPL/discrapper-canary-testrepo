"use strict";
n.d(t, {
  Dq: function() {
    return h
  },
  hf: function() {
    return N
  },
  li: function() {
    return S
  },
  oP: function() {
    return I
  },
  rJ: function() {
    return T
  },
  rm: function() {
    return A
  },
  ul: function() {
    return f
  }
}), n(653041), n(47120);
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(392711),
  a = n.n(o),
  l = n(481060),
  u = n(930153),
  _ = n(275759),
  d = n(856651),
  c = n(689938),
  E = n(605409);

function I(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
    r = [],
    s = Number(null !== (t = e[d.PC.REDDIT_TOTAL_KARMA]) && void 0 !== t ? t : -1),
    o = "1" === e[d.PC.REDDIT_GOLD],
    a = "1" === e[d.PC.REDDIT_MOD];
  return s > -1 && r.push((0, i.jsx)(m, {
    className: n,
    count: s,
    label: c.Z.Messages.CONNECTIONS_PROFILE_REDDIT_KARMA
  }, d.PC.REDDIT_TOTAL_KARMA)), o && r.push((0, i.jsx)(C, {
    className: n,
    label: c.Z.Messages.CONNECTIONS_REDDIT_GOLD
  }, d.PC.REDDIT_GOLD)), a && r.push((0, i.jsx)(C, {
    className: n,
    label: c.Z.Messages.CONNECTIONS_REDDIT_MOD
  }, d.PC.REDDIT_MOD)), r
}

function T(e) {
  var t, n;
  let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
    s = [],
    o = Number(null !== (t = e[d.PC.TWITTER_STATUSES_COUNT]) && void 0 !== t ? t : -1),
    a = Number(null !== (n = e[d.PC.TWITTER_FOLLOWERS_COUNT]) && void 0 !== n ? n : -1);
  return o > -1 && s.push((0, i.jsx)(m, {
    className: r,
    count: o,
    label: c.Z.Messages.CONNECTIONS_PROFILE_TWITTER_STATUSES
  }, d.PC.TWITTER_STATUSES_COUNT)), a > -1 && s.push((0, i.jsx)(m, {
    className: r,
    count: a,
    label: c.Z.Messages.CONNECTIONS_PROFILE_TWITTER_FOLLOWERS
  }, d.PC.TWITTER_FOLLOWERS_COUNT)), s
}

function h(e) {
  var t, r, s;
  let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
    a = [],
    l = Number(null !== (t = e[d.PC.STEAM_GAME_COUNT]) && void 0 !== t ? t : -1),
    u = Number(null !== (r = e[d.PC.STEAM_ITEM_COUNT_DOTA2]) && void 0 !== r ? r : -1),
    _ = Number(null !== (s = e[d.PC.STEAM_ITEM_COUNT_TF2]) && void 0 !== s ? s : -1);
  return l > -1 && a.push((0, i.jsx)(m, {
    className: o,
    count: l,
    label: c.Z.Messages.CONNECTIONS_PROFILE_STEAM_GAMES
  }, d.PC.STEAM_GAME_COUNT)), u > -1 && a.push((0, i.jsx)(R, {
    className: o,
    label: c.Z.Messages.CONNECTIONS_STEAM_ITEMS.format({
      count: u
    }),
    imageSrc: n(448238),
    imageAlt: c.Z.Messages.CONNECTIONS_STEAM_DOTA2
  }, d.PC.STEAM_ITEM_COUNT_DOTA2)), _ > -1 && a.push((0, i.jsx)(R, {
    className: o,
    label: c.Z.Messages.CONNECTIONS_STEAM_ITEMS.format({
      count: _
    }),
    imageSrc: n(80730),
    imageAlt: c.Z.Messages.CONNECTIONS_STEAM_TF2
  }, d.PC.STEAM_ITEM_COUNT_TF2)), a
}

function S(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
    n = [];
  return "1" === e[d.PC.PAYPAL_VERIFIED] && n.push((0, i.jsx)(C, {
    className: s()(t, E.paypalVerifiedTag),
    label: c.Z.Messages.CONNECTIONS_PAYPAL_VERIFIED
  }, d.PC.PAYPAL_VERIFIED)), n
}

function f(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
    r = [],
    s = Number(null !== (t = e[d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) && void 0 !== t ? t : -1),
    o = "1" === e[d.PC.EBAY_TOP_RATED_SELLER];
  return s > 0 && r.push((0, i.jsx)(m, {
    className: n,
    count: s,
    label: c.Z.Messages.CONNECTIONS_PROFILE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
    percent: !0
  }, d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE)), o && r.push((0, i.jsx)(C, {
    className: n,
    label: c.Z.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER
  }, d.PC.EBAY_TOP_RATED_SELLER)), r
}

function N(e) {
  var t, n, r;
  let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
    o = [],
    a = "1" === e[d.PC.TIKTOK_VERIFIED],
    l = Number(null !== (t = e[d.PC.TIKTOK_FOLLOWER_COUNT]) && void 0 !== t ? t : -1),
    u = Number(null !== (n = e[d.PC.TIKTOK_FOLLOWING_COUNT]) && void 0 !== n ? n : -1),
    _ = Number(null !== (r = e[d.PC.TIKTOK_LIKES_COUNT]) && void 0 !== r ? r : -1);
  return l > -1 && o.push((0, i.jsx)(m, {
    className: s,
    count: l,
    label: c.Z.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWERS
  }, d.PC.TIKTOK_FOLLOWER_COUNT)), u > -1 && o.push((0, i.jsx)(m, {
    className: s,
    count: u,
    label: c.Z.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWING
  }, d.PC.TIKTOK_FOLLOWING_COUNT)), _ > -1 && o.push((0, i.jsx)(m, {
    className: s,
    count: _,
    label: c.Z.Messages.CONNECTIONS_PROFILE_TIKTOK_LIKES
  }, d.PC.TIKTOK_LIKES_COUNT)), a && o.push((0, i.jsx)(C, {
    className: s,
    label: c.Z.Messages.CONNECTIONS_TIKTOK_VERIFIED
  }, d.PC.TIKTOK_VERIFIED)), o
}

function A(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
    r = [],
    s = Object.keys(e.metadata);
  if (null == e.application_metadata || 0 === Object.keys(e.application_metadata).length || 0 === s.length) return r;
  for (let o of a().sortBy(s, t => {
      var n, i;
      return null === (i = e.application_metadata) || void 0 === i ? void 0 : null === (n = i[t]) || void 0 === n ? void 0 : n.name
    })) {
    let s = e.application_metadata[o];
    if (null == s) continue;
    let a = e.metadata[o];
    try {
      switch (s.type) {
        case d.xn.BOOLEAN_EQUAL:
        case d.xn.BOOLEAN_NOT_EQUAL:
          (s.type === d.xn.BOOLEAN_EQUAL && "1" === a || s.type === d.xn.BOOLEAN_NOT_EQUAL && "1" !== a) && r.push((0, i.jsx)(C, {
            className: t,
            label: s.name
          }, s.key));
          break;
        case d.xn.DATETIME_GREATER_THAN_EQUAL:
        case d.xn.DATETIME_LESS_THAN_EQUAL:
          r.push((0, i.jsx)(O, {
            className: t,
            date: a,
            locale: n,
            label: s.name
          }, s.key));
          break;
        case d.xn.INTEGER_EQUAL:
        case d.xn.INTEGER_NOT_EQUAL:
        case d.xn.INTEGER_GREATER_THAN_EQUAL:
        case d.xn.INTEGER_LESS_THAN_EQUAL:
          r.push((0, i.jsx)(m, {
            className: t,
            count: Number(a),
            label: s.name
          }, s.key))
      }
    } catch (e) {}
  }
  return r
}

function m(e) {
  let t, {
      count: n,
      label: r,
      className: o,
      percent: a
    } = e,
    _ = (0, u.$U)(n) + (a ? "%" : "");
  return t = "string" == typeof r ? c.Z.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
    name: r,
    value: _
  }) : r.format({
    value: _
  }), (0, i.jsx)(l.Text, {
    className: s()(E.connectedAccountVanityMetadata, o),
    variant: "text-xs/normal",
    color: "interactive-active",
    children: t
  })
}

function O(e) {
  let {
    date: t,
    locale: n,
    label: r,
    className: o
  } = e;
  return (0, i.jsx)(l.Text, {
    className: s()(E.connectedAccountVanityMetadata, o),
    variant: "text-xs/normal",
    color: "interactive-active",
    children: c.Z.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
      value: (0, _.FI)(t, n),
      name: r
    })
  })
}

function R(e) {
  let {
    label: t,
    imageSrc: n,
    imageAlt: r,
    className: o
  } = e;
  return (0, i.jsxs)("div", {
    className: s()(E.connectedAccountVanityMetadata, E.connectedAccountVanityMetadataItem, o),
    children: [(0, i.jsx)(l.Tooltip, {
      text: r,
      children: e => (0, i.jsx)("img", {
        ...e,
        src: n,
        alt: r,
        className: E.connectedAccountVanityMetadataItemIcon
      })
    }), (0, i.jsx)(l.Text, {
      variant: "text-xs/normal",
      color: "interactive-active",
      children: t
    })]
  })
}

function C(e) {
  let {
    label: t,
    className: n
  } = e;
  return (0, i.jsx)(l.Text, {
    variant: "text-xs/semibold",
    color: "interactive-active",
    className: s()(E.connectedAccountVanityMetadata, E.connectedAccountVanityMetadataTag, n),
    children: t
  })
}