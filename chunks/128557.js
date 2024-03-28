"use strict";
n.r(t), n.d(t, {
  WelcomeMessageCTA: function() {
    return j
  },
  default: function() {
    return P
  }
}), n("47120"), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("207561"),
  o = n("748780"),
  u = n("442837"),
  d = n("524437"),
  c = n("481060"),
  f = n("699682"),
  h = n("367907"),
  m = n("812206"),
  p = n("644914"),
  E = n("434404"),
  C = n("330010"),
  g = n("314897"),
  S = n("430824"),
  _ = n("594174"),
  T = n("259580"),
  I = n("263704"),
  A = n("585483"),
  v = n("63063"),
  N = n("358085"),
  x = n("709054"),
  M = n("967128"),
  R = n("981631"),
  L = n("231873"),
  y = n("689938"),
  O = n("811591");

function j(e) {
  let {
    className: t,
    iconUrl: n,
    icon: s,
    header: r,
    completed: o,
    onClick: u
  } = e, [d, h] = l.useState(!1), m = (0, f.default)(o);
  return l.useEffect(() => {
    null != m && o !== m && (h(!0), setTimeout(() => h(!1), 1e3))
  }, [o, m]), (0, a.jsxs)(c.Clickable, {
    className: i()(t, O.card, {
      [O.completed]: o
    }),
    onClick: u,
    children: [null != s ? s : (0, a.jsx)("div", {
      className: O.icon,
      style: {
        backgroundImage: "url('".concat(n, "')")
      }
    }), (0, a.jsx)(c.Text, {
      color: "header-primary",
      className: i()(O.cardTextContainer, O.cardHeader),
      variant: "text-sm/normal",
      children: r
    }), o ? (0, a.jsx)(I.default, {
      className: i()(O.checkmark, {
        [O.animate]: d
      })
    }) : (0, a.jsx)(T.default, {
      className: O.arrow,
      direction: T.default.Directions.RIGHT
    })]
  })
}

function P(e) {
  let {
    channel: t
  } = e, s = (0, u.useStateFromStores)([S.default], () => null != t ? S.default.getGuild(t.getGuildId()) : null, [t]), f = null != s && x.default.extractTimestamp(s.id) < Date.now() - R.WELCOME_OLD_GUILD_AGE_THRESHOLD, T = (0, u.useStateFromStores)([g.default], () => (null == s ? void 0 : s.ownerId) === g.default.getId(), [s]), {
    canInvite: I,
    canManageGuild: P,
    canMessage: D
  } = (0, p.usePermissions)(t, s), b = (0, u.useStateFromStores)([_.default], () => {
    var e, t;
    return (null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.desktop) === !0 || (null === (t = _.default.getCurrentUser()) || void 0 === t ? void 0 : t.mobile) === !0
  }), {
    guildPopulated: U,
    guildMessaged: F,
    guildPersonalized: w
  } = (0, p.useCompletedStates)(s), {
    handleInvite: k,
    handleMessage: H,
    handlePersonalize: B,
    handleDownload: G,
    handleAddApplication: V
  } = function(e) {
    let t = l.useCallback(() => {
        h.default.trackWithMetadata(R.AnalyticEvents.SERVER_SETUP_CTA_CLICKED, {
          setup_type: L.AnalyticsSetupTypes.CHANNEL_WELCOME,
          action: L.AnalyticsActions.INVITE
        }), null != e && (0, c.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("99387"), n.e("7654"), n.e("92893")]).then(n.bind(n, "560114"));
          return n => (0, a.jsx)(t, {
            ...n,
            guild: e,
            source: R.InstantInviteSources.CHANNEL_WELCOME,
            analyticsLocation: {
              section: R.AnalyticsSections.CHANNEL_WELCOME_CTA
            }
          })
        })
      }, [e]),
      s = l.useCallback(() => {
        h.default.trackWithMetadata(R.AnalyticEvents.SERVER_SETUP_CTA_CLICKED, {
          setup_type: L.AnalyticsSetupTypes.CHANNEL_WELCOME,
          action: L.AnalyticsActions.SEND_MESSAGE
        }), A.ComponentDispatch.dispatch(R.ComponentActions.TEXTAREA_FOCUS, {
          highlight: !0,
          channelId: R.EMPTY_STRING_SNOWFLAKE_ID
        })
      }, []),
      i = l.useCallback(() => {
        h.default.trackWithMetadata(R.AnalyticEvents.SERVER_SETUP_CTA_CLICKED, {
          setup_type: L.AnalyticsSetupTypes.CHANNEL_WELCOME,
          action: L.AnalyticsActions.PERSONALIZE_SERVER
        }), null != e && E.default.open(e.id, R.GuildSettingsSections.OVERVIEW, {
          section: R.AnalyticsSections.CHANNEL_WELCOME_CTA
        })
      }, [e]),
      r = l.useCallback(() => {
        h.default.trackWithMetadata(R.AnalyticEvents.SERVER_SETUP_CTA_CLICKED, {
          setup_type: L.AnalyticsSetupTypes.CHANNEL_WELCOME,
          action: L.AnalyticsActions.DOWNLOAD
        }), (0, c.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.resolve().then(n.bind(n, "431583"));
          return t => (0, a.jsx)(e, {
            source: R.AnalyticsSections.CHANNEL_WELCOME_CTA,
            ...t
          })
        })
      }, []);
    return {
      handleInvite: t,
      handleMessage: s,
      handlePersonalize: i,
      handleDownload: r,
      handleAddApplication: l.useCallback(() => {
        null != e && (h.default.trackWithMetadata(R.AnalyticEvents.SERVER_SETUP_CTA_CLICKED, {
          setup_type: L.AnalyticsSetupTypes.CHANNEL_WELCOME,
          action: L.AnalyticsActions.ADD_APP
        }), (0, c.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("99387"), n.e("77875")]).then(n.bind(n, "657300"));
          return n => {
            var l;
            return (0, a.jsx)(t, {
              guildId: null !== (l = e.id) && void 0 !== l ? l : "",
              ...n,
              analyticsType: d.DismissibleContent.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL
            })
          }
        }))
      }, [e])
    }
  }(s), W = !(b || U || F || w), {
    titleAnimatedStyle: Y,
    opacities: z
  } = function(e) {
    let t = (0, r.useLazyValue)(() => new o.default.Value(0)),
      n = (0, r.useLazyValue)(() => new o.default.Value(0)),
      a = [];
    return a.push((0, r.useLazyValue)(() => new o.default.Value(0))), a.push((0, r.useLazyValue)(() => new o.default.Value(0))), a.push((0, r.useLazyValue)(() => new o.default.Value(0))), a.push((0, r.useLazyValue)(() => new o.default.Value(0))), l.useEffect(() => {
      o.default.stagger(300, [o.default.parallel([o.default.timing(n, {
        toValue: 1,
        duration: 450
      }), o.default.timing(t, {
        toValue: 1,
        duration: 450
      })]), o.default.stagger(100, [o.default.timing(a[0], {
        toValue: 1,
        duration: 300
      }), o.default.timing(a[1], {
        toValue: 1,
        duration: 300
      }), o.default.timing(a[2], {
        toValue: 1,
        duration: 300
      }), o.default.timing(a[3], {
        toValue: 1,
        duration: 300
      })])]).start()
    }, [n, t, a]), {
      titleAnimatedStyle: e ? {
        transform: [{
          translateY: t.interpolate({
            inputRange: [0, 1],
            outputRange: ["-20px", "0px"]
          })
        }],
        opacity: n
      } : {},
      opacities: a
    }
  }(W), Z = (0, u.useStateFromStores)([m.default], () => m.default.getGuildApplicationIds(null == s ? void 0 : s.id)).length > 0;
  if (l.useEffect(() => {
      var e;
      (0, C.fetchGuildIntegrationsApplications)(null !== (e = null == s ? void 0 : s.id) && void 0 !== e ? e : R.EMPTY_STRING_SNOWFLAKE_ID)
    }, [s]), null == s) return null;
  let K = [];
  !f && (I && K.push((0, a.jsx)(o.default.div, {
    className: O.cardWrapper,
    style: W ? {
      opacity: z[K.length]
    } : {},
    children: (0, a.jsx)(j, {
      iconUrl: n("538548"),
      header: y.default.Messages.WELCOME_CTA_INVITE_TITLE,
      completed: U,
      onClick: k
    })
  }, "invite")), P && K.push((0, a.jsx)(o.default.div, {
    className: O.cardWrapper,
    style: W ? {
      opacity: z[K.length]
    } : {},
    children: (0, a.jsx)(j, {
      iconUrl: n("753033"),
      header: y.default.Messages.WELCOME_CTA_PERSONALIZE_TITLE,
      completed: w,
      onClick: B
    })
  }, "customize")), D && K.push((0, a.jsx)(o.default.div, {
    className: O.cardWrapper,
    style: W ? {
      opacity: z[K.length]
    } : {},
    children: (0, a.jsx)(j, {
      iconUrl: n("15717"),
      header: y.default.Messages.WELCOME_CTA_MESSAGE_TITLE,
      completed: F,
      onClick: H
    })
  }, "message")), (0, N.isWeb)() && K.push((0, a.jsx)(o.default.div, {
    className: O.cardWrapper,
    style: W ? {
      opacity: z[K.length]
    } : {},
    children: (0, a.jsx)(j, {
      iconUrl: n("435921"),
      header: y.default.Messages.WELCOME_CTA_DOWNLOAD_TITLE,
      completed: b,
      onClick: G
    })
  }, "download")), K.push((0, a.jsx)(o.default.div, {
    className: O.cardWrapper,
    style: W ? {
      opacity: z[K.length]
    } : {},
    children: (0, a.jsx)(j, {
      iconUrl: n("881454"),
      header: y.default.Messages.WELCOME_CTA_APPS_RECOMMENDATION_TITLE,
      completed: Z,
      onClick: V
    })
  }, "addapp")));
  let X = T ? y.default.Messages.WELCOME_CTA_SUBTITLE_OWNER : y.default.Messages.WELCOME_CTA_SUBTITLE_MEMBER;
  f && (X = y.default.Messages.WELCOME_CTA_SUBTITLE_EXISTING_SERVER);
  let q = "".concat(v.default.getArticleURL(R.HelpdeskArticles.GUILD_GETTING_STARTED), "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm");
  return (0, a.jsx)(M.default, {
    channelId: t.id,
    children: (0, a.jsx)("div", {
      className: O.container,
      children: (0, a.jsxs)("div", {
        className: O.inner,
        children: [(0, a.jsxs)(o.default.div, {
          style: Y,
          children: [(0, a.jsx)(c.Heading, {
            className: O.titleName,
            variant: "heading-xxl/semibold",
            children: y.default.Messages.WELCOME_CTA_TITLE.format({
              guildName: s.name
            })
          }), (0, a.jsxs)(c.Text, {
            color: "header-secondary",
            className: i()({
              [O.subtitle]: !0,
              [O.noChildren]: 0 === K.length
            }),
            variant: "text-sm/normal",
            children: [X, " ", K.length > 0 ? y.default.Messages.WELCOME_CTA_SUBTITLE_ACTION_WITH_GUIDE.format({
              guideURL: q
            }) : null]
          })]
        }), K]
      })
    })
  })
}