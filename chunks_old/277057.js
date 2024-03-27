"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
});
var n = l("37983");
l("884691");
var a = l("77078"),
  s = l("227231"),
  r = l("782340"),
  i = l("790578"),
  u = function(e) {
    let {
      quest: t
    } = e;
    return (0, n.jsx)("div", {
      className: i.wrapper,
      children: (0, n.jsxs)("div", {
        className: i.content,
        children: [(0, n.jsx)("img", {
          src: (0, s.getGameTileAssetUrl)(t.id),
          alt: "",
          className: i.gameTile
        }), (0, n.jsxs)("div", {
          className: i.copy,
          children: [(0, n.jsx)(a.Heading, {
            color: "always-white",
            variant: "text-sm/medium",
            children: r.default.Messages.QUESTS_STREAM_SOURCE_SELECT_NOTICE_HEADING.format({
              gameTitle: t.config.messages.gameTitle
            })
          }), (0, n.jsx)(a.Text, {
            className: i.subheading,
            color: "always-white",
            variant: "text-xs/medium",
            children: r.default.Messages.QUESTS_STREAM_SOURCE_SELECT_NOTICE_SUBHEADING
          })]
        })]
      })
    })
  }