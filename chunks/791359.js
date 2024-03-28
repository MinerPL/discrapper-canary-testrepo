"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("392711"),
  i = n.n(l),
  r = n("954955"),
  o = n.n(r),
  u = n("442837"),
  d = n("481060"),
  c = n("570140"),
  f = n("265875"),
  E = n("569984"),
  h = n("918701"),
  _ = n("800599"),
  C = n("594174"),
  m = n("801077"),
  S = n("626135"),
  I = n("70956"),
  p = n("225559"),
  T = n("910436"),
  g = n("203028"),
  A = n("358924"),
  N = n("292140"),
  v = n("525296"),
  O = n("981631"),
  R = n("674563"),
  L = n("689938"),
  P = n("103877");
let M = 15 * I.default.Millis.MINUTE,
  y = (0, v.default)(function(e) {
    let {
      party: t,
      onUserContextMenu: n,
      onChannelContextMenu: l,
      quest: i
    } = e, r = (0, a.jsx)(g.default, {
      party: t,
      onUserContextMenu: n
    }), u = (0, a.jsx)(T.default, {
      party: t,
      onChannelContextMenu: l,
      quest: i
    }), {
      partiedMembers: c,
      applicationStreams: f,
      currentActivities: E,
      voiceChannels: h
    } = t, _ = c.length, C = f.length, m = E.length, I = h.length > 0, p = s.useCallback(() => {
      let e = E.filter(e => {
        var t, n;
        return (null === (t = e.game) || void 0 === t ? void 0 : t.name) != null && (null === (n = e.game) || void 0 === n ? void 0 : n.type) === R.ApplicationTypes.GAME
      }).map(e => e.game.name);
      S.default.track(O.AnalyticEvents.NOW_PLAYING_CARD_HOVERED, {
        num_users: _,
        num_streams: C,
        num_activities: m,
        in_voice_channel: I,
        games_detected: e
      })
    }, [_, C, m, I, E]), v = o()(p, M);
    return null != r || null != u ? (0, a.jsx)(d.Popout, {
      position: "left",
      renderPopout: e => {
        let {
          closePopout: n
        } = e;
        return (0, a.jsx)(N.default, {
          party: t,
          close: n
        })
      },
      spacing: 8,
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, a.jsx)(A.default, {
          ...e,
          onMouseEnter: v,
          "aria-haspopup": "menu",
          className: P.itemCard,
          active: n,
          children: (0, a.jsxs)("div", {
            children: [r, u]
          })
        })
      }
    }) : null
  }),
  D = i().throttle(() => f.fetchUserAffinities(!1), 3e5);

function b() {
  let {
    nowPlayingCards: e,
    loaded: t,
    needsRefresh: n,
    fetching: l,
    currentUser: i
  } = (0, u.useStateFromStoresObject)([m.default, _.default, C.default], () => ({
    nowPlayingCards: m.default.nowPlayingCards,
    loaded: m.default.loaded,
    needsRefresh: _.default.needsRefresh(),
    fetching: _.default.getFetching(),
    currentUser: C.default.getCurrentUser()
  })), r = (0, u.useStateFromStores)([E.default], () => E.default.quests);
  s.useEffect(() => (c.default.wait(() => p.mount()), () => c.default.wait(() => p.unmount())), [null == i ? void 0 : i.id]), s.useEffect(() => {
    n && !l && D()
  }, [n, l]);
  let o = s.useMemo(() => {
      let t = new Map,
        n = new Set;
      for (let a of e) a.party.currentActivities.forEach(e => {
        let {
          game: s
        } = e;
        if (null != s) {
          let e = (0, h.getQuestByApplicationId)(r, s.id);
          null != e && !n.has(e.id) && (t.set(a.party.id, e), n.add(e.id))
        }
      });
      return t
    }, [e, r]),
    f = null;
  return t ? (f = e.length > 0 ? e.map(e => {
    let {
      party: t
    } = e;
    return (0, a.jsx)(y, {
      party: t,
      quest: o.get(t.id)
    }, t.id)
  }) : (0, a.jsxs)("div", {
    className: P.emptyCard,
    children: [(0, a.jsx)(d.Heading, {
      variant: "heading-md/semibold",
      className: P.emptyHeader,
      children: L.default.Messages.ACTIVITY_FEED_NONE_PLAYING_HEADER
    }), (0, a.jsx)(d.Text, {
      color: "none",
      className: P.emptyText,
      variant: "text-sm/normal",
      children: L.default.Messages.ACTIVITY_FEED_NONE_PLAYING_BODY
    })]
  }), (0, a.jsx)(a.Fragment, {
    children: f
  })) : (0, a.jsx)("div", {
    className: P.emptyCard,
    children: (0, a.jsx)(d.Spinner, {})
  })
}