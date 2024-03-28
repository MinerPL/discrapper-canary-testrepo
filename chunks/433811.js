"use strict";
l.r(t);
var a = l("735250");
l("470079");
var s = l("481060"),
  n = l("918701"),
  i = l("689938"),
  r = l("352652");
t.default = function(e) {
  let {
    quest: t
  } = e;
  return (0, a.jsx)("div", {
    className: r.wrapper,
    children: (0, a.jsxs)("div", {
      className: r.content,
      children: [(0, a.jsx)("img", {
        src: (0, n.getGameTileAssetUrl)(t),
        alt: "",
        className: r.gameTile
      }), (0, a.jsxs)("div", {
        className: r.copy,
        children: [(0, a.jsx)(s.Heading, {
          color: "always-white",
          variant: "text-sm/medium",
          children: i.default.Messages.QUESTS_STREAM_SOURCE_SELECT_NOTICE_HEADING.format({
            gameTitle: t.config.messages.gameTitle
          })
        }), (0, a.jsx)(s.Text, {
          className: r.subheading,
          color: "always-white",
          variant: "text-xs/medium",
          children: i.default.Messages.QUESTS_STREAM_SOURCE_SELECT_NOTICE_SUBHEADING
        })]
      })]
    })
  })
}