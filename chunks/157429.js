e.r(a), e.d(a, {
    default: function () {
        return E;
    }
}), e(47120);
var s = e(735250);
e(470079);
var t = e(512722), o = e.n(t), i = e(481060), l = e(935369), r = e(53365), c = e(153124), d = e(981631), u = e(689938), _ = e(857674);
function E(n) {
    let {
            transitionState: a,
            guild: e,
            onClose: t
        } = n, E = (0, c.Dt)(), [T, {
                loading: g,
                error: I
            }] = (0, l.Z)(r.oL), N = async () => {
            o()(null != e, 'no guild'), null != await T(e.id) && t();
        };
    return (0, s.jsxs)(i.ModalRoot, {
        transitionState: a,
        'aria-labelledby': E,
        children: [
            (0, s.jsxs)(i.ModalHeader, {
                children: [
                    (0, s.jsx)(i.Heading, {
                        id: E,
                        variant: 'heading-md/semibold',
                        children: u.Z.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_MODAL_HEADER
                    }),
                    (0, s.jsx)(i.ModalCloseButton, {
                        className: _.closeButton,
                        onClick: t
                    })
                ]
            }),
            (0, s.jsxs)(i.ModalContent, {
                className: _.content,
                children: [
                    null != I ? (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(i.FormErrorBlock, { children: I.message }),
                            (0, s.jsx)(i.Spacer, { size: 24 })
                        ]
                    }) : null,
                    (0, s.jsx)(i.FormText, {
                        type: i.FormText.Types.ERROR,
                        children: u.Z.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_MODAL_DESCRIPTION.format({
                            guildName: e.toString(),
                            url: d.EYA.DEVELOPER_PORTAL_TEAMS
                        })
                    }),
                    (0, s.jsx)(i.Spacer, { size: 16 })
                ]
            }),
            (0, s.jsx)(i.ModalFooter, {
                className: _.__invalid_footer,
                children: (0, s.jsx)(i.Button, {
                    color: i.Button.Colors.RED,
                    className: _.__invalid_goBackButton,
                    submitting: g,
                    onClick: N,
                    children: u.Z.Messages.SAVE
                })
            })
        ]
    });
}
