"use strict";
l.r(t), l.d(t, {
  default: function() {
    return a
  }
}), l("47120");
var o = l("735250"),
  r = l("470079"),
  n = l("481060"),
  s = l("703685"),
  i = l("689938");

function a(e) {
  let {
    defaultColor: t,
    colors: l,
    value: a,
    onChange: c,
    disabled: u = !1,
    customPickerPosition: d = "bottom"
  } = e, [C, h] = r.useState(() => 0 === a || a === t || l.some(e => e === a) ? null : a);
  r.useEffect(() => {
    h(0 === a || a === t || l.some(e => e === a) ? null : a)
  }, [a, l, t]);
  let p = r.useCallback(e => {
      null == c || c(e), h(null)
    }, [c, h]),
    f = r.useCallback(e => {
      null == c || c(e), h(e)
    }, [c, h]),
    x = r.useCallback(() => (0, o.jsx)(s.CustomColorPicker, {
      onChange: f,
      value: C
    }), [f, C]),
    m = r.useCallback(e => {
      let t = (0, o.jsx)(s.CustomColorButton, {
        ...e,
        "aria-label": i.default.Messages.CUSTOM_COLOR
      });
      return u ? t : (0, o.jsx)(n.Popout, {
        renderPopout: x,
        position: d,
        children: e => (0, o.jsx)(n.Tooltip, {
          text: i.default.Messages.CUSTOM_COLOR,
          position: "bottom",
          children: l => (0, o.jsx)("div", {
            ...l,
            ...e,
            children: t
          })
        })
      })
    }, [d, u, x]),
    g = r.useCallback(e => {
      let t = (0, o.jsx)(s.DefaultColorButton, {
        ...e
      });
      return u ? t : (0, o.jsx)(n.Tooltip, {
        text: i.default.Messages.DEFAULT,
        position: "bottom",
        children: e => (0, o.jsx)("div", {
          ...e,
          children: t
        })
      })
    }, [u]);
  return (0, o.jsx)(s.default, {
    ...e,
    renderDefaultButton: g,
    renderCustomButton: m,
    customColor: C,
    onChange: p
  })
}