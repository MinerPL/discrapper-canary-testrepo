n(627341);
var s, r, a = n(735250);
n(470079);
var o = n(120356), i = n.n(o), l = n(278074), c = n(780384), d = n(481060), u = n(410030), p = n(884697), g = n(689938), f = n(833417);
(r = s || (s = {})).BANNER = 'banner', r.MODAL = 'modal', r.CARD = 'card';
t.Z = e => {
    let {
            category: t,
            display: n,
            className: s
        } = e, r = (0, u.ZP)();
    if (null == t.unpublishedAt)
        return null;
    let o = (0, p.OT)(t.unpublishedAt);
    function C(e) {
        return (0, a.jsx)(d.TextBadge, {
            disableColor: !0,
            text: e,
            className: i()((0, c.wj)(r) ? f.badgeDark : f.badgeLight, s)
        });
    }
    return (0, l.EQ)([
        n,
        o > 1
    ]).with([
        'card',
        !0
    ], () => null).with([
        'banner',
        !0
    ], () => C(g.Z.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({ days: o }))).with([
        'modal',
        !0
    ], () => C(g.Z.Messages.COLLECTIBLES_DAYS_LEFT.format({ days: o }))).otherwise(() => C(g.Z.Messages.COLLECTIBLES_LAST_DAY));
};
