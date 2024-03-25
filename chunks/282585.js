"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("222007");
var l = n("37983"),
  r = n("884691"),
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
  } = e, [f, p] = r.useState(() => 0 === i || i === t || n.some(e => e === i) ? null : i);
  r.useEffect(() => {
    p(0 === i || i === t || n.some(e => e === i) ? null : i)
  }, [i, n, t]);
  let h = r.useCallback(e => {
      null == c || c(e), p(null)
    }, [c, p]),
    x = r.useCallback(e => {
      null == c || c(e), p(e)
    }, [c, p]),
    m = r.useCallback(() => (0, l.jsx)(a.CustomColorPicker, {
      onChange: x,
      value: f
    }), [x, f]),
    C = r.useCallback(e => {
      let t = (0, l.jsx)(a.CustomColorButton, {
        ...e,
        "aria-label": s.default.Messages.CUSTOM_COLOR
      });
      return u ? t : (0, l.jsx)(o.Popout, {
        renderPopout: m,
        position: d,
        children: e => (0, l.jsx)(o.Tooltip, {
          text: s.default.Messages.CUSTOM_COLOR,
          position: "bottom",
          children: n => (0, l.jsx)("div", {
            ...n,
            ...e,
            children: t
          })
        })
      })
    }, [d, u, m]),
    v = r.useCallback(e => {
      let t = (0, l.jsx)(a.DefaultColorButton, {
        ...e
      });
      return u ? t : (0, l.jsx)(o.Tooltip, {
        text: s.default.Messages.DEFAULT,
        position: "bottom",
        children: e => (0, l.jsx)("div", {
          ...e,
          children: t
        })
      })
    }, [u]);
  return (0, l.jsx)(a.default, {
    ...e,
    renderDefaultButton: v,
    renderCustomButton: C,
    customColor: f,
    onChange: h
  })
}