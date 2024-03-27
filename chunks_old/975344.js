"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("37983");
n("884691");
var s = n("414456"),
  l = n.n(s),
  i = n("617258"),
  r = n("65597"),
  o = n("77078"),
  u = n("580357"),
  d = n("822825"),
  c = n("49111"),
  f = n("782340"),
  E = n("756755");
let h = [18, 18, 16, 16, 14, 12, 10];
var _ = e => {
  let {
    guildId: t
  } = e, n = (0, r.useStateFromStores)([d.default], () => d.default.getGuild(t));
  if (void 0 === n) return null;
  let s = n.hasFeature(c.GuildFeatures.VERIFIED) || n.hasFeature(c.GuildFeatures.PARTNERED),
    _ = n.toString(),
    C = n.getIconURL(40, !0),
    S = null,
    I = h[h.length - 1];
  if (null == n.icon && null != _) {
    var m;
    I = null !== (m = h[(S = (0, i.getAcronym)(_)).length - 1]) && void 0 !== m ? m : h[h.length - 1]
  }
  return (0, a.jsxs)("div", {
    className: E.container,
    children: [(0, a.jsxs)("div", {
      style: {
        fontSize: I
      },
      children: [null != S ? (0, a.jsx)("div", {
        className: l(E.childWrapper, E.acronym),
        "aria-hidden": !0,
        children: S
      }) : null, null != C ? (0, a.jsx)(o.Avatar, {
        src: n.getIconURL(40, !0),
        size: o.AvatarSizes.SIZE_40,
        "aria-hidden": !0
      }) : null]
    }), (0, a.jsxs)("div", {
      className: E.descriptors,
      children: [(0, a.jsxs)("div", {
        className: E.header,
        children: [s ? (0, a.jsx)(u.default, {
          guild: n,
          tooltipPosition: "bottom",
          tooltipColor: o.Tooltip.Colors.PRIMARY,
          className: E.guildBadge
        }) : null, (0, a.jsx)(o.Text, {
          variant: "text-md/semibold",
          children: n.toString()
        })]
      }), void 0 !== n.approximateMemberCount ? (0, a.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: f.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_ROW_MEMBER_COUNT.format({
          members: n.approximateMemberCount
        })
      }) : null]
    })]
  })
}