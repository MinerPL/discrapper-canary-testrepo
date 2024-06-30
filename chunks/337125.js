n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(735250);
n(470079);
var i = n(481060), a = n(245561), o = n(873572), s = n(659101), l = n(689938), u = n(141454), c = n(546136);
function d(e) {
    var t;
    let {
            user: n,
            guildId: d
        } = e, {
            botUpgraded: _,
            activeSubscriptionListing: E
        } = (0, o.Z)({
            user: n,
            guildId: d
        }), f = null == E ? void 0 : null === (t = E.sku_benefits) || void 0 === t ? void 0 : t.benefits;
    return null != d && _ && null != f && 0 !== f.length ? (0, r.jsxs)(s.Z, {
        children: [
            (0, r.jsx)(i.Heading, {
                variant: 'eyebrow',
                className: c.title,
                children: l.Z.Messages.BOT_PROFILE_BENEFITS_HEADING
            }),
            (0, r.jsx)('div', {
                className: u.benefitsContainer,
                children: f.map((e, t) => (0, r.jsx)(a.ZP, {
                    showsDescription: !1,
                    emojiContainerClassName: u.emojiContainer,
                    nameTextVariant: 'text-sm/normal',
                    nameTextColor: 'text-normal',
                    benefit: e
                }, ''.concat(e.name).concat(t)))
            })
        ]
    }) : null;
}
