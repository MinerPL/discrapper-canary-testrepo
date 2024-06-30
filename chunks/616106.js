var i, a, s, l, r = n(913527), o = n.n(r), c = n(442837), d = n(570140), u = n(255078), _ = n(594174), E = n(74538);
let m = !1;
class I extends (l = c.ZP.Store) {
    shouldShowReactivateNotice() {
        let e = _.default.getCurrentUser();
        return !(0, E.I5)(e) && m;
    }
}
s = 'SubscriptionRemindersStore', (a = 'displayName') in (i = I) ? Object.defineProperty(i, a, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = s, t.Z = new I(d.Z, {
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let {subscription: t} = e;
        if (null != t) {
            var n;
            let e = u.Z.createFromServer(t);
            if (null == (0, E.Af)(e) || (null === (n = e.metadata) || void 0 === n ? void 0 : n.ended_at) == null)
                return;
            let i = o()(e.metadata.ended_at);
            o()().isBetween(i.clone().add(4, 'days'), i.clone().add(11, 'days')) && (m = !0);
        }
    }
});
