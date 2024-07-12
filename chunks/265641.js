n(47120);
var i = n(470079);
t.Z = e => {
  let [t, n] = i.useState(!1), s = i.useCallback(t => {
e(t), n(!0);
  }, [
e,
n
  ]);
  return {
isFocused: t,
handleFocus: s,
handleBlur: () => {
  n(!1);
}
  };
};