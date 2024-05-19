"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("153832"),
  o = s("866442"),
  d = s("692547"),
  u = s("481060"),
  c = s("699682"),
  S = s("44315"),
  E = s("703685"),
  T = s("586791"),
  f = s("654904"),
  _ = s("981631"),
  m = s("689938"),
  g = s("395495");

function I(e) {
  let {
    onChange: t,
    onClose: s,
    color: l,
    suggestedColors: I,
    disabled: h,
    label: N,
    colorPickerMiddle: p,
    colorPickerFooter: C,
    showEyeDropper: A
  } = e, O = n.useRef(null), x = (0, u.useToken)(d.default.colors.BACKGROUND_PRIMARY).hex(), R = d.default.colors.BACKGROUND_ACCENT.css, M = (0, f.isColorDark)(l), v = (0, o.int2hex)(l), L = v === x ? R : v, D = (0, S.getColor)(M ? _.Color.WHITE_500 : _.Color.PRIMARY_530), P = (0, c.default)(p), j = (0, c.default)(C), [b, U] = n.useState((0, r.v4)());
  return n.useEffect(() => {
    (P !== p || j !== C) && U((0, r.v4)())
  }, [C, p, j, P]), (0, a.jsx)(u.Popout, {
    positionKey: b,
    renderPopout: e => (0, a.jsx)(E.CustomColorPicker, {
      ...e,
      value: l,
      onChange: t,
      suggestedColors: I,
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
        className: i()(g.colorSwatch, {
          [g.disabled]: h
        }),
        children: [(0, a.jsx)(u.Clickable, {
          ...s,
          tabIndex: h ? -1 : 0,
          onClick: h ? _.NOOP : t,
          style: {
            backgroundColor: v,
            borderColor: L
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
            color: D
          })
        }), N]
      })
    }
  })
}