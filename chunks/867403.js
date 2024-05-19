"use strict";
a.r(t), a.d(t, {
  default: function() {
    return b
  }
}), a("47120");
var l = a("735250"),
  n = a("470079"),
  s = a("442837"),
  i = a("276438"),
  d = a("679985"),
  r = a("757235"),
  u = a("642101"),
  o = a("330249"),
  c = a("190159"),
  f = a("45204"),
  m = a("160404"),
  h = a("451478"),
  E = a("474333"),
  g = a("480739"),
  _ = a("709054"),
  I = a("830917"),
  x = a("199140"),
  S = a("744178"),
  v = a("601410"),
  C = a("325667"),
  N = a("475167"),
  p = a("590770"),
  T = a("500082"),
  A = a("538900"),
  j = a("644080"),
  M = a("369701"),
  D = a("689938"),
  F = a("248788");
let L = n.memo(function(e) {
    let {
      guildId: t
    } = e;
    return (0, s.useStateFromStores)([m.default], () => m.default.isViewingRoles(t)) ? (0, l.jsx)(E.default, {
      messageType: E.HelpMessageTypes.WARNING,
      children: D.default.Messages.GUILD_FEED_VIEW_AS_ROLE_WARNING
    }) : null
  }),
  R = n.memo(function(e) {
    let {
      guildId: t,
      hasMoreItems: a,
      scrollerRef: s,
      error: i,
      fetchPage: d,
      onReloadClick: r
    } = e, u = n.useRef(null);
    return (n.useEffect(() => {
      var e;
      let t = u.current,
        l = null === (e = s.current) || void 0 === e ? void 0 : e.getScrollerNode();
      if (null == l || null == t || !a) return;
      let n = new IntersectionObserver(e => {
        for (let t of e) t.intersectionRatio > 0 && d()
      }, {
        root: l,
        rootMargin: "0px 0px 200px 0px",
        threshold: 0
      });
      return n.observe(t), () => {
        n.disconnect()
      }
    }, [s, u, d, t, a]), null != i) ? (0, l.jsx)(N.GuildFeedPaginationError, {
      guildId: t,
      onReloadClick: d
    }) : a ? (0, l.jsx)("div", {
      className: F.container,
      ref: u,
      children: (0, l.jsx)(p.default, {
        count: 1
      })
    }) : (0, l.jsx)(N.GuildFeedFooter, {
      guildId: t,
      onReloadClick: r
    })
  });

function b(e) {
  var t, a, m, E, D;
  let {
    guild: b,
    renderMode: G,
    scrollerRef: O,
    seenManagerRef: y
  } = e, H = (0, C.default)(), [k, U, w, P] = (0, s.useStateFromStoresArray)([u.default], () => [M.GuildFeedSectionTypes.READ, M.GuildFeedSectionTypes.UNREAD, M.GuildFeedSectionTypes.HIGHLIGHTED, M.GuildFeedSectionTypes.ALL].map(e => u.default.getFeedItemSection(b.id, e))), B = (0, s.useStateFromStores)([u.default], () => u.default.getLoadId(b.id)), V = (0, s.useStateFromStores)([v.default], () => v.default.getHomeSessionId(b.id)), {
    loading: W,
    error: K,
    fetchFresh: z,
    fetchPage: Y
  } = (0, c.default)({
    guildId: b.id,
    highlightedItemData: H
  }), {
    hasMoreItems: X
  } = (0, s.useStateFromStores)([u.default], () => u.default.getPaginationStatus(b.id)), {
    hasNewHeader: Z
  } = S.GuildHomeHeaderRedesignExperiment.useExperiment({
    guildId: b.id,
    location: "00f40d_1"
  }, {
    autoTrackExposure: !1
  }), {
    homeHeaderScroll: J
  } = (0, j.useHomeHeader)(b);
  n.useEffect(() => (d.default.initialize(), () => {
    d.default.terminate()
  }), []), n.useLayoutEffect(() => {
    if (null == B || null == V) return;
    (0, i.sendFeedShownAnalytics)(b.id);
    let e = (0, I.getMainWindowId)(),
      t = new r.default({
        guildId: b.id,
        loadId: B,
        homeSessionId: V,
        windowId: e,
        isPaused: !h.default.isFocused(e)
      });
    return t.initialize(), y.current = t, () => {
      t.terminate()
    }
  }, [y, b.id, B, V]);
  let q = function(e) {
      let [t, a] = n.useState(null);
      return n.useEffect(() => {
        var t;
        let l = null === (t = e.current) || void 0 === t ? void 0 : t.getScrollerNode();
        if (null == l) return;
        let n = new ResizeObserver(e => {
          for (let t of e) a(t.contentRect.height)
        });
        return n.observe(l), () => {
          n.disconnect()
        }
      }, [e]), t
    }(O),
    Q = n.useMemo(() => G !== M.GuildFeedRenderMode.NEW ? [] : [...P].sort((e, t) => -_.default.compare((0, o.default)(e).id, (0, o.default)(t).id)), [P, G]),
    $ = n.useCallback(async () => {
      var e;
      await (null === (e = y.current) || void 0 === e ? void 0 : e.maybeFlushSeenItems(g.ForceFlushType.IMMEDIATE)), z({
        force: !0,
        flushSeenItems: () => {
          var e;
          return null === (e = y.current) || void 0 === e ? void 0 : e.maybeFlushSeenItems(g.ForceFlushType.IMMEDIATE)
        }
      })
    }, [y, z]);
  n.useEffect(() => {
    if (W === u.LoadingStatus.LOADING_FRESH_FEED) {
      var e, t;
      Z ? null === (e = O.current) || void 0 === e || e.scrollTo({
        to: J
      }) : null === (t = O.current) || void 0 === t || t.scrollToTop()
    }
  }, [W, Z, J]);
  let ee = 0 === P.length,
    {
      showFeedback: et,
      setOnDismissedFeedback: ea
    } = (0, x.useShowFeedback)();
  if (ee) return W === u.LoadingStatus.LOADING_FRESH_FEED ? (0, l.jsx)("div", {
    className: F.container,
    children: (0, l.jsx)(p.default, {})
  }) : null != K ? (0, l.jsx)(N.GuildFeedError, {
    guildId: b.id,
    onReloadClick: $
  }) : (0, l.jsx)(N.GuildFeedEmpty, {
    guildId: b.id,
    onReloadClick: $
  });
  if (G === M.GuildFeedRenderMode.TOP) return (0, l.jsxs)("div", {
    className: F.container,
    children: [(0, l.jsx)(T.default, {
      guild: b
    }), P.map((e, t) => (0, l.jsx)(f.default, {
      guildId: b.id,
      itemId: e.id,
      scrollerHeight: q,
      scrollerRef: O,
      showFeedback: 0 === t && et,
      setOnDismissedFeedback: ea
    }, e.id)), (0, l.jsx)(R, {
      guildId: b.id,
      hasMoreItems: null != X && X,
      scrollerRef: O,
      error: K,
      fetchPage: Y,
      onReloadClick: $
    })]
  });
  if (G === M.GuildFeedRenderMode.NEW) return (0, l.jsxs)("div", {
    className: F.container,
    children: [(0, l.jsx)(T.default, {
      guild: b
    }), Q.map((e, t) => (0, l.jsx)(f.default, {
      guildId: b.id,
      itemId: e.id,
      scrollerHeight: q,
      scrollerRef: O,
      showFeedback: 0 === t && et,
      setOnDismissedFeedback: ea
    }, e.id)), (0, l.jsx)(R, {
      guildId: b.id,
      hasMoreItems: null != X && X,
      scrollerRef: O,
      error: K,
      fetchPage: Y,
      onReloadClick: $
    })]
  });
  let el = null !== (D = null !== (E = null === (t = w[0]) || void 0 === t ? void 0 : t.id) && void 0 !== E ? E : null === (a = U[0]) || void 0 === a ? void 0 : a.id) && void 0 !== D ? D : null === (m = k[0]) || void 0 === m ? void 0 : m.id;
  return (0, l.jsxs)("div", {
    className: F.container,
    children: [(0, l.jsx)(L, {
      guildId: b.id
    }), (0, l.jsx)(T.default, {
      guild: b
    }), w.map(e => (0, l.jsx)(f.default, {
      guildId: b.id,
      itemId: e.id,
      scrollerHeight: q,
      scrollerRef: O,
      showFeedback: e.id === el && et,
      setOnDismissedFeedback: ea
    }, e.id)), U.map(e => (0, l.jsx)(f.default, {
      guildId: b.id,
      itemId: e.id,
      scrollerHeight: q,
      scrollerRef: O,
      showFeedback: e.id === el && et,
      setOnDismissedFeedback: ea
    }, e.id)), k.length > 0 ? (0, l.jsx)(A.default, {}) : null, k.map(e => (0, l.jsx)(f.default, {
      guildId: b.id,
      itemId: e.id,
      scrollerHeight: q,
      scrollerRef: O,
      showFeedback: e.id === el && et,
      setOnDismissedFeedback: ea
    }, e.id)), (0, l.jsx)(R, {
      guildId: b.id,
      hasMoreItems: null != X && X,
      scrollerRef: O,
      error: K,
      fetchPage: Y,
      onReloadClick: $
    })]
  })
}