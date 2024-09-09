r.d(t, {
    SV: function () {
        return a;
    }
});
var i = r(470079);
let n = (0, i.createContext)(null),
    o = {
        didCatch: !1,
        error: null
    };
class a extends i.Component {
    constructor(e) {
        super(e), (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)), (this.state = o);
    }
    static getDerivedStateFromError(e) {
        return {
            didCatch: !0,
            error: e
        };
    }
    resetErrorBoundary() {
        let { error: e } = this.state;
        if (null !== e) {
            for (var t, r, i = arguments.length, n = Array(i), a = 0; a < i; a++) n[a] = arguments[a];
            null === (t = (r = this.props).onReset) ||
                void 0 === t ||
                t.call(r, {
                    args: n,
                    reason: 'imperative-api'
                }),
                this.setState(o);
        }
    }
    componentDidCatch(e, t) {
        var r, i;
        null === (r = (i = this.props).onError) || void 0 === r || r.call(i, e, t);
    }
    componentDidUpdate(e, t) {
        let { didCatch: r } = this.state,
            { resetKeys: i } = this.props;
        if (
            r &&
            null !== t.error &&
            (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return e.length !== t.length || e.some((e, r) => !Object.is(e, t[r]));
            })(e.resetKeys, i)
        ) {
            var n, a;
            null === (n = (a = this.props).onReset) ||
                void 0 === n ||
                n.call(a, {
                    next: i,
                    prev: e.resetKeys,
                    reason: 'keys'
                }),
                this.setState(o);
        }
    }
    render() {
        let { children: e, fallbackRender: t, FallbackComponent: r, fallback: o } = this.props,
            { didCatch: a, error: s } = this.state,
            l = e;
        if (a) {
            let e = {
                error: s,
                resetErrorBoundary: this.resetErrorBoundary
            };
            if ((0, i.isValidElement)(o)) l = o;
            else if ('function' == typeof t) l = t(e);
            else if (r) l = (0, i.createElement)(r, e);
            else throw s;
        }
        return (0, i.createElement)(
            n.Provider,
            {
                value: {
                    didCatch: a,
                    error: s,
                    resetErrorBoundary: this.resetErrorBoundary
                }
            },
            l
        );
    }
}
