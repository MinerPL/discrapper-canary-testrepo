n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(481060),
    l = n(626135),
    r = n(288552),
    o = n(981631),
    c = n(689938),
    d = n(811304);
function u(e) {
    let { type: t, onClick: n } = e,
        [u, E] = a.useState(!1),
        I = () => {
            n(),
                l.default.track(o.rMx.INBOX_CHANNEL_ACKED, {
                    marked_all_channels_as_read: !0,
                    num_unread_channels_remaining: 0
                });
        },
        m = (e) => {
            e.shiftKey ? I() : E(!0);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            u
                ? (0, i.jsx)(_, {
                      confirm: I,
                      cancel: () => E(!1)
                  })
                : null,
            'bottom-floating' === t
                ? (0, i.jsx)(r.a, {
                      text: c.Z.Messages.MARK_ALL_AS_READ,
                      icon: s.DoubleCheckmarkIcon,
                      onClick: m
                  })
                : (0, i.jsx)(s.CircleIconButton, {
                      tooltip: c.Z.Messages.MARK_ALL_AS_READ,
                      color: s.CircleIconButtonColors.TERTIARY,
                      icon: (0, i.jsx)(s.DoubleCheckmarkIcon, {
                          size: 'xs',
                          color: 'currentColor'
                      }),
                      className: d.controlButton,
                      onClick: m
                  })
        ]
    });
}
function _(e) {
    let { cancel: t, confirm: n } = e;
    return (0, i.jsx)(s.DeclarativeConfirmModal, {
        dismissable: !0,
        header: c.Z.Messages.UNREADS_CONFIRM_MARK_ALL_READ_HEADER,
        confirmText: c.Z.Messages.MARK_AS_READ,
        cancelText: c.Z.Messages.CANCEL,
        confirmButtonColor: s.Button.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(s.Text, {
            color: 'text-normal',
            variant: 'text-sm/normal',
            children: c.Z.Messages.UNREADS_CONFIRM_MARK_ALL_READ_DESCRIPTION
        })
    });
}
