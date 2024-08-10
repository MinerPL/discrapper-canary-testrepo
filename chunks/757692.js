n.d(t, {
  o: function() {
return l;
  }
});
var i = n(451467),
  a = n(354459),
  s = n(37113);

function l(e, t) {
  var n, l;
  return null != e && e.type === a.fO.STREAM && null != e.maxResolution && null != e.maxFrameRate && (null == e ? void 0 : null === (n = e.maxResolution) || void 0 === n ? void 0 : n.height) in s.LY && e.maxFrameRate in s.ws && (0, i.Z)(s.tI.PRESET_VIDEO, (0, s.aW)(null == e ? void 0 : null === (l = e.maxResolution) || void 0 === l ? void 0 : l.height), (0, s.L9)(e.maxFrameRate), t);
}