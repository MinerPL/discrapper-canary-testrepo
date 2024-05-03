"use strict";
n.r(t), n.d(t, {
  CustomColorButton: function() {
    return I
  },
  CustomColorPicker: function() {
    return v
  },
  DefaultColorButton: function() {
    return x
  },
  default: function() {
    return N
  }
}), n("47120");
var a = n("735250"),
  i = n("470079"),
  r = n("120356"),
  s = n.n(r),
  l = n("924826"),
  o = n("866442"),
  c = n("481060"),
  d = n("408886"),
  u = n("44315"),
  f = n("671862"),
  m = n("263704"),
  h = n("214623"),
  E = n("502568"),
  T = n("981631"),
  p = n("689938"),
  _ = n("395788");
let C = () => Promise.resolve();

function g(e) {
  let {
    color: t,
    isDefault: n = !1,
    isCustom: i = !1,
    isSelected: r = !1,
    disabled: d = !1,
    style: f = {},
    onClick: E,
    "aria-label": p
  } = e, C = (0, l.useListItem)("color-".concat(t)), g = null != t ? (0, o.int2hex)(t) : f.backgroundColor, x = !1;
  return i && !r ? x = !0 : (i || r) && (x = (0, o.getDarkness)(t) > .1), (0, a.jsx)(c.FocusRing, {
    offset: -2,
    children: (0, a.jsxs)("button", {
      type: "button",
      className: s()(_.colorPickerSwatch, {
        [_.disabled]: d,
        [_.default]: n,
        [_.custom]: i,
        [_.noColor]: null == t
      }),
      disabled: d,
      onClick: () => null == E ? void 0 : E(t),
      style: {
        ...f,
        backgroundColor: g
      },
      "aria-label": null != p ? p : g,
      ...C,
      children: [i ? (0, a.jsx)(h.default, {
        className: _.colorPickerDropper,
        foreground: _.colorPickerDropperFg,
        width: 14,
        height: 14,
        color: (0, u.getColor)(x ? T.Color.WHITE_500 : T.Color.BLACK_500)
      }) : null, function() {
        let e = 16,
          t = 16;
        if ((i || n) && (e = 32, t = 24), r) return (0, a.jsx)(m.default, {
          width: e,
          height: t,
          color: (0, u.getColor)(x ? T.Color.WHITE_500 : T.Color.BLACK_500)
        })
      }()]
    })
  })
}
class x extends i.PureComponent {
  render() {
    let {
      color: e,
      onChange: t,
      value: n,
      disabled: i
    } = this.props;
    return (0, a.jsx)(g, {
      isDefault: !0,
      color: e,
      isSelected: e === n || 0 === n,
      onClick: t,
      disabled: i
    })
  }
}
class I extends i.PureComponent {
  render() {
    let {
      customColor: e,
      value: t,
      disabled: n,
      "aria-label": i
    } = this.props;
    return (0, a.jsx)(g, {
      isCustom: !0,
      color: e,
      isSelected: t === e,
      disabled: n,
      "aria-label": i
    })
  }
}
let v = i.memo(function(e) {
  let {
    value: t,
    eagerUpdate: n = !1,
    onChange: r,
    onClose: l,
    suggestedColors: u,
    middle: m,
    footer: T,
    showEyeDropper: C,
    wrapperComponentType: g,
    className: x
  } = e, I = (0, d.default)(), v = function(e) {
    if (null == e) return null;
    if ("string" == typeof e) return (0, o.isValidHex)(e) ? (0, o.hex2int)(e) : null;
    return e
  }(t), N = null != v ? v : 0, S = (0, o.int2hex)(N), A = (0, o.int2hslRaw)(N), [R, M] = i.useState({
    current: N,
    pending: {
      hex: S,
      hsl: A
    },
    input: S
  });
  i.useEffect(() => {
    if (null == v || v === R.current) return;
    let e = (0, o.int2hex)(v),
      t = (0, o.int2hslRaw)(v);
    M({
      current: v,
      pending: {
        hex: e,
        hsl: t
      },
      input: e
    })
  }, [v, R]), i.useEffect(() => l, [l]);
  let L = e => {
      let t = "#" === e[0] ? e : "#".concat(e);
      if (!(0, o.isValidHex)(t)) {
        M(e => ({
          ...e,
          input: t
        }));
        return
      }
      let n = (0, o.hex2int)(t),
        a = (0, o.int2hslRaw)(n);
      M({
        current: n,
        pending: {
          hex: t,
          hsl: a
        },
        input: t
      }), r(n)
    },
    b = async () => {
      if (null != I) try {
        let {
          sRGBHex: e
        } = await I.open();
        L(e)
      } catch {}
    }, y = i.useCallback(e => {
      M(t => ({
        ...t,
        pending: e,
        input: e.hex
      })), n && r((0, o.hex2int)(e.hex))
    }, [n, r]), j = e => {
      r((0, o.hex2int)(e))
    }, O = (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(f.default, {
        onChange: y,
        onChangeComplete: e => {
          let {
            hex: t
          } = e;
          return j(t)
        },
        color: R.pending.hsl
      }), m, (0, a.jsxs)("div", {
        className: _.customColorPickerInputContainer,
        children: [C && null != I && (0, a.jsx)(E.Icon, {
          onClick: b,
          tooltip: p.default.Messages.PICK_A_COLOR_FROM_THE_PAGE,
          tooltipPosition: "top",
          className: _.customColorPickerEyeDropper,
          icon: h.default
        }), (0, a.jsx)(c.TextInput, {
          className: _.customColorPickerInput,
          value: R.input,
          onChange: L,
          maxLength: 7
        })]
      }), null != u && u.length > 0 && (0, a.jsx)("div", {
        className: _.suggestedColors,
        children: u.map((e, t) => (0, a.jsx)(c.Clickable, {
          "aria-label": "",
          style: {
            backgroundColor: e
          },
          className: _.suggestedColor,
          onClick: () => L(e)
        }, "".concat(e, "-").concat(t)))
      }), T]
    }), D = null != g ? g : c.Dialog;
  return (0, a.jsx)(D, {
    "aria-label": p.default.Messages.PICK_A_COLOR,
    className: s()(_.customColorPicker, x),
    children: O
  })
});

function N(e) {
  let {
    className: t,
    defaultColor: n,
    customColor: i,
    colors: r,
    value: o,
    disabled: c,
    onChange: d,
    renderDefaultButton: u,
    renderCustomButton: f,
    colorContainerClassName: m
  } = e, h = e => (0, a.jsx)("div", {
    className: _.colorPickerRow,
    children: e.map(e => (0, a.jsx)(g, {
      color: e,
      isSelected: e === o,
      onClick: d,
      disabled: c
    }, e))
  }), E = r.slice(0, r.length / 2), T = r.slice(r.length / 2, r.length), p = (0, l.default)({
    id: "color-picker",
    isEnabled: !0,
    scrollToStart: C,
    scrollToEnd: C
  });
  return (0, a.jsx)(l.ListNavigatorProvider, {
    navigator: p,
    children: (0, a.jsx)(l.ListNavigatorContainer, {
      children: e => {
        let {
          ref: r,
          ...l
        } = e;
        return (0, a.jsxs)("div", {
          className: s()(_.container, t),
          ref: r,
          ...l,
          children: [(0, a.jsx)("div", {
            className: s()(_.defaultContainer, m),
            children: u({
              value: o,
              color: n,
              onChange: d,
              disabled: c
            })
          }), (0, a.jsx)("div", {
            className: s()(_.customContainer, m),
            children: f({
              value: o,
              customColor: i,
              disabled: c
            })
          }), (0, a.jsxs)("div", {
            className: _.__invalid_presets,
            children: [h(E), h(T)]
          })]
        })
      }
    })
  })
}