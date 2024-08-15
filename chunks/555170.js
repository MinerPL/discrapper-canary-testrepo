var r, i, a, s, o, l = n(444675);
e.exports = O, O.ReadableState = v, n(836560).EventEmitter;
var u = function(e, t) {
return e.listeners(t).length;
  },
  c = n(138772),
  d = n(413135).Buffer,
  _ = (void 0 !== n.g ? n.g : 'undefined' != typeof window ? window : 'undefined' != typeof self ? self : {}).Uint8Array || function() {},
  E = n(260907);
i = E && E.debuglog ? E.debuglog('stream') : function() {};
var f = n(443551),
  h = n(887866),
  p = n(97703).getHighWaterMark,
  m = n(531478).codes,
  I = m.ERR_INVALID_ARG_TYPE,
  T = m.ERR_STREAM_PUSH_AFTER_EOF,
  g = m.ERR_METHOD_NOT_IMPLEMENTED,
  S = m.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
n(689118)(O, c);
var A = h.errorOrDestroy,
  N = [
'error',
'close',
'destroy',
'pause',
'resume'
  ];

function v(e, t, i) {
  r = r || n(827664), e = e || {}, 'boolean' != typeof i && (i = t instanceof r), this.objectMode = !!e.objectMode, i && (this.objectMode = this.objectMode || !!e.readableObjectMode), this.highWaterMark = p(this, e, 'readableHighWaterMark', i), this.buffer = new f(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || 'utf8', this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (!a && (a = n(2682).StringDecoder), this.decoder = new a(e.encoding), this.encoding = e.encoding);
}

function O(e) {
  if (r = r || n(827664), !(this instanceof O))
return new O(e);
  var t = this instanceof r;
  this._readableState = new v(e, this, t), this.readable = !0, e && ('function' == typeof e.read && (this._read = e.read), 'function' == typeof e.destroy && (this._destroy = e.destroy)), c.call(this);
}

function R(e, t, n, r, a) {
  i('readableAddChunk', t);
  var s, o, l = e._readableState;
  if (null === t)
l.reading = !1,
function(e, t) {
  if (i('onEofChunk'), !t.ended) {
    if (t.decoder) {
      var n = t.decoder.end();
      n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length);
    }
    t.ended = !0, t.sync ? D(e) : (t.needReadable = !1, !t.emittedReadable && (t.emittedReadable = !0, L(e)));
  }
}(e, l);
  else if (!a && (o = function(e, t) {
  var n, r;
  if (r = t, !d.isBuffer(r) && !(r instanceof _) && 'string' != typeof t && void 0 !== t && !e.objectMode)
    n = new I('chunk', [
      'string',
      'Buffer',
      'Uint8Array'
    ], t);
  return n;
}(l, t)), o)
A(e, o);
  else if (l.objectMode || t && t.length > 0) {
if ('string' != typeof t && !l.objectMode && Object.getPrototypeOf(t) !== d.prototype) {
  ;
  s = t, t = d.from(s);
}
if (r)
  l.endEmitted ? A(e, new S()) : C(e, l, t, !0);
else if (l.ended)
  A(e, new T());
else {
  if (l.destroyed)
    return !1;
  l.reading = !1, l.decoder && !n ? (t = l.decoder.write(t), l.objectMode || 0 !== t.length ? C(e, l, t, !1) : b(e, l)) : C(e, l, t, !1);
}
  } else
!r && (l.reading = !1, b(e, l));
  return !l.ended && (l.length < l.highWaterMark || 0 === l.length);
}

function C(e, t, n, r) {
  t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0, e.emit('data', n)) : (t.length += t.objectMode ? 1 : n.length, r ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && D(e)), b(e, t);
}
Object.defineProperty(O.prototype, 'destroyed', {
  enumerable: !1,
  get: function() {
return void 0 !== this._readableState && this._readableState.destroyed;
  },
  set: function(e) {
if (!!this._readableState)
  this._readableState.destroyed = e;
  }
}), O.prototype.destroy = h.destroy, O.prototype._undestroy = h.undestroy, O.prototype._destroy = function(e, t) {
  t(e);
}, O.prototype.push = function(e, t) {
  var n, r = this._readableState;
  return r.objectMode ? n = !0 : 'string' == typeof e && ((t = t || r.defaultEncoding) !== r.encoding && (e = d.from(e, t), t = ''), n = !0), R(this, e, t, !1, n);
}, O.prototype.unshift = function(e) {
  return R(this, e, null, !0, !1);
};
O.prototype.isPaused = function() {
  return !1 === this._readableState.flowing;
}, O.prototype.setEncoding = function(e) {
  !a && (a = n(2682).StringDecoder);
  var t = new a(e);
  this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
  for (var r = this._readableState.buffer.head, i = ''; null !== r;)
i += t.write(r.data), r = r.next;
  return this._readableState.buffer.clear(), '' !== i && this._readableState.buffer.push(i), this._readableState.length = i.length, this;
};

function y(e, t) {
  if (e <= 0 || 0 === t.length && t.ended)
return 0;
  if (t.objectMode)
return 1;
  if (e != e)
return t.flowing && t.length ? t.buffer.head.data.length : t.length;
  if (e > t.highWaterMark) {
var n;
t.highWaterMark = ((n = e) >= 1073741824 ? n = 1073741824 : (n--, n |= n >>> 1, n |= n >>> 2, n |= n >>> 4, n |= n >>> 8, n |= n >>> 16, n++), n);
  }
  return e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0);
}
O.prototype.read = function(e) {
  i('read', e), e = parseInt(e, 10);
  var t, n = this._readableState,
r = e;
  if (0 !== e && (n.emittedReadable = !1), 0 === e && n.needReadable && ((0 !== n.highWaterMark ? n.length >= n.highWaterMark : n.length > 0) || n.ended))
return i('read: emitReadable', n.length, n.ended), 0 === n.length && n.ended ? k(this) : D(this), null;
  if (0 === (e = y(e, n)) && n.ended)
return 0 === n.length && k(this), null;
  var a = n.needReadable;
  return i('need readable', a), (0 === n.length || n.length - e < n.highWaterMark) && i('length less than watermark', a = !0), n.ended || n.reading ? i('reading or ended', a = !1) : a && (i('do read'), n.reading = !0, n.sync = !0, 0 === n.length && (n.needReadable = !0), this._read(n.highWaterMark), n.sync = !1, !n.reading && (e = y(r, n))), null === (t = e > 0 ? G(e, n) : null) ? (n.needReadable = n.length <= n.highWaterMark, e = 0) : (n.length -= e, n.awaitDrain = 0), 0 === n.length && (!n.ended && (n.needReadable = !0), r !== e && n.ended && k(this)), null !== t && this.emit('data', t), t;
};

function D(e) {
  var t = e._readableState;
  i('emitReadable', t.needReadable, t.emittedReadable), t.needReadable = !1, !t.emittedReadable && (i('emitReadable', t.flowing), t.emittedReadable = !0, l.nextTick(L, e));
}

function L(e) {
  var t = e._readableState;
  i('emitReadable_', t.destroyed, t.length, t.ended), !t.destroyed && (t.length || t.ended) && (e.emit('readable'), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, x(e);
}

function b(e, t) {
  !t.readingMore && (t.readingMore = !0, l.nextTick(M, e, t));
}

function M(e, t) {
  for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);) {
var n = t.length;
if (i('maybeReadMore read 0'), e.read(0), n === t.length)
  break;
  }
  t.readingMore = !1;
}
O.prototype._read = function(e) {
  A(this, new g('_read()'));
}, O.prototype.pipe = function(e, t) {
  var n = this,
r = this._readableState;
  switch (r.pipesCount) {
case 0:
  r.pipes = e;
  break;
case 1:
  r.pipes = [
    r.pipes,
    e
  ];
  break;
default:
  r.pipes.push(e);
  }
  r.pipesCount += 1, i('pipe count=%d opts=%j', r.pipesCount, t);
  var a = t && !1 === t.end || e === l.stdout || e === l.stderr ? p : o;

  function s(t, a) {
i('onunpipe'), t === n && a && !1 === a.hasUnpiped && (a.hasUnpiped = !0, function() {
  i('cleanup'), e.removeListener('close', f), e.removeListener('finish', h), e.removeListener('drain', c), e.removeListener('error', E), e.removeListener('unpipe', s), n.removeListener('end', o), n.removeListener('end', p), n.removeListener('data', _), d = !0, r.awaitDrain && (!e._writableState || e._writableState.needDrain) && c();
}());
  }

  function o() {
i('onend'), e.end();
  }
  r.endEmitted ? l.nextTick(a) : n.once('end', a), e.on('unpipe', s);
  var c = function(e) {
return function() {
  var t = e._readableState;
  i('pipeOnDrain', t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && u(e, 'data') && (t.flowing = !0, x(e));
};
  }(n);
  e.on('drain', c);
  var d = !1;

  function _(t) {
i('ondata');
var a = e.write(t);
i('dest.write', a), !1 === a && ((1 === r.pipesCount && r.pipes === e || r.pipesCount > 1 && -1 !== F(r.pipes, e)) && !d && (i('false write response, pause', r.awaitDrain), r.awaitDrain++), n.pause());
  }

  function E(t) {
i('onerror', t), p(), e.removeListener('error', E), 0 === u(e, 'error') && A(e, t);
  }

  function f() {
e.removeListener('finish', h), p();
  }

  function h() {
i('onfinish'), e.removeListener('close', f), p();
  }

  function p() {
i('unpipe'), n.unpipe(e);
  }
  return n.on('data', _), ! function(e, t, n) {
if ('function' == typeof e.prependListener)
  return e.prependListener(t, n);
e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [
  n,
  e._events[t]
] : e.on(t, n);
  }(e, 'error', E), e.once('close', f), e.once('finish', h), e.emit('pipe', n), !r.flowing && (i('pipe resume'), n.resume()), e;
};

function P(e) {
  var t = e._readableState;
  t.readableListening = e.listenerCount('readable') > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount('data') > 0 && e.resume();
}

function U(e) {
  i('readable nexttick read 0'), e.read(0);
}
O.prototype.unpipe = function(e) {
  var t = this._readableState,
n = {
  hasUnpiped: !1
};
  if (0 === t.pipesCount)
return this;
  if (1 === t.pipesCount)
return e && e !== t.pipes ? this : (!e && (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit('unpipe', this, n), this);
  if (!e) {
var r = t.pipes,
  i = t.pipesCount;
t.pipes = null, t.pipesCount = 0, t.flowing = !1;
for (var a = 0; a < i; a++)
  r[a].emit('unpipe', this, {
    hasUnpiped: !1
  });
return this;
  }
  var s = F(t.pipes, e);
  return -1 === s ? this : (t.pipes.splice(s, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit('unpipe', this, n), this);
}, O.prototype.on = function(e, t) {
  var n = c.prototype.on.call(this, e, t),
r = this._readableState;
  return 'data' === e ? (r.readableListening = this.listenerCount('readable') > 0, !1 !== r.flowing && this.resume()) : 'readable' === e && !r.endEmitted && !r.readableListening && (r.readableListening = r.needReadable = !0, r.flowing = !1, r.emittedReadable = !1, i('on readable', r.length, r.reading), r.length ? D(this) : !r.reading && l.nextTick(U, this)), n;
}, O.prototype.addListener = O.prototype.on, O.prototype.removeListener = function(e, t) {
  var n = c.prototype.removeListener.call(this, e, t);
  return 'readable' === e && l.nextTick(P, this), n;
}, O.prototype.removeAllListeners = function(e) {
  var t = c.prototype.removeAllListeners.apply(this, arguments);
  return ('readable' === e || void 0 === e) && l.nextTick(P, this), t;
}, O.prototype.resume = function() {
  var e = this._readableState;
  return !e.flowing && (i('resume'), e.flowing = !e.readableListening, function(e, t) {
!t.resumeScheduled && (t.resumeScheduled = !0, l.nextTick(w, e, t));
  }(this, e)), e.paused = !1, this;
};

function w(e, t) {
  i('resume', t.reading), !t.reading && e.read(0), t.resumeScheduled = !1, e.emit('resume'), x(e), t.flowing && !t.reading && e.read(0);
}

function x(e) {
  var t = e._readableState;
  for (i('flow', t.flowing); t.flowing && null !== e.read(););
}

function G(e, t) {
  var n;
  return 0 === t.length ? null : (t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join('') : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : n = t.buffer.consume(e, t.decoder), n);
}

function k(e) {
  var t = e._readableState;
  i('endReadable', t.endEmitted), !t.endEmitted && (t.ended = !0, l.nextTick(B, t, e));
}

function B(e, t) {
  if (i('endReadableNT', e.endEmitted, e.length), !e.endEmitted && 0 === e.length && (e.endEmitted = !0, t.readable = !1, t.emit('end'), e.autoDestroy)) {
var n = t._writableState;
(!n || n.autoDestroy && n.finished) && t.destroy();
  }
}

function F(e, t) {
  for (var n = 0, r = e.length; n < r; n++)
if (e[n] === t)
  return n;
  return -1;
}
O.prototype.pause = function() {
  return i('call pause flowing=%j', this._readableState.flowing), !1 !== this._readableState.flowing && (i('pause'), this._readableState.flowing = !1, this.emit('pause')), this._readableState.paused = !0, this;
}, O.prototype.wrap = function(e) {
  var t = this,
n = this._readableState,
r = !1;
  for (var a in (e.on('end', function() {
  if (i('wrapped end'), n.decoder && !n.ended) {
    var e = n.decoder.end();
    e && e.length && t.push(e);
  }
  t.push(null);
}), e.on('data', function(a) {
  if (i('wrapped data'), n.decoder && (a = n.decoder.write(a)), n.objectMode && null == a)
    return;
  if (!!n.objectMode || !!a && !!a.length)
    !t.push(a) && (r = !0, e.pause());
}), e))
void 0 === this[a] && 'function' == typeof e[a] && (this[a] = function(t) {
  return function() {
    return e[t].apply(e, arguments);
  };
}(a));
  for (var s = 0; s < N.length; s++)
e.on(N[s], this.emit.bind(this, N[s]));
  return this._read = function(t) {
i('wrapped _read', t), r && (r = !1, e.resume());
  }, this;
}, 'function' == typeof Symbol && (O.prototype[Symbol.asyncIterator] = function() {
  return void 0 === s && (s = n(634587)), s(this);
}), Object.defineProperty(O.prototype, 'readableHighWaterMark', {
  enumerable: !1,
  get: function() {
return this._readableState.highWaterMark;
  }
}), Object.defineProperty(O.prototype, 'readableBuffer', {
  enumerable: !1,
  get: function() {
return this._readableState && this._readableState.buffer;
  }
}), Object.defineProperty(O.prototype, 'readableFlowing', {
  enumerable: !1,
  get: function() {
return this._readableState.flowing;
  },
  set: function(e) {
this._readableState && (this._readableState.flowing = e);
  }
}), O._fromList = G, Object.defineProperty(O.prototype, 'readableLength', {
  enumerable: !1,
  get: function() {
return this._readableState.length;
  }
}), 'function' == typeof Symbol && (O.from = function(e, t) {
  return void 0 === o && (o = n(787838)), o(O, e, t);
});