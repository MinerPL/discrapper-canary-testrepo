r.d(t, {
  $: function() {
return C;
  }
});
let a = {
ational: 'ate',
tional: 'tion',
enci: 'ence',
anci: 'ance',
izer: 'ize',
bli: 'ble',
alli: 'al',
entli: 'ent',
eli: 'e',
ousli: 'ous',
ization: 'ize',
ation: 'ate',
ator: 'ate',
alism: 'al',
iveness: 'ive',
fulness: 'ful',
ousness: 'ous',
aliti: 'al',
iviti: 'ive',
biliti: 'ble',
logi: 'log'
  },
  n = {
icate: 'ic',
ative: '',
alize: 'al',
iciti: 'ic',
ical: 'ic',
ful: '',
ness: ''
  },
  s = '[aeiouy]',
  o = '([^aeiou][^aeiouy]*)',
  i = '(' + s + '[aeiou]*)',
  c = RegExp('^' + o + '?' + i + o),
  u = RegExp('^' + o + '?' + i + o + i + '?$'),
  l = RegExp('^' + o + '?(' + i + o + '){2,}'),
  b = RegExp('^' + o + '?' + s),
  f = RegExp('^' + o + s + '[^aeiouwxy]$'),
  d = /ll$/,
  h = /^(.+?)e$/,
  p = /^(.+?)y$/,
  g = /^(.+?(s|t))(ion)$/,
  y = /^(.+?)(ed|ing)$/,
  v = /(at|bl|iz)$/,
  m = /^(.+?)eed$/,
  O = /^.+?[^s]s$/,
  w = /^.+?(ss|i)es$/,
  k = /([^aeiouylsz])\1$/,
  E = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
  x = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
  j = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;

function C(e) {
  let t, r = String(e).toLowerCase();
  if (r.length < 3)
return r;
  let s = !1;
  return 121 === r.codePointAt(0) && (s = !0, r = 'Y' + r.slice(1)), w.test(r) ? r = r.slice(0, -2) : O.test(r) && (r = r.slice(0, -1)), (t = m.exec(r)) ? c.test(t[1]) && (r = r.slice(0, -1)) : (t = y.exec(r)) && b.test(t[1]) && (r = t[1], v.test(r) ? r += 'e' : k.test(r) ? r = r.slice(0, -1) : f.test(r) && (r += 'e')), (t = p.exec(r)) && b.test(t[1]) && (r = t[1] + 'i'), (t = E.exec(r)) && c.test(t[1]) && (r = t[1] + a[t[2]]), (t = x.exec(r)) && c.test(t[1]) && (r = t[1] + n[t[2]]), (t = j.exec(r)) ? l.test(t[1]) && (r = t[1]) : (t = g.exec(r)) && l.test(t[1]) && (r = t[1]), (t = h.exec(r)) && (l.test(t[1]) || u.test(t[1]) && !f.test(t[1])) && (r = t[1]), d.test(r) && l.test(r) && (r = r.slice(0, -1)), s && (r = 'y' + r.slice(1)), r;
}