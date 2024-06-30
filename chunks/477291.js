n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(481060), a = n(784712), o = n(531578), s = n(689938);
function l(e, t, n) {
    let {
        rating: r,
        problem: o,
        feedback: l
    } = n;
    (0, a.Z)({
        problem: o,
        summary: e,
        feedback: l,
        guildId: t.guild_id,
        channelId: t.id,
        location: 'Summary divider',
        rating: r
    }), (0, i.showToast)((0, i.createToast)(s.Z.Messages.CALL_FEEDBACK_CONFIRMATION, i.ToastType.SUCCESS));
}
function u(e) {
    let {
        summary: t,
        channel: a,
        rating: s
    } = e;
    null != t && (s === o.aZ.BAD ? (0, i.openModalLazy)(async () => {
        let {default: e} = await n.e('62104').then(n.bind(n, 580584));
        return n => (0, r.jsx)(e, {
            ...n,
            onSubmit: e => l(t, a, e),
            startRating: s
        });
    }) : l(t, a, {
        rating: s,
        problem: null,
        feedback: '',
        dontShowAgain: !1
    }));
}
