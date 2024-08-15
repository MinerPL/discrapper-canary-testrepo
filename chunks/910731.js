r.d(t, {
  e: function() {
return _;
  }
});
var n = r(622916),
  a = r(370336),
  o = r(899517),
  i = r(578346);

function _(e) {
  let t = 'console';
  (0, i.Hj)(t, e), (0, i.D2)(t, E);
}

function E() {
  if ('console' in o.n)
n.RU.forEach(function(e) {
  if (e in o.n.console)
    (0, a.hl)(o.n.console, e, function(t) {
      return n.LD[e] = t,
        function(...t) {
          (0, i.rK)('console', {
            args: t,
            level: e
          });
          let r = n.LD[e];
          r && r.apply(o.n.console, t);
        };
    });
});
}