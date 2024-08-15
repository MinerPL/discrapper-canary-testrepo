n.d(t, {
	ZB: function () {
		return E;
	},
	ZP: function () {
		return C;
	},
	cF: function () {
		return m;
	}
}),
	n(47120),
	n(653041);
var i = n(735250),
	a = n(470079),
	s = n(392711),
	l = n(933546),
	r = n(314897),
	o = n(70956),
	c = n(823379),
	u = n(27457),
	d = n(354459),
	h = n(835894);
let m = 112,
	p = (16 / 9) * m + 8,
	_ = 10 * o.Z.Millis.SECOND;
function f(e) {
	var t;
	let n = r.default.getId();
	return e.type === d.fO.USER && e.user.id === n && (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo);
}
function E(e, t) {
	let [n, i] = a.useState(Date.now());
	a.useEffect(() => {
		let e = setTimeout(() => {
			i(Date.now());
		}, _);
		return () => {
			clearTimeout(e);
		};
	}, [t]);
	let r = a.useRef({}),
		{ visibleParticipants: o, participantTileWidth: u } = a.useMemo(() => {
			let n = Date.now(),
				i = (0, s.sortBy)(t, (e) =>
					(function (e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
						switch (e.type) {
							case d.fO.ACTIVITY:
								return '\0'.concat(e.sortKey);
							case d.fO.HIDDEN_STREAM:
							case d.fO.STREAM:
								return '\x01'.concat((0, l.Z)(e.userNick, e.user));
							case d.fO.USER:
								var n;
								let i = '\x05';
								return (
									e.speaking ? (i = '\x02') : t - e.lastSpoke < _ ? (i = '\x03') : (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfVideo) && (i = '\x04'),
									''
										.concat(i)
										.concat(
											(function (e) {
												let t = String(8640000000000000).length;
												return String(8640000000000000 - e).padStart(t, '0');
											})(e.lastSpoke)
										)
										.concat((0, l.Z)(e.userNick, e.user))
								);
						}
					})(e, n)
				),
				[a, o] = (0, s.partition)(i, d.Io),
				u = a.findIndex(f),
				h = null;
			-1 !== u && ((h = a[u]), a.splice(u, 1));
			let m = null != h ? e - p - 8 : e,
				E = Math.max(0, Math.min(Math.floor((m - 8) / 132), 12, t.length)),
				C = Math.min((m - 8) / E - 8, p),
				g = Math.max(0, E - o.length),
				I = o.slice(0, E),
				x = a.slice(0, g),
				T = Array(g);
			if (g > 0) {
				let e = [];
				for (let t of x) {
					let n = r.current[t.id];
					null != n && n < g ? (T[n] = t) : e.push(t);
				}
				for (let t = 0; t < T.length; t++) {
					if (null != T[t]) continue;
					let n = e.shift();
					if (null == n) break;
					T[t] = n;
				}
			}
			let N = T.filter(c.lm),
				v = (0, s.keyBy)((0, s.range)(N.length), (e) => N[e].id);
			r.current = v;
			let S = [...I, ...N];
			return (
				null != h && S.push(h),
				{
					visibleParticipants: S,
					participantTileWidth: C
				}
			);
		}, [e, t, n]);
	return {
		visibleParticipants: o,
		participantTileWidth: u
	};
}
function C(e) {
	let { participants: t, participantTileWidth: n, selectedParticipantId: a, onDoubleClick: s, onContextMenu: l, onClick: r, channel: o, inCall: c, popoutWindow: d, paused: m = !1 } = e,
		_ = null != d;
	return (0, i.jsx)('div', {
		className: h.root,
		children: t.map((e) => {
			if (null == e) return null;
			let t = f(e);
			return (0, i.jsx)(
				'div',
				{
					className: h.tileSizer,
					style: t ? { flexShrink: 0 } : void 0,
					children: (0, i.jsx)(u.ZP, {
						participant: e,
						selected: a === e.id,
						channel: o,
						className: h.tile,
						fit: u.BP.COVER,
						onClick: r,
						onDoubleClick: s,
						onContextMenu: l,
						width: t ? p : n,
						inCall: c,
						paused: m,
						inPopout: _
					})
				},
				e.id
			);
		})
	});
}
