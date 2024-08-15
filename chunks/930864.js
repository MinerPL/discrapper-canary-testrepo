n.r(t), n.d(t, {
  ForwardModal: function() {
return P;
  }
}), n(47120);
var l = n(735250),
  a = n(470079),
  s = n(392711),
  i = n(106351),
  r = n(442837),
  o = n(481060),
  c = n(541716),
  u = n(752305),
  d = n(893718),
  h = n(359110),
  _ = n(987509),
  f = n(72214),
  E = n(131704),
  g = n(592125),
  m = n(375954),
  S = n(934415),
  I = n(572004),
  A = n(823379),
  p = n(859155),
  C = n(822869),
  N = n(346610),
  L = n(895442),
  b = n(757853),
  v = n(912332),
  T = n(646746),
  x = n(819727),
  Z = n(689938),
  y = n(619499),
  M = n(621054);

function R(e) {
  let {
message: t,
forwardOptions: n,
sendLabel: s,
canSend: h,
selectedDestinations: f,
isSending: m,
onSend: S,
showPreview: I
  } = e, p = f.map(_.hl).find(A.lm), N = (0, r.e7)([g.Z], () => g.Z.getChannel(p), [p]), L = a.useMemo(() => null != N ? N : (0, E.kt)({
id: '1',
type: i.d.DM
  }), [N]), b = (0, C.Ad)(), [x, M] = a.useState(() => (0, u.H2)()), {
textValue: R,
richValue: P
  } = x, [O, D] = a.useState(!1), w = a.useCallback(() => D(!0), []), j = a.useCallback(() => D(!1), []), G = a.useCallback((e, n, l) => {
M({
  textValue: n,
  richValue: l
}), b(t.channel_id, t.id);
  }, [
b,
t
  ]), k = a.useCallback(() => {
S(R);
  }, [
R,
S
  ]), F = a.useCallback(() => (k(), Promise.resolve({
shouldClear: !1,
shouldRefocus: !0
  })), [k]);
  return (0, l.jsxs)(o.ModalFooter, {
className: y.footerWithMessage,
children: [
  I && (0, l.jsx)('div', {
    className: y.forwardPreviewWrapper,
    children: (0, l.jsx)(T.O, {
      message: t,
      forwardOptions: n
    })
  }),
  (0, l.jsxs)('div', {
    className: y.footerButtons,
    children: [
      (0, l.jsx)(d.Z, {
        innerClassName: y.messageInput,
        onChange: G,
        placeholder: Z.Z.Messages.MESSAGE_FORWARD_MESSAGE_PLACEHOLDER,
        channel: L,
        textValue: R,
        richValue: P,
        type: c.I.FORWARD_MESSAGE_INPUT,
        onBlur: j,
        onFocus: w,
        focused: O,
        onSubmit: F,
        parentModalKey: v.so,
        autoCompletePosition: 'bottom',
        emojiPickerCloseOnModalOuterClick: !0
      }),
      (0, l.jsx)(o.Button, {
        className: y.sendWithMessage,
        submitting: m,
        disabled: !h,
        onClick: k,
        children: s
      })
    ]
  })
]
  });
}

function P(e) {
  let {
channelId: t,
messageId: i,
initialSelectedDestinations: c,
forwardOptions: u,
onClose: d,
onRequestSent: E,
...P
  } = e, {
hasOneTapSendButton: O,
hasMessageInput: D,
hasPreview: w
  } = (0, N.yk)({
location: 'ForwardModal'
  }), j = a.useMemo(() => (0, _.dL)(t), [t]), [G, k] = a.useState(!1), F = (0, r.e7)([m.Z], () => m.Z.getMessage(t, i), [
t,
i
  ]), U = (0, r.e7)([g.Z], () => g.Z.getChannel(t), [t]), W = (0, C.ZF)(), H = (0, C.mh)(), B = a.useRef(0), z = a.useRef(0), [Q, K] = a.useState(c), V = Q.length, q = V >= x.G, [Y, X] = a.useState(''), J = a.useCallback(e => {
X(e), z.current += 1, '' !== e && H(t, i);
  }, [
t,
i,
H
  ]), $ = (0, f.s)({
searchText: Y,
selectedDestinations: Q,
originDestination: j,
includeMissingDMs: !0
  }), ee = a.useCallback(() => {
(0, C.sF)({
  channelId: t,
  messageId: i,
  numDestinationChanges: B.current,
  numQueryChanges: z.current
}), d();
  }, [
t,
i,
d
  ]), et = a.useCallback(() => {
var e;
let n = null === (e = g.Z.getChannel(t)) || void 0 === e ? void 0 : e.guild_id;
if (null == n)
  return;
let l = (0, S.wR)(n, t, i);
(0, o.showToast)((0, o.createToast)(Z.Z.Messages.COPIED_LINK, o.ToastType.LINK)), (0, I.JG)(l), (0, C.xp)(t, i);
  }, [
t,
i
  ]), en = a.useCallback(() => {
X('');
  }, [X]), el = a.useRef(null);
  a.useEffect(() => {
if ('' === Y) {
  var e;
  null === (e = el.current) || void 0 === e || e.focus();
}
  }, [Y]);
  let ea = a.useMemo(() => (0, s.throttle)(() => {
  (0, o.showToast)((0, o.createToast)(Z.Z.Messages.MESSAGE_FORWARD_SUCCESS, o.ToastType.FORWARD));
}, 3000, {
  leading: !0,
  trailing: !1
}), []),
es = a.useCallback(e => {
  W(t, i, '' !== Y), K(t => {
    let n = t.findIndex(t => {
      let {
        type: n,
        id: l
      } = t;
      return n === e.type && l === e.id;
    });
    if (-1 === n)
      return q ? t : (X(''), B.current += 1, [
        e,
        ...t
      ]);
    let l = [...t];
    return l.splice(n, 1), B.current += 1, l;
  });
}, [
  t,
  q,
  i,
  Y,
  W
]),
ei = a.useCallback(async function(e) {
  let {
    withMessage: a,
    transitionToDestination: s,
    closeAfterSend: r
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, c = m.Z.getMessage(t, i);
  if (null == c) {
    (0, o.showToast)((0, o.createToast)(Z.Z.Messages.ERROR_GENERIC_TITLE, o.ToastType.FAILURE));
    return;
  }
  k(!0);
  let d = (await Promise.all(e.map(_.qx))).filter(A.lm);
  if ((0, L.Z)(c, d) && !await new Promise(e => {
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
    k(!1);
    return;
  }
  r && (0, v.mc)(), null == E || E(), s && (0, h.Kh)(d[0]);
  let f = await p.Z.sendForwards(c, d, {
      ...u,
      withMessage: a
    }),
    S = d.some(e => {
      let t = g.Z.getChannel(e);
      return null != t && t.rateLimitPerUser > 0;
    });
  if (f.every(e => {
      let {
        status: t
      } = e;
      return 'fulfilled' === t;
    })) {
    (0, C.gP)({
      channelId: t,
      messageId: i,
      hasError: !1,
      hasContextMessage: null != a && '' !== a,
      numDestinations: d.length,
      numDestinationChanges: B.current,
      numQueryChanges: z.current,
      anyDestinationHasSlowmode: S
    }), ea();
    return;
  }
  (0, C.gP)({
    channelId: t,
    messageId: i,
    hasError: !0,
    hasContextMessage: null != a && '' !== a,
    numDestinations: d.length,
    numDestinationChanges: B.current,
    numQueryChanges: z.current,
    anyDestinationHasSlowmode: S
  });
  let I = e.filter((e, t) => 'rejected' === f[t].status);
  (0, v.Np)({
    messageId: i,
    channelId: t,
    failedDestinations: I,
    forwardOptions: u
  });
}, [
  t,
  u,
  i,
  E,
  ea
]),
er = a.useCallback(e => {
  ei(Q, {
    withMessage: e,
    transitionToDestination: 1 === Q.length,
    closeAfterSend: !0
  });
}, [
  ei,
  Q
]),
eo = a.useCallback(() => er(), [er]),
ec = a.useCallback(function(e) {
  let {
    transitionToDestination: t,
    closeAfterSend: n
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  ei([e], {
    transitionToDestination: t,
    closeAfterSend: n
  });
}, [ei]);
  if (null == F || null == U)
return null;
  let eu = $.length > 0 ? (0, l.jsx)(b.F, {
  paddingBottom: 16,
  paddingTop: 16,
  rowData: $,
  rowMode: O ? b.G.SEND : b.G.TOGGLE,
  message: F,
  originChannel: U,
  handleToggleDestination: O ? ec : es,
  selectedDestinations: Q,
  disableSelection: q
}) : (0, l.jsxs)(o.ModalContent, {
  className: y.noResults,
  children: [
    (0, l.jsx)('img', {
      className: y.noResultsImg,
      src: M,
      alt: ''
    }),
    (0, l.jsx)(o.Text, {
      variant: 'text-md/normal',
      color: 'text-muted',
      children: Z.Z.Messages.SEARCH_NO_RESULTS
    })
  ]
}),
ed = V <= 1 ? Z.Z.Messages.SEND : Z.Z.Messages.MESSAGES_SEND_SEPARATELY.format({
  count: V
});
  return (0, l.jsxs)(o.ModalRoot, {
className: y.modal,
'aria-label': Z.Z.Messages.MESSAGE_ACTION_FORWARD_TO,
...P,
children: [
  (0, l.jsxs)(o.ModalHeader, {
    className: y.header,
    children: [
      (0, l.jsxs)('div', {
        className: y.titleLine,
        children: [
          (0, l.jsx)('div', {
            className: y.title,
            children: (0, l.jsx)(o.HeadingLevel, {
              component: (0, l.jsx)(o.Heading, {
                variant: 'heading-lg/semibold',
                children: Z.Z.Messages.MESSAGE_ACTION_FORWARD_TO
              }),
              children: q ? (0, l.jsx)(o.Text, {
                variant: 'text-sm/normal',
                color: 'text-warning',
                children: Z.Z.Messages.MESSAGES_FORWARD_MAX_DESTINATION_COUNT.format({
                  count: x.G
                })
              }) : (O || D) && (0, l.jsx)(o.Heading, {
                variant: 'heading-sm/normal',
                color: 'header-muted',
                children: Z.Z.Messages.MESSAGE_FORWARD_SUBTITLE
              })
            })
          }),
          (0, l.jsx)(o.ModalCloseButton, {
            className: y.closeButton,
            onClick: ee
          })
        ]
      }),
      O && w && (0, l.jsx)('div', {
        className: y.forwardPreviewWrapperInset,
        children: (0, l.jsx)(T.O, {
          message: F,
          forwardOptions: u
        })
      }),
      (0, l.jsx)(o.SearchBar, {
        ref: el,
        size: o.SearchBar.Sizes.MEDIUM,
        query: Y,
        onChange: J,
        onClear: en,
        placeholder: Z.Z.Messages.SEARCH,
        'aria-label': Z.Z.Messages.SEARCH,
        autoFocus: !0
      })
    ]
  }),
  eu,
  !O && (D ? (0, l.jsx)(R, {
    message: F,
    forwardOptions: u,
    sendLabel: ed,
    canSend: V > 0,
    selectedDestinations: Q,
    isSending: G,
    onSend: er,
    showPreview: w
  }) : (0, l.jsxs)(o.ModalFooter, {
    className: y.footer,
    children: [
      (0, l.jsx)(o.Button, {
        submitting: G,
        disabled: 0 === V,
        onClick: eo,
        children: ed
      }),
      (0, l.jsx)(o.Button, {
        onClick: et,
        look: o.Button.Looks.OUTLINED,
        color: o.Button.Colors.PRIMARY,
        children: Z.Z.Messages.COPY_LINK
      })
    ]
  }))
]
  });
}