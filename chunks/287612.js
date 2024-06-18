"use strict";
n.d(t, {
  Z: function() {
    return I
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(318374),
  o = n(522289),
  a = n(346656),
  l = n(726059),
  u = n(162267),
  _ = n(228168),
  d = n(182294),
  c = n(689938),
  E = n(391830);

function I(e) {
  let {
    user: t,
    onOpenProfile: n
  } = e, {
    mutualFriends: I
  } = (0, l.Z)(t.id), {
    mutualGuilds: T
  } = (0, u.Z)(t.id), h = null != I && I.length > 0, S = null != T && T.length > 0, f = h && S ? "text-xs/normal" : "text-sm/normal";
  return h || S ? (0, i.jsxs)("div", {
    className: E.mutuals,
    children: [h ? (0, i.jsxs)(r.Clickable, {
      className: E.section,
      onClick: () => n(_.oh.MUTUAL_FRIENDS),
      children: [(0, i.jsx)(s.Z, {
        maxUsers: 3,
        users: I.map(e => {
          let {
            user: t
          } = e;
          return t
        }),
        size: d.EF.SIZE_16,
        hideOverflowCount: !0,
        disableUsernameTooltip: !0
      }), (0, i.jsx)(r.Text, {
        className: E.text,
        variant: f,
        color: "interactive-normal",
        children: c.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({
          count: I.length
        })
      })]
    }) : null, h && S ? (0, i.jsx)("div", {
      "aria-hidden": "true",
      className: E.spacer
    }) : null, S ? (0, i.jsxs)(r.Clickable, {
      className: E.section,
      onClick: () => n(_.oh.MUTUAL_GUILDS),
      children: [!h && (0, i.jsx)(o.Z, {
        maxGuilds: 3,
        guilds: T.map(e => {
          let {
            guild: t
          } = e;
          return t
        }),
        size: a.Z.Sizes.SMOL,
        hideOverflowCount: !0,
        disableGuildNameTooltip: !0
      }), (0, i.jsx)(r.Text, {
        className: E.text,
        variant: f,
        color: "interactive-normal",
        children: c.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
          count: T.length
        })
      })]
    }) : null]
  }) : null
}