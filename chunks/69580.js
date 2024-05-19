"use strict";
n.r(t), n.d(t, {
  OAuth2Authorize: function() {
    return et
  },
  OAuth2AuthorizeModal: function() {
    return ee
  },
  OAuth2AuthorizePage: function() {
    return $
  },
  getOAuth2AuthorizeProps: function() {
    return es
  },
  openOAuth2Modal: function() {
    return ea
  },
  openOAuth2ModalWithCreateGuildModal: function() {
    return er
  },
  useOAuth2AuthorizeForm: function() {
    return en
  }
}), n("47120"), n("411104");
var i, r, a = n("735250"),
  s = n("470079"),
  o = n("120356"),
  l = n.n(o),
  u = n("613828"),
  d = n("729594"),
  _ = n("373793"),
  c = n("243814"),
  E = n("149765"),
  I = n("442837"),
  T = n("693789"),
  f = n("952265"),
  S = n("21340"),
  h = n("922770"),
  A = n("893776"),
  m = n("367907"),
  N = n("702493"),
  p = n("420582"),
  O = n("728345"),
  C = n("979200"),
  R = n("560067"),
  g = n("341298"),
  L = n("703656"),
  v = n("973616"),
  D = n("598077"),
  M = n("314897"),
  y = n("828695"),
  P = n("700785"),
  U = n("591759"),
  b = n("807675"),
  G = n("489863"),
  w = n("228763"),
  k = n("422559"),
  B = n("713938"),
  V = n("166148"),
  x = n("807989"),
  F = n("260430"),
  H = n("668185"),
  Y = n("407546"),
  j = n("41259"),
  W = n("28752"),
  K = n("787025"),
  z = n("397394"),
  Z = n("574384"),
  X = n("981631"),
  Q = n("689938"),
  q = n("884103");
let J = "oauth2-authorize-header-id";

function $() {
  let e = (0, u.useLocation)(),
    t = s.useMemo(() => (0, b.parseOAuth2AuthorizeProps)(e.search), [e.search]);
  return (0, N.default)(), (0, a.jsx)(K.OAuth2Page, {
    children: (0, a.jsx)(et, {
      ...t,
      showLogout: !0
    })
  })
}

function ee(e) {
  let {
    transitionState: t,
    ...n
  } = e;
  return (0, a.jsx)(K.OAuth2Modal, {
    transitionState: t,
    "aria-labelledby": J,
    children: (0, a.jsx)(et, {
      ...n,
      inApp: !0,
      scrollable: !0
    })
  })
}

function et(e) {
  let {
    scrollable: t,
    ...n
  } = e, {
    header: i,
    body: r,
    footer: s,
    nextStep: o,
    appDetails: u
  } = en(n), d = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: q.content,
      children: [i, r, null == o ? u : null]
    }), s]
  });
  return t ? (0, a.jsx)("div", {
    className: l()(q.authorize, {
      [q.inApp]: n.inApp
    }),
    children: (0, a.jsx)(S.ScrollerThin, {
      orientation: "auto",
      children: d
    })
  }) : (0, a.jsx)("div", {
    className: l()(q.authorize, {
      [q.inApp]: n.inApp
    }),
    children: (0, a.jsx)("div", {
      children: d
    })
  })
}

function en(e) {
  var t, n, i, r, o;
  let l, f, S, N, R, g, {
      clientId: K,
      responseType: $,
      redirectUri: ee,
      codeChallenge: et,
      codeChallengeMethod: en,
      state: ei,
      nonce: er,
      prompt: ea,
      authorizations: es,
      scopes: eo,
      permissions: el,
      guildId: eu,
      channelId: ed,
      integrationType: e_,
      disableGuildSelect: ec = !1,
      showLogout: eE = !1,
      cancelCompletesFlow: eI = !0,
      isTrustedName: eT = !1,
      isEmbeddedFlow: ef = !1,
      inApp: eS = !1,
      callback: eh,
      callbackWithoutPost: eA,
      onClose: em,
      disclosures: eN
    } = e,
    ep = null != e_ ? null == es ? void 0 : es.get(e_) : void 0,
    eO = (0, u.useLocation)(),
    eC = p.default.useExperiment({
      location: "auth web"
    }).userAppsTreatment === p.UserAppsTreatment.ALLOWED,
    eR = (0, I.useStateFromStores)([y.default], () => y.default.hasLoadedExperiments);
  s.useEffect(() => {
    M.default.isAuthenticated() && !eR && A.default.getExperiments()
  }, [eR]);
  let [eg, eL] = s.useState(null), [ev, eD] = s.useState(null), [eM, ey] = s.useState(null), [eP, eU] = s.useState(!1), eb = null == eg ? void 0 : eg.guilds, [eG, ew] = s.useState(null != eu ? eu : null), [ek, eB] = s.useState(null != ed ? ed : null), [eV, ex] = s.useState(P.NONE), eF = s.useMemo(() => (null == eg ? void 0 : eg.user) != null ? new D.default(eg.user) : null, [null == eg ? void 0 : eg.user]), eH = s.useMemo(() => null == eb ? void 0 : eb.find(e => e.id === eG), [eb, eG]), [eY, ej] = s.useState(null), eW = s.useMemo(() => {
    var e;
    return eC && null == ep && null == e_ && (null !== (e = null == eo ? void 0 : eo.length) && void 0 !== e ? e : 0) === 0 && null == ee
  }, [ep, eC, null == eo ? void 0 : eo.length, ee, e_]), [eK, ez] = s.useState(null);
  s.useEffect(() => {
    eW && O.default.fetchApplication(K).then(e => ez(v.default.createFromServer(e)))
  }, [K, eW]);
  let eZ = s.useMemo(() => {
      var e, t;
      return null == eY ? null : null == eK ? void 0 : null === (t = eK.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[eY]) || void 0 === e ? void 0 : e.oauth2InstallParams
    }, [null == eK ? void 0 : eK.integrationTypesConfig, eY]),
    {
      requestedScopes: eX,
      accountScopes: eQ
    } = s.useMemo(() => {
      let e = eW ? null == eZ ? void 0 : eZ.scopes : eo,
        t = (0, b.filterScopes)(null != e ? e : []),
        n = B.OrderedAccountScopes.filter(e => t.includes(e));
      return {
        requestedScopes: t,
        accountScopes: n
      }
    }, [null == eZ ? void 0 : eZ.scopes, eo, eW]),
    eq = s.useMemo(() => {
      var e;
      let t = eW ? E.deserialize(null !== (e = null == eZ ? void 0 : eZ.permissions) && void 0 !== e ? e : 0) : el;
      return null != t ? t : P.NONE
    }, [null == eZ ? void 0 : eZ.permissions, el, eW]),
    eJ = s.useRef(!1),
    [e$, e0] = s.useState(null != eN ? eN : []),
    [e1, e2] = s.useState(null != eN && eN.length > 0);
  s.useEffect(() => {
    if (eJ.current) return;
    let e = async () => {
      eJ.current = !0;
      try {
        let {
          disclosures: e,
          allAcked: t
        } = await (0, C.getDisclosures)(K);
        e2(!t), e0(e)
      } catch (n) {
        let {
          status: e,
          body: t
        } = n;
        if (401 === e) {
          (0, G.logoutWithRedirect)(eO);
          return
        }
        ey(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0])))
      } finally {
        eJ.current = !1
      }
    };
    if (null == eN) {
      if (!M.default.isAuthenticated()) {
        (0, G.logoutWithRedirect)(eO);
        return
      }
      e()
    }
  }, [K, eO, eN, e0, ey, e2, eD]);
  let e3 = s.useCallback(async e => {
      if (null != eA) {
        eA(e);
        return
      }
      if (!e && !eI) {
        null != eh && (eh({
          application: null == eg ? void 0 : eg.application,
          guild: eH
        }), null == em || em());
        return
      }
      if (null == eY) {
        ey(Error("No integration type was selected."));
        return
      }
      try {
        eU(!0);
        let t = await (0, G.authorize)({
          authorize: e,
          clientId: K,
          scopes: eX,
          responseType: $,
          redirectUri: ee,
          codeChallenge: et,
          codeChallengeMethod: en,
          state: ei,
          nonce: er,
          integrationType: eY,
          permissions: E.remove(eq, eV),
          guildId: eY === _.ApplicationIntegrationType.GUILD_INSTALL && null != eG ? eG : void 0,
          channelId: eY === _.ApplicationIntegrationType.GUILD_INSTALL && null != ek ? ek : void 0
        });
        if (e && await (0, C.ackDisclosures)(K, e$), null != eh) eh({
          application: null == eg ? void 0 : eg.application,
          location: t.location,
          guild: eH
        }), null == em || em();
        else if (null != t.location) {
          let {
            host: e,
            path: n
          } = d.parse(t.location);
          U.default.isDiscordHostname(e) && n === X.Routes.OAUTH2_AUTHORIZED ? (0, L.transitionTo)(X.Routes.OAUTH2_AUTHORIZED, {
            state: {
              application: null == eg ? void 0 : eg.application,
              guild: eH
            }
          }) : window.location = t.location
        } else eU(!1)
      } catch (t) {
        let e = t.body;
        (null == e ? void 0 : e.message) != null && "" !== e.message ? ey(Error(e.message)) : ey(e), eD(1), eU(!1)
      }
    }, [eA, eI, eh, null == eg ? void 0 : eg.application, eH, em, K, eX, $, ee, et, en, ei, er, eq, eV, eG, eY, ek, e$]),
    e4 = s.useRef(!1),
    e6 = s.useCallback(async () => {
      if (!M.default.isAuthenticated()) {
        (0, G.logoutWithRedirect)(eO);
        return
      }
      if (!eJ.current) {
        if (!e4.current) {
          e4.current = !0;
          try {
            let e = null != ep ? ep : await (0, G.fetchAuthorization)({
              clientId: K,
              scopes: eX,
              responseType: $,
              redirectUri: ee,
              codeChallenge: et,
              codeChallengeMethod: en,
              state: ei,
              nonce: er,
              integrationType: null != eY ? eY : void 0
            });
            eL((0, w.convertOAuth2Authorization)(e)), ea === V.OAuth2Prompts.NONE && e.authorized && !e1 && e3(!0), (0, m.trackWithMetadata)(X.AnalyticEvents.OAUTH2_AUTHORIZE_VIEWED, {
              application_id: e.application.id
            })
          } catch (n) {
            let {
              status: e,
              body: t
            } = n;
            if (401 === e) {
              (0, G.logoutWithRedirect)(eO);
              return
            }
            ey(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0])))
          } finally {
            e4.current = !1
          }
        }
      }
    }, [eO, ep, K, eX, $, ee, et, en, ei, er, eY, ea, e3, e1]),
    e7 = s.useMemo(() => {
      var e;
      return null != eK && eW ? Object.entries(null !== (e = eK.integrationTypesConfig) && void 0 !== e ? e : {}).filter(e => {
        let [t, n] = e;
        return null != n.oauth2InstallParams
      }).map(e => {
        let [t, n] = e;
        return Number(t)
      }) : []
    }, [eK, eW]);
  if (s.useEffect(() => {
      if (null == ev && (!eW || null != eK) && eR) {
        if (null != ep) {
          var e;
          ej(null !== (e = ep.integration_type) && void 0 !== e ? e : _.ApplicationIntegrationType.GUILD_INSTALL), eD(1)
        } else e7.length > 1 ? eD(0) : (1 === e7.length ? ej(e7[0]) : null != e_ ? ej(e_) : ej(_.ApplicationIntegrationType.GUILD_INSTALL), eD(1))
      }
    }, [ep, e7, eK, eC, eW, e_, ev, eR]), s.useEffect(() => {
      if (null == eY || null != eg || null != eM) return;
      eY === _.ApplicationIntegrationType.USER_INSTALL && (ew(null), eB(null));
      let e = eX.filter(e => !B.ValidScopes.includes(e));
      0 === eX.length ? ey(Error("No scopes were provided.")) : e.length > 0 ? ey(Error("Invalid scope: ".concat(e[0]))) : (0, k.containsDisallowedPermission)(eq) ? ey(Error("Invalid permission(s) provided.")) : e6()
    }, [e1, e6, eX, eq, eY, eg, eM]), eM instanceof Error) return {
    body: (0, a.jsx)(z.OAuth2Error, {
      message: eM.message
    })
  };
  let e5 = !1,
    e8 = !0,
    e9 = !0,
    te = !0;
  switch (ev) {
    case null:
      return {
        body: (0, a.jsx)(h.Spinner, {})
      };
    case 0:
      if (null == eK) return {
        body: (0, a.jsx)(h.Spinner, {})
      };
      l = (0, a.jsx)(W.default, {
        inApp: eS,
        application: eK,
        onSelect: e => {
          ej(e), eL(null), eD(1)
        }
      }), e8 = !1, e9 = !1, te = eS;
      break;
    case 1:
      if (null == eg || null == eF || null == eY) return {
        body: (0, a.jsx)(h.Spinner, {})
      };
      let tt = null == eM || eM instanceof Error ? {} : eM,
        tn = null == eb ? void 0 : eb.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
        ti = eY === _.ApplicationIntegrationType.GUILD_INSTALL && eX.includes(c.OAuth2Scopes.WEBHOOK_INCOMING),
        tr = ti || eY === _.ApplicationIntegrationType.GUILD_INSTALL && (eX.includes(c.OAuth2Scopes.BOT) || eX.includes(c.OAuth2Scopes.APPLICATIONS_COMMANDS));
      l = (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(F.default, {
          application: eg.application,
          accountScopes: eQ,
          requestedScopes: eX,
          integrationType: eY,
          errors: tt,
          isTrustedName: eT
        }), tr ? (0, a.jsx)(Y.default, {
          error: (null !== (n = null !== (t = tt[c.OAuth2Scopes.BOT]) && void 0 !== t ? t : tt[c.OAuth2Scopes.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
          selectedGuildId: eG,
          onGuildChange: ew,
          guilds: null != tn ? tn : [],
          disabled: "" !== eG && null != eG && !0 === ec
        }) : null, ti ? (0, a.jsx)(Z.default, {
          error: (null !== (i = tt[c.OAuth2Scopes.WEBHOOK_INCOMING]) && void 0 !== i ? i : [])[0],
          selectedChannelId: ek,
          selectedGuildId: eG,
          onChannelChange: eB
        }) : null]
      }), eX.includes(c.OAuth2Scopes.BOT) && !E.equals(eq, P.NONE) && (S = 2), e7.length > 1 && (f = 0), e5 = tr && null == eH || ti && null == ek;
      break;
    case 2:
      if (null == eg) return {
        body: (0, a.jsx)(h.Spinner, {})
      };
      l = (0, a.jsx)(H.default, {
        application: eg.application,
        permissions: eq,
        deniedPermissions: eV,
        onPermissionsChange: (e, t) => {
          ex(n => e ? E.remove(n, t) : E.add(n, t))
        },
        guild: eH
      }), f = 1
  }
  if (e8 && null != eg) {
    let e = null === (r = eg.bot) || void 0 === r ? void 0 : r.approximate_guild_count;
    N = (0, a.jsx)(x.default, {
      application: eg.application,
      scopes: eX,
      disclosures: e$,
      redirectUri: null !== (o = eg.redirect_uri) && void 0 !== o ? o : null,
      approximateGuildCount: void 0 !== e ? e : null,
      isEmbeddedFlow: ef
    })
  }
  return e9 && null != eg && null != eF && (R = (0, a.jsx)(j.default, {
    id: J,
    user: eF,
    application: eg.application,
    bot: eg.bot,
    accountScopes: eQ,
    showLogout: eE || !1,
    location: eO,
    isTrustedName: eT
  })), te && (g = (0, a.jsxs)("div", {
    className: q.footer,
    children: [null != f ? (0, a.jsx)(T.Button, {
      look: T.Button.Looks.LINK,
      color: T.Button.Colors.PRIMARY,
      onClick: () => eD(f),
      children: Q.default.Messages.BACK
    }) : (0, a.jsx)(T.Button, {
      look: T.Button.Looks.LINK,
      color: T.Button.Colors.PRIMARY,
      onClick: () => e3(!1),
      children: Q.default.Messages.CANCEL
    }), 0 !== ev ? null != S ? (0, a.jsx)(T.Button, {
      onClick: () => eD(S),
      disabled: e5,
      children: Q.default.Messages.CONTINUE
    }) : (0, a.jsx)(T.Button, {
      onClick: () => e3(!0),
      disabled: e5,
      submitting: eP,
      children: Q.default.Messages.AUTHORIZE
    }) : null]
  })), {
    header: R,
    body: l,
    footer: g,
    nextStep: S,
    appDetails: N,
    sendAuthorize: e3
  }
}

function ei(e, t) {
  if (null == t.location || null != e && e(t)) return;
  let {
    host: n,
    path: i,
    query: r
  } = d.parse(t.location, !0), s = U.default.isDiscordHostname(n) || window.location.host === n;
  if (s && i === X.Routes.OAUTH2_AUTHORIZED)(0, f.openModal)(e => (0, a.jsx)(K.OAuth2Modal, {
    ...e,
    "aria-labelledby": J,
    children: (0, a.jsx)(z.OAuth2AuthorizedSuccess, {
      guild: t.guild,
      application: t.application,
      onClose: e.onClose
    })
  }));
  else if (s && (null == i ? void 0 : i.startsWith(X.Routes.OAUTH2_ERROR)))(0, f.openModal)(e => {
    let t = r.error_description || r.error || Q.default.Messages.OAUTH2_UNKNOWN_ERROR;
    return Array.isArray(t) && (t = t[0]), (0, a.jsx)(K.OAuth2Modal, {
      ...e,
      "aria-labelledby": J,
      children: (0, a.jsx)(z.OAuth2Error, {
        message: t,
        onClose: e.onClose
      })
    })
  });
  else {
    var o;
    null === (o = window.open(t.location, "_blank")) || void 0 === o || o.focus()
  }
}

function er(e, t) {
  if ((0, g.isMidjourneyOnboardingFlow)("create-guild-and-oauth2-modal")) {
    R.default.openCreateGuildModal({
      onSuccess: n => ea({
        ...e,
        guildId: n
      }, t)
    });
    return
  }
  ea(e, t)
}

function ea(e, t) {
  (0, f.openModal)(t => (0, a.jsx)(ee, {
    ...t,
    ...e,
    cancelCompletesFlow: !1,
    callback: ei.bind(null, e.callback)
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
  } = d.parse(e);
  return null != i && null != r && (U.default.isDiscordHostname(t) || n === window.location.host) && (i.startsWith("/api".concat(X.Endpoints.OAUTH2_AUTHORIZE)) || i.startsWith(X.Routes.OAUTH2_AUTHORIZE)) ? (0, b.parseOAuth2AuthorizeProps)(r) : null
}(r = i || (i = {}))[r.SELECT_INSTALL_TYPE = 0] = "SELECT_INSTALL_TYPE", r[r.AUTHORIZE_SCOPES = 1] = "AUTHORIZE_SCOPES", r[r.AUTHORIZE_BOT_PERMISSIONS = 2] = "AUTHORIZE_BOT_PERMISSIONS"