n.d(t, {
	Z: function () {
		return m;
	},
	y: function () {
		return r;
	}
}),
	n(47120);
var r,
	i,
	a,
	s,
	o,
	l,
	u = n(392711),
	c = n.n(u),
	d = n(47770),
	_ = n(710845),
	E = n(70956),
	f = n(65154);
function h(e, t, n) {
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
let p = 10 * E.Z.Millis.SECOND,
	I = 10 * E.Z.Millis.SECOND;
((s = r || (r = {})).RequestedSSRCsUpdate = 'requested-ssrcs-update'),
	(s.RequestedStreamsUpdate = 'requested-streams-update'),
	((o = i || (i = {}))[(o.Ready = 0)] = 'Ready'),
	(o[(o.Pending = 1)] = 'Pending'),
	(o[(o.PendingSeamless = 2)] = 'PendingSeamless'),
	(o[(o.Finalizing = 3)] = 'Finalizing'),
	((l = a || (a = {}))[(l.None = 0)] = 'None'),
	(l[(l.Low = 60)] = 'Low'),
	(l[(l.High = 100)] = 'High');
class m extends d.Z {
	setUserID(e) {
		this.userId = e;
	}
	updateAudioAndVideoStreamInfo(e, t) {
		if (((this.audioSSRC = e), (this.videoStreams = t), this.videoStreams.length > 1)) {
			var n, r, i, a;
			let e =
					null !==
						(i = null === (n = c().minBy(this.videoStreams, (e) => e.quality)) || void 0 === n ? void 0 : n.ssrc) &&
					void 0 !== i
						? i
						: 0,
				t =
					null !==
						(a = null === (r = c().maxBy(this.videoStreams, (e) => e.quality)) || void 0 === r ? void 0 : r.ssrc) &&
					void 0 !== a
						? a
						: 0;
			(e !== this.lqSSRC || t !== this.hqSSRC) && ((this.lqSSRC = e), (this.hqSSRC = t), this.reset(), this.update());
		} else this.update();
	}
	setGoLiveStreamDowngraded(e) {
		if (
			!(!this.senderSupportsSimulcast() || this.isOneToOneCall()) &&
			this.debugQualityOverride === f.Z.NO_OVERRIDE &&
			e !== this.downgraded
		)
			this.isDowngradeChangeAllowed(e) &&
				((this.downgraded = e), (this.lastDowngradeChangeTime = Date.now()), this.update());
	}
	isDowngraded() {
		return this.downgraded;
	}
	setSimulcastDebugOverride(e) {
		if (!!this.senderSupportsSimulcast() && e !== this.debugQualityOverride)
			(this.debugQualityOverride = e), this.update();
	}
	setFirstFrameReceived(e) {
		if (!!this.senderSupportsSimulcast()) {
			if (1 !== this.switchState && 2 !== this.switchState) {
				this.logger.warn(
					'Received the first frame of ssrc '.concat(e, ' while switchState is ').concat(this.switchState)
				);
				return;
			}
			this.pendingSSRC === e
				? ((this.pendingSSRC = -1),
					2 === this.switchState
						? ((this.switchState = 3), (this.currentSSRC = e), this.update())
						: ((this.currentSSRC = e), (this.switchState = 0)))
				: this.logger.warn(
						'Pending to switch to ssrc: '
							.concat(this.pendingSSRC, ' but received the first frame of ')
							.concat(e, ', noop')
					);
		}
	}
	setThrottleStreamDowngradeChanges(e) {
		this.throttleDowngradeChanges = e;
	}
	senderSupportsSimulcast() {
		return this.videoStreams.length > 1;
	}
	onClientConnect(e) {
		e.forEach((e) => this.otherUsers.add(e));
	}
	onClientDisconnect(e) {
		this.otherUsers.delete(e), this.isOneToOneCall() && this.downgraded && this.update();
	}
	onIncomingVideoEnabled(e) {
		this.incomingVideoEnabled !== e && ((this.incomingVideoEnabled = e), this.update());
	}
	update() {
		if (void 0 !== this.userId && null !== this.userId)
			this.senderSupportsSimulcast()
				? this.supportsSeamless
					? this.seamlessUpdate()
					: this.directUpdate()
				: this.singleCastUpdate();
	}
	seamlessUpdate() {
		let e = this.getQuality();
		if (0 === e && this.isReceiving()) {
			this.reset(), this.stopStreams();
			return;
		}
		switch (this.switchState) {
			case 0:
				this.isReceiving() && this.receivingLQ() && 100 === e
					? ((this.pendingSSRC = 100 === e ? this.hqSSRC : this.lqSSRC), (this.switchState = 2), this.requestBoth())
					: ((this.pendingSSRC = 100 === e ? this.hqSSRC : this.lqSSRC),
						(this.switchState = 1),
						100 === e ? this.requestHQ() : this.requestLQ());
				break;
			case 2:
				60 === e && this.pendingHQ()
					? ((this.switchState = 0), (this.pendingSSRC = -1), this.requestLQ())
					: 100 === e && this.pendingLQ() && ((this.switchState = 0), (this.pendingSSRC = -1), this.requestHQ());
				break;
			case 1:
				60 === e && this.pendingHQ()
					? ((this.pendingSSRC = this.lqSSRC), this.requestLQ())
					: 100 === e && this.pendingLQ() && ((this.pendingSSRC = this.hqSSRC), this.requestHQ());
				break;
			case 3:
				100 === e ? this.requestHQ() : 60 === e && this.requestLQ(), (this.switchState = 0);
		}
	}
	directUpdate() {
		let e = this.getQuality();
		if (null !== e) {
			if (0 === e && this.isReceiving()) {
				this.reset(), this.stopStreams();
				return;
			}
			0 === this.switchState
				? ((this.switchState = 1),
					60 === e
						? ((this.pendingSSRC = this.lqSSRC), this.requestLQ())
						: ((this.pendingSSRC = this.hqSSRC), this.requestHQ()))
				: 1 === this.switchState
					? 60 === e && this.pendingHQ()
						? this.requestLQ()
						: 100 === e && this.pendingLQ()
							? this.requestHQ()
							: (this.switchState = 0)
					: this.logger.warn('Seamless switch is not supported but current switchState is '.concat(this.switchState));
		}
	}
	singleCastUpdate() {
		this.incomingVideoEnabled ? this.requestDefaultStream() : this.stopDefaultStream();
	}
	pendingHQ() {
		return 1 === this.switchState && this.pendingSSRC === this.hqSSRC;
	}
	pendingLQ() {
		return 1 === this.switchState && this.pendingSSRC === this.lqSSRC;
	}
	receivingHQ() {
		return this.currentSSRC === this.hqSSRC;
	}
	receivingLQ() {
		return this.currentSSRC === this.lqSSRC;
	}
	isReceiving() {
		return -1 !== this.currentSSRC;
	}
	isDowngradeChangeAllowed(e) {
		return (
			!this.throttleDowngradeChanges ||
			void 0 === this.lastDowngradeChangeTime ||
			(e ? Date.now() - this.lastDowngradeChangeTime >= I : Date.now() - this.lastDowngradeChangeTime >= p)
		);
	}
	isOneToOneCall() {
		return 1 === this.otherUsers.size;
	}
	reset() {
		(this.pendingSSRC = -1), (this.currentSSRC = -1), (this.lastDowngradeChangeTime = void 0), (this.switchState = 0);
	}
	request(e, t) {
		void 0 !== this.userId &&
			(this.emit('requested-ssrcs-update', this.userId, this.audioSSRC, t), this.emit('requested-streams-update', e));
	}
	requestDefaultStream() {
		let e = {};
		e[this.videoStreams[0].ssrc] = 100;
		let t = [this.videoStreams[0].ssrc];
		this.request(e, t);
	}
	stopDefaultStream() {
		let e = {};
		e[this.videoStreams[0].ssrc] = 0;
		this.request(e, []);
	}
	requestBoth() {
		let e = {};
		(e[this.lqSSRC] = 60), (e[this.hqSSRC] = 100);
		let t = [this.lqSSRC, this.hqSSRC];
		this.request(e, t),
			setTimeout(() => {
				2 === this.switchState && (this.reset(), this.update());
			}, 2000);
	}
	requestHQ() {
		let e = {};
		(e[this.lqSSRC] = 0), (e[this.hqSSRC] = 100);
		let t = [this.hqSSRC];
		this.request(e, t);
	}
	requestLQ() {
		let e = {};
		(e[this.lqSSRC] = 60), (e[this.hqSSRC] = 0);
		let t = [this.lqSSRC];
		this.request(e, t);
	}
	stopStreams() {
		let e = {};
		(e[this.lqSSRC] = 0), (e[this.hqSSRC] = 0);
		this.request(e, []);
	}
	getQuality() {
		let e = c().minBy(this.videoStreams, (e) => e.quality),
			t = c().maxBy(this.videoStreams, (e) => e.quality);
		if (void 0 === e || void 0 === t) return 0;
		if (!this.incomingVideoEnabled) return 0;
		if (this.debugQualityOverride === f.Z.LOW) return 60;
		if (this.debugQualityOverride === f.Z.HIGH || this.isOneToOneCall()) return 100;
		else if (this.downgraded) return 60;
		else return 100;
	}
	constructor(e) {
		super(),
			h(this, 'supportsSeamless', void 0),
			h(this, 'logger', void 0),
			h(this, 'userId', void 0),
			h(this, 'videoStreams', void 0),
			h(this, 'audioSSRC', void 0),
			h(this, 'hqSSRC', void 0),
			h(this, 'lqSSRC', void 0),
			h(this, 'switchState', void 0),
			h(this, 'pendingSSRC', void 0),
			h(this, 'currentSSRC', void 0),
			h(this, 'downgraded', void 0),
			h(this, 'throttleDowngradeChanges', void 0),
			h(this, 'lastDowngradeChangeTime', void 0),
			h(this, 'otherUsers', void 0),
			h(this, 'debugQualityOverride', void 0),
			h(this, 'incomingVideoEnabled', void 0),
			(this.supportsSeamless = e),
			(this.videoStreams = []),
			(this.audioSSRC = 0),
			(this.hqSSRC = 0),
			(this.lqSSRC = 0),
			(this.switchState = 0),
			(this.pendingSSRC = -1),
			(this.currentSSRC = -1),
			(this.downgraded = !1),
			(this.throttleDowngradeChanges = !0),
			(this.lastDowngradeChangeTime = void 0),
			(this.otherUsers = new Set()),
			(this.debugQualityOverride = f.Z.NO_OVERRIDE),
			(this.incomingVideoEnabled = !0),
			(this.logger = new _.Z('GoLiveQualityManager'));
	}
}
