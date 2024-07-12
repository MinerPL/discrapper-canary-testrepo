r.d(e, {
  $P: function() {
return o;
  },
  Sq: function() {
return a;
  },
  pE: function() {
return _;
  }
});
let n = /\(error: (.*)\)/;

function _(...t) {
  let e = t.sort((t, e) => t[0] - e[0]).map(t => t[1]);
  return (t, r = 0) => {
let _ = [],
  a = t.split('\n');
for (let t = r; t < a.length; t++) {
  let r = a[t];
  if (r.length > 1024)
    continue;
  let i = n.test(r) ? r.replace(n, '$1') : r;
  if (!i.match(/\S*Error: /)) {
    for (let t of e) {
      let e = t(i);
      if (e) {
        _.push(e);
        break;
      }
    }
    if (_.length >= 50)
      break;
  }
}
return function(t) {
  if (!t.length)
    return [];
  let e = t.slice(0, 50),
    r = e[e.length - 1].function;
  r && /sentryWrapped/.test(r) && e.pop(), e.reverse();
  let n = e[e.length - 1].function;
  return n && /captureMessage|captureException/.test(n) && e.pop(), e.map(t => ({
    ...t,
    filename: t.filename || e[e.length - 1].filename,
    function: t.function || '?'
  }));
}(_);
  };
}

function a(t) {
  return Array.isArray(t) ? _(...t) : t;
}
let i = '<anonymous>';

function o(t) {
  try {
if (!t || 'function' != typeof t)
  return i;
return t.name || i;
  } catch (t) {
return i;
  }
}