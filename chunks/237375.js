n.d(t, {
  Z: function() {
return m;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(481060),
  l = n(965386),
  u = n(154921),
  c = n(987826),
  d = n(826298),
  _ = n(665692),
  E = n(689938),
  f = n(891844);

function h(e, t, n) {
  return (0, r.jsx)(c.Z, {
className: f.option,
name: e.displayName,
state: t,
onClick: n
  }, e.name);
}

function p(e) {
  let {
command: t,
optionStates: n,
onOptionClick: a
  } = e, {
requiredOptions: s,
setOptionalOptions: l,
unsetOptionalOptions: c
  } = i.useMemo(() => {
var e, r, i, a;
let s = null !== (i = null === (e = t.options) || void 0 === e ? void 0 : e.filter(e => e.required)) && void 0 !== i ? i : [],
  o = null !== (a = null === (r = t.options) || void 0 === r ? void 0 : r.filter(e => !e.required)) && void 0 !== a ? a : [],
  l = o.filter(e => {
    var t;
    return null == n ? void 0 : null === (t = n[e.name]) || void 0 === t ? void 0 : t.hasValue;
  });
return {
  requiredOptions: s,
  setOptionalOptions: l,
  unsetOptionalOptions: o.filter(e => {
    var t;
    return !(null == n ? void 0 : null === (t = n[e.name]) || void 0 === t ? void 0 : t.hasValue);
  })
};
  }, [
t.options,
n
  ]), d = (0, r.jsx)('div', {
className: f.optionalNames,
children: c.map(e => (0, r.jsx)(o.Text, {
  variant: 'text-sm/normal',
  children: e.displayName
}, e.name))
  }), _ = s.map(e => h(e, null == n ? void 0 : n[e.name], a)), p = l.length > 0 ? (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsx)(o.Heading, {
    className: f.optionalHeader,
    variant: 'heading-deprecated-12/semibold',
    children: E.Z.Messages.COMMANDS_OPTIONAL_HEADER
  }),
  l.map(e => h(e, null == n ? void 0 : n[e.name], a))
]
  }) : null, m = c.length > 0 ? (0, r.jsx)(o.Tooltip, {
text: d,
'aria-label': !1,
delay: 200,
children: e => (0, r.jsx)(u.Z, {
  className: f.optionalCount,
  color: u.Z.Colors.MUTED,
  ...e,
  children: 0 === l.length ? E.Z.Messages.COMMANDS_OPTIONAL_COUNT.format({
    count: c.length
  }) : E.Z.Messages.COMMANDS_OPTIONAL_COUNT_REMAINING.format({
    count: c.length
  })
})
  }) : null;
  return (0, r.jsxs)(r.Fragment, {
children: [
  _,
  null != p || null != m ? (0, r.jsxs)('div', {
    className: f.optionals,
    children: [
      p,
      m
    ]
  }) : null
]
  });
}

function m(e) {
  var t, n, a;
  let o, {
  command: u,
  activeOptionName: c,
  channel: E,
  showOptions: h,
  showImage: m,
  optionStates: I,
  onOptionClick: T,
  section: g,
  isSelectable: S = !0
} = e,
A = i.useMemo(() => {
  var e;
  return null == u ? void 0 : null === (e = u.options) || void 0 === e ? void 0 : e.find(e => e.name === c);
}, [
  c,
  u
]),
N = null != c ? null == I ? void 0 : I[c] : null;
  o = null != N && (null === (t = N.lastValidationResult) || void 0 === t ? void 0 : t.success) === !1 ? null !== (n = N.lastValidationResult.error) && void 0 !== n ? n : '' : null;
  let v = m && null != g ? (0, d.ky)(g) : null;
  return (0, r.jsxs)('div', {
className: s()(f.wrapper, S ? null : f.disabled),
children: [
  null != v ? (0, r.jsx)(v, {
    className: f.image,
    channel: E,
    section: g,
    width: 32,
    height: 32
  }) : null,
  (0, r.jsxs)('div', {
    className: f.infoWrapper,
    children: [
      (0, r.jsxs)('div', {
        className: f.usageWrapper,
        children: [
          (0, r.jsx)(l.BR, {
            className: f.title,
            children: _.GI + u.displayName
          }),
          h ? (0, r.jsx)(p, {
            command: u,
            optionStates: I,
            onOptionClick: T
          }) : null
        ]
      }),
      (0, r.jsx)(l.wL, {
        className: s()(f.description, null != o ? f.error : null),
        children: null !== (a = null != o ? o : null == A ? void 0 : A.displayDescription) && void 0 !== a ? a : u.displayDescription
      })
    ]
  }),
  (0, r.jsx)(l.dY, {
    className: f.source,
    children: null == g ? void 0 : g.name
  })
]
  });
}