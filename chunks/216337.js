"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("607070"),
  o = n("665906"),
  u = n("314897"),
  d = n("496675"),
  c = n("301822"),
  f = n("981631"),
  h = n("689938"),
  m = n("697152");
let p = () => n.e("26176").then(n.t.bind(n, "737848", 19)).then(e => {
  let {
    default: t
  } = e;
  return t
});
t.default = l.memo(function(e) {
  let {
    channel: t,
    isLastItem: n
  } = e, l = (0, s.useStateFromStores)([r.default], () => r.default.useReducedMotion), E = (0, s.useStateFromStores)([d.default], () => d.default.can(f.Permissions.SEND_MESSAGES_IN_THREADS, t)), C = (0, o.useIsNonModInLockedThread)(t), g = (0, s.useStateFromStores)([u.default], () => u.default.getId());
  return n ? E && !C && t.ownerId !== g ? (0, a.jsxs)("div", {
    className: m.box,
    children: [(0, a.jsx)(c.default, {
      importData: p,
      shouldAnimate: !l,
      className: m.animation
    }), (0, a.jsxs)("div", {
      className: m.textContainer,
      children: [(0, a.jsx)(i.Heading, {
        variant: "heading-md/semibold",
        children: h.default.Messages.FORUM_START_THE_CONVERSATION_HEADER
      }), (0, a.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: h.default.Messages.FORUM_START_THE_CONVERSATION_DESCRIPTION
      })]
    })]
  }) : null : (0, a.jsx)("div", {
    className: m.divider
  })
})