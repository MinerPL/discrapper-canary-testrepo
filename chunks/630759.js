t.d(n, {
    J6: function () {
        return v;
    },
    LO: function () {
        return F;
    },
    TQ: function () {
        return m;
    },
    UB: function () {
        return x;
    },
    ZU: function () {
        return L;
    },
    Zn: function () {
        return P;
    },
    aZ: function () {
        return Z;
    },
    bo: function () {
        return V;
    },
    fz: function () {
        return W;
    },
    kK: function () {
        return w;
    },
    lg: function () {
        return H;
    },
    om: function () {
        return B;
    },
    pL: function () {
        return D;
    },
    uV: function () {
        return p;
    },
    uX: function () {
        return G;
    }
}),
    t(518263),
    t(970173),
    t(520712),
    t(268111),
    t(941497),
    t(32026),
    t(480839),
    t(744285),
    t(492257),
    t(873817),
    t(47120);
var r = t(250683),
    i = t(512722),
    E = t.n(i),
    u = t(913527),
    a = t.n(u),
    o = t(544891),
    s = t(253135),
    c = t(668781),
    _ = t(314897),
    l = t(131951),
    d = t(19780),
    f = t(959457),
    S = t(594174),
    I = t(70956),
    T = t(63063),
    R = t(5192),
    N = t(960048),
    A = t(51144),
    C = t(718629),
    M = t(615830),
    h = t(352954),
    g = t(571826),
    O = t(760373),
    y = t(981631),
    U = t(689938);
function p() {
    return T.Z.getArticleURL(y.BhN.END_TO_END_ENCRYPTION);
}
function Z() {
    return T.Z.getArticleURL(y.BhN.END_TO_END_ENCRYPTION);
}
function D() {
    return T.Z.getArticleURL(y.BhN.END_TO_END_ENCRYPTION);
}
function m(e, n, t, r, i) {
    t ? C.Z.createSecureFramesVerifiedKey(e, n) : C.Z.createSecureFramesTransientKey(e, n),
        (0, g.M1)({
            channelId: r,
            userId: e,
            analyticsLocation: i
        });
}
function F(e, n, t) {
    if (t) {
        let t = (0, s.MK)(new Uint8Array(n));
        C.Z.deleteSecureFramesVerifiedKey(e, t);
    } else C.Z.deleteSecureFramesTransientKey(e);
}
function L(e, n) {
    h.Z.openSecureFramesUpdateConfirmation({
        title: U.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_TITLE,
        subtitle: U.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_SUBTITLE,
        onConfirm: () => {
            C.Z.deleteSecureFramesVerifiedKey(e, n), (0, g.Pn)();
        }
    });
}
function P(e) {
    let n = S.default.getUser(e),
        t = A.ZP.getName(n);
    h.Z.openSecureFramesUpdateConfirmation({
        title: U.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_TITLE.format({ username: t }),
        subtitle: U.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_SUBTITLE,
        onConfirm: () => {
            C.Z.deleteSecureFramesUserVerifiedKeys(e), (0, g.DF)();
        }
    });
}
function V(e) {
    let n = a()(e),
        t = a()().diff(n, 's');
    if (t > 12 * I.Z.Seconds.DAYS_30) {
        let e = Math.round(t / (12 * I.Z.Seconds.DAYS_30));
        return U.Z.Messages.E2EE_USER_VERIFIED_YEARS_AGO.format({ count: e });
    }
    if (t > I.Z.Seconds.DAYS_30) {
        let e = Math.round(t / I.Z.Seconds.DAYS_30);
        return U.Z.Messages.E2EE_USER_VERIFIED_MONTHS_AGO.format({ count: e });
    }
    if (t > 7 * I.Z.Seconds.DAY) {
        let e = Math.round(t / (7 * I.Z.Seconds.DAY));
        return U.Z.Messages.E2EE_USER_VERIFIED_WEEKS_AGO.format({ count: e });
    } else if (t > I.Z.Seconds.DAY) {
        let e = Math.round(t / I.Z.Seconds.DAY);
        return U.Z.Messages.E2EE_USER_VERIFIED_DAYS_AGO.format({ count: e });
    } else if (t > I.Z.Seconds.HOUR) {
        let e = Math.round(t / I.Z.Seconds.HOUR);
        return U.Z.Messages.E2EE_USER_VERIFIED_HOURS_AGO.format({ count: e });
    } else {
        if (!(t > I.Z.Seconds.MINUTE)) return U.Z.Messages.E2EE_USER_VERIFIED_SECONDS_AGO.format({ count: t });
        let e = Math.round(t / I.Z.Seconds.MINUTE);
        return U.Z.Messages.E2EE_USER_VERIFIED_MINUTES_AGO.format({ count: e });
    }
}
function w(e) {
    let { isCurrentUserKeyPersistent: n, isOtherUserKeyPersistent: t, otherUserNickname: r } = e;
    if (n && t) return U.Z.Messages.E2EE_PERSISTENT_VERIFICATION_DESC.format({ helpArticle: p() });
    if (n)
        return U.Z.Messages.E2EE_OTHER_USER_TRANSIENT_VERIFICATION_DESC.format({
            username: r,
            helpArticle: p()
        });
    if (t) return U.Z.Messages.E2EE_CURRENT_USER_TRANSIENT_VERIFICATION_DESC.format({ helpArticle: p() });
    else return U.Z.Messages.E2EE_TRANSIENT_VERIFICATION_DESC.format({ helpArticle: p() });
}
async function b(e) {
    let n = _.default.getStaticAuthSessionId();
    return E()(null != n, '[getCurrentUserPublicKey] session id should not be null'), await l.Z.getMLSSigningKey(n, e);
}
function K(e) {
    let n = r.fromByteArray(new Uint8Array(e));
    return 'data:application/octet-stream;base64,'.concat(n);
}
async function v(e, n, t) {
    try {
        return (
            await o.tn.post({
                url: y.ANM.VOICE_MATCH_PUBLIC_KEY(e),
                body: {
                    public_key: K(n),
                    key_version: t
                }
            })
        ).body.is_match;
    } catch (e) {
        throw (N.Z.captureException(e), e);
    }
}
async function Y(e) {
    let { key: n, signature: t } = await b(e);
    try {
        await o.tn.put({
            url: y.ANM.VOICE_PUBLIC_KEYS(),
            body: {
                public_key: K(n),
                signature: K(t),
                key_version: e
            }
        }),
            C.Z.addUploadedKeyVersion(e);
    } catch (e) {
        throw (N.Z.captureException(e), e);
    }
}
function k(e) {
    return M.Z.getUploadedKeyVersionsCached().includes(e);
}
async function B(e) {
    !k(e) && (await Y(e));
}
async function G(e) {
    if (!k(e)) return await Y(e), !0;
    let n = _.default.getId(),
        { key: t } = await b(e),
        r = await v(n, t, e);
    return !r && (0, g.KA)(e), r;
}
function x(e, n) {
    let [t, r] = n;
    if (!t.isUserConnected(e)) return !1;
    let i = t.getSecureFramesRosterMapEntry(e);
    if (null == i) return !1;
    let E = new Uint8Array(i);
    for (let n of r.getAllActiveStreamKeys()) {
        if (!r.isUserConnected(n, e)) continue;
        let t = f.Z.getSecureFramesRosterMapEntry(n, e);
        if (null == t) return !0;
        let i = new Uint8Array(t);
        for (let e = 0; e < E.length; e++) if (E[e] !== i[e]) return !0;
    }
    return !1;
}
function H(e) {
    let { userId: n, channelId: t, nickname: r } = e;
    (0, g.CW)({
        userId: n,
        channelId: t,
        keyVersion: O.GB,
        reason: O.Xe.OTHER_USER_INCONSISTENT_KEYS
    }),
        c.Z.show({
            title: U.Z.Messages.E2EE_INCONSISTENT_KEY_MISMATCH_TITLE,
            body: U.Z.Messages.E2EE_INCONSISTENT_KEY_MISMATCH_SUBTITLE.format({ username: r })
        });
}
function W(e) {
    let { userId: n, guildId: t, channelId: r } = e;
    if (!x(n, [d.Z, f.Z])) return !0;
    {
        let e = S.default.getUser(n),
            i = R.ZP.getName(t, r, e);
        return (
            H({
                userId: n,
                channelId: r,
                nickname: i
            }),
            !1
        );
    }
}
