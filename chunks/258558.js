"use strict";
var i, r, s, o, a, l, u;
n(653041), n(411104), i = n.g, r = Date.now ? Date.now() : +new Date, s = i.performance || {}, o = [], a = {}, l = function(e, t) {
  for (var n = 0, i = o.length, r = []; n < i; n++) o[n][e] == t && r.push(o[n]);
  return r
}, u = function(e, t) {
  for (var n, i = o.length; i--;)(n = o[i]).entryType == e && (void 0 === t || n.name == t) && o.splice(i, 1)
}, s.now || (s.now = s.webkitNow || s.mozNow || s.msNow || function() {
  return (Date.now ? Date.now() : +new Date) - r
}), s.mark || (s.mark = s.webkitMark || function(e) {
  var t = {
    name: e,
    entryType: "mark",
    startTime: s.now(),
    duration: 0
  };
  o.push(t), a[e] = t
}), s.measure || (s.measure = s.webkitMeasure || function(e, t, n) {
  var i, r;
  if (void 0 !== n && void 0 === a[n]) throw SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + n + "' does not exist.");
  if (void 0 !== t && void 0 === a[t]) throw SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + t + "' does not exist.");
  i = a[t] ? a[t].startTime : 0, r = a[n] ? a[n].startTime : s.now(), o.push({
    name: e,
    entryType: "measure",
    startTime: i,
    duration: r - i
  })
}), s.getEntriesByType || (s.getEntriesByType = s.webkitGetEntriesByType || function(e) {
  return l("entryType", e)
}), s.getEntriesByName || (s.getEntriesByName = s.webkitGetEntriesByName || function(e) {
  return l("name", e)
}), s.clearMarks || (s.clearMarks = s.webkitClearMarks || function(e) {
  u("mark", e)
}), s.clearMeasures || (s.clearMeasures = s.webkitClearMeasures || function(e) {
  u("measure", e)
}), i.performance = s, "function" == typeof define && (define.amd || define.ajs) && define("performance", [], function() {
  return s
})