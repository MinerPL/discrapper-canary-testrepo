"use strict";
a.r(t), a.d(t, {
  default: function() {
    return k
  }
}), a("47120");
var l = a("735250"),
  n = a("470079"),
  s = a("120356"),
  i = a.n(s),
  d = a("392711"),
  r = a("91192"),
  u = a("536895"),
  o = a("442837"),
  c = a("481060"),
  f = a("393238"),
  m = a("410030"),
  h = a("724757"),
  E = a("465029"),
  g = a("370094"),
  _ = a("924301"),
  I = a("554747"),
  x = a("938475"),
  S = a("259580"),
  v = a("626135"),
  C = a("580079"),
  N = a("601410"),
  p = a("14080"),
  T = a("679184"),
  A = a("590714"),
  j = a("180156"),
  M = a("923702"),
  D = a("458513"),
  F = a("981631"),
  L = a("689938"),
  R = a("49665"),
  b = a("231907"),
  G = a("688644");
let O = {
  overflowX: void 0,
  overflowY: void 0
};

function y() {
  let e = (0, m.default)();
  return (0, l.jsxs)("div", {
    className: R.emptyStateContainer,
    children: [(0, l.jsx)("img", {
      className: R.image,
      src: "dark" === e ? b : G,
      width: 154,
      height: 48,
      alt: ""
    }), (0, l.jsx)(c.Heading, {
      className: R.title,
      variant: "heading-md/semibold",
      children: L.default.Messages.ACTIVE_CHANNELS_EMPTY_TITLE
    }), (0, l.jsx)(c.Text, {
      className: R.subtitle,
      color: "header-secondary",
      variant: "text-sm/normal",
      children: L.default.Messages.ACTIVE_CHANNELS_EMPTY_SUBTITLE
    })]
  })
}

function H(e) {
  let {
    isUsingCollapsedLayout: t,
    scrollerRef: a,
    handleScroll: n,
    activeChannels: s,
    totalActiveChannels: i
  } = e, d = (0, h.default)("active-channels", a, {
    orientation: t ? u.Orientations.HORIZONTAL : u.Orientations.VERTICAL
  });
  return (0, l.jsx)(r.ListNavigatorProvider, {
    navigator: d,
    children: (0, l.jsx)(r.ListNavigatorContainer, {
      children: e => {
        let {
          ref: d,
          ...r
        } = e;
        return (0, l.jsxs)(c.AdvancedScrollerNone, {
          className: R.channelList,
          orientation: "horizontal",
          paddingFix: !1,
          onScroll: n,
          style: t ? void 0 : O,
          ref: e => {
            var t;
            a.current = e, d.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null, n()
          },
          ...r,
          children: [s, t && i < 4 && (0, l.jsx)(T.ActiveNowFiller, {})]
        })
      }
    })
  })
}

function k(e) {
  let {
    guildId: t,
    isUsingCollapsedLayout: a
  } = e, s = (0, o.useStateFromStores)([C.default], () => C.default.getActiveChannelsFetchStatus(t)), r = (0, p.useActiveTextChannels)(t), u = (0, I.useGuildActiveEvent)(t), m = (0, o.useStateFromStores)([x.default], () => x.default.getVoiceStates(t)), h = (0, p.useActiveVoiceChannels)(t, u), T = r.length + h.length + (null != u ? 1 : 0), b = T > 0, G = n.useRef(null), O = (0, I.default)(t).filter(e => !(0, _.isGuildScheduledEventActive)(e)), [k, U] = n.useState(0 === O.length), [w, P] = n.useState(!0), [B, V] = n.useState(!1), {
    ref: W,
    width: K
  } = (0, f.default)(), z = n.useCallback(() => {
    let {
      current: e
    } = G;
    if (null == e || null == K) return;
    let {
      scrollLeft: t,
      scrollWidth: a
    } = e.getScrollerState();
    P(t <= 0), V(t >= a - K - 1)
  }, [K]), Y = n.useCallback(() => {
    let {
      current: e
    } = G;
    if (null == e || null == K) return;
    let {
      scrollLeft: t
    } = e.getScrollerState(), a = K + 12, l = Math.max(.25 * K - 9, 140);
    e.scrollTo({
      to: Math.max(0, Math.ceil((t - a) / l) * l),
      animate: !0
    })
  }, [K]), X = n.useCallback(() => {
    let {
      current: e
    } = G;
    if (null == e || null == K) return;
    let {
      scrollLeft: t,
      scrollWidth: a
    } = e.getScrollerState(), l = K + 12, n = Math.max(.25 * K - 9, 140);
    e.scrollTo({
      to: Math.min(a, Math.floor((t + l) / n) * n),
      animate: !0
    })
  }, [K]);
  n.useEffect(() => {
    C.default.shouldFetch(t) && (0, E.fetchActiveChannels)(t)
  }, [t]), (0, g.default)(t, r, h);
  let Z = n.useCallback(e => {
      v.default.track(F.AnalyticEvents.ACTIVE_CHANNEL_CLICKED, {
        guild_id: e.guild_id,
        channel_id: e.id,
        channel_type: e.type,
        text_channels_shown: r.length,
        voice_channels_shown: h.length,
        home_session_id: N.default.getHomeSessionId(e.guild_id)
      })
    }, [r, h]),
    J = r.map(e => (0, l.jsx)(j.default, {
      guildId: t,
      channel: e,
      trackChannelClick: Z
    }, e.id)),
    q = h.map(e => (0, l.jsx)(M.default, {
      guildId: t,
      channel: e,
      voiceStates: m[e.id],
      trackChannelClick: Z,
      showPreview: !a
    }, e.id)),
    Q = [];
  if (a) Q = [...J, ...q];
  else if (k) Q = d.compact([null != u && (0, l.jsx)(D.default, {
    event: u,
    isInList: !0
  }, "event"), ...J.slice(0, 10), ...q]);
  else {
    let e = d.take(J, 3 - (q.length > 0 ? 1 : 0) - (null != u ? 1 : 0)),
      t = d.take(q, 3 - e.length - (null != u ? 1 : 0));
    Q = d.compact([null != u && (0, l.jsx)(D.default, {
      event: u,
      isInList: !0
    }, "event"), ...e, ...t])
  }
  return (0, l.jsx)("div", {
    ref: W,
    className: R.container,
    children: (0, l.jsxs)(c.HeadingLevel, {
      component: (0, l.jsxs)("div", {
        className: R.header,
        children: [(0, l.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: L.default.Messages.ACTIVE_CHANNELS_HEADER
        }), !a && (null == s ? void 0 : s.loading) !== !0 && T > 3 && (0, l.jsx)(c.Clickable, {
          onClick: () => U(!k),
          children: (0, l.jsx)(c.Text, {
            className: R.showAll,
            variant: "text-sm/normal",
            children: k ? L.default.Messages.GUILD_HOME_SEE_LESS : L.default.Messages.GUILD_HOME_SEE_ALL.format({
              count: T
            })
          })
        })]
      }),
      children: [(null == s ? void 0 : s.loading) ? (0, l.jsx)(c.AdvancedScrollerNone, {
        className: R.channelList,
        orientation: "horizontal",
        paddingFix: !1,
        children: (0, l.jsx)(A.default, {
          guildId: t
        })
      }) : b ? (0, l.jsx)(H, {
        isUsingCollapsedLayout: a,
        scrollerRef: G,
        handleScroll: z,
        activeChannels: Q,
        totalActiveChannels: T
      }) : (0, l.jsx)(y, {}), a && b && !w && (0, l.jsx)(c.Clickable, {
        className: i()(R.scrollIcon, R.left),
        onClick: Y,
        "aria-hidden": !0,
        children: (0, l.jsx)(S.default, {
          direction: S.default.Directions.LEFT,
          height: 12,
          width: 12
        })
      }), a && b && !B && (0, l.jsx)(c.Clickable, {
        className: i()(R.scrollIcon, R.right),
        onClick: X,
        "aria-hidden": !0,
        children: (0, l.jsx)(S.default, {
          direction: S.default.Directions.RIGHT,
          height: 12,
          width: 12
        })
      })]
    })
  })
}