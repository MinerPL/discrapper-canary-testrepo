n.d(t, {
  K: function() {
return s;
  },
  z: function() {
return c;
  }
});
var i = n(481060),
  l = n(475179),
  r = n(925549),
  o = n(905423),
  a = n(981631);

function s(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if (!(0, i.hasAnyModalOpen)())
n && r.Z.channelListScrollTo(e, t), s && null != t && l.Z.updateChatOpen(t, !0), o.Z.getState().updatePath(a.Z5c.CHANNEL(e, t));
}

function c(e) {
  if (!(0, i.hasAnyModalOpen)())
o.Z.getState().updatePath(e);
}