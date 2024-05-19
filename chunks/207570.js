"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var i = n("735250");
n("470079");
var r = n("442837"),
  a = n("481060"),
  s = n("970321"),
  o = n("886491"),
  l = n("621853"),
  u = n("873572"),
  d = n("520978"),
  _ = n("659101"),
  c = n("479968");

function E(e) {
  var t;
  let {
    user: n,
    guildId: a
  } = e, o = (0, r.useStateFromStores)([l.default], () => {
    var e;
    return null === (e = l.default.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application
  }), u = (0, s.useAppStorefrontAvailable)(null !== (t = null == o ? void 0 : o.id) && void 0 !== t ? t : "");
  return null == o ? null : (0, i.jsx)(_.default, {
    children: (0, i.jsxs)("div", {
      className: c.buttonsContainer,
      children: [(0, i.jsx)(d.default, {
        application: o,
        className: c.button
      }), u && null != a && (0, i.jsx)(I, {
        application: o,
        user: n,
        guildId: a
      })]
    })
  })
}

function I(e) {
  var t;
  let {
    application: r,
    user: s,
    guildId: l
  } = e, d = null !== (t = (0, u.default)({
    user: s,
    guildId: l
  }).subscriptionGroupListing) && void 0 !== t ? t : void 0;
  return (0, i.jsx)(o.StorefrontButton, {
    onClick: () => (function(e, t, r) {
      (0, a.openModalLazy)(async () => {
        let {
          default: a
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("29549"), n.e("31605"), n.e("77172"), n.e("98538"), n.e("20869")]).then(n.bind(n, "7225"));
        return n => (0, i.jsx)(a, {
          transitionState: n.transitionState,
          onClose: n.onClose,
          appId: e.id,
          subscriptionGroupListing: t,
          guildId: r
        })
      })
    })(r, d, l),
    className: c.button,
    size: a.ButtonSizes.SMALL
  })
}