n.d(t, {
    H: function () {
        return S;
    }
});
var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    r = n(442837),
    l = n(481060),
    o = n(904245),
    c = n(287734),
    u = n(957730),
    d = n(739566),
    _ = n(779125),
    E = n(599706),
    I = n(703656),
    m = n(592125),
    T = n(430824),
    h = n(594174),
    N = n(938475),
    f = n(5192),
    C = n(981631),
    p = n(689938),
    g = n(745571);
function S(e) {
    var t, n, a, S, A, R, x, O, M, v;
    let { message: L, channel: Z } = e,
        P =
            null === (a = L.embeds[0]) || void 0 === a
                ? void 0
                : null === (n = a.fields) || void 0 === n
                  ? void 0
                  : null ===
                          (t = n.find((e) => {
                              let { rawName: t } = e;
                              return 'guild_id' === t;
                          })) || void 0 === t
                    ? void 0
                    : t.rawValue,
        b =
            null === (R = L.embeds[0]) || void 0 === R
                ? void 0
                : null === (A = R.fields) || void 0 === A
                  ? void 0
                  : null ===
                          (S = A.find((e) => {
                              let { rawName: t } = e;
                              return 'channel_id' === t;
                          })) || void 0 === S
                    ? void 0
                    : S.rawValue,
        D = (0, r.e7)([T.Z], () => T.Z.getGuild(P)),
        j = (0, r.e7)([m.Z], () => m.Z.getChannel(b)),
        U = (0, r.e7)([h.default], () => h.default.getCurrentUser()),
        y = (0, r.e7)([], () => L.author.id === (null == U ? void 0 : U.id)),
        B = null === (x = Z.recipients) || void 0 === x ? void 0 : x.find((e) => e !== L.author.id),
        k = (0, r.e7)([h.default], () => (null != B ? h.default.getUser(B) : null)),
        G = (0, d.ZP)(L),
        F = (0, f._T)(Z.getGuildId(), Z.id, k),
        w = (0, r.Wu)([N.ZP], () => (null != j ? N.ZP.getVoiceStatesForChannel(j) : []), [j]),
        V = w.some((e) => e.user.id === (null == U ? void 0 : U.id)),
        H =
            null === (v = L.embeds[0]) || void 0 === v
                ? void 0
                : null === (M = v.fields) || void 0 === M
                  ? void 0
                  : null ===
                          (O = M.find((e) => {
                              let { rawName: t } = e;
                              return 'voice_user_ids' === t;
                          })) || void 0 === O
                    ? void 0
                    : O.rawValue,
        Y = null != H ? H.split(',') : [],
        W = (0, r.Wu)([h.default], () => Y.map((e) => h.default.getUser(e)).filter(Boolean)),
        K = y && null != k ? p.Z.Messages.WAVED_AT_USER.format({ username: F }) : p.Z.Messages.WAVED_AT_YOU.format({ username: G.nick }),
        z = null != D && null != j,
        Q = null;
    (Q = z ? (y || V ? p.Z.Messages.YOU_ARE_IN_CHANNEL.format({ channelHook: (e, t) => (0, i.jsx)(_.Z, { channel: null != j ? j : void 0 }, t) }) : p.Z.Messages.THEY_ARE_IN_CHANNEL.format({ channelHook: (e, t) => (0, i.jsx)(_.Z, { channel: null != j ? j : void 0 }, t) })) : p.Z.Messages.CANNOT_ACCESS_HANGOUT), 0 === w.length && (Q = y ? p.Z.Messages.HANGOUT_OVER_SENDER : p.Z.Messages.HANGOUT_OVER_RECEIVER);
    let q = y ? p.Z.Messages.WAVE_AGAIN : p.Z.Messages.WAVE_BACK;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)('div', {
                className: g.card,
                children: [
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: K
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: Q
                    }),
                    w.length > 0
                        ? (0, i.jsx)('div', {
                              className: g.participants,
                              children: (0, i.jsx)(E.Z, {
                                  guildId: P,
                                  partySize: {
                                      knownSize: w.length,
                                      unknownSize: 0,
                                      totalSize: w.length
                                  },
                                  members: w.map((e) => e.user),
                                  maxAvatarsShown: 5
                              })
                          })
                        : (0, i.jsx)('div', {
                              className: s()(g.participants, g.disabled),
                              children: (0, i.jsx)(E.Z, {
                                  guildId: P,
                                  partySize: {
                                      knownSize: W.length,
                                      unknownSize: Y.length - W.length,
                                      totalSize: Y.length
                                  },
                                  members: W,
                                  maxAvatarsShown: 5
                              })
                          })
                ]
            }),
            (0, i.jsxs)('div', {
                className: g.actions,
                children: [
                    (0, i.jsxs)(l.Button, {
                        color: l.Button.Colors.BRAND,
                        onClick: () => {
                            null != b && null != P && ((0, I.uL)(C.Z5c.CHANNEL(P, b)), c.default.selectVoiceChannel(b));
                        },
                        className: g.button,
                        innerClassName: g.buttonInner,
                        disabled: V || !z,
                        children: [
                            (0, i.jsx)(l.VoiceNormalIcon, {
                                size: 'md',
                                color: 'currentColor'
                            }),
                            p.Z.Messages.JOIN_HANGOUT
                        ]
                    }),
                    (0, i.jsx)(l.Button, {
                        color: l.Button.Colors.PRIMARY,
                        onClick: () => {
                            o.Z.sendMessage(Z.id, u.ZP.parse(Z, '\uD83D\uDC4B'));
                        },
                        className: g.button,
                        children: q
                    })
                ]
            })
        ]
    });
}
