"use strict";
a.r(t), a("653041"), a("47120");
var l = a("735250"),
  n = a("470079"),
  s = a("803997"),
  i = a.n(s),
  d = a("91192"),
  r = a("442837"),
  u = a("481060"),
  o = a("749210"),
  c = a("112724"),
  f = a("393238"),
  m = a("131388"),
  h = a("724757"),
  g = a("325708"),
  E = a("923029"),
  _ = a("213557"),
  I = a("252618"),
  x = a("688465"),
  S = a("276438"),
  v = a("642101"),
  C = a("931261"),
  N = a("333323"),
  p = a("647341"),
  T = a("984370"),
  A = a("359110"),
  j = a("14091"),
  M = a("6025"),
  D = a("897473"),
  F = a("900157"),
  L = a("433355"),
  R = a("828695"),
  b = a("430824"),
  G = a("496675"),
  O = a("768119"),
  y = a("356842"),
  H = a("612418"),
  k = a("502568"),
  U = a("480739"),
  w = a("626135"),
  P = a("601561"),
  B = a("859802"),
  V = a("744178"),
  W = a("601410"),
  K = a("511642"),
  z = a("88476"),
  Y = a("325667"),
  Z = a("147873"),
  X = a("225478"),
  J = a("867403"),
  q = a("217351"),
  Q = a("638848"),
  $ = a("644080"),
  ee = a("188904"),
  et = a("981631"),
  ea = a("176505"),
  el = a("369701"),
  en = a("689938"),
  es = a("362656"),
  ei = a("121950"),
  ed = a("186223");
let er = 936,
  eu = n.memo(function(e) {
    let {
      guild: t,
      seenManagerRef: a
    } = e, n = function(e, t) {
      let a = (0, r.useStateFromStores)([G.default], () => G.default.can(et.Permissions.MANAGE_MESSAGES, e), [e]),
        n = [];
      return n.push((0, l.jsx)(k.Icon, {
        tooltip: en.default.Messages.REFRESH,
        icon: H.default,
        onClick: function() {
          (0, S.fetchGuildFeed)({
            guildId: e.id,
            refresh: !0,
            flushSeenItems: () => {
              var e;
              return null === (e = t.current) || void 0 === e ? void 0 : e.maybeFlushSeenItems(U.ForceFlushType.IMMEDIATE)
            }
          })
        }
      })), a && n.push((0, l.jsx)(p.default, {
        guildId: e.id
      })), n
    }(t, a);
    return (0, l.jsxs)(T.default, {
      channelId: ea.StaticChannelRoute.GUILD_HOME,
      guildId: t.id,
      className: i()(ei.title, es.background),
      innerClassname: es.headerBarInner,
      toolbar: n,
      children: [(0, l.jsx)(T.default.Icon, {
        icon: y.default,
        "aria-hidden": !0
      }), (0, l.jsxs)(T.default.Title, {
        children: [(0, l.jsx)(u.HiddenVisually, {
          children: t.name
        }), en.default.Messages.GUILD_HOME]
      }), (0, l.jsx)(x.default, {})]
    })
  }),
  eo = n.memo(function(e) {
    let {
      guild: t,
      containerHeight: a,
      isUsingCollapsedLayout: s
    } = e, [i, d] = n.useState(0), {
      ref: r,
      height: o
    } = (0, f.default)();
    (0, z.default)(t.id), n.useEffect(() => {
      if (null != o) d(o + 128 - a)
    }, [a, o]);
    let c = (0, u.useFocusJumpSection)(),
      {
        hasNewHeader: m
      } = V.GuildHomeHeaderRedesignExperiment.useExperiment({
        guildId: t.id,
        location: "69386d_3"
      }, {
        autoTrackExposure: !1
      });
    return (0, l.jsx)("aside", {
      className: es.widgets,
      style: {
        top: Math.min(-i, m ? -48 : 0)
      },
      children: (0, l.jsx)(u.FocusRing, {
        children: (0, l.jsxs)("div", {
          className: es.widgetsContainer,
          ref: r,
          tabIndex: s ? void 0 : 0,
          "aria-label": en.default.Messages.GUILD_HOME_SIDEBAR_A11Y_LABEL,
          ...s ? {} : c,
          children: [m ? (0, l.jsx)(ee.default, {
            guild: t
          }) : (0, l.jsx)(Q.default, {
            guild: t
          }), (0, l.jsx)(X.default, {
            guildId: t.id,
            isUsingCollapsedLayout: s
          }), (0, l.jsx)(q.default, {
            guild: t
          })]
        })
      })
    })
  });

function ec(e) {
  let t, {
      pageWidth: a,
      onSidebarResize: n
    } = e,
    s = (0, r.useStateFromStores)([L.default], () => L.default.getSidebarState(ea.StaticChannelRoute.GUILD_HOME));
  if (null == s) return null;
  let i = a - et.CHANNEL_SIDEBAR_WIDTH - 552;
  return s.type === D.SidebarType.VIEW_THREAD ? t = (0, l.jsx)(F.default, {
    channelId: s.channelId,
    baseChannelId: ea.StaticChannelRoute.GUILD_HOME,
    channelViewSource: "Home View"
  }) : s.type === D.SidebarType.VIEW_CHANNEL && (t = (0, l.jsx)(_.default, {
    channelId: s.channelId,
    baseChannelId: ea.StaticChannelRoute.GUILD_HOME,
    channelViewSource: "Home View"
  })), (0, l.jsx)(g.default, {
    sidebarType: g.ChatSidebarType.HomeSidebar,
    maxWidth: i,
    onWidthChange: n,
    children: t
  })
}
let ef = [{
  label: "Segment Reads",
  value: el.GuildFeedRenderMode.SEGMENTED_READ
}, {
  label: "Top",
  value: el.GuildFeedRenderMode.TOP
}, {
  label: "New",
  value: el.GuildFeedRenderMode.NEW
}];

function em(e) {
  let {
    renderMode: t,
    setRenderMode: a
  } = e, {
    showSelector: n
  } = B.GuildFeedRenderSelectorExperiment.useExperiment({
    location: "69386d_4"
  }, {
    autoTrackExposure: !1
  });
  return n ? (0, l.jsx)(u.Select, {
    className: es.selector,
    options: ef,
    select: a,
    isSelected: e => e === t,
    serialize: e => String(e)
  }) : null
}
let eh = (0, c.default)(function(e) {
    let {
      guild: t,
      width: a,
      height: s
    } = e, o = t.id, c = (0, r.useStateFromStores)([L.default], () => L.default.getSection(ea.StaticChannelRoute.GUILD_HOME)), g = (0, r.useStateFromStores)([O.default], () => O.default.getCurrentSearchId()), [E, _] = n.useState(!1), [x, S] = n.useState(et.DEFAULT_CHAT_SIDEBAR_WIDTH), C = c === et.ChannelSections.SEARCH, N = c === et.ChannelSections.SIDEBAR_CHAT, p = C || N, T = n.useRef(null), A = (0, h.default)("top-messages", T), {
      ref: D
    } = (0, f.default)(), [F, R] = n.useState(el.GuildFeedRenderMode.SEGMENTED_READ), b = (0, m.default)(el.COLLAPSED_SIZE_MEDIA_QUERY), G = n.useRef(!1), {
      hasNewHeader: y
    } = V.GuildHomeHeaderRedesignExperiment.useExperiment({
      guildId: o,
      location: "69386d_5"
    }, {
      autoTrackExposure: !1
    }), {
      homeHeaderScroll: H
    } = (0, $.useHomeHeader)(t);
    n.useEffect(() => {
      G.current = !1
    }, [o]), n.useEffect(() => {
      null == v.default.getLoadId(o) && M.default.closeChannelSidebar(ea.StaticChannelRoute.GUILD_HOME)
    }, [o]), (0, Z.default)(o), n.useLayoutEffect(() => {
      var e, t;
      let a = W.default.getSavedScrollPosition(o);
      return y && (0 === a || null == a) ? null === (e = T.current) || void 0 === e || e.scrollTo({
        to: H
      }) : null != a && (null === (t = T.current) || void 0 === t || t.scrollTo({
        to: a
      })), () => {
        var e;
        let t = null === (e = T.current) || void 0 === e ? void 0 : e.getScrollerState();
        null != t && (0, P.saveGuildHomeScrollPosition)(o, t.scrollTop)
      }
    }, [o, y, H]);
    let k = a - et.CHANNEL_SIDEBAR_WIDTH - x,
      U = !(p && k < er) || b,
      z = n.useRef(null),
      Y = n.useCallback(() => {
        !G.current && ((0, K.ackGuildHome)(o), G.current = !0, w.default.track(et.AnalyticEvents.HOME_FIRST_SCROLL_STARTED, {
          guild_id: o,
          home_session_id: W.default.getHomeSessionId(o)
        }))
      }, [o]);
    (0, I.usePageTitle)({
      location: en.default.Messages.GUILD_HOME_HTML_TITLE.format({
        guildName: t.name
      })
    });
    let X = (0, u.useFocusJumpSection)(),
      {
        showDeprecationNotice: q
      } = B.GuildHomeDeprecationExperiment.useExperiment({
        guildId: o,
        location: "69386d_6"
      }, {
        autoTrackExposure: !1
      }),
      Q = U ? (0, l.jsx)(eo, {
        guild: t,
        containerHeight: s,
        isUsingCollapsedLayout: b
      }, "widgets") : null;
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)("div", {
        className: i()(ei.chat, es.background, {
          [ei.threadSidebarOpen]: p,
          [ei.threadSidebarFloating]: p && E
        }),
        children: [(0, l.jsx)(eu, {
          guild: t,
          seenManagerRef: z
        }), (0, l.jsxs)("div", {
          ref: D,
          className: ei.content,
          children: [(0, l.jsx)(d.ListNavigatorProvider, {
            navigator: A,
            children: (0, l.jsx)(d.ListNavigatorContainer, {
              children: e => {
                let {
                  ref: a,
                  ...n
                } = e;
                return (0, l.jsxs)(u.AdvancedScrollerAuto, {
                  customTheme: !0,
                  onScroll: Y,
                  className: i()(es.homeContainer, {
                    [es.homeContainerCollapsed]: b
                  }),
                  ref: e => {
                    var t;
                    T.current = e, a.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null
                  },
                  ...n,
                  ...X,
                  children: [y && (0, l.jsx)($.default, {
                    guild: t
                  }), b ? Q : null, (0, l.jsxs)("div", {
                    className: es.homeContent,
                    children: [q && !t.hasFeature(et.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE) && (0, l.jsxs)("div", {
                      className: es.deprecationNotice,
                      children: [(0, l.jsxs)("div", {
                        className: es.__invalid_deprecationNoticeContent,
                        children: [(0, l.jsx)(u.Heading, {
                          className: es.heading,
                          variant: "heading-lg/semibold",
                          color: "always-white",
                          children: en.default.Messages.GUILD_HOME_DEPRECATION_TITLE
                        }), (0, l.jsx)(u.Text, {
                          variant: "text-md/normal",
                          color: "always-white",
                          children: en.default.Messages.GUILD_HOME_DEPRECATION_DESCRIPTION
                        })]
                      }), (0, l.jsx)("img", {
                        width: 180,
                        className: es.__invalid_image,
                        src: ed,
                        alt: "",
                        "aria-hidden": !0
                      })]
                    }), (0, l.jsx)(u.HeadingLevel, {
                      component: (0, l.jsxs)("div", {
                        className: es.topMessagesHeader,
                        children: [(0, l.jsx)(u.Heading, {
                          variant: "heading-md/semibold",
                          children: en.default.Messages.GUILD_FEED_TITLE
                        }), (0, l.jsx)(em, {
                          renderMode: F,
                          setRenderMode: R
                        })]
                      }),
                      children: (0, l.jsx)(J.default, {
                        guild: t,
                        renderMode: F,
                        scrollerRef: T,
                        seenManagerRef: z
                      })
                    })]
                  }), b ? null : Q]
                })
              }
            })
          }), C && null != g && (0, l.jsx)(j.default, {
            searchId: g
          })]
        })]
      }), N ? (0, l.jsx)(ec, {
        pageWidth: a,
        onSidebarResize: (e, t) => {
          _(t), S(e)
        }
      }) : null]
    })
  }),
  eg = (0, c.default)(N.default);
t.default = function(e) {
  let {
    guildId: t
  } = e, a = (0, r.useStateFromStores)([b.default], () => b.default.getGuild(t), [t]), s = (0, Y.default)(), i = (0, r.useStateFromStores)([R.default], () => R.default.hasLoadedExperiments), d = (0, C.useCanSeeOnboardingHome)(t);
  return (n.useLayoutEffect(() => {
    (0, P.ensureGuildHomeSession)(t)
  }, [t]), n.useEffect(() => {
    if (!i) return;
    let e = W.default.getHomeSessionSource(t),
      a = (0, B.canSeeGuildHome)(t) || d;
    if (null != s) {
      let {
        channelId: t,
        messageId: l
      } = s;
      if (!a) {
        (0, A.transitionToMessage)(t, l);
        return
      }
      e = el.GuildHomeLandingSource.HIGHLIGHTS
    } else if (!a) {
      o.default.escapeToDefaultChannel(t);
      return
    }(0, P.trackGuildHomeOpened)(t, e)
  }, [t, s, i, d]), null == a) ? (0, l.jsx)(E.default, {
    channelId: void 0
  }) : d ? (0, l.jsx)(eg, {
    guild: a
  }) : (0, l.jsx)(eh, {
    guild: a
  })
}