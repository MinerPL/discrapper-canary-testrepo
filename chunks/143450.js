n.d(t, {
  q: function() {
return s;
  }
}), n(47120);
var r = n(470079),
  i = n(338545),
  a = n(481060),
  o = n(717495);

function s(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'respect-motion-settings',
n = arguments.length > 2 ? arguments[2] : void 0,
s = r.useContext(a.AccessibilityPreferencesContext).reducedMotion.enabled,
l = e;
  !('animate-always' === t || 'respect-motion-settings' === t && !s) && (l = 'function' == typeof e ? () => ({
...e(),
...o.F
  }) : {
...e,
...o.F
  });
  let u = 'function' == typeof l,
[c, d, _] = (0, i.useSpring)(l, n);
  return u || 3 == arguments.length ? [
c,
d,
_
  ] : c;
}