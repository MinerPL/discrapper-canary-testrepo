s.d(t, {
  M: function() {
return a;
  }
}), s(757143), s(653041);
let n = /[^0-9/]/g;

function a(e) {
  let t = e.replace(n, '').split('/'),
s = t[0],
a = t[1],
i = [];
  return parseInt(s, 10) > 12 && (s = s.substring(0, 1)), i.push(s), (parseInt(s, 10) > 1 || 2 === s.length || null != a && '' !== a) && i.push('/'), null != a && '' !== a && parseInt(a, 10) > 99 && (a = (a + '').substring(0, 2)), i.push(a), i.join('');
}