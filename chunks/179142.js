n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(735250);
n(470079);
var s = n(410030),
    a = n(906732),
    l = n(769654),
    r = n(785717),
    o = n(697927),
    c = n(200634),
    u = n(483517),
    d = n(502762),
    h = n(171368),
    m = n(389190),
    p = n(428927),
    _ = n(551498),
    f = n(689938),
    E = n(896063);
function g(e) {
    let { user: t } = e,
        { analyticsLocations: n } = (0, a.ZP)(),
        { context: g, trackUserProfileAction: C } = (0, r.KZ)(),
        I = (0, s.ZP)(),
        { mutualFriends: x, isFetching: T } = (0, o.Z)(t.id, !t.bot),
        { mutualGuilds: v, isFetching: S } = (0, c.Z)(t.id, !0),
        N = !t.bot && null != x && x.length > 0,
        A = null != v && v.length > 0;
    return N || A
        ? (0, i.jsxs)(d.Z.Overlay, {
              className: E.overlay,
              children: [
                  A &&
                      (0, i.jsx)(_.Z, {
                          className: E.list,
                          header: f.Z.Messages.MUTUAL_GUILDS_COUNT.format({ count: v.length }),
                          isLoadingHeader: S,
                          loadingContentsCount: v.length,
                          itemType: _.R.MutualGuildList,
                          onExpand: () =>
                              C({
                                  action: 'PRESS_SECTION',
                                  section: 'MUTUAL_GUILDS'
                              }),
                          children: v.map((e) => {
                              let { guild: n, nick: s } = e;
                              return (0, i.jsx)(
                                  p.D,
                                  {
                                      user: t,
                                      guild: n,
                                      nick: s,
                                      theme: I,
                                      onSelect: () => (0, l.X)(n.id)
                                  },
                                  n.id
                              );
                          })
                      }),
                  A && N && (0, i.jsx)(u.Z, { className: E.divider }),
                  N &&
                      (0, i.jsx)(_.Z, {
                          className: E.list,
                          header: f.Z.Messages.MUTUAL_FRIENDS_COUNT.format({ count: x.length }),
                          isLoadingHeader: T,
                          loadingContentsCount: x.length,
                          itemType: _.R.MutualFriendsList,
                          onExpand: () =>
                              C({
                                  action: 'PRESS_SECTION',
                                  section: 'MUTUAL_FRIENDS'
                              }),
                          children: x.map((e) => {
                              let { key: t, user: s, status: a } = e;
                              return (0, i.jsx)(
                                  m.T,
                                  {
                                      user: s,
                                      status: a,
                                      onSelect: () => {
                                          (0, h.openUserProfileModal)({
                                              ...g,
                                              userId: s.id,
                                              sourceAnalyticsLocations: n
                                          });
                                      }
                                  },
                                  t
                              );
                          })
                      })
              ]
          })
        : null;
}
