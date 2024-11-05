n.d(t, {
    ZP: function () {
        return _;
    },
    nK: function () {
        return d;
    },
    uj: function () {
        return f;
    }
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(26033),
    s = n(810568),
    o = n(168524),
    l = n(858042),
    u = n(981631),
    c = n(388032);
function d(e) {
    let { user: t, activity: n, entry: r } = e;
    return null != r
        ? {
              applicationId: (0, a.dX)(r) ? r.extra.application_id : void 0,
              sourceUserId: r.author_id
          }
        : null != n
          ? {
                applicationId: n.type === u.IIU.PLAYING && null != n.application_id ? n.application_id : void 0,
                sourceUserId: t.id
            }
          : {
                applicationId: void 0,
                sourceUserId: void 0
            };
}
function f(e) {
    let { user: t, activity: n, entry: r } = e,
        { applicationId: i } = d({
            activity: n,
            entry: r,
            user: t
        });
    return (0, l.M)({
        applicationId: i,
        showOutdatedInfoOption: !1
    });
}
function _(e) {
    let { user: t, activity: n, entry: a, onAction: l, isMenuOpen: u } = e,
        { applicationId: f, sourceUserId: _ } = d({
            activity: n,
            entry: a,
            user: t
        }),
        h = (0, o.Z)({
            location: 'UserProfileActivityContextMenu',
            source: s.m1.UserProfileCardContextMenu,
            trackEntryPointImpression: u,
            applicationId: f,
            sourceUserId: _
        });
    return null == h
        ? null
        : (0, r.jsx)(i.MenuItem, {
              id: 'game-profile',
              label: c.intl.string(c.t.ajHoOj),
              action: (e) => {
                  null == l || l({ action: 'PRESS_VIEW_GAME_PROFILE_MENU_ITEM' }), h(e);
              }
          });
}
