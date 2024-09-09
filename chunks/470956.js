n.d(t, {
    Es: function () {
        return d;
    },
    Eu: function () {
        return m;
    },
    bt: function () {
        return h;
    }
}),
    n(47120),
    n(653041);
var i = n(470079),
    s = n(392711),
    a = n(442837),
    l = n(413523),
    r = n(314897),
    o = n(878884),
    c = n(19780),
    u = n(979651);
function d(e, t) {
    let n = (0, a.e7)([o.Z, c.Z], () => (e === c.Z.getChannelId() ? o.Z.getDesyncedVoiceStates() : null));
    return i.useMemo(
        () =>
            (function (e, t) {
                if (null == e || 0 === e.length) return t;
                let n = [],
                    i = new Set();
                for (let e of t) n.push(e), i.add(e.user.id);
                return (
                    e.forEach((e) => {
                        n.splice(
                            (0, s.sortedIndexBy)(n, e, (e) => {
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
function h(e, t) {
    var n;
    let r = ((n = e), (0, a.e7)([o.Z, c.Z], () => (n === c.Z.getChannelId() ? o.Z.getDesyncedParticipants() : null)));
    return i.useMemo(
        () =>
            (function (e, t) {
                if (null == e || 0 === e.length) return t;
                let n = [...t];
                return (
                    e.forEach((e) => {
                        n.splice(
                            (0, s.sortedIndexBy)(n, e, (e) => (0, l.Yr)(e)),
                            0,
                            e
                        );
                    }),
                    n
                );
            })(r, t),
        [r, t]
    );
}
function m(e, t) {
    let n = (0, a.e7)([r.default], () => r.default.getId() === t),
        s = (0, a.e7)([c.Z], () => c.Z.getChannelId()),
        l = i.useRef(null),
        [o, d] = i.useState(!1),
        [h, m] = i.useState(!1),
        p = (0, a.e7)([c.Z, u.Z], () => null != t && null != e && c.Z.getChannelId() === e && null != u.Z.isInChannel(e, t) && c.Z.isUserConnected(t)),
        _ = (0, a.e7)([c.Z, u.Z], () => null != t && null != e && c.Z.getChannelId() === e && null != u.Z.isInChannel(e, t) && !c.Z.isUserConnected(t));
    return (
        i.useEffect(() => {
            p && m(!0);
        }, [p]),
        i.useEffect(() => {
            s !== e && m(!1);
        }, [e, s]),
        i.useEffect(
            () => (
                _ && null == l.current
                    ? (l.current = setTimeout(() => {
                          (l.current = null), d(!0);
                      }, 250))
                    : (clearTimeout(l.current), (l.current = null), d(!1)),
                () => {
                    clearTimeout(l.current), (l.current = null);
                }
            ),
            [_]
        ),
        !n && h && o
    );
}
