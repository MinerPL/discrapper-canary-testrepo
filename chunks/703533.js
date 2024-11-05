n.d(t, {
    Ji: function () {
        return R;
    },
    O_: function () {
        return C;
    },
    qA: function () {
        return d;
    },
    uR: function () {
        return O;
    }
});
var r = n(192379),
    i = n(772848),
    a = n(120356),
    s = n.n(a);
function o(e, t) {
    var n = e.x,
        r = e.y;
    return n > t.x && n < t.x + t.width && r > t.y && r < t.y + t.height;
}
function l(e, t, n, r) {
    var i = Math.abs(t);
    return 0.5 * e * r * n * i * i * (t > 0 ? -1 : 1);
}
var u = (function () {
        function e(e) {
            (this.id = e.id), (this.position = e.position), (this.velocity = e.velocity), (this.rotation = e.rotation), (this.dragCoefficient = e.dragCoefficient), (this.airResistanceArea = e.airResistanceArea), (this.size = e.size), (this.opacity = e.opacity), (this.spriteX = e.spriteX), (this.spriteY = e.spriteY), (this.spriteWidth = e.spriteWidth), (this.spriteHeight = e.spriteHeight), (this._lastUpdatedAt = Date.now());
        }
        return (
            (e.prototype.getNewForces = function (e, t) {
                var n = e.wind * t,
                    r = -e.gravity * t;
                return {
                    x: n + l(this.dragCoefficient.x, this.velocity.x, this.airResistanceArea.x, e.density),
                    y: r + l(this.dragCoefficient.y, this.velocity.y, this.airResistanceArea.y, e.density)
                };
            }),
            (e.prototype.update = function (e) {
                var t = Date.now(),
                    n = (t - this._lastUpdatedAt) / 100;
                this.rotation.update(n), this.dragCoefficient.update(n);
                var r = this.getNewForces(e, n),
                    i = r.x,
                    a = r.y;
                this.velocity.update(n), (this.velocity.x += i), (this.velocity.y += a), this.position.update(n), (this.position.x += this.velocity.x * n), (this.position.y += this.velocity.y * n), this.size.update(n), this.opacity.update(n), (this._lastUpdatedAt = t);
            }),
            (e.prototype.previewPositionUpdate = function (e, t) {
                var n = t / 100,
                    r = this.velocity.previewUpdate(n),
                    i = this.getNewForces(e, n),
                    a = i.x,
                    s = i.y;
                (r.x += a), (r.y += s);
                var o = this.position.previewUpdate(n);
                return (o.x += r.x * n), (o.y += r.y * n), o;
            }),
            (e.prototype.draw = function (e, t) {
                t.save(), (t.globalAlpha = this.opacity.value), t.setTransform(new DOMMatrix().translateSelf(this.position.x * n.g.devicePixelRatio, this.position.y * n.g.devicePixelRatio).rotateSelf(this.rotation.x, this.rotation.y, this.rotation.z)), t.drawImage(e, this.spriteX, this.spriteY, this.spriteWidth, this.spriteHeight, (-this.width / 2) * n.g.devicePixelRatio, (-this.height / 2) * n.g.devicePixelRatio, this.width * n.g.devicePixelRatio, this.height * n.g.devicePixelRatio), t.restore();
            }),
            (e.prototype.shouldDestroy = function (e, t) {
                return this.opacity.value < 0 || (t.gravity >= 0 && this.velocity.y < 0 && this.position.y + this.height < 0) || (t.gravity <= 0 && this.velocity.y > 0 && this.position.y - this.height > e.height) || (t.wind >= 0 && this.velocity.x > 0 && this.position.x - this.width > e.width) || (t.wind <= 0 && this.velocity.x < 0 && this.position.x + this.width < 0);
            }),
            Object.defineProperty(e.prototype, 'width', {
                get: function () {
                    return this.size.x;
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, 'height', {
                get: function () {
                    return this.size.y;
                },
                enumerable: !1,
                configurable: !0
            }),
            (e.prototype.addForce = function (e) {
                (this.velocity.x += e.x), (this.velocity.y += e.y);
            }),
            e
        );
    })(),
    c = {
        velocity: {
            type: 'static',
            value: 0
        },
        rotation: {
            type: 'static',
            value: 0
        },
        dragCoefficient: {
            type: 'static',
            value: 1.66
        },
        airResistanceArea: {
            type: 'static',
            value: 0.001
        },
        opacity: {
            type: 'static',
            value: 1
        }
    },
    d = function (e) {
        var t = void 0 === e ? {} : e,
            n = t.gravity,
            r = t.wind,
            i = t.density;
        (this.gravity = -9.8), (this.wind = 0), (this.density = 1.2041), (this.gravity = null != n ? n : this.gravity), (this.wind = null != r ? r : this.wind), (this.density = null != i ? i : this.density);
    },
    f = function (e, t) {
        return (f =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                    e.__proto__ = t;
                }) ||
            function (e, t) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
    };
function _(e, t) {
    if ('function' != typeof t && null !== t) throw TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
    function n() {
        this.constructor = e;
    }
    f(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
}
var h = function () {
        return (h =
            Object.assign ||
            function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
            }).apply(this, arguments);
    },
    p = function (e) {
        this.value = e;
    },
    m = (function () {
        function e(e, t) {
            (this._x = e), (this._y = t);
        }
        return (
            (e.prototype.update = function (e) {
                this._x.update(e), this._y.update(e);
            }),
            (e.prototype.previewUpdate = function (e) {
                return {
                    x: this._x.previewUpdate(e),
                    y: this._y.previewUpdate(e)
                };
            }),
            Object.defineProperty(e.prototype, 'x', {
                get: function () {
                    return this._x.value;
                },
                set: function (e) {
                    this._x.value = e;
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, 'y', {
                get: function () {
                    return this._y.value;
                },
                set: function (e) {
                    this._y.value = e;
                },
                enumerable: !1,
                configurable: !0
            }),
            e
        );
    })(),
    g = (function (e) {
        function t(t, n, r) {
            var i = e.call(this, t, n) || this;
            return (i._z = r), i;
        }
        return (
            _(t, e),
            (t.prototype.update = function (t) {
                e.prototype.update.call(this, t), this._z.update(t);
            }),
            (t.prototype.previewUpdate = function (t) {
                var n = e.prototype.previewUpdate.call(this, t);
                return h(h({}, n), { z: this._z.previewUpdate(t) });
            }),
            Object.defineProperty(t.prototype, 'z', {
                get: function () {
                    return this._z.value;
                },
                set: function (e) {
                    this._z.value = e;
                },
                enumerable: !1,
                configurable: !0
            }),
            t
        );
    })(m),
    E = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            _(t, e),
            (t.prototype.update = function () {}),
            (t.prototype.previewUpdate = function () {
                return this.value;
            }),
            t
        );
    })(p),
    v = (function (e) {
        function t(t, n) {
            var r = e.call(this, t) || this;
            return (r.addValue = n), r;
        }
        return (
            _(t, e),
            (t.prototype.update = function (e) {
                this.value = this.previewUpdate(e);
            }),
            (t.prototype.previewUpdate = function (e) {
                return this.value + this.addValue * e;
            }),
            t
        );
    })(p),
    I = (function (e) {
        function t(t, n, r, i, a, s) {
            var o = e.call(this, t) || this;
            (o.min = n), (o.max = r), (o.duration = i);
            var l = (o.value / (o.max - o.min)) * o.duration,
                u = isNaN(l) ? 0 : l;
            return (o.timePassed = u < 0 ? o.duration - u : u), (o.directionMultiplier = a), (o.easingFunction = s), o;
        }
        return (
            _(t, e),
            (t.prototype.update = function (e) {
                var t = this.doUpdate(e),
                    n = t[0],
                    r = t[1],
                    i = t[2];
                (this.value = n), (this.directionMultiplier = i), (this.timePassed = r);
            }),
            (t.prototype.previewUpdate = function (e) {
                return this.doUpdate(e)[0];
            }),
            (t.prototype.doUpdate = function (e) {
                var t = this.max - this.min,
                    n = this.timePassed + e * this.directionMultiplier,
                    r = Math.min(Math.max(n, 0), this.duration),
                    i = n < 0 || n > this.duration ? -1 * this.directionMultiplier : this.directionMultiplier,
                    a = this.easingFunction(r, this.min, t, this.duration);
                return [isNaN(a) ? 0 : a, r, i];
            }),
            t
        );
    })(p);
function S(e, t) {
    return e === t ? e : Math.random() * (t - e + 1) + e;
}
function T(e) {
    var t = Math.floor(S(0, e.length - 1));
    return [e[t], t];
}
function b(e, t) {
    return T([e, t])[0];
}
function y(e) {
    return 'number' == typeof e
        ? {
              x: e,
              y: e
          }
        : e;
}
function A(e) {
    return 'number' == typeof e
        ? {
              x: e,
              y: e,
              z: e
          }
        : e;
}
function N(e) {
    return (function (e) {
        switch (e.type) {
            case 'static':
                var t = y(e.value);
                return new m(new E(t.x), new E(t.y));
            case 'static-random':
                var n = y(e.minValue),
                    r = y(e.maxValue);
                return new m(new E(S(n.x, r.x)), new E(S(n.y, r.y)));
            case 'linear':
                t = y(e.value);
                var i = y(e.addValue);
                return new m(new v(t.x, i.x), new v(t.y, i.y));
            case 'linear-random':
                (n = y(e.minValue)), (r = y(e.maxValue));
                var a = y(e.minAddValue),
                    s = y(e.maxAddValue);
                return new m(new v(S(n.x, r.x), S(a.x, s.x)), new v(S(n.y, r.y), S(a.x, s.x)));
            case 'oscillating':
                t = y(e.value);
                var o = y(e.start),
                    l = y(e.final),
                    u = y(e.duration),
                    c = y(e.direction);
                return new m(new I(t.x, o.x, l.x, u.x, c.x, e.easingFunction), new I(t.y, o.y, l.y, u.x, c.y, e.easingFunction));
            case 'oscillating-random':
                (n = y(e.minValue)), (r = y(e.maxValue));
                var d = y(e.minStart),
                    f = y(e.maxStart),
                    _ = y(e.minFinal),
                    h = y(e.maxFinal),
                    p = y(e.minDuration),
                    g = y(e.maxDuration),
                    A = y(e.minDirection),
                    N = y(e.maxDirection);
                return new m(new I(S(n.x, r.x), S(d.x, f.x), S(_.x, h.x), S(p.x, g.x), b(A.x, N.x), T(e.easingFunctions)[0]), new I(S(n.y, r.y), S(d.y, f.y), S(_.y, h.y), S(p.y, g.y), b(A.y, N.y), T(e.easingFunctions)[0]));
        }
    })(h(h({}, e), { valueType: 'Vector2' }));
}
var C = r.forwardRef(function (e, t) {
    var a = e.className,
        s = e.environment,
        l = e.onClick,
        d = e.onMouseDown,
        f = e.onMouseMove,
        _ = e.onMouseUp,
        p = e.onBeforeRender,
        m = e.onAfterRender,
        y = (function (e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) 0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
            }
            return n;
        })(e, ['className', 'environment', 'onClick', 'onMouseDown', 'onMouseMove', 'onMouseUp', 'onBeforeRender', 'onAfterRender']),
        C = r.useRef(null),
        R = r.useRef(new Map()),
        O = r.useRef(null),
        D = r.useRef(0),
        L = r.useRef(0),
        x = r.useCallback(
            function () {
                var e = C.current;
                if (null != e) {
                    var t = e.getContext('2d');
                    if (null != t) {
                        t.clearRect(0, 0, e.width, e.height),
                            null == p || p(t),
                            R.current.forEach(function (n, r) {
                                var i = n.confetti,
                                    a = n.spriteCanvas;
                                i.update(s), i.draw(a, t), i.shouldDestroy(e, s) && R.current.delete(r);
                            }),
                            null == m || m(t),
                            R.current.size > 0 ? (O.current = window.requestAnimationFrame(x)) : (t.clearRect(0, 0, e.width, e.height), (O.current = null));
                        var n = Date.now();
                        0 !== D.current && (L.current = 1000 / (n - D.current)), (D.current = n);
                    }
                }
            },
            [s, m, p]
        );
    r.useEffect(
        function () {
            null != O.current && (window.cancelAnimationFrame(O.current), (O.current = window.requestAnimationFrame(x)));
        },
        [x]
    );
    var w = r.useCallback(
            function (e, t) {
                R.current.set(e.id, {
                    confetti: e,
                    spriteCanvas: t
                }),
                    null == O.current && x();
            },
            [x]
        ),
        M = r.useCallback(
            function (e, t, n, r, a) {
                var s,
                    o,
                    l,
                    d,
                    f,
                    _,
                    p,
                    m,
                    y,
                    C,
                    R,
                    O,
                    D,
                    L,
                    x,
                    M =
                        ((s = null !== (x = e.id) && void 0 !== x ? x : (0, i.Z)()),
                        (o = e),
                        (l = n),
                        (d = r),
                        (f = a),
                        (m = N((p = ((_ = o), h(h({ id: s }, c), _))).size)),
                        (C = (y = (function (e, t) {
                            if (null != e) {
                                var n = t.sprites.findIndex(function (t) {
                                    return 'string' == typeof e ? t.src === e && t.colorize : t.src === e.src && t.colorize === e.colorize;
                                });
                                if (-1 !== n) return [e, n];
                            }
                            return T(t.sprites);
                        })(d, l))[0]),
                        (R = y[1]),
                        (O = (function (e, t, n) {
                            if (!('string' == typeof (r = e) || r.colorize)) return 0;
                            var r,
                                i =
                                    null != t
                                        ? n.colors.findIndex(function (e) {
                                              return e === t;
                                          })
                                        : -1;
                            return -1 !== i ? i : Math.floor(S(0, n.colors.length - 1));
                        })(null != d ? d : C, f, l)),
                        new u({
                            id: s,
                            position: N(p.position),
                            velocity: N(p.velocity),
                            rotation:
                                ((D = p.rotation),
                                (function (e) {
                                    switch (e.type) {
                                        case 'static':
                                            var t = A(e.value);
                                            return new g(new E(t.x), new E(t.y), new E(t.z));
                                        case 'static-random':
                                            var n = A(e.minValue),
                                                r = A(e.maxValue);
                                            return new g(new E(S(n.x, r.x)), new E(S(n.y, r.y)), new E(S(n.z, r.z)));
                                        case 'linear':
                                            t = A(e.value);
                                            var i = A(e.addValue);
                                            return new g(new v(t.x, i.x), new v(t.y, i.y), new v(t.z, i.z));
                                        case 'linear-random':
                                            (n = A(e.minValue)), (r = A(e.maxValue));
                                            var a = A(e.minAddValue),
                                                s = A(e.maxAddValue);
                                            return new g(new v(S(n.x, r.x), S(a.x, s.x)), new v(S(n.y, r.y), S(a.y, s.y)), new v(S(n.z, r.z), S(a.z, s.z)));
                                        case 'oscillating':
                                            t = A(e.value);
                                            var o = A(e.start),
                                                l = A(e.final),
                                                u = A(e.duration),
                                                c = A(e.direction);
                                            return new g(new I(t.x, o.x, l.x, u.x, c.x, e.easingFunction), new I(t.y, o.y, l.y, u.z, c.y, e.easingFunction), new I(t.z, o.z, l.z, u.z, c.z, e.easingFunction));
                                        case 'oscillating-random':
                                            (n = A(e.minValue)), (r = A(e.maxValue));
                                            var d = A(e.minStart),
                                                f = A(e.maxStart),
                                                _ = A(e.minFinal),
                                                h = A(e.maxFinal),
                                                p = A(e.minDuration),
                                                m = A(e.maxDuration),
                                                y = A(e.minDirection),
                                                N = A(e.maxDirection);
                                            return new g(new I(S(n.x, r.x), S(d.x, f.x), S(_.x, h.x), S(p.x, m.x), b(y.x, N.x), T(e.easingFunctions)[0]), new I(S(n.y, r.y), S(d.y, f.y), S(_.y, h.y), S(p.y, m.y), b(y.y, N.y), T(e.easingFunctions)[0]), new I(S(n.z, r.z), S(d.z, f.z), S(_.z, h.z), S(p.z, m.z), b(y.z, N.z), T(e.easingFunctions)[0]));
                                    }
                                })(h(h({}, D), { valueType: 'Vector3' }))),
                            dragCoefficient: N(p.dragCoefficient),
                            size: m,
                            opacity:
                                ((L = p.opacity),
                                (function (e) {
                                    switch (e.type) {
                                        case 'static':
                                            return new E(e.value);
                                        case 'static-random':
                                            return new E(S(e.minValue, e.maxValue));
                                        case 'linear':
                                            return new v(e.value, e.addValue);
                                        case 'linear-random':
                                            return new v(S(e.minValue, e.maxValue), S(e.minAddValue, e.maxAddValue));
                                        case 'oscillating':
                                            return new I(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                                        case 'oscillating-random':
                                            return new I(S(e.minValue, e.maxValue), S(e.minStart, e.maxStart), S(e.minFinal, e.maxFinal), S(e.minDuration, e.maxDuration), b(e.minDirection, e.maxDirection), T(e.easingFunctions)[0]);
                                    }
                                })(h(h({}, L), { valueType: 'number' }))),
                            airResistanceArea: N(p.airResistanceArea),
                            spriteX: O * l.spriteWidth + 2 * O,
                            spriteY: R * l.spriteHeight + 2 * R,
                            spriteWidth: l.spriteWidth,
                            spriteHeight: l.spriteHeight
                        }));
                return w(M, t), M;
            },
            [w]
        ),
        P = r.useCallback(function (e) {
            R.current.delete(e);
        }, []),
        k = r.useCallback(function () {
            return R.current.clear();
        }, []),
        U = r.useCallback(function () {
            return C.current;
        }, []);
    r.useImperativeHandle(
        t,
        function () {
            return {
                createConfetti: M,
                addConfetti: w,
                deleteConfetti: P,
                clearConfetti: k,
                getCanvas: U
            };
        },
        [M, w, P, k, U]
    );
    var G = r.useCallback(
            function (e, t) {
                var n,
                    r,
                    i = t.clickHandler,
                    a = t.mouseHandler;
                if (null != i || null != a) {
                    var l = null === (n = C.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                    if (null != l) {
                        var u = (function (e, t) {
                            if (null == t) throw Error('element should not be null');
                            var n = t.getBoundingClientRect();
                            return {
                                x: e.clientX - n.left,
                                y: e.clientY - n.top
                            };
                        })(e, C.current);
                        if (
                            o(u, {
                                x: l.left,
                                y: l.top,
                                width: l.width,
                                height: l.height
                            })
                        ) {
                            if (null != a) return a(e);
                            if (null != i) {
                                var c = (-1000 / L.current) * 2,
                                    d = (function (e, t) {
                                        for (var n = 0, r = Array.from(e.values()); n < r.length; n++) {
                                            var i = r[n];
                                            if (null != i && t(i)) return i;
                                        }
                                        return null;
                                    })(R.current, function (e) {
                                        var t = e.confetti,
                                            n = t.previewPositionUpdate(s, c);
                                        return o(u, {
                                            x: n.x - t.width / 2,
                                            y: n.y - t.height / 2,
                                            width: t.width,
                                            height: t.height
                                        });
                                    });
                                i(e, null !== (r = null == d ? void 0 : d.confetti) && void 0 !== r ? r : null);
                            }
                        }
                    }
                }
            },
            [s]
        ),
        B = r.useCallback(
            function (e) {
                return G(e, { clickHandler: l });
            },
            [G, l]
        ),
        Z = r.useCallback(
            function (e) {
                return G(e, { clickHandler: d });
            },
            [G, d]
        ),
        F = r.useCallback(
            function (e) {
                return G(e, { mouseHandler: f });
            },
            [G, f]
        ),
        V = r.useCallback(
            function (e) {
                return G(e, { mouseHandler: _ });
            },
            [G, _]
        );
    return (
        r.useEffect(
            function () {
                var e = function (e, t, n) {
                    null != n && window.addEventListener(e, t);
                };
                return (
                    e('click', B, l),
                    e('mousedown', Z, d),
                    e('mousemove', F, f),
                    e('mouseup', V, _),
                    function () {
                        window.removeEventListener('click', B), window.removeEventListener('mousedown', Z), window.removeEventListener('mousemove', F), window.removeEventListener('mouseup', F);
                    }
                );
            },
            [B, Z, F, V, l, d, f, _]
        ),
        r.useEffect(function () {
            var e = C.current,
                t = new ResizeObserver(function () {
                    !(function (e) {
                        if (null != e) {
                            var t = e.getBoundingClientRect(),
                                r = t.width,
                                i = t.height;
                            (e.width = r * n.g.devicePixelRatio), (e.height = i * n.g.devicePixelRatio);
                        }
                    })(C.current);
                });
            return (
                null != e && t.observe(e),
                function () {
                    null != e && t.unobserve(e);
                }
            );
        }, []),
        r.createElement(
            'canvas',
            h({}, y, {
                className: a,
                ref: C
            })
        )
    );
});
!(function (e, t) {
    void 0 === t && (t = {});
    var n = t.insertAt;
    if (e && 'undefined' != typeof document) {
        var r = document.head || document.getElementsByTagName('head')[0],
            i = document.createElement('style');
        (i.type = 'text/css'), 'top' === n && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? (i.styleSheet.cssText = e) : i.appendChild(document.createTextNode(e));
    }
})('.SpriteCanvas-module_spriteCanvasHidden__ndzQV {\n  display: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: -100%;\n}\n');
var R = r.forwardRef(function (e, t) {
    var n,
        a = e.className,
        o = e.visible,
        l = e.sprites,
        u = e.colors,
        c = e.spriteWidth,
        d = e.spriteHeight,
        f = r.useRef(null),
        _ = r.useRef([]),
        h = r.useRef(!1),
        p = r.useRef({});
    r.useImperativeHandle(
        t,
        function () {
            return {
                getCanvas: function () {
                    return f.current;
                },
                getCreateData: function () {
                    return {
                        sprites: _.current,
                        colors: u,
                        spriteWidth: c,
                        spriteHeight: d
                    };
                },
                addReadyListener: function (e) {
                    var t = (0, i.Z)();
                    return (p.current[t] = e), t;
                },
                removeReadyListener: function (e) {
                    delete p.current[e];
                },
                isReady: h.current
            };
        },
        [u, d, c]
    );
    var m = r.useCallback(
            function () {
                var e = f.current,
                    t = null == e ? void 0 : e.getContext('2d', { willReadFrequently: !0 });
                null != t &&
                    null != e &&
                    (t.clearRect(0, 0, e.width, e.height),
                    _.current.forEach(function (e, n) {
                        var r = function (r, i) {
                            var a = c * i + 2 * i,
                                s = d * n + 2 * n;
                            if ((t.drawImage(e.image, a, s, c, d), null != r)) {
                                for (
                                    var o,
                                        l,
                                        u = t.getImageData(a, s, c, d),
                                        f =
                                            ('#' === (o = r)[0] && (o = o.slice(1)),
                                            {
                                                r: ((l = parseInt(o, 16)) >> 16) & 255,
                                                g: (l >> 8) & 255,
                                                b: 255 & l
                                            }),
                                        _ = 0;
                                    _ < u.data.length;
                                    _ += 4
                                )
                                    (u.data[_] = f.r), (u.data[_ + 1] = f.g), (u.data[_ + 2] = f.b);
                                t.putImageData(u, a, s);
                            }
                        };
                        e.colorize
                            ? u.forEach(function (e, t) {
                                  return r(e, t);
                              })
                            : r(null, 0);
                    }));
            },
            [u, d, c]
        ),
        g = r.useCallback(
            function () {
                var e = l.map(function (e) {
                    var t = new Image(),
                        n = 'string' == typeof e ? e : e.src,
                        r = 'string' == typeof e || e.colorize;
                    t.src = n;
                    var i = new Promise(function (e) {
                        t.onload = e;
                    });
                    return {
                        colorize: r,
                        image: t,
                        src: n,
                        loadPromise: i
                    };
                });
                return Promise.all(
                    e.map(function (e) {
                        return e.loadPromise;
                    })
                ).then(function () {
                    _.current = e.map(function (e) {
                        return {
                            colorize: e.colorize,
                            image: e.image,
                            src: e.src
                        };
                    });
                });
            },
            [l]
        ),
        E = r.useCallback(function (e) {
            for (var t in p.current) p.current[t](e);
        }, []),
        v = r.useCallback(
            function () {
                var e, t, n, r;
                return (
                    (e = void 0),
                    (t = void 0),
                    (n = void 0),
                    (r = function () {
                        return (function (e, t) {
                            var n,
                                r,
                                i,
                                a,
                                s = {
                                    label: 0,
                                    sent: function () {
                                        if (1 & i[0]) throw i[1];
                                        return i[1];
                                    },
                                    trys: [],
                                    ops: []
                                };
                            return (
                                (a = {
                                    next: o(0),
                                    throw: o(1),
                                    return: o(2)
                                }),
                                'function' == typeof Symbol &&
                                    (a[Symbol.iterator] = function () {
                                        return this;
                                    }),
                                a
                            );
                            function o(o) {
                                return function (l) {
                                    return (function (o) {
                                        if (n) throw TypeError('Generator is already executing.');
                                        for (; a && ((a = 0), o[0] && (s = 0)), s; )
                                            try {
                                                if (((n = 1), r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done)) return i;
                                                switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                                                    case 0:
                                                    case 1:
                                                        i = o;
                                                        break;
                                                    case 4:
                                                        return (
                                                            s.label++,
                                                            {
                                                                value: o[1],
                                                                done: !1
                                                            }
                                                        );
                                                    case 5:
                                                        s.label++, (r = o[1]), (o = [0]);
                                                        continue;
                                                    case 7:
                                                        (o = s.ops.pop()), s.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                            s = 0;
                                                            continue;
                                                        }
                                                        if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                                                            s.label = o[1];
                                                            break;
                                                        }
                                                        if (6 === o[0] && s.label < i[1]) {
                                                            (s.label = i[1]), (i = o);
                                                            break;
                                                        }
                                                        if (i && s.label < i[2]) {
                                                            (s.label = i[2]), s.ops.push(o);
                                                            break;
                                                        }
                                                        i[2] && s.ops.pop(), s.trys.pop();
                                                        continue;
                                                }
                                                o = t.call(e, s);
                                            } catch (e) {
                                                (o = [6, e]), (r = 0);
                                            } finally {
                                                n = i = 0;
                                            }
                                        if (5 & o[0]) throw o[1];
                                        return {
                                            value: o[0] ? o[1] : void 0,
                                            done: !0
                                        };
                                    })([o, l]);
                                };
                            }
                        })(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return [4, g()];
                                case 1:
                                    return e.sent(), m(), (h.current = !0), E(!0), [2];
                            }
                        });
                    }),
                    new (n || (n = Promise))(function (i, a) {
                        function s(e) {
                            try {
                                l(r.next(e));
                            } catch (e) {
                                a(e);
                            }
                        }
                        function o(e) {
                            try {
                                l(r.throw(e));
                            } catch (e) {
                                a(e);
                            }
                        }
                        function l(e) {
                            var t;
                            e.done
                                ? i(e.value)
                                : ((t = e.value) instanceof n
                                      ? t
                                      : new n(function (e) {
                                            e(t);
                                        })
                                  ).then(s, o);
                        }
                        l((r = r.apply(e, t || [])).next());
                    })
                );
            },
            [E, g, m]
        );
    return (
        r.useEffect(
            function () {
                v();
            },
            [v]
        ),
        r.useEffect(
            function () {
                return function () {
                    return E(!1);
                };
            },
            [E]
        ),
        r.useEffect(
            function () {
                null != f.current && ((f.current.width = (c + 2) * Math.max(u.length, 1)), (f.current.height = (d + 2) * l.length));
            },
            [u.length, d, c, l.length]
        ),
        r.createElement('canvas', {
            ref: f,
            className: s()(a, (((n = {})['SpriteCanvas-module_spriteCanvasHidden__ndzQV'] = !(void 0 !== o && o)), n))
        })
    );
});
function O(e, t) {
    var n,
        i = r.useState(null !== (n = null == t ? void 0 : t.isReady) && void 0 !== n && n),
        a = i[0],
        s = i[1];
    r.useEffect(
        function () {
            var e = null == t ? void 0 : t.addReadyListener(s);
            return function () {
                null != e && (null == t || t.removeReadyListener(e));
            };
        },
        [t]
    );
    var o = r.useCallback(
            function (n, r) {
                var i = void 0 === r ? {} : r,
                    a = i.sprite,
                    s = i.color,
                    o = null == t ? void 0 : t.getCreateData(),
                    l = null == t ? void 0 : t.getCanvas();
                if (null != l && null != o && 0 !== o.sprites.length) return null == e ? void 0 : e.createConfetti(n, l, o, a, s);
            },
            [e, t]
        ),
        l = r.useCallback(
            function (e, t, n) {
                for (var r = [], i = 0; i < t; i++) {
                    var a = o(e, n);
                    a && r.push(a);
                }
                return r;
            },
            [o]
        ),
        u = r.useCallback(
            function (n) {
                var r = null == t ? void 0 : t.getCanvas();
                null != r && (null == e || e.addConfetti(n, r));
            },
            [e, t]
        ),
        c = r.useCallback(
            function (t) {
                null == e || e.deleteConfetti(t);
            },
            [e]
        ),
        d = r.useCallback(
            function () {
                return null == e ? void 0 : e.clearConfetti();
            },
            [e]
        );
    return r.useMemo(
        function () {
            return {
                createConfetti: o,
                createMultipleConfetti: l,
                addConfetti: u,
                clearConfetti: d,
                deleteConfetti: c,
                isReady: a && null != t && null != e
            };
        },
        [u, d, e, o, l, c, a, t]
    );
}
