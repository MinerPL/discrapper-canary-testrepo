n.r(t), n.d(t, {
  ForwardModal: function() {
return L;
  }
}), n(47120);
var l = n(735250),
  a = n(470079),
  i = n(442837),
  s = n(481060),
  r = n(359110),
  c = n(987509),
  o = n(72214),
  u = n(592125),
  d = n(375954),
  _ = n(934415),
  f = n(572004),
  E = n(823379),
  h = n(859155),
  S = n(822869),
  g = n(895442),
  I = n(757853),
  A = n(912332),
  p = n(819727),
  m = n(689938),
  C = n(803519),
  b = n(621054);

function L(e) {
  let {
channelId: t,
messageId: L,
initialSelectedDestinations: N,
forwardOptions: T,
onClose: Z,
onRequestSent: y,
...x
  } = e, [v, R] = a.useState(''), M = a.useMemo(() => (0, c.dL)(t), [t]), [P, D] = a.useState(N), [O, F] = a.useState(!1), G = P.length, U = G >= p.G, j = (0, i.e7)([d.Z], () => d.Z.getMessage(t, L), [
t,
L
  ]), k = (0, i.e7)([u.Z], () => u.Z.getChannel(t), [t]), H = (0, o.s)({
searchText: v,
selectedDestinations: P,
originDestination: M,
includeMissingDMs: !0
  }), Q = a.useCallback(() => {
(0, S.sF)(t, L), Z();
  }, [
t,
L,
Z
  ]), w = a.useCallback(() => {
var e;
let n = null === (e = u.Z.getChannel(t)) || void 0 === e ? void 0 : e.guild_id;
if (null == n)
  return;
let l = (0, _.wR)(n, t, L);
(0, s.showToast)((0, s.createToast)(m.Z.Messages.COPIED_LINK, s.ToastType.LINK)), (0, f.JG)(l);
  }, [
t,
L
  ]), z = a.useCallback(() => {
R('');
  }, [R]), W = a.useRef(null);
  a.useEffect(() => {
if ('' === v) {
  var e;
  null === (e = W.current) || void 0 === e || e.focus();
}
  }, [v]);
  let B = a.useCallback(e => {
  D(t => {
    let n = t.findIndex(t => {
      let {
        type: n,
        id: l
      } = t;
      return n === e.type && l === e.id;
    });
    if (-1 === n)
      return U ? t : (R(''), [
        e,
        ...t
      ]);
    let l = [...t];
    return l.splice(n, 1), l;
  });
}, [U]),
K = a.useCallback(async () => {
  let e = d.Z.getMessage(t, L);
  if (null == e) {
    (0, s.showToast)((0, s.createToast)(m.Z.Messages.ERROR_GENERIC_TITLE, s.ToastType.FAILURE));
    return;
  }
  F(!0);
  let a = (await Promise.all(P.map(c.qx))).filter(E.lm);
  if ((0, g.Z)(e, a) && !await new Promise(e => {
      (0, s.openModalLazy)(async () => {
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
  (0, A.mc)(), null == y || y(), 1 === a.length && (0, r.Kh)(a[0]);
  let i = await h.Z.sendForwards(e, a, T);
  if (i.every(e => {
      let {
        status: t
      } = e;
      return 'fulfilled' === t;
    })) {
    (0, S.gP)(t, L, !1, a.length), (0, s.showToast)((0, s.createToast)(m.Z.Messages.MESSAGE_FORWARD_SUCCESS, s.ToastType.FORWARD));
    return;
  }
  (0, S.gP)(t, L, !0, a.length);
  let o = P.filter((e, t) => 'rejected' === i[t].status);
  (0, A.Np)({
    messageId: L,
    channelId: t,
    failedDestinations: o,
    forwardOptions: T
  });
}, [
  t,
  T,
  L,
  P,
  y
]);
  if (null == j || null == k)
return null;
  let Y = H.length > 0 ? (0, l.jsx)(I.F, {
  paddingBottom: 16,
  paddingTop: 16,
  rowData: H,
  message: j,
  originChannel: k,
  handleToggleDestination: B,
  selectedDestinations: P,
  disableSelection: U
}) : (0, l.jsxs)(s.ModalContent, {
  className: C.noResults,
  children: [
    (0, l.jsx)('img', {
      className: C.noResultsImg,
      src: b,
      alt: ''
    }),
    (0, l.jsx)(s.Text, {
      variant: 'text-md/normal',
      color: 'text-muted',
      children: m.Z.Messages.SEARCH_NO_RESULTS
    })
  ]
}),
q = G <= 1 ? m.Z.Messages.SEND : m.Z.Messages.MESSAGES_SEND_SEPARATELY.format({
  count: G
});
  return (0, l.jsxs)(s.ModalRoot, {
className: C.modal,
'aria-label': m.Z.Messages.MESSAGE_ACTION_FORWARD_TO,
...x,
children: [
  (0, l.jsxs)(s.ModalHeader, {
    className: C.header,
    children: [
      (0, l.jsxs)('div', {
        className: C.titleLine,
        children: [
          (0, l.jsxs)('div', {
            className: C.title,
            children: [
              (0, l.jsx)(s.Heading, {
                variant: 'heading-lg/semibold',
                children: m.Z.Messages.MESSAGE_ACTION_FORWARD_TO
              }),
              U ? (0, l.jsx)(s.Text, {
                variant: 'text-sm/normal',
                color: 'text-warning',
                children: m.Z.Messages.MESSAGES_FORWARD_MAX_DESTINATION_COUNT.format({
                  count: p.G
                })
              }) : null
            ]
          }),
          (0, l.jsx)(s.ModalCloseButton, {
            className: C.closeButton,
            onClick: Q
          })
        ]
      }),
      (0, l.jsx)(s.SearchBar, {
        ref: W,
        size: s.SearchBar.Sizes.MEDIUM,
        query: v,
        onChange: R,
        onClear: z,
        placeholder: m.Z.Messages.SEARCH,
        'aria-label': m.Z.Messages.SEARCH,
        autoFocus: !0
      })
    ]
  }),
  Y,
  (0, l.jsxs)(s.ModalFooter, {
    className: C.footer,
    children: [
      (0, l.jsx)(s.Button, {
        submitting: O,
        disabled: 0 === G,
        onClick: K,
        children: q
      }),
      (0, l.jsx)(s.Button, {
        onClick: w,
        look: s.Button.Looks.OUTLINED,
        color: s.Button.Colors.PRIMARY,
        children: m.Z.Messages.COPY_LINK
      })
    ]
  })
]
  });
}