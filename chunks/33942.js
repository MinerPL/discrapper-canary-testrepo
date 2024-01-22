"use strict";
n.r(t), n.d(t, {
  OAuth2AuthorizePage: function() {
    return X
  },
  OAuth2AuthorizeModal: function() {
    return Q
  },
  OAuth2Authorize: function() {
    return Z
  },
  useOAuth2AuthorizeForm: function() {
    return J
  },
  openOAuth2ModalWithCreateGuildModal: function() {
    return ee
  },
  openOAuth2Modal: function() {
    return et
  },
  getOAuth2AuthorizeProps: function() {
    return en
  }
}), n("222007"), n("70102");
var i, s, r, a, o = n("37983"),
  l = n("884691"),
  u = n("90915"),
  d = n("746379"),
  c = n.n(d),
  f = n("316693"),
  _ = n("446674"),
  h = n("271841"),
  g = n("551042"),
  m = n("670914"),
  E = n("242670"),
  p = n("84460"),
  v = n("191225"),
  S = n("716241"),
  T = n("148217"),
  I = n("970254"),
  C = n("616265"),
  A = n("894887"),
  y = n("393414"),
  N = n("766274"),
  R = n("271938"),
  O = n("449008"),
  D = n("991170"),
  P = n("253981"),
  b = n("872825"),
  L = n("8222"),
  M = n("164386"),
  U = n("978970"),
  k = n("29479"),
  w = n("357974"),
  V = n("580363"),
  G = n("613070"),
  F = n("530487"),
  x = n("638992"),
  B = n("223934"),
  H = n("267570"),
  Y = n("941281"),
  j = n("49111"),
  W = n("954016"),
  K = n("782340"),
  z = n("392507");
let q = "oauth2-authorize-header-id";

function X() {
  let e = (0, u.useLocation)(),
    t = l.useMemo(() => (0, b.parseOAuth2AuthorizeProps)(e.search), [e.search]);
  return (0, T.default)(), (0, o.jsx)(H.OAuth2Page, {
    children: (0, o.jsx)(Z, {
      ...t,
      showLogout: !0
    })
  })
}

function Q(e) {
  let {
    transitionState: t,
    ...n
  } = e;
  return (0, o.jsx)(H.OAuth2Modal, {
    transitionState: t,
    "aria-labelledby": q,
    children: (0, o.jsx)(Z, {
      ...n,
      scrollable: !0
    })
  })
}

function Z(e) {
  let {
    scrollable: t,
    ...n
  } = e, {
    header: i,
    body: s,
    footer: r,
    nextStep: a,
    appDetails: l
  } = J(n), u = (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsxs)("div", {
      className: z.content,
      children: [i, s, null == a ? l : null]
    }), r]
  });
  return t ? (0, o.jsx)("div", {
    className: z.authorize,
    children: (0, o.jsx)(m.ScrollerThin, {
      orientation: "auto",
      children: u
    })
  }) : (0, o.jsx)("div", {
    className: z.authorize,
    children: (0, o.jsx)("div", {
      children: u
    })
  })
}

function J(e) {
  var t, n, i, s, r, a, d, g;
  let m, T, C, {
      clientId: A,
      scopes: H,
      responseType: X,
      redirectUri: Q,
      codeChallenge: Z,
      codeChallengeMethod: J,
      state: $,
      guildId: ee,
      channelId: et,
      permissions: en,
      prompt: ei,
      disableGuildSelect: es,
      showLogout: er = !1,
      authorization: ea,
      callback: eo,
      callbackWithoutPost: el,
      onClose: eu,
      cancelCompletesFlow: ed = !0,
      isTrustedName: ec = !1,
      isEmbeddedFlow: ef = !1,
      userInstall: e_ = !1
    } = e,
    eh = l.useMemo(() => (0, b.filterScopes)(H), [H]),
    eg = (0, u.useLocation)(),
    em = I.default.useExperiment({
      location: "auth web"
    }),
    eE = em.userAppsTreatment === I.UserAppsTreatment.ALLOWED;
  !eE && (e_ = !1);
  let [ep, ev] = l.useState(0), [eS, eT] = l.useState(null), [eI, eC] = l.useState(D.default.NONE), [eA, ey] = l.useState(1), [eN, eR] = l.useState(null), [eO] = l.useState(k.OrderedAccountScopes.filter(e => eh.includes(e))), [eD, eP] = l.useState(null != ee ? ee : null), [eb, eL] = l.useState(null != et ? et : null), [eM, eU] = l.useState(!1), ek = l.useMemo(() => {
    var e;
    return null == eS ? void 0 : null === (e = eS.guilds) || void 0 === e ? void 0 : e.find(e => e.id === eD)
  }, [null == eS ? void 0 : eS.guilds, eD]), ew = (0, _.useStateFromStoresObject)([p.default, v.default], () => {
    var e, t;
    let n;
    let i = null === (e = v.default.getSelfEmbeddedActivities().values().next()) || void 0 === e ? void 0 : e.value,
      s = p.default.getIsEnabled();
    return (0, O.isNotNullish)(i) && (n = v.default.getShelfActivities(i.guildId).find(e => e.application_id === i.application_id), s && void 0 === n && (n = null === (t = p.default.getDeveloperShelfItems().find(e => e.id === i.application_id)) || void 0 === t ? void 0 : t.embeddedActivityConfig), (0, O.isNotNullish)(n)) ? {
      ...W.DEFAULT_EMBEDDED_ACTIVITY_CONFIG,
      ...n
    } : {}
  }), eV = Object.keys(ew).length > 0 ? ew : null, eG = l.useCallback(async e => {
    if (null != el) {
      el(e);
      return
    }
    if (!e && !ed) {
      null != eo && (eo({
        application: null == eS ? void 0 : eS.application,
        guild: ek
      }), null == eu || eu());
      return
    }
    try {
      eU(!0);
      let t = await (0, L.authorize)({
        authorize: e,
        clientId: A,
        scopes: eh,
        responseType: X,
        redirectUri: Q,
        codeChallenge: Z,
        codeChallengeMethod: J,
        state: $,
        permissions: f.default.remove(null != en ? en : D.default.NONE, eI),
        guildId: null == eD || e_ ? void 0 : eD,
        channelId: null != eb ? eb : void 0,
        userInstall: e_
      });
      if (null != eo) eo({
        application: null == eS ? void 0 : eS.application,
        location: t.location,
        guild: ek
      }), null == eu || eu();
      else if (null != t.location) {
        let {
          host: e,
          path: n
        } = c.parse(t.location);
        P.default.isDiscordHostname(e) && n === j.Routes.OAUTH2_AUTHORIZED ? (0, y.transitionTo)(j.Routes.OAUTH2_AUTHORIZED, {
          state: {
            application: null == eS ? void 0 : eS.application,
            guild: ek
          }
        }) : window.location = t.location
      } else eU(!1)
    } catch (t) {
      let e = t.body;
      (null == e ? void 0 : e.message) != null && "" !== e.message ? eR(Error(e.message)) : eR(e), ey(1), ev(2), eU(!1)
    }
  }, [eo, el, A, Z, J, eI, eu, en, Q, X, eh, eD, eb, $, ed, null == eS ? void 0 : eS.application, ek, e_]), eF = l.useRef(!1), ex = l.useCallback(async () => {
    if (0 === ep) {
      if (ev(1), !R.default.isAuthenticated()) {
        (0, L.logoutWithRedirect)(eg);
        return
      }
      if (!eF.current) {
        eF.current = !0;
        try {
          let e = null != ea ? ea : await (0, L.fetchAuthorization)({
            clientId: A,
            scopes: eh,
            responseType: X,
            redirectUri: Q,
            codeChallenge: Z,
            codeChallengeMethod: J,
            state: $,
            userInstall: eE && e_
          });
          eT((0, M.convertOAuth2Authorization)(e)), ei === w.OAuth2Prompts.NONE && e.authorized ? eG(!0) : ev(2), (0, S.trackWithMetadata)(j.AnalyticEvents.OAUTH2_AUTHORIZE_VIEWED, {
            application_id: e.application.id
          })
        } catch (n) {
          let {
            status: e,
            body: t
          } = n;
          if (401 === e) {
            (0, L.logoutWithRedirect)(eg);
            return
          }
          eR(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0]))), ev(2)
        } finally {
          eF.current = !1
        }
      }
    }
  }, [ea, A, Z, J, ep, eg, ei, Q, X, eh, eG, $, e_, eE]), eB = l.useCallback((e, t) => {
    eC(n => e ? f.default.remove(n, t) : f.default.add(n, t))
  }, []);
  l.useEffect(() => {
    let e = eh.filter(e => !k.ValidScopes.includes(e));
    0 === eh.length ? (eR(Error("No scopes were provided.")), ev(2)) : e.length > 0 ? (eR(Error("Invalid scope: ".concat(e[0]))), ev(2)) : (0, U.containsDisallowedPermission)(null != en ? en : D.default.NONE) ? (eR(Error("Invalid permission(s) provided.")), ev(2)) : ex()
  }, [ex, eh, en]);
  let eH = null != eb ? null == eS ? void 0 : null === (t = eS.channels) || void 0 === t ? void 0 : t.find(e => e.id === eb) : null,
    eY = null != eD ? null == eS ? void 0 : null === (n = eS.guilds) || void 0 === n ? void 0 : n.find(e => e.id === eD) : null;
  if (l.useEffect(() => {
      null != eS && (null != eH ? eP(null) : null == eY && (eP(null), eL(null)))
    }, [eS, eY, eH]), eN instanceof Error) return {
    body: (0, o.jsx)(Y.OAuth2Error, {
      message: eN.message
    })
  };
  if (2 !== ep || null == eS) return {
    body: (0, o.jsx)(E.Spinner, {})
  };
  let ej = new N.default(eS.user),
    eW = null === (i = eS.bot) || void 0 === i ? void 0 : i.approximate_guild_count,
    eK = !1;
  switch (eA) {
    case 1:
      let ez = null == eN || eN instanceof Error ? {} : eN,
        eq = null === (s = eS.guilds) || void 0 === s ? void 0 : s.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
        eX = eh.includes(j.OAuth2Scopes.BOT) || eh.includes(j.OAuth2Scopes.WEBHOOK_INCOMING) || eh.includes(j.OAuth2Scopes.APPLICATIONS_COMMANDS);
      m = (0, o.jsxs)(o.Fragment, {
        children: [(0, o.jsx)(G.default, {
          application: eS.application,
          accountScopes: eO,
          errors: ez,
          isTrustedName: ec
        }), null == eH && eX && !e_ ? (0, o.jsx)(x.GuildSelector, {
          error: (null !== (a = null !== (r = ez[j.OAuth2Scopes.BOT]) && void 0 !== r ? r : ez[j.OAuth2Scopes.APPLICATIONS_COMMANDS]) && void 0 !== a ? a : [])[0],
          selectedGuildId: eD,
          onGuildChange: e => {
            eP(e)
          },
          guilds: null != eq ? eq : [],
          disabled: "" !== eD && !0 === es
        }) : null, eh.includes(j.OAuth2Scopes.WEBHOOK_INCOMING) ? (0, o.jsx)(x.WebhookGuildChannelSelector, {
          error: (null !== (d = ez[j.OAuth2Scopes.WEBHOOK_INCOMING]) && void 0 !== d ? d : [])[0],
          selectedChannelId: eb,
          selectedGuildId: eD,
          onChannelChange: e => eL(e)
        }) : null]
      }), eh.includes(j.OAuth2Scopes.BOT) && !f.default.equals(en, D.default.NONE) && (C = 2);
      let eQ = null != eY && eh.includes(j.OAuth2Scopes.WEBHOOK_INCOMING) && null == eb;
      eK = !e_ && (eX && null == eY && null == eH || eQ);
      break;
    case 2:
      m = (0, o.jsx)(F.default, {
        application: eS.application,
        permissions: null != en ? en : D.default.NONE,
        deniedPermissions: eI,
        onPermissionsChange: eB,
        guild: eY
      }), T = 1
  }
  let eZ = (0, o.jsx)(V.default, {
      embeddedActivityConfig: eV,
      application: eS.application,
      scopes: eh,
      redirectUri: null !== (g = eS.redirect_uri) && void 0 !== g ? g : null,
      approximateGuildCount: void 0 !== eW ? eW : null,
      isEmbeddedFlow: ef
    }),
    eJ = (0, o.jsxs)("div", {
      className: z.footer,
      children: [null != T ? (0, o.jsx)(h.Button, {
        look: h.Button.Looks.LINK,
        color: h.Button.Colors.PRIMARY,
        onClick: () => ey(T),
        children: K.default.Messages.BACK
      }) : (0, o.jsx)(h.Button, {
        look: h.Button.Looks.LINK,
        color: h.Button.Colors.PRIMARY,
        onClick: () => eG(!1),
        children: K.default.Messages.CANCEL
      }), null != C ? (0, o.jsx)(h.Button, {
        onClick: () => ey(C),
        disabled: eK,
        children: K.default.Messages.CONTINUE
      }) : (0, o.jsx)(h.Button, {
        onClick: () => eG(!0),
        disabled: eK,
        submitting: eM,
        children: K.default.Messages.AUTHORIZE
      })]
    }),
    e$ = (0, o.jsx)(B.default, {
      id: q,
      user: ej,
      application: eS.application,
      bot: eS.bot,
      accountScopes: eO,
      showLogout: er || !1,
      location: eg,
      isTrustedName: ec
    });
  return {
    header: e$,
    body: m,
    footer: eJ,
    nextStep: C,
    appDetails: eZ,
    sendAuthorize: eG
  }
}

function $(e, t) {
  if (null == t.location || null != e && e(t)) return;
  let {
    host: n,
    path: i,
    query: s
  } = c.parse(t.location, !0), r = P.default.isDiscordHostname(n) || window.location.host === n;
  if (r && i === j.Routes.OAUTH2_AUTHORIZED)(0, g.openModal)(e => (0, o.jsx)(H.OAuth2Modal, {
    ...e,
    "aria-labelledby": q,
    children: (0, o.jsx)(Y.OAuth2AuthorizedSuccess, {
      guild: t.guild,
      application: t.application,
      onClose: e.onClose
    })
  }));
  else if (r && (null == i ? void 0 : i.startsWith(j.Routes.OAUTH2_ERROR)))(0, g.openModal)(e => {
    let t = s.error_description || s.error || K.default.Messages.OAUTH2_UNKNOWN_ERROR;
    return Array.isArray(t) && (t = t[0]), (0, o.jsxs)(H.OAuth2Modal, {
      ...e,
      "aria-labelledby": q,
      children: [(0, o.jsx)(Y.OAuth2Error, {
        message: t,
        onClose: e.onClose
      }), ";"]
    })
  });
  else {
    var a;
    null === (a = window.open(t.location, "_blank")) || void 0 === a || a.focus()
  }
}

function ee(e, t) {
  if ((0, A.isMidjourneyOnboardingFlow)("create-guild-and-oauth2-modal")) {
    C.default.openCreateGuildModal({
      onSuccess: n => et({
        ...e,
        guildId: n
      }, t)
    });
    return
  }
  et(e, t)
}

function et(e, t) {
  (0, g.openModal)(t => (0, o.jsx)(Q, {
    ...t,
    ...e,
    cancelCompletesFlow: !1,
    callback: $.bind(null, e.callback)
  }), {
    onCloseCallback: t
  })
}

function en(e) {
  let {
    hostname: t = "",
    host: n,
    path: i,
    query: s
  } = c.parse(e);
  return null != i && null != s && (P.default.isDiscordHostname(t) || n === window.location.host) && (i.startsWith("/api".concat(j.Endpoints.OAUTH2_AUTHORIZE)) || i.startsWith(j.Routes.OAUTH2_AUTHORIZE)) ? (0, b.parseOAuth2AuthorizeProps)(s) : null
}(r = i || (i = {}))[r.NOT_LOADED = 0] = "NOT_LOADED", r[r.LOADING = 1] = "LOADING", r[r.LOADED = 2] = "LOADED", (a = s || (s = {}))[a.INSTALL_TYPE = 0] = "INSTALL_TYPE", a[a.AUTHORIZE_SCOPES = 1] = "AUTHORIZE_SCOPES", a[a.AUTHORIZE_BOT_PERMISSIONS = 2] = "AUTHORIZE_BOT_PERMISSIONS"