n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(481060), a = n(928518), o = n(776862), s = n(626135), l = n(981631);
function u(e, t) {
    let u = null != t ? t : ''.concat(l.jXE.PREMIUM_GUILD_UPSELL_MODAL);
    null != e.targetBoostedGuildTier && (u += ' - Tier '.concat(e.targetBoostedGuildTier));
    s.default.track(l.rMx.OPEN_MODAL, {
        type: u,
        location: e.analyticsSourceLocation
    });
    let {
            openInPopoutEnabled: c,
            ...d
        } = e, _ = a.Z.getWindowOpen(l.KJ3.CHANNEL_CALL_POPOUT) && null != c && c;
    _ && (0, o.Z)(l.KJ3.CHANNEL_CALL_POPOUT);
    let E = _ ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
    (0, i.openModalLazy)(async () => {
        let {default: e} = await Promise.all([
            n.e('29549'),
            n.e('89675')
        ]).then(n.bind(n, 146747));
        return t => (0, r.jsx)(e, {
            ...d,
            ...t
        });
    }, {
        onCloseCallback: () => {
            s.default.track(l.rMx.MODAL_DISMISSED, {
                type: u,
                location: e.analyticsSourceLocation
            });
        },
        contextKey: E
    });
}
