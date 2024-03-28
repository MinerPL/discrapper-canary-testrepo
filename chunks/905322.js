"use strict";
n.r(t), n.d(t, {
  Banner: function() {
    return l
  }
});
var i = n("735250"),
  s = n("470079"),
  a = n("777207"),
  r = n("764254");

function l(e) {
  let {
    title: t,
    subtitle: n,
    iconSrc: l,
    backgroundSrc: o
  } = e, c = s.useMemo(() => {
    let e = null != o ? o : l;
    if (null != e) return {
      "--custom-background-url": "url(".concat(e.toString(), ")")
    }
  }, [o, l]);
  return (0, i.jsxs)("div", {
    className: r.wrapper,
    children: [(0, i.jsx)("div", {
      className: r.background,
      style: c
    }), (0, i.jsxs)("div", {
      className: r.content,
      children: [null != l && (0, i.jsx)("div", {
        className: r.icon,
        children: (0, i.jsx)("img", {
          src: l.toString(),
          alt: ""
        })
      }), (0, i.jsxs)("div", {
        children: [(0, i.jsx)(a.Text, {
          variant: "heading-xl/bold",
          tag: "div",
          children: t
        }), null != n && (0, i.jsxs)(a.Text, {
          variant: "text-sm/normal",
          children: ["“", n, "”"]
        })]
      })]
    }), null != o ? (0, i.jsx)("div", {
      className: r.image,
      style: {
        backgroundImage: "url(".concat(o.toString(), ")")
      }
    }) : null]
  })
}