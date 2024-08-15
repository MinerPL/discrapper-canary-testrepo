t.d(n, {
	$d: function () {
		return f;
	},
	BQ: function () {
		return C;
	},
	Wx: function () {
		return _;
	},
	Y$: function () {
		return N;
	},
	jD: function () {
		return h;
	},
	sl: function () {
		return v;
	},
	yJ: function () {
		return E;
	},
	ye: function () {
		return A;
	}
}),
	t(789020);
var i = t(668781),
	a = t(904245),
	l = t(895924),
	o = t(667204),
	r = t(957730),
	s = t(973616),
	c = t(768581),
	d = t(630388),
	u = t(981631),
	m = t(689079),
	p = t(689938);
let _ = { id: m.bi.BUILT_IN };
function C(e) {
	return e.id !== m.bi.BUILT_IN;
}
function f(e) {
	return C(e) ? e.name : p.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_NAME;
}
function h(e) {
	return C(e) ? e.description : p.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_DESCRIPTION;
}
function A(e) {
	var n;
	let { application: t } = e;
	return C(t) && (0, d.yE)(null !== (n = t.flags) && void 0 !== n ? n : 0, u.udG.EMBEDDED);
}
function E(e) {
	return C(e) && A({ application: e })
		? e instanceof s.Z
			? e.embeddedActivityConfig
			: e.embedded_activity_config
		: null;
}
function N(e) {
	let { command: n, optionValues: t, context: s, commandTargetId: c, maxSizeCallback: d, sectionName: u } = e,
		{ channel: m } = s,
		_ = async () => {
			try {
				let i = await (0, o.Z)({
					command: n,
					optionValues: t,
					context: s,
					commandTargetId: c,
					maxSizeCallback: d,
					commandOrigin: l.bB.APPLICATION_LAUNCHER,
					sectionName: u
				});
				if (n.inputType === l.iw.BUILT_IN_TEXT && null != i) {
					var e;
					let n = r.ZP.parse(m, i.content);
					(n.tts = null !== (e = i.tts) && void 0 !== e && e), a.Z.sendMessage(s.channel.id, n);
				}
			} catch (e) {
				throw (
					(i.Z.show({
						title: p.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_TITLE,
						body: p.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_BODY,
						confirmText: p.Z.Messages.RETRY,
						onConfirm: () => _()
					}),
					e)
				);
			}
		};
	return _();
}
function v(e) {
	let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
		{ fakeAppIconURL: t, ...i } = n;
	return C(e)
		? {
				iconURL: c.ZP.getApplicationIconURL({
					...i,
					id: e.id,
					icon: e.icon
				}),
				name: e.name,
				description: e.description
			}
		: {
				iconURL: null != t ? t : null,
				name: p.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_NAME,
				description: p.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_DESCRIPTION
			};
}
