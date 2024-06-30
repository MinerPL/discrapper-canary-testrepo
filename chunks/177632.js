var r = n(470079), i = n(919499), a = n(476400), o = n.n(a), s = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof window ? window : void 0 !== n.g ? n.g : {}, l = r.createContext || function (e, t) {
        var n, a, l, u = '__create-react-context-' + (s[n = '__global_unique_id__'] = (s[n] || 0) + 1) + '__', c = function (e) {
                function n() {
                    var t, n, r;
                    return t = e.apply(this, arguments) || this, t.emitter = (n = t.props.value, r = [], {
                        on: function (e) {
                            r.push(e);
                        },
                        off: function (e) {
                            r = r.filter(function (t) {
                                return t !== e;
                            });
                        },
                        get: function () {
                            return n;
                        },
                        set: function (e, t) {
                            n = e, r.forEach(function (e) {
                                return e(n, t);
                            });
                        }
                    }), t;
                }
                (0, i.Z)(n, e);
                var r = n.prototype;
                return r.getChildContext = function () {
                    var e;
                    return (e = {})[u] = this.emitter, e;
                }, r.componentWillReceiveProps = function (e) {
                    if (this.props.value !== e.value) {
                        var n, r, i, a = this.props.value, o = e.value;
                        if ((n = a) === (r = o) ? 0 !== n || 1 / n == 1 / r : n != n && r != r)
                            i = 0;
                        else {
                            i = 'function' == typeof t ? t(a, o) : 1073741823;
                            0 != (i |= 0) && this.emitter.set(e.value, i);
                        }
                    }
                }, r.render = function () {
                    return this.props.children;
                }, n;
            }(r.Component);
        c.childContextTypes = ((a = {})[u] = o().object.isRequired, a);
        var d = function (t) {
            function n() {
                var e;
                return e = t.apply(this, arguments) || this, e.state = { value: e.getValue() }, e.onUpdate = function (t, n) {
                    ((0 | e.observedBits) & n) != 0 && e.setState({ value: e.getValue() });
                }, e;
            }
            (0, i.Z)(n, t);
            var r = n.prototype;
            return r.componentWillReceiveProps = function (e) {
                var t = e.observedBits;
                this.observedBits = null == t ? 1073741823 : t;
            }, r.componentDidMount = function () {
                this.context[u] && this.context[u].on(this.onUpdate);
                var e = this.props.observedBits;
                this.observedBits = null == e ? 1073741823 : e;
            }, r.componentWillUnmount = function () {
                this.context[u] && this.context[u].off(this.onUpdate);
            }, r.getValue = function () {
                return this.context[u] ? this.context[u].get() : e;
            }, r.render = function () {
                var e;
                return (Array.isArray(e = this.props.children) ? e[0] : e)(this.state.value);
            }, n;
        }(r.Component);
        return d.contextTypes = ((l = {})[u] = o().object, l), {
            Provider: c,
            Consumer: d
        };
    };
t.Z = l;
