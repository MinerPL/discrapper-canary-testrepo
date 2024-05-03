"use strict";
s.r(t), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("481060"),
  o = s("100527"),
  u = s("484459"),
  d = s("103575"),
  c = s("366966"),
  _ = s("409216"),
  E = s("51144"),
  T = s("981631"),
  I = s("689938"),
  R = s("753997");

function f(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let S = {
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
class m extends r.PureComponent {
  renderDescription(e, t) {
    let s = S[e];
    return 1 === t.length ? s.single(t[0].user, e => this.renderActivityDiscordTag(e)) : 2 === t.length ? s.double(t[0].user, t[1].user, e => this.renderActivityDiscordTag(e)) : s.other(t.length)
  }
  renderActivityDiscordTag(e) {
    return (0, a.jsx)(l.Popout, {
      preload: () => (0, u.maybeFetchUserProfileForPopout)(e),
      renderPopout: t => (0, a.jsx)(d.default, {
        ...t,
        location: "ApplicationRecommendationActivity",
        userId: e.id,
        newAnalyticsLocations: [o.default.USERNAME]
      }),
      position: "right",
      children: t => (0, a.jsx)("span", {
        className: R.username,
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
      className: n()(R.recommendationActivity, t),
      children: [(0, a.jsx)(_.default, {
        className: R.players,
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
        className: R.description,
        children: this.renderDescription(s, r)
      })]
    })
  }
  constructor(...e) {
    super(...e), f(this, "renderUserTooltip", (e, t, s) => (0, a.jsxs)("div", {
      className: R.tooltip,
      children: [(0, a.jsx)("div", {
        children: E.default.getUserTag(e)
      }), (0, a.jsx)(c.default, {
        className: R.tooltipTimestamp,
        start: t,
        end: s,
        location: c.default.Locations.ACTIVITY_FEED
      })]
    })), f(this, "renderPlayer", (e, t, s, r) => {
      if (null == e) return null;
      let i = this.props.reason.userInfo.find(t => t.user === e);
      return null == i ? null : (0, a.jsx)(l.Popout, {
        preload: () => (0, u.maybeFetchUserProfileForPopout)(e),
        renderPopout: t => (0, a.jsx)(d.default, {
          ...t,
          location: "ApplicationRecommendationActivity",
          userId: e.id,
          newAnalyticsLocations: [o.default.AVATAR]
        }),
        position: "right",
        children: t => (0, a.jsx)(l.Tooltip, {
          text: this.renderUserTooltip(e, i.startTime, i.endTime),
          "aria-label": (0, E.getUserTag)(e, {
            decoration: "never"
          }),
          children: s => (0, a.jsx)(l.Avatar, {
            className: n()(R.playerAvatar, {
              [R.avatarMasked]: !r
            }),
            src: e.getAvatarURL(void 0, 32),
            "aria-label": e.username,
            size: l.AvatarSizes.SIZE_32,
            ...s,
            ...t
          })
        })
      }, e.id)
    }), f(this, "renderPlayerOverflow", (e, t, s) => (0, a.jsx)("div", {
      className: R.playerOverflow,
      children: e
    }, s))
  }
}
t.default = m