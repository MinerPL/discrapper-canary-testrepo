n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(481060),
  o = n(100527),
  c = n(484459),
  d = n(103575),
  u = n(366966),
  _ = n(409216),
  h = n(51144),
  E = n(981631),
  I = n(689938),
  m = n(287644);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let p = {
  [E.AzA.NOW_PLAYING]: {
single: (e, t) => I.Z.Messages.APPLICATION_STORE_RECOMMENDATION_NOW_PLAYING_SINGLE.format({
  user1: e.username,
  user1Hook: () => t(e)
}),
double: (e, t, n) => I.Z.Messages.APPLICATION_STORE_RECOMMENDATION_NOW_PLAYING_DOUBLE.format({
  user1: e.username,
  user1Hook: () => n(e),
  user2: t.username,
  user2Hook: () => n(t)
}),
other: e => I.Z.Messages.APPLICATION_STORE_RECOMMENDATION_NOW_PLAYING_OTHER.format({
  count: e
})
  },
  [E.AzA.RECENTLY_PLAYED]: {
single: (e, t) => I.Z.Messages.APPLICATION_STORE_RECOMMENDATION_RECENTLY_PLAYED_SINGLE.format({
  user1: e.username,
  user1Hook: () => t(e)
}),
double: (e, t, n) => I.Z.Messages.APPLICATION_STORE_RECOMMENDATION_RECENTLY_PLAYED_DOUBLE.format({
  user1: e.username,
  user1Hook: () => n(e),
  user2: t.username,
  user2Hook: () => n(t)
}),
other: e => I.Z.Messages.APPLICATION_STORE_RECOMMENDATION_RECENTLY_PLAYED_OTHER.format({
  count: e
})
  },
  [E.AzA.EVER_PLAYED]: {
single: (e, t) => I.Z.Messages.APPLICATION_STORE_RECOMMENDATION_EVER_PLAYED_SINGLE.format({
  user1: e.username,
  user1Hook: () => t(e)
}),
double: (e, t, n) => I.Z.Messages.APPLICATION_STORE_RECOMMENDATION_EVER_PLAYED_DOUBLE.format({
  user1: e.username,
  user1Hook: () => n(e),
  user2: t.username,
  user2Hook: () => n(t)
}),
other: e => I.Z.Messages.APPLICATION_STORE_RECOMMENDATION_EVER_PLAYED_OTHER.format({
  count: e
})
  }
};
class T extends s.PureComponent {
  renderDescription(e, t) {
let n = p[e];
return 1 === t.length ? n.single(t[0].user, e => this.renderActivityDiscordTag(e)) : 2 === t.length ? n.double(t[0].user, t[1].user, e => this.renderActivityDiscordTag(e)) : n.other(t.length);
  }
  renderActivityDiscordTag(e) {
return (0, i.jsx)(l.Popout, {
  preload: () => (0, c.W)(e),
  renderPopout: t => (0, i.jsx)(d.Z, {
    ...t,
    location: 'ApplicationRecommendationActivity',
    userId: e.id,
    newAnalyticsLocations: [o.Z.USERNAME]
  }),
  position: 'right',
  children: t => (0, i.jsx)('span', {
    className: m.username,
    ...t,
    children: e.username
  })
}, e.id);
  }
  render() {
let {
  reason: e,
  className: t
} = this.props, {
  type: n,
  userInfo: s
} = e;
return 0 === s.length ? null : (0, i.jsxs)('div', {
  className: r()(m.recommendationActivity, t),
  children: [
    (0, i.jsx)(_.Z, {
      className: m.players,
      users: s.map(e => {
        let {
          user: t
        } = e;
        return t;
      }),
      renderUser: this.renderPlayer,
      max: 4,
      renderMoreUsers: this.renderPlayerOverflow
    }),
    (0, i.jsx)('div', {
      className: m.description,
      children: this.renderDescription(n, s)
    })
  ]
});
  }
  constructor(...e) {
super(...e), g(this, 'renderUserTooltip', (e, t, n) => (0, i.jsxs)('div', {
  className: m.tooltip,
  children: [
    (0, i.jsx)('div', {
      children: h.ZP.getUserTag(e)
    }),
    (0, i.jsx)(u.ZP, {
      className: m.tooltipTimestamp,
      start: t,
      end: n,
      location: u.ZP.Locations.ACTIVITY_FEED
    })
  ]
})), g(this, 'renderPlayer', (e, t, n, s) => {
  if (null == e)
    return null;
  let a = this.props.reason.userInfo.find(t => t.user === e);
  return null == a ? null : (0, i.jsx)(l.Popout, {
    preload: () => (0, c.W)(e),
    renderPopout: t => (0, i.jsx)(d.Z, {
      ...t,
      location: 'ApplicationRecommendationActivity',
      userId: e.id,
      newAnalyticsLocations: [o.Z.AVATAR]
    }),
    position: 'right',
    children: t => (0, i.jsx)(l.Tooltip, {
      text: this.renderUserTooltip(e, a.startTime, a.endTime),
      'aria-label': (0, h.W5)(e, {
        decoration: 'never'
      }),
      children: n => (0, i.jsx)(l.Avatar, {
        className: r()(m.playerAvatar, {
          [m.avatarMasked]: !s
        }),
        src: e.getAvatarURL(void 0, 32),
        'aria-label': e.username,
        size: l.AvatarSizes.SIZE_32,
        ...n,
        ...t
      })
    })
  }, e.id);
}), g(this, 'renderPlayerOverflow', (e, t, n) => (0, i.jsx)('div', {
  className: m.playerOverflow,
  children: e
}, n));
  }
}
t.Z = T;