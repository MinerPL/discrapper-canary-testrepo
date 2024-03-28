"use strict";
a.r(e), a.d(e, {
  useModalState: function() {
    return l
  },
  useUrlParts: function() {
    return n
  }
}), a("757143"), a("47120");
var o = a("470079"),
  s = a("902676");

function n(t) {
  let {
    protocol: e,
    hostname: a
  } = o.useMemo(() => ({
    protocol: (0, s.getProtocol)(t),
    hostname: (0, s.getHostname)(t)
  }), [t]), n = "".concat(e, "//").concat(a);
  return {
    protocol: e,
    hostname: a,
    theRestOfTheUrl: t.replace(n, "")
  }
}

function l(t) {
  let {
    url: e,
    trustUrl: a,
    onConfirm: s,
    onClose: l
  } = t, [r, i] = o.useState(!1), {
    protocol: c,
    hostname: d,
    theRestOfTheUrl: u
  } = n(e), _ = o.useCallback(() => {
    r && a(e), null == l || l(), s()
  }, [e, r, a, s, l]);
  return {
    protocol: c,
    hostname: d,
    theRestOfTheUrl: u,
    shouldTrustUrl: r,
    setShouldTrustUrl: i,
    handleConfirm: _
  }
}