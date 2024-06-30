var r = n(735250), i = n(470079), a = n(481060), o = n(285952), s = n(689938), l = n(510092);
t.Z = e => {
    let t, {
            button: n,
            submitting: u,
            disableNext: c,
            onClick: d,
            canNavigateBack: _,
            onBackClicked: E
        } = e, f = i.useRef(null), h = null != n && 'cancel' !== n.type, p = _ && (null == n ? void 0 : n.type) !== 'done', m = h || p;
    if (i.useEffect(() => {
            if ((null == n ? void 0 : n.type) === 'submit' || (null == n ? void 0 : n.type) === 'done') {
                var e;
                null === (e = f.current) || void 0 === e || e.focus();
            }
        }, [null == n ? void 0 : n.type]), !m)
        return null;
    let I = s.Z.Messages.DONE;
    return (null == n ? void 0 : n.type) === 'submit' ? (I = s.Z.Messages.MOBILE_REPORTS_SUBMIT_REPORT, t = a.Button.Colors.RED) : (null == n ? void 0 : n.type) === 'next' ? I = s.Z.Messages.NEXT : (null == n ? void 0 : n.type) === 'cancel' && (I = s.Z.Messages.CANCEL, t = a.Button.Colors.TRANSPARENT), (0, r.jsxs)(a.ModalFooter, {
        direction: o.Z.Direction.HORIZONTAL,
        children: [
            p && (0, r.jsx)(a.Button, {
                onClick: E,
                color: a.Button.Colors.TRANSPARENT,
                disabled: u,
                children: s.Z.Messages.BACK
            }),
            h && (0, r.jsx)(a.Button, {
                onClick: () => {
                    if (null != n)
                        d(n);
                },
                color: t,
                className: l.actionButton,
                disabled: u || c,
                buttonRef: f,
                children: I
            })
        ]
    });
};
