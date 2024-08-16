n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(735250);
n(470079);
var a = n(442837),
    s = n(704215),
    r = n(481060),
    l = n(410575),
    o = n(100527),
    c = n(906732),
    d = n(313201),
    u = n(243778),
    _ = n(352455),
    E = n(480294),
    h = n(791359),
    m = n(981631),
    I = n(689938),
    g = n(205692);
function p() {
    let { analyticsLocations: e } = (0, c.ZP)(o.Z.ACTIVE_NOW_COLUMN),
        t = (0, a.e7)([E.Z], () => E.Z.hasConsented(m.pjP.PERSONALIZATION)) ? [] : [s.z.NOW_PLAYING_CONSENT_CARD],
        n = (0, d.Dt)();
    return (0, i.jsx)(c.Gt, {
        value: e,
        children: (0, i.jsx)(l.Z, {
            section: m.jXE.ACTIVE_NOW_COLUMN,
            children: (0, i.jsx)('aside', {
                className: g.container,
                'aria-labelledby': n,
                children: (0, i.jsxs)(r.Scroller, {
                    className: g.scroller,
                    children: [
                        (0, i.jsx)(r.Heading, {
                            variant: 'heading-lg/semibold',
                            className: g.header,
                            id: n,
                            children: I.Z.Messages.GAME_FEED_CURRENT_HEADER_TITLE
                        }),
                        (0, i.jsx)(u.ZP, {
                            contentTypes: t,
                            children: (e) => {
                                let { visibleContent: t, markAsDismissed: n } = e;
                                if (t === s.z.NOW_PLAYING_CONSENT_CARD)
                                    return (0, i.jsx)(_.Z, {
                                        className: g.__invalid_consentCard,
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
