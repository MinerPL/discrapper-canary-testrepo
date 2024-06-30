n.d(t, {
    Fl: function () {
        return c;
    },
    d7: function () {
        return d;
    },
    p: function () {
        return u;
    }
}), n(411104), n(47120);
var r = n(735250), i = n(470079), a = n(374470), o = n(960048);
let s = i.createContext({
    registerAsset: () => {
    },
    unregisterAsset: () => {
    },
    hasError: !1,
    isLoading: !0
});
function l(e) {
    return (0, a.k)(e, HTMLImageElement) ? e.complete : !(0, a.k)(e, HTMLVideoElement) || e.readyState >= 2;
}
function u(e) {
    let {
            children: t,
            isPreview: n = !1,
            sentrySource: u
        } = e, [c, d] = i.useState(!1), [_, E] = i.useState(new Set()), [f, h] = i.useState(!1), p = i.useRef(!1);
    i.useEffect(() => {
        let e = new Set();
        for (let t of _)
            !l(t) && e.add(t);
        e.size !== _.size && E(e);
    }, [_]);
    let m = i.useCallback(e => {
            let {
                assetNode: t,
                nodeId: r,
                errorPrefix: i,
                errorMessage: s
            } = e;
            if (!n && null != u) {
                var l, c, _;
                o.Z.captureException(Error(''.concat(i, ': ').concat(null != s ? ''.concat(s, ', ') : '').concat((l = t, (0, a.k)(l, HTMLImageElement) ? l.getAttribute('src') : (0, a.k)(l, HTMLVideoElement) ? null !== (_ = null === (c = l.querySelectorAll('source')[0]) || void 0 === c ? void 0 : c.getAttribute('src')) && void 0 !== _ ? _ : 'video' : l.tagName), ', ').concat(r)), { tags: { source: u } }), d(!0);
            }
        }, [
            n,
            u
        ]), I = i.useCallback(e => {
            E(t => {
                let n = new Set(t);
                return n.delete(e), n;
            });
        }, []), T = i.useCallback((e, t) => {
            var n;
            if (h(!0), l(e))
                return;
            E(t => {
                let n = new Set(t);
                return n.add(e), n;
            });
            let r = (n = e, (0, a.k)(n, HTMLImageElement) ? 'load' : (0, a.k)(n, HTMLVideoElement) ? 'canplaythrough' : 'load');
            e.addEventListener(r, function t() {
                I(e), e.removeEventListener(r, t);
            });
            e.addEventListener('error', function n(r) {
                I(e), m({
                    assetNode: e,
                    nodeId: t,
                    errorPrefix: 'Error loading asset',
                    errorMessage: 'message' in r ? r.message : null
                }), e.removeEventListener('error', n);
            });
        }, [
            m,
            I
        ]), g = i.useMemo(() => _.size > 0 || !f, [
            f,
            _
        ]);
    i.useEffect(() => {
        !g && (p.current = !0);
    }, [g]);
    let S = i.useMemo(() => ({
        registerAsset: T,
        unregisterAsset: I,
        hasError: c,
        isLoading: g && !p.current
    }), [
        T,
        I,
        c,
        g
    ]);
    return (0, r.jsx)(s.Provider, {
        value: S,
        children: t
    });
}
function c(e) {
    let {
            id: t,
            children: n
        } = e, {
            registerAsset: r,
            unregisterAsset: a
        } = i.useContext(s), o = i.useRef(null);
    return i.useEffect(() => {
        let e = o.current;
        return null != e && r(e, t), () => {
            null != e && a(e);
        };
    }, [
        r,
        a,
        t
    ]), n(o);
}
function d() {
    let {
        hasError: e,
        isLoading: t
    } = i.useContext(s);
    return {
        hasError: e,
        isLoading: t
    };
}
