n.r(t), n.d(t, {
  OAuth2Authorize: function() {
return en;
  },
  OAuth2AuthorizeModal: function() {
return et;
  },
  OAuth2AuthorizePage: function() {
return ee;
  },
  getOAuth2AuthorizeProps: function() {
return es;
  },
  openOAuth2Modal: function() {
return eo;
  },
  openOAuth2ModalWithCreateGuildModal: function() {
return ea;
  },
  useOAuth2AuthorizeForm: function() {
return er;
  }
}), n(47120), n(411104);
var r, i, a = n(735250),
  o = n(470079),
  s = n(120356),
  l = n.n(s),
  u = n(266067),
  c = n(729594),
  d = n(373793),
  _ = n(243814),
  E = n(149765),
  f = n(442837),
  h = n(693789),
  p = n(952265),
  m = n(21340),
  I = n(922770),
  T = n(481060),
  g = n(893776),
  S = n(434650),
  A = n(367907),
  N = n(702493),
  v = n(728345),
  O = n(979200),
  R = n(560067),
  C = n(353926),
  y = n(341298),
  D = n(703656),
  L = n(973616),
  b = n(598077),
  M = n(314897),
  P = n(700785),
  U = n(591759),
  w = n(807675),
  x = n(489863),
  G = n(228763),
  k = n(422559),
  B = n(713938),
  F = n(166148),
  V = n(807989),
  H = n(260430),
  Z = n(668185),
  Y = n(407546),
  j = n(41259),
  W = n(28752),
  K = n(787025),
  z = n(397394),
  q = n(574384),
  Q = n(981631),
  X = n(689938),
  $ = n(312750);
let J = 'oauth2-authorize-header-id';

function ee() {
  let e = (0, u.TH)(),
t = o.useMemo(() => (0, w.y)(e.search), [e.search]);
  return (0, N.Z)(), (0, a.jsx)(K.G, {
children: (0, a.jsx)(en, {
  ...t,
  showLogout: !0
})
  });
}

function et(e) {
  let {
transitionState: t,
...n
  } = e, {
header: r,
body: i,
footer: o,
nextStep: s,
appDetails: u
  } = er({
...n,
disableContinueUntilRead: !0
  }), c = (0, a.jsxs)('div', {
className: $.content,
children: [
  r,
  i,
  null == s ? u : null
]
  });
  return (0, a.jsx)(K.j, {
transitionState: t,
'aria-labelledby': J,
footer: o,
children: (0, a.jsx)('div', {
  className: l()($.authorize, {
    [$.inApp]: n.inApp
  }),
  children: (0, a.jsx)(m.zJ, {
    orientation: 'auto',
    children: c
  })
})
  });
}

function en(e) {
  let {
scrollable: t,
...n
  } = e, {
header: r,
body: i,
footer: o,
nextStep: s,
appDetails: u
  } = er(n), c = (0, a.jsxs)(a.Fragment, {
children: [
  (0, a.jsxs)('div', {
    className: $.content,
    children: [
      r,
      i,
      null == s ? u : null
    ]
  }),
  o
]
  });
  return t ? (0, a.jsxs)('div', {
children: [
  (0, a.jsx)('div', {
    className: l()($.authorize, {
      [$.inApp]: n.inApp
    }),
    children: (0, a.jsx)(m.zJ, {
      orientation: 'auto',
      children: c
    })
  }),
  o
]
  }) : (0, a.jsx)('div', {
className: l()($.authorize, {
  [$.inApp]: n.inApp
}),
children: (0, a.jsx)('div', {
  children: c
})
  });
}

function er(e) {
  var t, n, r, i, s;
  let l, p, m, N, R, y, {
  clientId: K,
  responseType: ee,
  redirectUri: et,
  codeChallenge: en,
  codeChallengeMethod: er,
  state: ei,
  nonce: ea,
  prompt: eo,
  authorizations: es,
  scopes: el,
  permissions: eu,
  guildId: ec,
  channelId: ed,
  integrationType: e_,
  disableGuildSelect: eE = !1,
  disableContinueUntilRead: ef = !1,
  showLogout: eh = !1,
  cancelCompletesFlow: ep = !0,
  isTrustedName: em = !1,
  isEmbeddedFlow: eI = !1,
  inApp: eT = !1,
  callback: eg,
  callbackWithoutPost: eS,
  onClose: eA,
  disclosures: eN
} = e,
ev = null != e_ ? null == es ? void 0 : es.get(e_) : void 0,
eO = (0, u.TH)(),
eR = (0, f.e7)([C.Z], () => C.Z.hasLoadedExperiments);
  o.useEffect(() => {
M.default.isAuthenticated() && !eR && g.Z.getExperiments();
  }, [eR]);
  let [eC, ey] = o.useState(null), [eD, eL] = o.useState(null), [eb, eM] = o.useState(null), [eP, eU] = o.useState(!1), [ew, ex] = o.useState(!ef), eG = null == eC ? void 0 : eC.guilds, [ek, eB] = o.useState(null != ec ? ec : null), [eF, eV] = o.useState(null != ed ? ed : null), [eH, eZ] = o.useState(P.Hn), eY = o.useMemo(() => (null == eC ? void 0 : eC.user) != null ? new b.Z(eC.user) : null, [null == eC ? void 0 : eC.user]), ej = o.useMemo(() => null == eG ? void 0 : eG.find(e => e.id === ek), [
eG,
ek
  ]), [eW, eK] = o.useState(null), ez = o.useMemo(() => {
var e;
return null == ev && null == e_ && (null !== (e = null == el ? void 0 : el.length) && void 0 !== e ? e : 0) === 0 && null == et;
  }, [
ev,
null == el ? void 0 : el.length,
et,
e_
  ]), [eq, eQ] = o.useState(null);
  o.useEffect(() => {
ez && v.Z.fetchApplication(K).then(e => eQ(L.Z.createFromServer(e)));
  }, [
K,
ez
  ]);
  let eX = o.useMemo(() => {
  var e, t;
  return null == eW ? null : null == eq ? void 0 : null === (t = eq.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[eW]) || void 0 === e ? void 0 : e.oauth2InstallParams;
}, [
  null == eq ? void 0 : eq.integrationTypesConfig,
  eW
]),
{
  requestedScopes: e$,
  accountScopes: eJ
} = o.useMemo(() => {
  let e = ez ? null == eX ? void 0 : eX.scopes : el,
    t = (0, w.K)(null != e ? e : []),
    n = B.Qe.filter(e => t.includes(e));
  return {
    requestedScopes: t,
    accountScopes: n
  };
}, [
  null == eX ? void 0 : eX.scopes,
  el,
  ez
]),
e0 = o.useMemo(() => {
  var e;
  let t = ez ? E.vB(null !== (e = null == eX ? void 0 : eX.permissions) && void 0 !== e ? e : 0) : eu;
  return null != t ? t : P.Hn;
}, [
  null == eX ? void 0 : eX.permissions,
  eu,
  ez
]),
e1 = o.useRef(!1),
[e2, e3] = o.useState(null != eN ? eN : []),
[e4, e5] = o.useState(null != eN && eN.length > 0);
  o.useEffect(() => {
if (e1.current)
  return;
let e = async () => {
  e1.current = !0;
  try {
    let {
      disclosures: e,
      allAcked: t
    } = await (0, O.de)(K);
    e5(!t), e3(e);
  } catch (n) {
    let {
      status: e,
      body: t
    } = n;
    if (401 === e) {
      (0, x.c$)(eO);
      return;
    }
    eM(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
  } finally {
    e1.current = !1;
  }
};
if (null == eN) {
  if (!M.default.isAuthenticated()) {
    (0, x.c$)(eO);
    return;
  }
  e();
}
  }, [
K,
eO,
eN,
e3,
eM,
e5,
eL
  ]);
  let e6 = o.useCallback(async e => {
  if (null != eS) {
    eS(e);
    return;
  }
  if (!e && !ep) {
    null != eg && (eg({
      application: null == eC ? void 0 : eC.application,
      guild: ej
    }), null == eA || eA());
    return;
  }
  if (null == eW) {
    eM(Error('No integration type was selected.'));
    return;
  }
  try {
    eU(!0);
    let t = await (0, x.Iq)({
      authorize: e,
      clientId: K,
      scopes: e$,
      responseType: ee,
      redirectUri: et,
      codeChallenge: en,
      codeChallengeMethod: er,
      state: ei,
      nonce: ea,
      integrationType: eW,
      permissions: E.Od(e0, eH),
      guildId: eW === d.Y.GUILD_INSTALL && null != ek ? ek : void 0,
      channelId: eW === d.Y.GUILD_INSTALL && null != eF ? eF : void 0
    });
    if (e && await (0, O.x9)(K, e2), null != eg)
      eg({
        application: null == eC ? void 0 : eC.application,
        location: t.location,
        guild: ej
      }), null == eA || eA();
    else if (null != t.location) {
      let {
        host: e,
        path: n
      } = c.parse(t.location);
      U.Z.isDiscordHostname(e) && n === Q.Z5c.OAUTH2_AUTHORIZED ? (0, D.uL)(Q.Z5c.OAUTH2_AUTHORIZED, {
        state: {
          application: null == eC ? void 0 : eC.application,
          guild: ej
        }
      }) : window.location = t.location;
    } else
      eU(!1);
  } catch (t) {
    let e = t.body;
    (null == e ? void 0 : e.message) != null && '' !== e.message ? eM(Error(e.message)) : eM(e), eL(1), eU(!1);
  }
}, [
  eS,
  ep,
  eg,
  null == eC ? void 0 : eC.application,
  ej,
  eA,
  K,
  e$,
  ee,
  et,
  en,
  er,
  ei,
  ea,
  e0,
  eH,
  ek,
  eW,
  eF,
  e2
]),
e7 = o.useRef(!1),
e8 = o.useCallback(async () => {
  if (!M.default.isAuthenticated()) {
    (0, x.c$)(eO);
    return;
  }
  if (!e1.current) {
    if (!e7.current) {
      e7.current = !0;
      try {
        let e = null != ev ? ev : await (0, x.Ww)({
          clientId: K,
          scopes: e$,
          responseType: ee,
          redirectUri: et,
          codeChallenge: en,
          codeChallengeMethod: er,
          state: ei,
          nonce: ea,
          integrationType: null != eW ? eW : void 0
        });
        ey((0, G.d)(e)), eo === F.s.NONE && e.authorized && !e4 && e6(!0), (0, A.yw)(Q.rMx.OAUTH2_AUTHORIZE_VIEWED, {
          application_id: e.application.id
        });
      } catch (n) {
        let {
          status: e,
          body: t
        } = n;
        if (401 === e) {
          (0, x.c$)(eO);
          return;
        }
        eM(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
      } finally {
        e7.current = !1;
      }
    }
  }
}, [
  eO,
  ev,
  K,
  e$,
  ee,
  et,
  en,
  er,
  ei,
  ea,
  eW,
  eo,
  e6,
  e4
]),
e9 = o.useMemo(() => {
  var e;
  return null != eq && ez ? Object.entries(null !== (e = eq.integrationTypesConfig) && void 0 !== e ? e : {}).filter(e => {
    let [t, n] = e;
    return null != n.oauth2InstallParams;
  }).map(e => {
    let [t, n] = e;
    return Number(t);
  }) : [];
}, [
  eq,
  ez
]);
  o.useEffect(() => {
if (null == eD && (!ez || null != eq) && !!eR)
  if (null != ev) {
    var e;
    eK(null !== (e = ev.integration_type) && void 0 !== e ? e : d.Y.GUILD_INSTALL), eL(1);
  } else
    e9.length > 1 ? eL(0) : (1 === e9.length ? eK(e9[0]) : null != e_ ? eK(e_) : eK(d.Y.GUILD_INSTALL), eL(1));
  }, [
ev,
e9,
eq,
ez,
e_,
eD,
eR
  ]), o.useEffect(() => {
if (null == eW || null != eC || null != eb)
  return;
eW === d.Y.USER_INSTALL && (eB(null), eV(null));
let e = e$.filter(e => !B.ak.includes(e));
0 === e$.length ? eM(Error('No scopes were provided.')) : e.length > 0 ? eM(Error('Invalid scope: '.concat(e[0]))) : (0, k._$)(e0) ? eM(Error('Invalid permission(s) provided.')) : e8();
  }, [
e4,
e8,
e$,
e0,
eW,
eC,
eb
  ]);
  let te = o.useCallback(e => {
  e && ex(!0);
}, []),
tt = (0, S.O)(te);
  if (eb instanceof Error)
return {
  body: (0, a.jsx)(z.Lk, {
    message: eb.message
  })
};
  let tn = !1,
tr = !0,
ti = !0,
ta = !0;
  switch (eD) {
case null:
  return {
    body: (0, a.jsx)(I.$, {})
  };
case 0:
  if (null == eq)
    return {
      body: (0, a.jsx)(I.$, {})
    };
  l = (0, a.jsx)(W.Z, {
    inApp: eT,
    application: eq,
    onSelect: e => {
      eK(e), ey(null), eL(1);
    }
  }), tr = !1, ti = !1, ta = eT;
  break;
case 1:
  if (null == eC || null == eY || null == eW)
    return {
      body: (0, a.jsx)(I.$, {})
    };
  let to = null == eb || eb instanceof Error ? {} : eb,
    ts = null == eG ? void 0 : eG.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
    tl = eW === d.Y.GUILD_INSTALL && e$.includes(_.x.WEBHOOK_INCOMING),
    tu = tl || eW === d.Y.GUILD_INSTALL && (e$.includes(_.x.BOT) || e$.includes(_.x.APPLICATIONS_COMMANDS));
  l = (0, a.jsxs)(a.Fragment, {
    children: [
      (0, a.jsx)(H.Z, {
        application: eC.application,
        accountScopes: eJ,
        requestedScopes: e$,
        integrationType: eW,
        errors: to,
        isTrustedName: em
      }),
      tu ? (0, a.jsx)(Y.Z, {
        error: (null !== (n = null !== (t = to[_.x.BOT]) && void 0 !== t ? t : to[_.x.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
        selectedGuildId: ek,
        onGuildChange: eB,
        guilds: null != ts ? ts : [],
        disabled: '' !== ek && null != ek && !0 === eE
      }) : null,
      tl ? (0, a.jsx)(q.Z, {
        error: (null !== (r = to[_.x.WEBHOOK_INCOMING]) && void 0 !== r ? r : [])[0],
        selectedChannelId: eF,
        selectedGuildId: ek,
        onChannelChange: eV
      }) : null
    ]
  }), e$.includes(_.x.BOT) && !E.fS(e0, P.Hn) && (m = 2), e9.length > 1 && (p = 0), tn = tu && null == ej || tl && null == eF;
  break;
case 2:
  if (null == eC)
    return {
      body: (0, a.jsx)(I.$, {})
    };
  l = (0, a.jsx)(Z.Z, {
    application: eC.application,
    permissions: e0,
    deniedPermissions: eH,
    onPermissionsChange: (e, t) => {
      eZ(n => e ? E.Od(n, t) : E.IH(n, t));
    },
    guild: ej
  }), p = 1;
  }
  if (tr && null != eC) {
let e = null === (i = eC.bot) || void 0 === i ? void 0 : i.approximate_guild_count;
N = (0, a.jsxs)(a.Fragment, {
  children: [
    (0, a.jsx)(V.Z, {
      application: eC.application,
      scopes: e$,
      disclosures: e2,
      redirectUri: null !== (s = eC.redirect_uri) && void 0 !== s ? s : null,
      approximateGuildCount: void 0 !== e ? e : null,
      isEmbeddedFlow: eI
    }),
    (0, a.jsx)('div', {
      className: $.intObserver,
      ref: tt
    })
  ]
});
  }
  ti && null != eC && null != eY && (R = (0, a.jsx)(j.Z, {
id: J,
user: eY,
application: eC.application,
bot: eC.bot,
accountScopes: eJ,
showLogout: eh || !1,
location: eO,
isTrustedName: em
  }));
  let tc = null == m && null != N && !ew;
  return ta && (y = (0, a.jsxs)('div', {
className: $.footer,
children: [
  null != p ? (0, a.jsx)(h.zx, {
    look: h.zx.Looks.LINK,
    color: h.zx.Colors.PRIMARY,
    onClick: () => eL(p),
    children: X.Z.Messages.BACK
  }) : (0, a.jsx)(h.zx, {
    look: h.zx.Looks.LINK,
    color: h.zx.Colors.PRIMARY,
    onClick: () => e6(!1),
    children: X.Z.Messages.CANCEL
  }),
  0 !== eD ? null != m ? (0, a.jsx)(h.zx, {
    onClick: () => eL(m),
    disabled: tn,
    children: X.Z.Messages.CONTINUE
  }) : tc ? (0, a.jsx)(T.Tooltip, {
    text: X.Z.Messages.OAUTH2_SCROLL_TO_READ_DISCLOSURES,
    children: e => (0, a.jsx)('div', {
      ...e,
      children: (0, a.jsx)(h.zx, {
        onClick: () => e6(!0),
        disabled: !0,
        submitting: eP,
        children: X.Z.Messages.AUTHORIZE
      })
    })
  }) : (0, a.jsx)(h.zx, {
    onClick: () => e6(!0),
    submitting: eP,
    children: X.Z.Messages.AUTHORIZE
  }) : null
]
  })), {
header: R,
body: l,
footer: y,
nextStep: m,
appDetails: N,
sendAuthorize: e6
  };
}

function ei(e, t) {
  if (null == t.location || null != e && e(t))
return;
  let {
host: n,
path: r,
query: i
  } = c.parse(t.location, !0), o = U.Z.isDiscordHostname(n) || window.location.host === n;
  if (o && r === Q.Z5c.OAUTH2_AUTHORIZED)
(0, p.h7)(e => (0, a.jsx)(K.j, {
  ...e,
  'aria-labelledby': J,
  children: (0, a.jsx)(z.Jh, {
    guild: t.guild,
    application: t.application,
    onClose: e.onClose
  })
}));
  else if (o && (null == r ? void 0 : r.startsWith(Q.Z5c.OAUTH2_ERROR)))
(0, p.h7)(e => {
  let t = i.error_description || i.error || X.Z.Messages.OAUTH2_UNKNOWN_ERROR;
  return Array.isArray(t) && (t = t[0]), (0, a.jsx)(K.j, {
    ...e,
    'aria-labelledby': J,
    children: (0, a.jsx)(z.Lk, {
      message: t,
      onClose: e.onClose
    })
  });
});
  else {
var s;
null === (s = window.open(t.location, '_blank')) || void 0 === s || s.focus();
  }
}

function ea(e, t) {
  if ((0, y.g)('create-guild-and-oauth2-modal')) {
R.Z.openCreateGuildModal({
  onSuccess: n => eo({
    ...e,
    guildId: n
  }, t)
});
return;
  }
  eo(e, t);
}

function eo(e, t) {
  (0, p.h7)(t => (0, a.jsx)(et, {
...t,
...e,
cancelCompletesFlow: !1,
callback: ei.bind(null, e.callback)
  }), {
onCloseCallback: t
  });
}

function es(e) {
  let {
hostname: t = '',
host: n,
path: r,
query: i
  } = c.parse(e);
  return null != r && null != i && (U.Z.isDiscordHostname(t) || n === window.location.host) && (r.startsWith('/api'.concat(Q.ANM.OAUTH2_AUTHORIZE)) || r.startsWith(Q.Z5c.OAUTH2_AUTHORIZE)) ? (0, w.y)(i) : null;
}
(i = r || (r = {}))[i.SELECT_INSTALL_TYPE = 0] = 'SELECT_INSTALL_TYPE', i[i.AUTHORIZE_SCOPES = 1] = 'AUTHORIZE_SCOPES', i[i.AUTHORIZE_BOT_PERMISSIONS = 2] = 'AUTHORIZE_BOT_PERMISSIONS';