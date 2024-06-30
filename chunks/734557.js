l.d(t, {
    s: function () {
        return i;
    }
}), l(47120), l(724458);
var n = l(470079), a = l(544891), o = l(981631);
let s = new Map();
function i(e) {
    let [t, l] = n.useState(s.has(e) ? Array.from(s.get(e)) : []), [i, r] = n.useState(!1), C = n.useMemo(() => t.map(e => e.code), [t]), c = n.useMemo(() => t.reduce((e, t) => (e[t.code] = t, e), {}), [t]), d = n.useCallback(async () => {
            r(!0);
            let t = (await a.tn.get(o.ANM.GUILD_INSTANT_INVITES(e))).body.sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime());
            l(t), s.set(e, new Set(t)), r(!1);
        }, [e]);
    return n.useEffect(() => {
        d();
    }, [
        e,
        d
    ]), {
        invitesRaw: t,
        inviteCodes: C,
        invitesByCode: c,
        loading: i
    };
}
