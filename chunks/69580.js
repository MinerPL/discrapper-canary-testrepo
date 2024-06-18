"use strict";
n.r(t), n.d(t, {
  OAuth2Authorize: function() {
    return ee
  },
  OAuth2AuthorizeModal: function() {
    return $
  },
  OAuth2AuthorizePage: function() {
    return J
  },
  getOAuth2AuthorizeProps: function() {
    return es
  },
  openOAuth2Modal: function() {
    return er
  },
  openOAuth2ModalWithCreateGuildModal: function() {
    return ei
  },
  useOAuth2AuthorizeForm: function() {
    return et
  }
}), n(47120), n(411104);
var i, r, s = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  u = n(266067),
  _ = n(729594),
  d = n(373793),
  c = n(243814),
  E = n(149765),
  I = n(442837),
  T = n(693789),
  h = n(952265),
  S = n(21340),
  f = n(922770),
  N = n(893776),
  A = n(367907),
  m = n(702493),
  O = n(728345),
  R = n(979200),
  C = n(560067),
  p = n(353926),
  g = n(341298),
  L = n(703656),
  v = n(973616),
  D = n(598077),
  M = n(314897),
  P = n(700785),
  y = n(591759),
  U = n(807675),
  b = n(489863),
  G = n(228763),
  w = n(422559),
  k = n(713938),
  B = n(166148),
  x = n(807989),
  V = n(260430),
  Z = n(668185),
  H = n(407546),
  F = n(41259),
  Y = n(28752),
  j = n(787025),
  W = n(397394),
  K = n(574384),
  z = n(981631),
  q = n(689938),
  X = n(884103);
let Q = "oauth2-authorize-header-id";

function J() {
  let e = (0, u.TH)(),
    t = o.useMemo(() => (0, U.y)(e.search), [e.search]);
  return (0, m.Z)(), (0, s.jsx)(j.G, {
    children: (0, s.jsx)(ee, {
      ...t,
      showLogout: !0
    })
  })
}

function $(e) {
  let {
    transitionState: t,
    ...n
  } = e;
  return (0, s.jsx)(j.j, {
    transitionState: t,
    "aria-labelledby": Q,
    children: (0, s.jsx)(ee, {
      ...n,
      inApp: !0,
      scrollable: !0
    })
  })
}

function ee(e) {
  let {
    scrollable: t,
    ...n
  } = e, {
    header: i,
    body: r,
    footer: o,
    nextStep: a,
    appDetails: u
  } = et(n), _ = (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)("div", {
      className: X.content,
      children: [i, r, null == a ? u : null]
    }), o]
  });
  return t ? (0, s.jsx)("div", {
    className: l()(X.authorize, {
      [X.inApp]: n.inApp
    }),
    children: (0, s.jsx)(S.zJ, {
      orientation: "auto",
      children: _
    })
  }) : (0, s.jsx)("div", {
    className: l()(X.authorize, {
      [X.inApp]: n.inApp
    }),
    children: (0, s.jsx)("div", {
      children: _
    })
  })
}

function et(e) {
  var t, n, i, r, a;
  let l, h, S, m, C, g, {
      clientId: j,
      responseType: J,
      redirectUri: $,
      codeChallenge: ee,
      codeChallengeMethod: et,
      state: en,
      nonce: ei,
      prompt: er,
      authorizations: es,
      scopes: eo,
      permissions: ea,
      guildId: el,
      channelId: eu,
      integrationType: e_,
      disableGuildSelect: ed = !1,
      showLogout: ec = !1,
      cancelCompletesFlow: eE = !0,
      isTrustedName: eI = !1,
      isEmbeddedFlow: eT = !1,
      inApp: eh = !1,
      callback: eS,
      callbackWithoutPost: ef,
      onClose: eN,
      disclosures: eA
    } = e,
    em = null != e_ ? null == es ? void 0 : es.get(e_) : void 0,
    eO = (0, u.TH)(),
    eR = (0, I.e7)([p.Z], () => p.Z.hasLoadedExperiments);
  o.useEffect(() => {
    M.default.isAuthenticated() && !eR && N.Z.getExperiments()
  }, [eR]);
  let [eC, ep] = o.useState(null), [eg, eL] = o.useState(null), [ev, eD] = o.useState(null), [eM, eP] = o.useState(!1), ey = null == eC ? void 0 : eC.guilds, [eU, eb] = o.useState(null != el ? el : null), [eG, ew] = o.useState(null != eu ? eu : null), [ek, eB] = o.useState(P.Hn), ex = o.useMemo(() => (null == eC ? void 0 : eC.user) != null ? new D.Z(eC.user) : null, [null == eC ? void 0 : eC.user]), eV = o.useMemo(() => null == ey ? void 0 : ey.find(e => e.id === eU), [ey, eU]), [eZ, eH] = o.useState(null), eF = o.useMemo(() => {
    var e;
    return null == em && null == e_ && (null !== (e = null == eo ? void 0 : eo.length) && void 0 !== e ? e : 0) === 0 && null == $
  }, [em, null == eo ? void 0 : eo.length, $, e_]), [eY, ej] = o.useState(null);
  o.useEffect(() => {
    eF && O.Z.fetchApplication(j).then(e => ej(v.Z.createFromServer(e)))
  }, [j, eF]);
  let eW = o.useMemo(() => {
      var e, t;
      return null == eZ ? null : null == eY ? void 0 : null === (t = eY.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[eZ]) || void 0 === e ? void 0 : e.oauth2InstallParams
    }, [null == eY ? void 0 : eY.integrationTypesConfig, eZ]),
    {
      requestedScopes: eK,
      accountScopes: ez
    } = o.useMemo(() => {
      let e = eF ? null == eW ? void 0 : eW.scopes : eo,
        t = (0, U.K)(null != e ? e : []),
        n = k.Qe.filter(e => t.includes(e));
      return {
        requestedScopes: t,
        accountScopes: n
      }
    }, [null == eW ? void 0 : eW.scopes, eo, eF]),
    eq = o.useMemo(() => {
      var e;
      let t = eF ? E.vB(null !== (e = null == eW ? void 0 : eW.permissions) && void 0 !== e ? e : 0) : ea;
      return null != t ? t : P.Hn
    }, [null == eW ? void 0 : eW.permissions, ea, eF]),
    eX = o.useRef(!1),
    [eQ, eJ] = o.useState(null != eA ? eA : []),
    [e$, e0] = o.useState(null != eA && eA.length > 0);
  o.useEffect(() => {
    if (eX.current) return;
    let e = async () => {
      eX.current = !0;
      try {
        let {
          disclosures: e,
          allAcked: t
        } = await (0, R.de)(j);
        e0(!t), eJ(e)
      } catch (n) {
        let {
          status: e,
          body: t
        } = n;
        if (401 === e) {
          (0, b.c$)(eO);
          return
        }
        eD(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0])))
      } finally {
        eX.current = !1
      }
    };
    if (null == eA) {
      if (!M.default.isAuthenticated()) {
        (0, b.c$)(eO);
        return
      }
      e()
    }
  }, [j, eO, eA, eJ, eD, e0, eL]);
  let e1 = o.useCallback(async e => {
      if (null != ef) {
        ef(e);
        return
      }
      if (!e && !eE) {
        null != eS && (eS({
          application: null == eC ? void 0 : eC.application,
          guild: eV
        }), null == eN || eN());
        return
      }
      if (null == eZ) {
        eD(Error("No integration type was selected."));
        return
      }
      try {
        eP(!0);
        let t = await (0, b.Iq)({
          authorize: e,
          clientId: j,
          scopes: eK,
          responseType: J,
          redirectUri: $,
          codeChallenge: ee,
          codeChallengeMethod: et,
          state: en,
          nonce: ei,
          integrationType: eZ,
          permissions: E.Od(eq, ek),
          guildId: eZ === d.Y.GUILD_INSTALL && null != eU ? eU : void 0,
          channelId: eZ === d.Y.GUILD_INSTALL && null != eG ? eG : void 0
        });
        if (e && await (0, R.x9)(j, eQ), null != eS) eS({
          application: null == eC ? void 0 : eC.application,
          location: t.location,
          guild: eV
        }), null == eN || eN();
        else if (null != t.location) {
          let {
            host: e,
            path: n
          } = _.parse(t.location);
          y.Z.isDiscordHostname(e) && n === z.Z5c.OAUTH2_AUTHORIZED ? (0, L.uL)(z.Z5c.OAUTH2_AUTHORIZED, {
            state: {
              application: null == eC ? void 0 : eC.application,
              guild: eV
            }
          }) : window.location = t.location
        } else eP(!1)
      } catch (t) {
        let e = t.body;
        (null == e ? void 0 : e.message) != null && "" !== e.message ? eD(Error(e.message)) : eD(e), eL(1), eP(!1)
      }
    }, [ef, eE, eS, null == eC ? void 0 : eC.application, eV, eN, j, eK, J, $, ee, et, en, ei, eq, ek, eU, eZ, eG, eQ]),
    e2 = o.useRef(!1),
    e3 = o.useCallback(async () => {
      if (!M.default.isAuthenticated()) {
        (0, b.c$)(eO);
        return
      }
      if (!eX.current) {
        if (!e2.current) {
          e2.current = !0;
          try {
            let e = null != em ? em : await (0, b.Ww)({
              clientId: j,
              scopes: eK,
              responseType: J,
              redirectUri: $,
              codeChallenge: ee,
              codeChallengeMethod: et,
              state: en,
              nonce: ei,
              integrationType: null != eZ ? eZ : void 0
            });
            ep((0, G.d)(e)), er === B.s.NONE && e.authorized && !e$ && e1(!0), (0, A.yw)(z.rMx.OAUTH2_AUTHORIZE_VIEWED, {
              application_id: e.application.id
            })
          } catch (n) {
            let {
              status: e,
              body: t
            } = n;
            if (401 === e) {
              (0, b.c$)(eO);
              return
            }
            eD(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0])))
          } finally {
            e2.current = !1
          }
        }
      }
    }, [eO, em, j, eK, J, $, ee, et, en, ei, eZ, er, e1, e$]),
    e4 = o.useMemo(() => {
      var e;
      return null != eY && eF ? Object.entries(null !== (e = eY.integrationTypesConfig) && void 0 !== e ? e : {}).filter(e => {
        let [t, n] = e;
        return null != n.oauth2InstallParams
      }).map(e => {
        let [t, n] = e;
        return Number(t)
      }) : []
    }, [eY, eF]);
  if (o.useEffect(() => {
      if (null == eg && (!eF || null != eY) && !!eR)
        if (null != em) {
          var e;
          eH(null !== (e = em.integration_type) && void 0 !== e ? e : d.Y.GUILD_INSTALL), eL(1)
        } else e4.length > 1 ? eL(0) : (1 === e4.length ? eH(e4[0]) : null != e_ ? eH(e_) : eH(d.Y.GUILD_INSTALL), eL(1))
    }, [em, e4, eY, eF, e_, eg, eR]), o.useEffect(() => {
      if (null == eZ || null != eC || null != ev) return;
      eZ === d.Y.USER_INSTALL && (eb(null), ew(null));
      let e = eK.filter(e => !k.ak.includes(e));
      0 === eK.length ? eD(Error("No scopes were provided.")) : e.length > 0 ? eD(Error("Invalid scope: ".concat(e[0]))) : (0, w._$)(eq) ? eD(Error("Invalid permission(s) provided.")) : e3()
    }, [e$, e3, eK, eq, eZ, eC, ev]), ev instanceof Error) return {
    body: (0, s.jsx)(W.Lk, {
      message: ev.message
    })
  };
  let e7 = !1,
    e6 = !0,
    e5 = !0,
    e8 = !0;
  switch (eg) {
    case null:
      return {
        body: (0, s.jsx)(f.$, {})
      };
    case 0:
      if (null == eY) return {
        body: (0, s.jsx)(f.$, {})
      };
      l = (0, s.jsx)(Y.Z, {
        inApp: eh,
        application: eY,
        onSelect: e => {
          eH(e), ep(null), eL(1)
        }
      }), e6 = !1, e5 = !1, e8 = eh;
      break;
    case 1:
      if (null == eC || null == ex || null == eZ) return {
        body: (0, s.jsx)(f.$, {})
      };
      let e9 = null == ev || ev instanceof Error ? {} : ev,
        te = null == ey ? void 0 : ey.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
        tt = eZ === d.Y.GUILD_INSTALL && eK.includes(c.x.WEBHOOK_INCOMING),
        tn = tt || eZ === d.Y.GUILD_INSTALL && (eK.includes(c.x.BOT) || eK.includes(c.x.APPLICATIONS_COMMANDS));
      l = (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(V.Z, {
          application: eC.application,
          accountScopes: ez,
          requestedScopes: eK,
          integrationType: eZ,
          errors: e9,
          isTrustedName: eI
        }), tn ? (0, s.jsx)(H.Z, {
          error: (null !== (n = null !== (t = e9[c.x.BOT]) && void 0 !== t ? t : e9[c.x.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
          selectedGuildId: eU,
          onGuildChange: eb,
          guilds: null != te ? te : [],
          disabled: "" !== eU && null != eU && !0 === ed
        }) : null, tt ? (0, s.jsx)(K.Z, {
          error: (null !== (i = e9[c.x.WEBHOOK_INCOMING]) && void 0 !== i ? i : [])[0],
          selectedChannelId: eG,
          selectedGuildId: eU,
          onChannelChange: ew
        }) : null]
      }), eK.includes(c.x.BOT) && !E.fS(eq, P.Hn) && (S = 2), e4.length > 1 && (h = 0), e7 = tn && null == eV || tt && null == eG;
      break;
    case 2:
      if (null == eC) return {
        body: (0, s.jsx)(f.$, {})
      };
      l = (0, s.jsx)(Z.Z, {
        application: eC.application,
        permissions: eq,
        deniedPermissions: ek,
        onPermissionsChange: (e, t) => {
          eB(n => e ? E.Od(n, t) : E.IH(n, t))
        },
        guild: eV
      }), h = 1
  }
  if (e6 && null != eC) {
    let e = null === (r = eC.bot) || void 0 === r ? void 0 : r.approximate_guild_count;
    m = (0, s.jsx)(x.Z, {
      application: eC.application,
      scopes: eK,
      disclosures: eQ,
      redirectUri: null !== (a = eC.redirect_uri) && void 0 !== a ? a : null,
      approximateGuildCount: void 0 !== e ? e : null,
      isEmbeddedFlow: eT
    })
  }
  return e5 && null != eC && null != ex && (C = (0, s.jsx)(F.Z, {
    id: Q,
    user: ex,
    application: eC.application,
    bot: eC.bot,
    accountScopes: ez,
    showLogout: ec || !1,
    location: eO,
    isTrustedName: eI
  })), e8 && (g = (0, s.jsxs)("div", {
    className: X.footer,
    children: [null != h ? (0, s.jsx)(T.zx, {
      look: T.zx.Looks.LINK,
      color: T.zx.Colors.PRIMARY,
      onClick: () => eL(h),
      children: q.Z.Messages.BACK
    }) : (0, s.jsx)(T.zx, {
      look: T.zx.Looks.LINK,
      color: T.zx.Colors.PRIMARY,
      onClick: () => e1(!1),
      children: q.Z.Messages.CANCEL
    }), 0 !== eg ? null != S ? (0, s.jsx)(T.zx, {
      onClick: () => eL(S),
      disabled: e7,
      children: q.Z.Messages.CONTINUE
    }) : (0, s.jsx)(T.zx, {
      onClick: () => e1(!0),
      disabled: e7,
      submitting: eM,
      children: q.Z.Messages.AUTHORIZE
    }) : null]
  })), {
    header: C,
    body: l,
    footer: g,
    nextStep: S,
    appDetails: m,
    sendAuthorize: e1
  }
}

function en(e, t) {
  if (null == t.location || null != e && e(t)) return;
  let {
    host: n,
    path: i,
    query: r
  } = _.parse(t.location, !0), o = y.Z.isDiscordHostname(n) || window.location.host === n;
  if (o && i === z.Z5c.OAUTH2_AUTHORIZED)(0, h.h7)(e => (0, s.jsx)(j.j, {
    ...e,
    "aria-labelledby": Q,
    children: (0, s.jsx)(W.Jh, {
      guild: t.guild,
      application: t.application,
      onClose: e.onClose
    })
  }));
  else if (o && (null == i ? void 0 : i.startsWith(z.Z5c.OAUTH2_ERROR)))(0, h.h7)(e => {
    let t = r.error_description || r.error || q.Z.Messages.OAUTH2_UNKNOWN_ERROR;
    return Array.isArray(t) && (t = t[0]), (0, s.jsx)(j.j, {
      ...e,
      "aria-labelledby": Q,
      children: (0, s.jsx)(W.Lk, {
        message: t,
        onClose: e.onClose
      })
    })
  });
  else {
    var a;
    null === (a = window.open(t.location, "_blank")) || void 0 === a || a.focus()
  }
}

function ei(e, t) {
  if ((0, g.g)("create-guild-and-oauth2-modal")) {
    C.Z.openCreateGuildModal({
      onSuccess: n => er({
        ...e,
        guildId: n
      }, t)
    });
    return
  }
  er(e, t)
}

function er(e, t) {
  (0, h.h7)(t => (0, s.jsx)($, {
    ...t,
    ...e,
    cancelCompletesFlow: !1,
    callback: en.bind(null, e.callback)
  }), {
    onCloseCallback: t
  })
}

function es(e) {
  let {
    hostname: t = "",
    host: n,
    path: i,
    query: r
  } = _.parse(e);
  return null != i && null != r && (y.Z.isDiscordHostname(t) || n === window.location.host) && (i.startsWith("/api".concat(z.ANM.OAUTH2_AUTHORIZE)) || i.startsWith(z.Z5c.OAUTH2_AUTHORIZE)) ? (0, U.y)(r) : null
}(r = i || (i = {}))[r.SELECT_INSTALL_TYPE = 0] = "SELECT_INSTALL_TYPE", r[r.AUTHORIZE_SCOPES = 1] = "AUTHORIZE_SCOPES", r[r.AUTHORIZE_BOT_PERMISSIONS = 2] = "AUTHORIZE_BOT_PERMISSIONS"