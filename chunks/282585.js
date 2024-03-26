"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("222007");
var r = n("37983"),
  l = n("884691"),
  o = n("77078"),
  a = n("973262"),
  s = n("782340");

function i(e) {
  let {
    defaultColor: t,
    colors: n,
    value: i,
    onChange: c,
    disabled: u = !1,
    customPickerPosition: d = "bottom"
  } = e, [f, p] = l.useState(() => 0 === i || i === t || n.some(e => e === i) ? null : i);
  l.useEffect(() => {
    p(0 === i || i === t || n.some(e => e === i) ? null : i)
  }, [i, n, t]);
  let h = l.useCallback(e => {
      null == c || c(e), p(null)
    }, [c, p]),
    x = l.useCallback(e => {
      null == c || c(e), p(e)
    }, [c, p]),
    m = l.useCallback(() => (0, r.jsx)(a.CustomColorPicker, {
      onChange: x,
      value: f
    }), [x, f]),
    C = l.useCallback(e => {
      let t = (0, r.jsx)(a.CustomColorButton, {
        ...e,
        "aria-label": s.default.Messages.CUSTOM_COLOR
      });
      return u ? t : (0, r.jsx)(o.Popout, {
        renderPopout: m,
        position: d,
        children: e => (0, r.jsx)(o.Tooltip, {
          text: s.default.Messages.CUSTOM_COLOR,
          position: "bottom",
          children: n => (0, r.jsx)("div", {
            ...n,
            ...e,
            children: t
          })
        })
      })
    }, [d, u, m]),
    v = l.useCallback(e => {
      let t = (0, r.jsx)(a.DefaultColorButton, {
        ...e
      });
      return u ? t : (0, r.jsx)(o.Tooltip, {
        text: s.default.Messages.DEFAULT,
        position: "bottom",
        children: e => (0, r.jsx)("div", {
          ...e,
          children: t
        })
      })
    }, [u]);
  return (0, r.jsx)(a.default, {
    ...e,
    renderDefaultButton: v,
    renderCustomButton: C,
    customColor: f,
    onChange: h
  })
}