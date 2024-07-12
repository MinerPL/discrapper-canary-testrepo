n.r(t), n.d(t, {
  ConfirmModal: function() {
return d;
  },
  DeclarativeConfirmModal: function() {
return _;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(693789),
  l = n(260034),
  u = n(709692),
  c = n(298926);

function d(e) {
  let t, n, {
  header: a,
  children: d,
  confirmText: _,
  cancelText: E,
  className: f,
  onConfirm: h,
  onCancel: p,
  onClose: m,
  onCloseCallback: I,
  bodyClassName: T,
  transitionState: g,
  loading: S = !1,
  confirmButtonColor: A = s.zx.Colors.RED,
  focusCancel: N = !1
} = e,
v = i.useRef(null);
  return i.useEffect(() => {
!N && setTimeout(() => {
  var e;
  return null === (e = v.current) || void 0 === e ? void 0 : e.focus();
}, 0);
  }, [N]), i.useLayoutEffect(() => () => null == I ? void 0 : I()), null != E && (t = (0, r.jsx)(s.zx, {
type: 'button',
look: s.zx.Looks.LINK,
color: s.zx.Colors.PRIMARY,
disabled: S,
onClick: () => {
  null == p || p(), m();
},
autoFocus: N,
children: E
  })), null != _ && (n = (0, r.jsx)(s.zx, {
buttonRef: v,
type: 'submit',
color: A,
submitting: S,
onClick: async () => {
  try {
    await (null == h ? void 0 : h()), m();
  } catch (e) {
    throw e;
  }
},
autoFocus: !N,
children: _
  })), (0, r.jsxs)(u.Y0, {
className: f,
transitionState: g,
children: [
  null != a ? (0, r.jsx)(u.xB, {
    separator: !1,
    children: (0, r.jsx)(l.X, {
      variant: 'heading-lg/semibold',
      children: a
    })
  }) : null,
  (0, r.jsx)(u.hz, {
    className: o()(c.content, T),
    children: d
  }),
  (0, r.jsxs)(u.mz, {
    children: [
      n,
      t
    ]
  })
]
  });
}

function _(e) {
  return (0, r.jsx)(u.u_, {
onCloseRequest: e.dismissable ? e.onCancel : null,
renderModal: t => (0, r.jsx)(d, {
  ...t,
  ...e
})
  });
}