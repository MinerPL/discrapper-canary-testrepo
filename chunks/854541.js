"use strict";
n.d(t, {
  AG: function() {
    return p
  },
  Z$: function() {
    return L
  },
  jH: function() {
    return g
  },
  zH: function() {
    return v
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(91192),
  l = n(924826),
  u = n(866442),
  _ = n(1561),
  d = n(507274),
  c = n(84735),
  E = n(463208),
  I = n(408886),
  T = n(44315),
  h = n(263704),
  S = n(214623),
  f = n(502568),
  N = n(534828),
  A = n(981631),
  m = n(689938),
  O = n(451575);
let R = () => Promise.resolve();

function C(e) {
  let {
    color: t,
    isDefault: n = !1,
    isCustom: r = !1,
    isSelected: s = !1,
    disabled: l = !1,
    style: _ = {},
    onClick: d,
    "aria-label": E
  } = e, I = (0, a.JA)("color-".concat(t)), f = null != t ? (0, u.Rf)(t) : _.backgroundColor, N = !1;
  return r && !s ? N = !0 : (r || s) && (N = (0, u.Bd)(t) > .1), (0, i.jsx)(c.t, {
    offset: -2,
    children: (0, i.jsxs)("button", {
      type: "button",
      className: o()(O.colorPickerSwatch, {
        [O.disabled]: l,
        [O.default]: n,
        [O.custom]: r,
        [O.noColor]: null == t
      }),
      disabled: l,
      onClick: () => null == d ? void 0 : d(t),
      style: {
        ..._,
        backgroundColor: f
      },
      "aria-label": null != E ? E : f,
      ...I,
      children: [r ? (0, i.jsx)(S.Z, {
        className: O.colorPickerDropper,
        foreground: O.colorPickerDropperFg,
        width: 14,
        height: 14,
        color: (0, T.Lq)(N ? A.Ilk.WHITE_500 : A.Ilk.BLACK_500)
      }) : null, function() {
        let e = 16,
          t = 16;
        if ((r || n) && (e = 32, t = 24), s) return (0, i.jsx)(h.Z, {
          width: e,
          height: t,
          color: (0, T.Lq)(N ? A.Ilk.WHITE_500 : A.Ilk.BLACK_500)
        })
      }()]
    })
  })
}
class p extends r.PureComponent {
  render() {
    let {
      color: e,
      onChange: t,
      value: n,
      disabled: r
    } = this.props;
    return (0, i.jsx)(C, {
      isDefault: !0,
      color: e,
      isSelected: e === n || 0 === n,
      onClick: t,
      disabled: r
    })
  }
}
class g extends r.PureComponent {
  render() {
    let {
      customColor: e,
      value: t,
      disabled: n,
      "aria-label": r
    } = this.props;
    return (0, i.jsx)(C, {
      isCustom: !0,
      color: e,
      isSelected: t === e,
      disabled: n,
      "aria-label": r
    })
  }
}
let L = r.memo(function(e) {
  let {
    value: t,
    eagerUpdate: n = !1,
    onChange: s,
    onClose: a,
    suggestedColors: l,
    middle: c,
    footer: T,
    showEyeDropper: h,
    wrapperComponentType: A,
    className: R
  } = e, C = (0, I.Z)(), p = function(e) {
    if (null == e) return null;
    if ("string" == typeof e) return (0, u.FX)(e) ? (0, u._i)(e) : null;
    return e
  }(t), g = null != p ? p : 0, L = (0, u.Rf)(g), v = (0, u.O)(g), [D, M] = r.useState({
    current: g,
    pending: {
      hex: L,
      hsl: v
    },
    input: L
  });
  r.useEffect(() => {
    if (null == p || p === D.current) return;
    let e = (0, u.Rf)(p),
      t = (0, u.O)(p);
    M({
      current: p,
      pending: {
        hex: e,
        hsl: t
      },
      input: e
    })
  }, [p, D]), r.useEffect(() => a, [a]);
  let P = e => {
      let t = "#" === e[0] ? e : "#".concat(e);
      if (!(0, u.FX)(t)) {
        M(e => ({
          ...e,
          input: t
        }));
        return
      }
      let n = (0, u._i)(t),
        i = (0, u.O)(n);
      M({
        current: n,
        pending: {
          hex: t,
          hsl: i
        },
        input: t
      }), s(n)
    },
    y = async () => {
      if (null != C) try {
        let {
          sRGBHex: e
        } = await C.open();
        P(e)
      } catch {}
    }, U = r.useCallback(e => {
      M(t => ({
        ...t,
        pending: e,
        input: e.hex
      })), n && s((0, u._i)(e.hex))
    }, [n, s]), b = e => {
      s((0, u._i)(e))
    }, G = (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(N.Z, {
        onChange: U,
        onChangeComplete: e => {
          let {
            hex: t
          } = e;
          return b(t)
        },
        color: D.pending.hsl
      }), c, (0, i.jsxs)("div", {
        className: O.customColorPickerInputContainer,
        children: [h && null != C && (0, i.jsx)(f.JO, {
          onClick: y,
          tooltip: m.Z.Messages.PICK_A_COLOR_FROM_THE_PAGE,
          tooltipPosition: "top",
          className: O.customColorPickerEyeDropper,
          icon: S.Z
        }), (0, i.jsx)(E.o, {
          className: O.customColorPickerInput,
          value: D.input,
          onChange: P,
          maxLength: 7
        })]
      }), null != l && l.length > 0 && (0, i.jsx)("div", {
        className: O.suggestedColors,
        children: l.map((e, t) => (0, i.jsx)(_.P, {
          "aria-label": "",
          style: {
            backgroundColor: e
          },
          className: O.suggestedColor,
          onClick: () => P(e)
        }, "".concat(e, "-").concat(t)))
      }), T]
    }), w = null != A ? A : d.V;
  return (0, i.jsx)(w, {
    "aria-label": m.Z.Messages.PICK_A_COLOR,
    className: o()(O.customColorPicker, R),
    children: G
  })
});

function v(e) {
  let {
    className: t,
    defaultColor: n,
    customColor: r,
    colors: s,
    value: u,
    disabled: _,
    onChange: d,
    renderDefaultButton: c,
    renderCustomButton: E,
    colorContainerClassName: I
  } = e, T = e => (0, i.jsx)("div", {
    className: O.colorPickerRow,
    children: e.map(e => (0, i.jsx)(C, {
      color: e,
      isSelected: e === u,
      onClick: d,
      disabled: _
    }, e))
  }), h = s.slice(0, s.length / 2), S = s.slice(s.length / 2, s.length), f = (0, l.ZP)({
    id: "color-picker",
    isEnabled: !0,
    scrollToStart: R,
    scrollToEnd: R
  });
  return (0, i.jsx)(a.bG, {
    navigator: f,
    children: (0, i.jsx)(a.SJ, {
      children: e => {
        let {
          ref: s,
          ...a
        } = e;
        return (0, i.jsxs)("div", {
          className: o()(O.container, t),
          ref: s,
          ...a,
          children: [(0, i.jsx)("div", {
            className: o()(O.defaultContainer, I),
            children: c({
              value: u,
              color: n,
              onChange: d,
              disabled: _
            })
          }), (0, i.jsx)("div", {
            className: o()(O.customContainer, I),
            children: E({
              value: u,
              customColor: r,
              disabled: _
            })
          }), (0, i.jsxs)("div", {
            children: [T(h), T(S)]
          })]
        })
      }
    })
  })
}