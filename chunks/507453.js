var n = s(735250);
s(470079);
var l = s(481060),
    i = s(600164),
    r = s(689938),
    o = s(286609);
t.Z = {
    SlideContent: function (e) {
        let { children: t } = e;
        return (0, n.jsx)(l.ModalContent, {
            className: o.content,
            children: t
        });
    },
    SlideError: function (e) {
        let { error: t } = e;
        return null == t
            ? null
            : (0, n.jsx)(l.Text, {
                  className: o.error,
                  variant: 'text-sm/normal',
                  color: 'text-danger',
                  children: t
              });
    },
    SlideFooter: function (e) {
        let { mfaChallenge: t, setSlide: s, showConfirm: a = !1, ...d } = e,
            u = t.methods.length > 1;
        return u || a
            ? (0, n.jsxs)(l.ModalFooter, {
                  className: o.footer,
                  direction: a && !u ? i.Z.Direction.HORIZONTAL_REVERSE : i.Z.Direction.HORIZONTAL,
                  children: [
                      u &&
                          (0, n.jsx)(l.Button, {
                              look: l.Button.Looks.LINK,
                              onClick: () => s('select'),
                              color: l.Button.Colors.PRIMARY,
                              children: r.Z.Messages.MFA_V2_GO_TO_SELECT
                          }),
                      a &&
                          (0, n.jsx)(l.Button, {
                              type: 'submit',
                              ...d,
                              children: r.Z.Messages.CONFIRM
                          })
                  ]
              })
            : null;
    },
    SlideHeader: function (e) {
        let { subtitle: t, onClose: s } = e;
        return (0, n.jsxs)(l.ModalHeader, {
            direction: i.Z.Direction.VERTICAL,
            className: o.header,
            separator: !1,
            children: [
                (0, n.jsx)(l.Heading, {
                    variant: 'heading-xl/semibold',
                    children: r.Z.Messages.MFA_V2_HEADER
                }),
                null != t &&
                    (0, n.jsx)(l.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: o.subtitle,
                        children: t
                    }),
                (0, n.jsx)(l.ModalCloseButton, {
                    className: o.closeButton,
                    onClick: s
                })
            ]
        });
    }
};
