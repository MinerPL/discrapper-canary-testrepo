var r = n(548015),
  i = n(74748),
  a = n(572657),
  s = n(318670),
  o = n(252798),
  l = n(396379),
  u = r.Z ? r.Z.prototype : void 0,
  c = u ? u.valueOf : void 0;
t.Z = function(e, t, n, r, u, d, _) {
  switch (n) {
case '[object DataView]':
  if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
    break;
  e = e.buffer, t = t.buffer;
case '[object ArrayBuffer]':
  if (e.byteLength != t.byteLength || !d(new i.Z(e), new i.Z(t)))
    break;
  return !0;
case '[object Boolean]':
case '[object Date]':
case '[object Number]':
  return (0, a.Z)(+e, +t);
case '[object Error]':
  return e.name == t.name && e.message == t.message;
case '[object RegExp]':
case '[object String]':
  return e == t + '';
case '[object Map]':
  var E = o.Z;
case '[object Set]':
  var f = 1 & r;
  if (E || (E = l.Z), e.size != t.size && !f)
    break;
  var h = _.get(e);
  if (h)
    return h == t;
  r |= 2, _.set(e, t);
  var p = (0, s.Z)(E(e), E(t), r, u, d, _);
  return _.delete(e), p;
case '[object Symbol]':
  if (c)
    return c.call(e) == c.call(t);
  }
  return !1;
};