var r,
    i,
    a = n(444675);
function s(e) {
    var t = this;
    (this.next = null),
        (this.entry = null),
        (this.finish = function () {
            (function (e, t, n) {
                var r = e.entry;
                for (e.entry = null; r; ) {
                    var i = r.callback;
                    t.pendingcb--, i(n), (r = r.next);
                }
                t.corkedRequestsFree.next = e;
            })(t, e);
        });
}
(e.exports = O), (O.WritableState = v);
var o = { deprecate: n(220342) },
    l = n(138772),
    u = n(413135).Buffer,
    c = (void 0 !== n.g ? n.g : 'undefined' != typeof window ? window : 'undefined' != typeof self ? self : {}).Uint8Array || function () {},
    d = n(887866),
    _ = n(97703).getHighWaterMark,
    E = n(531478).codes,
    f = E.ERR_INVALID_ARG_TYPE,
    h = E.ERR_METHOD_NOT_IMPLEMENTED,
    p = E.ERR_MULTIPLE_CALLBACK,
    m = E.ERR_STREAM_CANNOT_PIPE,
    I = E.ERR_STREAM_DESTROYED,
    T = E.ERR_STREAM_NULL_VALUES,
    g = E.ERR_STREAM_WRITE_AFTER_END,
    S = E.ERR_UNKNOWN_ENCODING,
    A = d.errorOrDestroy;
function N() {}
function v(e, t, i) {
    (r = r || n(827664)), (e = e || {}), 'boolean' != typeof i && (i = t instanceof r), (this.objectMode = !!e.objectMode), i && (this.objectMode = this.objectMode || !!e.writableObjectMode), (this.highWaterMark = _(this, e, 'writableHighWaterMark', i)), (this.finalCalled = !1), (this.needDrain = !1), (this.ending = !1), (this.ended = !1), (this.finished = !1), (this.destroyed = !1);
    var o = !1 === e.decodeStrings;
    (this.decodeStrings = !o),
        (this.defaultEncoding = e.defaultEncoding || 'utf8'),
        (this.length = 0),
        (this.writing = !1),
        (this.corked = 0),
        (this.sync = !0),
        (this.bufferProcessing = !1),
        (this.onwrite = function (e) {
            (function (e, t) {
                var n,
                    r,
                    i,
                    s,
                    o,
                    l,
                    u = e._writableState,
                    c = u.sync,
                    d = u.writecb;
                if ('function' != typeof d) throw new p();
                if ((((n = u).writing = !1), (n.writecb = null), (n.length -= n.writelen), (n.writelen = 0), t)) {
                    (r = e), (i = u), (s = c), (o = t), (l = d), --i.pendingcb, s ? (a.nextTick(l, o), a.nextTick(b, r, i), (r._writableState.errorEmitted = !0), A(r, o)) : (l(o), (r._writableState.errorEmitted = !0), A(r, o), b(r, i));
                } else {
                    var _ = D(u) || e.destroyed;
                    !_ && !u.corked && !u.bufferProcessing && u.bufferedRequest && y(e, u), c ? a.nextTick(C, e, u, _, d) : C(e, u, _, d);
                }
            })(t, e);
        }),
        (this.writecb = null),
        (this.writelen = 0),
        (this.bufferedRequest = null),
        (this.lastBufferedRequest = null),
        (this.pendingcb = 0),
        (this.prefinished = !1),
        (this.errorEmitted = !1),
        (this.emitClose = !1 !== e.emitClose),
        (this.autoDestroy = !!e.autoDestroy),
        (this.bufferedRequestCount = 0),
        (this.corkedRequestsFree = new s(this));
}
function O(e) {
    var t = this instanceof (r = r || n(827664));
    if (!t && !i.call(O, this)) return new O(e);
    (this._writableState = new v(e, this, t)), (this.writable = !0), e && ('function' == typeof e.write && (this._write = e.write), 'function' == typeof e.writev && (this._writev = e.writev), 'function' == typeof e.destroy && (this._destroy = e.destroy), 'function' == typeof e.final && (this._final = e.final)), l.call(this);
}
n(689118)(O, l),
    (v.prototype.getBuffer = function () {
        for (var e = this.bufferedRequest, t = []; e; ) t.push(e), (e = e.next);
        return t;
    }),
    !(function () {
        try {
            Object.defineProperty(v.prototype, 'buffer', {
                get: o.deprecate(
                    function () {
                        return this.getBuffer();
                    },
                    '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.',
                    'DEP0003'
                )
            });
        } catch (e) {}
    })(),
    'function' == typeof Symbol && Symbol.hasInstance && 'function' == typeof Function.prototype[Symbol.hasInstance]
        ? ((i = Function.prototype[Symbol.hasInstance]),
          Object.defineProperty(O, Symbol.hasInstance, {
              value: function (e) {
                  return !!i.call(this, e) || (this === O && e && e._writableState instanceof v);
              }
          }))
        : (i = function (e) {
              return e instanceof this;
          }),
    (O.prototype.pipe = function () {
        A(this, new m());
    });
(O.prototype.write = function (e, t, n) {
    var r,
        i,
        s,
        o,
        l,
        d,
        _,
        E,
        h,
        p,
        m = this._writableState,
        I = !1;
    var S = !m.objectMode && ((r = e), u.isBuffer(r) || r instanceof c);
    if (S && !u.isBuffer(e)) {
        (i = e), (e = u.from(i));
    }
    if (('function' == typeof t && ((n = t), (t = null)), S ? (t = 'buffer') : !t && (t = m.defaultEncoding), 'function' != typeof n && (n = N), m.ending)) {
        (s = this), (o = n), A(s, (l = new g())), a.nextTick(o, l);
    } else {
        if (S || ((d = this), (_ = m), (E = e), (h = n), null === E ? (p = new T()) : 'string' != typeof E && !_.objectMode && (p = new f('chunk', ['string', 'Buffer'], E)), !p || (A(d, p), a.nextTick(h, p), 0)))
            m.pendingcb++,
                (I = (function (e, t, n, r, i, a) {
                    if (!n) {
                        var s,
                            o,
                            l,
                            c = ((s = t), (o = r), (l = i), !s.objectMode && !1 !== s.decodeStrings && 'string' == typeof o && (o = u.from(o, l)), o);
                        r !== c && ((n = !0), (i = 'buffer'), (r = c));
                    }
                    var d = t.objectMode ? 1 : r.length;
                    t.length += d;
                    var _ = t.length < t.highWaterMark;
                    if ((!_ && (t.needDrain = !0), t.writing || t.corked)) {
                        var E = t.lastBufferedRequest;
                        (t.lastBufferedRequest = {
                            chunk: r,
                            encoding: i,
                            isBuf: n,
                            callback: a,
                            next: null
                        }),
                            E ? (E.next = t.lastBufferedRequest) : (t.bufferedRequest = t.lastBufferedRequest),
                            (t.bufferedRequestCount += 1);
                    } else R(e, t, !1, d, r, i, a);
                    return _;
                })(this, m, S, e, t, n));
    }
    return I;
}),
    (O.prototype.cork = function () {
        this._writableState.corked++;
    }),
    (O.prototype.uncork = function () {
        var e = this._writableState;
        e.corked && (e.corked--, !e.writing && !e.corked && !e.bufferProcessing && e.bufferedRequest && y(this, e));
    }),
    (O.prototype.setDefaultEncoding = function (e) {
        if (('string' == typeof e && (e = e.toLowerCase()), !(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((e + '').toLowerCase()) > -1))) throw new S(e);
        return (this._writableState.defaultEncoding = e), this;
    }),
    Object.defineProperty(O.prototype, 'writableBuffer', {
        enumerable: !1,
        get: function () {
            return this._writableState && this._writableState.getBuffer();
        }
    });
Object.defineProperty(O.prototype, 'writableHighWaterMark', {
    enumerable: !1,
    get: function () {
        return this._writableState.highWaterMark;
    }
});
function R(e, t, n, r, i, a, s) {
    (t.writelen = r), (t.writecb = s), (t.writing = !0), (t.sync = !0), t.destroyed ? t.onwrite(new I('write')) : n ? e._writev(i, t.onwrite) : e._write(i, a, t.onwrite), (t.sync = !1);
}
function C(e, t, n, r) {
    !n &&
        (function (e, t) {
            0 === t.length && t.needDrain && ((t.needDrain = !1), e.emit('drain'));
        })(e, t),
        t.pendingcb--,
        r(),
        b(e, t);
}
function y(e, t) {
    t.bufferProcessing = !0;
    var n = t.bufferedRequest;
    if (e._writev && n && n.next) {
        var r = Array(t.bufferedRequestCount),
            i = t.corkedRequestsFree;
        i.entry = n;
        for (var a = 0, o = !0; n; ) (r[a] = n), !n.isBuf && (o = !1), (n = n.next), (a += 1);
        (r.allBuffers = o), R(e, t, !0, t.length, r, '', i.finish), t.pendingcb++, (t.lastBufferedRequest = null), i.next ? ((t.corkedRequestsFree = i.next), (i.next = null)) : (t.corkedRequestsFree = new s(t)), (t.bufferedRequestCount = 0);
    } else {
        for (; n; ) {
            var l = n.chunk,
                u = n.encoding,
                c = n.callback,
                d = t.objectMode ? 1 : l.length;
            if ((R(e, t, !1, d, l, u, c), (n = n.next), t.bufferedRequestCount--, t.writing)) break;
        }
        null === n && (t.lastBufferedRequest = null);
    }
    (t.bufferedRequest = n), (t.bufferProcessing = !1);
}
function D(e) {
    return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing;
}
function L(e, t) {
    e._final(function (n) {
        t.pendingcb--, n && A(e, n), (t.prefinished = !0), e.emit('prefinish'), b(e, t);
    });
}
(O.prototype._write = function (e, t, n) {
    n(new h('_write()'));
}),
    (O.prototype._writev = null),
    (O.prototype.end = function (e, t, n) {
        var r = this._writableState;
        return (
            'function' == typeof e ? ((n = e), (e = null), (t = null)) : 'function' == typeof t && ((n = t), (t = null)),
            null != e && this.write(e, t),
            r.corked && ((r.corked = 1), this.uncork()),
            !r.ending &&
                (function (e, t, n) {
                    (t.ending = !0), b(e, t), n && (t.finished ? a.nextTick(n) : e.once('finish', n)), (t.ended = !0), (e.writable = !1);
                })(this, r, n),
            this
        );
    }),
    Object.defineProperty(O.prototype, 'writableLength', {
        enumerable: !1,
        get: function () {
            return this._writableState.length;
        }
    });
function b(e, t) {
    var n,
        r,
        i = D(t);
    if (i) {
        if (((n = e), (r = t).prefinished || r.finalCalled || ('function' != typeof n._final || r.destroyed ? ((r.prefinished = !0), n.emit('prefinish')) : (r.pendingcb++, (r.finalCalled = !0), a.nextTick(L, n, r))), 0 === t.pendingcb && ((t.finished = !0), e.emit('finish'), t.autoDestroy))) {
            var s = e._readableState;
            (!s || (s.autoDestroy && s.endEmitted)) && e.destroy();
        }
    }
    return i;
}
Object.defineProperty(O.prototype, 'destroyed', {
    enumerable: !1,
    get: function () {
        return void 0 !== this._writableState && this._writableState.destroyed;
    },
    set: function (e) {
        if (!!this._writableState) this._writableState.destroyed = e;
    }
}),
    (O.prototype.destroy = d.destroy),
    (O.prototype._undestroy = d.undestroy),
    (O.prototype._destroy = function (e, t) {
        t(e);
    });
