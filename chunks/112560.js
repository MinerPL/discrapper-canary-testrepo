"use strict";
n.d(t, {
  L: function() {
    return u
  },
  Z: function() {
    return _
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(285952),
  l = n(18280);

function u(e) {
  return e < 400 ? "small" : e < 1e3 ? "medium" : "large"
}

function _(e) {
  let {
    onCTAClick: t,
    callToAction: n,
    header: r,
    description: u,
    size: _,
    className: d,
    artURL: c,
    noArt: E = !1,
    selected: I = !1
  } = e;
  return (0, i.jsxs)(a.Z, {
    className: d,
    justify: a.Z.Justify.CENTER,
    align: a.Z.Align.CENTER,
    direction: a.Z.Direction.VERTICAL,
    style: {
      padding: 4
    },
    children: [!E && null != c && (0, i.jsx)("div", {
      className: s()(l.art, l[_]),
      style: {
        backgroundImage: "url(".concat(c, ")")
      }
    }), null != r ? (0, i.jsx)(o.Text, {
      color: "none",
      variant: "text-md/semibold",
      className: l.header,
      children: r
    }) : null, null != u ? (0, i.jsx)(o.Text, {
      color: "none",
      className: l.description,
      variant: "text-sm/medium",
      children: u
    }) : null, I || null == n ? null : (0, i.jsx)(o.Button, {
      className: l.outerButton,
      size: o.Button.Sizes.NONE,
      color: o.Button.Colors.WHITE,
      look: o.Button.Looks.BLANK,
      innerClassName: l.button,
      onClick: e => {
        e.stopPropagation(), null == t || t(e)
      },
      children: n
    })]
  })
}