"use strict";
s.r(t), s.d(t, {
  useKeywordFilterSettings: function() {
    return l
  }
});
var a = s("399606"),
  n = s("581883");
let l = () => {
  var e, t, s;
  let l = (0, a.useStateFromStoresObject)([n.default], () => {
    var e, t;
    return null !== (t = null === (e = n.default.settings.textAndImages) || void 0 === e ? void 0 : e.keywordFilterSettings) && void 0 !== t ? t : {}
  });
  return {
    profanity: null === (e = l.profanity) || void 0 === e ? void 0 : e.value,
    sexualContent: null === (t = l.sexualContent) || void 0 === t ? void 0 : t.value,
    slurs: null === (s = l.slurs) || void 0 === s ? void 0 : s.value
  }
}