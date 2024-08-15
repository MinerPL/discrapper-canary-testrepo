n.d(t, {
	L: function () {
		return y;
	},
	Z: function () {
		return C;
	}
}),
	n(47120),
	n(653041),
	n(757143),
	n(733860);
var r = n(373793),
	i = n(911969),
	a = n(555573),
	s = n(456007),
	o = n(10718),
	l = n(998698),
	u = n(895924),
	c = n(581364),
	d = n(509716),
	_ = n(826298),
	E = n(592125),
	f = n(430824),
	h = n(594174),
	p = n(91313),
	m = n(53529),
	I = n(925994),
	T = n(436660),
	g = n(887490),
	S = n(42530),
	A = n(981631),
	N = n(665692);
let v = new Set(['applicationCommandOption']),
	O = new Set([i.jw.ATTACHMENT]),
	R = new Set(['line', 'applicationCommand']);
function C(e, t, n, d) {
	let { insertData: E, isInline: f, isVoid: h, onChange: A, deleteBackward: C, deleteForward: U, deleteFragment: w } = e;
	(e.insertData = (n) => {
		if (null != t && g.bN.isEditorEmpty(e) && n.types.includes('application/x-discord-interaction-data')) {
			let e = JSON.parse(n.getData('application/x-discord-interaction-data')),
				{ commandKey: l, interactionOptions: d } = (0, c.XA)(e),
				{ application: _, command: E } = o.Xq(t, l);
			if (null != E) {
				var r, i;
				let e =
					null != _
						? {
								type: u.Qi.APPLICATION,
								id: _.id,
								icon: _.icon,
								name: null !== (i = null === (r = _.bot) || void 0 === r ? void 0 : r.username) && void 0 !== i ? i : _.name,
								application: _
							}
						: null;
				return (
					a.Po({
						channelId: t.id,
						command: E,
						section: e,
						location: u.Vh.PASTE,
						initialValues: (0, s.Dw)(E, null != d ? d : [])
					}),
					null
				);
			}
		}
		return E(n);
	}),
		(e.isInline = (e) => !!v.has(e.type) || f(e)),
		(e.isVoid = (e) => !!('applicationCommandOption' === e.type && O.has(e.optionType)) || h(e)),
		(e.deleteBackward = (t) => {
			M(e, () => C(t));
		}),
		(e.deleteForward = (t) => {
			M(e, () => U(t));
		}),
		(e.deleteFragment = (t) => {
			M(e, () => w(t));
		});
	let x = null,
		G = null,
		k = null,
		B = null,
		F = null;
	return (
		(e.onChange = () => {
			if (null != t) {
				let s = l.Z.getState(t.id),
					c = o.Hf(t);
				if (g.bN.richValue(e) !== x || !g.Ew.equals(e.selection, G) || s.activeCommand !== k || null == F || c.some((e, t) => F[t] !== e)) {
					let l = m.T.withMergedEntry(e, () => {
						var l;
						return (function (e) {
							var t, n;
							let { editor: s, storeCommandState: l, channel: c, canUseCommands: d, canOnlyUseTextCommands: E, commandChanged: f, previousOptionValues: h } = e,
								{ command: m, commandText: A } = b(s),
								v = l.activeCommand;
							if ((!d && (null == v ? void 0 : null === (t = v.integration_types) || void 0 === t ? void 0 : t.includes(r.Y.GUILD_INSTALL))) || (E && (null == v ? void 0 : v.inputType) !== u.iw.BUILT_IN_TEXT && (null == v ? void 0 : v.inputType) !== u.iw.BUILT_IN_INTEGRATION)) return null != m && y(s, c.id, v, !0), null;
							if (null != m) {
								if (g.bN.isEditorEmpty(s) || null == v) return y(s, c.id, v, !1), null;
								let e = ''.concat(N.GI).concat(m.displayName);
								if (null == A || !A.startsWith(e) || (0 === p.cu(s).length && (A.length < e.length + 1 || ' ' !== A[e.length]))) return y(s, c.id, v, !0), null;
							} else {
								if (null != v && f) {
									let e = (function (e, t, n) {
											var r, i, a, s, o;
											let l;
											let { initialValues: u, activeCommand: c } = n;
											if (null == c) return null;
											let d = (null !== (a = null === (r = c.options) || void 0 === r ? void 0 : r.length) && void 0 !== a ? a : 0) > 0 ? p.zb(e, c) : null,
												_ = (0, I.sk)(g.bN.richValue(e), {
													mode: 'raw',
													range: {
														anchor: g.bN.start(e, []),
														focus: null !== (s = null == d ? void 0 : null === (i = d[0]) || void 0 === i ? void 0 : i.keyRange.anchor) && void 0 !== s ? s : g.bN.end(e, [])
													}
												}),
												E = '',
												f = _.toLocaleLowerCase(),
												h = ''.concat(N.GI).concat(c.displayName).toLocaleLowerCase(),
												m = ''.concat(N.GI).concat(c.name).toLocaleLowerCase();
											f.startsWith(h) && f.length > h.length ? (E = _.substring(h.length).trim()) : f.startsWith(m) && f.length > m.length && (E = _.substring(m.length).trim());
											let A = [],
												v = null,
												R = null;
											if (null != c.options) {
												let e = new Set();
												if (null != d)
													for (let r of d) {
														e.add(r.name);
														let i = null !== (o = P(n, t, r.name)) && void 0 !== o ? o : r.text,
															a = {
																type: 'applicationCommandOption',
																optionName: r.name,
																optionDisplayName: r.displayName,
																optionType: r.type,
																children: [{ text: i }]
															};
														A.push(a), 0 === r.text.length && null == v && (v = a);
													}
												for (let r of c.options)
													if (!e.has(r.name) && (r.required || null != u[r.name])) {
														let e, i;
														E.length > 0 && !O.has(r.type) ? ((e = E), (E = '')) : (e = null != (i = P(n, t, r.name)) ? i : '');
														let a = {
															type: 'applicationCommandOption',
															optionName: r.name,
															optionDisplayName: r.displayName,
															optionType: r.type,
															children: [{ text: e }]
														};
														A.push(a), 0 === e.length && null == v && (v = a), null == i && (R = a);
													}
											}
											(l = E.length > 0 ? ''.concat(N.GI).concat(c.displayName, ' ').concat(E.replace(/\r|\n/g, ' ')) : 0 === A.length ? ''.concat(N.GI).concat(c.displayName, ' ') : ''.concat(N.GI).concat(c.displayName)), A.unshift({ text: l });
											let C = {
												type: 'applicationCommand',
												children: A,
												command: {
													id: c.id,
													name: c.name,
													displayName: c.displayName
												}
											};
											g.bN.withoutNormalizing(e, () => {
												for (let [, t] of (T.Q.insertNodes(e, [C], { at: S.YD }), g.bN.blocks(e).reverse()))
													g.C0.isAfter(t, S.YD) &&
														T.Q.removeNodes(e, {
															at: t,
															voids: !0
														});
											});
											let y = null;
											return null != v ? (T.Q.selectCommandOption(e, v.optionName), (y = v.optionName)) : null != R ? (T.Q.selectCommandOption(e, R.optionName, !1), (y = R.optionName)) : T.Q.resetSelectionToEnd(e), null == R && D(e, c), y;
										})(s, c, l),
										t = p.tM(s, v, c.id);
									return (
										L({
											guildId: c.guild_id,
											channelId: c.id,
											command: v,
											activeOption: e,
											currentOptionValues: t,
											previousOptionValues: null,
											validateAll: !0,
											allowEmpty: !0
										}),
										{
											commandId: v.id,
											optionValues: t
										}
									);
								}
								if (null != v && !f)
									return (
										a.Po({
											channelId: c.id,
											command: null,
											section: null
										}),
										null
									);
								let e = g.bN.richValue(s)[0],
									t = e.children[0];
								if (R.has(e.type) && g.LC.isText(t)) {
									let e = (function (e, t) {
										if (!e.startsWith('/')) return null;
										let n = (0, _.hV)(t, e.substring(1));
										if (!n.hasSpaceTerminator) return null;
										let { commands: r, sections: a } = o.VB(t, i.yU.CHAT, n.text);
										if (0 === r.length) return null;
										let s = n.text.trim(),
											l = s + ' ',
											c = r.filter((e) => e.inputType !== u.iw.PLACEHOLDER && (e.displayName === s || e.displayName.startsWith(l)));
										if (1 === c.length && c[0].displayName === s) {
											let e = c[0],
												t = a.find((t) => {
													var n;
													return (null === (n = t.application) || void 0 === n ? void 0 : n.id) === e.applicationId;
												});
											return {
												command: e,
												section: t
											};
										}
										return null;
									})(t.text, c);
									if (null != e)
										return (
											a.Po({
												channelId: c.id,
												command: e.command,
												section: e.section
											}),
											null
										);
								}
							}
							if (null != v && null != m) {
								!(function (e, t) {
									if (null == t.options || 0 === t.options.length) return !1;
									let n = p.zb(e, t);
									return (
										0 !== n.length &&
										(g.bN.withoutNormalizing(e, () => {
											for (let t = n.length - 1; t >= 0; t--) {
												let r = n[t];
												T.Q.textToInline(
													e,
													{
														type: 'applicationCommandOption',
														optionName: r.name,
														optionDisplayName: r.displayName,
														optionType: r.type,
														children: [{ text: r.text }]
													},
													{
														anchor: r.keyRange.anchor,
														focus: r.valueRange.focus
													}
												);
											}
											let t = g.bN.getFirstText(e);
											if (null == t) return !1;
											let r = t.text.trim();
											t.text !== r &&
												T.Q.textToText(e, r, {
													anchor: {
														path: S.u9,
														offset: 0
													},
													focus: {
														path: S.u9,
														offset: t.text.length
													}
												});
										}),
										!0)
									);
								})(s, v) && D(s, v);
								let e = p.tM(s, v, c.id),
									t = g.bN.above(s, {
										match: (e) => g.bN.isInline(s, e) && 'applicationCommandOption' === e.type,
										mode: 'lowest'
									}),
									r = null !== (n = null == t ? void 0 : t[0].optionName) && void 0 !== n ? n : null;
								return (
									L({
										guildId: c.guild_id,
										channelId: c.id,
										command: v,
										activeOption: r,
										currentOptionValues: e,
										previousOptionValues: h,
										validateAll: !1,
										allowEmpty: !1
									}),
									{
										commandId: m.id,
										optionValues: e
									}
								);
							}
							return null;
						})({
							editor: e,
							storeCommandState: s,
							channel: t,
							canUseCommands: n,
							canOnlyUseTextCommands: d,
							commandChanged: (null === (l = s.activeCommand) || void 0 === l ? void 0 : l.id) !== (null == k ? void 0 : k.id),
							previousOptionValues: B
						});
					});
					if (null != l) {
						let t = m.T.currentEntry(e);
						null != t && (t.commandId = l.commandId), (B = l.optionValues);
					} else B = null;
					(x = g.bN.richValue(e)), (G = e.selection), (k = s.activeCommand), (F = c);
				}
			}
			A();
		}),
		e
	);
}
function y(e, t, n, r) {
	let [i] = g.bN.blocks(e)[0],
		s = (r ? (0, I.sg)(i, { mode: 'plain' }).trimEnd() : '').split('\n').map((e) => ({
			type: 'line',
			children: [{ text: e }]
		})),
		o = [s.length - 1];
	for (let [, t] of (T.Q.insertNodes(e, s, { at: S.YD }), g.bN.blocks(e).reverse()))
		g.C0.isAfter(t, o) &&
			T.Q.removeNodes(e, {
				at: t,
				voids: !0
			});
	null != n &&
		a.Po({
			channelId: t,
			command: null,
			section: null
		});
}
function D(e, t) {
	if (null == t.options || 1 !== t.options.length || !0 === t.options[0].required || O.has(t.options[0].type) || p.cu(e).length > 0 || null == p.cr(e)) return !1;
	let n = g.bN.getFirstText(e);
	if (null == n) return !1;
	let r = t.options[0],
		i = {
			path: S.u9,
			offset: t.displayName.length + 2
		},
		a = {
			path: S.u9,
			offset: n.text.length
		};
	return (
		!(!n.text.startsWith(''.concat(N.GI).concat(t.displayName, ' ').toLocaleLowerCase()) || g.Jz.equals(i, a)) &&
		(T.Q.textToInline(
			e,
			{
				type: 'applicationCommandOption',
				optionName: r.name,
				optionDisplayName: r.displayName,
				optionType: r.type,
				children: [{ text: n.text.substring(t.displayName.length + 2) }]
			},
			{
				anchor: i,
				focus: a
			}
		),
		!0)
	);
}
function L(e) {
	let { guildId: t, channelId: n, command: r, activeOption: i, currentOptionValues: s, previousOptionValues: o, validateAll: u, allowEmpty: c } = e;
	if (null == r.options) return !1;
	let _ = u ? null : l.Z.getActiveOptionName(n),
		E = {},
		f = l.Z.getOptionStates(n),
		h = !1;
	for (let e of r.options) {
		var p, m, I;
		let r = f[e.name],
			a = u || (e.name === _ && _ !== i) || ((null == r ? void 0 : null === (p = r.lastValidationResult) || void 0 === p ? void 0 : p.success) === !1 && (null == s ? void 0 : s[e.name]) !== (null == o ? void 0 : o[e.name])),
			l = {
				hasValue: null != s && e.name in s,
				isActive: e.name === i,
				lastValidationResult: a
					? (0, d.f)({
							option: e,
							content: null !== (I = null == s ? void 0 : s[e.name]) && void 0 !== I ? I : null,
							guildId: t,
							channelId: n,
							allowEmptyValues: c
						})
					: null == r
						? void 0
						: r.lastValidationResult
			};
		(null == r || r.hasValue !== l.hasValue || r.isActive !== l.isActive || (a && (null === (m = r.lastValidationResult) || void 0 === m ? void 0 : m.success) === !1)) && ((E[e.name] = l), (h = !0));
	}
	h && a.g7(n, E);
}
function b(e) {
	let t = p.cr(e);
	if (null == t)
		return {
			command: null,
			commandText: null
		};
	let [n] = t,
		r = n.children[0];
	return g.LC.isText(r)
		? {
				command: n.command,
				commandText: r.text
			}
		: {
				command: n.command,
				commandText: null
			};
}
function M(e, t) {
	let n = p.cu(e)[0];
	t();
	let r = g.M8.toPoint(e.selection);
	if (null == r || n === p.cu(e)[0]) return;
	let { command: i, commandText: a } = b(e);
	if (
		!(null == i || null == a || a.endsWith(' ')) &&
		!!g.Jz.equals(r, {
			path: S.u9,
			offset: i.displayName.length + 1
		})
	)
		T.Q.insertText(e, ' ');
}
function P(e, t, n) {
	var r, a, s, o;
	let l = null === (a = e.activeCommand) || void 0 === a ? void 0 : null === (r = a.options) || void 0 === r ? void 0 : r.find((e) => e.name === n),
		u = e.initialValues[n];
	if (null == l || null == u) return null;
	if (null != l.choices) return null === (o = l.choices.find((e) => e.value === u.value)) || void 0 === o ? void 0 : o.displayName;
	let c = null === (s = u.value) || void 0 === s ? void 0 : s.toString();
	return l.type === i.jw.CHANNEL || (l.type === i.jw.MENTIONABLE && null != E.Z.getChannel(c)) ? '<#'.concat(c, '>\t') : l.type === i.jw.USER || (l.type === i.jw.MENTIONABLE && null != h.default.getUser(c)) ? '<@'.concat(c, '>') : l.type === i.jw.ROLE || (l.type === i.jw.MENTIONABLE && null != f.Z.getRole(t.guild_id, null != c ? c : A.lds)) ? '<@&'.concat(c, '>') : c;
}
