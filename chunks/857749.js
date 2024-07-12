n.d(t, {
  A: function() {
return s;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(338545),
  o = n(481060);

function s(e) {
  let {
shouldAnimate: t = 'respect-motion-settings',
...n
  } = e, s = i.useContext(o.AccessibilityPreferencesContext).reducedMotion.enabled;
  return (0, r.jsx)(a.Spring, {
...n,
immediate: !('animate-always' === t || 'respect-motion-settings' === t && !s)
  });
}