"use strict";
i.r(t), i("47120");
var n = i("470079");
t.default = e => {
  let [t, i] = n.useState(!1), a = n.useCallback(t => {
    e(t), i(!0)
  }, [e, i]);
  return {
    isFocused: t,
    handleFocus: a,
    handleBlur: () => {
      i(!1)
    }
  }
}