n.r(t), n.d(t, {
    ACTIVITY_ENCOURAGES_HW_ACCELERATION: function () {
        return h;
    },
    default: function () {
        return I;
    }
}), n(47120);
var i = n(735250), s = n(470079), a = n(481060), r = n(153867), l = n(835473), o = n(285952), c = n(626135), d = n(998502), u = n(981631), _ = n(689938), E = n(129467);
let h = 'Activity Encourages Hardware Acceleration';
function I(e) {
    var t;
    let {
            applicationId: n,
            ...I
        } = e, [m, p] = s.useState(!1), [g] = (0, l.Z)([n]), T = null !== (t = null == g ? void 0 : g.name) && void 0 !== t ? t : 'This Activity';
    s.useEffect(() => {
        c.default.track(u.rMx.OPEN_MODAL, { type: h });
    }, []);
    let S = () => {
        let e = 'temporary';
        m && (e = 'permanent', r.ZP.updatedUnsyncedSettings({ disableActivityHardwareAccelerationPrompt: !0 })), c.default.track(u.rMx.MODAL_DISMISSED, {
            type: h,
            dismiss_type: e
        }), I.onClose();
    };
    return (0, i.jsxs)(a.ModalRoot, {
        className: E.root,
        'aria-label': _.Z.Messages.ACTIVITY_HARDWARE_ACCELERATION_BETTER_TITLE,
        ...I,
        children: [
            (0, i.jsxs)(a.ModalHeader, {
                separator: !1,
                children: [
                    (0, i.jsx)(a.Text, {
                        className: E.__invalid_header,
                        variant: 'text-lg/normal',
                        children: _.Z.Messages.ACTIVITY_HARDWARE_ACCELERATION_BETTER_TITLE
                    }),
                    (0, i.jsx)(a.ModalCloseButton, {
                        onClick: S,
                        className: E.closeButton
                    })
                ]
            }),
            (0, i.jsx)(a.ModalContent, {
                className: E.content,
                children: (0, i.jsx)(a.Text, {
                    variant: 'text-md/normal',
                    className: E.__invalid_ratingBody,
                    children: _.Z.Messages.ACTIVITY_HARDWARE_ACCELERATION_BETTER_BODY.format({ applicationName: T })
                })
            }),
            (0, i.jsxs)(a.ModalFooter, {
                className: E.footer,
                direction: o.Z.Direction.HORIZONTAL,
                children: [
                    (0, i.jsx)(a.Checkbox, {
                        type: a.Checkbox.Types.INVERTED,
                        size: 18,
                        value: m,
                        onChange: () => p(!m),
                        children: (0, i.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            children: _.Z.Messages.DONT_SHOW_AGAIN
                        })
                    }),
                    (0, i.jsx)(a.Button, {
                        color: a.Button.Colors.PRIMARY,
                        onClick: S,
                        children: _.Z.Messages.ACTIVITY_HARDWARE_ACCELERATION_NO_THANKS
                    }),
                    (0, i.jsx)(a.Button, {
                        color: a.Button.Colors.BRAND,
                        onClick: () => {
                            c.default.track(u.rMx.ACTIVITY_ENABLE_HARDWARE_ACCELERATION, { application_id: n }), d.ZP.setEnableHardwareAcceleration(!0);
                        },
                        children: _.Z.Messages.ACTIVITY_HARDWARE_ACCELERATION_TURN_IT_ON
                    })
                ]
            })
        ]
    });
}
