t.d(n, {
    Z: function () {
        return f;
    }
});
var i = t(735250);
t(470079);
var a = t(442837), r = t(481060), d = t(240872), s = t(456269), u = t(346479), l = t(665906), o = t(592125), c = t(176505), Z = t(689938);
function f(e) {
    let n = (0, a.e7)([o.Z], () => o.Z.getChannel(e.parent_id)), t = (0, l.Xb)(e), f = (0, s.kF)(e);
    return (null == n ? void 0 : n.isForumLikeChannel()) && t ? e.hasFlag(c.zZ.PINNED) ? (0, i.jsx)(r.MenuItem, {
        id: 'unpin-thread',
        label: Z.Z.Messages.UNPIN_POST,
        action: () => u.Z.unpin(e)
    }) : (0, i.jsx)(r.MenuItem, {
        id: 'pin-thread',
        label: Z.Z.Messages.PIN_POST,
        action: function () {
            null != f ? d.Z.show({
                title: Z.Z.Messages.FORUM_PIN_CONFIRM_TITLE,
                body: Z.Z.Messages.FORUM_PIN_CONFIRM_BODY,
                onConfirm: async () => {
                    await u.Z.unpin(f), u.Z.pin(e);
                }
            }) : u.Z.pin(e);
        }
    }) : null;
}
