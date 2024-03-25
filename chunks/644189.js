"use strict";
l.r(t), l.d(t, {
  default: function() {
    return r
  }
});
var n = l("37983");
l("884691");
var s = l("77078"),
  u = l("433487"),
  a = l("707916"),
  i = l("782340"),
  o = l("136275");

function r(e) {
  let {
    isActive: t,
    isUserLurking: l,
    rsvped: r,
    onContextMenu: d,
    onRsvpClick: c,
    onGoToGuildClick: E,
    isDetailsView: f = !1,
    isMember: h,
    onJoinGuildClick: C,
    guildName: g,
    onInviteClick: v,
    canInvite: N,
    isChannelPublic: S
  } = e;
  return (0, n.jsxs)("div", {
    className: o.container,
    children: [null != d ? (0, n.jsx)(s.Tooltip, {
      text: i.default.Messages.MORE,
      position: "top",
      "aria-label": i.default.Messages.EDIT,
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
    }) : null, h && (0, n.jsx)(a.GuildEventShareButton, {
      onInviteClick: v,
      canInvite: N,
      isChannelPublic: S
    }), l && !t && (0, n.jsx)(a.GuildEventLurkerInterestedButton, {
      isUserRsvped: r,
      isUserLurking: l
    }), h && !l && !t && null != c && (0, n.jsx)(a.GuildEventInterestedButton, {
      isUserRsvped: r,
      isUserLurking: l,
      onRsvpClick: c
    }), h && !l && (!f || t) ? (0, n.jsx)(s.Button, {
      className: o.button,
      innerClassName: o.innerButton,
      size: s.Button.Sizes.SMALL,
      onClick: E,
      color: s.Button.Colors.GREEN,
      children: i.default.Messages.HUB_EVENTS_GO_TO_GUILD
    }) : null, h ? null : (0, n.jsx)(s.Button, {
      className: o.button,
      innerClassName: o.innerButton,
      size: s.Button.Sizes.SMALL,
      onClick: C,
      color: s.Button.Colors.GREEN,
      children: i.default.Messages.HUB_EVENTS_JOIN_GUILD.format({
        guildName: g
      })
    })]
  })
}