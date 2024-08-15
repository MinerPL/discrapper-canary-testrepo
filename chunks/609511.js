var r = n(939793),
  i = n(861960),
  a = n(777994),
  s = n(326048),
  o = n(688709);
e.exports = function(e, t, n) {
  var l = e.constructor;
  switch (t) {
case '[object ArrayBuffer]':
  return r(e);
case '[object Boolean]':
case '[object Date]':
  return new l(+e);
case '[object DataView]':
  return i(e, n);
case '[object Float32Array]':
case '[object Float64Array]':
case '[object Int8Array]':
case '[object Int16Array]':
case '[object Int32Array]':
case '[object Uint8Array]':
case '[object Uint8ClampedArray]':
case '[object Uint16Array]':
case '[object Uint32Array]':
  return o(e, n);
case '[object Map]':
case '[object Set]':
  return new l();
case '[object Number]':
case '[object String]':
  return new l(e);
case '[object RegExp]':
  return a(e);
case '[object Symbol]':
  return s(e);
  }
};