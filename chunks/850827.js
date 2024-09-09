var i = n(735250);
n(470079);
var s = n(120356),
    a = n.n(s),
    l = n(512722),
    r = n.n(l),
    o = n(442837),
    c = n(481060),
    u = n(730749),
    d = n(726542),
    h = n(600164),
    m = n(750154),
    p = n(592125),
    _ = n(594174),
    f = n(979651),
    E = n(374129),
    g = n(639351),
    C = n(503438),
    I = n(802856),
    x = n(387903),
    T = n(606925),
    v = n(719216),
    S = n(429589),
    N = n(276149),
    A = n(636245),
    Z = n(697761),
    M = n(611459),
    b = n(544671),
    R = n(757182),
    L = n(910424),
    j = n(981631),
    P = n(638937);
t.Z = (0, u.Z)((e) => {
    let { activity: t, embeddedActivity: n, user: s, applicationStream: l, className: u, guildId: O, channelId: y, source: D, color: k = c.Button.Colors.WHITE, look: U = c.Button.Looks.OUTLINED, type: w, onAction: B, isEmbedded: H = !1 } = e,
        G = (0, o.e7)([_.default], () => {
            let e = _.default.getCurrentUser();
            return r()(null != e, 'UserActivityActions: currentUser cannot be undefined'), e;
        }),
        V = w === x.Y.STREAM_PREVIEW || null != l,
        F = (0, C.Z)(t),
        W = F || V ? h.Z.Direction.HORIZONTAL : h.Z.Direction.VERTICAL,
        z = (null == t ? void 0 : t.type) === j.IIU.HANG_STATUS,
        Y = (0, o.e7)([f.Z, p.Z], () => {
            var e;
            return z ? p.Z.getChannel(null === (e = f.Z.getVoiceStateForUser(s.id)) || void 0 === e ? void 0 : e.channelId) : null;
        }),
        K = W === h.Z.Direction.VERTICAL;
    return (0, i.jsx)(h.Z, {
        grow: 0,
        align: h.Z.Align.STRETCH,
        direction: W,
        wrap: K ? h.Z.Wrap.WRAP : h.Z.Wrap.NO_WRAP,
        className: a()(u, P.buttonsWrapper, K ? P.vertical : P.horizontal),
        children: (() => {
            if ((0, I.Z)(t))
                return (0, i.jsx)(
                    T.Z,
                    {
                        platform: d.Z.get(j.ABu.XBOX),
                        look: U,
                        color: k,
                        onAction: B,
                        Icon: g.Z
                    },
                    'ConnectPlatformActivityButton'
                );
            if ((null == t ? void 0 : t.platform) === j.M7m.PS4 || (null == t ? void 0 : t.platform) === j.M7m.PS5)
                return (0, i.jsx)(
                    T.Z,
                    {
                        look: U,
                        color: k,
                        platform: d.Z.get(j.ABu.PLAYSTATION),
                        onAction: B,
                        Icon: E.Z
                    },
                    'ConnectPlatformActivityButton'
                );
            if (F) {
                let e = (0, i.jsx)(
                        b.Z,
                        {
                            activity: t,
                            user: s,
                            guildId: O,
                            channelId: y,
                            source: D,
                            look: U,
                            color: k,
                            onAction: B
                        },
                        'spotify-activity-sync-button'
                    ),
                    n = (0, i.jsx)(
                        M.Z,
                        {
                            activity: t,
                            user: s,
                            source: D,
                            look: U,
                            color: k,
                            onAction: B
                        },
                        'spotify-activity-play-button'
                    );
                return (0, i.jsxs)(i.Fragment, {
                    children: [n, e]
                });
            }
            if ((0, m.dS)(t)) {
                let e = (0, m.rq)(t);
                return null == e
                    ? null
                    : (0, i.jsx)(
                          A.Z,
                          {
                              guildId: e.guildId,
                              channelId: e.channelId,
                              color: k,
                              look: U,
                              onAction: B
                          },
                          e.channelId
                      );
            }
            return V
                ? (0, i.jsx)(
                      L.Z,
                      {
                          isCurrentUser: G.id === s.id,
                          color: k,
                          look: U,
                          applicationStream: l,
                          onAction: B
                      },
                      'watch-button'
                  )
                : z && null != Y
                  ? (0, i.jsx)(
                        N.Z,
                        {
                            color: k,
                            look: U,
                            hangStatusChannel: Y,
                            onAction: B
                        },
                        'hang-status-button'
                    )
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(
                                R.Z,
                                {
                                    activity: t,
                                    color: k,
                                    look: U,
                                    onAction: B
                                },
                                'watch-button'
                            ),
                            (0, i.jsx)(
                                S.Z,
                                {
                                    activity: t,
                                    embeddedActivity: n,
                                    user: s,
                                    color: k,
                                    look: U,
                                    isEmbedded: H,
                                    onAction: B
                                },
                                'join-activity-button'
                            ),
                            (0, i.jsx)(
                                Z.Z,
                                {
                                    activity: t,
                                    user: s,
                                    color: k,
                                    look: U,
                                    onAction: B
                                },
                                'notify-button'
                            ),
                            (0, i.jsx)(
                                v.Z,
                                {
                                    user: s,
                                    color: k,
                                    look: U,
                                    activity: t,
                                    onAction: B
                                },
                                'custom-activity-button'
                            )
                        ]
                    });
        })()
    });
});
