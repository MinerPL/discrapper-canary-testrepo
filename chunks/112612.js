"use strict";
a.r(e), a.d(e, {
  default: function() {
    return l
  }
}), a("47120");
var s = a("470079"),
  n = a("881052");

function l(t) {
  let {
    onSubmit: e,
    onClose: a
  } = t, [l, o] = s.useState(!1), [i, r] = s.useState(null), c = s.useCallback(async () => {
    if (!l) {
      o(!0), r(null);
      try {
        await e(), a()
      } catch (t) {
        r(new n.APIError(t).getAnyErrorMessage()), o(!1)
      }
    }
  }, [a, e, l]);
  return {
    submitting: l,
    errorMessage: i,
    onSubmit: c
  }
}