"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("735250");
s("470079");
var l = s("399606"),
  n = s("481060"),
  i = s("674180"),
  r = s("267101"),
  o = s("430824"),
  d = s("682864"),
  u = s("584825"),
  c = s("198139"),
  E = s("689938");

function _(e) {
  let {
    guildId: t,
    allPeriods: _
  } = e, I = (0, l.useStateFromStores)([o.default], () => o.default.getGuild(t)), T = (0, u.useSubscriptionListingsForGuild)(t, {
    includeSoftDeleted: !0
  }), S = (0, r.useGuildProductsForGuild)(t, {
    publishedOnly: !1
  }), {
    allowSelfRemoveMonetization: f
  } = (0, i.useShouldRestrictUpdatingCreatorMonetizationSettings)(t), m = _.filter(e => {
    var t;
    let s = Object.values(null !== (t = e.ppgs) && void 0 !== t ? t : {})[0];
    return (null == s ? void 0 : s.status) === c.PaymentPayoutGroupStatuses.OPEN || (null == s ? void 0 : s.status) === c.PaymentPayoutGroupStatuses.PAYOUT_DEFERRED
  }), N = T.length > 0, g = S.length > 0, h = m.length > 0;
  return null == I ? null : (0, a.jsxs)("div", {
    children: [(0, a.jsx)(n.FormText, {
      type: n.FormText.Types.DESCRIPTION,
      children: E.default.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_SECTION_DESCRIPTION.format({
        guildName: I.toString()
      })
    }), (0, a.jsx)(d.default, {
      size: 16
    }), (0, a.jsx)(n.Button, {
      disabled: !f || N || g || h,
      look: n.Button.Looks.FILLED,
      color: n.Button.Colors.RED,
      onClick: () => {
        var e;
        return e = I, void(0, n.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([s.e("99387"), s.e("35282")]).then(s.bind(s, "157429"));
          return s => (0, a.jsx)(t, {
            ...s,
            guild: e
          })
        })
      },
      children: E.default.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_CTA
    })]
  })
}