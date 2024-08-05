l.d(t, {
  $: function() {
return v;
  }
});
let i = {
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
  a = '([^aeiou][^aeiouy]*)',
  o = '(' + s + '[aeiou]*)',
  r = RegExp('^' + a + '?' + o + a),
  d = RegExp('^' + a + '?' + o + a + o + '?$'),
  u = RegExp('^' + a + '?(' + o + a + '){2,}'),
  c = RegExp('^' + a + '?' + s),
  _ = RegExp('^' + a + s + '[^aeiouwxy]$'),
  m = /ll$/,
  f = /^(.+?)e$/,
  h = /^(.+?)y$/,
  g = /^(.+?(s|t))(ion)$/,
  E = /^(.+?)(ed|ing)$/,
  A = /(at|bl|iz)$/,
  p = /^(.+?)eed$/,
  M = /^.+?[^s]s$/,
  x = /^.+?(ss|i)es$/,
  I = /([^aeiouylsz])\1$/,
  T = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
  O = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
  R = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;

function v(e) {
  let t, l = String(e).toLowerCase();
  if (l.length < 3)
return l;
  let s = !1;
  return 121 === l.codePointAt(0) && (s = !0, l = 'Y' + l.slice(1)), x.test(l) ? l = l.slice(0, -2) : M.test(l) && (l = l.slice(0, -1)), (t = p.exec(l)) ? r.test(t[1]) && (l = l.slice(0, -1)) : (t = E.exec(l)) && c.test(t[1]) && (l = t[1], A.test(l) ? l += 'e' : I.test(l) ? l = l.slice(0, -1) : _.test(l) && (l += 'e')), (t = h.exec(l)) && c.test(t[1]) && (l = t[1] + 'i'), (t = T.exec(l)) && r.test(t[1]) && (l = t[1] + i[t[2]]), (t = O.exec(l)) && r.test(t[1]) && (l = t[1] + n[t[2]]), (t = R.exec(l)) ? u.test(t[1]) && (l = t[1]) : (t = g.exec(l)) && u.test(t[1]) && (l = t[1]), (t = f.exec(l)) && (u.test(t[1]) || d.test(t[1]) && !_.test(t[1])) && (l = t[1]), m.test(l) && u.test(l) && (l = l.slice(0, -1)), s && (l = 'y' + l.slice(1)), l;
}