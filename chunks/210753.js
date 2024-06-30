t.d(n, {
    $: function () {
        return m;
    }
}), t(653041), t(47120);
var a = t(470079), r = t(392711), i = t.n(r), s = t(442837), o = t(846519), l = t(224706), c = t(669764);
function d(e, n, t) {
    return n in e ? Object.defineProperty(e, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = t, e;
}
let u = new class e {
    request(e) {
        !(this._pending.has(e) || this._fetched.has(e)) && (this._pending.add(e), this._flushHandler.delay(!1));
    }
    _flush() {
        let e = [];
        this._pending.forEach(n => {
            this._fetched.add(n), e.push(n);
        }), i().chunk(e, 20).forEach(e => {
            l.Z.getDetectableGamesSupplemental(e);
        });
    }
    constructor() {
        d(this, '_fetched', new Set()), d(this, '_pending', new Set()), d(this, '_flushHandler', new o.sW(0, () => this._flush()));
    }
}();
function m(e, n) {
    a.useEffect(() => {
        u.request(e);
    }, [e]);
    let t = a.useMemo(() => null != n ? {
        width: n.coverImageWidth,
        height: n.coverImageHeight
    } : void 0, [n]);
    return (0, s.cj)([c.Z], () => ({
        isFetching: c.Z.isFetching(e),
        localizedName: c.Z.getLocalizedName(e),
        themes: c.Z.getThemes(e),
        coverImageUrl: c.Z.getCoverImageUrl(e, t)
    }));
}
