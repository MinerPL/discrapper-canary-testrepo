"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("37983");
s("884691");
var n = s("65597"),
  l = s("77078"),
  i = s("465869"),
  r = s("442379"),
  o = s("305961"),
  d = s("191814"),
  u = s("837008"),
  c = s("397056"),
  E = s("782340");

function _(e) {
  let {
    guildId: t,
    allPeriods: _
  } = e, T = (0, n.default)([o.default], () => o.default.getGuild(t)), I = (0, u.useSubscriptionListingsForGuild)(t, {
    includeSoftDeleted: !0
  }), S = (0, r.useGuildProductsForGuild)(t, {
    publishedOnly: !1
  }), {
    allowSelfRemoveMonetization: N
  } = (0, i.useShouldRestrictUpdatingCreatorMonetizationSettings)(t), g = _.filter(e => {
    var t;
    let s = Object.values(null !== (t = e.ppgs) && void 0 !== t ? t : {})[0];
    return (null == s ? void 0 : s.status) === c.PaymentPayoutGroupStatuses.OPEN || (null == s ? void 0 : s.status) === c.PaymentPayoutGroupStatuses.PAYOUT_DEFERRED
  }), f = I.length > 0, A = S.length > 0, L = g.length > 0;
  return null == T ? null : (0, a.jsxs)("div", {
    children: [(0, a.jsx)(l.FormText, {
      type: l.FormText.Types.DESCRIPTION,
      children: E.default.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_SECTION_DESCRIPTION.format({
        guildName: T.toString()
      })
    }), (0, a.jsx)(d.default, {
      size: 16
    }), (0, a.jsx)(l.Button, {
      disabled: !N || f || A || L,
      look: l.Button.Looks.FILLED,
      color: l.Button.Colors.RED,
      onClick: () => {
        var e;
        return e = T, void(0, l.openModalLazy)(async () => {
          let {
            default: t
          } = await s.el("264514").then(s.bind(s, "264514"));
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