r.d(e, {
    $2: function () {
        return o;
    },
    WD: function () {
        return i;
    },
    cW: function () {
        return E;
    }
});
var n, _, a = r(46834);
function i(t) {
    return new E(e => {
        e(t);
    });
}
function o(t) {
    return new E((e, r) => {
        r(t);
    });
}
(n = _ || (_ = {}))[n.PENDING = 0] = 'PENDING', n[n.RESOLVED = 1] = 'RESOLVED', n[n.REJECTED = 2] = 'REJECTED';
class E {
    __init() {
        this._state = _.PENDING;
    }
    __init2() {
        this._handlers = [];
    }
    constructor(t) {
        E.prototype.__init.call(this), E.prototype.__init2.call(this), E.prototype.__init3.call(this), E.prototype.__init4.call(this), E.prototype.__init5.call(this), E.prototype.__init6.call(this);
        try {
            t(this._resolve, this._reject);
        } catch (t) {
            this._reject(t);
        }
    }
    then(t, e) {
        return new E((r, n) => {
            this._handlers.push([
                !1,
                e => {
                    if (t)
                        try {
                            r(t(e));
                        } catch (t) {
                            n(t);
                        }
                    else
                        r(e);
                },
                t => {
                    if (e)
                        try {
                            r(e(t));
                        } catch (t) {
                            n(t);
                        }
                    else
                        n(t);
                }
            ]), this._executeHandlers();
        });
    }
    catch(t) {
        return this.then(t => t, t);
    }
    finally(t) {
        return new E((e, r) => {
            let n, _;
            return this.then(e => {
                _ = !1, n = e, t && t();
            }, e => {
                _ = !0, n = e, t && t();
            }).then(() => {
                if (_) {
                    r(n);
                    return;
                }
                e(n);
            });
        });
    }
    __init3() {
        this._resolve = t => {
            this._setResult(_.RESOLVED, t);
        };
    }
    __init4() {
        this._reject = t => {
            this._setResult(_.REJECTED, t);
        };
    }
    __init5() {
        this._setResult = (t, e) => {
            if (this._state === _.PENDING) {
                if ((0, a.J8)(e)) {
                    e.then(this._resolve, this._reject);
                    return;
                }
                this._state = t, this._value = e, this._executeHandlers();
            }
        };
    }
    __init6() {
        this._executeHandlers = () => {
            if (this._state === _.PENDING)
                return;
            let t = this._handlers.slice();
            this._handlers = [], t.forEach(t => {
                if (!t[0])
                    this._state === _.RESOLVED && t[1](this._value), this._state === _.REJECTED && t[2](this._value), t[0] = !0;
            });
        };
    }
}
