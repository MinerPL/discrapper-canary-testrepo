"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("481060"),
  o = n("308083"),
  u = n("689938"),
  d = n("597338");
t.default = e => {
  let {
    handleUpdate: t,
    playstyle: n
  } = e, l = s.useMemo(() => [{
    type: o.ClanPlaystyles.SOCIAL,
    emoji: "\uD83D\uDC4B",
    title: u.default.Messages.CLAN_SETUP_PLAYSTYLE_SOCIAL_TITLE,
    subtitle: u.default.Messages.CLAN_SETUP_PLAYSTYLE_SOCIAL_SUBTITLE
  }, {
    type: o.ClanPlaystyles.CASUAL,
    emoji: "\uD83C\uDFAE",
    title: u.default.Messages.CLAN_SETUP_PLAYSTYLE_CASUAL_TITLE,
    subtitle: u.default.Messages.CLAN_SETUP_PLAYSTYLE_CASUAL_SUBTITLE
  }, {
    type: o.ClanPlaystyles.COMPETITIVE,
    emoji: "⚔️",
    title: u.default.Messages.CLAN_SETUP_PLAYSTYLE_COMPETITIVE_TITLE,
    subtitle: u.default.Messages.CLAN_SETUP_PLAYSTYLE_COMPETITIVE_SUBTITLE
  }, {
    type: o.ClanPlaystyles.VERY_HARDCORE,
    emoji: "\uD83D\uDC80",
    title: u.default.Messages.CLAN_SETUP_PLAYSTYLE_VERY_HARDCORE_TITLE,
    subtitle: u.default.Messages.CLAN_SETUP_PLAYSTYLE_VERY_HARDCORE_SUBTITLE
  }], []);
  return (0, a.jsxs)("div", {
    className: d.slideContent,
    children: [(0, a.jsx)(r.Heading, {
      variant: "heading-xl/semibold",
      className: d.title,
      children: u.default.Messages.CLAN_SETUP_PLAYSTYLE_TITLE
    }), (0, a.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: d.subtitle,
      children: u.default.Messages.CLAN_SETUP_PLAYSTYLE_SUBTITLE
    }), (0, a.jsx)("div", {
      className: d.playstyleSelect,
      children: l.map(e => (0, a.jsxs)(r.Clickable, {
        className: i()(d.playstyleOption, {
          [d.selectedPlaystyle]: e.type === n
        }),
        onClick: () => t({
          playstyle: e.type
        }),
        children: [(0, a.jsx)(r.Heading, {
          variant: "heading-xxl/semibold",
          children: e.emoji
        }), (0, a.jsx)(r.Heading, {
          variant: "heading-md/semibold",
          className: d.playstyleTitle,
          children: e.title
        }), (0, a.jsx)(r.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: e.subtitle
        })]
      }, e.type))
    })]
  })
}