n(47120);
var r = n(735250),
    i = n(470079),
    a = n(623113);
t.Z = i.forwardRef(function (e, t) {
    let { muted: n, volume: s, playing: o, ...l } = e,
        [u, c] = (0, a.Z)(t);
    return (
        i.useEffect(() => {
            let e = u.current;
            if (null != e) void 0 !== n && (e.muted = n);
        }, [u, n]),
        i.useEffect(() => {
            let e = u.current;
            if (null != e) void 0 !== s && (e.volume = s);
        }, [u, s]),
        i.useEffect(() => {
            let e = u.current;
            if (null != e) void 0 !== o && (o ? e.play() : e.pause());
        }, [u, o]),
        (0, r.jsx)('audio', {
            ref: c,
            ...l
        })
    );
});
