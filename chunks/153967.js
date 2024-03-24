"use strict";
n.r(t), n.d(t, {
  Banner: function() {
    return a
  }
});
var s = n("37983"),
  i = n("884691"),
  l = n("502026"),
  r = n("75979");

function a(e) {
  let {
    title: t,
    subtitle: n,
    iconSrc: a,
    backgroundSrc: o
  } = e, c = i.useMemo(() => {
    let e = null != o ? o : a;
    if (null != e) return {
      "--custom-background-url": "url(".concat(e.toString(), ")")
    }
  }, [o, a]);
  return (0, s.jsxs)("div", {
    className: r.wrapper,
    children: [(0, s.jsx)("div", {
      className: r.background,
      style: c
    }), (0, s.jsxs)("div", {
      className: r.content,
      children: [null != a && (0, s.jsx)("div", {
        className: r.icon,
        children: (0, s.jsx)("img", {
          src: a.toString(),
          alt: ""
        })
      }), (0, s.jsxs)("div", {
        children: [(0, s.jsx)(l.Text, {
          variant: "heading-xl/bold",
          tag: "div",
          children: t
        }), null != n && (0, s.jsxs)(l.Text, {
          variant: "text-sm/normal",
          children: ["“", n, "”"]
        })]
      })]
    }), null != o ? (0, s.jsx)("div", {
      className: r.image,
      style: {
        backgroundImage: "url(".concat(o.toString(), ")")
      }
    }) : null]
  })
}