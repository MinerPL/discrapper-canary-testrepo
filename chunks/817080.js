var t =
    t ||
    (function (e) {
        if (!('undefined' != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
            var t = e.document,
                n = function () {
                    return e.URL || e.webkitURL || e;
                },
                o = t.createElementNS('http://www.w3.org/1999/xhtml', 'a'),
                r = 'download' in o,
                s = function (e) {
                    var t = new MouseEvent('click');
                    e.dispatchEvent(t);
                },
                a = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
                i = e.webkitRequestFileSystem,
                l = e.requestFileSystem || i || e.mozRequestFileSystem,
                d = function (t) {
                    (e.setImmediate || e.setTimeout)(function () {
                        throw t;
                    }, 0);
                },
                c = 'application/octet-stream',
                E = 0,
                u = function (e) {
                    setTimeout(function () {
                        'string' == typeof e ? n().revokeObjectURL(e) : e.remove();
                    }, 40000);
                },
                _ = function (e, t, n) {
                    for (var o = (t = [].concat(t)).length; o--; ) {
                        var r = e['on' + t[o]];
                        if ('function' == typeof r)
                            try {
                                r.call(e, n || e);
                            } catch (e) {
                                d(e);
                            }
                    }
                },
                h = function (e) {
                    return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(['ï\xBB\xBF', e], { type: e.type }) : e;
                },
                p = function (t, d, p) {
                    !p && (t = h(t));
                    var f,
                        R,
                        I = this,
                        N = t.type,
                        M = !1,
                        A = function () {
                            _(I, 'writestart progress write writeend'.split(' '));
                        },
                        S = function () {
                            if (R && a && 'undefined' != typeof FileReader) {
                                var o = new FileReader();
                                (o.onloadend = function () {
                                    var e = o.result;
                                    (R.location.href = 'data:attachment/file' + e.slice(e.search(/[,;]/))), (I.readyState = I.DONE), A();
                                }),
                                    o.readAsDataURL(t),
                                    (I.readyState = I.INIT);
                                return;
                            }
                            (M || !f) && (f = n().createObjectURL(t)), R ? (R.location.href = f) : void 0 === e.open(f, '_blank') && a && (e.location.href = f), (I.readyState = I.DONE), A(), u(f);
                        },
                        O = function (e) {
                            return function () {
                                if (I.readyState !== I.DONE) return e.apply(this, arguments);
                            };
                        },
                        C = {
                            create: !0,
                            exclusive: !1
                        };
                    if (((I.readyState = I.INIT), !d && (d = 'download'), r)) {
                        (f = n().createObjectURL(t)),
                            setTimeout(function () {
                                (o.href = f), (o.download = d), s(o), A(), u(f), (I.readyState = I.DONE);
                            });
                        return;
                    }
                    if ((e.chrome && N && N !== c && ((t = (t.slice || t.webkitSlice).call(t, 0, t.size, c)), (M = !0)), i && 'download' !== d && (d += '.download'), (N === c || i) && (R = e), !l)) {
                        S();
                        return;
                    }
                    (E += t.size),
                        l(
                            e.TEMPORARY,
                            E,
                            O(function (e) {
                                e.root.getDirectory(
                                    'saved',
                                    C,
                                    O(function (e) {
                                        var n = function () {
                                            e.getFile(
                                                d,
                                                C,
                                                O(function (e) {
                                                    e.createWriter(
                                                        O(function (n) {
                                                            (n.onwriteend = function (t) {
                                                                (R.location.href = e.toURL()), (I.readyState = I.DONE), _(I, 'writeend', t), u(e);
                                                            }),
                                                                (n.onerror = function () {
                                                                    var e = n.error;
                                                                    e.code !== e.ABORT_ERR && S();
                                                                }),
                                                                'writestart progress write abort'.split(' ').forEach(function (e) {
                                                                    n['on' + e] = I['on' + e];
                                                                }),
                                                                n.write(t),
                                                                (I.abort = function () {
                                                                    n.abort(), (I.readyState = I.DONE);
                                                                }),
                                                                (I.readyState = I.WRITING);
                                                        }),
                                                        S
                                                    );
                                                }),
                                                S
                                            );
                                        };
                                        e.getFile(
                                            d,
                                            { create: !1 },
                                            O(function (e) {
                                                e.remove(), n();
                                            }),
                                            O(function (e) {
                                                e.code === e.NOT_FOUND_ERR ? n() : S();
                                            })
                                        );
                                    }),
                                    S
                                );
                            }),
                            S
                        );
                },
                f = p.prototype;
            return 'undefined' != typeof navigator && navigator.msSaveOrOpenBlob
                ? function (e, t, n) {
                      return !n && (e = h(e)), navigator.msSaveOrOpenBlob(e, t || 'download');
                  }
                : ((f.abort = function () {
                      (this.readyState = this.DONE), _(this, 'abort');
                  }),
                  (f.readyState = f.INIT = 0),
                  (f.WRITING = 1),
                  (f.DONE = 2),
                  (f.error = f.onwritestart = f.onprogress = f.onwrite = f.onabort = f.onerror = f.onwriteend = null),
                  function (e, t, n) {
                      return new p(e, t, n);
                  });
        }
    })(('undefined' != typeof self && self) || ('undefined' != typeof window && window) || this.content);
e.exports
    ? (e.exports.saveAs = t)
    : 'undefined' != typeof define &&
      null !== define &&
      null !== define.amd &&
      define([], function () {
          return t;
      });
