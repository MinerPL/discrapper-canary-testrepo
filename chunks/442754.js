t.d(n, {
    Z: function () {
        return _;
    }
});
var a = t(735250);
t(470079);
var i = t(442837),
    l = t(481060),
    u = t(362658),
    o = t(152376),
    r = t(398758),
    s = t(9156),
    c = t(981631),
    d = t(689938);
function _(e) {
    let { isFavoritesPerk: n } = (0, u.z)('useChannelOptInItems'),
        t = (0, r.DM)(e.guild_id),
        _ = (0, i.e7)([s.ZP], () => s.ZP.isChannelOptedIn(e.guild_id, e.id)),
        E = (0, i.e7)([s.ZP], () => null != e.parent_id && s.ZP.isChannelOptedIn(e.guild_id, e.parent_id)),
        N = (0, i.e7)([s.ZP], () => s.ZP.isFavorite(e.guild_id, e.id)),
        Z = () => {
            (0, o.XQ)(e.guild_id, e.id, !_, { section: c.jXE.CONTEXT_MENU });
        },
        p = () => {
            null != e.parent_id && (0, o.XQ)(e.guild_id, e.parent_id, !1, { section: c.jXE.CONTEXT_MENU });
        };
    if (!t || e.isThread()) return null;
    if (e.isCategory())
        return (0, a.jsx)(l.MenuItem, {
            id: 'opt-into-category',
            label: _ ? d.Z.Messages.CHANNEL_OPT_OUT : d.Z.Messages.CHANNEL_OPT_IN,
            action: () => Z()
        });
    let M = N ? d.Z.Messages.REMOVE_FAVORITE : d.Z.Messages.ADD_FAVORITE,
        C = N ? d.Z.Messages.UNPIN_CHANNEL : d.Z.Messages.PIN_CHANNEL_TO_TOP;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(l.MenuItem, {
                id: 'opt-in-favorite-channel',
                label: n ? C : M,
                action: () => {
                    (0, o.dM)(e.guild_id, e.id, !N, { section: c.jXE.CONTEXT_MENU });
                }
            }),
            E
                ? (0, a.jsx)(l.MenuItem, {
                      id: 'opt-out-category',
                      label: d.Z.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                      action: () => p()
                  })
                : (0, a.jsx)(l.MenuItem, {
                      id: 'opt-into-channel',
                      label: _ ? d.Z.Messages.CHANNEL_OPT_OUT : d.Z.Messages.CHANNEL_OPT_IN,
                      action: () => Z()
                  })
        ]
    });
}
