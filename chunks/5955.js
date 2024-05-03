"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("252618"),
  r = n("900849"),
  o = n("526383"),
  u = n("602597"),
  d = n("731455"),
  c = n("689938"),
  f = n("907381"),
  E = n("661278");
t.default = e => {
  let {
    loadId: t
  } = e, n = (0, o.default)();
  return s.useEffect(() => {
    (0, r.trackDiscoveryViewed)({
      loadId: t,
      gamesYouPlayGuilds: [],
      allGuilds: [],
      categoryId: d.DISCORD_HUB_ID
    })
  }, [t]), (0, i.usePageTitle)({
    subsection: c.default.Messages.HUB_SCHOOL_HUBS,
    location: c.default.Messages.HUB_DIRECTORY_SEARCH_TITLE
  }), (0, a.jsx)(l.Scroller, {
    className: f.scroller,
    children: (0, a.jsxs)("div", {
      className: f.viewWrapper,
      children: [(0, a.jsxs)("div", {
        className: f.headerContainer,
        children: [(0, a.jsx)("img", {
          alt: "",
          className: f.headerImage,
          src: E
        }), (0, a.jsxs)("div", {
          className: f.headerContent,
          children: [(0, a.jsx)(l.Heading, {
            className: f.headerText,
            variant: "heading-xl/semibold",
            children: c.default.Messages.HUB_DIRECTORY_SEARCH_TITLE
          }), (0, a.jsx)(l.Text, {
            className: f.headerDescription,
            variant: "text-md/normal",
            color: "none",
            children: c.default.Messages.HUB_DIRECTORY_SEARCH_SUBTITLE
          })]
        })]
      }), (0, a.jsx)(u.default, {
        guilds: n
      }), (0, a.jsx)("div", {
        className: f.divider
      }), (0, a.jsx)(l.Text, {
        className: f.footerDescription,
        variant: "text-md/medium",
        color: "header-secondary",
        children: c.default.Messages.HUB_DISCOVERY_FOOTER_DESCRIPTION
      })]
    })
  })
}