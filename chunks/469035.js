var t = [],
  o = new MessageChannel(),
  a = function() {
this.postMessage(void 0);
  }.bind(o.port2);
o.port1.onmessage = function() {
  var e = t;
  t = [];
  for (var n = performance.now(), o = 0; o < e.length; o++)
e[o](n);
}, o = null, n.Z = function(e) {
  1 === t.push(e) && requestAnimationFrame(a);
};