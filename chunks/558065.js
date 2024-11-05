n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(665443),
    s = n.n(a),
    o = n(259443),
    l = n(992774);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let c = new o.Y('DirectVideo');
class d {
    addref() {
        this.refcount++;
    }
    release() {
        return this.refcount--, 0 === this.refcount;
    }
    constructor(e) {
        u(this, 'refcount', void 0), u(this, 'stream', void 0), (this.refcount = 1), (this.stream = window.createDiscordStream(e));
    }
}
let f = new Map();
function _(e) {
    let t = f.get(e);
    null != t && t.release() && ((0, l.zS)().removeDirectVideoOutputSink(e), f.delete(e));
}
function h(e, t) {
    let { streamId: n, paused: a, onReady: o, onResize: u, className: h, ...p } = e,
        m = i.useRef(null),
        g = i.useRef(null),
        E = i.useRef({
            width: 0,
            height: 0
        }),
        v = i.useRef({
            streamId: n,
            paused: a,
            onReady: o,
            onResize: u,
            onContainerResized: t
        });
    return (
        i.useLayoutEffect(() => {
            let { current: e } = m,
                t = new ResizeObserver((e) => {
                    for (let r of e) {
                        var t, n;
                        if (r.target !== g.current) continue;
                        let e = r.target.clientWidth,
                            i = r.target.clientHeight;
                        null === (t = (n = v.current).onContainerResized) || void 0 === t || t.call(n, v.current.streamId, e, i);
                    }
                });
            if (null != e) {
                let n = document.createElement('video');
                (n.style.display = 'block'),
                    (n.style.width = '100%'),
                    (n.style.height = '100%'),
                    (n.autoplay = !0),
                    (n.muted = !0),
                    n.addEventListener('pause', function () {
                        if (!v.current.paused) {
                            var e;
                            null === (e = g.current) || void 0 === e || e.play();
                        }
                    }),
                    n.addEventListener('resize', function () {
                        var e, t, n, r, i, a;
                        let { width: s, height: o } = E.current,
                            l = null !== (n = null === (e = g.current) || void 0 === e ? void 0 : e.videoWidth) && void 0 !== n ? n : 0,
                            u = null !== (r = null === (t = g.current) || void 0 === t ? void 0 : t.videoHeight) && void 0 !== r ? r : 0;
                        if (s !== l || o !== u) {
                            let e = {
                                width: l,
                                height: u
                            };
                            null === (i = (a = v.current).onResize) || void 0 === i || i.call(a, e), (E.current = e);
                        }
                    }),
                    n.addEventListener('canplaythrough', function () {
                        var e, t;
                        c.info('handleReady for '.concat(v.current.streamId, ', have onReady callback = ').concat(null != v.current.onReady)), null === (e = (t = v.current).onReady) || void 0 === e || e.call(t);
                    }),
                    c.info('create video element for '.concat(v.current.streamId, ', readyState=').concat(n.readyState)),
                    n.readyState > 3 && c.error('video element for '.concat(v.current.streamId, ' was ready before attached')),
                    e.appendChild(n),
                    t.disconnect(),
                    t.observe(n),
                    (g.current = n);
            }
        }, []),
        i.useEffect(() => {
            (v.current.streamId = n), (v.current.paused = a), (v.current.onReady = o), (v.current.onResize = u);
        }),
        i.useEffect(() => {
            let e = g.current;
            if (null != e) {
                if (a) null != e.srcObject && ((e.srcObject = null), _(n));
                else {
                    var t;
                    let r;
                    c.info('attaching srcObject for '.concat(n));
                    return (
                        (e.srcObject = ((t = n), null == (r = f.get(t)) ? ((r = new d(t)), (0, l.zS)().addDirectVideoOutputSink(t), f.set(t, r)) : r.addref(), r.stream)),
                        () => {
                            _(n), (e.srcObject = null);
                        }
                    );
                }
            }
        }, [a, n]),
        (0, r.jsx)('div', {
            className: s()('media-engine-video', h),
            ref: m,
            ...p
        })
    );
}
h.defaultProps = { paused: !1 };
