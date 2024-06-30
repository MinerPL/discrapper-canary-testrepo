n.d(t, {
    H: function () {
        return S;
    }
});
var i = n(735250);
n(470079);
var a = n(120356), s = n.n(a), l = n(442837), r = n(481060), o = n(904245), c = n(287734), d = n(957730), u = n(739566), _ = n(599706), E = n(703656), m = n(592125), I = n(430824), T = n(594174), h = n(938475), N = n(622116), f = n(5192), p = n(981631), C = n(689938), g = n(531878);
function S(e) {
    var t, n, a, S, A, x, O, R, M, v;
    let {
            message: L,
            channel: Z
        } = e, P = null === (a = L.embeds[0]) || void 0 === a ? void 0 : null === (n = a.fields) || void 0 === n ? void 0 : null === (t = n.find(e => {
            let {rawName: t} = e;
            return 'guild_id' === t;
        })) || void 0 === t ? void 0 : t.rawValue, b = null === (x = L.embeds[0]) || void 0 === x ? void 0 : null === (A = x.fields) || void 0 === A ? void 0 : null === (S = A.find(e => {
            let {rawName: t} = e;
            return 'channel_id' === t;
        })) || void 0 === S ? void 0 : S.rawValue, D = (0, l.e7)([I.Z], () => I.Z.getGuild(P)), j = (0, l.e7)([m.Z], () => m.Z.getChannel(b)), U = (0, l.e7)([T.default], () => T.default.getCurrentUser()), y = (0, l.e7)([], () => L.author.id === (null == U ? void 0 : U.id)), B = null === (O = Z.recipients) || void 0 === O ? void 0 : O.find(e => e !== L.author.id), k = (0, l.e7)([T.default], () => null != B ? T.default.getUser(B) : null), G = (0, u.ZP)(L), F = (0, f._T)(Z.getGuildId(), Z.id, k), w = (0, l.Wu)([h.ZP], () => null != j ? h.ZP.getVoiceStatesForChannel(j) : [], [j]), V = w.some(e => e.user.id === (null == U ? void 0 : U.id)), H = null === (v = L.embeds[0]) || void 0 === v ? void 0 : null === (M = v.fields) || void 0 === M ? void 0 : null === (R = M.find(e => {
            let {rawName: t} = e;
            return 'voice_user_ids' === t;
        })) || void 0 === R ? void 0 : R.rawValue, Y = null != H ? H.split(',') : [], W = (0, l.Wu)([T.default], () => Y.map(e => T.default.getUser(e)).filter(Boolean)), z = y && null != k ? C.Z.Messages.WAVED_AT_USER.format({ username: F }) : C.Z.Messages.WAVED_AT_YOU.format({ username: G.nick }), K = null != D && null != j, Q = null;
    Q = K ? y || V ? C.Z.Messages.YOU_ARE_IN_CHANNEL.format({ channelHook: (e, t) => (0, i.jsx)(N.Z, { channel: null != j ? j : void 0 }, t) }) : C.Z.Messages.THEY_ARE_IN_CHANNEL.format({ channelHook: (e, t) => (0, i.jsx)(N.Z, { channel: null != j ? j : void 0 }, t) }) : C.Z.Messages.CANNOT_ACCESS_HANGOUT, 0 === w.length && (Q = y ? C.Z.Messages.HANGOUT_OVER_SENDER : C.Z.Messages.HANGOUT_OVER_RECEIVER);
    let q = y ? C.Z.Messages.WAVE_AGAIN : C.Z.Messages.WAVE_BACK;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)('div', {
                className: g.card,
                children: [
                    (0, i.jsx)(r.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: z
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: Q
                    }),
                    w.length > 0 ? (0, i.jsx)('div', {
                        className: g.participants,
                        children: (0, i.jsx)(_.Z, {
                            guildId: P,
                            partySize: {
                                knownSize: w.length,
                                unknownSize: 0,
                                totalSize: w.length
                            },
                            members: w.map(e => e.user),
                            maxAvatarsShown: 5
                        })
                    }) : (0, i.jsx)('div', {
                        className: s()(g.participants, g.disabled),
                        children: (0, i.jsx)(_.Z, {
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
                    (0, i.jsxs)(r.Button, {
                        color: r.Button.Colors.BRAND,
                        onClick: () => {
                            null != b && null != P && ((0, E.uL)(p.Z5c.CHANNEL(P, b)), c.default.selectVoiceChannel(b));
                        },
                        className: g.button,
                        innerClassName: g.buttonInner,
                        disabled: V || !K,
                        children: [
                            (0, i.jsx)(r.VoiceNormalIcon, {
                                size: 'md',
                                color: 'currentColor'
                            }),
                            C.Z.Messages.JOIN_HANGOUT
                        ]
                    }),
                    (0, i.jsx)(r.Button, {
                        color: r.Button.Colors.PRIMARY,
                        onClick: () => {
                            o.Z.sendMessage(Z.id, d.ZP.parse(Z, '\uD83D\uDC4B'));
                        },
                        className: g.button,
                        children: q
                    })
                ]
            })
        ]
    });
}
