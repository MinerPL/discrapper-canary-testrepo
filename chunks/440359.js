n.d(t, {
    e: function () {
        return s;
    }
});
var r = n(708644);
function i(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
}
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var s = (function () {
    var e, t, n;
    function s(e) {
        !(function (e, t) {
            if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
        })(this, s),
            a(this, 'entered', []),
            a(this, 'isNodeInDocument', void 0),
            (this.isNodeInDocument = e);
    }
    return (
        (e = s),
        (t = [
            {
                key: 'enter',
                value: function (e) {
                    var t = this,
                        n = this.entered.length;
                    return (
                        (this.entered = (0, r.G0)(
                            this.entered.filter(function (n) {
                                return t.isNodeInDocument(n) && (!n.contains || n.contains(e));
                            }),
                            [e]
                        )),
                        0 === n && this.entered.length > 0
                    );
                }
            },
            {
                key: 'leave',
                value: function (e) {
                    var t = this.entered.length;
                    return (this.entered = (0, r.zu)(this.entered.filter(this.isNodeInDocument), e)), t > 0 && 0 === this.entered.length;
                }
            },
            {
                key: 'reset',
                value: function () {
                    this.entered = [];
                }
            }
        ]),
        i(e.prototype, t),
        s
    );
})();
