n.d(t, {
  V: function() {
return E;
  }
});
var r = n(573654),
  i = n(40284),
  a = n(481732),
  o = n(478413),
  s = n(919513),
  l = n(158851);

function u(e, t) {
  for (var n = 0; n < t.length; n++) {
var r = t[n];
r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}

function c(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++)
r[n] = e[n];
  return r;
}

function d(e) {
  switch (e[0]) {
case 'S':
  return o.t.SOURCE;
case 'T':
  return o.t.TARGET;
default:
  (0, r.k)(!1, 'Cannot parse handler ID: '.concat(e));
  }
}

function _(e, t) {
  var n = e.entries(),
r = !1;
  do {
var i, a, o = n.next(),
  s = o.done;
if ((i = o.value, a = 2, function(e) {
    if (Array.isArray(e))
      return e;
  }(i) || function(e, t) {
    if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
      var n = [],
        r = !0,
        i = !1,
        a = void 0;
      try {
        for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
      } catch (e) {
        i = !0, a = e;
      } finally {
        try {
          !r && null != s.return && s.return();
        } finally {
          if (i)
            throw a;
        }
      }
      return n;
    }
  }(i, 2) || function(e, t) {
    if (e) {
      if ('string' == typeof e)
        return c(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if ('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)
        return Array.from(e);
      if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return c(e, t);
    }
  }(i, a) || function() {
    throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
  }())[1] === t)
  return !0;
r = !!s;
  } while (!r);
  return !1;
}
var E = function() {
  var e, t, n;

  function c(e) {
! function(e, t) {
  if (!(e instanceof t))
    throw TypeError('Cannot call a class as a function');
}(this, c), this.types = new Map(), this.dragSources = new Map(), this.dropTargets = new Map(), this.pinnedSourceId = null, this.pinnedSource = null, this.store = e;
  }
  return e = c, t = [{
  key: 'addSource',
  value: function(e, t) {
    (0, s.sM)(e), (0, s.up)(t);
    var n = this.addHandler(o.t.SOURCE, e, t);
    return this.store.dispatch((0, i.j1)(n)), n;
  }
},
{
  key: 'addTarget',
  value: function(e, t) {
    (0, s.sM)(e, !0), (0, s.JP)(t);
    var n = this.addHandler(o.t.TARGET, e, t);
    return this.store.dispatch((0, i.jn)(n)), n;
  }
},
{
  key: 'containsHandler',
  value: function(e) {
    return _(this.dragSources, e) || _(this.dropTargets, e);
  }
},
{
  key: 'getSource',
  value: function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, r.k)(this.isSourceId(e), 'Expected a valid source ID.'), t && e === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(e);
  }
},
{
  key: 'getTarget',
  value: function(e) {
    return (0, r.k)(this.isTargetId(e), 'Expected a valid target ID.'), this.dropTargets.get(e);
  }
},
{
  key: 'getSourceType',
  value: function(e) {
    return (0, r.k)(this.isSourceId(e), 'Expected a valid source ID.'), this.types.get(e);
  }
},
{
  key: 'getTargetType',
  value: function(e) {
    return (0, r.k)(this.isTargetId(e), 'Expected a valid target ID.'), this.types.get(e);
  }
},
{
  key: 'isSourceId',
  value: function(e) {
    return d(e) === o.t.SOURCE;
  }
},
{
  key: 'isTargetId',
  value: function(e) {
    return d(e) === o.t.TARGET;
  }
},
{
  key: 'removeSource',
  value: function(e) {
    var t = this;
    (0, r.k)(this.getSource(e), 'Expected an existing source.'), this.store.dispatch((0, i.wZ)(e)), (0, l.eM)(function() {
      t.dragSources.delete(e), t.types.delete(e);
    });
  }
},
{
  key: 'removeTarget',
  value: function(e) {
    (0, r.k)(this.getTarget(e), 'Expected an existing target.'), this.store.dispatch((0, i.BT)(e)), this.dropTargets.delete(e), this.types.delete(e);
  }
},
{
  key: 'pinSource',
  value: function(e) {
    var t = this.getSource(e);
    (0, r.k)(t, 'Expected an existing source.'), this.pinnedSourceId = e, this.pinnedSource = t;
  }
},
{
  key: 'unpinSource',
  value: function() {
    (0, r.k)(this.pinnedSource, 'No source is pinned at the time.'), this.pinnedSourceId = null, this.pinnedSource = null;
  }
},
{
  key: 'addHandler',
  value: function(e, t, n) {
    var r = function(e) {
      var t = (0, a.p)().toString();
      switch (e) {
        case o.t.SOURCE:
          return 'S'.concat(t);
        case o.t.TARGET:
          return 'T'.concat(t);
        default:
          throw Error('Unknown Handler Role: '.concat(e));
      }
    }(e);
    return this.types.set(r, t), e === o.t.SOURCE ? this.dragSources.set(r, n) : e === o.t.TARGET && this.dropTargets.set(r, n), r;
  }
}
  ], u(e.prototype, t), c;
}();