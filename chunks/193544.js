"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("481060"),
  o = s("186523"),
  d = s("553826"),
  u = s("2150"),
  c = s("992249"),
  E = s("717251"),
  _ = s("689938"),
  I = s("307913");

function T(e) {
  var t, s, n;
  let {
    changeTitle: T,
    value: S,
    options: f,
    className: m,
    onChange: N
  } = e, [g, h] = l.useState(S), [C, R] = l.useState(!1), [x, L] = l.useState(!1), O = l.useRef(null);
  l.useEffect(() => {
    h(S)
  }, [S]), l.useEffect(() => () => {
    clearTimeout(O.current)
  }, []);
  let A = f.find(e => e.value === g),
    p = e => {
      !e.disabled && e.value !== g && (L(!0), null == N || N(e), h(e.value), O.current = setTimeout(() => {
        L(!1), R(!1)
      }, 1e3))
    };
  return (0, a.jsx)(c.default, {
    title: C ? T : null !== (t = null == A ? void 0 : A.title) && void 0 !== t ? t : T,
    description: C ? "(".concat(null !== (s = null == A ? void 0 : A.title) && void 0 !== s ? s : _.default.Messages.NONE, ")") : null !== (n = null == A ? void 0 : A.description) && void 0 !== n ? n : "",
    highlightColor: C ? u.HighlightColors.NONE : null == A ? void 0 : A.highlightColor,
    action: (0, a.jsx)(r.Button, {
      look: r.Button.Looks.LINK,
      size: r.Button.Sizes.MIN,
      color: r.Button.Colors.LINK,
      children: _.default.Messages.CHANGE
    }),
    loading: x,
    className: m,
    children: f.map((e, t) => (0, a.jsx)(E.default, {
      title: e.title,
      description: e.description,
      highlightColor: e.highlightColor,
      className: i()(I.groupCollapsedRow, g === e.value && I.selected),
      selected: g === e.value,
      action: g === e.value ? (0, a.jsx)(d.default, {
        className: I.radioItem
      }) : (0, a.jsx)(o.default, {
        className: I.radioItem
      }),
      onClick: () => p(e),
      disabled: e.disabled
    }, "".concat(e.title, "-").concat(t)))
  })
}