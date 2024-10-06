t.d(s, {
    Z: function () {
        return g;
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
    d = t(594174),
    _ = t(63063),
    u = t(88658),
    E = t(398826),
    T = t(575356),
    S = t(838436),
    I = t(726985),
    N = t(981631),
    A = t(689938),
    C = t(472346);
let m = (e) => {
    (0, l.openModalLazy)(async () => {
        let { default: s } = await t.e('25120').then(t.bind(t, 926281));
        return (t) =>
            (0, n.jsx)(s, {
                modalProps: t,
                settings: e
            });
    });
};
function g() {
    let e = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
        { currentHarvestType: s, awaitingInitialRequest: t } = (0, o.cj)([T.Z], () => ({
            currentHarvestType: T.Z.harvestType,
            awaitingInitialRequest: T.Z.requestingHarvest
        })),
        [i, g] = a.useState(!1);
    if (null == e) return null;
    let h = (0, u.$6)(s, e) || t,
        O = h && null != s,
        p = () => {
            m({
                header: A.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_TITLE,
                body: A.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_WEB_NOTE.format({ helpdeskArticle: _.Z.getArticleURL(N.BhN.GDPR_PACKAGE_CONTENTS) }),
                confirmText: A.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CONFIRM,
                cancelText: A.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CANCEL,
                confirmButtonColor: l.Button.Colors.BRAND,
                onConfirm: (e) => {
                    g(!0),
                        (0, E.h)(e)
                            .then(
                                (e) => {
                                    null != e && null != e.body
                                        ? c.Z.show({ body: A.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_SUCCESS })
                                        : c.Z.show({
                                              title: A.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
                                              body: A.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
                                          });
                                },
                                () =>
                                    c.Z.show({
                                        title: A.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
                                        body: A.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
                                    })
                            )
                            .finally(() => g(!1));
                }
            });
        };
    return (0, n.jsxs)(S.U, {
        setting: I.s6.PRIVACY_DATA_REQUEST,
        children: [
            (0, n.jsx)(S.H, {
                header: A.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONAL_DATA_TITLE,
                description: A.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_NOTE.format({ helpdeskArticle: _.Z.getArticleURL(N.BhN.GDPR_REQUEST_DATA) })
            }),
            O
                ? (0, n.jsx)(l.Card, {
                      className: C.card,
                      children: (0, n.jsx)(l.Text, {
                          variant: 'text-md/normal',
                          children: A.Z.Messages.DATA_DOWNLOAD_REQUESTED_STATUS_NOTE.format({ date: r()(s.created_at).add(N.eBq, 'days').format('MMMM Do YYYY') })
                      })
                  })
                : (0, n.jsx)('div', {
                      className: C.button,
                      children: (0, n.jsx)(l.Tooltip, {
                          text: e.verified ? null : A.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_TOOLTIP,
                          children: (e) => {
                              let { onMouseEnter: s, onMouseLeave: a } = e;
                              return (0, n.jsx)(l.Button, {
                                  disabled: h,
                                  onClick: p,
                                  onMouseEnter: s,
                                  onMouseLeave: a,
                                  look: l.Button.Looks.FILLED,
                                  color: l.Button.Colors.BRAND,
                                  submitting: i || t,
                                  children: A.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD
                              });
                          }
                      })
                  })
        ]
    });
}
