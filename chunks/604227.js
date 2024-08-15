t.d(s, {
	Z: function () {
		return E;
	}
}),
	t(47120),
	t(757143),
	t(653041);
var n = t(735250);
t(470079);
var a = t(525654),
	i = t.n(a),
	r = t(481060),
	o = t(579806),
	l = t(304761),
	c = t(90273),
	d = t(689938),
	_ = t(844185);
function E() {
	var e, s, t, a, E, u;
	let I = window.GLOBAL_ENV.RELEASE_CHANNEL,
		T = '318833',
		S = ((e = 'd1dcdc31379c3e2f78d0f9e04ec348a61ab80603'), e.substring(0, 7)),
		N = null === o.Z || void 0 === o.Z ? void 0 : o.Z.remoteApp.getVersion(),
		C =
			null === o.Z || void 0 === o.Z
				? void 0
				: null === (s = (t = o.Z.remoteApp).getBuildNumber) || void 0 === s
					? void 0
					: s.call(t),
		m =
			null === o.Z || void 0 === o.Z
				? void 0
				: null === (a = (E = o.Z.remoteApp).getAppArch) || void 0 === a
					? void 0
					: a.call(E),
		A = null === (u = l.C.getCurrentBuildOverride().overrides) || void 0 === u ? void 0 : u.discord_web,
		O = (function () {
			var e;
			let s = null === i() || void 0 === i() ? void 0 : null === (e = i().os) || void 0 === e ? void 0 : e.toString();
			if (null == s || null == o.Z) return null;
			let t = o.Z.os.release,
				[n, a, r] = t.split('.').map((e) => parseInt(e, 10));
			return (
				s.includes('Windows 10') && void 0 !== r && r >= 22000 && (s = s.replace('Windows 10', 'Windows 11')),
				s.includes('OS X 10.15.7') && void 0 !== n && n >= 20 && (s = 'macOS '.concat(n - 9)),
				''.concat(s, ' (').concat(t, ')')
			);
		})(),
		g = [I, T, '('.concat(S, ')')];
	return (
		null != N &&
			(g.push('Host '.concat(N)), null != m && g.push(m.toLowerCase()), null != C && g.push('('.concat(C, ')'))),
		g.push('Build Override: '.concat(null != A ? A.id : 'N/A')),
		null != O && g.push(O),
		(0, n.jsx)(c.o, {
			copyValue: g.join(' '),
			disableCopy: !1,
			copyTooltip: d.Z.Messages.COPY_VERSION,
			showCopyIcon: !1,
			children: (0, n.jsxs)('div', {
				className: _.info,
				children: [
					(0, n.jsxs)(r.Text, {
						tag: 'span',
						className: _.line,
						variant: 'text-xs/normal',
						color: 'text-muted',
						children: [
							I,
							' ',
							T,
							' ',
							(0, n.jsxs)('span', {
								className: _.versionHash,
								children: ['(', S, ')']
							})
						]
					}),
					' ',
					null != N
						? (0, n.jsxs)(n.Fragment, {
								children: [
									(0, n.jsxs)(r.Text, {
										tag: 'span',
										className: _.line,
										variant: 'text-xs/normal',
										color: 'text-muted',
										children: [
											'Host ',
											N,
											' ',
											null != m
												? (0, n.jsxs)('span', {
														className: _.appArch,
														children: [m.toLowerCase(), ' ']
													})
												: null,
											null != C
												? (0, n.jsxs)('span', {
														children: ['(', C, ')']
													})
												: null
										]
									}),
									' '
								]
							})
						: null,
					null != O
						? (0, n.jsx)(r.Text, {
								tag: 'span',
								className: _.line,
								variant: 'text-xs/normal',
								color: 'text-muted',
								children: O
							})
						: null
				]
			})
		})
	);
}
