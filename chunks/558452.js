n.d(t, {
  Y: function() {
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
  !('animate-always' === n || 'respect-motion-settings' === n && !l) && (u = {
...t,
...o.F
  });
  let [c, d, _] = (0, i.useTransition)(e, u, s);
  return 4 == arguments.length ? [
c,
d,
_
  ] : c;
}