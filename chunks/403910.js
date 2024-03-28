"use strict";
s.r(t);
var E = s("442837"),
  _ = s("339085");
t.default = function(e, t) {
  return (0, E.useStateFromStores)([_.default], () => {
    var s;
    if (null == t) return null;
    let E = _.default.getDisambiguatedEmojiContext(e);
    return null !== (s = E.getById(t)) && void 0 !== s ? s : E.getByName(t)
  }, [e, t])
}