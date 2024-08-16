n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(481060),
    o = n(100527),
    c = n(707409),
    d = n(184301),
    u = n(103575),
    _ = n(237583),
    E = n(51144),
    h = n(981631),
    m = n(689938),
    I = n(575688);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let p = {
    [h.AzA.NOW_PLAYING]: {
        single: (e, t) =>
            m.Z.Messages.APPLICATION_STORE_RECOMMENDATION_NOW_PLAYING_SINGLE.format({
                user1: e.username,
                user1Hook: () => t(e)
            }),
        double: (e, t, n) =>
            m.Z.Messages.APPLICATION_STORE_RECOMMENDATION_NOW_PLAYING_DOUBLE.format({
                user1: e.username,
                user1Hook: () => n(e),
                user2: t.username,
                user2Hook: () => n(t)
            }),
        other: (e) => m.Z.Messages.APPLICATION_STORE_RECOMMENDATION_NOW_PLAYING_OTHER.format({ count: e })
    },
    [h.AzA.RECENTLY_PLAYED]: {
        single: (e, t) =>
            m.Z.Messages.APPLICATION_STORE_RECOMMENDATION_RECENTLY_PLAYED_SINGLE.format({
                user1: e.username,
                user1Hook: () => t(e)
            }),
        double: (e, t, n) =>
            m.Z.Messages.APPLICATION_STORE_RECOMMENDATION_RECENTLY_PLAYED_DOUBLE.format({
                user1: e.username,
                user1Hook: () => n(e),
                user2: t.username,
                user2Hook: () => n(t)
            }),
        other: (e) => m.Z.Messages.APPLICATION_STORE_RECOMMENDATION_RECENTLY_PLAYED_OTHER.format({ count: e })
    },
    [h.AzA.EVER_PLAYED]: {
        single: (e, t) =>
            m.Z.Messages.APPLICATION_STORE_RECOMMENDATION_EVER_PLAYED_SINGLE.format({
                user1: e.username,
                user1Hook: () => t(e)
            }),
        double: (e, t, n) =>
            m.Z.Messages.APPLICATION_STORE_RECOMMENDATION_EVER_PLAYED_DOUBLE.format({
                user1: e.username,
                user1Hook: () => n(e),
                user2: t.username,
                user2Hook: () => n(t)
            }),
        other: (e) => m.Z.Messages.APPLICATION_STORE_RECOMMENDATION_EVER_PLAYED_OTHER.format({ count: e })
    }
};
class T extends a.PureComponent {
    renderDescription(e, t) {
        let n = p[e];
        return 1 === t.length ? n.single(t[0].user, (e) => this.renderActivityDiscordTag(e)) : 2 === t.length ? n.double(t[0].user, t[1].user, (e) => this.renderActivityDiscordTag(e)) : n.other(t.length);
    }
    renderActivityDiscordTag(e) {
        return (0, i.jsx)(
            l.Popout,
            {
                preload: () => (0, d.Z)(e),
                renderPopout: (t) =>
                    (0, i.jsx)(u.Z, {
                        ...t,
                        location: 'ApplicationRecommendationActivity',
                        userId: e.id,
                        newAnalyticsLocations: [o.Z.USERNAME]
                    }),
                position: 'right',
                children: (t) =>
                    (0, i.jsx)('span', {
                        className: I.username,
                        ...t,
                        children: e.username
                    })
            },
            e.id
        );
    }
    render() {
        let { reason: e, className: t } = this.props,
            { type: n, userInfo: a } = e;
        return 0 === a.length
            ? null
            : (0, i.jsxs)('div', {
                  className: r()(I.recommendationActivity, t),
                  children: [
                      (0, i.jsx)(_.Z, {
                          className: I.players,
                          users: a.map((e) => {
                              let { user: t } = e;
                              return t;
                          }),
                          renderUser: this.renderPlayer,
                          max: 4,
                          renderMoreUsers: this.renderPlayerOverflow
                      }),
                      (0, i.jsx)('div', {
                          className: I.description,
                          children: this.renderDescription(n, a)
                      })
                  ]
              });
    }
    constructor(...e) {
        super(...e),
            g(this, 'renderUserTooltip', (e, t, n) =>
                (0, i.jsxs)('div', {
                    className: I.tooltip,
                    children: [
                        (0, i.jsx)('div', { children: E.ZP.getUserTag(e) }),
                        (0, i.jsx)(c.ZP, {
                            className: I.tooltipTimestamp,
                            start: t,
                            end: n,
                            location: c.ZP.Locations.ACTIVITY_FEED
                        })
                    ]
                })
            ),
            g(this, 'renderPlayer', (e, t, n, a) => {
                if (null == e) return null;
                let s = this.props.reason.userInfo.find((t) => t.user === e);
                return null == s
                    ? null
                    : (0, i.jsx)(
                          l.Popout,
                          {
                              preload: () => (0, d.Z)(e),
                              renderPopout: (t) =>
                                  (0, i.jsx)(u.Z, {
                                      ...t,
                                      location: 'ApplicationRecommendationActivity',
                                      userId: e.id,
                                      newAnalyticsLocations: [o.Z.AVATAR]
                                  }),
                              position: 'right',
                              children: (t) =>
                                  (0, i.jsx)(l.Tooltip, {
                                      text: this.renderUserTooltip(e, s.startTime, s.endTime),
                                      'aria-label': (0, E.W5)(e, { decoration: 'never' }),
                                      children: (n) =>
                                          (0, i.jsx)(l.Avatar, {
                                              className: r()(I.playerAvatar, { [I.avatarMasked]: !a }),
                                              src: e.getAvatarURL(void 0, 32),
                                              'aria-label': e.username,
                                              size: l.AvatarSizes.SIZE_32,
                                              ...n,
                                              ...t
                                          })
                                  })
                          },
                          e.id
                      );
            }),
            g(this, 'renderPlayerOverflow', (e, t, n) =>
                (0, i.jsx)(
                    'div',
                    {
                        className: I.playerOverflow,
                        children: e
                    },
                    n
                )
            );
    }
}
t.Z = T;
