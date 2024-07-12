t.d(n, {
  Y: function() {
return v;
  },
  p: function() {
return x;
  }
});
var i = t(735250);
t(470079);
var l = t(860911),
  r = t(481060),
  s = t(100527),
  o = t(906732),
  a = t(887706),
  c = t(87484),
  d = t(696906),
  u = t(703656),
  m = t(626135),
  S = t(937615),
  _ = t(110742),
  p = t(981631),
  f = t(474936),
  h = t(689938),
  I = t(486966);

function x(e) {
  let {
appId: n,
className: t,
groupListingId: l,
groupListingType: r,
guildId: s,
onClick: o,
onHasClicked: a,
skuId: c,
subPlan: u,
icon: m
  } = e, {
openModal: x
  } = (0, d.Z)({
guildId: s,
groupListingId: l,
showBenefitsFirst: !1,
analyticsLocation: p.Sbl.APP_STOREFRONT,
skuId: c
  }), v = (0, _.M)(c);
  return 'guild' !== r && ('user' !== r || v) ? (0, i.jsx)(E, {
className: t,
children: h.Z.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
  }) : (0, i.jsx)(T, {
appId: n,
skuId: c,
onClick: e => {
  (null != o ? o : x)(e), null == a || a();
},
className: t,
children: (0, i.jsxs)('div', {
  className: I.btnContent,
  children: [
    m,
    h.Z.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
      rate: (0, S.og)((0, S.T4)(u.price, u.currency), f.rV.MONTH, 1)
    })
  ]
})
  });
}

function v(e) {
  let {
appId: n,
className: t,
onClick: l,
onHasClicked: r,
sku: a,
icon: d
  } = e, {
analyticsLocations: u
  } = (0, o.ZP)(s.Z.APP_STOREFRONT), m = () => {
(0, c.Z)({
  applicationId: n,
  skuId: a.id,
  analyticsLocations: u
});
  }, f = (0, _.M)(a.id), x = a.type === p.epS.DURABLE && f, {
price: v
  } = a;
  return null == v ? null : x ? (0, i.jsx)(E, {
className: t,
children: h.Z.Messages.COLLECTIBLES_ALREADY_OWNED
  }) : (0, i.jsx)(T, {
appId: n,
skuId: a.id,
onClick: e => {
  (null != l ? l : m)(e), null == r || r();
},
className: t,
children: (0, i.jsxs)('div', {
  className: I.btnContent,
  children: [
    d,
    h.Z.Messages.STOREFRONT_PURCHASE_FOR.format({
      price: (0, S.T4)(v.amount, v.currency)
    })
  ]
})
  });
}

function T(e) {
  let {
appId: n,
skuId: t,
onClick: s,
...o
  } = e, c = (0, a.Z)();
  return (0, i.jsx)(r.Button, {
...o,
onClick: e => {
  if (m.default.track(p.rMx.STOREFRONT_PURCHASE_CLICKED, {
      application_id: n,
      sku_id: t
    }), !c) {
    e.preventDefault(), e.stopPropagation();
    let i = p.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t),
      r = (0, l.U)(i, !1);
    (0, u.uL)(r);
    return;
  }
  null == s || s(e);
}
  });
}

function E(e) {
  let {
className: n,
children: t
  } = e;
  return (0, i.jsx)(r.Button, {
disabled: !0,
className: n,
look: r.Button.Looks.OUTLINED,
color: r.Button.Colors.PRIMARY,
size: r.Button.Sizes.SMALL,
children: t
  });
}