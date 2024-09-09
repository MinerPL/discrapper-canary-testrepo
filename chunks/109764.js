t.d(n, {
    Z: function () {
        return Z;
    }
});
var i = t(735250);
t(470079);
var a = t(852229),
    r = t(399606),
    d = t(481060),
    s = t(228392),
    o = t(592125),
    u = t(934415),
    l = t(981631),
    c = t(689938);
function Z(e, n, t) {
    let Z = (0, r.e7)([o.Z], () => o.Z.getChannel(e.parent_id));
    return (0, i.jsx)(d.MenuItem, {
        id: 'channel-copy-link',
        label: c.Z.Messages.COPY_LINK,
        action: () => {
            e.isForumPost() &&
                (0, s.B)({
                    postId: e.id,
                    location: { section: l.jXE.CONTEXT_MENU }
                }),
                (0, a.J)((0, u.EO)(e, Z, n, t));
        }
    });
}
