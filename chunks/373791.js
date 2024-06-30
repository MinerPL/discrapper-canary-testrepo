a(47120);
var s, n = a(735250), l = a(470079), o = a(392711), i = a.n(o), r = a(55935), c = a(689938);
function u(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}
let d = () => [
    c.Z.Messages.COUNTDOWN_UNITS_SECONDS,
    c.Z.Messages.COUNTDOWN_UNITS_MINUTES,
    c.Z.Messages.COUNTDOWN_UNITS_HOURS,
    c.Z.Messages.COUNTDOWN_UNITS_DAYS
];
class _ extends (s = l.PureComponent) {
    componentDidMount() {
        let {
            intervalDuration: e,
            onInterval: t
        } = this.props;
        this._interval = setInterval(() => {
            this.forceUpdate(), null == t || t();
        }, e);
    }
    componentWillUnmount() {
        null != this._interval && clearInterval(this._interval);
    }
    defaultRender(e) {
        let {
                showDays: t,
                showUnits: a,
                className: s
            } = this.props, l = [
                e.days,
                e.hours,
                e.minutes,
                e.seconds
            ], o = d();
        if (0 === e.days)
            l.shift();
        else if (!t) {
            let e = l.shift();
            l[0] += 24 * e;
        }
        let r = i()(l).map(e => e < 10 ? '0'.concat(e) : e).map((e, t) => [
            t > 0 && !a ? ':' : ' ',
            (0, n.jsxs)('span', {
                children: [
                    e,
                    a ? o[l.length - t - 1] : null
                ]
            }, t)
        ]).flatten().value();
        return (0, n.jsx)('span', {
            className: s,
            children: r
        });
    }
    render() {
        let {
            deadline: e,
            children: t,
            className: a,
            stopAtOneSec: s
        } = this.props;
        if (e === 1 / 0)
            return (0, n.jsx)('span', {
                className: a,
                'aria-label': c.Z.Messages.MAX_AGE_NEVER,
                children: '\u221E'
            });
        let l = (0, r.TD)(Date.now(), e, s);
        return null != t ? t(l, this.defaultRender.bind(this, l)) : this.defaultRender(l);
    }
    constructor(...e) {
        super(...e), u(this, '_interval', void 0);
    }
}
u(_, 'defaultProps', {
    showDays: !0,
    showUnits: !1,
    stopAtOneSec: !1,
    intervalDuration: 1000
}), t.Z = _;
