"use strict";
var l = n(735250);
n(470079);
var s = n(442837),
  a = n(780384),
  i = n(481060),
  r = n(210887),
  o = n(918701),
  u = n(231338),
  c = n(689938),
  d = n(835525);
t.Z = function(e) {
  let {
    quest: t
  } = e, n = (0, s.e7)([r.Z], () => r.Z.getState().theme), m = (0, a.wj)(n) ? u.BR.DARK : u.BR.LIGHT;
  return (0, l.jsx)("div", {
    className: d.wrapper,
    children: (0, l.jsxs)("div", {
      className: d.content,
      children: [(0, l.jsx)("img", {
        src: (0, o.uo)(t, m),
        alt: "",
        className: d.gameTile
      }), (0, l.jsxs)("div", {
        className: d.copy,
        children: [(0, l.jsx)(i.Heading, {
          color: "always-white",
          variant: "text-sm/medium",
          children: c.Z.Messages.QUESTS_STREAM_SOURCE_SELECT_NOTICE_HEADING.format({
            gameTitle: t.config.messages.gameTitle
          })
        }), (0, l.jsx)(i.Text, {
          className: d.subheading,
          color: "always-white",
          variant: "text-xs/medium",
          children: c.Z.Messages.QUESTS_STREAM_SOURCE_SELECT_NOTICE_SUBHEADING
        })]
      })]
    })
  })
}