var r = n(911969),
	i = n(465343),
	a = n(706454),
	s = n(117530),
	o = n(174212),
	l = n(456007),
	u = n(581364),
	c = n(689079),
	d = n(689938);
let _ = {
		[r.jw.SUB_COMMAND]: () => ({ success: !1 }),
		[r.jw.SUB_COMMAND_GROUP]: () => ({ success: !1 }),
		[r.jw.STRING]: (e, t, n) => {
			var i, a, s;
			let l =
				null ===
					(i = (function (e) {
						switch (e.type) {
							case 'emoji':
								return e.surrogate;
							case 'text':
								return e.text;
						}
					})(e)) || void 0 === i
					? void 0
					: i.trim();
			if (t.autocomplete) {
				let e = o.Z.getAutocompleteLastChoices(n, t.name);
				null != e &&
					(l = String(
						null !== (s = null === (a = e.find((e) => e.name === l)) || void 0 === a ? void 0 : a.value) && void 0 !== s
							? s
							: l
					));
			}
			return null == t.choices || (null != l && t.choices.map((e) => e.displayName).includes(l))
				? t.type === r.jw.STRING && (void 0 !== t.minLength || void 0 !== t.maxLength)
					? void 0 !== l
						? (function (e, t, n) {
								if (
									(void 0 !== t.minLength && e.length < t.minLength) ||
									(void 0 !== t.maxLength && e.length > t.maxLength)
								) {
									if (void 0 !== t.maxLength && void 0 !== t.minLength && t.minLength === t.maxLength)
										return {
											success: !1,
											error: n.exactRangeErrorMessage.format({ value: h(t.minLength) })
										};
									if (void 0 !== t.maxLength && void 0 !== t.minLength)
										return {
											success: !1,
											error: n.rangeErrorMessage.format({
												minimum: h(t.minLength),
												maximum: h(t.maxLength)
											})
										};
									else if (void 0 !== t.minLength)
										return {
											success: !1,
											error: n.minErrorMessage.format({ minimum: h(t.minLength) })
										};
									else if (void 0 !== t.maxLength)
										return {
											success: !1,
											error: n.maxErrorMessage.format({ maximum: h(t.maxLength) })
										};
								}
								return { success: !0 };
							})(l, t, {
								exactRangeErrorMessage: d.Z.Messages.COMMAND_VALIDATION_STRING_EXACT_RANGE_ERROR,
								rangeErrorMessage: d.Z.Messages.COMMAND_VALIDATION_STRING_RANGE_ERROR,
								minErrorMessage: d.Z.Messages.COMMAND_VALIDATION_STRING_MINIMUM_ERROR,
								maxErrorMessage: d.Z.Messages.COMMAND_VALIDATION_STRING_MAXIMUM_ERROR
							})
						: { success: !0 }
					: { success: !0 }
				: { success: !1 };
		},
		[r.jw.BOOLEAN]: (e) => {
			if ('text' !== e.type) return { success: !1 };
			let t = e.text.trim();
			return { success: c.ak.map((e) => e.displayName.toLowerCase()).includes(t.toLowerCase()) };
		},
		[r.jw.INTEGER]: (e, t, n) => {
			if ('text' !== e.type || t.type !== r.jw.INTEGER) return { success: !1 };
			let i = e.text.trim();
			if (0 === i.length) return { success: !1 };
			if (null != t.choices) return t.choices.map((e) => e.displayName).includes(i) ? { success: !0 } : { success: !1 };
			let s = o.Z.getAutocompleteLastChoices(n, t.name);
			if (null != s && s.map((e) => e.displayName).includes(i)) return { success: !0 };
			let u = Number(l.AS(a.default.locale, i));
			return !isNaN(u) && Number.isInteger(u) && Number.isSafeInteger(u)
				? f(
						u,
						t,
						d.Z.Messages.COMMAND_VALIDATION_NUMBER_RANGE_ERROR,
						d.Z.Messages.COMMAND_VALIDATION_NUMBER_MINIMUM_ERROR,
						d.Z.Messages.COMMAND_VALIDATION_NUMBER_MAXIMUM_ERROR
					)
				: { success: !1 };
		},
		[r.jw.NUMBER]: (e, t, n) => {
			if ('text' !== e.type || t.type !== r.jw.NUMBER) return { success: !1 };
			let i = e.text.trim();
			if (0 === i.length) return { success: !1 };
			if (null != t.choices) return t.choices.map((e) => e.displayName).includes(i) ? { success: !0 } : { success: !1 };
			let s = o.Z.getAutocompleteLastChoices(n, t.name);
			if (null != s && s.map((e) => e.displayName).includes(i)) return { success: !0 };
			let u = Number(l.AS(a.default.locale, i));
			return isNaN(u) || u > Number.MAX_SAFE_INTEGER || u < Number.MIN_SAFE_INTEGER
				? { success: !1 }
				: f(
						u,
						t,
						d.Z.Messages.COMMAND_VALIDATION_NUMBER_RANGE_ERROR,
						d.Z.Messages.COMMAND_VALIDATION_NUMBER_MINIMUM_ERROR,
						d.Z.Messages.COMMAND_VALIDATION_NUMBER_MAXIMUM_ERROR
					);
		},
		[r.jw.USER]: (e, t, n, r) => {
			if ('text' !== e.type) return { success: 'userMention' === e.type };
			{
				if ((0, u.BH)(e.text)) return { success: !0 };
				let t = (0, i.K)(e.text, r, n, { allowRoles: !1 });
				return { success: (null == t ? void 0 : t.type) === 'userMention' };
			}
		},
		[r.jw.CHANNEL]: (e, t, n, r) => {
			if ('text' !== e.type) return { success: 'channelMention' === e.type };
			{
				if ((0, u.BH)(e.text)) return { success: !0 };
				let t = (0, i.K)(e.text, r, n);
				return { success: (null == t ? void 0 : t.type) === 'channelMention' };
			}
		},
		[r.jw.ROLE]: (e, t, n, r) => {
			if ('text' !== e.type) return { success: E(e) };
			{
				if ((0, u.BH)(e.text)) return { success: !0 };
				let t = (0, i.K)(e.text, r, n, { allowUsers: !1 });
				return { success: (null == t ? void 0 : t.type) === 'roleMention' };
			}
		},
		[r.jw.MENTIONABLE]: (e, t, n, r) => {
			if ('text' !== e.type) return { success: 'userMention' === e.type || E(e) };
			{
				if ((0, u.BH)(e.text)) return { success: !0 };
				let t = (0, i.K)(e.text, r, n);
				return { success: null != t && ('userMention' === t.type || E(t)) };
			}
		},
		[r.jw.ATTACHMENT]: (e, t, n, r, i) => {
			if ('text' !== e.type) return { success: !1 };
			let a = s.Z.getUpload(n, t.name, (0, u.D7)(i));
			return { success: null != a && a.filename === e.text };
		}
	},
	E = (e) => 'roleMention' === e.type || ('textMention' === e.type && '@everyone' === e.text);
function f(e, t, n, r, i) {
	if ((null != t.minValue && e < t.minValue) || (null != t.maxValue && e > t.maxValue)) {
		if (null != t.maxValue && null != t.minValue)
			return {
				success: !1,
				error: n.format({
					minimum: h(t.minValue),
					maximum: h(t.maxValue)
				})
			};
		if (null != t.minValue)
			return {
				success: !1,
				error: r.format({ minimum: h(t.minValue) })
			};
		else if (null != t.maxValue)
			return {
				success: !1,
				error: i.format({ maximum: h(t.maxValue) })
			};
	}
	return { success: !0 };
}
function h(e) {
	return e.toLocaleString(d.Z.getLocale(), { useGrouping: !1 });
}
t.Z = _;
