"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var i = n("735250");
n("470079");
var r = n("481060"),
  a = n("318374"),
  s = n("522289"),
  o = n("346656"),
  l = n("706327"),
  u = n("285470"),
  d = n("228168"),
  _ = n("182294"),
  c = n("689938"),
  E = n("391830");

function I(e) {
  let {
    user: t,
    onOpenProfile: n
  } = e, I = (0, l.useMutualFriends)(t), T = (0, u.useMutualGuilds)(t), f = null != I && I.length > 0, S = null != T && T.length > 0, h = f && S ? "text-xs/normal" : "text-sm/normal";
  return f || S ? (0, i.jsxs)("div", {
    className: E.mutuals,
    children: [f ? (0, i.jsxs)(r.Clickable, {
      className: E.section,
      onClick: () => n(d.UserProfileSections.MUTUAL_FRIENDS),
      children: [(0, i.jsx)(a.default, {
        maxUsers: 3,
        users: I.map(e => {
          let {
            user: t
          } = e;
          return t
        }),
        size: _.AvatarSizes.SIZE_16,
        hideOverflowCount: !0,
        disableUsernameTooltip: !0
      }), (0, i.jsx)(r.Text, {
        className: E.text,
        variant: h,
        color: "interactive-normal",
        children: c.default.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({
          count: I.length
        })
      })]
    }) : null, f && S ? (0, i.jsx)("div", {
      "aria-hidden": "true",
      className: E.spacer
    }) : null, S ? (0, i.jsxs)(r.Clickable, {
      className: E.section,
      onClick: () => n(d.UserProfileSections.MUTUAL_GUILDS),
      children: [!f && (0, i.jsx)(s.default, {
        maxGuilds: 3,
        guilds: T.map(e => {
          let {
            guild: t
          } = e;
          return t
        }),
        size: o.default.Sizes.SMOL,
        hideOverflowCount: !0,
        disableGuildNameTooltip: !0
      }), (0, i.jsx)(r.Text, {
        className: E.text,
        variant: h,
        color: "interactive-normal",
        children: c.default.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
          count: T.length
        })
      })]
    }) : null]
  }) : null
}