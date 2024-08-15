n(47120), n(653041);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(911969),
  l = n(367907),
  u = n(998698),
  c = n(117530),
  d = n(459273),
  _ = n(585483),
  E = n(91313),
  f = n(53529),
  h = n(288897),
  p = n(925994),
  m = n(436660),
  I = n(887490),
  T = n(194625),
  g = n(77188),
  S = n(230554),
  A = n(780748),
  N = n(464581),
  v = n(732659),
  O = n(86724),
  R = n(847302),
  C = n(657198),
  y = n(321127),
  D = n(981631),
  L = n(278085);
t.Z = i.forwardRef(function(e, t) {
  let {
value: n,
type: a,
channel: b,
className: M,
id: P,
disabled: U,
submitting: w,
placeholder: x,
required: G,
textAreaPaddingClassName: k,
onChange: B,
onPaste: F,
onResize: V,
onFocus: H,
onBlur: Z,
onKeyDown: Y,
onKeyUp: j,
onTab: W,
onEnter: K,
onSubmit: z,
maybeShowAutocomplete: q,
hideAutocomplete: Q,
moveSelection: X,
spellcheckEnabled: $,
canUseCommands: J,
canOnlyUseTextCommands: ee,
disableAutoFocus: et,
disableEnterToSubmit: en,
allowNewLines: er,
'aria-owns': ei,
'aria-expanded': ea,
'aria-haspopup': es,
'aria-activedescendant': eo,
'aria-controls': el,
'aria-invalid': eu,
'aria-describedby': ec,
'aria-labelledby': ed,
'aria-autocomplete': e_
  } = e, eE = i.useRef(null), ef = i.useRef(null), eh = i.useRef(!0), ep = i.useRef(!0), em = U || w, eI = i.useCallback((e, t, n) => {
var r;
let {
  value: i,
  selection: a
} = n, s = I.bN.richValue(e), o = e.selection, l = !1;
if (void 0 !== i && i !== s) {
  if (e.children = i, 'parent' === t && !e.previewMarkdown) {
    try {
      e.previewMarkdown = !0, (0, R.KH)(e, b.guild_id, b.id);
    } finally {
      e.previewMarkdown = !1;
    }
    (0, R.KH)(e, b.guild_id, b.id), a = void 0;
  }
  'undo' !== t && void 0 !== i && i !== s && f.T.insertEntry(e, 'other', !1, s, o), l = !0;
}
if (null != a && !I.Ew.isValid(e, a) && (a = void 0), (l || !I.Ew.isValid(e, o)) && void 0 === a) {
  let t = I.bN.end(e, []);
  a = {
    anchor: t,
    focus: t
  };
}
if (null != a && !I.Ew.equals(a, o)) {
  e.selection = a;
  let t = f.T.currentEntry(e);
  null != t && (t.selection = a), l = !0;
}
let c = E.cr(e);
if (null != c && c[0].command.id !== (null === (r = u.Z.getActiveCommand(b.id)) || void 0 === r ? void 0 : r.id) && f.T.withMergedEntry(e, () => {
    (0, O.L)(e, b.id, null, !0);
  }), l) {
  if (!et && I.bN.focus(e), 'parent' === t)
    try {
      ep.current = !1, e.onChange();
    } finally {
      ep.current = !0;
    }
  else
    e.onChange();
}
  }, [
b.id,
b.guild_id,
et
  ]), eT = i.useCallback(() => {
eh.current = !1;
  }, []), eg = i.useCallback(() => {
eh.current = !0;
  }, []), eS = (0, g.Z)({
channel: b,
chatInputType: a,
canUseCommands: J,
canOnlyUseTextCommands: ee,
onChangeStart: eT,
onChangeEnd: eg,
updateState: eI
  }), eA = i.useCallback((e, t) => {
let n = E.tM(eS, e, b.id),
  r = E.lk(e, b.guild_id, b.id, n, t);
return {
  values: n,
  results: r
};
  }, [
b.guild_id,
b.id,
eS
  ]), eN = i.useCallback(() => {
let e;
let t = J ? u.Z.getActiveCommand(b.id) : null;
if (null != t && null != t.options) {
  let i = eA(t, !1);
  e = i.values;
  let a = E.cu(eS).filter(e => !i.results[e].success).map(e => {
    var n;
    return (null !== (n = t.options) && void 0 !== n ? n : []).find(t => t.name === e);
  });
  for (let e of t.options)
    e.required && !(e.name in i.values) && (m.Q.insertCommandOption(eS, e), a.push(e));
  if (a.length > 0) {
    var n, r;
    let e = a[0];
    m.Q.selectCommandOption(eS, e.name), _.S.dispatch(D.CkL.SHAKE_APP, {
      duration: 200,
      intensity: 2
    }), (0, l.yw)(D.rMx.APPLICATION_COMMAND_VALIDATION_FAILED, {
      application_id: null == t ? void 0 : t.applicationId,
      command_id: null == t ? void 0 : null === (n = t.rootCommand) || void 0 === n ? void 0 : n.id,
      argument_type: o.jw[null !== (r = null == e ? void 0 : e.type) && void 0 !== r ? r : 3],
      is_required: null == e ? void 0 : e.required
    });
    return;
  }
}
null == z || z((0, p.sk)(I.bN.richValue(eS), {
  mode: 'raw',
  ignoreTrailingEmptyNodes: !0
}), t, e);
  }, [
b.id,
eS,
z,
eA,
J
  ]);
  (0, S.Z)(t, eS, b, eN), (0, v.Z)(eS, eE, V);
  let {
handleKeyDown: ev,
handleKeyUp: eO
  } = (0, A.Z)({
editor: eS,
channel: b,
disableEnterToSubmit: en,
onKeyDown: Y,
onKeyUp: j,
onTab: W,
onEnter: K,
allowNewLines: er,
submit: eN,
hideAutocomplete: Q,
moveSelection: X
  }), {
handlePaste: eR,
handleGlobalPaste: eC
  } = (0, N.Z)(eS, em, F), ey = i.useCallback(e => {
null == q || q();
  }, [q]), eD = i.useCallback(e => {
e !== ef.current ? ep.current && (null == B || B(null, (0, p.sk)(e, {
  mode: 'raw'
}), e)) : ep.current && q();
  }, [
q,
B
  ]);
  i.useLayoutEffect(() => {
eh.current && (ef.current = n, eI(eS, 'parent', {
  value: n
}));
  }, [
eS,
n,
eI
  ]), i.useEffect(() => {
let e = () => {
  var e;
  let t = null !== (e = u.Z.getActiveCommand(b.id)) && void 0 !== e ? e : null;
  null !== t && null != t.options && eA(t, !0);
};
return c.Z.addChangeListener(e), () => c.Z.removeChangeListener(e);
  }, [
b,
eS,
eA
  ]);
  let eL = i.useCallback((e, t) => (0, T.Z)(e, t), []),
eb = i.useCallback(e => (0, C.Z)(eS, e, b.id), [
  b.id,
  eS
]),
eM = i.useCallback(e => (0, y.Z)(e), []);
  return (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsx)(d.d9, {
    event: D.CkL.GLOBAL_CLIPBOARD_PASTE,
    handler: eC
  }),
  (0, r.jsx)('div', {
    ref: eE,
    className: s()(M, L.slateContainer),
    children: (0, r.jsx)(h.Z, {
      id: P,
      editor: eS,
      channelId: b.id,
      guildId: b.guild_id,
      className: s()(L.slateTextArea, k),
      placeholder: x,
      readOnly: em,
      spellCheck: $,
      autoFocus: !et,
      canFocus: !U,
      onChange: eD,
      onFocus: H,
      onBlur: Z,
      onClick: ey,
      onPaste: eR,
      onKeyDown: ev,
      onKeyUp: eO,
      decorateExtra: eL,
      renderExtraElement: eb,
      renderExtraLeaf: eM,
      'aria-owns': ei,
      'aria-haspopup': es,
      'aria-expanded': ea,
      'aria-activedescendant': eo,
      'aria-controls': el,
      'aria-labelledby': ed,
      'aria-describedby': ec,
      'aria-invalid': eu,
      'aria-autocomplete': e_,
      'aria-required': G
    })
  })
]
  });
});