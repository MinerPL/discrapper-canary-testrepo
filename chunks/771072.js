"use strict";
n.r(t), n.d(t, {
  CardDetails: function() {
    return f
  }
}), n("222007");
var s = n("37983"),
  i = n("884691"),
  l = n("15542"),
  r = n("800619"),
  a = n("300036"),
  o = n("667434"),
  c = n("502026"),
  d = n("792788"),
  u = n("769274");

function f(e) {
  let {
    benefits: t,
    description: n,
    imgSrc: f,
    title: h,
    onClose: m,
    tag: x
  } = e, v = i.useRef(null), [p, g] = i.useState(!0), j = null != f ? {
    "--custom-background-url": "url(".concat(f.toString(), ")")
  } : void 0, C = () => {
    var e;
    (null === (e = v.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) === !0 ? g(!1) : g(!0)
  };
  return (0, s.jsxs)("div", {
    className: u.container,
    children: [(0, s.jsxs)("div", {
      className: u.header,
      children: [(0, s.jsx)("div", {
        className: u.headerBackground,
        style: j
      }), (0, s.jsxs)("div", {
        className: u.headerTop,
        children: [(0, s.jsx)("div", {
          children: x
        }), (0, s.jsx)(l.FocusRing, {
          children: (0, s.jsx)("button", {
            onClick: m,
            className: u.closeBtn,
            type: "button",
            children: (0, s.jsx)(r.CloseSmallIcon, {
              height: 24,
              width: 24,
              color: "var(--white)"
            })
          })
        })]
      }), (0, s.jsx)("div", {
        className: u.headerImage,
        children: null != f ? (0, s.jsx)("img", {
          src: f.toString(),
          alt: ""
        }) : (0, s.jsx)(a.TicketIcon, {
          color: "white",
          height: 96,
          width: 96
        })
      })]
    }), (0, s.jsxs)(o.AdvancedScrollerThin, {
      className: u.scroll,
      fade: !0,
      ref: e => {
        null != e && (v.current = e, C())
      },
      onScroll: C,
      children: [(0, s.jsx)("br", {}), (0, s.jsxs)("div", {
        className: u.scrollContent,
        children: [(0, s.jsx)(c.Text, {
          color: "header-primary",
          tag: "div",
          variant: "heading-xl/semibold",
          children: h
        }), (null != n && "" !== n || null != t) && (0, s.jsxs)("div", {
          className: u.details,
          children: [(0, s.jsx)(c.Text, {
            color: "header-primary",
            tag: "div",
            variant: "heading-lg/semibold",
            children: d.default.Messages.Storefront.PRODUCT_DETAILS
          }), (0, s.jsx)(c.Text, {
            color: "text-muted",
            variant: "text-md/normal",
            children: n
          }), null != t && (0, s.jsxs)("div", {
            className: u.benefits,
            children: [(0, s.jsx)(c.Text, {
              color: "header-secondary",
              variant: "eyebrow",
              children: d.default.Messages.Storefront.BENEFITS_TITLE
            }), t]
          })]
        })]
      })]
    }), (0, s.jsx)("div", {
      className: u.containerScrollGradient,
      "data-shown": p
    })]
  })
}