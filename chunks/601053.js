"use strict";
n.d(t, {
  Z: function() {
    return a
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(689938),
  o = n(844330);

function a(e) {
  let {
    title: t,
    children: n,
    onClickViewMore: a
  } = e;
  return (0, i.jsxs)("div", {
    children: [(0, i.jsxs)("div", {
      className: o.header,
      children: [(0, i.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: t
      }), null != a && (0, i.jsx)(r.Clickable, {
        className: o.viewMore,
        onClick: a,
        children: (0, i.jsx)(r.Text, {
          variant: "text-md/semibold",
          color: "text-brand",
          children: s.Z.Messages.APP_LAUNCHER_VIEW_MORE_ROW
        })
      })]
    }), (0, i.jsx)("div", {
      className: o.appGrid,
      children: n
    })]
  })
}