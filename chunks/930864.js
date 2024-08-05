n.r(t), n.d(t, {
  ForwardModal: function() {
return M;
  }
}), n(47120);
var l = n(735250),
  a = n(470079),
  i = n(392711),
  s = n(106351),
  r = n(442837),
  o = n(481060),
  u = n(541716),
  c = n(752305),
  d = n(893718),
  _ = n(359110),
  h = n(987509),
  f = n(72214),
  E = n(131704),
  g = n(592125),
  S = n(375954),
  A = n(934415),
  I = n(572004),
  p = n(823379),
  m = n(859155),
  C = n(822869),
  N = n(346610),
  L = n(895442),
  b = n(757853),
  T = n(912332),
  Z = n(819727),
  y = n(689938),
  x = n(803519),
  R = n(621054);

function v(e) {
  let {
message: t,
sendLabel: n,
canSend: i,
selectedDestinations: _,
isSending: f,
onSend: S
  } = e, A = _.map(h.hl).find(p.lm), I = (0, r.e7)([g.Z], () => g.Z.getChannel(A), [A]), m = a.useMemo(() => null != I ? I : (0, E.kt)({
id: '1',
type: s.d.DM
  }), [I]), N = (0, C.Ad)(), [L, b] = a.useState(() => (0, c.H2)()), {
textValue: Z,
richValue: R
  } = L, [v, M] = a.useState(!1), D = a.useCallback(() => M(!0), []), P = a.useCallback(() => M(!1), []), O = a.useCallback((e, n, l) => {
b({
  textValue: n,
  richValue: l
}), N(t.channel_id, t.id);
  }, [
N,
t
  ]), G = a.useCallback(() => {
S(Z);
  }, [
Z,
S
  ]), F = a.useCallback(() => (G(), Promise.resolve({
shouldClear: !1,
shouldRefocus: !0
  })), [G]);
  return (0, l.jsxs)(o.ModalFooter, {
className: x.footer,
children: [
  (0, l.jsx)(o.Button, {
    className: x.sendWithMessage,
    submitting: f,
    disabled: !i,
    onClick: G,
    children: n
  }),
  (0, l.jsx)(d.Z, {
    innerClassName: x.messageInput,
    onChange: O,
    placeholder: y.Z.Messages.MESSAGE_FORWARD_MESSAGE_PLACEHOLDER,
    channel: m,
    textValue: Z,
    richValue: R,
    type: u.I.FORWARD_MESSAGE_INPUT,
    onBlur: P,
    onFocus: D,
    focused: v,
    onSubmit: F,
    parentModalKey: T.so,
    autoCompletePosition: 'bottom',
    emojiPickerCloseOnModalOuterClick: !0
  })
]
  });
}

function M(e) {
  let {
channelId: t,
messageId: s,
initialSelectedDestinations: u,
forwardOptions: c,
onClose: d,
onRequestSent: E,
...M
  } = e, {
hasOneTapSendButton: D,
hasMessageInput: P
  } = (0, N.yk)({
location: 'ForwardModal'
  }), O = a.useMemo(() => (0, h.dL)(t), [t]), [G, F] = a.useState(!1), k = (0, r.e7)([S.Z], () => S.Z.getMessage(t, s), [
t,
s
  ]), U = (0, r.e7)([g.Z], () => g.Z.getChannel(t), [t]), j = (0, C.ZF)(), H = (0, C.mh)(), w = a.useRef(0), B = a.useRef(0), [Q, z] = a.useState(u), W = Q.length, K = W >= Z.G, [Y, q] = a.useState(''), V = a.useCallback(e => {
q(e), B.current += 1, '' !== e && H(t, s);
  }, [
t,
s,
H
  ]), X = (0, f.s)({
searchText: Y,
selectedDestinations: Q,
originDestination: O,
includeMissingDMs: !0
  }), J = a.useCallback(() => {
(0, C.sF)({
  channelId: t,
  messageId: s,
  numDestinationChanges: w.current,
  numQueryChanges: B.current
}), d();
  }, [
t,
s,
d
  ]), $ = a.useCallback(() => {
var e;
let n = null === (e = g.Z.getChannel(t)) || void 0 === e ? void 0 : e.guild_id;
if (null == n)
  return;
let l = (0, A.wR)(n, t, s);
(0, o.showToast)((0, o.createToast)(y.Z.Messages.COPIED_LINK, o.ToastType.LINK)), (0, I.JG)(l), (0, C.xp)(t, s);
  }, [
t,
s
  ]), ee = a.useCallback(() => {
q('');
  }, [q]), et = a.useRef(null);
  a.useEffect(() => {
if ('' === Y) {
  var e;
  null === (e = et.current) || void 0 === e || e.focus();
}
  }, [Y]);
  let en = a.useMemo(() => (0, i.throttle)(() => {
  (0, o.showToast)((0, o.createToast)(y.Z.Messages.MESSAGE_FORWARD_SUCCESS, o.ToastType.FORWARD));
}, 3000, {
  leading: !0,
  trailing: !1
}), []),
el = a.useCallback(e => {
  j(t, s, '' !== Y), z(t => {
    let n = t.findIndex(t => {
      let {
        type: n,
        id: l
      } = t;
      return n === e.type && l === e.id;
    });
    if (-1 === n)
      return K ? t : (q(''), w.current += 1, [
        e,
        ...t
      ]);
    let l = [...t];
    return l.splice(n, 1), w.current += 1, l;
  });
}, [
  t,
  K,
  s,
  Y,
  j
]),
ea = a.useCallback(async function(e) {
  let {
    withMessage: a,
    transitionToDestination: i,
    closeAfterSend: r
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, u = S.Z.getMessage(t, s);
  if (null == u) {
    (0, o.showToast)((0, o.createToast)(y.Z.Messages.ERROR_GENERIC_TITLE, o.ToastType.FAILURE));
    return;
  }
  F(!0);
  let d = (await Promise.all(e.map(h.qx))).filter(p.lm);
  if ((0, L.Z)(u, d) && !await new Promise(e => {
      (0, o.openModalLazy)(async () => {
        let {
          default: t
        } = await n.e('88643').then(n.bind(n, 466080));
        return n => (0, l.jsx)(t, {
          ...n,
          onConfirm: () => e(!0),
          onBack: () => e(!1)
        });
      });
    })) {
    F(!1);
    return;
  }
  r && (0, T.mc)(), null == E || E(), i && (0, _.Kh)(d[0]);
  let f = await m.Z.sendForwards(u, d, {
    ...c,
    withMessage: a
  });
  if (f.every(e => {
      let {
        status: t
      } = e;
      return 'fulfilled' === t;
    })) {
    (0, C.gP)({
      channelId: t,
      messageId: s,
      hasError: !1,
      hasContextMessage: null != a && '' !== a,
      numDestinations: d.length,
      numDestinationChanges: w.current,
      numQueryChanges: B.current
    }), en();
    return;
  }
  (0, C.gP)({
    channelId: t,
    messageId: s,
    hasError: !0,
    hasContextMessage: null != a && '' !== a,
    numDestinations: d.length,
    numDestinationChanges: w.current,
    numQueryChanges: B.current
  });
  let g = e.filter((e, t) => 'rejected' === f[t].status);
  (0, T.Np)({
    messageId: s,
    channelId: t,
    failedDestinations: g,
    forwardOptions: c
  });
}, [
  t,
  c,
  s,
  E,
  en
]),
ei = a.useCallback(e => {
  ea(Q, {
    withMessage: e,
    transitionToDestination: 1 === Q.length,
    closeAfterSend: !0
  });
}, [
  ea,
  Q
]),
es = a.useCallback(() => ei(), [ei]),
er = a.useCallback(function(e) {
  let {
    transitionToDestination: t,
    closeAfterSend: n
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  ea([e], {
    transitionToDestination: t,
    closeAfterSend: n
  });
}, [ea]);
  if (null == k || null == U)
return null;
  let eo = X.length > 0 ? (0, l.jsx)(b.F, {
  paddingBottom: 16,
  paddingTop: 16,
  rowData: X,
  rowMode: D ? b.G.SEND : b.G.TOGGLE,
  message: k,
  originChannel: U,
  handleToggleDestination: D ? er : el,
  selectedDestinations: Q,
  disableSelection: K
}) : (0, l.jsxs)(o.ModalContent, {
  className: x.noResults,
  children: [
    (0, l.jsx)('img', {
      className: x.noResultsImg,
      src: R,
      alt: ''
    }),
    (0, l.jsx)(o.Text, {
      variant: 'text-md/normal',
      color: 'text-muted',
      children: y.Z.Messages.SEARCH_NO_RESULTS
    })
  ]
}),
eu = W <= 1 ? y.Z.Messages.SEND : y.Z.Messages.MESSAGES_SEND_SEPARATELY.format({
  count: W
});
  return (0, l.jsxs)(o.ModalRoot, {
className: x.modal,
'aria-label': y.Z.Messages.MESSAGE_ACTION_FORWARD_TO,
...M,
children: [
  (0, l.jsxs)(o.ModalHeader, {
    className: x.header,
    children: [
      (0, l.jsxs)('div', {
        className: x.titleLine,
        children: [
          (0, l.jsxs)('div', {
            className: x.title,
            children: [
              (0, l.jsx)(o.Heading, {
                variant: 'heading-lg/semibold',
                children: y.Z.Messages.MESSAGE_ACTION_FORWARD_TO
              }),
              K ? (0, l.jsx)(o.Text, {
                variant: 'text-sm/normal',
                color: 'text-warning',
                children: y.Z.Messages.MESSAGES_FORWARD_MAX_DESTINATION_COUNT.format({
                  count: Z.G
                })
              }) : null
            ]
          }),
          (0, l.jsx)(o.ModalCloseButton, {
            className: x.closeButton,
            onClick: J
          })
        ]
      }),
      (0, l.jsx)(o.SearchBar, {
        ref: et,
        size: o.SearchBar.Sizes.MEDIUM,
        query: Y,
        onChange: V,
        onClear: ee,
        placeholder: y.Z.Messages.SEARCH,
        'aria-label': y.Z.Messages.SEARCH,
        autoFocus: !0
      })
    ]
  }),
  eo,
  !D && (P ? (0, l.jsx)(v, {
    message: k,
    sendLabel: eu,
    canSend: W > 0,
    selectedDestinations: Q,
    isSending: G,
    onSend: ei
  }) : (0, l.jsxs)(o.ModalFooter, {
    className: x.footer,
    children: [
      (0, l.jsx)(o.Button, {
        submitting: G,
        disabled: 0 === W,
        onClick: es,
        children: eu
      }),
      (0, l.jsx)(o.Button, {
        onClick: $,
        look: o.Button.Looks.OUTLINED,
        color: o.Button.Colors.PRIMARY,
        children: y.Z.Messages.COPY_LINK
      })
    ]
  }))
]
  });
}