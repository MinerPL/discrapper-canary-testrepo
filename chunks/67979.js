"use strict";
n.d(t, {
  W: function() {
    return E
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(547800),
  a = n(1561),
  l = n(507274),
  u = n(235874),
  _ = n(305878),
  d = n(745206),
  c = n(12349);

function E(e) {
  let {
    value: t,
    onSelect: n,
    dateFormat: r = "MMM D, YYYY",
    minDate: E,
    maxDate: I,
    disabled: T = !1
  } = e;
  return (0, i.jsx)(u.y, {
    renderPopout: function(e) {
      let {
        closePopout: r
      } = e;
      return (0, i.jsx)(l.V, {
        children: (0, i.jsx)(o.CalendarPicker, {
          minDate: E,
          maxDate: I,
          value: t,
          onSelect: e => {
            n(e), r()
          },
          calendarClassName: d.calendarContainer,
          onClickOutside: r,
          autoFocus: !0
        })
      })
    },
    position: "bottom",
    children: e => {
      let {
        onClick: n,
        ...o
      } = e;
      return (0, i.jsx)(a.P, {
        ...o,
        className: s()(c.inputDefault, d.container, {
          [c.disabled]: T,
          [d.disabled]: T
        }),
        onClick: T ? void 0 : n,
        "aria-disabled": T,
        children: (0, i.jsxs)("div", {
          className: d.content,
          children: [(0, i.jsx)("div", {
            className: d.text,
            children: null == t ? void 0 : t.format(r)
          }), (0, i.jsx)(_.Z, {
            className: d.icon
          })]
        })
      })
    }
  })
}