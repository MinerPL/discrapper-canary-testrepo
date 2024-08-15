var a = t(735250);
t(470079);
var s = t(442837),
	i = t(481060),
	l = t(700582),
	r = t(987209),
	o = t(699516),
	d = t(594174),
	u = t(51144),
	c = t(335131),
	E = t(689938);
n.Z = (e) => {
	let { selectedSkuId: n, className: t } = e,
		f = (0, s.Wu)([o.Z], () => o.Z.getFriendIDs()),
		h = (0, s.Wu)([d.default], () => d.default.filter((e) => f.includes(e.id) && !e.bot), [f]),
		{
			giftRecipient: m,
			setGiftRecipient: v,
			giftRecipientError: C,
			setGiftRecipientError: p,
			setValidatingGiftRecipient: x
		} = (0, r.wD)();
	if (null == n) return null;
	let I = async (e) => {
		x(!0),
			null != C && p(),
			v(e),
			!(await (0, c.B1)(e.id, n)) && p(E.Z.Messages.COLLECTIBLES_GIFT_SEND_ERROR_OWNED),
			x(!1);
	};
	return (0, a.jsxs)('div', {
		className: t,
		children: [
			(0, a.jsx)(i.FormTitle, { children: E.Z.Messages.FORM_LABEL_SEND_TO }),
			(0, a.jsx)(i.SearchableSelect, {
				placeholder: E.Z.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER,
				renderOptionPrefix: (e) =>
					(null == e ? void 0 : e.value) == null
						? null
						: (0, a.jsx)(l.Z, {
								user: e.value,
								size: i.AvatarSizes.SIZE_20
							}),
				value: m,
				onChange: I,
				options: h.map((e) => ({
					value: e,
					label: ''.concat(u.ZP.getUserTag(e))
				}))
			})
		]
	});
};
