var r, i, a, o, s, l, u;
n(653041), n(411104), r = n.g, i = Date.now ? Date.now() : +new Date(), a = r.performance || {}, o = [], s = {}, l = function(e, t) {
  for (var n = 0, r = o.length, i = []; n < r; n++)
o[n][e] == t && i.push(o[n]);
  return i;
}, u = function(e, t) {
  for (var n, r = o.length; r--;)
(n = o[r]).entryType == e && (void 0 === t || n.name == t) && o.splice(r, 1);
}, a.now || (a.now = a.webkitNow || a.mozNow || a.msNow || function() {
  return (Date.now ? Date.now() : +new Date()) - i;
}), a.mark || (a.mark = a.webkitMark || function(e) {
  var t = {
name: e,
entryType: 'mark',
startTime: a.now(),
duration: 0
  };
  o.push(t), s[e] = t;
}), a.measure || (a.measure = a.webkitMeasure || function(e, t, n) {
  var r, i;
  if (void 0 !== n && void 0 === s[n])
throw SyntaxError('Failed to execute \'measure\' on \'Performance\': The mark \'' + n + '\' does not exist.');
  if (void 0 !== t && void 0 === s[t])
throw SyntaxError('Failed to execute \'measure\' on \'Performance\': The mark \'' + t + '\' does not exist.');
  r = s[t] ? s[t].startTime : 0, i = s[n] ? s[n].startTime : a.now(), o.push({
name: e,
entryType: 'measure',
startTime: r,
duration: i - r
  });
}), a.getEntriesByType || (a.getEntriesByType = a.webkitGetEntriesByType || function(e) {
  return l('entryType', e);
}), a.getEntriesByName || (a.getEntriesByName = a.webkitGetEntriesByName || function(e) {
  return l('name', e);
}), a.clearMarks || (a.clearMarks = a.webkitClearMarks || function(e) {
  u('mark', e);
}), a.clearMeasures || (a.clearMeasures = a.webkitClearMeasures || function(e) {
  u('measure', e);
}), r.performance = a, 'function' == typeof define && (define.amd || define.ajs) && define('performance', [], function() {
  return a;
});