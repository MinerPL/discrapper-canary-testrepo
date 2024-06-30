n.d(t, {
    Z: function () {
        return f;
    }
}), n(47120);
var i = n(735250), a = n(470079), l = n(512722), s = n.n(l), r = n(442837), o = n(911367), c = n(594174), u = n(786874), d = n(484459), h = n(87728), p = n(792379), m = n(123579), _ = n(402777);
function f(e) {
    let {
            location: t,
            channel: n,
            ...l
        } = e, {botProfilesEnabled: f} = (0, u.J)({ location: t }), E = (0, h.Z)();
    (0, o.t)();
    let [C] = n.recipients, g = (0, r.e7)([c.default], () => c.default.getUser(C));
    return (s()(null != g, 'ProfilePanelExperimentWrapper: user cannot be undefined'), a.useEffect(() => {
        (0, d.W)(g, {
            withMutualFriends: !g.bot,
            withMutualGuilds: !0,
            channelId: n.id
        });
    }, [
        g,
        n.id
    ]), E) ? null : f && g.isNonUserBot() ? (0, i.jsx)(p.Z, {
        user: g,
        channel: n,
        ...l
    }) : f || !g.bot ? (0, i.jsx)(_.Z, {
        user: g,
        channel: n,
        ...l
    }) : (0, i.jsx)(m.Z, {
        user: g,
        channel: n,
        ...l
    });
}
