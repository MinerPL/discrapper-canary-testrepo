n(47120);
var s = n(735250),
  r = n(470079),
  i = n(990547),
  a = n(442837),
  l = n(481060),
  o = n(893776),
  c = n(232567),
  u = n(388905),
  d = n(353926),
  _ = n(82554),
  h = n(726521),
  E = n(185625),
  g = n(314897),
  p = n(63063),
  I = n(981631),
  m = n(689938),
  f = n(190868),
  N = n(549856);
a.ZP.initialize();
let T = e => {
  let {
title: t,
menuType: r
  } = e, a = () => {
(0, l.openModalLazy)(async () => {
  let {
    default: e
  } = await n.e('93288').then(n.bind(n, 396410));
  return t => (0, s.jsx)(e, {
    ...t,
    onSuccess: o,
    headerText: m.Z.Messages.ENTER_EMAIL,
    confirmButtonText: m.Z.Messages.NEXT,
    confirmButtonColor: l.Button.Colors.BRAND,
    impressionName: i.ImpressionNames.URF_ENTER_EMAIL
  });
});
  }, o = e => {
let t = async () => {
  await (0, E.yL)(r, e);
}, a = async t => await (0, E.RV)(r, e, t), o = e => {
  let t = null == e ? void 0 : e.token;
  r === _.BM.MESSAGE ? (0, h.eE)(t) : r === _.BM.USER && (0, h.JM)(t);
};
t(), (0, l.openModalLazy)(async () => {
  let {
    default: e
  } = await n.e('94566').then(n.bind(n, 965072));
  return n => (0, s.jsx)(e, {
    ...n,
    onFormSubmit: a,
    onResend: t,
    onSuccess: o,
    headerText: m.Z.Messages.MEMBER_VERIFICATION_EMAIL_VERIFICATION_EMAIL_SENT,
    confirmButtonText: m.Z.Messages.VERIFY,
    confirmButtonColor: l.Button.Colors.BRAND,
    impressionName: i.ImpressionNames.URF_CONFIRM_EMAIL_CODE
  });
});
  };
  return (0, s.jsx)('div', {
className: f.buttonColumn,
children: (0, s.jsx)(l.Button, {
  className: N.__invalid_reportButton,
  fullWidth: !0,
  color: l.Button.Colors.BRAND,
  onClick: () => a(),
  children: t
})
  });
};
t.Z = () => {
  let [e, t] = r.useState(!0), [n, i] = r.useState(!1), h = (0, a.e7)([g.default], () => g.default.isAuthenticated()), x = (0, a.e7)([d.Z], () => d.Z.hasLoadedExperiments), A = () => {
(0, E.qJ)().then(() => {
  t(!1), i(!0);
}).catch(() => {
  t(!1), i(!1);
});
  };
  return r.useEffect(() => {
h ? (t(!0), c.k({
  withAnalyticsToken: !0
}).then(() => A()).catch(() => t(!1))) : A();
  }, [h]), r.useEffect(() => {
(async () => {
  !x && (await o.Z.getLocationMetadata(), o.Z.getExperiments());
})();
  }, [x]), e || !x ? (0, s.jsx)(u.ZP, {
children: (0, s.jsx)(l.Spinner, {})
  }) : n && (0, s.jsxs)(u.ZP, {
children: [
  (0, s.jsx)(u.Dx, {
    className: N.marginBottom8,
    children: m.Z.Messages.URF_LANDING_PAGE_TITLE
  }),
  (0, s.jsx)(u.DK, {
    className: N.marginBottom8,
    children: m.Z.Messages.URF_LANDING_PAGE_SUBTITLE.format({
      supportURL: p.Z.getArticleURL(I.BhN.COPYRIGHT_AND_IP_POLICY)
    })
  }),
  (0, s.jsxs)('div', {
    className: f.container,
    children: [
      (0, s.jsx)(T, {
        title: m.Z.Messages.URF_LANDING_PAGE_REPORT_MESSAGE_BUTTON,
        menuType: _.BM.MESSAGE
      }),
      (0, s.jsx)(T, {
        title: m.Z.Messages.URF_LANDING_PAGE_REPORT_USER_PROFILE_BUTTON,
        menuType: _.BM.USER
      })
    ]
  })
]
  });
};