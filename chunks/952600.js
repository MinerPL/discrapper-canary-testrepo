r.d(t, {
    K: function () {
        return m;
    }
});
var n = r(735250),
    o = r(470079),
    i = r(521548),
    a = r(573654),
    s = r(84562),
    c = r(74555),
    u = r(139883),
    d = r(26095),
    p = r.n(d);
function f(e) {
    return (f =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
              })(e);
}
function l(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function h(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
}
function v(e, t) {
    return (v =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function y(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function g(e) {
    return (g = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function b(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
function m(e) {
    var t = e.DecoratedComponent,
        r = e.createHandler,
        d = e.createMonitor,
        m = e.createConnector,
        D = e.registerHandler,
        k = e.containerDisplayName,
        w = e.getType,
        O = e.collect,
        j = e.options.arePropsEqual,
        C = void 0 === j ? i.w : j,
        S = t.displayName || t.name || 'Component',
        P = (function (e) {
            !(function (e, t) {
                if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function');
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t && v(e, t);
            })(T, e);
            var p,
                k,
                j,
                P,
                R,
                x =
                    ((p = T),
                    (k = (function () {
                        if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ('function' == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    })()),
                    function () {
                        var e,
                            t = g(p);
                        return (
                            (e = k ? Reflect.construct(t, arguments, g(this).constructor) : t.apply(this, arguments)),
                            (function (e, t) {
                                if (t && ('object' === f(t) || 'function' == typeof t)) return t;
                                if (void 0 !== t) throw TypeError('Derived constructors may only return object or undefined');
                                return y(e);
                            })(this, e)
                        );
                    });
            function T(e) {
                var t;
                return (
                    !(function (e, t) {
                        if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
                    })(this, T),
                    b(y((t = x.call(this, e))), 'decoratedRef', (0, o.createRef)()),
                    b(y(t), 'handlerId', void 0),
                    b(y(t), 'manager', void 0),
                    b(y(t), 'handlerMonitor', void 0),
                    b(y(t), 'handlerConnector', void 0),
                    b(y(t), 'handler', void 0),
                    b(y(t), 'disposable', void 0),
                    b(y(t), 'currentType', void 0),
                    b(y(t), 'handleChange', function () {
                        var e = t.getCurrentState();
                        !(0, i.w)(e, t.state) && t.setState(e);
                    }),
                    (t.disposable = new c.M$()),
                    t.receiveProps(e),
                    t.dispose(),
                    t
                );
            }
            return (
                (j = T),
                (P = [
                    {
                        key: 'getHandlerId',
                        value: function () {
                            return this.handlerId;
                        }
                    },
                    {
                        key: 'getDecoratedComponentInstance',
                        value: function () {
                            return (0, a.k)(this.decoratedRef.current, 'In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()'), this.decoratedRef.current;
                        }
                    },
                    {
                        key: 'shouldComponentUpdate',
                        value: function (e, t) {
                            return !C(e, this.props) || !(0, i.w)(t, this.state);
                        }
                    },
                    {
                        key: 'componentDidMount',
                        value: function () {
                            (this.disposable = new c.M$()), (this.currentType = void 0), this.receiveProps(this.props), this.handleChange();
                        }
                    },
                    {
                        key: 'componentDidUpdate',
                        value: function (e) {
                            !C(this.props, e) && (this.receiveProps(this.props), this.handleChange());
                        }
                    },
                    {
                        key: 'componentWillUnmount',
                        value: function () {
                            this.dispose();
                        }
                    },
                    {
                        key: 'receiveProps',
                        value: function (e) {
                            if (!!this.handler) this.handler.receiveProps(e), this.receiveType(w(e));
                        }
                    },
                    {
                        key: 'receiveType',
                        value: function (e) {
                            if (!!this.handlerMonitor && !!this.manager && !!this.handlerConnector && e !== this.currentType) {
                                this.currentType = e;
                                var t,
                                    r,
                                    n =
                                        ((r = 2),
                                        (function (e) {
                                            if (Array.isArray(e)) return e;
                                        })((t = D(e, this.handler, this.manager))) ||
                                            (function (e, t) {
                                                var r,
                                                    n,
                                                    o = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                                                if (null != o) {
                                                    var i = [],
                                                        a = !0,
                                                        s = !1;
                                                    try {
                                                        for (o = o.call(e); !(a = (r = o.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                                                    } catch (e) {
                                                        (s = !0), (n = e);
                                                    } finally {
                                                        try {
                                                            !a && null != o.return && o.return();
                                                        } finally {
                                                            if (s) throw n;
                                                        }
                                                    }
                                                    return i;
                                                }
                                            })(t, 2) ||
                                            (function (e, t) {
                                                if (e) {
                                                    if ('string' == typeof e) return l(e, t);
                                                    var r = Object.prototype.toString.call(e).slice(8, -1);
                                                    if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)) return Array.from(e);
                                                    if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return l(e, t);
                                                }
                                            })(t, r) ||
                                            (function () {
                                                throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                                            })()),
                                    o = n[0],
                                    i = n[1];
                                (this.handlerId = o), this.handlerMonitor.receiveHandlerId(o), this.handlerConnector.receiveHandlerId(o);
                                var a = this.manager.getMonitor().subscribeToStateChange(this.handleChange, { handlerIds: [o] });
                                this.disposable.setDisposable(new c.Xz(new c.JT(a), new c.JT(i)));
                            }
                        }
                    },
                    {
                        key: 'dispose',
                        value: function () {
                            this.disposable.dispose(), this.handlerConnector && this.handlerConnector.receiveHandlerId(null);
                        }
                    },
                    {
                        key: 'getCurrentState',
                        value: function () {
                            if (!this.handlerConnector) return {};
                            var e = O(this.handlerConnector.hooks, this.handlerMonitor, this.props);
                            return e;
                        }
                    },
                    {
                        key: 'render',
                        value: function () {
                            var e = this;
                            return (0, n.jsx)(
                                s.L.Consumer,
                                {
                                    children: function (r) {
                                        var o = r.dragDropManager;
                                        return (
                                            e.receiveDragDropManager(o),
                                            'undefined' != typeof requestAnimationFrame &&
                                                requestAnimationFrame(function () {
                                                    var t;
                                                    return null === (t = e.handlerConnector) || void 0 === t ? void 0 : t.reconnect();
                                                }),
                                            (0, n.jsx)(t, Object.assign({}, e.props, e.getCurrentState(), { ref: (0, u.J7)(t) ? e.decoratedRef : null }), void 0)
                                        );
                                    }
                                },
                                void 0
                            );
                        }
                    },
                    {
                        key: 'receiveDragDropManager',
                        value: function (e) {
                            if (void 0 !== this.manager) return;
                            if (((0, a.k)(void 0 !== e, 'Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context', S, S), void 0 !== e)) (this.manager = e), (this.handlerMonitor = d(e)), (this.handlerConnector = m(e.getBackend())), (this.handler = r(this.handlerMonitor, this.decoratedRef));
                        }
                    }
                ]),
                h(j.prototype, P),
                T
            );
        })(o.Component);
    return b(P, 'DecoratedComponent', t), b(P, 'displayName', ''.concat(k, '(').concat(S, ')')), p()(P, t);
}
