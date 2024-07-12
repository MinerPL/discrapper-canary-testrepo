n.d(t, {
  $: function() {
return w;
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
  o = {
icate: 'ic',
ative: '',
alize: 'al',
iciti: 'ic',
ical: 'ic',
ful: '',
ness: ''
  },
  r = '[aeiouy]',
  a = '([^aeiou][^aeiouy]*)',
  l = '(' + r + '[aeiou]*)',
  s = RegExp('^' + a + '?' + l + a),
  c = RegExp('^' + a + '?' + l + a + l + '?$'),
  d = RegExp('^' + a + '?(' + l + a + '){2,}'),
  u = RegExp('^' + a + '?' + r),
  h = RegExp('^' + a + r + '[^aeiouwxy]$'),
  g = /ll$/,
  m = /^(.+?)e$/,
  f = /^(.+?)y$/,
  b = /^(.+?(s|t))(ion)$/,
  p = /^(.+?)(ed|ing)$/,
  _ = /(at|bl|iz)$/,
  v = /^(.+?)eed$/,
  C = /^.+?[^s]s$/,
  R = /^.+?(ss|i)es$/,
  I = /([^aeiouylsz])\1$/,
  S = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
  x = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
  B = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;

function w(e) {
  let t, n = String(e).toLowerCase();
  if (n.length < 3)
return n;
  let r = !1;
  return 121 === n.codePointAt(0) && (r = !0, n = 'Y' + n.slice(1)), R.test(n) ? n = n.slice(0, -2) : C.test(n) && (n = n.slice(0, -1)), (t = v.exec(n)) ? s.test(t[1]) && (n = n.slice(0, -1)) : (t = p.exec(n)) && u.test(t[1]) && (n = t[1], _.test(n) ? n += 'e' : I.test(n) ? n = n.slice(0, -1) : h.test(n) && (n += 'e')), (t = f.exec(n)) && u.test(t[1]) && (n = t[1] + 'i'), (t = S.exec(n)) && s.test(t[1]) && (n = t[1] + i[t[2]]), (t = x.exec(n)) && s.test(t[1]) && (n = t[1] + o[t[2]]), (t = B.exec(n)) ? d.test(t[1]) && (n = t[1]) : (t = b.exec(n)) && d.test(t[1]) && (n = t[1]), (t = m.exec(n)) && (d.test(t[1]) || c.test(t[1]) && !h.test(t[1])) && (n = t[1]), g.test(n) && d.test(n) && (n = n.slice(0, -1)), r && (n = 'y' + n.slice(1)), n;
}