n(47120);
var i = n(735250), l = n(470079), r = n(442837), a = n(664915), s = n(888369), o = n(358652), c = n(771845), u = n(613060), d = n(451478), h = n(816779), p = n(251625), _ = n(981631), f = n(689938);
let m = 'app-download-item', g = 'add-server-item';
function C() {
    return !1;
}
function I(e) {
    var t;
    let n = s.default.getMutableGuildStates();
    return e === _.x8Z.SERVER_DISCOVERY_BADGE && !u.Z.hasViewed(_.x8Z.SERVER_DISCOVERY_BADGE) || e !== m && e !== g && (null === (t = n[null != e ? e : 'null']) || void 0 === t ? void 0 : t.mentionCount) > 0;
}
let E = (0, p.oH)((e, t, n) => [
    'null',
    ...t,
    ...e,
    g,
    _.x8Z.E3_SERVER_DISCOVERY_BADGE,
    m
]);
t.Z = l.forwardRef(function (e, t) {
    let n = (0, r.Wu)([
            c.ZP,
            o.Z,
            s.default
        ], () => E(c.ZP.getGuildFolders(), o.Z.getUnreadPrivateChannelIds(), s.default.getStoreChangeSentinel())), l = (0, r.e7)([d.Z], () => d.Z.isFocused()), u = (0, r.e7)([a.Z], () => a.Z.getExpandedFolders());
    return (0, i.jsx)(h.Z, {
        ...e,
        ref: t,
        items: n,
        isUnread: C,
        textUnread: f.Z.Messages.NEW,
        textMention: f.Z.Messages.NEW,
        isMentioned: I,
        animate: l,
        expandedFolders: u
    });
});
