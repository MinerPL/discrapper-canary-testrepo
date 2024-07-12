r.d(e, {
  W: function() {
return o;
  }
});
var n = r(50074),
  _ = r(177668),
  a = r(507506);

function i(t, e) {
  let r;
  return (0, n.gv)(t, (t, n) => (e.includes(n) && (r = Array.isArray(t) ? t[1] : void 0), !!r)), r;
}

function o(t, e) {
  return r => {
let n = t(r),
  o = {};

function E(e, n) {
  let E = n ? `${ e }:${ n }` : e;
  if (!o[E]) {
    var s, c;
    let I = (0, _.U4)(e);
    if (!I)
      return;
    let R = (0, a.U)(I);
    o[E] = n ? (s = t, c = n, t => {
      let e = s(t);
      return {
        send: async t => {
          let r = i(t, [
            'event',
            'transaction',
            'profile',
            'replay_event'
          ]);
          return r && (r.release = c), e.send(t);
        },
        flush: t => e.flush(t)
      };
    })({
      ...r,
      url: R
    }) : t({
      ...r,
      url: R
    });
  }
  return o[E];
}
return {
  send: async function t(t) {
    let r = e({
      envelope: t,
      getEvent: function(e) {
        return i(t, e && e.length ? e : ['event']);
      }
    }).map(t => 'string' == typeof t ? E(t, void 0) : E(t.dsn, t.release)).filter(t => !!t);
    return 0 === r.length && r.push(n), (await Promise.all(r.map(e => e.send(t))))[0];
  },
  flush: async function t(t) {
    let e = [
      ...Object.keys(o).map(t => o[t]),
      n
    ];
    return (await Promise.all(e.map(e => e.flush(t)))).every(t => t);
  }
};
  };
}