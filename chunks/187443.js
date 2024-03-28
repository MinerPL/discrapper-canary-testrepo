"use strict";
l.r(t), l.d(t, {
  default: function() {
    return r
  }
});
var n = l("735250");
l("470079");
var s = l("481060"),
  u = l("808268"),
  i = l("285784"),
  a = l("689938"),
  o = l("804155");

function r(e) {
  let {
    isActive: t,
    isUserLurking: l,
    rsvped: r,
    onContextMenu: d,
    onRsvpClick: c,
    onGoToGuildClick: f,
    isDetailsView: E = !1,
    isMember: h,
    onJoinGuildClick: _,
    guildName: N,
    onInviteClick: g,
    canInvite: C,
    isChannelPublic: v
  } = e;
  return (0, n.jsxs)("div", {
    className: o.container,
    children: [null != d ? (0, n.jsx)(s.Tooltip, {
      text: a.default.Messages.MORE,
      position: "top",
      "aria-label": a.default.Messages.EDIT,
      children: e => (0, n.jsx)(s.Clickable, {
        ...e,
        onClick: d,
        className: o.iconButton,
        children: (0, n.jsx)(u.default, {
          width: 20,
          height: 20,
          className: o.icon
        })
      })
    }) : null, h && (0, n.jsx)(i.GuildEventShareButton, {
      onInviteClick: g,
      canInvite: C,
      isChannelPublic: v
    }), l && !t && (0, n.jsx)(i.GuildEventLurkerInterestedButton, {
      isUserRsvped: r,
      isUserLurking: l
    }), h && !l && !t && null != c && (0, n.jsx)(i.GuildEventInterestedButton, {
      isUserRsvped: r,
      isUserLurking: l,
      onRsvpClick: c
    }), h && !l && (!E || t) ? (0, n.jsx)(s.Button, {
      className: o.button,
      innerClassName: o.innerButton,
      size: s.Button.Sizes.SMALL,
      onClick: f,
      color: s.Button.Colors.GREEN,
      children: a.default.Messages.HUB_EVENTS_GO_TO_GUILD
    }) : null, h ? null : (0, n.jsx)(s.Button, {
      className: o.button,
      innerClassName: o.innerButton,
      size: s.Button.Sizes.SMALL,
      onClick: _,
      color: s.Button.Colors.GREEN,
      children: a.default.Messages.HUB_EVENTS_JOIN_GUILD.format({
        guildName: N
      })
    })]
  })
}