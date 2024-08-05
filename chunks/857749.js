n.d(t, {
  A: function() {
return o;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(338545),
  s = n(481060);

function o(e) {
  let {
shouldAnimate: t = 'respect-motion-settings',
...n
  } = e, o = i.useContext(s.AccessibilityPreferencesContext).reducedMotion.enabled;
  return (0, r.jsx)(a.Spring, {
...n,
immediate: !('animate-always' === t || 'respect-motion-settings' === t && !o)
  });
}