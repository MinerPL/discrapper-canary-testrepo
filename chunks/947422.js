"use strict";
a.r(s), a.d(s, {
  default: function() {
    return E
  }
});
var t = a("735250");
a("470079");
var l = a("481060"),
  n = a("153124"),
  i = a("389320"),
  r = a("255439"),
  d = a("740624"),
  o = a("689938"),
  c = a("795103"),
  u = a("298860");
let _ = e => {
  let {
    text: s,
    icon: a,
    foreground: n
  } = e;
  return (0, t.jsxs)("div", {
    className: c.bulletContainer,
    children: [(0, t.jsx)("div", {
      className: c.iconContainer,
      children: (0, t.jsx)(a, {
        foreground: n,
        className: c.bulletIcon,
        height: 40,
        width: 40
      })
    }), (0, t.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: c.bulletText,
      children: s
    })]
  })
};

function E(e) {
  let {
    transitionState: s,
    onClose: a,
    ...E
  } = e, A = (0, n.useUID)();
  return (0, t.jsx)(l.ModalRoot, {
    transitionState: s,
    "aria-labelledby": A,
    ...E,
    size: l.ModalSize.SMALL,
    children: (0, t.jsxs)("div", {
      className: c.content,
      children: [(0, t.jsx)("img", {
        src: u,
        alt: o.default.Messages.STAGE_CHANNEL_AUDIENCE_MODAL_ALT_TEXT,
        className: c.illustration
      }), (0, t.jsx)(l.Heading, {
        id: A,
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: c.headerTitle,
        children: o.default.Messages.STAGE_CHANNEL_AUDIENCE_MODAL_TITLE
      }), (0, t.jsx)(_, {
        text: o.default.Messages.STAGE_CHANNEL_AUDIENCE_MODAL_BULLET_1,
        icon: r.default,
        foreground: c.red
      }), (0, t.jsx)(_, {
        text: o.default.Messages.STAGE_CHANNEL_AUDIENCE_MODAL_BULLET_2,
        icon: i.default
      }), (0, t.jsx)(_, {
        text: o.default.Messages.STAGE_CHANNEL_AUDIENCE_MODAL_BULLET_3,
        icon: d.default
      }), (0, t.jsx)(l.Button, {
        color: l.Button.Colors.BRAND,
        className: c.button,
        onClick: a,
        children: o.default.Messages.STAGE_CHANNEL_AUDIENCE_MODAL_ACTION
      })]
    })
  })
}