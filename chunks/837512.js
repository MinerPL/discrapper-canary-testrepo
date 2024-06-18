"use strict";
var n = r(65183),
  i = n.Map,
  o = n.OrderedSet,
  a = n.Record,
  u = o(),
  s = {
    style: u,
    entity: null
  },
  c = function(t) {
    function e() {
      return t.apply(this, arguments) || this
    }
    r = e, n = t, r.prototype = Object.create(n.prototype), r.prototype.constructor = r, r.__proto__ = n;
    var r, n, o = e.prototype;
    return o.getStyle = function() {
      return this.get("style")
    }, o.getEntity = function() {
      return this.get("entity")
    }, o.hasStyle = function(t) {
      return this.getStyle().includes(t)
    }, e.applyStyle = function(t, r) {
      var n = t.set("style", t.getStyle().add(r));
      return e.create(n)
    }, e.removeStyle = function(t, r) {
      var n = t.set("style", t.getStyle().remove(r));
      return e.create(n)
    }, e.applyEntity = function(t, r) {
      var n = t.getEntity() === r ? t : t.set("entity", r);
      return e.create(n)
    }, e.create = function(t) {
      if (!t) return l;
      var r = i({
          style: u,
          entity: null
        }).merge(t),
        n = f.get(r);
      if (n) return n;
      var o = new e(r);
      return f = f.set(r, o), o
    }, e
  }(a(s)),
  l = new c,
  f = i([
    [i(s), l]
  ]);
c.EMPTY = l, t.exports = c