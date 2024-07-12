n.d(t, {
  Z: function() {
return I;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(519953),
  l = n(442837),
  u = n(911969),
  c = n(998698),
  d = n(703558),
  _ = n(117530),
  E = n(91313),
  f = n(436660),
  h = n(887490),
  p = n(689938),
  m = n(551360);

function I(e, t, n) {
  let {
attributes: i,
children: a,
element: o
  } = t;
  switch (o.type) {
case 'applicationCommand':
  let s = c.Z.getActiveCommand(n),
    l = 0,
    u = 0;
  if (null != s && s.id === o.command.id) {
    var d;
    let t = E.cu(e);
    for (let e of null !== (d = s.options) && void 0 !== d ? d : [])
      t.includes(e.name) ? u++ : l++;
  }
  let _ = {};
  if (l > 0) {
    let e;
    e = u > 0 ? p.Z.Messages.COMMANDS_OPTIONAL_COUNT_REMAINING.format({
      count: l
    }) : p.Z.Messages.COMMANDS_OPTION_COUNT.format({
      count: l
    }), _['data-trailing-placeholder'] = e;
  }
  return (0, r.jsx)('div', {
    className: m.applicationCommand,
    ...i,
    ..._,
    children: a
  });
case 'applicationCommandOption':
  return (0, r.jsx)(T, {
    attributes: i,
    channelId: n,
    element: o,
    children: a
  });
default:
  return null;
  }
}
let T = e => {
  let t, {
  channelId: n,
  element: a,
  attributes: E,
  children: I
} = e,
T = (0, s.vt)(),
g = (0, s.UE)(),
S = (0, s._7)(),
{
  optionType: A,
  errored: N
} = (0, l.cj)([c.Z], () => {
  var e, t, r;
  return {
    optionType: null === (e = c.Z.getOption(n, a.optionName)) || void 0 === e ? void 0 : e.type,
    errored: (null === (r = c.Z.getOptionState(n, a.optionName)) || void 0 === r ? void 0 : null === (t = r.lastValidationResult) || void 0 === t ? void 0 : t.success) !== !0
  };
}, [
  n,
  a.optionName
]),
v = (0, l.e7)([_.Z], () => _.Z.getUpload(n, a.optionName, d.d.SlashCommand), [
  n,
  a.optionName
]),
O = a.children[a.children.length - 1],
R = null != O && h.LC.isText(O) && O.text.endsWith('\n'),
C = o()(m.inlineElement, m.optionPill, {
  [m.selectedPill]: g && T,
  [m.erroredPill]: (!g || !T) && N
}),
y = i.useCallback(() => {
  !h.bN.isVoid(S, a) && f.Q.selectCommandOption(S, a.optionName, !0);
}, [
  S,
  a
]);
  return t = A === u.jw.ATTACHMENT ? (null == v ? void 0 : v.filename) != null ? (0, r.jsxs)('span', {
className: o()(m.optionPillValue, m.attachmentFilename),
contentEditable: !1,
children: [
  v.filename,
  I
]
  }) : (0, r.jsxs)('span', {
className: o()(m.optionPillValue, m.readonlyPillValue),
contentEditable: !1,
children: [
  p.Z.Messages.APPLICATION_COMMAND_FILE_ATTACHMENT,
  I
]
  }) : (0, r.jsxs)('span', {
className: m.optionPillValue,
children: [
  I,
  R ? (0, r.jsx)('span', {
    className: m.newLine,
    contentEditable: !1
  }) : null
]
  }), (0, r.jsxs)('span', {
...E,
className: C,
children: [
  (0, r.jsxs)('span', {
    className: m.optionPillKey,
    contentEditable: !1,
    onClick: y,
    children: [
      a.optionDisplayName,
      '\u200B'
    ]
  }),
  t,
  (0, r.jsx)('span', {
    contentEditable: !1,
    children: '\u200B'
  })
]
  });
};