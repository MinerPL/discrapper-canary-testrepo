n.d(t, {
    p: function () {
        return E;
    }
}),
    n(789020);
var r = n(570140),
    i = n(881052),
    a = n(592125),
    s = n(630388),
    o = n(317381),
    l = n(424291),
    u = n(966434),
    c = n(649591),
    d = n(224189),
    f = n(574952),
    _ = n(981631);
async function h(e, t, n) {
    try {
        return await (0, d.Z)(e, t);
    } catch (a) {
        r.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
            nonce: '',
            applicationId: e,
            channelId: t,
            guildId: n,
            error: new i.Hx(a)
        });
    }
}
async function p(e) {
    let { currentEmbeddedApplication: t } = e;
    return (
        !!(
            null == t ||
            (await new Promise((e) => {
                let n = o.ZP.getSelfEmbeddedActivities().get(t.id),
                    r = a.Z.getChannel(null == n ? void 0 : n.channelId);
                if (null == r) {
                    e(!0);
                    return;
                }
                (0, u.Z)(
                    t,
                    r,
                    () => {
                        (0, f.Z)().leaveActivity({
                            channelId: r.id,
                            applicationId: t.id
                        }),
                            e(!0);
                    },
                    () => e(!1)
                );
            }))
        ) || !1
    );
}
async function m(e) {
    let { application: t, applicationId: n, channel: r, user: i } = e;
    if (null == i.nsfwAllowed) {
        var a, s;
        let e = null != t ? t : await h(n, r.id, r.getGuildId());
        if (
            null == e ||
            (null !== (s = null === (a = e.embeddedActivityConfig) || void 0 === a ? void 0 : a.requires_age_gate) &&
                void 0 !== s &&
                s &&
                !(await new Promise((t) => {
                    (0, l.V)({
                        application: e,
                        onAgree: () => t(!0),
                        onDisagree: () => t(!1)
                    });
                })))
        )
            return !1;
    }
    return !0;
}
async function g(e) {
    let { application: t, applicationId: n, channel: r } = e,
        i = null != t ? t : await h(n, r.id, r.getGuildId());
    return (
        null != i &&
        (!!((0, s.yE)(i.flags, _.udG.EMBEDDED_RELEASED) || i.isVerified || o.ZP.hasActivityEverBeenLaunched(n)) ||
            new Promise((e) => {
                (0, c.j)({
                    application: i,
                    onConfirm: () => e(!0),
                    onCancel: () => e(!1)
                });
            }))
    );
}
async function E(e) {
    return !!((await p({ currentEmbeddedApplication: e.currentEmbeddedApplication })) && (await m(e)) && (await g(e))) || !1;
}
