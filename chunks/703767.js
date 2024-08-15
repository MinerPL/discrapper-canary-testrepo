n(653041), n(47120);
var r = n(147913),
	i = n(579806),
	a = n(818083),
	s = n(998502);
let o = [0, 0];
function l(e) {
	let t = e.toString(16);
	for (; t.length < 4; ) t = '0' + t;
	return t;
}
function u(e, t, n, r) {
	let i = [],
		s = n.map((e) => e.map(l).join(':')).join(', ');
	for (let e = 0; e < r.length; e++) {
		let t = {};
		(t[r[e]] = '1'),
			i.push({
				id: e + 1,
				label: r[e],
				config: t
			});
	}
	return {
		gpus: n,
		experiment: (0, a.B)({
			kind: 'user',
			id: e,
			label: 'GPU Workarounds: '.concat(t, ' (').concat(s, ')'),
			defaultConfig: {},
			treatments: i
		})
	};
}
function c(e) {
	return [4318, e];
}
let d = [
	u(
		'2024-06_hardware_hevc_nv_gtx_970',
		'NVIDIA hardware HEVC decode on GTX 970',
		[c(5058)],
		['disable_accelerated_hevc_decode']
	),
	u(
		'2024-06_hardware_hevc_nv_maxwell',
		'NVIDIA hardware HEVC decode on Maxwell (except 970)',
		[
			c(4928),
			c(4929),
			c(4932),
			c(4934),
			c(4935),
			c(4936),
			c(4937),
			c(4939),
			c(4941),
			c(4942),
			c(4943),
			c(4986),
			c(4987),
			c(4992),
			c(4993),
			c(4994),
			c(5008),
			c(5009),
			c(5010),
			c(5011),
			c(5016),
			c(5017),
			c(5018),
			c(5019),
			c(5020),
			c(5021),
			c(5040),
			c(5041),
			c(5042),
			c(5043),
			c(5044),
			c(5046),
			c(5049),
			c(5050),
			c(5051),
			c(5052),
			c(5056),
			c(5079),
			c(5080),
			c(5081),
			c(5082),
			c(5104),
			c(5105),
			c(5106),
			c(5107),
			c(5112),
			c(5113),
			c(5114),
			c(5115),
			c(5121),
			c(5126),
			c(5127),
			c(5159),
			c(5655),
			c(5656),
			c(5657),
			c(5658),
			c(5735),
			c(5965),
			c(5966),
			c(6044),
			c(6082),
			c(6088),
			c(6128),
			c(6129),
			c(6141)
		],
		['disable_accelerated_hevc_decode']
	)
];
function _(e) {
	for (let t of e) if (t[0] === o[0] && t[1] === o[1]) return !0;
	return !1;
}
let E = !1;
function f() {
	let e = {};
	for (let t of d)
		if (_(t.gpus)) {
			let n = t.experiment.getCurrentConfig({ location: 'updateFlags' });
			e = {
				...e,
				...n
			};
		}
	s.ZP.setChromiumSwitches(e);
}
class h extends r.Z {
	constructor(...e) {
		var t, n, r;
		super(...e),
			(t = this),
			(n = 'actions'),
			(r = {
				POST_CONNECTION_OPEN: async () => {
					try {
						var e, t, n, r;
						if (
							E ||
							(null === (t = window.DiscordNative) || void 0 === t
								? void 0
								: null === (e = t.gpuSettings) || void 0 === e
									? void 0
									: e.setChromiumSwitches) == null
						)
							return;
						let a = await i.Z.processUtils.getSystemInfo();
						for (let e of null !== (r = null === (n = a.electronGPUInfo) || void 0 === n ? void 0 : n.gpuDevice) &&
						void 0 !== r
							? r
							: [])
							!0 === e.active && (o = [e.vendorId, e.deviceId]);
						for (let e of ((E = !0), d))
							_(e.gpus) && e.experiment.subscribe({ location: 'GPU experiment subscription' }, f);
						f();
					} catch (e) {}
				}
			}),
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
t.Z = new h();
