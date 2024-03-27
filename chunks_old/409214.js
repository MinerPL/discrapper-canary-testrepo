"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("748820"),
  o = s("509043"),
  d = s("669491"),
  u = s("77078"),
  c = s("634634"),
  S = s("449918"),
  E = s("973262"),
  T = s("832132"),
  f = s("771325"),
  _ = s("49111"),
  m = s("782340"),
  g = s("718740");

function h(e) {
  let {
    onChange: t,
    onClose: s,
    color: l,
    suggestedColors: h,
    disabled: N,
    label: I,
    colorPickerMiddle: p,
    colorPickerFooter: C,
    showEyeDropper: A
  } = e, O = n.useRef(null), x = (0, u.useToken)(d.default.colors.BACKGROUND_PRIMARY).hex(), R = d.default.colors.BACKGROUND_ACCENT.css, M = (0, f.isColorDark)(l), D = (0, o.int2hex)(l), v = D === x ? R : D, L = (0, S.getColor)(M ? _.Color.WHITE_500 : _.Color.PRIMARY_530), P = (0, c.default)(p), j = (0, c.default)(C), [b, U] = n.useState((0, r.v4)());
  return n.useEffect(() => {
    (P !== p || j !== C) && U((0, r.v4)())
  }, [C, p, j, P]), (0, a.jsx)(u.Popout, {
    positionKey: b,
    renderPopout: e => (0, a.jsx)(E.CustomColorPicker, {
      ...e,
      value: l,
      onChange: t,
      suggestedColors: h,
      middle: p,
      footer: C,
      showEyeDropper: A
    }),
    onRequestClose: s,
    children: e => {
      let {
        onClick: t,
        ...s
      } = e;
      return (0, a.jsxs)("div", {
        ref: O,
        className: i(g.colorSwatch, {
          [g.disabled]: N
        }),
        children: [(0, a.jsx)(u.Clickable, {
          ...s,
          tabIndex: N ? -1 : 0,
          onClick: N ? _.NOOP : t,
          style: {
            backgroundColor: D,
            borderColor: v
          },
          className: g.swatch,
          "aria-label": m.default.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
          focusProps: {
            ringTarget: O
          },
          children: (0, a.jsx)(T.default, {
            className: g.editPencilIcon,
            width: 14,
            height: 14,
            color: L
          })
        }), I]
      })
    }
  })
}