n.d(t, {
    K: function () {
        return c;
    }
});
var r = n(200651),
    o = n(192379),
    i = n(261833),
    l = n(481060),
    a = n(184299),
    s = n(417575);
function c(e) {
    var t;
    let { quest: n, onClose: c } = e,
        u = (0, a.km)((e) => e.transcript),
        d = (null == u ? void 0 : u.questId) === n.id && (null == u ? void 0 : u.fetchStatus) === a.iF.SUCCESS && null !== (t = u.text) && void 0 !== t ? t : '',
        m = o.useMemo(
            () =>
                d
                    .split('\n')
                    .map((e) => e.trim())
                    .filter((e) => e.length > 0),
            [d]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: s.transcriptHeader,
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: 'heading-md/semibold',
                        color: 'currentColor',
                        children: 'Transcript'
                    }),
                    (0, r.jsx)(l.Clickable, {
                        onClick: c,
                        className: s.transcriptBackBtn,
                        children: (0, r.jsx)(i.D, { color: 'currentColor' })
                    })
                ]
            }),
            (0, r.jsx)(l.ScrollerAuto, {
                className: s.transcriptScroller,
                fade: !0,
                children: (0, r.jsx)('div', {
                    className: s.transcriptBody,
                    children:
                        (null == u ? void 0 : u.fetchStatus) === a.iF.FETCHING
                            ? (0, r.jsx)('div', {
                                  className: s.transcriptBodySpinner,
                                  children: (0, r.jsx)(l.Spinner, { type: l.Spinner.Type.WANDERING_CUBES })
                              })
                            : (0, r.jsx)(l.Heading, {
                                  variant: 'heading-md/normal',
                                  color: 'text-muted',
                                  children: m.map((e, t) => (0, r.jsx)('p', { children: e }, t))
                              })
                })
            })
        ]
    });
}
