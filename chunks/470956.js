n.d(t, {
    Es: function () {
        return d;
    },
    Eu: function () {
        return C;
    },
    Yp: function () {
        return Z;
    },
    bt: function () {
        return f;
    }
}),
    n(47120),
    n(653041);
var r = n(470079),
    l = n(392711),
    u = n(442837),
    i = n(413523),
    a = n(314897),
    c = n(878884),
    o = n(19780),
    s = n(979651);
function d(e, t) {
    let n = (0, u.e7)([c.Z, o.Z], () => (e === o.Z.getChannelId() ? c.Z.getDesyncedVoiceStates() : null));
    return r.useMemo(
        () =>
            (function (e, t) {
                if (null == e || 0 === e.length) return t;
                let n = [],
                    r = new Set();
                for (let e of t) n.push(e), r.add(e.user.id);
                return (
                    e.forEach((e) => {
                        n.splice(
                            (0, l.sortedIndexBy)(n, e, (e) => {
                                let { comparator: t } = e;
                                return t;
                            }),
                            0,
                            e
                        );
                    }),
                    n
                );
            })(n, t),
        [n, t]
    );
}
function f(e, t) {
    var n;
    let a = ((n = e), (0, u.e7)([c.Z, o.Z], () => (n === o.Z.getChannelId() ? c.Z.getDesyncedParticipants() : null)));
    return r.useMemo(
        () =>
            (function (e, t) {
                if (null == e || 0 === e.length) return t;
                let n = [...t];
                return (
                    e.forEach((e) => {
                        n.splice(
                            (0, l.sortedIndexBy)(n, e, (e) => (0, i.Yr)(e)),
                            0,
                            e
                        );
                    }),
                    n
                );
            })(a, t),
        [a, t]
    );
}
function Z(e, t) {
    let n = (0, u.e7)([c.Z, o.Z], () => (e === o.Z.getChannelId() ? c.Z.getDesyncedUserIds() : null));
    return r.useMemo(() => {
        let e = new Set();
        return t.forEach((t) => e.add(t)), null == n || n.forEach((t) => e.add(t)), e;
    }, [n, t]);
}
function C(e, t) {
    let n = (0, u.e7)([a.default], () => a.default.getId() === t),
        l = (0, u.e7)([o.Z], () => o.Z.getChannelId()),
        i = r.useRef(null),
        [c, d] = r.useState(!1),
        [f, Z] = r.useState(!1),
        C = (0, u.e7)([o.Z, s.Z], () => null != t && null != e && o.Z.getChannelId() === e && null != s.Z.isInChannel(e, t) && o.Z.isUserConnected(t)),
        E = (0, u.e7)([o.Z, s.Z], () => null != t && null != e && o.Z.getChannelId() === e && null != s.Z.isInChannel(e, t) && !o.Z.isUserConnected(t));
    return (
        r.useEffect(() => {
            C && Z(!0);
        }, [C]),
        r.useEffect(() => {
            l !== e && Z(!1);
        }, [e, l]),
        r.useEffect(
            () => (
                E && null == i.current
                    ? (i.current = setTimeout(() => {
                          (i.current = null), d(!0);
                      }, 250))
                    : (clearTimeout(i.current), (i.current = null), d(!1)),
                () => {
                    clearTimeout(i.current), (i.current = null);
                }
            ),
            [E]
        ),
        !n && f && c
    );
}
