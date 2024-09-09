t.d(s, {
    Z: function () {
        return A;
    }
}),
    t(47120),
    t(773603);
var n = t(735250),
    a = t(470079),
    i = t(913527),
    r = t.n(i),
    o = t(442837),
    l = t(481060),
    c = t(668781),
    d = t(809206),
    _ = t(594174),
    u = t(63063),
    E = t(88658),
    T = t(838436),
    S = t(726985),
    I = t(981631),
    N = t(689938),
    m = t(594918);
let C = (e) => {
    (0, l.openModalLazy)(async () => {
        let { default: s } = await t.e('25120').then(t.bind(t, 926281));
        return (t) =>
            (0, n.jsx)(s, {
                modalProps: t,
                settings: e
            });
    });
};
function A() {
    let e = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
        [s, t] = a.useState(null),
        [i, A] = a.useState(!0);
    if (
        (a.useEffect(() => {
            (0, d.ol)()
                .then((e) => {
                    t(e.body);
                })
                .finally(() => A(!1));
        }, []),
        null == e)
    )
        return null;
    let g = (0, E.$6)(s, e),
        h = g && null != s,
        O = () => {
            C({
                header: N.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_TITLE,
                body: N.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_WEB_NOTE.format({ helpdeskArticle: u.Z.getArticleURL(I.BhN.GDPR_PACKAGE_CONTENTS) }),
                confirmText: N.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CONFIRM,
                cancelText: N.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CANCEL,
                confirmButtonColor: l.Button.Colors.BRAND,
                onConfirm: (e) => {
                    A(!0),
                        (0, d.V3)(e)
                            .then(
                                (e) => {
                                    null != e && null != e.body
                                        ? (t(e.body), c.Z.show({ body: N.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_SUCCESS }))
                                        : c.Z.show({
                                              title: N.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
                                              body: N.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
                                          });
                                },
                                () =>
                                    c.Z.show({
                                        title: N.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
                                        body: N.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
                                    })
                            )
                            .finally(() => A(!1));
                }
            });
        };
    return (0, n.jsxs)(T.U, {
        setting: S.s6.PRIVACY_DATA_REQUEST,
        children: [
            (0, n.jsx)(T.H, {
                header: N.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONAL_DATA_TITLE,
                description: N.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_NOTE.format({ helpdeskArticle: u.Z.getArticleURL(I.BhN.GDPR_REQUEST_DATA) })
            }),
            h
                ? (0, n.jsx)(l.Card, {
                      className: m.card,
                      children: (0, n.jsx)(l.Text, {
                          variant: 'text-md/normal',
                          children: N.Z.Messages.DATA_DOWNLOAD_REQUESTED_STATUS_NOTE.format({ date: r()(s.created_at).add(I.eBq, 'days').format('MMMM Do YYYY') })
                      })
                  })
                : (0, n.jsx)('div', {
                      className: m.button,
                      children: (0, n.jsx)(l.Tooltip, {
                          text: e.verified ? null : N.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_TOOLTIP,
                          children: (e) => {
                              let { onMouseEnter: s, onMouseLeave: t } = e;
                              return (0, n.jsx)(l.Button, {
                                  disabled: g,
                                  onClick: O,
                                  onMouseEnter: s,
                                  onMouseLeave: t,
                                  look: l.Button.Looks.FILLED,
                                  color: l.Button.Colors.BRAND,
                                  submitting: i,
                                  children: N.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD
                              });
                          }
                      })
                  })
        ]
    });
}
