"use strict";
n.r(t), n.d(t, {
  useMultiAccountUsers: function() {
    return o
  }
});
var a = n("884691"),
  s = n("446674"),
  l = n("913144"),
  i = n("694787"),
  r = n("770032");

function o() {
  let e = (0, s.useStateFromStoresObject)([r.default], () => ({
    isLoading: r.default.getIsValidatingUsers(),
    multiAccountUsers: r.default.getUsers()
  }));
  return a.useEffect(() => {
    l.default.wait(() => {
      i.validateMultiAccountTokens()
    })
  }, []), e
}