"use strict";
n.r(t), n.d(t, {
  DefaultColorButton: function() {
    return b
  },
  CustomColorButton: function() {
    return k
  },
  CustomColorPicker: function() {
    return N
  },
  default: function() {
    return y
  }
}), n("222007");
var l = n("37983"),
  r = n("884691"),
  o = n("414456"),
  a = n.n(o),
  s = n("974667"),
  i = n("509043"),
  c = n("77078"),
  u = n("248559"),
  d = n("449918"),
  f = n("526975"),
  p = n("36694"),
  h = n("422403"),
  x = n("664336"),
  m = n("49111"),
  C = n("782340"),
  v = n("939342");
let g = () => Promise.resolve();

function j(e) {
  let {
    color: t,
    isDefault: n = !1,
    isCustom: r = !1,
    isSelected: o = !1,
    disabled: u = !1,
    style: f = {},
    onClick: x,
    "aria-label": C
  } = e, g = (0, s.useListItem)("color-".concat(t)), j = null != t ? (0, i.int2hex)(t) : f.backgroundColor, b = !1;
  return r && !o ? b = !0 : (r || o) && (b = (0, i.getDarkness)(t) > .1), (0, l.jsx)(c.FocusRing, {
    offset: -2,
    children: (0, l.jsxs)("button", {
      type: "button",
      className: a(v.colorPickerSwatch, {
        [v.disabled]: u,
        [v.default]: n,
        [v.custom]: r,
        [v.noColor]: null == t
      }),
      disabled: u,
      onClick: () => null == x ? void 0 : x(t),
      style: {
        ...f,
        backgroundColor: j
      },
      "aria-label": null != C ? C : j,
      ...g,
      children: [r ? (0, l.jsx)(h.default, {
        className: v.colorPickerDropper,
        foreground: v.colorPickerDropperFg,
        width: 14,
        height: 14,
        color: (0, d.getColor)(b ? m.Color.WHITE_500 : m.Color.BLACK_500)
      }) : null, function() {
        let e = 16,
          t = 16;
        if ((r || n) && (e = 32, t = 24), o) return (0, l.jsx)(p.default, {
          width: e,
          height: t,
          color: (0, d.getColor)(b ? m.Color.WHITE_500 : m.Color.BLACK_500)
        })
      }()]
    })
  })
}
class b extends r.PureComponent {
  render() {
    let {
      color: e,
      onChange: t,
      value: n,
      disabled: r
    } = this.props;
    return (0, l.jsx)(j, {
      isDefault: !0,
      color: e,
      isSelected: e === n || 0 === n,
      onClick: t,
      disabled: r
    })
  }
}
class k extends r.PureComponent {
  render() {
    let {
      customColor: e,
      value: t,
      disabled: n,
      "aria-label": r
    } = this.props;
    return (0, l.jsx)(j, {
      isCustom: !0,
      color: e,
      isSelected: t === e,
      disabled: n,
      "aria-label": r
    })
  }
}
let N = r.memo(e => {
  let {
    value: t,
    onChange: n,
    onClose: o,
    suggestedColors: a,
    middle: s,
    footer: d,
    showEyeDropper: p
  } = e, m = (0, u.default)(), [g, j] = r.useState(() => {
    let e = null != t ? t : 0,
      n = (0, i.int2hex)(e);
    return {
      current: e,
      pending: n,
      input: n
    }
  });
  r.useEffect(() => {
    if (null == t || t === g.current) return;
    let e = (0, i.int2hex)(t);
    j({
      current: t,
      pending: e,
      input: e
    })
  }, [t, g]), r.useEffect(() => o, [o]);
  let b = e => {
      let t = "#" === e[0] ? e : "#".concat(e);
      if (!(0, i.isValidHex)(t)) {
        j(e => ({
          ...e,
          input: t
        }));
        return
      }
      let l = (0, i.hex2int)(t);
      j({
        current: l,
        pending: t,
        input: t
      }), n(l)
    },
    k = async () => {
      if (null != m) try {
        let {
          sRGBHex: e
        } = await m.open();
        b(e)
      } catch {}
    }, N = e => {
      j(t => ({
        ...t,
        pending: e,
        input: e
      }))
    }, y = e => {
      n((0, i.hex2int)(e))
    };
  return (0, l.jsxs)(c.Dialog, {
    "aria-label": C.default.Messages.PICK_A_COLOR,
    className: v.customColorPicker,
    children: [(0, l.jsx)(f.default, {
      onChange: e => {
        let {
          hex: t
        } = e;
        return N(t)
      },
      onChangeComplete: e => {
        let {
          hex: t
        } = e;
        return y(t)
      },
      color: g.pending
    }), s, (0, l.jsxs)("div", {
      className: v.customColorPickerInputContainer,
      children: [p && null != m && (0, l.jsx)(x.Icon, {
        onClick: k,
        tooltip: C.default.Messages.PICK_A_COLOR_FROM_THE_PAGE,
        tooltipPosition: "top",
        className: v.customColorPickerEyeDropper,
        icon: h.default
      }), (0, l.jsx)(c.TextInput, {
        className: v.customColorPickerInput,
        value: g.input,
        onChange: b,
        maxLength: 7
      })]
    }), null != a && a.length > 0 && (0, l.jsx)("div", {
      className: v.suggestedColors,
      children: a.map((e, t) => (0, l.jsx)(c.Clickable, {
        "aria-label": "",
        style: {
          backgroundColor: e
        },
        className: v.suggestedColor,
        onClick: () => b(e)
      }, "".concat(e, "-").concat(t)))
    }), d]
  })
});

function y(e) {
  let {
    className: t,
    defaultColor: n,
    customColor: r,
    colors: o,
    value: i,
    disabled: c,
    onChange: u,
    renderDefaultButton: d,
    renderCustomButton: f,
    colorContainerClassName: p
  } = e, h = e => (0, l.jsx)("div", {
    className: v.colorPickerRow,
    children: e.map(e => (0, l.jsx)(j, {
      color: e,
      isSelected: e === i,
      onClick: u,
      disabled: c
    }, e))
  }), x = o.slice(0, o.length / 2), m = o.slice(o.length / 2, o.length), C = (0, s.default)({
    id: "color-picker",
    isEnabled: !0,
    scrollToStart: g,
    scrollToEnd: g
  });
  return (0, l.jsx)(s.ListNavigatorProvider, {
    navigator: C,
    children: (0, l.jsx)(s.ListNavigatorContainer, {
      children: e => {
        let {
          ref: o,
          ...s
        } = e;
        return (0, l.jsxs)("div", {
          className: a(v.container, t),
          ref: o,
          ...s,
          children: [(0, l.jsx)("div", {
            className: a(v.defaultContainer, p),
            children: d({
              value: i,
              color: n,
              onChange: u,
              disabled: c
            })
          }), (0, l.jsx)("div", {
            className: a(v.customContainer, p),
            children: f({
              value: i,
              customColor: r,
              disabled: c
            })
          }), (0, l.jsxs)("div", {
            className: v.presets,
            children: [h(x), h(m)]
          })]
        })
      }
    })
  })
}