"use strict";
s.r(t), s.d(t, {
  CustomColorButton: function() {
    return R
  },
  CustomColorPicker: function() {
    return x
  },
  DefaultColorButton: function() {
    return m
  },
  default: function() {
    return T
  }
}), s("47120");
var n = s("735250"),
  l = s("470079"),
  a = s("803997"),
  o = s.n(a),
  i = s("924826"),
  r = s("866442"),
  u = s("481060"),
  c = s("408886"),
  d = s("44315"),
  E = s("671862"),
  f = s("263704"),
  h = s("214623"),
  C = s("502568"),
  p = s("981631"),
  _ = s("689938"),
  I = s("999583");
let N = () => Promise.resolve();

function g(e) {
  let {
    color: t,
    isDefault: s = !1,
    isCustom: l = !1,
    isSelected: a = !1,
    disabled: c = !1,
    style: E = {},
    onClick: C,
    "aria-label": _
  } = e, N = (0, i.useListItem)("color-".concat(t)), g = null != t ? (0, r.int2hex)(t) : E.backgroundColor, m = !1;
  return l && !a ? m = !0 : (l || a) && (m = (0, r.getDarkness)(t) > .1), (0, n.jsx)(u.FocusRing, {
    offset: -2,
    children: (0, n.jsxs)("button", {
      type: "button",
      className: o()(I.colorPickerSwatch, {
        [I.disabled]: c,
        [I.default]: s,
        [I.custom]: l,
        [I.noColor]: null == t
      }),
      disabled: c,
      onClick: () => null == C ? void 0 : C(t),
      style: {
        ...E,
        backgroundColor: g
      },
      "aria-label": null != _ ? _ : g,
      ...N,
      children: [l ? (0, n.jsx)(h.default, {
        className: I.colorPickerDropper,
        foreground: I.colorPickerDropperFg,
        width: 14,
        height: 14,
        color: (0, d.getColor)(m ? p.Color.WHITE_500 : p.Color.BLACK_500)
      }) : null, function() {
        let e = 16,
          t = 16;
        if ((l || s) && (e = 32, t = 24), a) return (0, n.jsx)(f.default, {
          width: e,
          height: t,
          color: (0, d.getColor)(m ? p.Color.WHITE_500 : p.Color.BLACK_500)
        })
      }()]
    })
  })
}
class m extends l.PureComponent {
  render() {
    let {
      color: e,
      onChange: t,
      value: s,
      disabled: l
    } = this.props;
    return (0, n.jsx)(g, {
      isDefault: !0,
      color: e,
      isSelected: e === s || 0 === s,
      onClick: t,
      disabled: l
    })
  }
}
class R extends l.PureComponent {
  render() {
    let {
      customColor: e,
      value: t,
      disabled: s,
      "aria-label": l
    } = this.props;
    return (0, n.jsx)(g, {
      isCustom: !0,
      color: e,
      isSelected: t === e,
      disabled: s,
      "aria-label": l
    })
  }
}
let x = l.memo(e => {
  let {
    value: t,
    onChange: s,
    onClose: a,
    suggestedColors: o,
    middle: i,
    footer: d,
    showEyeDropper: f
  } = e, p = (0, c.default)(), [N, g] = l.useState(() => {
    let e = null != t ? t : 0,
      s = (0, r.int2hex)(e);
    return {
      current: e,
      pending: s,
      input: s
    }
  });
  l.useEffect(() => {
    if (null == t || t === N.current) return;
    let e = (0, r.int2hex)(t);
    g({
      current: t,
      pending: e,
      input: e
    })
  }, [t, N]), l.useEffect(() => a, [a]);
  let m = e => {
      let t = "#" === e[0] ? e : "#".concat(e);
      if (!(0, r.isValidHex)(t)) {
        g(e => ({
          ...e,
          input: t
        }));
        return
      }
      let n = (0, r.hex2int)(t);
      g({
        current: n,
        pending: t,
        input: t
      }), s(n)
    },
    R = async () => {
      if (null != p) try {
        let {
          sRGBHex: e
        } = await p.open();
        m(e)
      } catch {}
    }, x = e => {
      g(t => ({
        ...t,
        pending: e,
        input: e
      }))
    }, T = e => {
      s((0, r.hex2int)(e))
    };
  return (0, n.jsxs)(u.Dialog, {
    "aria-label": _.default.Messages.PICK_A_COLOR,
    className: I.customColorPicker,
    children: [(0, n.jsx)(E.default, {
      onChange: e => {
        let {
          hex: t
        } = e;
        return x(t)
      },
      onChangeComplete: e => {
        let {
          hex: t
        } = e;
        return T(t)
      },
      color: N.pending
    }), i, (0, n.jsxs)("div", {
      className: I.customColorPickerInputContainer,
      children: [f && null != p && (0, n.jsx)(C.Icon, {
        onClick: R,
        tooltip: _.default.Messages.PICK_A_COLOR_FROM_THE_PAGE,
        tooltipPosition: "top",
        className: I.customColorPickerEyeDropper,
        icon: h.default
      }), (0, n.jsx)(u.TextInput, {
        className: I.customColorPickerInput,
        value: N.input,
        onChange: m,
        maxLength: 7
      })]
    }), null != o && o.length > 0 && (0, n.jsx)("div", {
      className: I.suggestedColors,
      children: o.map((e, t) => (0, n.jsx)(u.Clickable, {
        "aria-label": "",
        style: {
          backgroundColor: e
        },
        className: I.suggestedColor,
        onClick: () => m(e)
      }, "".concat(e, "-").concat(t)))
    }), d]
  })
});

function T(e) {
  let {
    className: t,
    defaultColor: s,
    customColor: l,
    colors: a,
    value: r,
    disabled: u,
    onChange: c,
    renderDefaultButton: d,
    renderCustomButton: E,
    colorContainerClassName: f
  } = e, h = e => (0, n.jsx)("div", {
    className: I.colorPickerRow,
    children: e.map(e => (0, n.jsx)(g, {
      color: e,
      isSelected: e === r,
      onClick: c,
      disabled: u
    }, e))
  }), C = a.slice(0, a.length / 2), p = a.slice(a.length / 2, a.length), _ = (0, i.default)({
    id: "color-picker",
    isEnabled: !0,
    scrollToStart: N,
    scrollToEnd: N
  });
  return (0, n.jsx)(i.ListNavigatorProvider, {
    navigator: _,
    children: (0, n.jsx)(i.ListNavigatorContainer, {
      children: e => {
        let {
          ref: a,
          ...i
        } = e;
        return (0, n.jsxs)("div", {
          className: o()(I.container, t),
          ref: a,
          ...i,
          children: [(0, n.jsx)("div", {
            className: o()(I.defaultContainer, f),
            children: d({
              value: r,
              color: s,
              onChange: c,
              disabled: u
            })
          }), (0, n.jsx)("div", {
            className: o()(I.customContainer, f),
            children: E({
              value: r,
              customColor: l,
              disabled: u
            })
          }), (0, n.jsxs)("div", {
            className: I.__invalid_presets,
            children: [h(C), h(p)]
          })]
        })
      }
    })
  })
}