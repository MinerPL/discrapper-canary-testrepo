a.d(n, {
    Z: function () {
        return P;
    }
});
var i = a(735250);
a(470079);
var s = a(442837),
    r = a(954138),
    o = a(979264),
    l = a(648052),
    t = a(530),
    c = a(420654),
    u = a(116854),
    d = a(271383),
    A = a(246946),
    E = a(654904),
    _ = a(228168),
    I = a(451563);
function P(e) {
    var n;
    let { user: a, displayProfile: P, guild: p, pendingAvatar: v, pendingNickname: m, pendingGlobalName: N, pendingBio: C, pendingPronouns: f, isTryItOutFlow: T, hideBioSection: L } = e,
        R = (0, s.e7)([d.ZP], () => (null == p ? null : d.ZP.getMember(p.id, a.id))),
        M = (0, s.e7)([A.Z], () => A.Z.hidePersonalInformation),
        Z = (0, r.Z)('ProfileCustomizationPreviewBody'),
        S = null == P ? void 0 : null === (n = P.getPreviewBio(C)) || void 0 === n ? void 0 : n.value,
        g = null != f ? f : null == P ? void 0 : P.pronouns,
        h = (0, E.Ly)({
            pendingNickname: m,
            pendingGlobalName: N,
            user: a,
            guildMember: R
        });
    return (0, i.jsxs)('div', {
        inert: '',
        className: I.body,
        children: [
            (0, i.jsx)(t.Z, {
                user: a,
                profileType: _.y0.BITE_SIZE,
                usernameIcon: (() => {
                    if (!(null != R)) return;
                    if (null !== v && !!(null != R.avatar || null != v))
                        return (0, i.jsx)(u.Z, {
                            user: a,
                            nickname: h
                        });
                })(),
                nickname: h,
                pronouns: g,
                isTryItOut: T,
                tags: (0, i.jsx)(l.Z, {
                    displayProfile: P,
                    profileType: _.y0.BITE_SIZE
                })
            }),
            Z &&
                (0, i.jsx)(o.ZP, {
                    userId: a.id,
                    inline: !1
                }),
            !L &&
                null != S &&
                '' !== S &&
                (0, i.jsx)(c.Z, {
                    user: a,
                    bio: S,
                    hidePersonalInformation: M,
                    viewFullBioDisabled: !0
                })
        ]
    });
}
