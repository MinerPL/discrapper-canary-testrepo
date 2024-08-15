n.d(t, {
  Z: function() {
return o;
  }
});
var i, a, s, r, l = n(358085);

function o(e) {
  if ((0, l.isIOS)())
return e;
  if (!(0, l.isAndroid)())
return -1;
  switch (e) {
case 0:
  return 0;
case 1:
case 2:
  return 1;
case 3:
  return 2;
case 4:
case 5:
case 6:
  return 3;
default:
  return -1;
  }
}
(i = s || (s = {}))[i.UNHANDLED = -1] = 'UNHANDLED', i[i.NOMINAL = 0] = 'NOMINAL', i[i.FAIR = 1] = 'FAIR', i[i.SERIOUS = 2] = 'SERIOUS', i[i.CRITICAL = 3] = 'CRITICAL', (a = r || (r = {}))[a.NONE = 0] = 'NONE', a[a.LIGHT = 1] = 'LIGHT', a[a.MODERATE = 2] = 'MODERATE', a[a.SEVERE = 3] = 'SEVERE', a[a.CRITICAL = 4] = 'CRITICAL', a[a.EMERGENCY = 5] = 'EMERGENCY', a[a.SHUTDOWN = 6] = 'SHUTDOWN';