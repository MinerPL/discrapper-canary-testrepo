n.d(t, {
  g: function() {
return o;
  },
  p: function() {
return s;
  }
});
var r = n(399606),
  i = n(581883),
  a = n(592204);
let o = () => {
var e, t, n;
let a = (0, r.cj)([i.Z], () => {
  var e, t;
  return null !== (t = null === (e = i.Z.settings.textAndImages) || void 0 === e ? void 0 : e.keywordFilterSettings) && void 0 !== t ? t : {};
});
return {
  profanity: null === (e = a.profanity) || void 0 === e ? void 0 : e.value,
  sexualContent: null === (t = a.sexualContent) || void 0 === t ? void 0 : t.value,
  slurs: null === (n = a.slurs) || void 0 === n ? void 0 : n.value
};
  },
  s = () => {
var e;
let {
  profanity: t,
  sexualContent: n,
  slurs: r
} = o();
return !!(0, a.Xo)({
  location: 'use-should-filter-keywords'
}) && null !== (e = t || n || r) && void 0 !== e && e;
  };