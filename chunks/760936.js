"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  n = s("414456"),
  i = s.n(n),
  l = s("77078"),
  o = s("812204"),
  u = s("506885"),
  d = s("981601"),
  c = s("280174"),
  _ = s("533403"),
  E = s("158998"),
  T = s("49111"),
  I = s("782340"),
  f = s("496743");
let R = {
  [T.StoreRecommendationTypes.NOW_PLAYING]: {
    single: (e, t) => I.default.Messages.APPLICATION_STORE_RECOMMENDATION_NOW_PLAYING_SINGLE.format({
      user1: e.username,
      user1Hook: () => t(e)
    }),
    double: (e, t, s) => I.default.Messages.APPLICATION_STORE_RECOMMENDATION_NOW_PLAYING_DOUBLE.format({
      user1: e.username,
      user1Hook: () => s(e),
      user2: t.username,
      user2Hook: () => s(t)
    }),
    other: e => I.default.Messages.APPLICATION_STORE_RECOMMENDATION_NOW_PLAYING_OTHER.format({
      count: e
    })
  },
  [T.StoreRecommendationTypes.RECENTLY_PLAYED]: {
    single: (e, t) => I.default.Messages.APPLICATION_STORE_RECOMMENDATION_RECENTLY_PLAYED_SINGLE.format({
      user1: e.username,
      user1Hook: () => t(e)
    }),
    double: (e, t, s) => I.default.Messages.APPLICATION_STORE_RECOMMENDATION_RECENTLY_PLAYED_DOUBLE.format({
      user1: e.username,
      user1Hook: () => s(e),
      user2: t.username,
      user2Hook: () => s(t)
    }),
    other: e => I.default.Messages.APPLICATION_STORE_RECOMMENDATION_RECENTLY_PLAYED_OTHER.format({
      count: e
    })
  },
  [T.StoreRecommendationTypes.EVER_PLAYED]: {
    single: (e, t) => I.default.Messages.APPLICATION_STORE_RECOMMENDATION_EVER_PLAYED_SINGLE.format({
      user1: e.username,
      user1Hook: () => t(e)
    }),
    double: (e, t, s) => I.default.Messages.APPLICATION_STORE_RECOMMENDATION_EVER_PLAYED_DOUBLE.format({
      user1: e.username,
      user1Hook: () => s(e),
      user2: t.username,
      user2Hook: () => s(t)
    }),
    other: e => I.default.Messages.APPLICATION_STORE_RECOMMENDATION_EVER_PLAYED_OTHER.format({
      count: e
    })
  }
};
class S extends r.PureComponent {
  renderDescription(e, t) {
    let s = R[e];
    return 1 === t.length ? s.single(t[0].user, e => this.renderActivityDiscordTag(e)) : 2 === t.length ? s.double(t[0].user, t[1].user, e => this.renderActivityDiscordTag(e)) : s.other(t.length)
  }
  renderActivityDiscordTag(e) {
    return (0, a.jsx)(l.Popout, {
      preload: () => (0, u.default)(e.id, e.getAvatarURL(void 0, 80)),
      renderPopout: t => (0, a.jsx)(d.default, {
        ...t,
        userId: e.id,
        newAnalyticsLocations: [o.default.USERNAME]
      }),
      position: "right",
      children: t => (0, a.jsx)("span", {
        className: f.username,
        ...t,
        children: e.username
      })
    }, e.id)
  }
  render() {
    let {
      reason: e,
      className: t
    } = this.props, {
      type: s,
      userInfo: r
    } = e;
    return 0 === r.length ? null : (0, a.jsxs)("div", {
      className: i(f.recommendationActivity, t),
      children: [(0, a.jsx)(_.default, {
        className: f.players,
        users: r.map(e => {
          let {
            user: t
          } = e;
          return t
        }),
        renderUser: this.renderPlayer,
        max: 4,
        renderMoreUsers: this.renderPlayerOverflow
      }), (0, a.jsx)("div", {
        className: f.description,
        children: this.renderDescription(s, r)
      })]
    })
  }
  constructor(...e) {
    super(...e), this.renderUserTooltip = (e, t, s) => (0, a.jsxs)("div", {
      className: f.tooltip,
      children: [(0, a.jsx)("div", {
        children: E.default.getUserTag(e)
      }), (0, a.jsx)(c.default, {
        className: f.tooltipTimestamp,
        start: t,
        end: s,
        location: c.default.Locations.ACTIVITY_FEED
      })]
    }), this.renderPlayer = (e, t, s, r) => {
      if (null == e) return null;
      let n = this.props.reason.userInfo.find(t => t.user === e);
      return null == n ? null : (0, a.jsx)(l.Popout, {
        preload: () => (0, u.default)(e.id, e.getAvatarURL(void 0, 80)),
        renderPopout: t => (0, a.jsx)(d.default, {
          ...t,
          userId: e.id,
          newAnalyticsLocations: [o.default.AVATAR]
        }),
        position: "right",
        children: t => (0, a.jsx)(l.Tooltip, {
          text: this.renderUserTooltip(e, n.startTime, n.endTime),
          "aria-label": (0, E.getUserTag)(e, {
            decoration: "never"
          }),
          children: s => (0, a.jsx)(l.Avatar, {
            className: i(f.playerAvatar, {
              [f.avatarMasked]: !r
            }),
            src: e.getAvatarURL(void 0, 32),
            "aria-label": e.username,
            size: l.AvatarSizes.SIZE_32,
            ...s,
            ...t
          })
        })
      }, e.id)
    }, this.renderPlayerOverflow = (e, t, s) => (0, a.jsx)("div", {
      className: f.playerOverflow,
      children: e
    }, s)
  }
}
var m = S