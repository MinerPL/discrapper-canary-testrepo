"use strict";
n.d(t, {
  Z: function() {
    return E
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(481060),
  o = n(970321),
  a = n(886491),
  l = n(621853),
  u = n(873572),
  _ = n(520978),
  d = n(659101),
  c = n(479968);

function E(e) {
  var t;
  let {
    user: n,
    guildId: s
  } = e, a = (0, r.e7)([l.Z], () => {
    var e;
    return null === (e = l.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application
  }), u = (0, o.R)(null !== (t = null == a ? void 0 : a.id) && void 0 !== t ? t : "");
  return null == a ? null : (0, i.jsx)(d.Z, {
    children: (0, i.jsxs)("div", {
      className: c.buttonsContainer,
      children: [(0, i.jsx)(_.Z, {
        application: a,
        className: c.button
      }), u && null != s && (0, i.jsx)(I, {
        application: a,
        user: n,
        guildId: s
      })]
    })
  })
}

function I(e) {
  let {
    application: t,
    user: r,
    guildId: o
  } = e;
  return (0, u.Z)({
    user: r,
    guildId: o
  }), (0, i.jsx)(a.Q, {
    onClick: () => (function(e, t) {
      (0, s.openModalLazy)(async () => {
        let {
          default: r
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("29549"), n.e("31605"), n.e("77172"), n.e("89131"), n.e("88772")]).then(n.bind(n, 7225));
        return n => (0, i.jsx)(r, {
          transitionState: n.transitionState,
          onClose: n.onClose,
          appId: e.id,
          guildId: t
        })
      })
    })(t, o),
    className: c.button,
    size: s.ButtonSizes.SMALL
  })
}