n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(735250);
n(470079);
var s = n(692547), a = n(481060), r = n(436088), l = n(770471), o = n(143614), c = n(106674), d = n(787740), u = n(689938), _ = n(609962);
function E() {
    let {canViewBroadcasts: e} = l.Z.useExperiment({ location: 'broadcast_list_no_track' }, { autoTrackExposure: !1 }), t = (0, o.Z)();
    return 0 === t.length ? null : (l.Z.trackExposure({ location: 'broadcast_list' }), e) ? (0, i.jsxs)('div', {
        className: _.container,
        children: [
            (0, i.jsx)('div', {
                className: _.header,
                children: (0, i.jsxs)('div', {
                    className: _.inline,
                    children: [
                        (0, i.jsx)(r.Z, {
                            color: s.Z.colors.HEADER_PRIMARY.css,
                            height: 20,
                            width: 20
                        }),
                        (0, i.jsx)(a.Heading, {
                            variant: 'heading-md/semibold',
                            children: u.Z.Messages.LIVE_BROADCASTS
                        }),
                        (0, i.jsx)(d.Z, {}),
                        (0, i.jsxs)(a.Heading, {
                            variant: 'heading-md/semibold',
                            children: [
                                '\u2014 ',
                                t.length.toLocaleString()
                            ]
                        })
                    ]
                })
            }),
            t.map(e => (0, i.jsx)(c.Z, { broadcast: e }, e.userId))
        ]
    }) : null;
}
