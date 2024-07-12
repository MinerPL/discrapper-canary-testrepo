
function r(e, t, n) {
  let r;
  let i = [],
a = function() {
  for (var o = arguments.length, s = Array(o), l = 0; l < o; l++)
    s[l] = arguments[l];
  let u = Date.now();
  for (null != r && (clearTimeout(r), r = null); i.length > 0 && i[0] <= u;)
    i.shift();
  i.length < e ? (i.push(u + t), n(...s)) : r = setTimeout(() => a(...s), i[0] - u);
};
  return a;
}
n.d(t, {
  Z: function() {
return r;
  }
}), n(653041), n(47120);