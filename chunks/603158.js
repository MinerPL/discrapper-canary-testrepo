n.d(t, {
  F: function() {
return l;
  }
});
let r = {
'|': ' '
  },
  i = {
'[': ' ',
']': ' ',
'(': ' ',
')': ' ',
'|': ' ',
'~': ' '
  },
  a = {
'-': '-',
' ': ' '
  },
  o = {
'\u200B': '',
'‌': '',
'‍': '',
'\u200E': '',
'\uFEFF': ''
  },
  s = {
...a,
...i,
...o,
...r
  };

function l(e) {
  let t = '';
  for (let n = 0; n < e.length; n++) {
let r = e[n];
null != s[r] ? t += s[r] : /[\p{Pd}\p{Pc}\p{Po}]/gu.test(r) ? t += ' ' : t += r;
  }
  return t.toLowerCase();
}