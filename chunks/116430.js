r.d(t, {
  X: function() {
return u;
  }
});
var n = r(622916),
  a = r(899517),
  o = r(910731),
  i = r(954211),
  _ = r(394798),
  E = r(886115),
  s = r(263449),
  c = r(233517),
  I = r(151122);
let u = (0, I._I)((e = {}) => {
  let t = e.levels || n.RU;
  return {
name: 'CaptureConsole',
setup(e) {
  if ('console' in a.n)
    (0, o.e)(({
      args: r,
      level: n
    }) => {
      if ((0, s.s3)() === e && !!t.includes(n))
        (function(e, t) {
          let r = {
            level: (0, i.V)(t),
            extra: {
              arguments: e
            }
          };
          (0, s.$e)(n => {
            if (n.addEventProcessor(e => (e.logger = 'console', (0, _.EG)(e, {
                handled: !1,
                type: 'console'
              }), e)), 'assert' === t) {
              if (!e[0]) {
                let t = `Assertion failed: ${ (0, E.nK)(e.slice(1), ' ') || 'console.assert' }`;
                n.setExtra('arguments', e.slice(1)), (0, c.uT)(t, r);
              }
              return;
            }
            let a = e.find(e => e instanceof Error);
            if (a) {
              (0, c.Tb)(a, r);
              return;
            }
            let o = (0, E.nK)(e, ' ');
            (0, c.uT)(o, r);
          });
        }(r, n));
    });
}
  };
});