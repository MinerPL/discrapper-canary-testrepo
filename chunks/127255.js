n.d(t, {
    Z: function () {
        return f;
    }
}), n(789020), n(47120), n(653041);
var i = n(470079), l = n(442837), o = n(630388), u = n(115130), a = n(844797), r = n(694312), d = n(405625), c = n(664097), p = n(981631);
function f(e) {
    let {
            guildId: t,
            enableFilter: n = !1,
            channel: f
        } = e, {filter: s} = (0, l.cj)([u.Z], () => ({ filter: u.Z.getFilter() })), v = (0, r.E)(t), Z = (0, d.Z)(v), g = (0, c.o)(), m = (0, a.oy)(f);
    return i.useMemo(() => {
        function e(e) {
            return !!(!n || '' === s || e.application.name.toLowerCase().includes(s.toLowerCase())) || !1;
        }
        function t(e) {
            return !m || (0, o.yE)(e.application.flags, p.udG.EMBEDDED_RELEASED);
        }
        let i = [...g].filter(e).filter(t), l = new Set(i.map(e => e.application.id));
        for (let n of Z)
            !l.has(n.application.id) && e(n) && t(n) && i.push(n);
        return i;
    }, [
        g,
        n,
        s,
        Z,
        m
    ]);
}
