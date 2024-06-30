var t = t || function (e) {
    if (!('undefined' != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
        var t = e.document, n = function () {
                return e.URL || e.webkitURL || e;
            }, o = t.createElementNS('http://www.w3.org/1999/xhtml', 'a'), r = 'download' in o, s = function (e) {
                var t = new MouseEvent('click');
                e.dispatchEvent(t);
            }, a = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent), i = e.webkitRequestFileSystem, l = e.requestFileSystem || i || e.mozRequestFileSystem, d = function (t) {
                (e.setImmediate || e.setTimeout)(function () {
                    throw t;
                }, 0);
            }, c = 'application/octet-stream', E = 0, u = function (e) {
                setTimeout(function () {
                    'string' == typeof e ? n().revokeObjectURL(e) : e.remove();
                }, 40000);
            }, _ = function (e, t, n) {
                for (var o = (t = [].concat(t)).length; o--;) {
                    var r = e['on' + t[o]];
                    if ('function' == typeof r)
                        try {
                            r.call(e, n || e);
                        } catch (e) {
                            d(e);
                        }
                }
            }, h = function (e) {
                return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([
                    'ï\xBB\xBF',
                    e
                ], { type: e.type }) : e;
            }, p = function (t, d, p) {
                !p && (t = h(t));
                var R, f, I = this, N = t.type, M = !1, A = function () {
                        _(I, 'writestart progress write writeend'.split(' '));
                    }, S = function () {
                        if (f && a && 'undefined' != typeof FileReader) {
                            var o = new FileReader();
                            o.onloadend = function () {
                                var e = o.result;
                                f.location.href = 'data:attachment/file' + e.slice(e.search(/[,;]/)), I.readyState = I.DONE, A();
                            }, o.readAsDataURL(t), I.readyState = I.INIT;
                            return;
                        }
                        (M || !R) && (R = n().createObjectURL(t)), f ? f.location.href = R : void 0 === e.open(R, '_blank') && a && (e.location.href = R), I.readyState = I.DONE, A(), u(R);
                    }, O = function (e) {
                        return function () {
                            if (I.readyState !== I.DONE)
                                return e.apply(this, arguments);
                        };
                    }, C = {
                        create: !0,
                        exclusive: !1
                    };
                if (I.readyState = I.INIT, !d && (d = 'download'), r) {
                    R = n().createObjectURL(t), setTimeout(function () {
                        o.href = R, o.download = d, s(o), A(), u(R), I.readyState = I.DONE;
                    });
                    return;
                }
                if (e.chrome && N && N !== c && (t = (t.slice || t.webkitSlice).call(t, 0, t.size, c), M = !0), i && 'download' !== d && (d += '.download'), (N === c || i) && (f = e), !l) {
                    S();
                    return;
                }
                E += t.size, l(e.TEMPORARY, E, O(function (e) {
                    e.root.getDirectory('saved', C, O(function (e) {
                        var n = function () {
                            e.getFile(d, C, O(function (e) {
                                e.createWriter(O(function (n) {
                                    n.onwriteend = function (t) {
                                        f.location.href = e.toURL(), I.readyState = I.DONE, _(I, 'writeend', t), u(e);
                                    }, n.onerror = function () {
                                        var e = n.error;
                                        e.code !== e.ABORT_ERR && S();
                                    }, 'writestart progress write abort'.split(' ').forEach(function (e) {
                                        n['on' + e] = I['on' + e];
                                    }), n.write(t), I.abort = function () {
                                        n.abort(), I.readyState = I.DONE;
                                    }, I.readyState = I.WRITING;
                                }), S);
                            }), S);
                        };
                        e.getFile(d, { create: !1 }, O(function (e) {
                            e.remove(), n();
                        }), O(function (e) {
                            e.code === e.NOT_FOUND_ERR ? n() : S();
                        }));
                    }), S);
                }), S);
            }, R = p.prototype;
        return 'undefined' != typeof navigator && navigator.msSaveOrOpenBlob ? function (e, t, n) {
            return !n && (e = h(e)), navigator.msSaveOrOpenBlob(e, t || 'download');
        } : (R.abort = function () {
            this.readyState = this.DONE, _(this, 'abort');
        }, R.readyState = R.INIT = 0, R.WRITING = 1, R.DONE = 2, R.error = R.onwritestart = R.onprogress = R.onwrite = R.onabort = R.onerror = R.onwriteend = null, function (e, t, n) {
            return new p(e, t, n);
        });
    }
}('undefined' != typeof self && self || 'undefined' != typeof window && window || this.content);
e.exports ? e.exports.saveAs = t : 'undefined' != typeof define && null !== define && null !== define.amd && define([], function () {
    return t;
});
