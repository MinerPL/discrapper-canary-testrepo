t.d(s, {
    Z: function () {
        return T;
    }
});
var n = t(735250);
t(470079);
var a = t(442837),
    i = t(409700),
    r = t(480294),
    o = t(63063),
    l = t(838436),
    c = t(51331),
    d = t(922628),
    _ = t(726985),
    u = t(981631),
    E = t(689938);
function T() {
    let e = (0, a.cj)([r.Z], () => r.Z.hasConsented(u.pjP.PERSONALIZATION));
    return (0, n.jsx)(l.U, {
        setting: _.s6.PRIVACY_DATA_PERSONALIZE_V2,
        children: (0, n.jsx)(c.Z, {
            title: E.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE,
            note: E.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_NOTE_LEARN_MORE.format({ helpdeskArticle: o.Z.getArticleURL(u.BhN.DATA_USED_FOR_RECOMMENDED) }),
            value: e,
            onChange: (e) => {
                e
                    ? (0, i.g)([u.pjP.PERSONALIZATION], []).catch(d.S)
                    : (0, d.V)({
                          header: E.Z.Messages.PERSONALIZATION_DISABLE_MODAL_TITLE,
                          confirmText: E.Z.Messages.PERSONALIZATION_DISABLE_MODAL_CONFIRM,
                          cancelText: E.Z.Messages.PERSONALIZATION_DISABLE_MODAL_CANCEL,
                          onConfirm: () => {
                              (0, i.g)([], [u.pjP.PERSONALIZATION]).catch(d.S);
                          },
                          body: E.Z.Messages.PERSONALIZATION_DISABLE_MODAL_BODY
                      });
            }
        })
    });
}
