"use strict";
n.r(t), n.d(t, {
  CardDetails: function() {
    return c
  }
});
var i = n("735250");
n("470079");
var r = n("789978"),
  l = n("727075"),
  s = n("777207"),
  a = n("541822"),
  o = n("330711"),
  d = n("89569");

function c(e) {
  let {
    benefits: t,
    description: n,
    imgSrc: c,
    title: u,
    onClose: f,
    tag: m,
    FallbackIcon: p
  } = e, h = null != c ? {
    "--custom-background-url": "url(".concat(c.toString(), ")")
  } : void 0;
  return (0, i.jsxs)("div", {
    className: d.container,
    children: [(0, i.jsxs)("div", {
      className: d.header,
      children: [(0, i.jsx)("div", {
        className: d.headerBackground,
        style: h
      }), (0, i.jsxs)("div", {
        className: d.headerTop,
        children: [(0, i.jsx)("div", {
          children: m
        }), (0, i.jsx)(r.FocusRing, {
          children: (0, i.jsx)("button", {
            onClick: f,
            className: d.closeBtn,
            type: "button",
            children: (0, i.jsx)(l.CloseSmallIcon, {
              height: 24,
              width: 24,
              color: "var(--header-primary)"
            })
          })
        })]
      }), (0, i.jsx)("div", {
        className: d.headerImage,
        children: null != c ? (0, i.jsx)("img", {
          src: c.toString(),
          alt: ""
        }) : (0, i.jsx)(p, {
          color: "var(--text-muted)",
          height: 96,
          width: 96
        })
      })]
    }), (0, i.jsxs)(a.default, {
      className: d.scroll,
      children: [(0, i.jsx)("br", {}), (0, i.jsxs)("div", {
        className: d.scrollContent,
        children: [(0, i.jsx)(s.Text, {
          color: "header-primary",
          tag: "div",
          variant: "heading-xl/semibold",
          children: u
        }), (null != n && "" !== n || null != t) && (0, i.jsxs)("div", {
          className: d.details,
          children: [(0, i.jsx)(s.Text, {
            color: "header-primary",
            tag: "div",
            variant: "heading-lg/semibold",
            children: o.default.Messages.Storefront.PRODUCT_DETAILS
          }), (0, i.jsx)(s.Text, {
            color: "text-muted",
            variant: "text-md/normal",
            className: d.description,
            children: n
          }), null != t && (0, i.jsxs)("div", {
            className: d.benefits,
            children: [(0, i.jsx)(s.Text, {
              color: "header-secondary",
              variant: "eyebrow",
              children: o.default.Messages.Storefront.BENEFITS_TITLE
            }), t]
          })]
        })]
      })]
    })]
  })
}