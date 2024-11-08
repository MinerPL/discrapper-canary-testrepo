var r = (function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    })(),
    i = n(328794);
n(420633);
var a = n(601102),
    s = n(887442),
    o = n(512722),
    l = n(578008);
function u(e, t) {
    return null == e ? t : e;
}
var c = (function (e) {
    function t(e) {
        !(function (e, t) {
            if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
        })(this, t);
        var n,
            r = (function (e, t) {
                if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (r._overshootClamping = u(e.overshootClamping, !1)), (r._restDisplacementThreshold = u(e.restDisplacementThreshold, 0.001)), (r._restSpeedThreshold = u(e.restSpeedThreshold, 0.001)), (r._initialVelocity = e.velocity), (r._lastVelocity = u(e.velocity, 0)), (r._toValue = e.toValue), (r.__isInteraction = void 0 === e.isInteraction || e.isInteraction), void 0 !== e.bounciness || void 0 !== e.speed ? (o(void 0 === e.tension && void 0 === e.friction, 'You can only define bounciness/speed or tension/friction but not both'), (n = l.fromBouncinessAndSpeed(u(e.bounciness, 8), u(e.speed, 12)))) : (n = l.fromOrigamiTensionAndFriction(u(e.tension, 40), u(e.friction, 7))), (r._tension = n.tension), (r._friction = n.friction), r;
    }
    return (
        !(function (e, t) {
            if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function, not ' + typeof t);
            (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
        })(t, e),
        r(t, [
            {
                key: 'start',
                value: function (e, n, r, i) {
                    if (((this.__active = !0), (this._startPosition = e), (this._lastPosition = this._startPosition), (this._onUpdate = n), (this.__onEnd = r), (this._lastTime = Date.now()), i instanceof t)) {
                        var a = i.getInternalState();
                        (this._lastPosition = a.lastPosition), (this._lastVelocity = a.lastVelocity), (this._lastTime = a.lastTime);
                    }
                    void 0 !== this._initialVelocity && null !== this._initialVelocity && (this._lastVelocity = this._initialVelocity), this.onUpdate();
                }
            },
            {
                key: 'getInternalState',
                value: function () {
                    return {
                        lastPosition: this._lastPosition,
                        lastVelocity: this._lastVelocity,
                        lastTime: this._lastTime
                    };
                }
            },
            {
                key: 'onUpdate',
                value: function () {
                    var e = this._lastPosition,
                        t = this._lastVelocity,
                        n = this._lastPosition,
                        r = this._lastVelocity,
                        i = Date.now();
                    i > this._lastTime + 64 && (i = this._lastTime + 64);
                    for (var s = Math.floor((i - this._lastTime) / 1), o = 0; o < s; ++o) {
                        var l = 0.001,
                            u = t,
                            c = this._tension * (this._toValue - n) - this._friction * r,
                            n = e + (u * l) / 2,
                            r = t + (c * l) / 2,
                            d = r,
                            f = this._tension * (this._toValue - n) - this._friction * r;
                        n = e + (d * l) / 2;
                        var _ = (r = t + (f * l) / 2),
                            h = this._tension * (this._toValue - n) - this._friction * r;
                        n = e + (_ * l) / 2;
                        var p = (r = t + (h * l) / 2),
                            m = this._tension * (this._toValue - n) - this._friction * r;
                        (n = e + (_ * l) / 2), (r = t + (h * l) / 2);
                        var g = (c + 2 * (f + h) + m) / 6;
                        (e += ((u + 2 * (d + _) + p) / 6) * l), (t += g * l);
                    }
                    if (((this._lastTime = i), (this._lastPosition = e), (this._lastVelocity = t), this._onUpdate(e), !!this.__active)) {
                        var E = !1;
                        this._overshootClamping && 0 !== this._tension && (E = this._startPosition < this._toValue ? e > this._toValue : e < this._toValue);
                        var v = Math.abs(t) <= this._restSpeedThreshold,
                            I = !0;
                        if ((0 !== this._tension && (I = Math.abs(this._toValue - e) <= this._restDisplacementThreshold), E || (v && I))) {
                            0 !== this._tension && this._onUpdate(this._toValue), this.__debouncedOnEnd({ finished: !0 });
                            return;
                        }
                        this._animationFrame = a.current(this.onUpdate.bind(this));
                    }
                }
            },
            {
                key: 'stop',
                value: function () {
                    (this.__active = !1), s.current(this._animationFrame), this.__debouncedOnEnd({ finished: !1 });
                }
            }
        ]),
        t
    );
})(i);
e.exports = c;
