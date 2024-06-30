n.d(t, {
    Es: function () {
        return h;
    },
    Eu: function () {
        return _;
    },
    Yp: function () {
        return m;
    },
    bt: function () {
        return p;
    }
}), n(47120);
var i = n(470079), a = n(392711), l = n(442837), s = n(413523), r = n(314897), o = n(878884), c = n(19780), u = n(979651), d = n(413402);
function h(e, t) {
    let n = (0, d.M)(), s = (0, l.e7)([o.Z], () => n ? o.Z.getDesyncedVoiceStates(e) : null);
    return i.useMemo(() => function (e, t) {
        if (!(0, d.i)() || null == e || 0 === e.length)
            return t;
        let n = null != t ? [...t] : [];
        return e.forEach(e => {
            n.splice((0, a.sortedIndexBy)(n, e, e => {
                let {comparator: t} = e;
                return t;
            }), 0, e);
        }), n;
    }(s, t), [
        s,
        t
    ]);
}
function p(e, t) {
    let n = function (e) {
        let t = (0, d.M)();
        return (0, l.e7)([o.Z], () => t ? o.Z.getDesyncedParticipants(e) : null);
    }(e);
    return i.useMemo(() => function (e, t) {
        if (!(0, d.i)() || null == e || 0 === e.length)
            return t;
        let n = [...t];
        return e.forEach(e => {
            n.splice((0, a.sortedIndexBy)(n, e, e => (0, s.Yr)(e)), 0, e);
        }), n;
    }(n, t), [
        n,
        t
    ]);
}
function m(e, t) {
    let n = (0, d.M)(), a = (0, l.e7)([o.Z], () => n ? o.Z.getDesyncedUserIds(e) : null);
    return i.useMemo(() => {
        let e = new Set();
        return t.forEach(t => e.add(t)), null == a || a.forEach(t => e.add(t)), e;
    }, [
        a,
        t
    ]);
}
function _(e, t) {
    let n = (0, d.M)(), [a, s] = i.useState(!1), o = (0, l.e7)([r.default], () => r.default.getId() === t), h = (0, l.e7)([
            c.Z,
            u.Z
        ], () => null != t && null != e && c.Z.getChannelId() === e && null != u.Z.isInChannel(e, t) && c.Z.isUserConnected(t)), p = (0, l.e7)([
            c.Z,
            u.Z
        ], () => null != t && null != e && c.Z.getChannelId() === e && null != u.Z.isInChannel(e, t) && !c.Z.isUserConnected(t));
    return i.useEffect(() => {
        h && s(!0);
    }, [h]), n && !o && a && p;
}
