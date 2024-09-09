n.d(t, {
    R: function () {
        return s;
    }
});
var r = n(470079),
    i = n(84562);
function a(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
var s = function () {
    var e,
        t,
        n =
            ((t = 2),
            (function (e) {
                if (Array.isArray(e)) return e;
            })((e = (0, r.useState)(!1))) ||
                (function (e, t) {
                    if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
                        var n = [],
                            r = !0,
                            i = !1,
                            a = void 0;
                        try {
                            for (var s, o = e[Symbol.iterator](); !(r = (s = o.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            (i = !0), (a = e);
                        } finally {
                            try {
                                !r && null != o.return && o.return();
                            } finally {
                                if (i) throw a;
                            }
                        }
                        return n;
                    }
                })(e, 2) ||
                (function (e, t) {
                    if (e) {
                        if ('string' == typeof e) return a(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
                        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t);
                    }
                })(e, t) ||
                (function () {
                    throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                })()),
        s = n[0],
        o = n[1],
        l = (0, r.useContext)(i.L);
    return (
        (0, r.useEffect)(
            function () {
                var e,
                    t = null == l ? void 0 : null === (e = l.dragDropManager) || void 0 === e ? void 0 : e.getBackend(),
                    n = {
                        backendChanged: function (e) {
                            o(e.previewEnabled());
                        }
                    };
                return (
                    o(t.previewEnabled()),
                    t.previewsList().register(n),
                    function () {
                        t.previewsList().unregister(n);
                    }
                );
            },
            [l, l.dragDropManager]
        ),
        s
    );
};
