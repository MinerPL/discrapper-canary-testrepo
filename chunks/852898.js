n.d(t, {
    Z: function () {
        return E;
    }
});
var s = n(735250), a = n(470079), i = n(442837), r = n(139387), l = n(726542), o = n(499150), c = n(434404), d = n(999382), u = n(981631), _ = n(689938);
function E(e) {
    let t = (0, i.e7)([d.Z], () => d.Z.getProps().integrations);
    return a.useMemo(() => function (e, t) {
        var n, a, i, d;
        let E;
        if (!e.managed)
            return null;
        let I = null === (n = e.tags) || void 0 === n ? void 0 : n.bot_id, T = null === (a = e.tags) || void 0 === a ? void 0 : a.integration_id, m = (null === (i = e.tags) || void 0 === i ? void 0 : i.premium_subscriber) !== void 0, N = (null === (d = e.tags) || void 0 === d ? void 0 : d.guild_connections) !== void 0;
        if (null != I ? E = null == t ? void 0 : t.find(e => {
                var t;
                let {application: n} = e;
                return (null == n ? void 0 : null === (t = n.bot) || void 0 === t ? void 0 : t.id) === I;
            }) : null != T && (E = null == t ? void 0 : t.find(e => {
                let {id: t} = e;
                return t === T;
            })), null != E && null != E.application && null != E.name) {
            let e = E.application.id, t = E.name;
            [
                u.ABu.TWITCH,
                u.ABu.YOUTUBE
            ].includes(E.type) && (t = ''.concat(l.Z.get(E.type).name, ' - ').concat(t));
            let n = () => {
                c.Z.setSection(u.pNK.INTEGRATIONS), r.Z.setSection(u.b4C.APPLICATION, e);
            };
            return _.Z.Messages.MANAGED_ROLE_INTEGRATION_LINKED_EXPLANATION.format({
                name: t,
                integrationNameHook: (e, t) => (0, s.jsx)(o.Z, {
                    onClick: n,
                    children: e
                }, t)
            });
        }
        return m ? _.Z.Messages.MANAGED_ROLE_PREMIUM_SUBSCRIBER_EXPLANATION : N ? _.Z.Messages.MANAGED_ROLE_GUILD_CONNECTIONS_EXPLANATION : _.Z.Messages.MANAGED_ROLE_EXPLAINATION;
    }(e, t), [
        e,
        t
    ]);
}
