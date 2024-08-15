n.d(t, {
	Z: function () {
		return o;
	}
});
var r = n(928801),
	i = n(549895),
	a = n(885110);
function s(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
class o extends r.Z {
	getInitialState() {
		return a.Z.getLocalPresence();
	}
	getNextState() {
		return a.Z.getLocalPresence();
	}
	shouldCommit() {
		return this.socket.isSessionEstablished();
	}
	emitPresenceUpdate(e) {
		let { status: t, since: n, activities: r, afk: i, broadcast: a } = e;
		this.socket.presenceUpdate(t, n, r, i, a);
	}
	handleConnectionOpen() {
		let e = !this.switchingAccounts;
		this.update({}, e), (this.switchingAccounts = !1);
	}
	handleAccountSwitch() {
		(this.switchingAccounts = !0), this.reset(), this.emitPresenceUpdate(this.getState());
	}
	constructor(e) {
		super(!1), s(this, 'socket', void 0), s(this, 'switchingAccounts', void 0), s(this, 'didCommit', void 0), (this.socket = e), (this.switchingAccounts = !1), (this.didCommit = (0, i.Z)(5, 20000, this.emitPresenceUpdate.bind(this)));
	}
}
