n.d(t, {
    Cf: function () {
        return p;
    },
    SR: function () {
        return _;
    },
    ZP: function () {
        return h;
    },
    vM: function () {
        return E;
    }
}),
    n(47120);
var r = n(470079),
    i = n(979590),
    a = n.n(i),
    s = n(652874),
    o = n(731965),
    l = n(442837),
    u = n(607070),
    c = n(302221),
    d = n(956664);
let _ = (0, s.Z)(() => ({
    palette: {},
    fetching: {}
}));
async function E(e) {
    var t;
    if (((t = e), null == _.getState().palette[t])) await f(e);
}
async function f(e) {
    if (!_.getState().fetching[e]) {
        (0, o.j)(() =>
            _.setState((t) => ({
                fetching: {
                    ...t.fetching,
                    [e]: !0
                }
            }))
        );
        try {
            let t = await (0, d.OF)(e),
                n = (0, c.WY)(t[0]);
            (0, o.j)(() => {
                _.setState((r) => ({
                    fetching: {
                        ...r.fetching,
                        [e]: !1
                    },
                    palette: {
                        ...r.palette,
                        [e]: [...t.slice(0, 2), ...n]
                    }
                }));
            });
        } catch (t) {
            (0, o.j)(() =>
                _.setState((t) => ({
                    fetching: {
                        ...t.fetching,
                        [e]: !1
                    }
                }))
            );
        }
    }
}
function h(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [r] = p(e, t, n);
    return r;
}
function p(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = _((t) => (null == e ? void 0 : t.palette[e])),
        s = (0, l.e7)([u.Z], () => (n && u.Z.desaturateUserColors ? u.Z.saturation : 1));
    r.useEffect(() => {
        if (null != e && null == i) f(e);
    }, [e, i]);
    let o = r.useMemo(
        () =>
            null == i
                ? void 0
                : i.map((e) => {
                      let [t, n, r] = e,
                          {
                              h: i,
                              s: o,
                              l
                          } = a()({
                              r: t,
                              g: n,
                              b: r
                          }).toHsl();
                      return a()({
                          h: i,
                          s: o * s,
                          l
                      }).toHexString();
                  }),
        [i, s]
    );
    return null != o ? o : [t, t];
}
