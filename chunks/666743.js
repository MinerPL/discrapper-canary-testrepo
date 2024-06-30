n.d(t, {
    Z: function () {
        return l;
    }
}), n(47120);
var i = n(735250), s = n(470079), a = n(314897);
function r(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
function l(e) {
    return class extends s.Component {
        componentDidMount() {
            a.default.addChangeListener(this.onStoreChange);
        }
        componentWillUnmount() {
            a.default.removeChangeListener(this.onStoreChange);
        }
        render() {
            return (0, i.jsx)(e, {
                ...this.props,
                isAuthenticated: this.state.isAuthenticated
            });
        }
        constructor(...e) {
            super(...e), r(this, 'state', { isAuthenticated: a.default.isAuthenticated() }), r(this, 'onStoreChange', () => {
                this.setState({ isAuthenticated: a.default.isAuthenticated() });
            });
        }
    };
}
