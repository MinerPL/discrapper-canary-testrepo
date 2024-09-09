function r(e) {
    return e && 'object' == typeof e && 'default' in e ? e.default : e;
}
Object.defineProperty(t, '__esModule', { value: !0 });
var i = n(698091),
    a = r(n(624482)),
    s = r(n(102386)),
    o = r(n(248766)),
    l = n(239189),
    u = n(470079),
    c = n(672268),
    d = Symbol.for('Animated:node'),
    _ = function (e) {
        return !!e && e[d] === e;
    },
    E = function (e, t) {
        return i.defineHidden(e, d, t);
    },
    f = function (e) {
        return e && e[d] && e[d].getPayload();
    },
    h = (function () {
        function e() {
            (this.payload = void 0), E(this, this);
        }
        return (
            (e.prototype.getPayload = function () {
                return this.payload || [];
            }),
            e
        );
    })(),
    p = (function (e) {
        function t(t) {
            var n;
            return ((n = e.call(this) || this)._value = t), (n.done = !0), (n.elapsedTime = void 0), (n.lastPosition = void 0), (n.lastVelocity = void 0), (n.v0 = void 0), i.is.num(n._value) && (n.lastPosition = n._value), n;
        }
        a(t, e),
            (t.create = function (e, n) {
                return new t(e);
            });
        var n = t.prototype;
        return (
            (n.getPayload = function () {
                return [this];
            }),
            (n.getValue = function () {
                return this._value;
            }),
            (n.setValue = function (e, t) {
                return i.is.num(e) && ((this.lastPosition = e), t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))), this._value !== e && ((this._value = e), !0);
            }),
            (n.reset = function () {
                var e = this.done;
                (this.done = !1), i.is.num(this._value) && ((this.elapsedTime = 0), (this.lastPosition = this._value), e && (this.lastVelocity = null), (this.v0 = null));
            }),
            t
        );
    })(h),
    m = (function (e) {
        function t(t, n) {
            var r;
            return (
                ((r = e.call(this, 0) || this)._value = void 0),
                (r._string = null),
                (r._toString = void 0),
                (r._toString = i.createInterpolator({
                    output: [t, n]
                })),
                r
            );
        }
        a(t, e),
            (t.create = function (e, n) {
                if ((void 0 === n && (n = e), i.is.str(e) && i.is.str(n))) return new t(e, n);
                throw TypeError('Expected "from" and "to" to be strings');
            });
        var n = t.prototype;
        return (
            (n.getValue = function () {
                var e = this._string;
                return null == e ? (this._string = this._toString(this._value)) : e;
            }),
            (n.setValue = function (t) {
                if (i.is.num(t)) {
                    if (!e.prototype.setValue.call(this, t)) return !1;
                    else this._string = null;
                } else (this._string = t), (this._value = 1);
                return !0;
            }),
            (n.reset = function (t) {
                t &&
                    (this._toString = i.createInterpolator({
                        output: [this.getValue(), t]
                    })),
                    (this._value = 0),
                    e.prototype.reset.call(this);
            }),
            t
        );
    })(p),
    I = { current: null },
    T = (function (e) {
        function t(t) {
            var n;
            return void 0 === t && (t = null), ((n = e.call(this) || this).source = void 0), n.setValue(t), n;
        }
        a(t, e);
        var n = t.prototype;
        return (
            (n.getValue = function (e) {
                if (!this.source) return null;
                var t = {};
                return (
                    i.each(this.source, function (n, r) {
                        if (_(n)) t[r] = n.getValue(e);
                        else {
                            var a = i.getFluidConfig(n);
                            a ? (t[r] = a.get()) : !e && (t[r] = n);
                        }
                    }),
                    t
                );
            }),
            (n.setValue = function (e) {
                (this.source = e), (this.payload = this._makePayload(e));
            }),
            (n.reset = function () {
                this.payload &&
                    i.each(this.payload, function (e) {
                        return e.reset();
                    });
            }),
            (n._makePayload = function (e) {
                if (e) {
                    var t = new Set();
                    return i.each(e, this._addToPayload, t), Array.from(t);
                }
            }),
            (n._addToPayload = function (e) {
                var t = this;
                i.getFluidConfig(e) && I.current && I.current.dependencies.add(e);
                var n = f(e);
                n &&
                    i.each(n, function (e) {
                        return t.add(e);
                    });
            }),
            t
        );
    })(h),
    g = (function (e) {
        function t(t, n) {
            var r;
            return ((r = e.call(this, null) || this).source = void 0), e.prototype.setValue.call(s(r), r._makeAnimated(t, n)), r;
        }
        a(t, e),
            (t.create = function (e, n) {
                return new t(e, n);
            });
        var n = t.prototype;
        return (
            (n.getValue = function () {
                return this.source.map(function (e) {
                    return e.getValue();
                });
            }),
            (n.setValue = function (e) {
                var t = this.getPayload();
                e && e.length == t.length
                    ? i.each(t, function (t, n) {
                          return t.setValue(e[n]);
                      })
                    : ((this.source = this._makeAnimated(e)), (this.payload = this._makePayload(this.source)));
            }),
            (n._makeAnimated = function (e, t) {
                return (
                    void 0 === t && (t = e),
                    e
                        ? e.map(function (e, n) {
                              return (i.isAnimatedString(e) ? m : p).create(e, t[n]);
                          })
                        : []
                );
            }),
            t
        );
    })(T),
    S = (function (e) {
        function t(t) {
            var n;
            return ((n = e.call(this, null) || this).update = t), (n.dirty = !1), n;
        }
        a(t, e);
        var n = t.prototype;
        return (
            (n.setValue = function (t, n) {
                if (t) {
                    if (n && ((I.current = n), t.style)) {
                        var r = n.host.createAnimatedStyle;
                        t = o(o({}, t), {}, { style: r(t.style) });
                    }
                    e.prototype.setValue.call(this, t), (I.current = null);
                }
            }),
            (n.onParentChange = function (e) {
                var t = this,
                    n = e.type;
                !this.dirty &&
                    'change' === n &&
                    ((this.dirty = !0),
                    l.frameLoop.onFrame(function () {
                        (t.dirty = !1), t.update();
                    }));
            }),
            t
        );
    })(T),
    A = function (e, t) {
        return u.forwardRef(function (n, r) {
            var a = u.useRef(null),
                s = !i.is.fun(e) || (e.prototype && e.prototype.isReactComponent),
                l = i.useForceUpdate(),
                d = new S(function () {
                    var e = a.current;
                    if (!s || !!e) !1 === (!!e && t.applyAnimatedValues(e, d.getValue(!0))) && l();
                }),
                _ = new Set();
            return (
                d.setValue(n, {
                    dependencies: _,
                    host: t
                }),
                c.useLayoutEffect(function () {
                    return (
                        i.each(_, function (e) {
                            return e.addChild(d);
                        }),
                        function () {
                            return i.each(_, function (e) {
                                return e.removeChild(d);
                            });
                        }
                    );
                }),
                u.createElement(
                    e,
                    o({}, t.getComponentProps(d.getValue()), {
                        ref:
                            s &&
                            function (e) {
                                a.current = (function (e, t) {
                                    return e && (i.is.fun(e) ? e(t) : (e.current = t)), t;
                                })(r, e);
                            }
                    })
                )
            );
        });
    },
    N = Symbol.for('AnimatedComponent'),
    v = function (e) {
        return i.is.str(e) ? e : e && i.is.str(e.displayName) ? e.displayName : (i.is.fun(e) && e.name) || null;
    };
(t.Animated = h),
    (t.AnimatedArray = g),
    (t.AnimatedObject = T),
    (t.AnimatedProps = S),
    (t.AnimatedString = m),
    (t.AnimatedValue = p),
    (t.createHost = function (e, t) {
        var n = void 0 === t ? {} : t,
            r = n.applyAnimatedValues,
            a = n.createAnimatedStyle,
            s =
                void 0 === a
                    ? function (e) {
                          return new T(e);
                      }
                    : a,
            o = n.getComponentProps,
            l = {
                applyAnimatedValues:
                    void 0 === r
                        ? function () {
                              return !1;
                          }
                        : r,
                createAnimatedStyle: s,
                getComponentProps:
                    void 0 === o
                        ? function (e) {
                              return e;
                          }
                        : o
            },
            u = function (e) {
                var t = v(e) || 'Anonymous';
                return ((e = i.is.str(e) ? A(e, l) : e[N] || (e[N] = A(e, l))).displayName = 'Animated(' + t + ')'), e;
            };
        return (
            i.each(e, function (e, t) {
                !i.is.str(t) && (t = v(e)), (u[t] = u(e));
            }),
            { animated: u }
        );
    }),
    (t.getAnimated = function (e) {
        return e && e[d];
    }),
    (t.getPayload = f),
    (t.isAnimated = _),
    (t.setAnimated = E);
