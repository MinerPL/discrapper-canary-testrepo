n.d(t, {
    SV: function () {
        return a;
    }
});
var i = n(470079);
let o = (0, i.createContext)(null),
    r = {
        didCatch: !1,
        error: null
    };
class a extends i.Component {
    constructor(e) {
        super(e), (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)), (this.state = r);
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
            for (var t, n, i = arguments.length, o = Array(i), a = 0; a < i; a++) o[a] = arguments[a];
            null === (t = (n = this.props).onReset) ||
                void 0 === t ||
                t.call(n, {
                    args: o,
                    reason: 'imperative-api'
                }),
                this.setState(r);
        }
    }
    componentDidCatch(e, t) {
        var n, i;
        null === (n = (i = this.props).onError) || void 0 === n || n.call(i, e, t);
    }
    componentDidUpdate(e, t) {
        let { didCatch: n } = this.state,
            { resetKeys: i } = this.props;
        if (
            n &&
            null !== t.error &&
            (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]));
            })(e.resetKeys, i)
        ) {
            var o, a;
            null === (o = (a = this.props).onReset) ||
                void 0 === o ||
                o.call(a, {
                    next: i,
                    prev: e.resetKeys,
                    reason: 'keys'
                }),
                this.setState(r);
        }
    }
    render() {
        let { children: e, fallbackRender: t, FallbackComponent: n, fallback: r } = this.props,
            { didCatch: a, error: c } = this.state,
            l = e;
        if (a) {
            let e = {
                error: c,
                resetErrorBoundary: this.resetErrorBoundary
            };
            if ((0, i.isValidElement)(r)) l = r;
            else if ('function' == typeof t) l = t(e);
            else if (n) l = (0, i.createElement)(n, e);
            else throw c;
        }
        return (0, i.createElement)(
            o.Provider,
            {
                value: {
                    didCatch: a,
                    error: c,
                    resetErrorBoundary: this.resetErrorBoundary
                }
            },
            l
        );
    }
}
