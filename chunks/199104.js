n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(735250);
n(470079);
var s = n(442837), a = n(704215), r = n(481060), l = n(410575), o = n(100527), c = n(906732), d = n(243778), u = n(352455), _ = n(480294), E = n(153124), h = n(791359), I = n(981631), m = n(689938), p = n(966073);
function g() {
    let {analyticsLocations: e} = (0, c.ZP)(o.Z.ACTIVE_NOW_COLUMN), t = (0, s.e7)([_.Z], () => _.Z.hasConsented(I.pjP.PERSONALIZATION)) ? [] : [a.z.NOW_PLAYING_CONSENT_CARD], n = (0, E.Dt)();
    return (0, i.jsx)(c.Gt, {
        value: e,
        children: (0, i.jsx)(l.Z, {
            section: I.jXE.ACTIVE_NOW_COLUMN,
            children: (0, i.jsx)('aside', {
                className: p.container,
                'aria-labelledby': n,
                children: (0, i.jsxs)(r.Scroller, {
                    className: p.scroller,
                    children: [
                        (0, i.jsx)(r.Heading, {
                            variant: 'heading-lg/semibold',
                            className: p.header,
                            id: n,
                            children: m.Z.Messages.GAME_FEED_CURRENT_HEADER_TITLE
                        }),
                        (0, i.jsx)(d.Z, {
                            contentTypes: t,
                            children: e => {
                                let {
                                    visibleContent: t,
                                    markAsDismissed: n
                                } = e;
                                if (t === a.z.NOW_PLAYING_CONSENT_CARD)
                                    return (0, i.jsx)(u.Z, {
                                        className: p.__invalid_consentCard,
                                        markAsDismissed: n
                                    });
                            }
                        }),
                        (0, i.jsx)(h.Z, {})
                    ]
                })
            })
        })
    });
}
