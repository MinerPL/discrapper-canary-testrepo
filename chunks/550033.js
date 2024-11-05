function r(e) {
    return e && 'object' == typeof e && 'default' in e ? e.default : e;
}
Object.defineProperty(t, '__esModule', { value: !0 });
var i = n(985445),
    a = n(698091),
    s = r(n(248766)),
    o = n(192379),
    l = r(n(222675)),
    u = r(n(309496)),
    c = r(n(572677)),
    d = r(n(624482)),
    f = n(857967),
    _ = n(239189),
    h = n(812028),
    p = r(n(956845)),
    m = n(640809),
    g = r(n(449686)),
    E = r(n(102386)),
    v = n(179237),
    I = n(467568),
    S = {
        default: {
            tension: 170,
            friction: 26
        },
        gentle: {
            tension: 120,
            friction: 14
        },
        wobbly: {
            tension: 180,
            friction: 12
        },
        stiff: {
            tension: 210,
            friction: 20
        },
        slow: {
            tension: 280,
            friction: 60
        },
        molasses: {
            tension: 280,
            friction: 120
        }
    },
    T = s(
        s({}, S.default),
        {},
        {
            mass: 1,
            damping: 1,
            easing: function (e) {
                return e;
            },
            clamp: !1
        }
    ),
    b = function () {
        (this.tension = void 0), (this.friction = void 0), (this.frequency = void 0), (this.damping = void 0), (this.mass = void 0), (this.velocity = 0), (this.restVelocity = void 0), (this.precision = void 0), (this.progress = void 0), (this.duration = void 0), (this.easing = void 0), (this.clamp = void 0), (this.bounce = void 0), (this.decay = void 0), (this.round = void 0), Object.assign(this, T);
    };
function y(e, t) {
    if (a.is.und(t.decay)) {
        var n = !a.is.und(t.tension) || !a.is.und(t.friction);
        (n || !a.is.und(t.frequency) || !a.is.und(t.damping) || !a.is.und(t.mass)) && ((e.duration = void 0), (e.decay = void 0)), n && (e.frequency = void 0);
    } else e.duration = void 0;
}
var A = [],
    N = function () {
        (this.changed = !1), (this.values = A), (this.toValues = null), (this.fromValues = A), (this.to = void 0), (this.from = void 0), (this.config = new b()), (this.immediate = !1), (this.onStart = void 0), (this.onChange = void 0), (this.onRest = []);
    };
function C(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
var R = function (e, t) {
    return h.useMemoOne(e, t || [{}]);
};
function O(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return a.is.fun(e) ? e.apply(void 0, n) : e;
}
var D = function (e, t) {
        return !0 === e || !!(t && e && (a.is.fun(e) ? e(t) : a.toArray(e).includes(t)));
    },
    L = function (e, t, n) {
        return e && (a.is.fun(e) ? e(t, n) : a.is.arr(e) ? e[t] : s({}, e));
    },
    x = function (e, t) {
        return !0 === e.default ? e[t] : e.default ? e.default[t] : void 0;
    },
    w = function (e, t, n) {
        void 0 === t && (t = []), void 0 === n && (n = {});
        var r = M;
        e.default && !0 !== e.default && (r = Object.keys((e = e.default)));
        for (
            var i,
                s = (function (e) {
                    var t = 0;
                    if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
                        if (
                            Array.isArray(e) ||
                            (e = (function (e, t) {
                                if (e) {
                                    if ('string' == typeof e) return C(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
                                    if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return C(e, t);
                                }
                            })(e))
                        )
                            return function () {
                                return t >= e.length
                                    ? { done: !0 }
                                    : {
                                          done: !1,
                                          value: e[t++]
                                      };
                            };
                        throw TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }
                    return (t = e[Symbol.iterator]()).next.bind(t);
                })(r);
            !(i = s()).done;

        ) {
            var o = i.value,
                l = e[o];
            !a.is.und(l) && !t.includes(o) && (n[o] = l);
        }
        return n;
    },
    M = ['pause', 'cancel', 'config', 'immediate', 'onDelayEnd', 'onProps', 'onStart', 'onChange', 'onRest'],
    P = {
        config: 1,
        from: 1,
        to: 1,
        ref: 1,
        loop: 1,
        reset: 1,
        pause: 1,
        cancel: 1,
        reverse: 1,
        immediate: 1,
        default: 1,
        delay: 1,
        onDelayEnd: 1,
        onProps: 1,
        onStart: 1,
        onChange: 1,
        onRest: 1,
        onNoopRest: 1,
        items: 1,
        trail: 1,
        sort: 1,
        expires: 1,
        initial: 1,
        enter: 1,
        update: 1,
        leave: 1,
        children: 1,
        keys: 1,
        callId: 1,
        parentId: 1
    };
function k(e) {
    var t = (function (e) {
        var t = {},
            n = 0;
        if (
            (a.each(e, function (e, r) {
                !P[r] && ((t[r] = e), n++);
            }),
            n)
        )
            return t;
    })(e);
    if (t) {
        var n = { to: t };
        return (
            a.each(e, function (e, r) {
                return r in t || (n[r] = e);
            }),
            n
        );
    }
    return s({}, e);
}
function U(e) {
    var t = a.getFluidConfig(e);
    return t
        ? U(t.get())
        : a.is.arr(e)
          ? e.map(U)
          : a.isAnimatedString(e)
            ? _.createStringInterpolator({
                  range: [0, 1],
                  output: [e, e]
              })(1)
            : e;
}
function G(e, t) {
    var n = t.key,
        r = t.props,
        i = t.state,
        o = t.actions;
    return new Promise(function (t, l) {
        var u,
            c,
            d = !1,
            f = D(r.cancel, n);
        function _() {
            i.resumeQueue.add(h), c.cancel(), (u = c.time - a.Globals.now());
        }
        function h() {
            u > 0 ? (i.pauseQueue.add(_), (c = a.Globals.frameLoop.setTimeout(p, u))) : p();
        }
        function p() {
            i.pauseQueue.delete(_), e <= (i.cancelId || 0) && (f = !0);
            try {
                o.start(
                    s(
                        s({}, r),
                        {},
                        {
                            callId: e,
                            delay: u,
                            cancel: f,
                            pause: d
                        }
                    ),
                    t
                );
            } catch (e) {
                l(e);
            }
        }
        f ? p() : ((u = O(r.delay || 0, n)), (d = D(r.pause, n)) ? (i.resumeQueue.add(h), o.pause()) : (o.resume(), h()));
    });
}
var B = function (e, t) {
        return 1 == t.length
            ? t[0]
            : t.some(function (e) {
                    return e.cancelled;
                })
              ? V(e)
              : t.every(function (e) {
                      return e.noop;
                  })
                ? Z(e)
                : F(
                      e,
                      t.every(function (e) {
                          return e.finished;
                      })
                  );
    },
    Z = function (e, t) {
        return (
            void 0 === t && (t = e.get()),
            {
                value: t,
                noop: !0,
                finished: !0,
                target: e
            }
        );
    },
    F = function (e, t, n) {
        return (
            void 0 === n && (n = e.get()),
            {
                value: n,
                finished: t,
                target: e
            }
        );
    },
    V = function (e, t) {
        return (
            void 0 === t && (t = e.get()),
            {
                value: t,
                cancelled: !0,
                target: e
            }
        );
    };
function j(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function H(e, t, n, r) {
    return Y.apply(this, arguments);
}
function Y() {
    return (Y = u(
        l.mark(function e(t, n, r, i) {
            var o, c, d, f, h;
            return l.wrap(function (e) {
                for (;;)
                    switch ((e.prev = e.next)) {
                        case 0:
                            if (!n.pause) {
                                e.next = 3;
                                break;
                            }
                            return (
                                (e.next = 3),
                                new Promise(function (e) {
                                    r.resumeQueue.add(e);
                                })
                            );
                        case 3:
                            if (((o = n.callId), (c = n.parentId), (d = n.onRest), (f = r.asyncTo), (h = r.promise), !(!c && t === f && !n.reset))) {
                                e.next = 7;
                                break;
                            }
                            return e.abrupt('return', h);
                        case 7:
                            return e.abrupt(
                                'return',
                                (r.promise = u(
                                    l.mark(function e() {
                                        var p, m, g, E, v, I, S, T, b;
                                        return l.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (r.asyncId = o),
                                                                (r.asyncTo = t),
                                                                (p = w(n, ['onRest'])),
                                                                (E = new Promise(function (e, t) {
                                                                    return (m = e), (g = t);
                                                                })),
                                                                (v = function (e) {
                                                                    return function () {
                                                                        var t = function (e) {
                                                                            throw (e instanceof K && g(e), e);
                                                                        };
                                                                        try {
                                                                            return e.apply(void 0, arguments).catch(t);
                                                                        } catch (e) {
                                                                            t(e);
                                                                        }
                                                                    };
                                                                }),
                                                                (I = function (e) {
                                                                    var t = (o <= (r.cancelId || 0) && V(i)) || (o !== r.asyncId && F(i, !1));
                                                                    if (t) throw ((e.result = t), e);
                                                                }),
                                                                (S = v(function (e, t) {
                                                                    var n = new K();
                                                                    I(n);
                                                                    var c = a.is.obj(e) ? s({}, e) : s(s({}, t), {}, { to: e });
                                                                    return (
                                                                        (c.parentId = o),
                                                                        a.each(p, function (e, t) {
                                                                            a.is.und(c[t]) && (c[t] = e);
                                                                        }),
                                                                        i.start(c).then(
                                                                            (function () {
                                                                                var e = u(
                                                                                    l.mark(function e(t) {
                                                                                        return l.wrap(function (e) {
                                                                                            for (;;)
                                                                                                switch ((e.prev = e.next)) {
                                                                                                    case 0:
                                                                                                        if ((I(n), !i.is('PAUSED'))) {
                                                                                                            e.next = 4;
                                                                                                            break;
                                                                                                        }
                                                                                                        return (
                                                                                                            (e.next = 4),
                                                                                                            new Promise(function (e) {
                                                                                                                r.resumeQueue.add(e);
                                                                                                            })
                                                                                                        );
                                                                                                    case 4:
                                                                                                        return e.abrupt('return', t);
                                                                                                    case 5:
                                                                                                    case 'end':
                                                                                                        return e.stop();
                                                                                                }
                                                                                        }, e);
                                                                                    })
                                                                                );
                                                                                return function (t) {
                                                                                    return e.apply(this, arguments);
                                                                                };
                                                                            })()
                                                                        )
                                                                    );
                                                                })),
                                                                (e.prev = 7),
                                                                a.is.arr(t)
                                                                    ? (b = (function () {
                                                                          var e = u(
                                                                              l.mark(function e(t) {
                                                                                  var n, r, i;
                                                                                  return l.wrap(function (e) {
                                                                                      for (;;)
                                                                                          switch ((e.prev = e.next)) {
                                                                                              case 0:
                                                                                                  n = (function (e) {
                                                                                                      var t = 0;
                                                                                                      if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
                                                                                                          if (
                                                                                                              Array.isArray(e) ||
                                                                                                              (e = (function (e, t) {
                                                                                                                  if (e) {
                                                                                                                      if ('string' == typeof e) return j(e, t);
                                                                                                                      var n = Object.prototype.toString.call(e).slice(8, -1);
                                                                                                                      if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
                                                                                                                      if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return j(e, t);
                                                                                                                  }
                                                                                                              })(e))
                                                                                                          )
                                                                                                              return function () {
                                                                                                                  return t >= e.length
                                                                                                                      ? { done: !0 }
                                                                                                                      : {
                                                                                                                            done: !1,
                                                                                                                            value: e[t++]
                                                                                                                        };
                                                                                                              };
                                                                                                          throw TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                                                                                                      }
                                                                                                      return (t = e[Symbol.iterator]()).next.bind(t);
                                                                                                  })(t);
                                                                                              case 1:
                                                                                                  if ((r = n()).done) {
                                                                                                      e.next = 7;
                                                                                                      break;
                                                                                                  }
                                                                                                  return (i = r.value), (e.next = 5), S(i);
                                                                                              case 5:
                                                                                                  e.next = 1;
                                                                                                  break;
                                                                                              case 7:
                                                                                              case 'end':
                                                                                                  return e.stop();
                                                                                          }
                                                                                  }, e);
                                                                              })
                                                                          );
                                                                          return function (t) {
                                                                              return e.apply(this, arguments);
                                                                          };
                                                                      })()(t))
                                                                    : a.is.fun(t) && (b = Promise.resolve(t(S, i.stop.bind(i)))),
                                                                (e.next = 11),
                                                                Promise.all([b.then(m), E])
                                                            );
                                                        case 11:
                                                            (T = F(i, !0)), (e.next = 21);
                                                            break;
                                                        case 14:
                                                            if (((e.prev = 14), (e.t0 = e.catch(7)), !(e.t0 instanceof K))) {
                                                                e.next = 20;
                                                                break;
                                                            }
                                                            (T = e.t0.result), (e.next = 21);
                                                            break;
                                                        case 20:
                                                            throw e.t0;
                                                        case 21:
                                                            return (e.prev = 21), o == r.asyncId && ((r.asyncId = c), (r.asyncTo = c ? f : void 0), (r.promise = c ? h : void 0)), e.finish(21);
                                                        case 24:
                                                            return (
                                                                a.is.fun(d) &&
                                                                    _.batchedUpdates(function () {
                                                                        d(T);
                                                                    }),
                                                                e.abrupt('return', T)
                                                            );
                                                        case 26:
                                                        case 'end':
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            null,
                                            [[7, 14, 21, 24]]
                                        );
                                    })
                                )())
                            );
                        case 8:
                        case 'end':
                            return e.stop();
                    }
            }, e);
        })
    )).apply(this, arguments);
}
function W(e, t) {
    (e.cancelId = t), (e.asyncId = e.asyncTo = e.promise = void 0);
}
var K = (function (e) {
        function t() {
            var t;
            return ((t = e.call(this, 'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.') || this).result = void 0), t;
        }
        return d(t, e), t;
    })(p(Error)),
    z = function (e) {
        return e instanceof Q;
    },
    q = 1,
    Q = (function (e) {
        function t() {
            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return ((t = e.call.apply(e, [this].concat(r)) || this).id = q++), (t.key = void 0), (t._priority = 0), (t._children = new Set()), t;
        }
        d(t, e);
        var n = t.prototype;
        return (
            (n.get = function () {
                var e = f.getAnimated(this);
                return e && e.getValue();
            }),
            (n.to = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return _.to(this, t);
            }),
            (n.interpolate = function () {
                m.deprecateInterpolate();
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return _.to(this, t);
            }),
            (n.addChild = function (e) {
                !this._children.size && this._attach(), this._children.add(e);
            }),
            (n.removeChild = function (e) {
                this._children.delete(e), !this._children.size && this._detach();
            }),
            (n.onParentChange = function (e) {
                var t = e.type;
                this.idle ? 'start' == t && (this._reset(), this._start()) : 'reset' == t && this._reset();
            }),
            (n._attach = function () {}),
            (n._detach = function () {}),
            (n._reset = function () {
                this._emit({
                    type: 'reset',
                    parent: this
                });
            }),
            (n._start = function () {
                this._emit({
                    type: 'start',
                    parent: this
                });
            }),
            (n._onChange = function (e, t) {
                void 0 === t && (t = !1),
                    this._emit({
                        type: 'change',
                        parent: this,
                        value: e,
                        idle: t
                    });
            }),
            (n._onPriorityChange = function (e) {
                !this.idle && _.frameLoop.start(this),
                    this._emit({
                        type: 'priority',
                        parent: this,
                        priority: e
                    });
            }),
            (n._emit = function (e) {
                a.each(Array.from(this._children), function (t) {
                    t.onParentChange(e);
                });
            }),
            c(t, [
                {
                    key: 'priority',
                    get: function () {
                        return this._priority;
                    },
                    set: function (e) {
                        this._priority != e && ((this._priority = e), this._onPriorityChange(e));
                    }
                }
            ]),
            t
        );
    })(a.FluidValue),
    X = 'CREATED',
    J = 'IDLE',
    $ = 'ACTIVE',
    ee = 'PAUSED',
    et = 'DISPOSED',
    en = (function (e) {
        function t(t, n) {
            var r;
            if (
                (((r = e.call(this) || this).key = void 0),
                (r.animation = new N()),
                (r.queue = void 0),
                (r._phase = X),
                (r._state = {
                    pauseQueue: new Set(),
                    resumeQueue: new Set()
                }),
                (r._defaultProps = {}),
                (r._lastCallId = 0),
                (r._lastToId = 0),
                !a.is.und(t) || !a.is.und(n))
            ) {
                var i = a.is.obj(t) ? s({}, t) : s(s({}, n), {}, { from: t });
                (i.default = !0), r.start(i);
            }
            return r;
        }
        d(t, e);
        var n,
            r = t.prototype;
        return (
            (r.advance = function (e) {
                var t = this,
                    n = !0,
                    r = !1,
                    i = this.animation,
                    s = i.config,
                    o = i.toValues,
                    l = f.getPayload(i.to);
                if (!l) {
                    var u = a.getFluidConfig(i.to);
                    u && (o = a.toArray(u.get()));
                }
                return (
                    i.values.forEach(function (u, c) {
                        if (!u.done) {
                            var d = l ? l[c].lastPosition : o[c],
                                f = i.immediate,
                                _ = d;
                            if (!f) {
                                if (((_ = u.lastPosition), s.tension <= 0)) {
                                    u.done = !0;
                                    return;
                                }
                                var h = (u.elapsedTime += e),
                                    p = i.fromValues[c],
                                    m = null != u.v0 ? u.v0 : (u.v0 = a.is.arr(s.velocity) ? s.velocity[c] : s.velocity);
                                if (a.is.und(s.duration)) {
                                    if (s.decay) {
                                        var g = !0 === s.decay ? 0.998 : s.decay,
                                            E = Math.exp(-(1 - g) * h);
                                        (_ = p + (m / (1 - g)) * (1 - E)), (f = 0.1 > Math.abs(u.lastPosition - _)), (v = m * E);
                                    } else {
                                        v = null == u.lastVelocity ? m : u.lastVelocity;
                                        for (var v, I = s.precision || (p == d ? 0.005 : Math.min(1, 0.001 * Math.abs(d - p))), S = s.restVelocity || I / 10, T = s.clamp ? 0 : s.bounce, b = !a.is.und(T), y = p == d ? u.v0 > 0 : p < d, A = !1, N = Math.ceil(e / 1), C = 0; C < N && !(!(Math.abs(v) > S) && (f = Math.abs(d - _) <= I)); ++C) {
                                            b && (A = _ == d || _ > d == y) && ((v = -v * T), (_ = d));
                                            var R = (-(0.000001 * s.tension) * (_ - d) + -(0.001 * s.friction) * v) / s.mass;
                                            (v += 1 * R), (_ += 1 * v);
                                        }
                                    }
                                } else {
                                    var O = s.progress || 0;
                                    s.duration <= 0 ? (O = 1) : (O += (1 - O) * Math.min(1, h / s.duration)), (v = ((_ = p + s.easing(O) * (d - p)) - u.lastPosition) / e), (f = 1 == O);
                                }
                                (u.lastVelocity = v), Number.isNaN(_) && (console.warn('Got NaN while animating:', t), (f = !0));
                            }
                            l && !l[c].done && (f = !1), f ? (u.done = !0) : (n = !1), u.setValue(_, s.round) && (r = !0);
                        }
                    }),
                    n ? this.finish() : r && this._onChange(this.get()),
                    n
                );
            }),
            (r.is = function (e) {
                return this._phase == e;
            }),
            (r.set = function (e) {
                var t = this;
                return (
                    _.batchedUpdates(function () {
                        if ((t._focus(e), t._set(e) && !t.is($))) return t._onChange(t.get(), !0);
                        t._stop();
                    }),
                    this
                );
            }),
            (r.pause = function () {
                er(this, 'pause'),
                    !this.is(ee) &&
                        ((this._phase = ee),
                        a.flush(this._state.pauseQueue, function (e) {
                            return e();
                        }));
            }),
            (r.resume = function () {
                er(this, 'resume'),
                    this.is(ee) &&
                        (this._start(),
                        a.flush(this._state.resumeQueue, function (e) {
                            return e();
                        }));
            }),
            (r.finish = function (e) {
                var t = this;
                if ((this.resume(), this.is($))) {
                    var n = this.animation;
                    !n.config.decay && a.is.und(e) && (e = n.to),
                        !a.is.und(e) && this._set(e),
                        _.batchedUpdates(function () {
                            !n.changed && ((n.changed = !0), n.onStart && n.onStart(t)), t._stop();
                        });
                }
                return this;
            }),
            (r.update = function (e) {
                return er(this, 'update'), (this.queue || (this.queue = [])).push(e), this;
            }),
            (r.start =
                ((n = u(
                    l.mark(function e(t, n) {
                        var r,
                            i,
                            o = this;
                        return l.wrap(
                            function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                er(this, 'start'),
                                                a.is.und(t) ? ((r = this.queue || []), (this.queue = [])) : (r = [a.is.obj(t) ? t : s(s({}, n), {}, { to: t })]),
                                                (e.next = 4),
                                                Promise.all(
                                                    r.map(function (e) {
                                                        return o._update(e);
                                                    })
                                                )
                                            );
                                        case 4:
                                            return (i = e.sent), e.abrupt('return', B(this, i));
                                        case 6:
                                        case 'end':
                                            return e.stop();
                                    }
                            },
                            e,
                            this
                        );
                    })
                )),
                function (e, t) {
                    return n.apply(this, arguments);
                })),
            (r.stop = function (e) {
                var t = this;
                return (
                    !this.is(et) &&
                        (W(this._state, this._lastCallId),
                        this._focus(this.get()),
                        _.batchedUpdates(function () {
                            return t._stop(e);
                        })),
                    this
                );
            }),
            (r.reset = function () {
                this._update({ reset: !0 });
            }),
            (r.dispose = function () {
                !this.is(et) && (this.animation && (this.animation.onRest = []), this.stop(), (this._phase = et));
            }),
            (r.onParentChange = function (t) {
                e.prototype.onParentChange.call(this, t), 'change' == t.type ? !this.is($) && (this._reset(), !this.is(ee) && this._start()) : 'priority' == t.type && (this.priority = t.priority + 1);
            }),
            (r._prepareNode = function (e) {
                var t = e.to,
                    n = e.from,
                    r = e.reverse,
                    i = this.key || '';
                t = !a.is.obj(t) || a.getFluidConfig(t) ? t : t[i];
                var s = {
                    to: t,
                    from: (n = !a.is.obj(n) || a.getFluidConfig(n) ? n : n[i])
                };
                if (this.is(X)) {
                    if (r) {
                        var o = [n, t];
                        (t = o[0]), (n = o[1]);
                    }
                    n = a.getFluidValue(n);
                    var l = this._updateNode(a.is.und(n) ? a.getFluidValue(t) : n);
                    l && !a.is.und(n) && l.setValue(n);
                }
                return s;
            }),
            (r._updateNode = function (e) {
                var t = f.getAnimated(this);
                if (!a.is.und(e)) {
                    var n = this._getNodeType(e);
                    (!t || t.constructor !== n) && f.setAnimated(this, (t = n.create(e)));
                }
                return t;
            }),
            (r._getNodeType = function (e) {
                var t = f.getAnimated(e);
                return t ? t.constructor : a.is.arr(e) ? f.AnimatedArray : a.isAnimatedString(e) ? f.AnimatedString : f.AnimatedValue;
            }),
            (r._update = function (e, t) {
                var n = this,
                    r = this._defaultProps,
                    i = function (t) {
                        var n = x(e, t);
                        !a.is.und(n) && (r[t] = n), r[t] && (e[t] = r[t]);
                    };
                i('cancel'), i('pause');
                var s = this._prepareNode(e);
                return G(++this._lastCallId, {
                    key: this.key,
                    props: e,
                    state: this._state,
                    actions: {
                        pause: this.pause.bind(this),
                        resume: this.resume.bind(this),
                        start: this._merge.bind(this, s)
                    }
                }).then(function (r) {
                    if (e.loop && r.finished && !(t && r.noop)) {
                        var i = es(e);
                        if (i) return n._update(i, !0);
                    }
                    return r;
                });
            }),
            (r._merge = function (e, t, n) {
                if (t.cancel) return this.stop(!0), n(V(this));
                var r = this.key,
                    i = this.animation,
                    o = this._defaultProps,
                    l = !a.is.und(e.to),
                    u = !a.is.und(e.from);
                if (l || u) {
                    if (!(t.callId > this._lastToId)) return n(V(this));
                    this._lastToId = t.callId;
                }
                var c = function (e) {
                        return a.is.und(t[e]) ? o[e] : t[e];
                    },
                    d = ei(c('onDelayEnd'), r);
                if ((d && d(t, this), t.default)) w(t, ['pause', 'cancel'], o);
                var h = i.to,
                    p = i.from,
                    m = e.to,
                    g = void 0 === m ? h : m,
                    E = e.from,
                    v = void 0 === E ? p : E;
                if ((u && !l && (g = v), t.reverse)) {
                    var I = [v, g];
                    (g = I[0]), (v = I[1]);
                }
                var S = !a.isEqual(v, p);
                S && (i.from = v);
                var b = !a.isEqual(g, h);
                b && this._focus(g);
                var A = a.getFluidConfig(g),
                    N = a.getFluidConfig(v);
                N && (v = N.get());
                var C = a.is.arr(t.to) || a.is.fun(t.to),
                    R = i.config,
                    L = R.decay,
                    x = R.velocity;
                t.config &&
                    !C &&
                    !(function (e, t, n) {
                        for (var r in (n && (y((n = s({}, n)), t), (t = s(s({}, n), t))), y(e, t), Object.assign(e, t), T)) null == e[r] && (e[r] = T[r]);
                        var i = e.mass,
                            o = e.frequency,
                            l = e.damping;
                        !a.is.und(o) && (o < 0.01 && (o = 0.01), l < 0 && (l = 0), (e.tension = Math.pow((2 * Math.PI) / o, 2) * i), (e.friction = (4 * Math.PI * l * i) / o));
                    })(R, O(t.config, r), t.config !== o.config ? O(o.config, r) : void 0);
                var M = f.getAnimated(this);
                if (!M || a.is.und(g)) return n(F(this, !0));
                var P = a.is.und(t.reset) ? u && !t.default : !a.is.und(v) && D(t.reset, r),
                    k = P ? v : this.get(),
                    G = U(g),
                    B = a.is.num(G) || a.is.arr(G) || a.isAnimatedString(G),
                    j = !C && (!B || D(o.immediate || t.immediate, r));
                if (b) {
                    if (j) M = this._updateNode(G);
                    else {
                        var Y = this._getNodeType(g);
                        if (Y !== M.constructor) throw Error('Cannot animate between ' + M.constructor.name + ' and ' + Y.name + ', as the "to" prop suggests');
                    }
                }
                var W = M.constructor,
                    K = !!A,
                    z = !1;
                if (!K) {
                    var q = P || (this.is(X) && S);
                    (b || q) && (K = !(z = a.isEqual(U(k), G))), (!a.isEqual(R.decay, L) || !a.isEqual(R.velocity, x)) && (K = !0);
                }
                if ((z && this.is($) && (i.changed && !P ? (K = !0) : !K && this._stop()), !C)) {
                    (K || a.getFluidConfig(h)) && ((i.values = M.getPayload()), (i.toValues = A ? null : W == f.AnimatedString ? [1] : a.toArray(G))), (i.immediate = j), (i.onStart = ei(c('onStart'), r)), (i.onChange = ei(c('onChange'), r));
                    var Q = i.onRest,
                        ee = P && !t.onRest ? Q[0] || a.noop : ea(ei(c('onRest'), r), this);
                    if (K) {
                        i.onRest = [ee, ea(n, this)];
                        var et = P ? 0 : 1;
                        et < Q.length &&
                            _.batchedUpdates(function () {
                                for (; et < Q.length; et++) Q[et]();
                            });
                    } else (P || t.onRest) && (i.onRest[0] = ee);
                }
                var en = ei(c('onProps'), r);
                if ((en && en(t, this), P && M.setValue(k), C)) n(H(t.to, t, this._state, this));
                else if (K) P && (this._phase = J), this._reset(), this._start();
                else if (this.is($) && !b) i.onRest.push(ea(n, this));
                else {
                    let e = Z(this, k),
                        t = ei(c('onNoopRest'), r);
                    null != t && t(e), n(e);
                }
            }),
            (r._focus = function (e) {
                var t = this.animation;
                if (e !== t.to) {
                    var n = a.getFluidConfig(t.to);
                    n && n.removeChild(this), (t.to = e);
                    var r = 0;
                    (n = a.getFluidConfig(e)) && (n.addChild(this), z(e) && (r = (e.priority || 0) + 1)), (this.priority = r);
                }
            }),
            (r._set = function (e) {
                var t = a.getFluidConfig(e);
                t && (e = t.get());
                var n = f.getAnimated(this),
                    r = n && n.getValue();
                return n ? n.setValue(e) : this._updateNode(e), !a.isEqual(e, r);
            }),
            (r._onChange = function (t, n) {
                void 0 === n && (n = !1);
                var r = this.animation;
                !r.changed && !n && ((r.changed = !0), r.onStart && r.onStart(this)), r.onChange && r.onChange(t, this), e.prototype._onChange.call(this, t, n);
            }),
            (r._reset = function () {
                var t = this.animation;
                f.getAnimated(this).reset(t.to),
                    !this.is($) && (t.changed = !1),
                    !t.immediate &&
                        (t.fromValues = t.values.map(function (e) {
                            return e.lastPosition;
                        })),
                    e.prototype._reset.call(this);
            }),
            (r._start = function () {
                !this.is($) && ((this._phase = $), e.prototype._start.call(this), _.skipAnimation ? this.finish() : _.frameLoop.start(this));
            }),
            (r._stop = function (e) {
                if ((this.resume(), this.is($))) {
                    (this._phase = J), this._onChange(this.get(), !0);
                    var t = this.animation;
                    a.each(t.values, function (e) {
                        e.done = !0;
                    });
                    var n = t.onRest;
                    n.length &&
                        ((t.onRest = [t.toValues ? a.noop : n[0]]),
                        !t.changed && (n[0] = a.noop),
                        a.each(n, function (t) {
                            return t(e);
                        }));
                }
            }),
            c(t, [
                {
                    key: 'idle',
                    get: function () {
                        return !this.is($) && !this._state.asyncTo;
                    }
                },
                {
                    key: 'goal',
                    get: function () {
                        return a.getFluidValue(this.animation.to);
                    }
                },
                {
                    key: 'velocity',
                    get: function () {
                        var e = f.getAnimated(this);
                        return e instanceof f.AnimatedValue
                            ? e.lastVelocity || 0
                            : e.getPayload().map(function (e) {
                                  return e.lastVelocity || 0;
                              });
                    }
                }
            ]),
            t
        );
    })(Q);
function er(e, t) {
    if (e.is(et)) throw Error('Cannot call "' + t + '" of disposed "' + e.constructor.name + '" object');
}
function ei(e, t) {
    return a.is.fun(e) ? e : t && e ? e[t] : void 0;
}
var ea = function (e, t) {
    var n = t.animation.to;
    return e
        ? function (r) {
              if (r) e(V(t));
              else {
                  var i = U(n),
                      s = U(t.get());
                  e(F(t, a.isEqual(s, i)));
              }
          }
        : a.noop;
};
function es(e, t, n) {
    void 0 === t && (t = e.loop), void 0 === n && (n = e.to);
    var r = O(t);
    if (r) {
        var i = !0 !== r && k(r),
            o = (i || e).reverse,
            l = !i || i.reset;
        return eo(
            s(
                s({}, e),
                {},
                {
                    loop: t,
                    default: !1,
                    to: !o || a.is.arr(n) || a.is.fun(n) ? n : void 0,
                    from: l ? e.from : void 0,
                    reset: l
                },
                i
            )
        );
    }
}
function eo(e) {
    var t = (e = k(e)),
        n = t.to,
        r = t.from,
        i = new Set();
    return r ? el(r, i) : delete e.from, a.is.obj(n) ? el(n, i) : !n && delete e.to, (e.keys = i.size ? Array.from(i) : null), e;
}
function el(e, t) {
    a.each(e, function (e, n) {
        return null != e && t.add(n);
    });
}
var eu = ['onStart', 'onChange', 'onRest'],
    ec = 1,
    ed = (function () {
        function e(e, t) {
            (this.id = ec++),
                (this.springs = {}),
                (this.queue = []),
                (this._flush = void 0),
                (this._initialProps = void 0),
                (this._phase = X),
                (this._lastAsyncId = 0),
                (this._active = new Set()),
                (this._state = {
                    pauseQueue: new Set(),
                    resumeQueue: new Set()
                }),
                (this._events = {
                    onStart: new Set(),
                    onChange: new Set(),
                    onRest: new Map()
                }),
                (this._onFrame = this._onFrame.bind(this)),
                t && (this._flush = t),
                e && this.start(e);
        }
        var t = e.prototype;
        return (
            (t.is = function (e) {
                return this._phase == e;
            }),
            (t.get = function () {
                var e = {};
                return (
                    this.each(function (t, n) {
                        return (e[n] = t.get());
                    }),
                    e
                );
            }),
            (t.update = function (e) {
                return e && this.queue.push(eo(e)), this;
            }),
            (t.start = function (e) {
                var t = e ? a.toArray(e).map(eo) : this.queue;
                return (!e && (this.queue = []), this._flush) ? this._flush(this, t) : (eg(this, t), ef(this, t));
            }),
            (t.stop = function (e) {
                if (a.is.und(e))
                    this.each(function (e) {
                        return e.stop();
                    }),
                        W(this._state, this._lastAsyncId);
                else {
                    var t = this.springs;
                    a.each(a.toArray(e), function (e) {
                        return t[e].stop();
                    });
                }
                return this;
            }),
            (t.pause = function (e) {
                if (a.is.und(e))
                    this.each(function (e) {
                        return e.pause();
                    });
                else {
                    var t = this.springs;
                    a.each(a.toArray(e), function (e) {
                        return t[e].pause();
                    });
                }
                return this;
            }),
            (t.resume = function (e) {
                if (a.is.und(e))
                    this.each(function (e) {
                        return e.resume();
                    });
                else {
                    var t = this.springs;
                    a.each(a.toArray(e), function (e) {
                        return t[e].resume();
                    });
                }
                return this;
            }),
            (t.reset = function () {
                return (
                    this.each(function (e) {
                        return e.reset();
                    }),
                    this
                );
            }),
            (t.each = function (e) {
                a.each(this.springs, e);
            }),
            (t.dispose = function () {
                (this._state.asyncTo = void 0),
                    this.each(function (e) {
                        return e.dispose();
                    }),
                    (this.springs = {});
            }),
            (t._onFrame = function () {
                var e = this,
                    t = this._events,
                    n = t.onStart,
                    r = t.onChange,
                    i = t.onRest,
                    s = this._active.size > 0;
                s &&
                    this._phase != $ &&
                    ((this._phase = $),
                    a.flush(n, function (t) {
                        return t(e);
                    }));
                var o = (r.size || (!s && i.size)) && this.get();
                a.flush(r, function (e) {
                    return e(o);
                }),
                    !s &&
                        ((this._phase = J),
                        a.flush(i, function (e) {
                            var t = e[0],
                                n = e[1];
                            (n.value = o), t(n);
                        }));
            }),
            (t.onParentChange = function (e) {
                'change' == e.type && (this._active[e.idle ? 'delete' : 'add'](e.parent), _.frameLoop.onFrame(this._onFrame));
            }),
            c(e, [
                {
                    key: 'idle',
                    get: function () {
                        return (
                            !this._state.asyncTo &&
                            Object.values(this.springs).every(function (e) {
                                return e.idle;
                            })
                        );
                    }
                }
            ]),
            e
        );
    })();
function ef(e, t) {
    return Promise.all(
        t.map(function (t) {
            return (function e(t, n, r) {
                var i = n.to,
                    s = n.loop,
                    o = n.onRest;
                s && (n.loop = !1);
                var l = a.is.arr(i) || a.is.fun(i) ? i : void 0;
                l
                    ? ((n.to = void 0), (n.onRest = void 0))
                    : a.each(eu, function (e) {
                          var r = n[e];
                          if (a.is.fun(r)) {
                              var i = t._events[e];
                              i instanceof Set
                                  ? (n[e] = function () {
                                        return i.add(r);
                                    })
                                  : (n[e] = function (e) {
                                        var t = e.finished,
                                            n = e.cancelled,
                                            a = i.get(r);
                                        a
                                            ? (!t && (a.finished = !1), n && (a.cancelled = !0))
                                            : i.set(r, {
                                                  value: null,
                                                  finished: t,
                                                  cancelled: n
                                              });
                                    });
                          }
                      });
                var u = (n.keys || Object.keys(t.springs)).map(function (e) {
                        return t.springs[e].start(n);
                    }),
                    c = t._state;
                return (
                    l
                        ? u.push(
                              G(++t._lastAsyncId, {
                                  props: n,
                                  state: c,
                                  actions: {
                                      pause: a.noop,
                                      resume: a.noop,
                                      start: function (e, n) {
                                          if (((e.onRest = o), e.cancel)) {
                                              var r, i;
                                              if (((r = e), (i = 'cancel'), !a.is.und(x(r, i)))) W(c, e.callId);
                                          } else n(H(l, e, c, t));
                                      }
                                  }
                              })
                          )
                        : !n.keys && !0 === n.cancel && W(c, t._lastAsyncId),
                    Promise.all(u).then(function (a) {
                        var o = B(t, a);
                        if (s && o.finished && !(r && o.noop)) {
                            var l = es(n, s, i);
                            if (l) return eg(t, [l]), e(t, l, !0);
                        }
                        return o;
                    })
                );
            })(e, t);
        })
    ).then(function (t) {
        return B(e, t);
    });
}
function e_(e, t) {
    var n = s({}, e.springs);
    return (
        t &&
            a.each(a.toArray(t), function (e) {
                a.is.und(e.keys) && (e = eo(e)),
                    !a.is.obj(e.to) && (e = s(s({}, e), {}, { to: void 0 })),
                    em(n, e, function (e) {
                        return ep(e);
                    });
            }),
        n
    );
}
function eh(e, t) {
    a.each(t, function (t, n) {
        !e.springs[n] && ((e.springs[n] = t), t.addChild(e));
    });
}
function ep(e, t) {
    var n = new en();
    return (n.key = e), t && n.addChild(t), n;
}
function em(e, t, n) {
    t.keys &&
        a.each(t.keys, function (r) {
            (e[r] || (e[r] = n(r)))._prepareNode(t);
        });
}
function eg(e, t) {
    a.each(t, function (t) {
        em(e.springs, t, function (t) {
            return ep(t, e);
        });
    });
}
var eE = o.createContext({}),
    ev = function (e) {
        var t = e.children,
            n = g(e, ['children']),
            r = o.useContext(eE);
        n = R(
            function () {
                return s(s({}, r), n);
            },
            [r, n.pause, n.cancel, n.immediate, n.config]
        );
        var i = eE.Provider;
        return o.createElement(i, { value: n }, t);
    };
(ev.Provider = eE.Provider), (ev.Consumer = eE.Consumer);
var eI = function () {
        return o.useContext(eE);
    },
    eS = {
        create: function (e) {
            return {
                get controllers() {
                    return e();
                },
                update: function (t) {
                    return (
                        a.each(e(), function (e, n) {
                            e.update(L(t, n, e));
                        }),
                        this
                    );
                },
                start: function (t) {
                    return u(
                        l.mark(function n() {
                            var r;
                            return l.wrap(function (n) {
                                for (;;)
                                    switch ((n.prev = n.next)) {
                                        case 0:
                                            return (
                                                (n.next = 2),
                                                Promise.all(
                                                    e().map(function (e, n) {
                                                        var r = L(t, n, e);
                                                        return e.start(r);
                                                    })
                                                )
                                            );
                                        case 2:
                                            return (
                                                (r = n.sent),
                                                n.abrupt('return', {
                                                    value: r.map(function (e) {
                                                        return e.value;
                                                    }),
                                                    finished: r.every(function (e) {
                                                        return e.finished;
                                                    })
                                                })
                                            );
                                        case 4:
                                        case 'end':
                                            return n.stop();
                                    }
                            }, n);
                        })
                    )();
                },
                stop: function (t) {
                    return a.each(e(), function (e) {
                        return e.stop(t);
                    });
                },
                pause: function (t) {
                    return a.each(e(), function (e) {
                        return e.pause(t);
                    });
                },
                resume: function (t) {
                    return a.each(e(), function (e) {
                        return e.resume(t);
                    });
                }
            };
        }
    };
function eT(e, t, n) {
    var r = a.is.fun(t) && t;
    r && !n && (n = []);
    var l = o.useRef(0),
        u = a.useForceUpdate(),
        c = o.useState(function () {
            return {
                ctrls: [],
                queue: [],
                flush: function (e, t) {
                    var n = e_(e, t);
                    return !(l.current > 0) ||
                        c.queue.length ||
                        Object.keys(n).some(function (t) {
                            return !e.springs[t];
                        })
                        ? new Promise(function (r) {
                              eh(e, n),
                                  c.queue.push(function () {
                                      r(ef(e, t));
                                  }),
                                  u();
                          })
                        : ef(e, t);
                }
            };
        })[0],
        d = o.useRef(),
        f = [].concat(c.ctrls),
        _ = [],
        h = a.usePrev(e) || 0,
        p = f.slice(e, h);
    function m(e, n) {
        for (var i = e; i < n; i++) {
            var s = f[i] || (f[i] = new ed(null, c.flush)),
                o = r ? r(i, s) : t[i];
            o &&
                ((o = _[i] =
                    (function (e) {
                        var t = eo(e);
                        return a.is.und(t.default) && (t.default = w(t, [!0 === t.immediate && 'immediate'])), t;
                    })(o)),
                0 == i && ((d.current = o.ref), (o.ref = void 0)));
        }
    }
    R(
        function () {
            (f.length = e), m(h, e);
        },
        [e]
    ),
        R(function () {
            m(0, Math.min(h, e));
        }, n);
    var g = o.useMemo(function () {
            return eS.create(function () {
                return c.ctrls;
            });
        }, []),
        E = f.map(function (e, t) {
            return e_(e, _[t]);
        }),
        v = eI();
    i.useLayoutEffect(function () {
        l.current++, (c.ctrls = f), d.current && (d.current.current = g);
        var e = c.queue;
        e.length &&
            ((c.queue = []),
            a.each(e, function (e) {
                return e();
            })),
            a.each(p, function (e) {
                return e.dispose();
            }),
            a.each(f, function (e, t) {
                eh(e, E[t]), e.start({ default: v });
                var n = _[t];
                n && (d.current ? e.queue.push(n) : e.start(n));
            });
    }),
        a.useOnce(function () {
            return function () {
                a.each(c.ctrls, function (e) {
                    return e.dispose();
                });
            };
        });
    var I = E.map(function (e) {
        return s({}, e);
    });
    return r || 3 == arguments.length ? [I, g.start, g.stop] : I;
}
function eb(e, t) {
    var n = a.is.fun(e),
        r = eT(1, n ? e : [e], n ? t || [] : t),
        i = r[0][0],
        s = r[1],
        o = r[2];
    return n || 2 == arguments.length ? [i, s, o] : i;
}
function ey(e, t, n) {
    var r = a.is.fun(t) && t;
    r && !n && (n = []);
    var s = [],
        o = eT(
            e,
            function (e, n) {
                return (s[e] = n), L(t, e, n);
            },
            n || [{}]
        );
    if (
        (i.useLayoutEffect(function () {
            for (var e = a.is.obj(t) && t.reverse, n = 0; n < s.length; n++) {
                var r = s[n + (e ? 1 : -1)];
                r && s[n].update({ to: r.springs }).start();
            }
        }, n),
        r || 3 == arguments.length)
    ) {
        var l = o[1];
        return (
            (o[1] = h.useCallbackOne(function (e) {
                var t = a.is.obj(e) && e.reverse;
                return l(function (n, r) {
                    var i = L(e, n, r),
                        a = s[n + (t ? 1 : -1)];
                    return a && (i.to = a.springs), i;
                });
            }, n)),
            o
        );
    }
    return o[0];
}
var eA = 'mount',
    eN = 'enter',
    eC = 'update',
    eR = 'leave';
function eO(e, t, n) {
    var r = t.ref,
        l = t.reset,
        u = t.sort,
        c = t.trail,
        d = void 0 === c ? 0 : c,
        f = t.expires,
        _ = void 0 === f || f,
        h = a.toArray(e),
        p = [],
        m = (function (e, t) {
            var n = t.key,
                r = t.keys,
                i = void 0 === r ? n : r;
            return a.is.und(i) ? e : a.is.fun(i) ? e.map(i) : a.toArray(i);
        })(h, t),
        g = o.useRef(null),
        E = l ? null : g.current;
    i.useLayoutEffect(function () {
        g.current = p;
    }),
        a.useOnce(function () {
            return function () {
                return a.each(g.current, function (e) {
                    e.expired && clearTimeout(e.expirationId), e.ctrl.dispose();
                });
            };
        });
    var v = [];
    if (
        (E &&
            a.each(E, function (e, t) {
                e.expired ? clearTimeout(e.expirationId) : ~(t = v[t] = m.indexOf(e.key)) && (p[t] = e);
            }),
        a.each(h, function (e, t) {
            p[t] ||
                (p[t] = {
                    key: m[t],
                    item: e,
                    phase: eA,
                    ctrl: new ed()
                });
        }),
        v.length)
    ) {
        var I = -1;
        a.each(v, function (e, n) {
            var r = E[n];
            ~e ? ((I = p.indexOf(r)), (p[I] = s(s({}, r), {}, { item: h[e] }))) : t.leave && p.splice(++I, 0, r);
        });
    }
    a.is.fun(u) &&
        p.sort(function (e, t) {
            return u(e.item, t.item);
        });
    var S = -d,
        T = a.useForceUpdate(),
        b = w(t),
        y = new Map();
    a.each(p, function (e, n) {
        var r,
            i,
            o = e.key,
            l = e.phase;
        if (l == eA) (r = t.enter), (i = eN);
        else {
            var u = 0 > m.indexOf(o);
            if (l != eR) {
                if (u) (r = t.leave), (i = eR);
                else {
                    if (!(r = t.update)) return;
                    i = eC;
                }
            } else {
                if (u) return;
                (r = t.enter), (i = eN);
            }
        }
        if (((r = O(r, e.item, n)), !(r = a.is.obj(r) ? k(r) : { to: r }).config)) {
            var c = t.config || b.config;
            r.config = O(c, e.item, n);
        }
        var f = s(
            s({}, b),
            {},
            {
                delay: (S += d),
                reset: !1
            },
            r
        );
        if (i == eN && a.is.und(f.from)) {
            var h = a.is.und(t.initial) || E ? t.from : t.initial;
            f.from = O(h, e.item, n);
        }
        var p = f.onRest;
        f.onRest = f.onNoopRest = function (e) {
            var t = g.current,
                n = t.find(function (e) {
                    return e.key === o;
                });
            if (n) {
                if ((a.is.fun(p) && !0 !== e.noop && p(e, n), e.cancelled && n.phase != eC)) {
                    n.phase = l;
                    return;
                }
                if (n.ctrl.idle) {
                    var r = t.every(function (e) {
                        return e.ctrl.idle;
                    });
                    if (n.phase == eR) {
                        var i = O(_, n.item);
                        if (!1 !== i) {
                            var s = !0 === i ? 0 : i;
                            if (((n.expired = !0), !r && s > 0)) {
                                s <= 2147483647 && (n.expirationId = setTimeout(T, s));
                                return;
                            }
                        }
                    }
                    r &&
                        t.some(function (e) {
                            return e.expired;
                        }) &&
                        T();
                }
            }
        };
        var v = e_(e.ctrl, f);
        y.set(e, {
            phase: i,
            springs: v,
            payload: f
        });
    });
    var A = eI();
    i.useLayoutEffect(
        function () {
            a.each(p, function (e) {
                e.ctrl.start({ default: A });
            });
        },
        [A]
    );
    var N = o.useMemo(function () {
        return eS.create(function () {
            return g.current.map(function (e) {
                return e.ctrl;
            });
        });
    }, []);
    o.useImperativeHandle(r, function () {
        return N;
    }),
        i.useLayoutEffect(
            function () {
                a.each(y, function (e, t) {
                    var n = e.phase,
                        i = e.springs,
                        a = e.payload;
                    eh(t.ctrl, i), !A.cancel && ((t.phase = n), n == eN && t.ctrl.start({ default: A }), t.ctrl[r ? 'update' : 'start'](a));
                });
            },
            l ? void 0 : n
        );
    var C = function (e) {
        return o.createElement(
            o.Fragment,
            null,
            p.map(function (t, n) {
                var r = e(s({}, (y.get(t) || t.ctrl).springs), t.item, t, n);
                return r && r.type
                    ? o.createElement(
                          r.type,
                          s({}, r.props, {
                              key: a.is.str(t.key) || a.is.num(t.key) ? t.key : t.ctrl.id,
                              ref: r.ref
                          })
                      )
                    : r;
            })
        );
    };
    return 3 == arguments.length ? [C, N.start, N.stop] : C;
}
var eD = (function (e) {
    function t(t, n) {
        ((r = e.call(this) || this).source = t), (r.key = void 0), (r.idle = !0), (r.calc = void 0), (r.calc = a.createInterpolator.apply(void 0, n));
        var r,
            i = r._get(),
            s = a.is.arr(i) ? f.AnimatedArray : f.AnimatedValue;
        return f.setAnimated(E(r), s.create(i)), r;
    }
    d(t, e);
    var n = t.prototype;
    return (
        (n.advance = function (e) {
            var t = this._get(),
                n = this.get();
            !a.isEqual(t, n) && (f.getAnimated(this).setValue(t), this._onChange(t, this.idle));
        }),
        (n._get = function () {
            var e = a.is.arr(this.source)
                ? this.source.map(function (e) {
                      return e.get();
                  })
                : a.toArray(this.source.get());
            return this.calc.apply(this, e);
        }),
        (n._reset = function () {
            a.each(f.getPayload(this), function (e) {
                return e.reset();
            }),
                e.prototype._reset.call(this);
        }),
        (n._start = function () {
            (this.idle = !1), e.prototype._start.call(this), _.skipAnimation ? ((this.idle = !0), this.advance()) : _.frameLoop.start(this);
        }),
        (n._attach = function () {
            var e = this,
                t = !0,
                n = 1;
            a.each(a.toArray(this.source), function (r) {
                z(r) && (!r.idle && (t = !1), (n = Math.max(n, r.priority + 1))), r.addChild(e);
            }),
                (this.priority = n),
                !t && (this._reset(), this._start());
        }),
        (n._detach = function () {
            var e = this;
            a.each(a.toArray(this.source), function (t) {
                t.removeChild(e);
            }),
                (this.idle = !0);
        }),
        (n.onParentChange = function (t) {
            'start' == t.type
                ? this.advance()
                : 'change' == t.type
                  ? this.idle
                      ? this.advance()
                      : t.idle &&
                        ((this.idle = a.toArray(this.source).every(function (e) {
                            return !1 !== e.idle;
                        })),
                        this.idle &&
                            (this.advance(),
                            a.each(f.getPayload(this), function (e) {
                                e.done = !0;
                            })))
                  : 'priority' == t.type &&
                    (this.priority = a.toArray(this.source).reduce(function (e, t) {
                        return Math.max(e, (t.priority || 0) + 1);
                    }, 0)),
                e.prototype.onParentChange.call(this, t);
        }),
        t
    );
})(Q);
a.Globals.assign({
    createStringInterpolator: v.createStringInterpolator,
    to: function (e, t) {
        return new eD(e, t);
    }
});
Object.keys(I).forEach(function (e) {
    'default' !== e &&
        Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
                return I[e];
            }
        });
}),
    Object.defineProperty(t, 'FrameLoop', {
        enumerable: !0,
        get: function () {
            return a.FrameLoop;
        }
    }),
    Object.defineProperty(t, 'Globals', {
        enumerable: !0,
        get: function () {
            return a.Globals;
        }
    }),
    Object.defineProperty(t, 'createInterpolator', {
        enumerable: !0,
        get: function () {
            return a.createInterpolator;
        }
    }),
    (t.BailSignal = K),
    (t.Controller = ed),
    (t.FrameValue = Q),
    (t.Interpolation = eD),
    (t.Spring = function (e) {
        return (0, e.children)(eb(g(e, ['children'])));
    }),
    (t.SpringContext = ev),
    (t.SpringHandle = eS),
    (t.SpringValue = en),
    (t.Trail = function (e) {
        var t = e.items,
            n = e.children,
            r = g(e, ['items', 'children']),
            i = ey(t.length, r);
        return t.map(function (e, t) {
            var r = n(e, t);
            return a.is.fun(r) ? r(i[t]) : r;
        });
    }),
    (t.Transition = function (e) {
        var t = e.items,
            n = e.children,
            r = g(e, ['items', 'children']);
        return o.createElement(o.Fragment, null, eO(t, r)(n));
    }),
    (t.config = S),
    (t.inferTo = k),
    (t.interpolate = function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return m.deprecateInterpolate(), new eD(e, n);
    }),
    (t.to = function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return new eD(e, n);
    }),
    (t.update = function () {
        return a.Globals.frameLoop.advance();
    }),
    (t.useChain = function (e, t, n) {
        void 0 === n && (n = 1000),
            i.useLayoutEffect(function () {
                if (t) {
                    var r = 0;
                    a.each(e, function (e, i) {
                        if (e.current) {
                            var s = e.current.controllers;
                            if (s.length) {
                                var o = n * t[i];
                                isNaN(o) ? (o = r) : (r = o),
                                    a.each(s, function (e) {
                                        a.each(e.queue, function (e) {
                                            e.delay = o + (e.delay || 0);
                                        }),
                                            e.start();
                                    });
                            }
                        }
                    });
                } else {
                    var i = Promise.resolve();
                    a.each(e, function (e) {
                        var t = e.current || {},
                            n = t.controllers,
                            r = t.start;
                        if (n && n.length) {
                            var s = n.map(function (e) {
                                var t = e.queue;
                                return (e.queue = []), t;
                            });
                            i = i.then(function () {
                                return (
                                    a.each(n, function (e, t) {
                                        var n;
                                        return (n = e.queue).push.apply(n, s[t]);
                                    }),
                                    r()
                                );
                            });
                        }
                    });
                }
            });
    }),
    (t.useSpring = eb),
    (t.useSprings = eT),
    (t.useTrail = ey),
    (t.useTransition = eO);
