e.d(n, {
  n_: function() {
return o;
  }
});
var r = e(109393),
  i = e(742031);

function o(t) {
  ! function(t) {
for (var n = [], e = 1; e < arguments.length; e++)
  n[e - 1] = arguments[e];
var o = (0, i.Gd)();
if (o && o[t])
  return o[t].apply(o, r.fl(n));
throw Error('No hub defined or ' + t + ' was not found on the hub, please open a bug report.');
  }('addBreadcrumb', t);
}