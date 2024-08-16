n.d(t, {
    J6: function () {
        return F;
    },
    LO: function () {
        return y;
    },
    TQ: function () {
        return M;
    },
    ZU: function () {
        return Z;
    },
    Zn: function () {
        return p;
    },
    bo: function () {
        return N;
    },
    kK: function () {
        return m;
    },
    om: function () {
        return x;
    },
    uX: function () {
        return V;
    }
}),
    n(518263),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817);
var r = n(250683),
    i = n(512722),
    a = n.n(i),
    s = n(913527),
    o = n.n(s),
    E = n(544891),
    u = n(253135),
    c = n(314897),
    l = n(131951),
    d = n(594174),
    _ = n(70956),
    f = n(960048),
    I = n(51144),
    S = n(718629),
    R = n(615830),
    h = n(352954),
    C = n(571826),
    A = n(760373),
    T = n(981631),
    g = n(689938);
function M(e, t, n, r, i) {
    n ? S.Z.createVerifiedKey(e, t) : S.Z.createSecureFramesTransientKey(e, t),
        (0, C.M1)({
            channelId: r,
            userId: e,
            analyticsLocation: i
        });
}
function y(e, t, n) {
    if (n) {
        let n = (0, u.MK)(new Uint8Array(t));
        S.Z.deleteVerifiedKey(e, n);
    } else S.Z.deleteSecureFramesTransientKey(e);
}
function Z(e, t) {
    h.Z.openSecureFramesUpdateConfirmation({
        title: g.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_TITLE,
        subtitle: g.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_SUBTITLE,
        onConfirm: () => {
            S.Z.deleteVerifiedKey(e, t), (0, C.Pn)();
        }
    });
}
function p(e) {
    let t = d.default.getUser(e),
        n = I.ZP.getName(t);
    h.Z.openSecureFramesUpdateConfirmation({
        title: g.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_TITLE.format({ username: n }),
        subtitle: g.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_SUBTITLE,
        onConfirm: () => {
            S.Z.deleteAllUserVerifiedKeys(e), (0, C.DF)();
        }
    });
}
function N(e) {
    let t = o()(e),
        n = o()().diff(t, 's');
    if (n > 12 * _.Z.Seconds.DAYS_30) {
        let e = Math.round(n / (12 * _.Z.Seconds.DAYS_30));
        return g.Z.Messages.E2EE_USER_VERIFIED_YEARS_AGO.format({ count: e });
    }
    if (n > _.Z.Seconds.DAYS_30) {
        let e = Math.round(n / _.Z.Seconds.DAYS_30);
        return g.Z.Messages.E2EE_USER_VERIFIED_MONTHS_AGO.format({ count: e });
    }
    if (n > 7 * _.Z.Seconds.DAY) {
        let e = Math.round(n / (7 * _.Z.Seconds.DAY));
        return g.Z.Messages.E2EE_USER_VERIFIED_WEEKS_AGO.format({ count: e });
    } else if (n > _.Z.Seconds.DAY) {
        let e = Math.round(n / _.Z.Seconds.DAY);
        return g.Z.Messages.E2EE_USER_VERIFIED_DAYS_AGO.format({ count: e });
    } else if (n > _.Z.Seconds.HOUR) {
        let e = Math.round(n / _.Z.Seconds.HOUR);
        return g.Z.Messages.E2EE_USER_VERIFIED_HOURS_AGO.format({ count: e });
    } else {
        if (!(n > _.Z.Seconds.MINUTE)) return g.Z.Messages.E2EE_USER_VERIFIED_SECONDS_AGO.format({ count: n });
        let e = Math.round(n / _.Z.Seconds.MINUTE);
        return g.Z.Messages.E2EE_USER_VERIFIED_MINUTES_AGO.format({ count: e });
    }
}
function m(e) {
    let { isCurrentUserPersistent: t, isOtherUserPersistent: n, otherUserNickname: r } = e;
    if (t && n) return g.Z.Messages.E2EE_PERSISTENT_VERIFICATION_DESC.format({ helpArticle: A.l4 });
    if (t)
        return g.Z.Messages.E2EE_OTHER_USER_TRANSIENT_VERIFICATION_DESC.format({
            username: r,
            helpArticle: A.l4
        });
    if (n) return g.Z.Messages.E2EE_CURRENT_USER_TRANSIENT_VERIFICATION_DESC.format({ helpArticle: A.l4 });
    else return g.Z.Messages.E2EE_TRANSIENT_VERIFICATION_DESC.format({ helpArticle: A.l4 });
}
async function U(e) {
    let t = c.default.getStaticAuthSessionId();
    return a()(null != t, '[getCurrentUserPublicKey] session id should not be null'), await l.Z.getMLSSigningKey(t, e);
}
function D(e) {
    let t = r.fromByteArray(new Uint8Array(e));
    return 'data:application/octet-stream;base64,'.concat(t);
}
async function F(e, t, n) {
    try {
        return (
            await E.tn.post({
                url: T.ANM.VOICE_MATCH_PUBLIC_KEY(e),
                body: {
                    public_key: D(t),
                    key_version: n
                }
            })
        ).body.is_match;
    } catch (e) {
        throw (f.Z.captureException(e), e);
    }
}
async function L(e) {
    let { key: t, signature: n } = await U(e);
    try {
        await E.tn.put({
            url: T.ANM.VOICE_PUBLIC_KEYS(),
            body: {
                public_key: D(t),
                signature: D(n),
                key_version: e
            }
        }),
            S.Z.addCurrentUserUploadedKeyVersionCached(e);
    } catch (e) {
        throw (f.Z.captureException(e), e);
    }
}
function b(e) {
    return R.Z.getUploadedKeyVersionsCached().includes(e);
}
async function x(e) {
    !b(e) && (await L(e));
}
async function V(e) {
    if (!b(e)) return await L(e), !0;
    let t = c.default.getId(),
        { key: n } = await U(e),
        r = await F(t, n, e);
    return !r && (0, C.KA)(e), r;
}
