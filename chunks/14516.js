n(47120);
var r = n(147913),
	i = n(19780),
	a = n(358221);
class s extends r.Z {
	handleFocusParticipant() {
		let e = i.Z.getChannelId();
		if (null != e) {
			var t, n;
			let r = a.Z.getSelectedParticipantId(e),
				s = a.Z.getVideoParticipants(e);
			null === (n = i.Z.getRTCConnection()) || void 0 === n || n.setSelectedParticipant(null === (t = s.find((e) => e.id === r && !e.localVideoDisabled)) || void 0 === t ? void 0 : t.id);
		}
	}
	constructor(...e) {
		var t, n, r;
		super(...e),
			(t = this),
			(n = 'stores'),
			(r = new Map().set(a.Z, this.handleFocusParticipant)),
			n in t
				? Object.defineProperty(t, n, {
						value: r,
						enumerable: !0,
						configurable: !0,
						writable: !0
					})
				: (t[n] = r);
	}
}
t.Z = new s();
