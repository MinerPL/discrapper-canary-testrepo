n(47120);
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(481060),
    o = n(923928),
    l = n(468026),
    u = n(594190),
    c = n(131951),
    d = n(19780),
    _ = n(63063),
    E = n(981631),
    f = n(689938);
t.Z = () => {
    let [e, t] = (0, a.Wu)([u.ZP], () => [u.ZP.canShowAdminWarning, u.ZP.getVisibleGame()], []),
        n = (0, a.e7)([d.Z], () => d.Z.isConnected(), []),
        h = (0, a.e7)([c.Z], () => c.Z.getMode() === E.pM4.PUSH_TO_TALK, []),
        p = null != t && t.elevated && n && h && e,
        m = i.useRef(null);
    function I() {
        null !== m.current && ((0, s.closeModal)(m.current), (m.current = null));
    }
    return (
        i.useEffect(
            () => (
                p
                    ? (m.current = (0, s.openModal)((e) =>
                          (0, r.jsx)(l.default, {
                              title: f.Z.Messages.PTT_PERMISSION_TITLE,
                              body: f.Z.Messages.PTT_PERMISSION_BODY.format({ game: null == t ? void 0 : t.name }),
                              secondaryConfirmText: f.Z.Messages.DONT_SHOW_AGAIN,
                              onConfirmSecondary: () => o.Z.clearPTTAdminWarning(),
                              onConfirm: () => window.open(_.Z.getArticleURL(E.BhN.PUSH_TO_TALK_ADMINISTRATOR_MODE), '_blank'),
                              confirmText: f.Z.Messages.HELP_DESK,
                              ...e
                          })
                      ))
                    : I(),
                () => {
                    I();
                }
            ),
            [t, p]
        ),
        null
    );
};
