"use strict";
n.r(t), n.d(t, {
  CardDetails: function() {
    return d
  }
});
var i = n("735250");
n("470079");
var s = n("789978"),
  l = n("727075"),
  r = n("777207"),
  a = n("541822"),
  o = n("330711"),
  u = n("878106");

function d(e) {
  let {
    benefits: t,
    description: n,
    imgSrc: d,
    title: c,
    onClose: f,
    tag: h,
    FallbackIcon: S
  } = e, p = null != d ? {
    "--custom-background-url": "url(".concat(d.toString(), ")")
  } : void 0;
  return (0, i.jsxs)("div", {
    className: u.container,
    children: [(0, i.jsxs)("div", {
      className: u.header,
      children: [(0, i.jsx)("div", {
        className: u.headerBackground,
        style: p
      }), (0, i.jsxs)("div", {
        className: u.headerTop,
        children: [(0, i.jsx)("div", {
          children: h
        }), (0, i.jsx)(s.FocusRing, {
          children: (0, i.jsx)("button", {
            onClick: f,
            className: u.closeBtn,
            type: "button",
            children: (0, i.jsx)(l.CloseSmallIcon, {
              height: 24,
              width: 24,
              color: "var(--header-primary)"
            })
          })
        })]
      }), (0, i.jsx)("div", {
        className: u.headerImage,
        children: null != d ? (0, i.jsx)("img", {
          src: d.toString(),
          alt: ""
        }) : (0, i.jsx)(S, {
          color: "var(--text-muted)",
          height: 96,
          width: 96
        })
      })]
    }), (0, i.jsxs)(a.default, {
      className: u.scroll,
      children: [(0, i.jsx)("br", {}), (0, i.jsxs)("div", {
        className: u.scrollContent,
        children: [(0, i.jsx)(r.Text, {
          color: "header-primary",
          tag: "div",
          variant: "heading-xl/semibold",
          children: c
        }), (null != n && "" !== n || null != t) && (0, i.jsxs)("div", {
          className: u.details,
          children: [(0, i.jsx)(r.Text, {
            color: "header-primary",
            tag: "div",
            variant: "heading-lg/semibold",
            children: o.default.Messages.Storefront.PRODUCT_DETAILS
          }), (0, i.jsx)(r.Text, {
            color: "text-muted",
            variant: "text-md/normal",
            className: u.description,
            children: n
          }), null != t && (0, i.jsxs)("div", {
            className: u.benefits,
            children: [(0, i.jsx)(r.Text, {
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