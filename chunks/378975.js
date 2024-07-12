n.d(l, {
  Z: function() {
return h;
  }
}), n(47120);
var t = n(735250),
  i = n(470079),
  r = n(120356),
  a = n.n(r),
  s = n(481060),
  u = n(596454),
  o = n(911969),
  d = n(868819),
  c = n(970184),
  m = n(280501),
  p = n(689938),
  f = n(184298);

function v(e) {
  let {
emoji: l,
label: n,
description: i,
isDisabled: r,
isOffset: s
  } = e, o = a()(f.labelContainer, {
[f.disabled]: r,
[f.offset]: null == l && s
  });
  return (0, t.jsxs)('div', {
className: f.option,
children: [
  null != l ? (0, t.jsx)(u.Z, {
    className: f.emoji,
    emojiId: l.id,
    emojiName: l.name,
    animated: l.animated
  }) : null,
  (0, t.jsxs)('div', {
    className: o,
    children: [
      (0, t.jsx)('strong', {
        className: f.label,
        children: n
      }),
      null != i ? (0, t.jsx)('span', {
        className: f.description,
        children: i
      }) : null
    ]
  })
]
  });
}

function E(e) {
  let {
emoji: l,
label: n
  } = e;
  return (0, t.jsx)('div', {
className: f.option,
children: (0, t.jsxs)('div', {
  className: a()(f.value, f.singleValue),
  children: [
    null != l ? (0, t.jsx)(u.Z, {
      className: f.emoji,
      src: l.src,
      emojiId: l.id,
      emojiName: l.name,
      animated: l.animated
    }) : null,
    (0, t.jsx)('span', {
      className: f.singleValueLabel,
      children: n
    })
  ]
})
  });
}

function N(e) {
  let {
options: l
  } = e;
  return (0, t.jsx)('div', {
className: f.option,
children: (0, t.jsx)('div', {
  className: f.value,
  children: l.map((e, l) => (0, t.jsxs)('div', {
    className: f.optionTag,
    children: [
      null != e.emoji ? (0, t.jsx)(u.Z, {
        className: f.smallEmoji,
        src: e.emoji.src,
        emojiId: e.emoji.id,
        emojiName: e.emoji.name,
        animated: e.emoji.animated
      }) : null,
      (0, t.jsx)('span', {
        className: f.tag,
        children: e.label
      }, e.value)
    ]
  }, l))
})
  });
}

function h(e) {
  let {
type: l,
options: n,
id: r,
placeholder: a,
maxValues: u,
minValues: h,
disabled: C
  } = e, I = i.useMemo(() => n.filter(e => e.default).map(e => e.value), [n]), {
state: g,
executeStateUpdate: x,
visualState: S,
isDisabled: j,
error: T
  } = (0, c.Ee)(e, {
type: l,
values: I
  }), _ = u > 1, L = S === m.gH.LOADING, [Z, M] = i.useState(!1), [O, A] = i.useState(() => new Set(n.filter(e => e.default).map(e => e.value))), [R, y] = i.useState(O), b = i.useMemo(() => n.some(e => null != e.emoji), [n]);
  i.useEffect(() => {
if ((null == g ? void 0 : g.type) === o.re.STRING_SELECT) {
  let e = new Set(g.values);
  A(e), y(e);
} else {
  let e = new Set(I);
  A(e), y(e);
}
  }, [
r,
I,
g
  ]);
  let U = i.useCallback(() => {
if (R !== O)
  x({
    type: o.re.STRING_SELECT,
    values: Array.from(O)
  }) && y(O);
  }, [
O,
R,
y,
x
  ]);
  i.useEffect(() => {
if (!(Z || O.size === R.size && Array.from(R).every(e => O.has(e))))
  U();
  }, [
Z,
O,
R,
U
  ]);
  let P = s.singleSelect;
  _ ? P = s.multiSelect : 0 === h && (P = s.toggleSelect);
  let w = (0, s.useVariableSelect)({
value: O,
onChange: e => A(e),
onSelectInteraction: P
  });
  return (0, t.jsxs)(i.Fragment, {
children: [
  (0, t.jsxs)('div', {
    className: f.container,
    children: [
      (0, t.jsx)(s.Select, {
        isDisabled: C || j,
        className: f.select,
        options: n.map(e => ({
          ...e,
          disabled: _ && !O.has(e.value) && O.size === u
        })),
        placeholder: null != a ? a : p.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
        onClose: () => M(!1),
        onOpen: () => M(!0),
        maxVisibleItems: 5,
        closeOnSelect: !_,
        optionClassName: f.selectOption,
        renderOptionLabel: e => (0, t.jsx)(v, {
          ...e,
          isDisabled: _ && !O.has(e.value) && O.size === u,
          isOffset: b
        }),
        renderOptionValue: e => _ ? (0, t.jsx)(N, {
          options: e
        }) : (0, t.jsx)(E, {
          ...e[0]
        }),
        ...w
      }),
      L ? (0, t.jsx)('div', {
        className: f.__invalid_loading,
        children: (0, t.jsx)(s.Dots, {
          dotRadius: 3.5,
          themed: !0
        })
      }) : null
    ]
  }),
  null != T ? (0, t.jsx)(d.st, {
    ...(0, d.c4)(T),
    className: f.error
  }) : null
]
  });
}