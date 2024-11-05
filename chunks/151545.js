n.d(t, {
    Z: function () {
        return T;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(841784),
    o = n(503438),
    l = n(812206),
    u = n(835473),
    c = n(574176),
    d = n(592125),
    f = n(430824),
    _ = n(496675),
    h = n(979651),
    p = n(626135),
    m = n(984173),
    g = n(409057),
    E = n(443375),
    v = n(128277),
    I = n(263059),
    S = n(981631);
function T(e) {
    let { user: t, currentUser: n, activity: T, className: b, onClose: y, profileGuildId: A } = e,
        N = (0, a.e7)([h.Z, d.Z], () => {
            var e;
            return d.Z.getChannel(null === (e = h.Z.getVoiceStateForUser(t.id)) || void 0 === e ? void 0 : e.channelId);
        }),
        { enableHangStatus: C } = c.n.useExperiment(
            {
                guildId: null == N ? void 0 : N.guild_id,
                location: 'UserProfileActivityCardWrapper'
            },
            { autoTrackExposure: !1 }
        ),
        R = C && _.Z.can(S.Plq.CONNECT, N),
        O = (null == T ? void 0 : T.type) === S.IIU.HANG_STATUS && R ? N : null,
        D = (0, m.F)({ location: 'UserProfileActivityCardWrapper' }),
        L = t.id === n.id,
        x = (0, a.e7)([f.Z, h.Z, d.Z], () => {
            if ((0, s.Z)(T)) {
                var e, n;
                let r = null === (e = h.Z.getVoiceStateForSession(t.id, null == T ? void 0 : T.session_id)) || void 0 === e ? void 0 : e.channelId;
                return f.Z.getGuild(null === (n = d.Z.getChannel(r)) || void 0 === n ? void 0 : n.getGuildId());
            }
            return null != O ? f.Z.getGuild(O.getGuildId()) : null;
        });
    (0, u.q)(null == T ? void 0 : T.application_id);
    let w = (0, a.e7)([l.Z], () => ((null == T ? void 0 : T.application_id) != null ? l.Z.getApplication(T.application_id) : (null == T ? void 0 : T.name) != null ? l.Z.getApplicationByName(T.name) : null));
    if (
        (i.useEffect(() => {
            (null == T ? void 0 : T.type) === S.IIU.HANG_STATUS &&
                R &&
                p.default.track(S.rMx.VIEW_HANG_STATUS, {
                    source: 'UserProfilePopout',
                    guild_id: null == O ? void 0 : O.guild_id,
                    channel_id: null == O ? void 0 : O.id
                });
        }, [null == T ? void 0 : T.type, R, O]),
        (null == T ? void 0 : T.type) === S.IIU.HANG_STATUS && !R)
    )
        return null;
    if ((0, o.Z)(T))
        return !D || L || t.bot
            ? (0, r.jsx)(v.Z, {
                  user: t,
                  currentUser: n,
                  activity: T,
                  guild: x,
                  channel: N,
                  className: b,
                  onClose: y
              })
            : (0, r.jsx)(I.Z, {
                  user: t,
                  currentUser: n,
                  activity: T,
                  guild: x,
                  profileGuildId: A,
                  channel: N,
                  className: b,
                  onClose: y
              });
    return !D || L || t.bot
        ? (0, r.jsx)(g.Z, {
              user: t,
              currentUser: n,
              activity: T,
              application: w,
              guild: x,
              channel: N,
              className: b,
              onClose: y
          })
        : (0, r.jsx)(E.Z, {
              user: t,
              currentUser: n,
              activity: T,
              application: w,
              guild: x,
              profileGuildId: A,
              channel: N,
              className: b,
              onClose: y
          });
}
