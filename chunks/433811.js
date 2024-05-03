"use strict";
l.r(t);
var a = l("735250");
l("470079");
var n = l("442837"),
  s = l("780384"),
  i = l("481060"),
  r = l("210887"),
  u = l("918701"),
  o = l("231338"),
  d = l("689938"),
  c = l("626439");
t.default = function(e) {
  let {
    quest: t
  } = e, l = (0, n.useStateFromStores)([r.default], () => r.default.getState().theme), f = (0, s.isThemeDark)(l) ? o.ThemeTypes.DARK : o.ThemeTypes.LIGHT;
  return (0, a.jsx)("div", {
    className: c.wrapper,
    children: (0, a.jsxs)("div", {
      className: c.content,
      children: [(0, a.jsx)("img", {
        src: (0, u.getGameTileAssetUrl)(t, f),
        alt: "",
        className: c.gameTile
      }), (0, a.jsxs)("div", {
        className: c.copy,
        children: [(0, a.jsx)(i.Heading, {
          color: "always-white",
          variant: "text-sm/medium",
          children: d.default.Messages.QUESTS_STREAM_SOURCE_SELECT_NOTICE_HEADING.format({
            gameTitle: t.config.messages.gameTitle
          })
        }), (0, a.jsx)(i.Text, {
          className: c.subheading,
          color: "always-white",
          variant: "text-xs/medium",
          children: d.default.Messages.QUESTS_STREAM_SOURCE_SELECT_NOTICE_SUBHEADING
        })]
      })]
    })
  })
}