var r, i;
n.d(t, {
  BD: function() {
return l;
  },
  dQ: function() {
return r;
  },
  jO: function() {
return u;
  }
}), (i = r || (r = {}))[i.ExactMatch = 0] = 'ExactMatch', i[i.PrefixMatch = 1] = 'PrefixMatch';
let a = e => /\p{P}/gu.test(null != e ? e : '') || ' ' === e || '' === e,
  o = (e, t, n) => {
if (n - t > e.length)
  return !1;
let r = e.charAt(t - 1),
  i = e.charAt(n + 1);
return a(r) && a(i);
  },
  s = (e, t) => a(e.charAt(t - 1)),
  l = (e, t, n, r) => {
if (1 === r)
  return s(e, t);
return o(e, t, n);
  },
  u = (e, t, n, r) => {
if (0 === r)
  return {
    start: t,
    end: n,
    keyword: e.substring(t, n + 1)
  };
let i = n;
for (; i < e.length - 1 && !a(e.charAt(i + 1));)
  i++;
return {
  start: t,
  end: i,
  keyword: e.substring(t, i + 1)
};
  };