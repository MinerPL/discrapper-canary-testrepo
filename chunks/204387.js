r.r(s),
    r.d(s, {
        Steps: function () {
            return t;
        }
    }),
    r(47120);
var t,
    a,
    i = r(735250),
    n = r(470079),
    l = r(481060),
    C = r(100527),
    o = r(906732),
    d = r(626135),
    c = r(281494),
    _ = r(687555),
    x = r(596583),
    p = r(981631);
((a = t || (t = {}))[(a.SELECT_FRIENDS = 1)] = 'SELECT_FRIENDS'), (a[(a.CONFIRMATION = 2)] = 'CONFIRMATION');
s.default = (e) => {
    let s,
        { transitionState: r, onClose: t, sourceAnalyticsLocations: a } = e,
        [h, f] = n.useState(1),
        [u, R] = n.useState(new Set()),
        [m, E] = n.useState(new Map()),
        { analyticsLocations: j } = (0, o.ZP)([...a, C.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
    switch (h) {
        case 1:
            s = (0, i.jsx)(_.Z, {
                onShare: async (e) => {
                    try {
                        d.default.track(p.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: j });
                        let s = await (0, c.jy)(e.map((e) => e.id));
                        f(2), R(new Set(e)), E(s);
                    } catch {}
                },
                onClose: t
            });
            break;
        case 2:
            s = (0, i.jsx)(x.Z, {
                selectedUsers: u,
                trialCreationResult: m,
                onClose: t
            });
            break;
        default:
            t();
    }
    return (0, i.jsx)(l.ModalRoot, {
        transitionState: r,
        children: s
    });
};
