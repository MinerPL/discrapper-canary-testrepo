n.d(t, {
	sg: function () {
		return I;
	},
	sk: function () {
		return h;
	}
}),
	n(47120),
	n(653041),
	n(757143);
var r = n(512722),
	i = n.n(r),
	a = n(933557),
	s = n(660199),
	o = n(763296),
	l = n(592125),
	u = n(430824),
	c = n(699516),
	d = n(914010),
	_ = n(594174),
	E = n(51144),
	f = n(887490);
function h(e, t) {
	let { mode: n, ignoreTrailingEmptyNodes: r, preventEmojiSurrogates: i } = null != t ? t : {},
		[a, s] = (null == t ? void 0 : t.range) != null ? f.M8.edges(t.range) : [void 0, void 0];
	return p(e, {
		mode: n,
		start: a,
		end: s,
		ignoreTrailingEmptyNodes: r,
		preventEmojiSurrogates: i
	});
}
function p(e, t) {
	var n, r;
	let {
			mode: i,
			start: a,
			end: s,
			separator: o,
			ignoreEmptyNodes: l,
			ignoreTrailingEmptyNodes: u,
			preventEmojiSurrogates: c
		} = null != t ? t : {},
		d = e.length > 0 && !f.LC.isText(e[0]);
	null == o && (o = d ? '\n' : '');
	let _ = null !== (n = null == a ? void 0 : a.path[0]) && void 0 !== n ? n : 0,
		E = null !== (r = null == s ? void 0 : s.path[0]) && void 0 !== r ? r : e.length - 1;
	if (u)
		for (let t = E; t >= _; t--) {
			let n = e[t];
			if (f.LC.isText(n)) {
				if (n.text.length > 0) {
					E = t;
					break;
				}
			} else if (!f.q.isEmpty(n)) {
				E = t;
				break;
			}
			if (t === _) return '';
		}
	let h = _ > 0 && f.aj.isType(e[_ - 1], 'blockQuote'),
		p = f.aj.isType(e[_], 'blockQuote'),
		m = f.aj.isType(e[E], 'blockQuote'),
		T = [];
	for (let t = _; t <= E; t++) {
		let n = e[t];
		if (l && f.LC.isText(n) && 0 === n.text.length) continue;
		let r =
				null != a && t === _
					? {
							path: a.path.slice(1),
							offset: a.offset
						}
					: void 0,
			o =
				null != s && t === E
					? {
							path: s.path.slice(1),
							offset: s.offset
						}
					: void 0,
			u = I(n, {
				mode: i,
				start: r,
				end: o,
				allowBlockQuotePrefix: null == a || null == s || (!h && (!p || m)),
				preventEmojiSurrogates: c
			});
		(!l || u.length > 0) && T.push(u);
	}
	return T.join(o);
}
function I(e, t) {
	let { mode: n, start: r, allowBlockQuotePrefix: h = !1, preventEmojiSurrogates: I = !1 } = null != t ? t : {};
	if (f.LC.isText(e))
		return (function (e, t) {
			var n, r;
			let { start: a, end: s } = null != t ? t : {};
			return (
				i()(null == a || 0 === a.path.length, 'Invalid start provided to serializeText'),
				i()(null == s || 0 === s.path.length, 'Invalid end provided to serializeText'),
				e.substring(
					null !== (n = null == a ? void 0 : a.offset) && void 0 !== n ? n : 0,
					null !== (r = null == s ? void 0 : s.offset) && void 0 !== r ? r : e.length
				)
			);
		})(e.text, t);
	switch (e.type) {
		case 'line':
		case 'testInline':
			return p(e.children, t);
		case 'testInlineVoid':
			return '';
		case 'blockQuote': {
			let n = p(e.children, t),
				i = null != r && 1 === r.path.length && 0 === r.path[0] && 0 === r.offset;
			if (h && (null == r || i)) return '> '.concat(n);
			return n;
		}
		case 'emoji': {
			let t = e.emoji;
			if (!I && null != t.surrogate) return t.surrogate;
			return t.name;
		}
		case 'customEmoji': {
			let t = e.emoji;
			if ('raw' === n) {
				let e = t.animated ? 'a' : '',
					n = t.name.replace(/:/g, '').split('~')[0];
				return '<'.concat(e, ':').concat(n, ':').concat(t.emojiId, '>');
			}
			return t.name;
		}
		case 'textMention':
			return e.name;
		case 'channelMention': {
			let t = '<#'.concat(e.channelId, '>');
			if ('raw' === n) return t;
			let r = l.Z.getChannel(e.channelId);
			if (null == r) return t;
			return (0, a.F6)(r, _.default, c.Z, !0, !0);
		}
		case 'soundboard': {
			let t = '<sound:'.concat(e.soundId, '>');
			if ('raw' === n) return t;
			let r = o.Z.getSoundById(e.soundId);
			if (null == r) return t;
			return r.name;
		}
		case 'staticRouteLink': {
			let t = '<id:'.concat(e.channelId, '>');
			if ('raw' === n) return t;
			let r = l.Z.getChannel(e.channelId);
			if (null == r) return t;
			return (0, a.F6)(r, _.default, c.Z, !0, !0);
		}
		case 'roleMention': {
			let t = '<@&'.concat(e.roleId, '>');
			if ('raw' === n) return t;
			let r = d.Z.getGuildId(),
				i = null != r ? u.Z.getRole(r, e.roleId) : void 0;
			if (null == i) return t;
			return '@'.concat(i.name);
		}
		case 'userMention': {
			let t = '<@'.concat(e.userId, '>');
			if ('raw' === n) return t;
			let r = _.default.getUser(e.userId);
			if (null == r) return t;
			return '@'.concat(E.ZP.getUserTag(r, { decoration: 'never' }));
		}
		case 'commandMention':
			return '</'.concat(e.commandName, ':').concat(e.commandId, '>');
		case 'timestamp':
			return (0, s.He)(e.parsed.timestamp, e.parsed.format);
		case 'applicationCommand':
			return p(e.children, {
				...t,
				separator: ' ',
				ignoreEmptyNodes: !0
			});
		case 'applicationCommandOption': {
			let n = p(e.children, t);
			if (null == r) return ''.concat(e.optionDisplayName, ':').concat(n);
			return n;
		}
	}
}
