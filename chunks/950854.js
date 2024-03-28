"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
});
var i = l("735250");
l("470079");
var a = l("803997"),
  n = l.n(a),
  s = l("481060"),
  r = l("689938"),
  c = l("749595");

function o(e) {
  let {
    className: t,
    onClick: l,
    imageSrc: a,
    iconSrc: o,
    header: d,
    headerClassName: u,
    subheaderVariant: p = "text-sm/normal",
    subheader: _,
    children: m,
    animatesOnHover: f,
    ...h
  } = e, C = null != a, g = (0, i.jsxs)(i.Fragment, {
    children: [C && (0, i.jsx)("div", {
      className: c.imageContainer,
      children: (0, i.jsx)("img", {
        alt: "",
        className: c.image,
        src: a
      })
    }), (0, i.jsxs)("div", {
      className: c.textContainer,
      children: [(0, i.jsxs)("div", {
        className: n()(c.topRowContainer),
        children: [null != o && (0, i.jsx)("img", {
          className: c.icon,
          alt: "",
          "aria-hidden": !0,
          src: o,
          width: 48,
          height: 48
        }), (0, i.jsxs)("div", {
          className: c.headerContainer,
          children: [(0, i.jsx)(s.Heading, {
            variant: "heading-md/medium",
            className: u,
            children: d
          }), null != _ && (0, i.jsx)(s.Text, {
            className: c.subheader,
            color: "header-secondary",
            variant: p,
            children: _
          })]
        })]
      }), m]
    })]
  }), I = n()(t, c.container, {
    [c.hasImage]: C
  });
  return null != l ? (0, i.jsx)(s.ClickableContainer, {
    tag: "article",
    "aria-label": r.default.Messages.APP_DIRECTORY_LISTING_CARD_BUTTON_A11Y_LABEL.format({
      name: d
    }),
    onClick: l,
    className: n()(I, c.clickable, {
      [c.animatesOnHoverContainer]: f
    }),
    focusProps: {
      offset: 4
    },
    children: g
  }) : (0, i.jsx)("article", {
    className: I,
    ...h,
    children: g
  })
}