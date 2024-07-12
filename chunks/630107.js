t.r(n), t.d(n, {
  default: function() {
return h;
  }
});
var a = t(735250),
  s = t(470079),
  i = t(873546),
  r = t(442837),
  l = t(481060),
  o = t(830064),
  c = t(388905),
  u = t(625128),
  d = t(362762),
  p = t(703656),
  m = t(981631),
  x = t(186901),
  b = t(689938),
  N = t(521934),
  _ = t(821744);
r.ZP.initialize();
let E = i.tq || i.Em,
  g = 'inventory';

function h() {
  let e = (0, r.e7)([d.Z], () => d.Z.getState('quests'));
  if (s.useEffect(() => {
  if (!E)
    null == e ? u.Z.openNativeAppModal('quests', m.Etm.DEEP_LINK, {
      type: x.jE.USER_SETTINGS,
      params: {
        section: g
      }
    }) : e === m.kEZ.OPEN_FAIL && (0, p.dL)(m.Z5c.SETTINGS(g));
}, [e]), E)
return (0, a.jsxs)('div', {
  className: N.mobileWebContainer,
  children: [
    (0, a.jsx)('img', {
      src: _,
      alt: '',
      className: N.mobileWebImage
    }),
    (0, a.jsx)(l.Heading, {
      variant: 'display-lg',
      color: 'text-brand',
      children: b.Z.Messages.QUESTS_LANDING_PAGE_ERROR_HEADING
    }),
    (0, a.jsx)(l.Text, {
      variant: 'text-md/normal',
      className: N.mobileWebCopy,
      children: b.Z.Messages.QUESTS_LANDING_PAGE_MOBILE_WEB_BODY.format()
    })
  ]
});
  let n = null == e || e === m.kEZ.OPENING || e === m.kEZ.OPEN_FAIL;
  return (0, a.jsxs)(a.Fragment, {
children: [
  (0, a.jsx)(o.Z, {
    className: N.backgroundArtwork,
    preserveAspectRatio: 'xMinYMin slice'
  }),
  (0, a.jsx)('div', {
    className: N.container,
    children: (0, a.jsx)(c.ZP, {
      children: n ? (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsx)(c.Dx, {
            children: b.Z.Messages.APP_OPENING
          }),
          (0, a.jsx)(c.Hh, {})
        ]
      }) : (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsx)(c.Dx, {
            className: N.appOpenedTitle,
            children: b.Z.Messages.APP_OPENED_TITLE
          }),
          (0, a.jsx)(c.DK, {
            children: b.Z.Messages.DEEPLINK_BROWSER_APP_OPENED
          })
        ]
      })
    })
  })
]
  });
}