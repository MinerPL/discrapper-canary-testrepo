"use strict";
t.d(s, {
  Z: function() {
    return T
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(481060),
  o = t(186523),
  c = t(553826),
  d = t(2150),
  u = t(992249),
  E = t(717251),
  _ = t(689938),
  I = t(869280);

function T(e) {
  var s, t, l;
  let {
    changeTitle: T,
    value: N,
    options: m,
    className: S,
    onChange: h
  } = e, [g, x] = i.useState(N), [C, R] = i.useState(!1), [L, O] = i.useState(!1), A = i.useRef(null);
  i.useEffect(() => {
    x(N)
  }, [N]), i.useEffect(() => () => {
    clearTimeout(A.current)
  }, []);
  let p = m.find(e => e.value === g),
    M = e => {
      if (!e.disabled && e.value !== g) O(!0), null == h || h(e), x(e.value), A.current = setTimeout(() => {
        O(!1), R(!1)
      }, 1e3)
    };
  return (0, n.jsx)(u.Z, {
    title: C ? T : null !== (s = null == p ? void 0 : p.title) && void 0 !== s ? s : T,
    description: C ? "(".concat(null !== (t = null == p ? void 0 : p.title) && void 0 !== t ? t : _.Z.Messages.NONE, ")") : null !== (l = null == p ? void 0 : p.description) && void 0 !== l ? l : "",
    highlightColor: C ? d.q.NONE : null == p ? void 0 : p.highlightColor,
    action: (0, n.jsx)(r.Button, {
      look: r.Button.Looks.LINK,
      size: r.Button.Sizes.MIN,
      color: r.Button.Colors.LINK,
      children: _.Z.Messages.CHANGE
    }),
    loading: L,
    className: S,
    children: m.map((e, s) => (0, n.jsx)(E.Z, {
      title: e.title,
      description: e.description,
      highlightColor: e.highlightColor,
      className: a()(I.groupCollapsedRow, g === e.value && I.selected),
      selected: g === e.value,
      action: g === e.value ? (0, n.jsx)(c.Z, {
        className: I.radioItem
      }) : (0, n.jsx)(o.Z, {
        className: I.radioItem
      }),
      onClick: () => M(e),
      disabled: e.disabled
    }, "".concat(e.title, "-").concat(s)))
  })
}