a.r(e), a.d(e, {
  default: function() {
return C;
  }
}), a(47120);
var o, s, i = a(735250),
  n = a(470079),
  r = a(442837),
  c = a(481060),
  l = a(728345),
  d = a(812206),
  u = a(886176),
  p = a(270144),
  f = a(572004),
  h = a(504211),
  m = a(283836),
  N = a(507608),
  T = a(981631),
  _ = a(272242),
  E = a(689938),
  g = a(348428);

function C(t) {
  let {
onClose: e,
transitionState: a,
appId: o,
guildId: s
  } = t, C = (0, r.e7)([d.Z], () => d.Z.getApplication(o), [o]), [S, I] = n.useState(() => d.Z.isFetchingApplication(o) ? {
status: 1
  } : {
status: 0
  }), R = n.useRef(null), [x, O] = n.useState(!0), L = () => {
var t;
(null === (t = R.current) || void 0 === t ? void 0 : t.isScrolledToBottom()) === !0 ? O(!1) : O(!0);
  };
  n.useEffect(() => {
0 === S.status && (I({
  status: 1
}), l.Z.fetchApplication(o).then(() => {
  I({
    status: 2
  });
}).catch(t => {
  I({
    status: 3,
    error: t.message
  });
}));
  }, [
o,
S.status
  ]);
  let {
subs: b,
otps: k,
subscriptionGroupListing: w
  } = (0, m.q)(o, s);
  if ((0, p.FE)(o, null == C ? void 0 : C.primarySkuId, {
  refetchOnMount: !0
}), null == C)
return null;
  let j = E.Z.Messages.STOREFRONT_TITLE.format({
appName: C.name
  });
  return (0, i.jsxs)(c.ModalRoot, {
transitionState: a,
'aria-label': j,
size: c.ModalSize.DYNAMIC,
className: g.modal,
children: [
  (0, i.jsxs)(c.ModalHeader, {
    className: g.modalHeader,
    children: [
      (0, i.jsxs)('div', {
        className: g.modalTitle,
        children: [
          (0, i.jsx)(u.Z, {}),
          (0, i.jsx)(c.Heading, {
            variant: 'heading-md/semibold',
            children: j
          })
        ]
      }),
      (0, i.jsxs)('div', {
        className: g.modalHeaderLinks,
        children: [
          f.wS && (0, i.jsx)(c.Button, {
            look: c.ButtonLooks.BLANK,
            size: c.ButtonSizes.ICON,
            color: c.ButtonColors.TRANSPARENT,
            'aria-label': E.Z.Messages.COPY_LINK,
            onClick: () => {
              let t = ''.concat(location.protocol, '//').concat(location.host).concat(T.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(o, _.ApplicationDirectoryProfileSections.STORE));
              (0, f.JG)(t), (0, c.showToast)((0, c.createToast)(E.Z.Messages.COPIED_LINK, c.ToastType.SUCCESS)), (0, h.X)(o, h.B.STORE_MODAL);
            },
            children: (0, i.jsx)(c.LinkIcon, {
              size: 'custom',
              width: 20,
              height: 20,
              color: 'var(--white)'
            })
          }),
          (0, i.jsx)(c.ModalCloseButton, {
            onClick: e,
            className: g.modalCloseBtn
          })
        ]
      })
    ]
  }),
  (0, i.jsx)(c.ModalContent, {
    scrollerRef: t => {
      null != t && (R.current = t, L());
    },
    onScroll: L,
    children: (0, i.jsx)(N.AF, {
      app: C,
      subscriptionGroupListing: w,
      guildId: s,
      subscriptionListings: b,
      otpListings: k
    })
  }),
  (0, i.jsx)('div', {
    className: g.containerScrollGradient,
    'data-shown': x
  })
]
  });
}
(s = o || (o = {}))[s.NONE = 0] = 'NONE', s[s.FETCHING = 1] = 'FETCHING', s[s.FETCHED = 2] = 'FETCHED', s[s.ERROR = 3] = 'ERROR';