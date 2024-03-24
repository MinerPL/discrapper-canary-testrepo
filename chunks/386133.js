"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("917351"),
  i = n.n(l),
  r = n("483366"),
  o = n.n(r),
  u = n("446674"),
  d = n("77078"),
  c = n("913144"),
  f = n("777273"),
  E = n("2973"),
  h = n("227231"),
  _ = n("843823"),
  C = n("697218"),
  S = n("392453"),
  I = n("599110"),
  m = n("718517"),
  p = n("744923"),
  T = n("333705"),
  g = n("749554"),
  A = n("62659"),
  N = n("36512"),
  R = n("638441"),
  O = n("49111"),
  v = n("988268"),
  L = n("782340"),
  M = n("852865");
let P = 15 * m.default.Millis.MINUTE,
  y = (0, R.default)(function(e) {
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
    } = t, _ = c.length, C = f.length, S = E.length, m = h.length > 0, p = s.useCallback(() => {
      let e = E.filter(e => {
        var t, n;
        return (null === (t = e.game) || void 0 === t ? void 0 : t.name) != null && (null === (n = e.game) || void 0 === n ? void 0 : n.type) === v.ApplicationTypes.GAME
      }).map(e => e.game.name);
      I.default.track(O.AnalyticEvents.NOW_PLAYING_CARD_HOVERED, {
        num_users: _,
        num_streams: C,
        num_activities: S,
        in_voice_channel: m,
        games_detected: e
      })
    }, [_, C, S, m, E]), R = o(p, P);
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
          onMouseEnter: R,
          "aria-haspopup": "menu",
          className: M.itemCard,
          active: n,
          children: (0, a.jsxs)("div", {
            children: [r, u]
          })
        })
      }
    }) : null
  }),
  D = i.throttle(() => f.fetchUserAffinities(!1), 3e5);

function x() {
  let {
    nowPlayingCards: e,
    loaded: t,
    needsRefresh: n,
    fetching: l,
    currentUser: i
  } = (0, u.useStateFromStoresObject)([S.default, _.default, C.default], () => ({
    nowPlayingCards: S.default.nowPlayingCards,
    loaded: S.default.loaded,
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
    className: M.emptyCard,
    children: [(0, a.jsx)(d.Heading, {
      variant: "heading-md/semibold",
      className: M.emptyHeader,
      children: L.default.Messages.ACTIVITY_FEED_NONE_PLAYING_HEADER
    }), (0, a.jsx)(d.Text, {
      color: "none",
      className: M.emptyText,
      variant: "text-sm/normal",
      children: L.default.Messages.ACTIVITY_FEED_NONE_PLAYING_BODY
    })]
  }), (0, a.jsx)(a.Fragment, {
    children: f
  })) : (0, a.jsx)("div", {
    className: M.emptyCard,
    children: (0, a.jsx)(d.Spinner, {})
  })
}