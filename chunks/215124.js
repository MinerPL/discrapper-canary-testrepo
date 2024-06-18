"use strict";
t.d(s, {
  Z: function() {
    return E
  }
});
var n = t(735250);
t(470079);
var i = t(399606),
  l = t(481060),
  a = t(674180),
  r = t(267101),
  o = t(430824),
  c = t(584825),
  d = t(198139),
  u = t(689938);

function E(e) {
  let {
    guildId: s,
    allPeriods: E
  } = e, _ = (0, i.e7)([o.Z], () => o.Z.getGuild(s)), I = (0, c.qi)(s, {
    includeSoftDeleted: !0
  }), T = (0, r.ue)(s, {
    publishedOnly: !1
  }), {
    allowSelfRemoveMonetization: N
  } = (0, a.gX)(s), m = E.filter(e => {
    var s;
    let t = Object.values(null !== (s = e.ppgs) && void 0 !== s ? s : {})[0];
    return (null == t ? void 0 : t.status) === d.x_.OPEN || (null == t ? void 0 : t.status) === d.x_.PAYOUT_DEFERRED
  }), S = I.length > 0, h = T.length > 0, g = m.length > 0;
  return null == _ ? null : (0, n.jsxs)("div", {
    children: [(0, n.jsx)(l.FormText, {
      type: l.FormText.Types.DESCRIPTION,
      children: u.Z.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_SECTION_DESCRIPTION.format({
        guildName: _.toString()
      })
    }), (0, n.jsx)(l.Spacer, {
      size: 16
    }), (0, n.jsx)(l.Button, {
      disabled: !N || S || h || g,
      look: l.Button.Looks.FILLED,
      color: l.Button.Colors.RED,
      onClick: () => {
        var e;
        return e = _, void(0, l.openModalLazy)(async () => {
          let {
            default: s
          } = await Promise.all([t.e("99387"), t.e("35282")]).then(t.bind(t, 157429));
          return t => (0, n.jsx)(s, {
            ...t,
            guild: e
          })
        })
      },
      children: u.Z.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_CTA
    })]
  })
}