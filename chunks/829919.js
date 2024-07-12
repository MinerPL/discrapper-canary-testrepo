r.d(e, {
  Rt: function() {
return a;
  },
  l4: function() {
return i;
  },
  qT: function() {
return o;
  }
});
var n = r(46834);
let _ = (0, r(24716).Rf)();

function a(t, e = {}) {
  try {
let r, _ = t,
  a = [],
  i = 0,
  o = 0,
  E = 3,
  s = Array.isArray(e) ? e : e.keyAttrs,
  c = !Array.isArray(e) && e.maxStringLength || 80;
for (; _ && i++ < 5 && (r = function(t, e) {
    let r, _, a, i, o;
    let E = [];
    if (!t || !t.tagName)
      return '';
    E.push(t.tagName.toLowerCase());
    let s = e && e.length ? e.filter(e => t.getAttribute(e)).map(e => [
      e,
      t.getAttribute(e)
    ]) : null;
    if (s && s.length)
      s.forEach(t => {
        E.push(`[${ t[0] }="${ t[1] }"]`);
      });
    else if (t.id && E.push(`#${ t.id }`), (r = t.className) && (0, n.HD)(r))
      for (o = 0, _ = r.split(/\s+/); o < _.length; o++)
        E.push(`.${ _[o] }`);
    let c = [
      'aria-label',
      'type',
      'name',
      'title',
      'alt'
    ];
    for (o = 0; o < c.length; o++)
      a = c[o], (i = t.getAttribute(a)) && E.push(`[${ a }="${ i }"]`);
    return E.join('');
  }(_, s), 'html' !== r && (!(i > 1) || !(o + a.length * E + r.length >= c)));) {
  ;
  a.push(r), o += r.length, _ = _.parentNode;
}
return a.reverse().join(' > ');
  } catch (t) {
return '<unknown>';
  }
}

function i() {
  try {
return _.document.location.href;
  } catch (t) {
return '';
  }
}

function o(t) {
  return _.document && _.document.querySelector ? _.document.querySelector(t) : null;
}