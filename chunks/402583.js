t.d(s, {
    Z: function () {
        return S;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(409700),
    o = t(480294),
    l = t(63063),
    c = t(838436),
    d = t(51331),
    _ = t(922628),
    u = t(726985),
    E = t(981631),
    T = t(689938);
function S() {
    let e = (0, i.e7)([o.Z], () => o.Z.hasConsented(E.pjP.USAGE_STATISTICS)),
        s = a.useCallback((e) => {
            e
                ? (0, r.g)([E.pjP.USAGE_STATISTICS], []).catch(_.S)
                : (0, _.V)({
                      header: T.Z.Messages.USAGE_STATISTICS_DISABLE_MODAL_TITLE,
                      body: T.Z.Messages.USAGE_STATISTICS_DISABLE_MODAL_BODY,
                      confirmText: T.Z.Messages.USAGE_STATISTICS_DISABLE_MODAL_CONFIRM,
                      cancelText: T.Z.Messages.USAGE_STATISTICS_DISABLE_MODAL_CANCEL,
                      onConfirm: () => (0, r.g)([], [E.pjP.USAGE_STATISTICS]).catch(_.S)
                  });
        }, []);
    return (0, n.jsx)(c.U, {
        setting: u.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2,
        children: (0, n.jsx)(d.Z, {
            title: T.Z.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE,
            note: T.Z.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_NOTE.format({ helpdeskArticle: l.Z.getArticleURL(E.BhN.DATA_USED_TO_IMPROVE_DISCORD) }),
            value: e,
            onChange: s
        })
    });
}
