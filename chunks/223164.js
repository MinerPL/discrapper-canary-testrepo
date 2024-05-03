"use strict";
s.r(a), s.d(a, {
  default: function() {
    return m
  }
});
var t = s("735250"),
  n = s("470079"),
  i = s("120356"),
  d = s.n(i),
  l = s("481060"),
  o = s("454585"),
  r = s("153124"),
  c = s("814550"),
  h = s("585483"),
  u = s("981631"),
  p = s("689938"),
  x = s("64184"),
  f = s("990291");

function m(e) {
  let {
    channel: a,
    isFromComposer: s,
    transitionState: i,
    onClose: m
  } = e, M = (0, r.useUID)();
  return n.useEffect(() => () => {
    s && h.ComponentDispatch.dispatch(u.ComponentActions.FOCUS_COMPOSER_TITLE)
  }, [s]), (0, t.jsxs)(l.ModalRoot, {
    transitionState: i,
    "aria-labelledby": M,
    size: l.ModalSize.DYNAMIC,
    className: x.container,
    children: [(0, t.jsxs)(l.ModalHeader, {
      className: x.header,
      separator: !1,
      children: [(0, t.jsx)(c.default, {
        className: x.rulesIcon,
        width: 24,
        height: 24
      }), (0, t.jsx)(l.Heading, {
        variant: "heading-lg/extrabold",
        children: p.default.Messages.FORUM_POST_GUIDELINES_TITLE
      })]
    }), (0, t.jsx)(l.ModalContent, {
      children: (0, t.jsx)(l.Text, {
        className: d()(x.content, f.markup),
        variant: "text-sm/normal",
        color: "header-secondary",
        children: (0, t.jsx)("div", {
          children: o.default.parseForumPostGuidelines(a.topic, !0, {
            channelId: a.id,
            allowHeading: !0,
            allowList: !0
          })
        })
      })
    }), (0, t.jsx)(l.ModalFooter, {
      children: (0, t.jsx)(l.Button, {
        onClick: m,
        children: p.default.Messages.GOT_IT
      })
    })]
  })
}