    "use strict";
    t.r(a), t.d(a, {
      Overlay: function() {
        return z
      },
      default: function() {
        return Q
      }
    }), t("222007");
    var s = t("37983"),
      d = t("884691"),
      n = t("522632"),
      c = t("803182"),
      i = t("90915"),
      r = t("817792"),
      o = t("815157"),
      f = t("391679"),
      l = t("446674"),
      u = t("95410"),
      p = t("795137"),
      b = t("837319"),
      h = t("73749"),
      j = t("269936"),
      m = t("231032"),
      _ = t("724349"),
      E = t("883897"),
      g = t("338027"),
      I = t("271938"),
      T = t("599110"),
      O = t("98013"),
      S = t("924822"),
      R = t("773336"),
      A = t("50885"),
      v = t("49111"),
      w = t("492397"),
      N = t("53452");
    t("292687"), t("263901"), t("278163");
    let C = (0, j.makeLazy)({
        createPromise: () => t.el("545169").then(t.bind(t, "545169")),
        webpackId: "545169",
        name: "UnsupportedBrowser"
      }),
      D = (0, j.makeLazy)({
        createPromise: () => t.el("649486").then(t.bind(t, "649486")),
        webpackId: "649486",
        name: "DownloadApps"
      }),
      L = (0, j.makeLazy)({
        createPromise: () => t.el("254936").then(t.bind(t, "254936")),
        webpackId: "254936",
        name: "InviteProxy"
      }),
      y = (0, j.makeLazy)({
        createPromise: () => t.el("456320").then(t.bind(t, "456320")),
        webpackId: "456320",
        name: "VerifyConnectedAccount"
      }),
      P = (0, j.makeLazy)({
        createPromise: () => t.el("176384").then(t.bind(t, "176384")),
        webpackId: "176384",
        name: "LinkConnectedAccount"
      }),
      M = (0, j.makeLazy)({
        createPromise: () => t.el("324202").then(t.bind(t, "324202")),
        webpackId: "324202",
        name: "LinkAuthorize"
      }),
      x = (0, j.makeLazy)({
        createPromise: () => t.el("965179").then(t.bind(t, "965179")),
        webpackId: "965179",
        name: "ActivateDevice"
      }),
      k = (0, j.makeLazy)({
        createPromise: () => t.el("779020").then(t.bind(t, "779020")),
        webpackId: "779020",
        name: "ViewsWithMainInterface",
        memo: !0,
        id: "779020"
      }),
      U = (0, j.makeLazy)({
        createPromise: () => t.el("994509").then(t.bind(t, "994509")),
        webpackId: "994509",
        name: "XboxEdu"
      }),
      G = (0, j.makeLazy)({
        createPromise: () => t.el("225936").then(t.bind(t, "225936")),
        webpackId: "225936",
        name: "XboxPin"
      }),
      V = (0, j.makeLazy)({
        createPromise: () => t.el("549869").then(t.bind(t, "549869")),
        webpackId: "549869",
        name: "ViewsWithAuth"
      }),
      H = (0, j.makeLazy)({
        createPromise: () => t.el("337863").then(t.bind(t, "337863")),
        webpackId: "337863",
        name: "ViewsWithOAuth2"
      }),
      F = (0, j.makeLazy)({
        createPromise: () => t.el("765105").then(t.bind(t, "765105")),
        webpackId: "765105",
        name: "ViewsWithUnauthenticatedApplicationDirectory"
      }),
      B = (0, j.makeLazy)({
        createPromise: () => t.el("143416").then(t.bind(t, "143416")),
        webpackId: "143416",
        name: "BrowserHandoff"
      }),
      W = (0, j.makeLazy)({
        createPromise: () => t.el("767413").then(t.bind(t, "767413")),
        webpackId: "767413",
        name: "MobileWebHandoffFallback"
      }),
      z = (0, j.makeLazy)({
        createPromise: () => t.el("476427").then(t.bind(t, "476427")),
        webpackId: "476427",
        name: "Overlay"
      }),
      K = (0, j.makeLazy)({
        createPromise: () => t.el("854908").then(t.bind(t, "854908")),
        webpackId: "854908",
        name: "SuspendedUserSafetyHubPage"
      }),
      Z = () => (0, s.jsx)(k, {}),
      Y = new Set([v.Routes.LOGIN, v.Routes.LOGIN_HANDOFF, v.Routes.INVITE_LOGIN(":inviteCode"), v.Routes.GIFT_CODE_LOGIN(":giftCode"), v.Routes.GUILD_TEMPLATE_LOGIN(":guildTemplateCode")]);

    function X(e, a) {
      return a ? e.filter(e => !Y.has(e)) : e
    }
    class q extends d.Component {
      componentDidMount() {
        A.default.cleanupDisplaySleep(), g.default.initialize()
      }
      componentWillUnmount() {
        g.default.terminate()
      }
      render() {
        let e;
        let {
          isAuthenticated: a,
          migrationStatus: t,
          skipsSettingDefaultPageTitle: d
        } = this.props;
        return e = t === _.MigrationStatus.IN_PROGRESS ? null : N.IS_APP_COMPATIBLE_BROWSER ? R.isPlatformEmbedded ? (0, s.jsxs)(i.Switch, {
          children: [(0, s.jsx)(i.Route, {
            exact: !0,
            path: v.Routes.INDEX,
            render: () => (0, s.jsx)(p.default, {})
          }), (0, s.jsx)(h.default, {
            exact: !0,
            path: v.Routes.APPS,
            component: D
          }), (0, s.jsx)(i.Route, {
            path: X([v.Routes.LOGIN, v.Routes.REGISTER, v.Routes.INVITE(":inviteCode"), v.Routes.INVITE_LOGIN(":inviteCode"), v.Routes.GIFT_CODE(":giftCode"), v.Routes.GIFT_CODE_LOGIN(":giftCode"), v.Routes.RESET], w.CONFERENCE_MODE_ENABLED),
            component: V
          }), (0, s.jsx)(h.default, {
            path: v.Routes.INVITE_PROXY(":channelId"),
            component: L
          }), (0, s.jsx)(i.Redirect, {
            from: v.Routes.INVITE(""),
            to: v.Routes.LOGIN
          }), (0, s.jsx)(i.Redirect, {
            from: v.Routes.GIFT_CODE(""),
            to: v.Routes.LOGIN
          }), (0, s.jsx)(i.Route, {
            render: Z
          })]
        }) : (0, s.jsxs)(i.Switch, {
          children: [(0, s.jsx)(h.default, {
            exact: !0,
            path: v.Routes.INDEX,
            render: () => (0, s.jsx)(p.default, {})
          }), (0, s.jsx)(i.Route, {
            path: X([v.Routes.LOGIN, v.Routes.LOGIN_HANDOFF, v.Routes.REGISTER, v.Routes.BILLING_PREFIX, v.Routes.BILLING_PROMOTION_REDEMPTION(":code"), v.Routes.INVITE(":inviteCode"), v.Routes.INVITE_LOGIN(":inviteCode"), v.Routes.GIFT_CODE(":giftCode"), v.Routes.GIFT_CODE_LOGIN(":giftCode"), v.Routes.GUILD_TEMPLATE(":guildTemplateCode"), v.Routes.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"), v.Routes.DISABLE_EMAIL_NOTIFICATIONS, v.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, v.Routes.RESET, v.Routes.REPORT, v.Routes.REPORT_SECOND_LOOK], w.CONFERENCE_MODE_ENABLED),
            component: V
          }), a ? null : (0, s.jsx)(i.Route, {
            path: v.Routes.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
            component: V
          }), a ? null : (0, s.jsx)(i.Route, {
            path: v.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"),
            component: V
          }), (0, s.jsx)(i.Redirect, {
            from: v.Routes.INVITE(""),
            to: v.Routes.LOGIN
          }), (0, s.jsx)(h.default, {
            path: v.Routes.INVITE_PROXY(":channelId"),
            component: L
          }), (0, s.jsx)(i.Redirect, {
            from: v.Routes.GIFT_CODE(""),
            to: v.Routes.LOGIN
          }), (0, s.jsx)(h.default, {
            path: v.Routes.HANDOFF,
            component: B
          }), (0, s.jsx)(h.default, {
            path: v.Routes.MOBILE_WEB_HANDOFF,
            component: W
          }), (0, s.jsx)(h.default, {
            path: v.Routes.XBOX_EDU,
            component: U
          }), (0, s.jsx)(h.default, {
            path: v.Routes.XBOX_PIN,
            component: G
          }), (0, s.jsx)(h.default, {
            path: v.Routes.CONNECTION_LINK(":type"),
            component: P
          }), (0, s.jsx)(h.default, {
            path: v.Routes.CONNECTION_LINK_AUTHORIZE(":type"),
            component: M
          }), (0, s.jsx)(h.default, {
            path: v.Routes.ACTIVATE,
            component: x
          }), (0, s.jsx)(h.default, {
            path: v.Routes.CONNECTIONS(":type"),
            component: y
          }), (0, s.jsx)(h.default, {
            path: v.Routes.DOWNLOAD_QR_CODE_REDIRECT,
            render: () => {
              var e, a, t;
              let s = null === (e = T.default.getSuperProperties()) || void 0 === e ? void 0 : e.os,
                d = (0, n.parse)((null !== (t = window.location.search) && void 0 !== t ? t : "").substr(1)),
                c = null === (a = d.referring_location) || void 0 === a ? void 0 : a.toString();
              return ("iOS" === s || "Android" === s) && T.default.track(v.AnalyticEvents.DOWNLOAD_APP, {
                platform: s,
                ptb: !1,
                released: !0,
                has_e_mail: "true" === d.has_e_mail,
                referring_location: c,
                qr_code: !0
              }), window.location.href = (0, O.getMobileDownloadLink)(null != c && "" !== c ? c : "qr_code", s), null
            }
          }), (0, s.jsx)(h.default, {
            path: v.Routes.OPEN_APP_FROM_EMAIL,
            render: () => {
              var e, a;
              let t = null === (e = T.default.getSuperProperties()) || void 0 === e ? void 0 : e.os,
                d = (0, S.getOpenAppFromEmailDestinations)(null !== (a = window.location.search) && void 0 !== a ? a : "");
              if ("iOS" !== t && "Android" !== t) return (0, s.jsx)(i.Redirect, {
                to: null != d.desktop ? "".concat(d.desktop.pathname).concat(d.desktop.search) : v.Routes.APP
              });
              {
                let e = (0, O.getMobileDownloadLink)("app_open_from_email", t, d.mobile),
                  a = (0, o.parseDynamicLink)(e);
                null != a && T.default.track(v.AnalyticEvents.DEEP_LINK_CLICKED, {
                  fingerprint: (0, f.maybeExtractId)(a.fingerprint),
                  attempt_id: a.attemptId,
                  source: a.utmSource,
                  destination: null != d.mobile ? d.mobile.toString() : null
                }), window.location.href = e
              }
            }
          }), (0, s.jsx)(i.Redirect, {
            from: v.Routes.CONNECT_AUTHORIZE,
            to: {
              ...location,
              pathname: v.Routes.OAUTH2_AUTHORIZE
            }
          }), (0, s.jsx)(i.Route, {
            path: [v.Routes.OAUTH2_AUTHORIZED, v.Routes.OAUTH2_AUTHORIZE, v.Routes.OAUTH2_ERROR, v.Routes.OAUTH2_WHITELIST_ACCEPT],
            component: H
          }), a ? null : (0, s.jsx)(i.Route, {
            path: [v.Routes.ACCOUNT_STANDING],
            component: K
          }), a ? null : (0, s.jsx)(i.Route, {
            path: v.Routes.APPLICATION_STORE,
            component: b.default
          }), a ? null : (0, s.jsx)(i.Route, {
            path: [v.Routes.APPLICATION_DIRECTORY_SEARCH, v.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section?"), v.Routes.APPLICATION_DIRECTORY],
            component: F
          }), (0, s.jsx)(i.Route, {
            render: Z
          })]
        }) : (0, s.jsx)(i.Switch, {
          children: (0, s.jsx)(h.default, {
            component: C
          })
        }), (0, s.jsxs)(m.default, {
          skipsSettingDefaultPageTitle: d,
          children: [e, R.isPlatformEmbedded && (t === _.MigrationStatus.NOT_STARTED || t === _.MigrationStatus.IN_PROGRESS) && !0 !== u.default.get(r.DOMAIN_MIGRATION_SUCCESS_KEY) ? (0, s.jsx)(E.default, {}) : null]
        })
      }
    }
    var Q = l.default.connectStores([I.default, _.default], () => ({
      isAuthenticated: I.default.isAuthenticated(),
      migrationStatus: _.default.getMigrationStatus()
    }), {
      forwardRef: !0
    })(function(e) {
      let a = function() {
        let {
          pathname: e
        } = (0, i.useLocation)(), a = (0, c.matchPath)(e, {
          path: v.Routes.APPLICATION_DIRECTORY
        });
        return null != a
      }();
      return (0, s.jsx)(q, {
        ...e,
        skipsSettingDefaultPageTitle: a
      })
    })