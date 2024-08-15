n.d(t, {
	J: function () {
		return c;
	}
}),
	n(47120);
var r = n(442837),
	l = n(592125),
	u = n(19780),
	i = n(977059),
	a = n(760373);
function c(e) {
	let { channelId: t, location: n } = e,
		{ enabled: c } = i.c.useExperiment({ location: n });
	return (0, r.e7)(
		[u.Z, l.Z],
		() =>
			(function (e, t) {
				var n;
				let [r, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [u.Z, l.Z];
				if (!t || null == e || r.getChannelId() !== e) return !1;
				let c = i.getChannel(e);
				if (null == c || c.isGuildStageVoice()) return !1;
				let o = null === (n = r.getSecureFramesState()) || void 0 === n ? void 0 : n.version;
				return null != o && o > a.HK;
			})(t, c, [u.Z, l.Z]),
		[t, c]
	);
}
