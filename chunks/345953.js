n(47120);
var r = n(392711),
	i = n.n(r),
	a = n(51407),
	s = n(524437),
	o = n(433517),
	l = n(147913),
	u = n(254238),
	c = n(258609),
	d = n(763296),
	_ = n(314897),
	E = n(131951),
	f = n(709054),
	h = n(725380),
	p = n(340332),
	I = n(675478),
	m = n(65154);
let T = (e) => 'AudioContextSettingsMigrated:'.concat(e),
	g = (e) => (e === m.Yn.STREAM ? a.h.STREAM : a.h.USER);
function S() {
	o.K.get(T(_.default.getId())) ||
		I.hW.updateAsync(
			'audioContextSettings',
			(e) => {
				let t = !1;
				for (let [n, r] of Object.entries(E.Z.getState().settingsByContext)) {
					let i = (0, p.z)(n);
					if (null == i) continue;
					let a = e[i],
						s = String(Date.now()),
						o = {};
					for (let [e, t] of Object.entries(r.localMutes))
						o[e] = {
							muted: t,
							volume: g(n),
							modifiedAt: s,
							soundboardMuted: !1
						};
					for (let [e, t] of Object.entries(r.localVolumes))
						o[e] = {
							muted: !1,
							modifiedAt: s,
							...o[e],
							volume: (0, p.r)(t, n)
						};
					let l = Object.keys(a).length;
					for (let [e, [n, r]] of Object.entries(o).entries()) {
						if (300 - l - (e + 1) <= 0) break;
						null == a[n] && ((t = !0), (a[n] = r));
					}
				}
				return o.K.set(T(_.default.getId()), !0), t;
			},
			I.fy.AUTOMATED
		);
}
let A = i().debounce(() => {
		v();
	}, 2000),
	N = i().debounce(u.On, 500, { maxWait: 500 });
function v() {
	I.hW.updateAsync(
		'audioContextSettings',
		(e) => {
			let t = !1;
			return (
				(0, h.$E)((n, r, i) => {
					let a = (function (e, t, n, r) {
						var i, a, o, l, u;
						let c = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
							d = (0, p.z)(n);
						if (null == d) return !1;
						let _ = e[d];
						if (
							((_[t] =
								null !== (i = _[t]) && void 0 !== i
									? i
									: ((a = n),
										s.JY.create({
											muted: !1,
											volume: g(a)
										}))),
							r(_[t]),
							(_[t].modifiedAt = String(Date.now())),
							c)
						) {
							(o = _), (l = t), (u = n), o[l].volume !== g(u) || o[l].muted || o[l].soundboardMuted || delete o[l];
						}
						return (
							!(function (e) {
								let t = f.default.entries(e),
									n = t.length;
								if (n <= 300) return;
								let r = t.sort((e, t) => {
										let [n, { modifiedAt: r }] = e,
											[i, { modifiedAt: a }] = t;
										return Number(r) - Number(a);
									}),
									i = n - 300;
								for (let t = 0; t < i; t++) {
									let [n] = r[t];
									delete e[n];
								}
							})(_),
							!0
						);
					})(e, r, n, (e) => {
						Object.assign(e, i);
					});
					t = t || a;
				}),
				t
			);
		},
		I.fy.INFREQUENT_USER_ACTION
	);
}
function O(e) {
	var t, n, r;
	let { context: i, userId: a, volume: s } = e;
	if (a === _.default.getId()) return;
	let o = c.Z.getRemoteSessionId();
	null != o &&
		N(o, a, i, {
			muted: E.Z.isLocalMute(a, i),
			volume: s
		}),
		(t = i),
		(n = a),
		(r = s),
		(0, h.RF)(t, n, { volume: r }),
		A();
}
function R(e) {
	let { context: t, userId: n } = e;
	if (n !== _.default.getId()) {
		var r, i, a;
		(r = t), (i = n), (a = E.Z.isLocalMute(n, t)), (0, h.RF)(r, i, { muted: a }), A.cancel(), v();
	}
}
function C(e) {
	let { context: t, userId: n } = e;
	if (n !== _.default.getId()) {
		var r, i, a;
		(r = t), (i = n), (a = d.Z.isLocalSoundboardMuted(n)), (0, h.RF)(r, i, { soundboardMuted: a }), A.cancel(), v();
	}
}
class y extends l.Z {
	constructor(...e) {
		var t, n, r;
		super(...e),
			(t = this),
			(n = 'actions'),
			(r = {
				POST_CONNECTION_OPEN: S,
				AUDIO_SET_LOCAL_VOLUME: O,
				AUDIO_TOGGLE_LOCAL_MUTE: R,
				AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: C
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
t.Z = new y();
