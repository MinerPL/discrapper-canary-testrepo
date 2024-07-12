var r, i = n(444675);

function a(e, t, n) {
  return (t = function(e) {
var t = function(e, t) {
  if ('object' != typeof e || null === e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (void 0 !== n) {
    var r = n.call(e, t || 'default');
    if ('object' != typeof r)
      return r;
    throw TypeError('@@toPrimitive must return a primitive value.');
  }
  return ('string' === t ? String : Number)(e);
}(e, 'string');
return 'symbol' == typeof t ? t : String(t);
  }(t)) in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
var o = n(133495),
  s = Symbol('lastResolve'),
  l = Symbol('lastReject'),
  u = Symbol('error'),
  c = Symbol('ended'),
  d = Symbol('lastPromise'),
  _ = Symbol('handlePromise'),
  E = Symbol('stream');

function f(e, t) {
  return {
value: e,
done: t
  };
}

function h(e) {
  var t = e[s];
  if (null !== t) {
var n = e[E].read();
null !== n && (e[d] = null, e[s] = null, e[l] = null, t(f(n, !1)));
  }
}

function p(e) {
  i.nextTick(h, e);
}
var m = Object.getPrototypeOf(function() {}),
  I = Object.setPrototypeOf((a(r = {
get stream() {
  return this[E];
},
next: function() {
  var e, t, n, r = this,
    a = this[u];
  if (null !== a)
    return Promise.reject(a);
  if (this[c])
    return Promise.resolve(f(void 0, !0));
  if (this[E].destroyed)
    return new Promise(function(e, t) {
      i.nextTick(function() {
        r[u] ? t(r[u]) : e(f(void 0, !0));
      });
    });
  var o = this[d];
  if (o) {
    ;
    n = new Promise((e = o, t = this, function(n, r) {
      e.then(function() {
        if (t[c]) {
          n(f(void 0, !0));
          return;
        }
        t[_](n, r);
      }, r);
    }));
  } else {
    var s = this[E].read();
    if (null !== s)
      return Promise.resolve(f(s, !1));
    n = new Promise(this[_]);
  }
  return this[d] = n, n;
}
  }, Symbol.asyncIterator, function() {
return this;
  }), a(r, 'return', function() {
var e = this;
return new Promise(function(t, n) {
  e[E].destroy(null, function(e) {
    if (e) {
      n(e);
      return;
    }
    t(f(void 0, !0));
  });
});
  }), r), m);
e.exports = function(e) {
  var t, n = Object.create(I, (a(t = {}, E, {
value: e,
writable: !0
  }), a(t, s, {
value: null,
writable: !0
  }), a(t, l, {
value: null,
writable: !0
  }), a(t, u, {
value: null,
writable: !0
  }), a(t, c, {
value: e._readableState.endEmitted,
writable: !0
  }), a(t, _, {
value: function(e, t) {
  var r = n[E].read();
  r ? (n[d] = null, n[s] = null, n[l] = null, e(f(r, !1))) : (n[s] = e, n[l] = t);
},
writable: !0
  }), t));
  return n[d] = null, o(e, function(e) {
if (e && 'ERR_STREAM_PREMATURE_CLOSE' !== e.code) {
  var t = n[l];
  null !== t && (n[d] = null, n[s] = null, n[l] = null, t(e)), n[u] = e;
  return;
}
var r = n[s];
null !== r && (n[d] = null, n[s] = null, n[l] = null, r(f(void 0, !0))), n[c] = !0;
  }), e.on('readable', p.bind(null, n)), n;
};