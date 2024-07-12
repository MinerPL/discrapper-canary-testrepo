n.d(t, {
  U: function() {
return a;
  }
});
var r = {},
  i = function(e, t, n, r) {
if ('undefined' == typeof document && !r)
  return null;
var i = r ? new r() : document.createElement('canvas');
i.width = 2 * n, i.height = 2 * n;
var a = i.getContext('2d');
return a ? (a.fillStyle = e, a.fillRect(0, 0, i.width, i.height), a.fillStyle = t, a.fillRect(0, 0, n, n), a.translate(n, n), a.fillRect(0, 0, n, n), i.toDataURL()) : null;
  },
  a = function(e, t, n, a) {
var o = e + '-' + t + '-' + n + (a ? '-server' : '');
if (r[o])
  return r[o];
var s = i(e, t, n, a);
return r[o] = s, s;
  };