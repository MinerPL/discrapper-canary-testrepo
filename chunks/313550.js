n.d(t, {
    Z: function () {
        return o;
    }
}), n(47120), n(653041);
var i = n(470079), a = n(468988), s = n(817460), l = n(570533), r = n(689938);
function o(e) {
    let {
            includeFlairAsBenefit: t,
            listing: n,
            guildId: o
        } = e, c = 0, d = 0;
    for (let e of n.role_benefits.benefits)
        (0, s.rC)(e) ? c += 1 : (0, s.lL)(e) && (d += 1);
    let u = n.role_id, _ = (0, l.Z)(o).filter(e => e.roles.includes(u)).length;
    return i.useMemo(() => {
        let e = [];
        return !0 === t && e.push(r.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_VISUAL_FLAIR), 0 !== c && e.push(r.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_EXCLUSIVE_CHANNELS_SUBTITLE.format({ channelCount: c })), 0 !== d && e.push(r.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({ benefitCount: d })), 0 !== _ && e.push(r.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_EMOJI_SUBTITLE.format({ emojiCount: _ })), new a.Z(e);
    }, [
        c,
        d,
        _,
        t
    ]);
}
