n.d(t, { E: () => E }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n(442837),
    c = n(110924),
    u = n(819640),
    d = n(513755);
function f(e, t, n) {
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
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let m = (e, t) => (void 0 !== t && t > e ? t : e);
function g(e) {
    let { backgroundElementRef: t, getOffsetsRelativeToElement: n, fallbackAbsoluteOffsets: r, onGetBoundingRect: o = () => {}, debounceTime: a = 60, minimumOffsets: d } = e,
        [f, p] = i.useState(null),
        { hasLayers: h } = (0, l.cj)([u.Z], () => ({ hasLayers: u.Z.hasLayers() })),
        g = i.useCallback(() => {
            let e = t.current;
            return null === e
                ? {
                      height: 0,
                      width: 0
                  }
                : {
                      height: e.offsetHeight,
                      width: e.offsetWidth
                  };
        }, [t]),
        E = i.useCallback(() => {
            let e = t.current;
            if (null === e) return r;
            let i = _({}, n(g())),
                a = e.getBoundingClientRect();
            return void 0 !== i.top && (i.top = m(a.top + i.top, null == d ? void 0 : d.top)), void 0 !== i.left && (i.left = m(a.left + i.left, null == d ? void 0 : d.left)), void 0 !== i.right && (i.right = m(window.innerWidth - a.right + i.right, null == d ? void 0 : d.right)), void 0 !== i.bottom && (i.bottom = m(window.innerHeight - a.bottom + i.bottom, null == d ? void 0 : d.bottom)), o(a), i;
        }, [n, r, g, d, t, o]),
        b = i.useCallback(() => {
            let e = E();
            return (0, s.isEqual)(e, f) || p(e), e;
        }, [E, f]);
    i.useEffect(() => {
        b();
    }, [b]);
    let y = (0, c.Z)(h),
        v = i.useRef(null),
        O = i.useRef(0),
        I = i.useCallback(() => {
            (null === v.current || O.current >= 3) &&
                (v.current = setInterval(() => {
                    if (O.current >= 5) {
                        clearInterval(v.current), (v.current = null), (O.current = 0);
                        return;
                    }
                    b(), O.current++;
                }, 200));
        }, [b]);
    i.useEffect(() => {
        y && !h && I();
    }, [b, I, h, y]);
    let S = i.useMemo(
        () =>
            (0, s.debounce)(() => {
                b();
            }, a),
        [b, a]
    );
    return (
        i.useEffect(
            () => (
                window.addEventListener('resize', S),
                () => {
                    window.removeEventListener('resize', S);
                }
            ),
            [S]
        ),
        {
            offsets: f,
            getElementDimensions: g,
            getElementOffsets: E,
            updateElementOffsets: b,
            updateElementOffsetsWithPolling: I
        }
    );
}
function E(e) {
    var { children: t, style: n, className: o, key: s, offsetControlRef: l } = e;
    let { offsets: c, updateElementOffsets: u, updateElementOffsetsWithPolling: f } = g(_({}, p(e, ['children', 'style', 'className', 'key', 'offsetControlRef']))),
        h = _({}, c, n);
    return (i.useEffect(() => {
        void 0 !== l &&
            (l.current = {
                updateElementOffsets: u,
                updateElementOffsetsWithPolling: f
            });
    }, [u, f, l]),
    null === c)
        ? null
        : (0, r.jsx)(
              'div',
              {
                  style: h,
                  className: a()(d.wrapper, o),
                  children: t
              },
              s
          );
}
E.displayName = 'ElementFixedOffsetContentWrapper';
