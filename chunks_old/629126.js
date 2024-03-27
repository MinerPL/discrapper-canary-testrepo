"use strict";
E.r(t), E.d(t, {
  default: function() {
    return T
  }
});
var _ = E("446674"),
  s = E("385976"),
  T = function(e, t) {
    return (0, _.useStateFromStores)([s.default], () => {
      var E;
      if (null == t) return null;
      let _ = s.default.getDisambiguatedEmojiContext(e);
      return null !== (E = _.getById(t)) && void 0 !== E ? E : _.getByName(t)
    }, [e, t])
  }