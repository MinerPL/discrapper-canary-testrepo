var i = n(442837),
	a = n(314897),
	s = n(131951),
	r = n(979651);
t.Z = (e) =>
	(0, i.cj)([r.Z, s.Z, a.default], () =>
		(function (e) {
			var t;
			let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Z,
				i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.Z,
				l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.default,
				o = null != e ? n.getVoiceState(e.getGuildId(), l.getId()) : null;
			return {
				selfDeaf: i.isSelfDeaf(),
				deaf: null !== (t = null == o ? void 0 : o.deaf) && void 0 !== t && t
			};
		})(e, r.Z, s.Z, a.default)
	);
