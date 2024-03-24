"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("424973"), n("222007"), n("881410");
var a = n("37983"),
  s = n("884691"),
  l = n("77078"),
  i = n("685665"),
  r = n("401642"),
  o = n("444097"),
  u = n("49111"),
  d = n("782340");

function c(e) {
  let {
    priorityMembers: t,
    otherMembers: n,
    totalMembers: s,
    activity: i,
    guildId: c,
    sourceAnalyticsLocations: f
  } = e, E = [];
  for (let {
      user: e,
      status: n
    }
    of t) E.push((0, a.jsx)(l.MenuItem, {
    id: e.id,
    keepItemStyles: !0,
    render: t => (0, a.jsx)(o.default, {
      ...t,
      user: e,
      status: n,
      guildId: c
    }),
    action: () => (0, r.openUserProfileModal)({
      userId: e.id,
      guildId: c,
      sourceAnalyticsLocations: f,
      analyticsLocation: {
        section: u.AnalyticsSections.ACTIVITY_FEED_NOW_PLAYING_CONTEXT_MENU
      }
    })
  }));
  for (let e of n) E.push((0, a.jsx)(l.MenuItem, {
    id: e.id,
    keepItemStyles: !0,
    render: t => (0, a.jsx)(o.default, {
      ...t,
      user: e,
      guildId: c
    }),
    action: () => (0, r.openUserProfileModal)({
      userId: e.id,
      guildId: c,
      sourceAnalyticsLocations: f,
      analyticsLocation: {
        section: u.AnalyticsSections.ACTIVITY_FEED_NOW_PLAYING_CONTEXT_MENU
      }
    })
  }));
  let h = s - E.length;
  return h > 0 && E.push((0, a.jsx)(l.MenuItem, {
    id: "unknown-members-".concat(null == i ? void 0 : i.session_id),
    render: e => (0, a.jsx)(o.NowPlayingUnknownMemberMenuItem, {
      ...e,
      label: d.default.Messages.GAME_FEED_UNKNOWN_PLAYERS.format({
        count: h
      })
    })
  })), E
}

function f(e) {
  let {
    priorityMembers: t,
    partiedMembers: n,
    currentActivities: r,
    guildContext: o
  } = e, u = new Set(t.map(e => {
    let {
      user: t
    } = e;
    return t.id
  })), f = n.filter(e => !u.has(e.id)), {
    analyticsLocations: E
  } = (0, i.default)(), h = s.useMemo(() => {
    let e = r.flatMap(e => {
      let {
        playingMembers: t
      } = e;
      return t
    }).map(e => e.id);
    return n.filter(t => !e.includes(t.id))
  }, [n, r]);
  if (r.length <= 1 && 0 === h.length) {
    var _, C;
    return (0, a.jsx)(l.MenuGroup, {
      label: n.length > 1 ? d.default.Messages.ACTIVITY_FEED_SINGLE_MEMBER_LIST_HEADER.format({
        memberCount: n.length
      }) : void 0,
      children: c({
        priorityMembers: t,
        otherMembers: f,
        totalMembers: n.length,
        activity: null !== (C = null === (_ = r[0]) || void 0 === _ ? void 0 : _.activity) && void 0 !== C ? C : void 0,
        guildId: null == o ? void 0 : o.id,
        sourceAnalyticsLocations: E
      })
    })
  }
  let S = r.map((e, n) => {
      let {
        playingMembers: s,
        game: i,
        activity: r
      } = e, d = new Set(s.map(e => e.id));
      return (0, a.jsx)(l.MenuGroup, {
        label: "".concat(i.name, " - ").concat(s.length),
        children: c({
          priorityMembers: t.filter(e => {
            let {
              user: t
            } = e;
            return d.has(t.id)
          }),
          otherMembers: s.filter(e => !u.has(e.id)),
          totalMembers: s.length,
          activity: null != r ? r : void 0,
          guildId: null == o ? void 0 : o.id,
          sourceAnalyticsLocations: E
        })
      }, n)
    }),
    I = h.map(e => e.id),
    m = (0, a.jsx)(l.MenuGroup, {
      label: "".concat(d.default.Messages.ACTIVITY_FEED_OTHER_MEMBER_LIST_HEADER, " - ").concat(h.length),
      children: c({
        priorityMembers: t.filter(e => {
          let {
            user: t
          } = e;
          return I.includes(t.id)
        }),
        otherMembers: h.filter(e => !u.has(e.id)),
        totalMembers: h.length,
        guildId: null == o ? void 0 : o.id,
        sourceAnalyticsLocations: E
      })
    });
  return [...S, m]
}