"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(245561),
  o = n(873572),
  a = n(659101),
  l = n(689938),
  u = n(730308),
  _ = n(379916);

function d(e) {
  var t;
  let {
    user: n,
    guildId: d
  } = e, {
    botUpgraded: c,
    activeSubscriptionListing: E
  } = (0, o.Z)({
    user: n,
    guildId: d
  }), I = null == E ? void 0 : null === (t = E.sku_benefits) || void 0 === t ? void 0 : t.benefits;
  return null != d && c && null != I && 0 !== I.length ? (0, i.jsxs)(a.Z, {
    children: [(0, i.jsx)(r.Heading, {
      variant: "eyebrow",
      className: _.title,
      children: l.Z.Messages.BOT_PROFILE_BENEFITS_HEADING
    }), (0, i.jsx)("div", {
      className: u.benefitsContainer,
      children: I.map((e, t) => (0, i.jsx)(s.ZP, {
        showsDescription: !1,
        emojiContainerClassName: u.emojiContainer,
        nameTextVariant: "text-sm/normal",
        nameTextColor: "text-normal",
        benefit: e
      }, "".concat(e.name).concat(t)))
    })]
  }) : null
}