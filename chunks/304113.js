i.r(n), i.d(n, {
    default: function () {
        return _;
    }
});
var t = i(735250);
i(470079);
var o = i(512722), s = i.n(o), l = i(442837), a = i(594174), r = i(786874), c = i(877485), d = i(910364), u = i(853825), I = i(41527), E = i(107889);
function _(e) {
    let {
        location: n,
        user: i,
        ...o
    } = e;
    (0, c.V)({ location: n });
    let {botProfilesEnabled: _} = (0, r.J)({ location: n }), f = (0, l.e7)([a.default], () => a.default.getCurrentUser());
    return (s()(null != f, 'UserProfileModalExperimentWrapper: currentUser cannot be undefined'), _ && i.isNonUserBot()) ? (0, t.jsx)(u.Z, {
        ...o,
        user: i,
        currentUser: f
    }) : _ && i.bot ? (0, t.jsx)(I.Z, {
        ...o,
        user: i,
        currentUser: f
    }) : i.bot ? (0, t.jsx)(d.Z, {
        ...o,
        user: i,
        currentUser: f
    }) : (0, t.jsx)(E.Z, {
        ...o,
        user: i,
        currentUser: f
    });
}
