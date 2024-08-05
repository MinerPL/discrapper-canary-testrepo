n.d(t, {
  Dq: function() {
return p;
  },
  hf: function() {
return T;
  },
  li: function() {
return m;
  },
  oP: function() {
return f;
  },
  rJ: function() {
return h;
  },
  rm: function() {
return g;
  },
  ul: function() {
return I;
  }
}), n(653041), n(47120);
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(392711),
  o = n.n(s),
  l = n(481060),
  u = n(930153),
  c = n(275759),
  d = n(856651),
  _ = n(689938),
  E = n(209);

function f(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
i = [],
a = Number(null !== (t = e[d.PC.REDDIT_TOTAL_KARMA]) && void 0 !== t ? t : -1),
s = '1' === e[d.PC.REDDIT_GOLD],
o = '1' === e[d.PC.REDDIT_MOD];
  return a > -1 && i.push((0, r.jsx)(S, {
className: n,
count: a,
label: _.Z.Messages.CONNECTIONS_PROFILE_REDDIT_KARMA
  }, d.PC.REDDIT_TOTAL_KARMA)), s && i.push((0, r.jsx)(v, {
className: n,
label: _.Z.Messages.CONNECTIONS_REDDIT_GOLD
  }, d.PC.REDDIT_GOLD)), o && i.push((0, r.jsx)(v, {
className: n,
label: _.Z.Messages.CONNECTIONS_REDDIT_MOD
  }, d.PC.REDDIT_MOD)), i;
}

function h(e) {
  var t, n;
  let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
a = [],
s = Number(null !== (t = e[d.PC.TWITTER_STATUSES_COUNT]) && void 0 !== t ? t : -1),
o = Number(null !== (n = e[d.PC.TWITTER_FOLLOWERS_COUNT]) && void 0 !== n ? n : -1);
  return s > -1 && a.push((0, r.jsx)(S, {
className: i,
count: s,
label: _.Z.Messages.CONNECTIONS_PROFILE_TWITTER_STATUSES
  }, d.PC.TWITTER_STATUSES_COUNT)), o > -1 && a.push((0, r.jsx)(S, {
className: i,
count: o,
label: _.Z.Messages.CONNECTIONS_PROFILE_TWITTER_FOLLOWERS
  }, d.PC.TWITTER_FOLLOWERS_COUNT)), a;
}

function p(e) {
  var t, i, a;
  let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
o = [],
l = Number(null !== (t = e[d.PC.STEAM_GAME_COUNT]) && void 0 !== t ? t : -1),
u = Number(null !== (i = e[d.PC.STEAM_ITEM_COUNT_DOTA2]) && void 0 !== i ? i : -1),
c = Number(null !== (a = e[d.PC.STEAM_ITEM_COUNT_TF2]) && void 0 !== a ? a : -1);
  return l > -1 && o.push((0, r.jsx)(S, {
className: s,
count: l,
label: _.Z.Messages.CONNECTIONS_PROFILE_STEAM_GAMES
  }, d.PC.STEAM_GAME_COUNT)), u > -1 && o.push((0, r.jsx)(N, {
className: s,
label: _.Z.Messages.CONNECTIONS_STEAM_ITEMS.format({
  count: u
}),
imageSrc: n(448238),
imageAlt: _.Z.Messages.CONNECTIONS_STEAM_DOTA2
  }, d.PC.STEAM_ITEM_COUNT_DOTA2)), c > -1 && o.push((0, r.jsx)(N, {
className: s,
label: _.Z.Messages.CONNECTIONS_STEAM_ITEMS.format({
  count: c
}),
imageSrc: n(80730),
imageAlt: _.Z.Messages.CONNECTIONS_STEAM_TF2
  }, d.PC.STEAM_ITEM_COUNT_TF2)), o;
}

function m(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
n = [];
  return '1' === e[d.PC.PAYPAL_VERIFIED] && n.push((0, r.jsx)(v, {
className: a()(t, E.paypalVerifiedTag),
label: _.Z.Messages.CONNECTIONS_PAYPAL_VERIFIED
  }, d.PC.PAYPAL_VERIFIED)), n;
}

function I(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
i = [],
a = Number(null !== (t = e[d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) && void 0 !== t ? t : -1),
s = '1' === e[d.PC.EBAY_TOP_RATED_SELLER];
  return a > 0 && i.push((0, r.jsx)(S, {
className: n,
count: a,
label: _.Z.Messages.CONNECTIONS_PROFILE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
percent: !0
  }, d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE)), s && i.push((0, r.jsx)(v, {
className: n,
label: _.Z.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER
  }, d.PC.EBAY_TOP_RATED_SELLER)), i;
}

function T(e) {
  var t, n, i;
  let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
s = [],
o = '1' === e[d.PC.TIKTOK_VERIFIED],
l = Number(null !== (t = e[d.PC.TIKTOK_FOLLOWER_COUNT]) && void 0 !== t ? t : -1),
u = Number(null !== (n = e[d.PC.TIKTOK_FOLLOWING_COUNT]) && void 0 !== n ? n : -1),
c = Number(null !== (i = e[d.PC.TIKTOK_LIKES_COUNT]) && void 0 !== i ? i : -1);
  return l > -1 && s.push((0, r.jsx)(S, {
className: a,
count: l,
label: _.Z.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWERS
  }, d.PC.TIKTOK_FOLLOWER_COUNT)), u > -1 && s.push((0, r.jsx)(S, {
className: a,
count: u,
label: _.Z.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWING
  }, d.PC.TIKTOK_FOLLOWING_COUNT)), c > -1 && s.push((0, r.jsx)(S, {
className: a,
count: c,
label: _.Z.Messages.CONNECTIONS_PROFILE_TIKTOK_LIKES
  }, d.PC.TIKTOK_LIKES_COUNT)), o && s.push((0, r.jsx)(v, {
className: a,
label: _.Z.Messages.CONNECTIONS_TIKTOK_VERIFIED
  }, d.PC.TIKTOK_VERIFIED)), s;
}

function g(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
i = [],
a = Object.keys(e.metadata);
  if (null == e.application_metadata || 0 === Object.keys(e.application_metadata).length || 0 === a.length)
return i;
  for (let s of o().sortBy(a, t => {
  var n, r;
  return null === (r = e.application_metadata) || void 0 === r ? void 0 : null === (n = r[t]) || void 0 === n ? void 0 : n.name;
})) {
let a = e.application_metadata[s];
if (null == a)
  continue;
let o = e.metadata[s];
try {
  switch (a.type) {
    case d.xn.BOOLEAN_EQUAL:
    case d.xn.BOOLEAN_NOT_EQUAL:
      (a.type === d.xn.BOOLEAN_EQUAL && '1' === o || a.type === d.xn.BOOLEAN_NOT_EQUAL && '1' !== o) && i.push((0, r.jsx)(v, {
        className: t,
        label: a.name
      }, a.key));
      break;
    case d.xn.DATETIME_GREATER_THAN_EQUAL:
    case d.xn.DATETIME_LESS_THAN_EQUAL:
      i.push((0, r.jsx)(A, {
        className: t,
        date: o,
        locale: n,
        label: a.name
      }, a.key));
      break;
    case d.xn.INTEGER_EQUAL:
    case d.xn.INTEGER_NOT_EQUAL:
    case d.xn.INTEGER_GREATER_THAN_EQUAL:
    case d.xn.INTEGER_LESS_THAN_EQUAL:
      i.push((0, r.jsx)(S, {
        className: t,
        count: Number(o),
        label: a.name
      }, a.key));
  }
} catch (e) {}
  }
  return i;
}

function S(e) {
  let t, {
  count: n,
  label: i,
  className: s,
  percent: o
} = e,
c = (0, u.$U)(n) + (o ? '%' : '');
  return t = 'string' == typeof i ? _.Z.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
name: i,
value: c
  }) : i.format({
value: c
  }), (0, r.jsx)(l.Text, {
className: a()(E.connectedAccountVanityMetadata, s),
variant: 'text-xs/normal',
color: 'interactive-active',
children: t
  });
}

function A(e) {
  let {
date: t,
locale: n,
label: i,
className: s
  } = e;
  return (0, r.jsx)(l.Text, {
className: a()(E.connectedAccountVanityMetadata, s),
variant: 'text-xs/normal',
color: 'interactive-active',
children: _.Z.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
  value: (0, c.FI)(t, n),
  name: i
})
  });
}

function N(e) {
  let {
label: t,
imageSrc: n,
imageAlt: i,
className: s
  } = e;
  return (0, r.jsxs)('div', {
className: a()(E.connectedAccountVanityMetadata, E.connectedAccountVanityMetadataItem, s),
children: [
  (0, r.jsx)(l.Tooltip, {
    text: i,
    children: e => (0, r.jsx)('img', {
      ...e,
      src: n,
      alt: i,
      className: E.connectedAccountVanityMetadataItemIcon
    })
  }),
  (0, r.jsx)(l.Text, {
    variant: 'text-xs/normal',
    color: 'interactive-active',
    children: t
  })
]
  });
}

function v(e) {
  let {
label: t,
className: n
  } = e;
  return (0, r.jsx)(l.Text, {
variant: 'text-xs/semibold',
color: 'interactive-active',
className: a()(E.connectedAccountVanityMetadata, E.connectedAccountVanityMetadataTag, n),
children: t
  });
}