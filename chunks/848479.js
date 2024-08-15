n(724458);
var r = n(259443),
	i = n(579806),
	a = n(77450),
	s = n(998502);
let o = new r.Y('ProcessUtilsElectron');
class l extends a.h {
	setupReportingTimer() {
		var e, t;
		let n = null === i.Z || void 0 === i.Z ? void 0 : null === (e = i.Z.processUtils) || void 0 === e ? void 0 : e.setMemoryInformation;
		if (null == n) {
			o.log('setMemoryInformation not available.');
			return;
		}
		(null === (t = performance.memory) || void 0 === t ? void 0 : t.usedJSHeapSize) == null && o.error('usedJSHeapSize is not available.');
		setInterval(() => {
			var e, t, r;
			let i = null !== (t = null === (e = performance.memory) || void 0 === e ? void 0 : e.usedJSHeapSize) && void 0 !== t ? t : 0;
			n({
				memoryUsageKB: null !== (r = this.lastMemoryUsageKB) && void 0 !== r ? r : 0,
				usedJSHeapSizeKB: Math.ceil(i / 1024)
			});
		}, 10000);
	}
	getProcessUptime() {
		var e, t;
		return null === i.Z || void 0 === i.Z ? void 0 : null === (t = i.Z.processUtils) || void 0 === t ? void 0 : null === (e = t.getProcessUptime) || void 0 === e ? void 0 : e.call(t);
	}
	getCurrentCPUUsagePercent() {
		var e, t;
		return null === i.Z || void 0 === i.Z ? void 0 : null === (t = i.Z.processUtils) || void 0 === t ? void 0 : null === (e = t.getCurrentCPUUsagePercent) || void 0 === e ? void 0 : e.call(t);
	}
	getCumulativeCPUUsage() {
		var e, t;
		return null === i.Z || void 0 === i.Z ? void 0 : null === (t = i.Z.processUtils) || void 0 === t ? void 0 : null === (e = t.getCumulativeCPUUsage) || void 0 === e ? void 0 : e.call(t);
	}
	getCurrentMemoryUsageKB() {
		let e = l.getCurrentMemoryUsageKBCore();
		return (this.lastMemoryUsageKB = e), e;
	}
	static getCurrentMemoryUsageKBCore() {
		try {
			let e = s.ZP.getDiscordMemoryUsage();
			if (null == e) return 0;
			let t = Object.values(e).reduce((e, t) => e + t, 0);
			return Math.ceil(t / 1024);
		} catch (e) {
			return 0;
		}
	}
	getMemoryUsageDetails() {
		return s.ZP.getDiscordMemoryUsage();
	}
	getMemoryUsageElectronRenderer() {
		try {
			return s.ZP.getDiscordMemoryUsageElectronRenderer();
		} catch (e) {
			return null;
		}
	}
	getMemoryUsageElectronRendererUsedHeapSize() {
		var e, t;
		return null === i.Z || void 0 === i.Z ? void 0 : null === (t = i.Z.processUtils) || void 0 === t ? void 0 : null === (e = t.getUsedHeapSize) || void 0 === e ? void 0 : e.call(t);
	}
	constructor() {
		var e, t, n, r, a;
		super(),
			(n = this),
			(a = void 0),
			(r = 'lastMemoryUsageKB') in n
				? Object.defineProperty(n, r, {
						value: a,
						enumerable: !0,
						configurable: !0,
						writable: !0
					})
				: (n[r] = a),
			(this.cpuCoreCount = null === i.Z || void 0 === i.Z ? void 0 : null === (t = i.Z.processUtils) || void 0 === t ? void 0 : null === (e = t.getCPUCoreCount) || void 0 === e ? void 0 : e.call(t)),
			this.setupReportingTimer();
	}
}
t.Z = new l();
