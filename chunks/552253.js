i(47120);
var t, a = i(735250), r = i(470079), o = i(846519);
function l(e, n, i) {
    return n in e ? Object.defineProperty(e, n, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = i, e;
}
class s extends (t = r.Component) {
    static getDerivedStateFromProps(e) {
        return e.disable ? { hovered: !1 } : null;
    }
    componentDidMount() {
        let {
                pauseOnHover: e,
                disable: n
            } = this.props, i = this.state.hovered && e;
        !n && !i && this.startTimer();
    }
    componentWillUnmount() {
        this.stopTimer();
    }
    componentDidUpdate(e, n) {
        let i, t, a, r, {props: o} = this;
        let l = (i = o, t = this.state, !i.disable && !(t.hovered && i.pauseOnHover));
        let s = (a = e, r = n, !a.disable && !(r.hovered && a.pauseOnHover));
        l && !s || e.interval !== o.interval ? this.startTimer() : !l && s && this.stopTimer();
    }
    startTimer() {
        let {
            interval: e,
            onInterval: n,
            disable: i
        } = this.props;
        if (!i)
            this.timer.start(e, () => {
                n();
            });
    }
    stopTimer() {
        this.timer.stop();
    }
    render() {
        let {
                children: e,
                className: n,
                disable: i
            } = this.props, t = i ? null : {
                onMouseEnter: this.handlePause,
                onFocus: this.handlePause,
                onMouseLeave: this.handleResume,
                onBlur: this.handleResume
            };
        return (0, a.jsx)('div', {
            ...t,
            className: n,
            children: e
        });
    }
    constructor(...e) {
        super(...e), l(this, 'timer', new o.Xp()), l(this, 'state', { hovered: !1 }), l(this, 'handlePause', () => {
            !this.state.hovered && this.setState({ hovered: !0 });
        }), l(this, 'handleResume', () => {
            this.setState({ hovered: !1 });
        });
    }
}
l(s, 'defaultProps', {
    disable: !1,
    pauseOnHover: !1
}), n.Z = s;
