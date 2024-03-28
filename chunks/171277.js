"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("735250");
n("470079");
var l = n("803997"),
  s = n.n(l),
  i = n("442837"),
  r = n("481060"),
  o = n("607070"),
  u = n("254238"),
  d = n("301822"),
  c = n("689938"),
  f = n("361453");

function h(e) {
  let {
    height: t
  } = e, l = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion);
  return (0, a.jsxs)("div", {
    className: f.root,
    children: [(0, a.jsx)(d.default, {
      importData: () => n.e("70036").then(n.t.bind(n, "141923", 19)).then(e => {
        let {
          default: t
        } = e;
        return t
      }),
      shouldAnimate: !l,
      className: s()(f.art, {
        [f.hidden]: t <= 280
      })
    }), (0, a.jsx)(r.Heading, {
      className: f.header,
      variant: "heading-md/bold",
      children: c.default.Messages.PLAYSTATION_TRANSFERRING
    }), (0, a.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: c.default.Messages.CONSOLE_TRANSFERRING_SUBTITLE.format({
        onCancel: u.disconnectRemote
      })
    })]
  })
}