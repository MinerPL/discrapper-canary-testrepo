n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120),
    n(653041);
var i = n(470079),
    a = n(149765),
    s = n(442837),
    l = n(902704),
    r = n(592125),
    o = n(720202),
    c = n(271383),
    u = n(700785),
    d = n(231338);
let h = [],
    m = new Set();
function p(e) {
    let { entries: t, channelId: n } = e,
        p = (0, s.e7)([r.Z], () => r.Z.getChannel(n)),
        _ = null == p ? void 0 : p.guild_id,
        E = i.useRef(new Set()),
        f = i.useMemo(() => {
            let e = new Set(null == t ? void 0 : t.map((e) => e.author_id));
            return !(0, l.E)([...E.current], [...e]) && (E.current = e), E.current;
        }, [t]);
    i.useEffect(() => {
        if (null != _)
            Array.from(f).forEach((e) => {
                o.Z.requestMember(_, e);
            });
    }, [f, _]);
    let C = (0, s.Wu)(
            [c.ZP],
            () => {
                if (null == _) return h;
                let e = [];
                for (let t of f) c.ZP.isMember(_, t) && e.push(t);
                return e;
            },
            [f, _]
        ),
        g = i.useMemo(() => {
            if (null == p || 0 === C.length) return m;
            let e = new Set();
            for (let t of C) {
                let n = u.uB({
                    user: t,
                    context: p
                });
                a.e$(n, d.Pl.VIEW_CHANNEL) && e.add(t);
            }
            return e;
        }, [C, p]);
    return i.useMemo(() => (null == t ? void 0 : t.filter((e) => g.has(e.author_id))), [t, g]);
}
