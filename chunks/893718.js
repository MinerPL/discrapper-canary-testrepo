n(47120), n(411104);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(836560),
  l = n(512722),
  u = n.n(l),
  c = n(143927),
  d = n(873546),
  _ = n(149765),
  E = n(442837),
  f = n(481060),
  h = n(430742),
  p = n(607070),
  m = n(100527),
  I = n(906732),
  T = n(998698),
  g = n(271668),
  S = n(931981),
  A = n(326133),
  N = n(570220),
  v = n(28546),
  O = n(805680),
  R = n(151574),
  C = n(368844),
  y = n(41776),
  D = n(849522),
  L = n(780291),
  b = n(913663),
  M = n(268350),
  P = n(378233),
  U = n(665906),
  w = n(695346),
  x = n(271383),
  G = n(496675),
  k = n(944486),
  B = n(398327),
  F = n(117530),
  V = n(594174),
  H = n(459273),
  Z = n(700785),
  Y = n(358085),
  j = n(746877),
  W = n(541716),
  K = n(667829),
  z = n(562267),
  q = n(376918),
  Q = n(760196),
  X = n(258696),
  $ = n(303628),
  J = n(472243),
  ee = n(872635),
  et = n(676108),
  en = n(981631),
  er = n(665692),
  ei = n(957825),
  ea = n(305489);
t.Z = i.memo(i.forwardRef(function(e, t) {
  var a, l, es, eo, el, eu, ec, ed, e_, eE, ef, eh, ep, em, eI;
  let {
textValue: eT,
richValue: eg,
className: eS,
innerClassName: eA,
editorClassName: eN,
id: ev,
required: eO,
disabled: eR,
placeholder: eC,
accessibilityLabel: ey,
channel: eD,
type: eL,
focused: eb,
renderAttachButton: eM,
renderApplicationCommandIcon: eP,
pendingReply: eU,
onChange: ew,
onResize: ex,
onBlur: eG,
onFocus: ek,
onKeyDown: eB,
onSubmit: eF,
promptToUpload: eV,
highlighted: eH,
canMentionRoles: eZ,
canMentionChannels: eY,
maxCharacterCount: ej,
showRemainingCharsAfterCount: eW,
allowNewLines: eK = !0,
characterCountClassName: ez,
'aria-describedby': eq,
'aria-labelledby': eQ,
setEditorRef: eX,
autoCompletePosition: e$,
children: eJ,
disableThemedBackground: e0 = !1,
emojiPickerCloseOnModalOuterClick: e1,
parentModalKey: e2,
onCommandSentinelTyped: e3
  } = e;
  u()(null != eL, 'chat input type must be set');
  let {
analyticsLocations: e4
  } = (0, I.ZP)(m.Z.CHANNEL_TEXT_AREA), e5 = function(e) {
let t = i.useRef(null);
if (null != e && 'function' == typeof e)
  throw Error('Only Ref objects are supported');
return null == e ? t : e;
  }(t), e6 = i.useRef(null), e7 = i.useRef(null), e8 = i.useRef(null), e9 = i.useRef(null);
  null == eX || eX(e7.current);
  let {
activeCommand: te,
activeCommandSection: tt
  } = (0, E.cj)([T.Z], () => {
var e, t;
return {
  activeCommand: (null === (e = eL.commands) || void 0 === e ? void 0 : e.enabled) ? T.Z.getActiveCommand(eD.id) : null,
  activeCommandSection: (null === (t = eL.commands) || void 0 === t ? void 0 : t.enabled) ? T.Z.getActiveCommandSection(eD.id) : null
};
  }), {
isLurking: tn,
isPendingMember: tr,
disabled: ti,
canAttachFiles: ta,
canCreateThreads: ts,
canEveryoneSendMessages: to
  } = function(e, t, n, r) {
let i = e.getGuildId(),
  a = (0, E.e7)([y.Z], () => null != i && y.Z.isLurking(i), [i]),
  s = (0, E.e7)([
    x.ZP,
    V.default
  ], () => {
    var e, t;
    let n = V.default.getCurrentUser();
    return null !== (t = null != i && null != n ? null === (e = x.ZP.getMember(i, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t;
  }),
  o = (0, E.cj)([G.Z], () => {
    var i, a;
    let o = e.isPrivate(),
      l = G.Z.computePermissions(e),
      u = _.e$(l, en.Plq.CREATE_PUBLIC_THREADS) || _.e$(l, en.Plq.CREATE_PRIVATE_THREADS),
      c = (!(null === (i = t.permissions) || void 0 === i ? void 0 : i.requireCreateTherads) || u) && (!(null === (a = t.permissions) || void 0 === a ? void 0 : a.requireSendMessages) || _.e$(l, en.Plq.SEND_MESSAGES)),
      d = c && _.e$(l, en.Plq.ATTACH_FILES),
      E = null != n,
      f = (0, U.xl)(e);
    return {
      disabled: r || s || !o && !c || f,
      canAttachFiles: !0 === t.attachments && (o || s || d || E),
      canCreateThreads: u,
      canEveryoneSendMessages: Z.Uu(en.Plq.SEND_MESSAGES, e)
    };
  }, [
    e,
    t.permissions.requireCreateTherads,
    t.permissions.requireSendMessages,
    t.attachments,
    n,
    r,
    s
  ]);
return {
  isLurking: a,
  isPendingMember: s,
  ...o
};
  }(eD, eL, te, eR), tl = eL.toolbarType === W.O.STATIC, tu = !w.dN.useSetting() && !(0, Y.isAndroidWeb)() && null != window.ResizeObserver, tc = !tu || !(null === (a = eL.commands) || void 0 === a ? void 0 : a.enabled) || !eb || eT !== er.GI, td = (0, D.Z)(), {
isSubmitButtonEnabled: t_,
fontSize: tE
  } = (0, E.cj)([p.Z], () => ({
fontSize: p.Z.fontSize,
isSubmitButtonEnabled: p.Z.isSubmitButtonEnabled
  })), tf = (0, E.e7)([B.Z], () => B.Z.isEnabled()), th = i.useRef(eT);
  th.current = eT;
  let tp = i.useCallback((e, t, n) => {
var r;
t === er.GI && '' === th.current && (null === (r = eL.commands) || void 0 === r ? void 0 : r.enabled) && (null == e3 || e3()), null == ew || ew(e, t, n);
  }, [
ew,
e3,
null === (l = eL.commands) || void 0 === l ? void 0 : l.enabled
  ]);
  ! function(e, t) {
let n = i.useCallback(() => {
    if (!t)
      (0, v.RO)(ei.X1.EMOJI, e);
  }, [
    t,
    e
  ]),
  r = i.useCallback(() => {
    var n;
    if (!t && !!(null === (n = e.gifs) || void 0 === n ? void 0 : n.allowSending))
      (0, v.RO)(ei.X1.GIF, e);
  }, [
    t,
    e
  ]),
  a = i.useCallback(() => {
    var n;
    if (!t && !!(null === (n = e.stickers) || void 0 === n ? void 0 : n.allowSending))
      (0, v.RO)(ei.X1.STICKER, e);
  }, [
    t,
    e
  ]);
(0, H.yp)({
  event: en.CkL.TOGGLE_EMOJI_POPOUT,
  handler: n
}), (0, H.yp)({
  event: en.CkL.TOGGLE_GIF_PICKER,
  handler: r
}), (0, H.yp)({
  event: en.CkL.TOGGLE_STICKER_PICKER,
  handler: a
});
  }(eL, ti);
  let {
eventEmitter: tm,
handleEditorSelectionChanged: tI
  } = function(e, t, n) {
let [r] = i.useState(() => new o.EventEmitter());
return i.useEffect(() => {
  r.emit('text-changed', t, n);
}, [
  t,
  n,
  r
]), {
  eventEmitter: r,
  handleEditorSelectionChanged: t => {
    null != e.current && r.emit('selection-changed', t);
  }
};
  }(e7, eT, eg), {
submitting: tT,
submit: tg,
handleSubmit: tS
  } = function(e, t, a, s) {
let [o, l] = i.useState(!1), u = i.useCallback((i, c, d, _, E) => {
  var p, m, I;
  if (o)
    return;
  l(!0);
  let T = null !== (m = null === (p = b.Z.getStickerPreview(s, t.drafts.type)) || void 0 === p ? void 0 : p.map(e => e.id)) && void 0 !== m ? m : [],
    g = null !== (I = F.Z.getUploads(s, t.drafts.type)) && void 0 !== I ? I : [];
  if (null == c && !_ && !E && (0, C.CB)(g, s)) {
    l(!1), (0, f.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([
        n.e('23755'),
        n.e('90508'),
        n.e('22173'),
        n.e('53289')
      ]).then(n.bind(n, 273602));
      return t => (0, r.jsx)(e, {
        ...t,
        threadId: s,
        attachments: g,
        sendMessage: () => u(i, void 0, void 0, void 0, !0)
      });
    });
    return;
  }
  e({
    value: i,
    uploads: g,
    stickers: T,
    command: c,
    commandOptionValues: d,
    isGif: _
  }).then(e => {
    var n, r, i, o;
    let {
      shouldClear: u,
      shouldRefocus: c
    } = e;
    let d = (n = u, r = t, null !== (o = n && (null === (i = r.submit) || void 0 === i ? void 0 : i.clearOnSubmit)) && void 0 !== o && o),
      _ = null != a.current;
    if (d) {
      if (s !== k.Z.getChannelId())
        h.Z.saveDraft(s, '', t.drafts.type);
      else
        _ && a.current.clearValue();
    }
    _ && (l(!1), (0, v._Q)(), c && a.current.focus());
  });
}, [
  a,
  e,
  o,
  t,
  s
]);
return {
  submitting: o,
  submit: u,
  handleSubmit: i.useCallback(e => {
    var t;
    null == a || null === (t = a.current) || void 0 === t || t.submit(e);
  }, [])
};
  }(eF, eL, e7, eD.id), {
autocompleteRef: tA,
handleMaybeShowAutocomplete: tN,
handleHideAutocomplete: tv
  } = function() {
let e = i.useRef(null),
  t = i.useCallback(() => {
    var t;
    null === (t = e.current) || void 0 === t || t.onMaybeShowAutocomplete();
  }, []),
  n = i.useCallback(() => {
    var t;
    null === (t = e.current) || void 0 === t || t.onHideAutocomplete();
  }, []);
return {
  autocompleteRef: e,
  handleMaybeShowAutocomplete: t,
  handleHideAutocomplete: n
};
  }();
  let tO = (ef = tg, eh = eL, ep = e7, i.useCallback(e => {
var t, n;
eh === W.I.CREATE_FORUM_POST ? null === (n = ep.current) || void 0 === n || n.insertGIF(e) : ef(e.url, void 0, void 0, !0), (0, v._Q)(), null === (t = ep.current) || void 0 === t || t.focus();
  }, [
ep,
ef,
eh
  ]));
  let tR = (em = e7, i.useCallback(function(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = em.current;
  null != e && null != r && r.insertEmoji(e, t, n), t && (0, v._Q)();
}, [em])),
tC = function(e) {
  let {
    editorRef: t,
    disabled: n,
    textValue: r,
    channelId: a,
    chatInputType: s,
    submit: o
  } = e, {
    analyticsLocations: l
  } = (0, I.ZP)();
  return i.useCallback((e, i) => {
    var u, c;
    !n && ((0, P.Hc)(i, r, a, s.drafts.type) ? ((0, q._H)({
      sticker: e,
      stickerSelectLocation: i,
      isReplacement: null != b.Z.getStickerPreview(a, s.drafts.type),
      analyticsLocations: l
    }), (0, M.eu)(a, e, s.drafts.type)) : (o({
      value: '',
      uploads: void 0,
      stickers: [e.id]
    }), null === (c = t.current) || void 0 === c || c.clearValue()), (0, v._Q)(), null === (u = t.current) || void 0 === u || u.focus());
  }, [
    n,
    r,
    a,
    s.drafts.type,
    t,
    l,
    o
  ]);
}({
  editorRef: e7,
  disabled: ti,
  textValue: eT,
  channelId: eD.id,
  chatInputType: eL,
  submit: eF
});
  let ty = (eI = e7, i.useCallback(e => {
  let t = eI.current;
  null != e && null != t && t.insertSound(e), (0, v._Q)();
}, [eI])),
tD = i.useCallback(() => {
  var e;
  return null == e9 ? void 0 : null === (e = e9.current) || void 0 === e ? void 0 : e.hide();
}, []),
{
  editorHeight: tL,
  handleResize: tb
} = function(e) {
  let [t, n] = i.useState(0);
  return {
    editorHeight: t,
    handleResize: i.useCallback(t => {
      n(null != t ? t : 0), null == e || e(t);
    }, [e])
  };
}(ex),
{
  handleTab: tM,
  handleEnter: tP,
  handleMoveSelection: tU
} = function(e, t, n) {
  let r = i.useCallback(() => {
      var r, i;
      return !!(!n && (null === (r = t.current) || void 0 === r ? void 0 : r.onTabOrEnter(!1))) || (null === (i = e.current) || void 0 === i ? void 0 : i.onTabOrEnter(!1)) || !1;
    }, [n]),
    a = i.useCallback(() => {
      var r, i;
      return !!(!n && (null === (r = t.current) || void 0 === r ? void 0 : r.onTabOrEnter(!0))) || (null === (i = e.current) || void 0 === i ? void 0 : i.onTabOrEnter(!0)) || !1;
    }, [n]);
  return {
    handleTab: r,
    handleEnter: a,
    handleMoveSelection: i.useCallback(r => {
      var i, a;
      return !!(!n && (null === (i = t.current) || void 0 === i ? void 0 : i.onMoveSelection(r))) || (null === (a = e.current) || void 0 === a ? void 0 : a.onMoveSelection(r)) || !1;
    }, [n])
  };
}(tA, e6, tc),
{
  expressionPickerView: tw,
  shouldHideExpressionPicker: tx,
  handleAutocompleteVisibilityChange: tG,
  handleOuterClick: tk
} = function(e, t, n) {
  let [r, a] = (0, v.Iu)(e => [
    e.activeView,
    e.activeViewType
  ], c.Z);
  i.useEffect(() => () => {
    (0, v._Q)(e);
  }, [e]);
  let s = i.useCallback(e => {
      t.emit('autocomplete-visibility-change', e), e && (0, v._Q)();
    }, [t]),
    o = i.useCallback(() => {
      var e;
      null == r && (null === (e = n.current) || void 0 === e || e.handleOuterClick());
    }, [r]),
    l = null == r || null == a || a !== e;
  return {
    expressionPickerView: r,
    shouldHideExpressionPicker: l,
    handleAutocompleteVisibilityChange: s,
    handleOuterClick: o
  };
}(eL, tm, e7);
  (0, j.S)(tm, eD.guild_id, eD.id);
  let tB = null != eU,
tF = ti && !((tn || tr) && to) || tT && (null === (es = eL.submit) || void 0 === es ? void 0 : es.useDisabledStylesOnSubmit),
tV = null;
  null != te ? tV = null == eP ? void 0 : eP(te, tt, ea.attachButton) : (!ti || ts) && (tV = null == eM ? void 0 : eM(tB, ea.attachButton));
  let tH = tu && null != eg && !ti && eL.showCharacterCount && null == te,
tZ = tu && !__OVERLAY__ && null != eg && null == te && eL.toolbarType !== W.O.NONE,
tY = function(e, t, n, r) {
  var i, a;
  let s = w.up.useSetting(),
    o = (0, E.e7)([b.Z], () => b.Z.getStickerPreview(e.id, t.drafts.type)),
    l = null != o && o.length > 0;
  return s && (null === (i = t.stickers) || void 0 === i ? void 0 : i.autoSuggest) && !l && (null === (a = r.current) || void 0 === a ? void 0 : a.isVisible()) !== !0 && !__OVERLAY__ && null != n;
}(eD, eL, eg, tA),
tj = (0, S.e)(eD),
tW = null != te || null != eU || tj,
tK = !!(null === (eo = eL.emojis) || void 0 === eo ? void 0 : eo.button) && tL <= 44;
  return (0, r.jsx)(N.f6, {
value: tm,
children: (0, r.jsxs)(I.Gt, {
  value: e4,
  children: [
    tZ && tl ? (0, r.jsx)(et.Z, {
      editorRef: e7,
      options: eL.markdown,
      channel: eD
    }) : tZ ? (0, r.jsx)(ee.Z, {
      ref: e9,
      editorRef: e7,
      containerRef: e8,
      options: eL.markdown
    }) : null,
    (0, r.jsxs)('div', {
      ref: e5,
      className: s()(eS, {
        [ea.channelTextArea]: !0,
        [ea.channelTextAreaDisabled]: tF,
        [ea.highlighted]: eH,
        [ea.textAreaMobileThemed]: d.tq
      }),
      onMouseDown: tk,
      children: [
        (0, r.jsx)(Q.Z, {
          type: eL,
          channel: eD,
          activeCommand: te,
          pendingReply: eU
        }),
        (0, r.jsxs)('div', {
          ref: e8,
          onScroll: tD,
          className: s()(eA, {
            [ea.scrollableContainer]: !0,
            [ea.themedBackground]: !e0,
            [ea.hasConnectedBar]: tW
          }),
          children: [
            (0, r.jsx)(z.Z, {
              channelId: eD.id,
              chatInputType: eL
            }),
            eL.hideAttachmentArea ? null : (0, r.jsx)($.Z, {
              channelId: eD.id,
              type: eL,
              canAttachFiles: ta
            }),
            (0, r.jsxs)('div', {
              className: s()(ea.inner, {
                [ea.innerDisabled]: tF,
                [ea.sansAttachButton]: eL !== W.I.EDIT && (null != tV || tF && null == tV || tn),
                [ea.sansAttachButtonCreateThread]: eL === W.I.THREAD_CREATION,
                [ea.sansAttachButtonCreatePost]: eL === W.I.CREATE_FORUM_POST,
                [ea.sansAttachButtonUserProfileReply]: eL === W.I.USER_PROFILE_REPLY
              }),
              children: [
                tV,
                (0, r.jsx)(f.FocusRing, {
                  ringTarget: e5,
                  ringClassName: ea.focusRing,
                  children: (0, r.jsx)(K.Z, {
                    ref: e7,
                    id: ev,
                    focused: eb,
                    useSlate: tu,
                    textValue: eT,
                    richValue: eg,
                    disabled: ti,
                    placeholder: eC,
                    required: eO,
                    accessibilityLabel: ey,
                    isPreviewing: (tn || tr) && to,
                    channel: eD,
                    type: eL,
                    canPasteFiles: ta,
                    uploadPromptCharacterCount: en.en1,
                    maxCharacterCount: null != ej ? ej : td,
                    allowNewLines: eK,
                    'aria-describedby': eq,
                    onChange: tp,
                    onResize: tb,
                    onBlur: eG,
                    onFocus: ek,
                    onKeyDown: eB,
                    onSubmit: tg,
                    onTab: tM,
                    onEnter: tP,
                    onMoveSelection: tU,
                    onSelectionChanged: tI,
                    onMaybeShowAutocomplete: tN,
                    onHideAutocomplete: tv,
                    promptToUpload: eV,
                    fontSize: tE,
                    spellcheckEnabled: tf,
                    canOnlyUseTextCommands: tB,
                    className: s()({
                      [ea.textAreaThreadCreation]: eL === W.I.THREAD_CREATION,
                      [ea.profileBioInput]: eL === W.I.PROFILE_BIO_INPUT
                    }, eN),
                    'aria-labelledby': eQ
                  })
                }),
                (0, r.jsx)(X.Z, {
                  type: eL,
                  disabled: ti,
                  channel: eD,
                  handleSubmit: tS,
                  isEmpty: 0 === eT.trim().length
                })
              ]
            })
          ]
        }),
        tc ? null : (0, r.jsx)(g.Z, {
          ref: e6,
          channel: eD,
          canOnlyUseTextCommands: tB
        }),
        (0, r.jsx)(A.Z, {
          ref: tA,
          channel: eD,
          canMentionRoles: eZ,
          canMentionChannels: eY,
          useNewSlashCommands: tu,
          canOnlyUseTextCommands: tB,
          canSendStickers: null === (el = eL.stickers) || void 0 === el ? void 0 : el.allowSending,
          textValue: eT,
          focused: eb,
          expressionPickerView: tw,
          type: eL,
          targetRef: e5,
          editorRef: e7,
          onSendMessage: tg,
          onSendSticker: tC,
          onVisibilityChange: tG,
          editorHeight: tL,
          setValue: (e, t) => null == tp ? void 0 : tp(null, e, t),
          position: e$
        }),
        (0, r.jsx)(L.Z, {
          textValue: eT,
          editorHeight: tL
        }),
        tH ? (0, r.jsx)(J.Z, {
          type: eL,
          textValue: eT,
          className: s()(ez, {
            [ea.indentCharacterCount]: tK
          }),
          maxCharacterCount: ej,
          showRemainingCharsAfterCount: eW
        }) : null,
        tY ? (0, r.jsx)(R.Z, {
          editorRef: e7,
          channel: eD,
          isEditorFocused: eb,
          onSelectSticker: tC,
          submitButtonVisible: (null === (eu = eL.submit) || void 0 === eu ? void 0 : eu.button) && (null !== (e_ = null === (ec = eL.submit) || void 0 === ec ? void 0 : ec.ignorePreference) && void 0 !== e_ ? e_ : t_),
          stickerIconVisible: null !== (eE = null === (ed = eL.stickers) || void 0 === ed ? void 0 : ed.button) && void 0 !== eE && eE
        }) : null,
        eJ
      ]
    }),
    tx ? null : (0, r.jsx)(O.Z, {
      positionTargetRef: e5,
      type: eL,
      onSelectGIF: tO,
      onSelectEmoji: tR,
      onSelectSticker: tC,
      onSelectSound: ty,
      channel: eD,
      closeOnModalOuterClick: e1,
      parentModalKey: e2,
      position: 'top',
      align: 'right',
      positionLayerClassName: ea.expressionPickerPositionLayer
    })
  ]
})
  });
}));