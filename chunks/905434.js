"use strict";
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(430824),
  o = n(346656),
  a = n(689938),
  l = n(937402);
t.Z = e => {
  let {
    stageInstance: t
  } = e, n = s.Z.getGuild(t.guild_id);
  return null == n ? null : (0, i.jsxs)("div", {
    className: l.container,
    children: [(0, i.jsx)(r.Heading, {
      className: l.header,
      variant: "heading-sm/semibold",
      children: a.Z.Messages.MOBILE_REPORTS_STAGE_CHANNEL_PREVIEW_TITLE
    }), (0, i.jsxs)("div", {
      className: l.guildContainer,
      children: [(0, i.jsxs)("div", {
        className: l.guildInfo,
        children: [(0, i.jsx)(o.Z, {
          guild: n,
          size: o.Z.Sizes.MINI,
          className: l.guildIcon
        }), (0, i.jsx)(r.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: n.name
        })]
      }), (0, i.jsx)(r.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: t.topic
      })]
    })]
  })
}