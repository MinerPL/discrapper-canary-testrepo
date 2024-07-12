var n = r(915646),
  _ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  a = /\\(\\)?/g,
  i = n(function(t) {
var e = [];
return 46 === t.charCodeAt(0) && e.push(''), t.replace(_, function(t, r, n, _) {
  e.push(n ? _.replace(a, '$1') : r || t);
}), e;
  });
t.exports = i;