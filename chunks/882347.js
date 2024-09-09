n.d(t, {
    p: function () {
        return p;
    }
}),
    n(789020);
var r = n(570140),
    i = n(881052),
    a = n(630388),
    s = n(317381),
    o = n(424291),
    l = n(966434),
    u = n(649591),
    c = n(224189),
    d = n(981631);
async function _(e, t, n) {
    try {
        return await (0, c.Z)(e, t);
    } catch (a) {
        r.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
            applicationId: e,
            channelId: t,
            guildId: n,
            error: new i.Hx(a)
        });
    }
}
async function E(e) {
    let { channel: t, currentEmbeddedApplication: n, embeddedActivitiesManager: r } = e;
    return (
        !!(
            null == n ||
            (await new Promise((e) => {
                (0, l.Z)(
                    n,
                    t,
                    () => {
                        r.leaveActivity({
                            channelId: t.id,
                            applicationId: n.id
                        }),
                            e(!0);
                    },
                    () => e(!1)
                );
            }))
        ) || !1
    );
}
async function f(e) {
    let { application: t, applicationId: n, channel: r, user: i } = e;
    if (null == i.nsfwAllowed) {
        var a, s;
        let e = null != t ? t : await _(n, r.id, r.getGuildId());
        if (
            null == e ||
            (null !== (s = null === (a = e.embeddedActivityConfig) || void 0 === a ? void 0 : a.requires_age_gate) &&
                void 0 !== s &&
                s &&
                !(await new Promise((t) => {
                    (0, o.V)({
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
async function h(e) {
    let { application: t, applicationId: n, channel: r } = e,
        i = null != t ? t : await _(n, r.id, r.getGuildId());
    return (
        null != i &&
        (!!((0, a.yE)(i.flags, d.udG.EMBEDDED_RELEASED) || s.ZP.hasActivityEverBeenLaunched(n)) ||
            new Promise((e) => {
                (0, u.j)({
                    application: i,
                    onConfirm: () => e(!0),
                    onCancel: () => e(!1)
                });
            }))
    );
}
async function p(e) {
    return !!((await E(e)) && (await f(e)) && (await h(e))) || !1;
}
