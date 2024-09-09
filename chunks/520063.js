l.d(n, {
    Z: function () {
        return g;
    }
});
var t = l(735250),
    r = l(470079),
    i = l(442837),
    a = l(481060),
    s = l(58540),
    u = l(438536),
    d = l(346479),
    o = l(665906),
    c = l(592125),
    Z = l(430824),
    E = l(496675),
    M = l(594174),
    _ = l(981631),
    f = l(689938);
function g(e, n, g) {
    let I = r.useMemo(() => ({ [n]: [e.id] }), [n, e.id]);
    (0, s.$)(I), (0, i.e7)([E.Z], () => E.Z.getGuildVersion(n), [n]);
    let m = (0, i.e7)([c.Z], () => c.Z.getChannel(g)),
        R = (0, i.e7)([Z.Z], () => Z.Z.getGuild(n), [n]),
        N = (0, i.e7)([M.default], () => M.default.getCurrentUser()),
        A = (0, u.Z)(m, 'Context Menu'),
        C = (0, o.Xb)(m);
    if ((null == N ? void 0 : N.id) === e.id) return [A];
    if (null == R || null == m || null == N) return [];
    let O = C || (m.ownerId === N.id && m.type === _.d4z.PRIVATE_THREAD);
    return [
        O
            ? (0, t.jsx)(a.MenuItem, {
                  id: 'remove',
                  label: m.isForumPost() ? f.Z.Messages.REMOVE_USER_FROM_FORUM_POST.format({ user: e.username }) : f.Z.Messages.REMOVE_USER_FROM_THREAD.format({ user: e.username }),
                  color: 'danger',
                  action: () => d.Z.removeMember(m, e.id, 'Context Menu')
              })
            : null,
        E.Z.canManageUser(_.Plq.KICK_MEMBERS, e, R)
            ? (0, t.jsx)(a.MenuItem, {
                  id: 'kick',
                  label: O ? f.Z.Messages.KICK_USER_FROM_SERVER.format({ user: e.username }) : f.Z.Messages.KICK_USER.format({ user: e.username }),
                  color: 'danger',
                  action: () =>
                      (0, a.openModalLazy)(async () => {
                          let { default: n } = await l.e('5454').then(l.bind(l, 854360));
                          return (l) =>
                              (0, t.jsx)(n, {
                                  ...l,
                                  guildId: R.id,
                                  user: e
                              });
                      })
              })
            : null,
        E.Z.canManageUser(_.Plq.BAN_MEMBERS, e, R)
            ? (0, t.jsx)(a.MenuItem, {
                  id: 'ban',
                  label: O ? f.Z.Messages.BAN_USER_FROM_SERVER.format({ user: e.username }) : f.Z.Messages.BAN_USER.format({ user: e.username }),
                  color: 'danger',
                  action: () =>
                      (0, a.openModalLazy)(async () => {
                          let { default: n } = await l.e('43350').then(l.bind(l, 98746));
                          return (l) =>
                              (0, t.jsx)(n, {
                                  ...l,
                                  guildId: R.id,
                                  user: e
                              });
                      })
              })
            : null
    ];
}
