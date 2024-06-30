n.d(t, {
    Z: function () {
        return g;
    }
});
var s = n(735250);
n(470079);
var r = n(481060), i = n(973616), a = n(131704), l = n(601964), o = n(598077), c = n(230224), u = n(258356), d = n(981631), h = n(689938), _ = n(902523);
let E = e => {
    let {state: t} = e;
    switch (t) {
    case d.r2o.ACCEPTING:
    case d.r2o.APP_OPENING:
        return !0;
    default:
        return !1;
    }
};
function g(e) {
    let {
        invite: t,
        onAcceptInvite: n,
        disableUser: g = !1
    } = e;
    if (null == t)
        return null;
    let p = null != t.guild ? new l.ZP(t.guild) : null, f = null != t.channel ? (0, a.jD)(t.channel) : null, I = null != t.target_application ? new i.Z(t.target_application) : null, m = g || null == t.inviter ? null : new o.Z(t.inviter), N = !(null != t.approximate_member_count && t.approximate_member_count > c.mx || null != p && p.hasFeature(d.oNc.COMMUNITY)) && null != m && (0, c.WT)(t), T = E(t), x = {
            invite: t,
            user: m,
            guild: p,
            channel: f,
            application: I
        };
    return (0, c.JI)(t) ? (0, s.jsx)(u.Z, {
        invite: t,
        channel: f,
        isSubmitting: T,
        onAcceptInvite: n
    }) : (0, s.jsxs)('div', {
        className: _.container,
        children: [
            (0, s.jsx)(c.GB, {
                application: I,
                guild: p,
                user: N || (0, c.X7)(t) ? m : null
            }),
            (0, c.X7)(t) ? null : (0, s.jsx)(c.jq, {
                ...x,
                showBigUserIcon: N
            }),
            (0, s.jsx)(c.UM, {
                ...x,
                showBigUserIcon: N
            }),
            (0, s.jsx)(c.V6, { ...x }),
            (0, s.jsx)(r.Button, {
                onClick: n,
                submitting: T,
                className: _.acceptButton,
                children: h.Z.Messages.INSTANT_INVITE_ACCEPT
            })
        ]
    });
}
