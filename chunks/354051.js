"use strict";
t(47120);
var n = t(735250);
t(470079);
var i = t(442837),
  l = t(481060),
  a = t(496675),
  r = t(434404),
  o = t(845377),
  c = t(981631),
  d = t(689938),
  u = t(914407);
s.Z = e => {
  let {
    guild: s
  } = e, t = (0, i.e7)([a.Z], () => a.Z.can(c.Plq.ADMINISTRATOR, s), [s]), E = s.hasFeature(c.oNc.DISCOVERABLE), _ = () => {
    let e = new Set(s.features);
    s.hasFeature(c.oNc.DISCOVERABLE) && e.delete(c.oNc.DISCOVERABLE), r.Z.updateGuild({
      features: e
    })
  };
  return (0, n.jsxs)(l.FormSection, {
    title: d.Z.Messages.DISCOVERY,
    tag: "h2",
    children: [(0, n.jsx)("div", {
      className: u.background
    }), (0, n.jsxs)("div", {
      className: u.discoverySettings,
      children: [(0, n.jsx)("div", {
        className: u.image
      }), (0, n.jsx)(l.Heading, {
        className: u.header,
        variant: "heading-xl/semibold",
        children: d.Z.Messages.GUILD_SETTINGS_DISCOVERY_DISQUALIFIED
      }), (0, n.jsx)(l.Text, {
        className: u.description,
        variant: "text-md/normal",
        children: d.Z.Messages.GUILD_SETTINGS_DISCOVERY_DISQUALIFIED_DESCRIPTION.format()
      }), (0, n.jsx)(o.Z, {
        className: u.checklist,
        guild: s,
        guildId: s.id,
        noHeader: !0,
        failedItemsOnly: !0
      }), E && (0, n.jsx)(l.Tooltip, {
        text: t ? null : d.Z.Messages.GUILD_SETTINGS_DISCOVERY_ADMIN_ONLY,
        children: e => (0, n.jsx)(l.Button, {
          size: l.Button.Sizes.SMALL,
          onClick: _,
          color: l.Button.Colors.PRIMARY,
          className: u.disableDiscoveryButton,
          disabled: !t,
          ...e,
          children: d.Z.Messages.GUILD_SETTINGS_DISABLE_DISCOVERABLE_PERMINENTLY
        })
      })]
    })]
  })
}