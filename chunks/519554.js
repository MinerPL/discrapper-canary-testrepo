n.d(t, {
  b: function() {
return s;
  }
}), n(47120);
var r = n(470079),
  i = n(338545),
  a = n(481060),
  o = n(717495);

function s(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'respect-motion-settings',
s = arguments.length > 3 ? arguments[3] : void 0,
l = r.useContext(a.AccessibilityPreferencesContext).reducedMotion.enabled,
u = t;
  !('animate-always' === n || 'respect-motion-settings' === n && !l) && (u = 'function' == typeof t ? (e, n) => ({
...t(e, n),
...o.F
  }) : t.map(e => ({
...e,
...o.F
  })));
  let c = 'function' == typeof u,
[d, _, E] = (0, i.useSprings)(e, u, s);
  return c || 4 == arguments.length ? [
d,
_,
E
  ] : d;
}