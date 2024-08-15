var r = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m,
  i = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,
  a = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m,
  s = n(245413),
  o = n(780177),
  l = n(957578).Buffer;
e.exports = function(e, t) {
  var n, u = e.toString(),
c = u.match(r);
  if (c) {
var d = 'aes' + c[1],
  _ = l.from(c[2], 'hex'),
  E = l.from(c[3].replace(/[\r\n]/g, ''), 'base64'),
  f = s(t, _.slice(0, 8), parseInt(c[1], 10)).key,
  h = [],
  p = o.createDecipheriv(d, f, _);
h.push(p.update(E)), h.push(p.final()), n = l.concat(h);
  } else {
var m = u.match(a);
n = l.from(m[2].replace(/[\r\n]/g, ''), 'base64');
  }
  return {
tag: u.match(i)[1],
data: n
  };
};