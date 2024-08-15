n(47120);
var i = n(735250);
n(470079);
var a = n(481060),
	s = n(570140),
	r = n(536442),
	l = n(810788),
	o = n(592125),
	c = n(131951),
	d = n(944486),
	u = n(556296),
	_ = n(131468),
	E = n(208049),
	h = n(763296),
	m = n(641015),
	I = n(22382),
	g = n(747071),
	p = n(49230),
	T = n(981631),
	S = n(65154);
function f(e, t, n) {
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
class C extends _.Z {
	_initialize() {
		super._initialize(),
			!__OVERLAY__ &&
				s.Z.subscribe('OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST', this._handleOverlaySoundboardSoundsFetchRequest);
	}
	_terminate() {
		super._terminate(),
			!__OVERLAY__ &&
				s.Z.unsubscribe('OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST', this._handleOverlaySoundboardSoundsFetchRequest);
	}
	constructor(...e) {
		var t;
		super(...e),
			(t = this),
			f(this, 'playingSoundsWeb', new Map()),
			f(this, '_stopAndClearSounds', () => {
				c.Z.supports(S.AN.SAMPLE_PLAYBACK) &&
					c.Z.getMediaEngine().eachConnection((e) => {
						e.stopAllSamplesLocalPlayback();
					}),
					this.playingSoundsWeb.forEach((e) => {
						e.pause(), (e.src = '');
					}),
					(this.playingSoundsWeb = new Map());
			}),
			f(this, '_playSound', async function (e) {
				let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
					i = arguments.length > 2 ? arguments[2] : void 0,
					a = arguments.length > 3 ? arguments[3] : void 0,
					s = null != a && d.Z.getVoiceChannelId() === a;
				if ((null == a || s) && !c.Z.isDeaf() && !h.Z.isLocalSoundboardMuted(i))
					try {
						let a = {
							soundKey: ''.concat(i, '-').concat(e),
							soundURL: (0, I.Z)(e),
							soundVolume: (0, g.Z)(n),
							reportSoundStartedPlaying: () => (0, E.xR)(e, i)
						};
						c.Z.supports(S.AN.SAMPLE_PLAYBACK) ? await (0, p.$)(a) : await (0, p.h)(a, t.playingSoundsWeb);
					} finally {
						(0, E.R)(e, i);
					}
			}),
			f(this, '_handleOverlaySoundboardSoundsFetchRequest', () => {
				(0, E.w)();
			}),
			f(this, '_handleOpenEducationModal', (e, t) => {
				if (null == e) return;
				let s = o.Z.getChannel(t),
					c = u.Z.getKeybindForAction(T.kg4.SOUNDBOARD_HOLD);
				null != s &&
					(0, m.Z)(s) &&
					null != c &&
					l.Z.hasHotspot(r.v6.SOUNDBOARD_WHEEL_EDUCATION_MODAL) &&
					(0, a.openModalLazy)(async () => {
						let { default: t } = await n.e('69208').then(n.bind(n, 490166));
						return (n) =>
							(0, i.jsx)(t, {
								...n,
								guildId: e,
								keybind: c,
								channel: s
							});
					});
			});
	}
}
t.Z = new C();
