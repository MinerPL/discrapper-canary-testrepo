var i = t(735250);
t(470079);
var a = t(442837), r = t(481060), o = t(700582), s = t(987209), l = t(699516), c = t(594174), d = t(51144), u = t(335131), f = t(689938);
n.Z = e => {
    let {
            selectedSkuId: n,
            className: t
        } = e, p = (0, a.Wu)([l.Z], () => l.Z.getFriendIDs()), _ = (0, a.Wu)([c.default], () => c.default.filter(e => p.includes(e.id) && !e.bot), [p]), {
            giftRecipient: m,
            setGiftRecipient: C,
            giftRecipientError: b,
            setGiftRecipientError: g,
            setValidatingGiftRecipient: v
        } = (0, s.wD)();
    if (null == n)
        return null;
    let x = async e => {
        v(!0), null != b && g(), C(e), !await (0, u.B1)(e.id, n) && g(f.Z.Messages.COLLECTIBLES_GIFT_SEND_ERROR_OWNED), v(!1);
    };
    return (0, i.jsxs)('div', {
        className: t,
        children: [
            (0, i.jsx)(r.FormTitle, { children: f.Z.Messages.FORM_LABEL_SEND_TO }),
            (0, i.jsx)(r.SearchableSelect, {
                placeholder: f.Z.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER,
                renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, i.jsx)(o.Z, {
                    user: e.value,
                    size: r.AvatarSizes.SIZE_20
                }),
                value: m,
                onChange: x,
                options: _.map(e => ({
                    value: e,
                    label: ''.concat(d.ZP.getUserTag(e))
                }))
            })
        ]
    });
};
