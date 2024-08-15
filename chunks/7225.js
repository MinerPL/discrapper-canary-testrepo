t.r(n), t.d(n, {
  default: function() {
return L;
  }
}), t(47120);
var i, a, o = t(735250),
  r = t(470079),
  l = t(442837),
  s = t(481060),
  c = t(728345),
  d = t(812206),
  u = t(886176),
  f = t(270144),
  p = t(572004),
  C = t(504211),
  _ = t(283836),
  b = t(507608),
  I = t(981631),
  h = t(272242),
  m = t(689938),
  T = t(437561);

function L(e) {
  let {
onClose: n,
transitionState: t,
appId: i,
onlySubscribeServerSubForGuildId: a
  } = e, L = (0, l.e7)([d.Z], () => d.Z.getApplication(i), [i]), [S, g] = r.useState(() => d.Z.isFetchingApplication(i) ? {
status: 1
  } : {
status: 0
  }), E = r.useRef(null), [N, A] = r.useState(!0), O = () => {
var e;
(null === (e = E.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) === !0 ? A(!1) : A(!0);
  };
  r.useEffect(() => {
0 === S.status && (g({
  status: 1
}), c.Z.fetchApplication(i).then(() => {
  g({
    status: 2
  });
}).catch(e => {
  g({
    status: 3,
    error: e.message
  });
}));
  }, [
i,
S.status
  ]);
  let {
subs: v,
otps: R,
subscriptionGroupListing: x
  } = (0, _.q)(i, a);
  if ((0, f.FE)(i, null == L ? void 0 : L.primarySkuId, {
  refetchOnMount: !0
}), null == L)
return null;
  let y = m.Z.Messages.STOREFRONT_TITLE.format({
appName: L.name
  });
  return (0, o.jsxs)(s.ModalRoot, {
transitionState: t,
'aria-label': y,
size: s.ModalSize.DYNAMIC,
className: T.modal,
children: [
  (0, o.jsxs)(s.ModalHeader, {
    className: T.modalHeader,
    children: [
      (0, o.jsxs)('div', {
        className: T.modalTitle,
        children: [
          (0, o.jsx)(u.Z, {}),
          (0, o.jsx)(s.Heading, {
            variant: 'heading-md/semibold',
            children: y
          })
        ]
      }),
      (0, o.jsxs)('div', {
        className: T.modalHeaderLinks,
        children: [
          p.wS && (0, o.jsx)(s.Button, {
            look: s.ButtonLooks.BLANK,
            size: s.ButtonSizes.ICON,
            color: s.ButtonColors.TRANSPARENT,
            'aria-label': m.Z.Messages.COPY_LINK,
            onClick: () => {
              let e = ''.concat(location.protocol, '//').concat(location.host).concat(I.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(i, h.ApplicationDirectoryProfileSections.STORE));
              (0, p.JG)(e), (0, s.showToast)((0, s.createToast)(m.Z.Messages.COPIED_LINK, s.ToastType.SUCCESS)), (0, C.X)(i, C.B.STORE_MODAL);
            },
            children: (0, o.jsx)(s.LinkIcon, {
              size: 'custom',
              width: 20,
              height: 20,
              color: 'var(--white)'
            })
          }),
          (0, o.jsx)(s.ModalCloseButton, {
            onClick: n,
            className: T.modalCloseBtn
          })
        ]
      })
    ]
  }),
  (0, o.jsx)(s.ModalContent, {
    scrollerRef: e => {
      null != e && (E.current = e, O());
    },
    onScroll: O,
    children: (0, o.jsx)(b.AF, {
      app: L,
      subscriptionGroupListing: x,
      onlySubscribeServerSubForGuildId: a,
      subscriptionListings: v,
      otpListings: R
    })
  }),
  (0, o.jsx)('div', {
    className: T.containerScrollGradient,
    'data-shown': N
  })
]
  });
}
(a = i || (i = {}))[a.NONE = 0] = 'NONE', a[a.FETCHING = 1] = 'FETCHING', a[a.FETCHED = 2] = 'FETCHED', a[a.ERROR = 3] = 'ERROR';