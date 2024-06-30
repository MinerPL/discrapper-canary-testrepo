n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(735250), a = n(470079), l = n(873546), s = n(442837), r = n(481060), o = n(911560), c = n(210887), u = n(914010), d = n(502568), h = n(981631), p = n(689938), m = n(676821);
function _(e) {
    let t, {channelId: _} = e;
    a.useEffect(() => {
        o.Z.loadThread(_);
    });
    let f = (0, s.e7)([u.Z], () => u.Z.getGuildId()) === h.I_8, E = (0, s.e7)([c.Z], () => c.Z.theme);
    return t = f ? (0, i.jsx)(r.EmptyStateText, {
        note: p.Z.Messages.FAVORITES_EMPTY_BODY,
        children: p.Z.Messages.FAVORITES_EMPTY_TITLE
    }) : null != _ ? (0, i.jsx)(r.Spinner, { type: r.Spinner.Type.SPINNING_CIRCLE }) : (0, i.jsx)(r.EmptyStateText, {
        note: p.Z.Messages.CHANNELS_UNAVAILABLE_BODY,
        children: p.Z.Messages.CHANNELS_UNAVAILABLE_TITLE
    }), (0, i.jsxs)('div', {
        className: m.noChannel,
        children: [
            l.tq && (0, i.jsx)(d.ZP, { children: (0, i.jsx)(a.Fragment, {}) }),
            (0, i.jsxs)(r.EmptyState, {
                theme: E,
                children: [
                    (0, i.jsx)(r.EmptyStateImage, {
                        darkSrc: f ? n(691270) : n(625065),
                        lightSrc: f ? n(704139) : n(875184),
                        width: 272,
                        height: 222
                    }),
                    t
                ]
            })
        ]
    });
}
