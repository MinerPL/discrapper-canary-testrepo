n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(735250);
n(470079);
var a = n(442837),
    s = n(481060),
    l = n(194359),
    r = n(631937),
    o = n(702321),
    c = n(377171),
    u = n(699516),
    d = n(626135),
    h = n(63063),
    m = n(862679),
    p = n(981631),
    _ = n(596401),
    f = n(689938);
function E(e) {
    let { channel: t, children: E } = e,
        g = (0, a.e7)([u.Z], () => u.Z.isBlocked(t.getRecipientId()));
    (0, r.Z)(t.id);
    let C = (0, o.Z)(t.id),
        I = t.isSystemDM(),
        x = g && !I && !t.isMultiUserDM(),
        T = {};
    if (I) {
        let e = C
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      f.Z.Messages.SYSTEM_DM_OPEN_BLOG,
                      (0, i.jsx)(s.WindowLaunchIcon, {
                          size: 'xs',
                          color: c.Z.HEADER_PRIMARY
                      })
                  ]
              })
            : f.Z.Messages.LEARN_MORE;
        (T.message = f.Z.Messages.SYSTEM_DM_CHANNEL_DESCRIPTION),
            (T.subtitle = f.Z.Messages.SYSTEM_DM_CHANNEL_DESCRIPTION_SUBTEXT),
            (T.buttonText = e),
            (T.onButtonClick = () => {
                if (C) {
                    open(_.D2),
                        d.default.track(p.rMx.CHANGE_LOG_CTA_CLICKED, {
                            cta_type: 'chat_blocker',
                            target: _.D2
                        });
                    return;
                }
                open(h.Z.getArticleURL(p.BhN.SYSTEM_DMS));
            }),
            (T.imageSrc = n(780961));
    } else
        x &&
            ((T.message = f.Z.Messages.DM_VERIFICATION_TEXT_BLOCKED),
            (T.buttonText = f.Z.Messages.UNBLOCK),
            (T.onButtonClick = () => {
                l.Z.unblockUser(t.getRecipientId());
            }));
    return (0, i.jsx)(m.Z, {
        ...T,
        children: E
    });
}
