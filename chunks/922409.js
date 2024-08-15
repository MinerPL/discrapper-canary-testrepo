n.d(t, {
	_: function () {
		return l;
	}
});
var i = n(442837),
	a = n(897473),
	s = n(433355);
function l() {
	let e = (0, i.e7)([s.ZP], () => s.ZP.getSidebarState(s.uZ)),
		t = (null == e ? void 0 : e.type) === a.tI.VIEW_MESSAGE_REQUEST ? e : null,
		n = null == t ? void 0 : t.channelId;
	return {
		channelId: n,
		hasSingleMessageRequest: (null == t ? void 0 : t.details) != null && t.details.type === a.Ff.MESSAGE_REQUEST && t.details.hasSingleMessageRequest
	};
}
