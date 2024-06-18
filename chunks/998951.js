"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(822545);
t.Z = function(e) {
  let {
    className: t,
    compact: n = !1,
    contentOnly: r = !1,
    zalgo: l = !0,
    disableInteraction: u = !1,
    childrenRepliedMessage: _,
    childrenExecutedCommand: d,
    childrenHeader: c,
    childrenSystemMessage: E,
    childrenButtons: I,
    childrenMessageContent: T,
    childrenAccessories: h,
    messageRef: S,
    focusProps: f = {
      offset: {
        left: 4,
        right: 4
      }
    },
    hasThread: N,
    isSystemMessage: A,
    hasReply: m,
    ...O
  } = e, R = (0, i.jsx)(o.FocusRing, {
    ...f,
    children: (0, i.jsxs)("div", {
      className: s()(t, {
        [a.wrapper]: !0,
        [a.contentOnly]: r,
        [a.compact]: n,
        [a.cozy]: !n,
        [a.zalgo]: l,
        [a.hasThread]: N,
        [a.isSystemMessage]: A,
        [a.hasReply]: m
      }),
      ref: S,
      ...O,
      role: "article",
      children: [_, d, (0, i.jsxs)("div", {
        className: a.contents,
        children: [E, c, null == E && T]
      }), h, null != I ? (0, i.jsx)("div", {
        className: a.buttonContainer,
        children: I
      }) : null]
    })
  });
  return u ? (0, i.jsx)(o.FocusBlock, {
    children: R
  }) : R
}