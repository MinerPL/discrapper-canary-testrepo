var t = Array.prototype.slice,
  n = Object.prototype.toString;
e.exports = function(e) {
  var r, i = this;
  if ('function' != typeof i || '[object Function]' !== n.call(i))
throw TypeError('Function.prototype.bind called on incompatible ' + i);
  for (var a = t.call(arguments, 1), s = Math.max(0, i.length - a.length), o = [], l = 0; l < s; l++)
o.push('$' + l);
  if (r = Function('binder', 'return function (' + o.join(',') + '){ return binder.apply(this,arguments); }')(function() {
  if (!(this instanceof r))
    return i.apply(e, a.concat(t.call(arguments)));
  var n = i.apply(this, a.concat(t.call(arguments)));
  return Object(n) === n ? n : this;
}), i.prototype) {
var u = function() {};
u.prototype = i.prototype, r.prototype = new u(), u.prototype = null;
  }
  return r;
};