"use strict";
n.r(t), n.d(t, {
  WelcomeMessageCTA: function() {
    return D
  },
  default: function() {
    return P
  }
}), n("222007"), n("424973");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("775560"),
  o = n("458960"),
  u = n("446674"),
  d = n("151426"),
  c = n("77078"),
  f = n("634634"),
  h = n("716241"),
  C = n("299285"),
  p = n("983444"),
  m = n("592407"),
  E = n("970700"),
  g = n("271938"),
  S = n("305961"),
  T = n("697218"),
  A = n("461380"),
  _ = n("36694"),
  M = n("659500"),
  I = n("701909"),
  N = n("773336"),
  v = n("299039"),
  x = n("172554"),
  L = n("49111"),
  y = n("188631"),
  R = n("782340"),
  O = n("658561");

function D(e) {
  let {
    className: t,
    iconUrl: n,
    icon: l,
    header: r,
    completed: o,
    onClick: u
  } = e, [d, h] = a.useState(!1), C = (0, f.default)(o);
  return a.useEffect(() => {
    null != C && o !== C && (h(!0), setTimeout(() => h(!1), 1e3))
  }, [o, C]), (0, s.jsxs)(c.Clickable, {
    className: i(t, O.card, {
      [O.completed]: o
    }),
    onClick: u,
    children: [null != l ? l : (0, s.jsx)("div", {
      className: O.icon,
      style: {
        backgroundImage: "url('".concat(n, "')")
      }
    }), (0, s.jsx)(c.Text, {
      color: "header-primary",
      className: i(O.cardTextContainer, O.cardHeader),
      variant: "text-sm/normal",
      children: r
    }), o ? (0, s.jsx)(_.default, {
      className: i(O.checkmark, {
        [O.animate]: d
      })
    }) : (0, s.jsx)(A.default, {
      className: O.arrow,
      direction: A.default.Directions.RIGHT
    })]
  })
}

function P(e) {
  let {
    channel: t
  } = e, l = (0, u.useStateFromStores)([S.default], () => null != t ? S.default.getGuild(t.getGuildId()) : null, [t]), f = null != l && v.default.extractTimestamp(l.id) < Date.now() - L.WELCOME_OLD_GUILD_AGE_THRESHOLD, A = (0, u.useStateFromStores)([g.default], () => (null == l ? void 0 : l.ownerId) === g.default.getId(), [l]), {
    canInvite: _,
    canManageGuild: P,
    canMessage: b
  } = (0, p.usePermissions)(t, l), j = (0, u.useStateFromStores)([T.default], () => {
    var e, t;
    return (null === (e = T.default.getCurrentUser()) || void 0 === e ? void 0 : e.desktop) === !0 || (null === (t = T.default.getCurrentUser()) || void 0 === t ? void 0 : t.mobile) === !0
  }), {
    guildPopulated: k,
    guildMessaged: F,
    guildPersonalized: H
  } = (0, p.useCompletedStates)(l), {
    handleInvite: U,
    handleMessage: G,
    handlePersonalize: B,
    handleDownload: V,
    handleAddApplication: w
  } = function(e) {
    let t = a.useCallback(() => {
        h.default.trackWithMetadata(L.AnalyticEvents.SERVER_SETUP_CTA_CLICKED, {
          setup_type: y.AnalyticsSetupTypes.CHANNEL_WELCOME,
          action: y.AnalyticsActions.INVITE
        }), null != e && (0, c.openModalLazy)(async () => {
          let {
            default: t
          } = await n.el("310688").then(n.bind(n, "310688"));
          return n => (0, s.jsx)(t, {
            ...n,
            guild: e,
            source: L.InstantInviteSources.CHANNEL_WELCOME,
            analyticsLocation: {
              section: L.AnalyticsSections.CHANNEL_WELCOME_CTA
            }
          })
        })
      }, [e]),
      l = a.useCallback(() => {
        h.default.trackWithMetadata(L.AnalyticEvents.SERVER_SETUP_CTA_CLICKED, {
          setup_type: y.AnalyticsSetupTypes.CHANNEL_WELCOME,
          action: y.AnalyticsActions.SEND_MESSAGE
        }), M.ComponentDispatch.dispatch(L.ComponentActions.TEXTAREA_FOCUS, {
          highlight: !0,
          channelId: L.EMPTY_STRING_SNOWFLAKE_ID
        })
      }, []),
      i = a.useCallback(() => {
        h.default.trackWithMetadata(L.AnalyticEvents.SERVER_SETUP_CTA_CLICKED, {
          setup_type: y.AnalyticsSetupTypes.CHANNEL_WELCOME,
          action: y.AnalyticsActions.PERSONALIZE_SERVER
        }), null != e && m.default.open(e.id, L.GuildSettingsSections.OVERVIEW, {
          section: L.AnalyticsSections.CHANNEL_WELCOME_CTA
        })
      }, [e]),
      r = a.useCallback(() => {
        h.default.trackWithMetadata(L.AnalyticEvents.SERVER_SETUP_CTA_CLICKED, {
          setup_type: y.AnalyticsSetupTypes.CHANNEL_WELCOME,
          action: y.AnalyticsActions.DOWNLOAD
        }), (0, c.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("649486").then(n.bind(n, "649486"));
          return t => (0, s.jsx)(e, {
            source: L.AnalyticsSections.CHANNEL_WELCOME_CTA,
            ...t
          })
        })
      }, []),
      o = a.useCallback(() => {
        null != e && (h.default.trackWithMetadata(L.AnalyticEvents.SERVER_SETUP_CTA_CLICKED, {
          setup_type: y.AnalyticsSetupTypes.CHANNEL_WELCOME,
          action: y.AnalyticsActions.ADD_APP
        }), (0, c.openModalLazy)(async () => {
          let {
            default: t
          } = await n.el("881892").then(n.bind(n, "881892"));
          return n => {
            var a;
            return (0, s.jsx)(t, {
              guildId: null !== (a = e.id) && void 0 !== a ? a : "",
              ...n,
              analyticsType: d.DismissibleContent.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL
            })
          }
        }))
      }, [e]);
    return {
      handleInvite: t,
      handleMessage: l,
      handlePersonalize: i,
      handleDownload: r,
      handleAddApplication: o
    }
  }(l), W = !(j || k || F || H), {
    titleAnimatedStyle: Z,
    opacities: z
  } = function(e) {
    let t = (0, r.useLazyValue)(() => new o.default.Value(0)),
      n = (0, r.useLazyValue)(() => new o.default.Value(0)),
      s = [];
    s.push((0, r.useLazyValue)(() => new o.default.Value(0))), s.push((0, r.useLazyValue)(() => new o.default.Value(0))), s.push((0, r.useLazyValue)(() => new o.default.Value(0))), s.push((0, r.useLazyValue)(() => new o.default.Value(0))), a.useEffect(() => {
      o.default.stagger(300, [o.default.parallel([o.default.timing(n, {
        toValue: 1,
        duration: 450
      }), o.default.timing(t, {
        toValue: 1,
        duration: 450
      })]), o.default.stagger(100, [o.default.timing(s[0], {
        toValue: 1,
        duration: 300
      }), o.default.timing(s[1], {
        toValue: 1,
        duration: 300
      }), o.default.timing(s[2], {
        toValue: 1,
        duration: 300
      }), o.default.timing(s[3], {
        toValue: 1,
        duration: 300
      })])]).start()
    }, [n, t, s]);
    let l = e ? {
      transform: [{
        translateY: t.interpolate({
          inputRange: [0, 1],
          outputRange: ["-20px", "0px"]
        })
      }],
      opacity: n
    } : {};
    return {
      titleAnimatedStyle: l,
      opacities: s
    }
  }(W), K = (0, u.useStateFromStores)([C.default], () => C.default.getGuildApplicationIds(null == l ? void 0 : l.id)), Y = K.length > 0;
  if (a.useEffect(() => {
      var e;
      (0, E.fetchGuildIntegrationsApplications)(null !== (e = null == l ? void 0 : l.id) && void 0 !== e ? e : L.EMPTY_STRING_SNOWFLAKE_ID)
    }, [l]), null == l) return null;
  let X = [];
  !f && (_ && X.push((0, s.jsx)(o.default.div, {
    className: O.cardWrapper,
    style: W ? {
      opacity: z[X.length]
    } : {},
    children: (0, s.jsx)(D, {
      iconUrl: n("243826"),
      header: R.default.Messages.WELCOME_CTA_INVITE_TITLE,
      completed: k,
      onClick: U
    })
  }, "invite")), P && X.push((0, s.jsx)(o.default.div, {
    className: O.cardWrapper,
    style: W ? {
      opacity: z[X.length]
    } : {},
    children: (0, s.jsx)(D, {
      iconUrl: n("215036"),
      header: R.default.Messages.WELCOME_CTA_PERSONALIZE_TITLE,
      completed: H,
      onClick: B
    })
  }, "customize")), b && X.push((0, s.jsx)(o.default.div, {
    className: O.cardWrapper,
    style: W ? {
      opacity: z[X.length]
    } : {},
    children: (0, s.jsx)(D, {
      iconUrl: n("505873"),
      header: R.default.Messages.WELCOME_CTA_MESSAGE_TITLE,
      completed: F,
      onClick: G
    })
  }, "message")), (0, N.isWeb)() && X.push((0, s.jsx)(o.default.div, {
    className: O.cardWrapper,
    style: W ? {
      opacity: z[X.length]
    } : {},
    children: (0, s.jsx)(D, {
      iconUrl: n("238032"),
      header: R.default.Messages.WELCOME_CTA_DOWNLOAD_TITLE,
      completed: j,
      onClick: V
    })
  }, "download")), X.push((0, s.jsx)(o.default.div, {
    className: O.cardWrapper,
    style: W ? {
      opacity: z[X.length]
    } : {},
    children: (0, s.jsx)(D, {
      iconUrl: n("356451"),
      header: R.default.Messages.WELCOME_CTA_APPS_RECOMMENDATION_TITLE,
      completed: Y,
      onClick: w
    })
  }, "addapp")));
  let q = A ? R.default.Messages.WELCOME_CTA_SUBTITLE_OWNER : R.default.Messages.WELCOME_CTA_SUBTITLE_MEMBER;
  f && (q = R.default.Messages.WELCOME_CTA_SUBTITLE_EXISTING_SERVER);
  let J = "".concat(I.default.getArticleURL(L.HelpdeskArticles.GUILD_GETTING_STARTED), "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm");
  return (0, s.jsx)(x.default, {
    channelId: t.id,
    children: (0, s.jsx)("div", {
      className: O.container,
      children: (0, s.jsxs)("div", {
        className: O.inner,
        children: [(0, s.jsxs)(o.default.div, {
          style: Z,
          children: [(0, s.jsx)(c.Heading, {
            className: O.titleName,
            variant: "heading-xxl/semibold",
            children: R.default.Messages.WELCOME_CTA_TITLE.format({
              guildName: l.name
            })
          }), (0, s.jsxs)(c.Text, {
            color: "header-secondary",
            className: i({
              [O.subtitle]: !0,
              [O.noChildren]: 0 === X.length
            }),
            variant: "text-sm/normal",
            children: [q, " ", X.length > 0 ? R.default.Messages.WELCOME_CTA_SUBTITLE_ACTION_WITH_GUIDE.format({
              guideURL: J
            }) : null]
          })]
        }), X]
      })
    })
  })
}