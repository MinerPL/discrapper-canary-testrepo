var e, o, i = r(161581),
  u = r(626544),
  c = i.process,
  f = i.Deno,
  a = c && c.versions || f && f.version,
  s = a && a.v8;
s && (o = (e = s.split('.'))[0] > 0 && e[0] < 4 ? 1 : +(e[0] + e[1])), !o && u && (!(e = u.match(/Edge\/(\d+)/)) || e[1] >= 74) && (e = u.match(/Chrome\/(\d+)/)) && (o = +e[1]), t.exports = o;