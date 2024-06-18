"use strict";
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(592125),
  o = n(430824),
  a = n(346656),
  l = n(689938),
  u = n(645944);
t.Z = e => {
  let {
    entry: t
  } = e, n = s.Z.getChannel(t.channelId);
  if (null == n) return null;
  let _ = o.Z.getGuild(n.guild_id);
  return null == _ ? null : (0, i.jsxs)("div", {
    className: u.container,
    children: [(0, i.jsx)(r.Heading, {
      className: u.header,
      variant: "heading-sm/semibold",
      children: l.Z.Messages.REPORT_MODAL_SERVER_PREVIEW_HEADER
    }), (0, i.jsxs)("div", {
      className: u.guildContainer,
      children: [(0, i.jsxs)("div", {
        className: u.hubInfo,
        children: [(0, i.jsx)(a.Z, {
          guild: _,
          size: a.Z.Sizes.MINI,
          className: u.hubIcon
        }), (0, i.jsx)(r.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: _.name
        })]
      }), (0, i.jsx)(r.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: t.name
      })]
    })]
  })
}