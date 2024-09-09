r.d(t, {
    $2: function () {
        return _;
    },
    WD: function () {
        return i;
    },
    cW: function () {
        return E;
    }
});
var n,
    a,
    o = r(573736);
function i(e) {
    return new E((t) => {
        t(e);
    });
}
function _(e) {
    return new E((t, r) => {
        r(e);
    });
}
((n = a || (a = {}))[(n.PENDING = 0)] = 'PENDING'), (n[(n.RESOLVED = 1)] = 'RESOLVED'), (n[(n.REJECTED = 2)] = 'REJECTED');
class E {
    constructor(e) {
        E.prototype.__init.call(this), E.prototype.__init2.call(this), E.prototype.__init3.call(this), E.prototype.__init4.call(this), (this._state = a.PENDING), (this._handlers = []);
        try {
            e(this._resolve, this._reject);
        } catch (e) {
            this._reject(e);
        }
    }
    then(e, t) {
        return new E((r, n) => {
            this._handlers.push([
                !1,
                (t) => {
                    if (e)
                        try {
                            r(e(t));
                        } catch (e) {
                            n(e);
                        }
                    else r(t);
                },
                (e) => {
                    if (t)
                        try {
                            r(t(e));
                        } catch (e) {
                            n(e);
                        }
                    else n(e);
                }
            ]),
                this._executeHandlers();
        });
    }
    catch(e) {
        return this.then((e) => e, e);
    }
    finally(e) {
        return new E((t, r) => {
            let n, a;
            return this.then(
                (t) => {
                    (a = !1), (n = t), e && e();
                },
                (t) => {
                    (a = !0), (n = t), e && e();
                }
            ).then(() => {
                if (a) {
                    r(n);
                    return;
                }
                t(n);
            });
        });
    }
    __init() {
        this._resolve = (e) => {
            this._setResult(a.RESOLVED, e);
        };
    }
    __init2() {
        this._reject = (e) => {
            this._setResult(a.REJECTED, e);
        };
    }
    __init3() {
        this._setResult = (e, t) => {
            if (this._state === a.PENDING) {
                if ((0, o.J8)(t)) {
                    t.then(this._resolve, this._reject);
                    return;
                }
                (this._state = e), (this._value = t), this._executeHandlers();
            }
        };
    }
    __init4() {
        this._executeHandlers = () => {
            if (this._state === a.PENDING) return;
            let e = this._handlers.slice();
            (this._handlers = []),
                e.forEach((e) => {
                    if (!e[0]) this._state === a.RESOLVED && e[1](this._value), this._state === a.REJECTED && e[2](this._value), (e[0] = !0);
                });
        };
    }
}
