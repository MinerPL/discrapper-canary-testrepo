var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(512722),
    o = n.n(s),
    l = n(442837),
    u = n(481060),
    c = n(730749),
    d = n(726542),
    _ = n(600164),
    E = n(750154),
    f = n(592125),
    h = n(594174),
    p = n(979651),
    m = n(374129),
    I = n(639351),
    T = n(503438),
    g = n(802856),
    S = n(387903),
    A = n(606925),
    N = n(719216),
    v = n(429589),
    O = n(276149),
    R = n(636245),
    C = n(697761),
    y = n(611459),
    D = n(544671),
    L = n(757182),
    b = n(910424),
    M = n(981631),
    P = n(638937);
t.Z = (0, c.Z)((e) => {
    let { activity: t, embeddedActivity: n, user: i, applicationStream: s, className: c, guildId: U, channelId: w, source: x, color: G = u.Button.Colors.WHITE, look: k = u.Button.Looks.OUTLINED, type: B, onAction: F, isEmbedded: V = !1 } = e,
        H = (0, l.e7)([h.default], () => {
            let e = h.default.getCurrentUser();
            return o()(null != e, 'UserActivityActions: currentUser cannot be undefined'), e;
        }),
        Z = B === S.Y.PROFILE || B === S.Y.PROFILE_V2 || B === S.Y.SIMPLIFIED_PROFILE,
        Y = B === S.Y.STREAM_PREVIEW || null != s,
        j = B === S.Y.SIMPLIFIED_PROFILE || B === S.Y.BITE_SIZE_POPOUT,
        W = (0, T.Z)(t),
        K = Z ? _.Z.Align.END : _.Z.Align.STRETCH,
        z = W || Y ? _.Z.Direction.HORIZONTAL : _.Z.Direction.VERTICAL,
        q = (null == t ? void 0 : t.type) === M.IIU.HANG_STATUS,
        Q = (0, l.e7)([p.Z, f.Z], () => {
            var e;
            return q ? f.Z.getChannel(null === (e = p.Z.getVoiceStateForUser(i.id)) || void 0 === e ? void 0 : e.channelId) : null;
        }),
        X = z === _.Z.Direction.VERTICAL;
    return (0, r.jsx)(_.Z, {
        grow: 0,
        align: K,
        direction: z,
        wrap: X ? _.Z.Wrap.WRAP : _.Z.Wrap.NO_WRAP,
        className: a()(c, P.buttonsWrapper, X ? P.vertical : P.horizontal),
        children: (() => {
            if ((0, g.Z)(t))
                return (0, r.jsx)(
                    A.Z,
                    {
                        platform: d.Z.get(M.ABu.XBOX),
                        look: k,
                        color: G,
                        onAction: F,
                        Icon: I.Z
                    },
                    'ConnectPlatformActivityButton'
                );
            if ((null == t ? void 0 : t.platform) === M.M7m.PS4 || (null == t ? void 0 : t.platform) === M.M7m.PS5)
                return (0, r.jsx)(
                    A.Z,
                    {
                        look: k,
                        color: G,
                        platform: d.Z.get(M.ABu.PLAYSTATION),
                        onAction: F,
                        Icon: m.Z
                    },
                    'ConnectPlatformActivityButton'
                );
            if (W) {
                let e = (0, r.jsx)(
                        D.Z,
                        {
                            activity: t,
                            user: i,
                            guildId: U,
                            channelId: w,
                            source: x,
                            look: k,
                            color: G,
                            onAction: F
                        },
                        'spotify-activity-sync-button'
                    ),
                    n = (0, r.jsx)(
                        y.Z,
                        {
                            activity: t,
                            user: i,
                            source: x,
                            look: k,
                            color: G,
                            onAction: F
                        },
                        'spotify-activity-play-button'
                    );
                return j
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [e, n]
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [n, e]
                      });
            }
            if ((0, E.dS)(t)) {
                let e = (0, E.rq)(t);
                return null == e
                    ? null
                    : (0, r.jsx)(
                          R.Z,
                          {
                              guildId: e.guildId,
                              channelId: e.channelId,
                              color: G,
                              look: k,
                              isProfile: Z,
                              onAction: F
                          },
                          e.channelId
                      );
            }
            return Y
                ? (0, r.jsx)(
                      b.Z,
                      {
                          isCurrentUser: H.id === i.id,
                          color: G,
                          look: k,
                          applicationStream: s,
                          onAction: F
                      },
                      'watch-button'
                  )
                : q && null != Q
                  ? (0, r.jsx)(
                        O.Z,
                        {
                            color: G,
                            look: k,
                            hangStatusChannel: Q,
                            onAction: F
                        },
                        'hang-status-button'
                    )
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(
                                L.Z,
                                {
                                    activity: t,
                                    color: G,
                                    look: k,
                                    onAction: F
                                },
                                'watch-button'
                            ),
                            (0, r.jsx)(
                                v.Z,
                                {
                                    activity: t,
                                    embeddedActivity: n,
                                    user: i,
                                    color: G,
                                    look: k,
                                    isEmbedded: V,
                                    onAction: F
                                },
                                'join-activity-button'
                            ),
                            (0, r.jsx)(
                                C.Z,
                                {
                                    activity: t,
                                    user: i,
                                    color: G,
                                    look: k,
                                    onAction: F
                                },
                                'notify-button'
                            ),
                            (0, r.jsx)(
                                N.Z,
                                {
                                    user: i,
                                    color: G,
                                    look: k,
                                    activity: t,
                                    onAction: F
                                },
                                'custom-activity-button'
                            )
                        ]
                    });
        })()
    });
});
