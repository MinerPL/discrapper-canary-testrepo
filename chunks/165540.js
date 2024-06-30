n(47120);
var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(149765), o = n(442837), c = n(481060), u = n(499254), d = n(424602), h = n(541099), p = n(827498), m = n(663924), _ = n(998698), f = n(665906), E = n(271383), C = n(496675), g = n(594174), I = n(981631), x = n(314734), T = n(689938), N = n(475708);
let v = a.forwardRef(function (e, t) {
    let [n, l] = a.useState(!1), r = (0, o.e7)([h.Z], () => h.Z.shouldShowPopup()), d = a.useCallback(() => {
            r ? u.y(p.ti.DISMISSED) : u._(p._b.TEXT);
        }, [r]), m = () => {
            l(!0);
        }, _ = () => {
            l(!1);
        };
    return (0, i.jsx)(c.Tooltip, {
        text: T.Z.Messages.APP_LAUNCHER_USE_APP_TOOLTIP,
        children: e => (0, i.jsx)('div', {
            ref: t,
            ...e,
            className: x.t4,
            children: (0, i.jsx)(c.Button, {
                look: c.Button.Looks.BLANK,
                size: c.Button.Sizes.NONE,
                tabIndex: 0,
                className: N.button,
                onClick: d,
                onMouseEnter: m,
                onMouseOver: m,
                onMouseLeave: _,
                onFocus: m,
                onBlur: _,
                'aria-label': T.Z.Messages.APP_LAUNCHER_USE_APP_TOOLTIP,
                focusProps: {
                    offset: {
                        top: 4,
                        bottom: 4,
                        left: -4,
                        right: -4
                    }
                },
                innerClassName: N.buttonContents,
                children: (0, i.jsx)(c.AppsIcon, { className: s()(n ? N.iconHovered : N.iconUnhovered) })
            })
        })
    });
});
t.Z = a.memo(a.forwardRef(function (e) {
    let {
            channel: t,
            type: n
        } = e, l = a.useRef(null), s = function (e, t) {
            let n = e.getGuildId(), i = (0, o.e7)([
                    E.ZP,
                    g.default
                ], () => {
                    var e, t;
                    let i = g.default.getCurrentUser();
                    return null !== (t = null != n && null != i ? null === (e = E.ZP.getMember(n, i.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t;
                }), {messagesDisabled: a} = (0, o.cj)([C.Z], () => {
                    var n, a;
                    let l = e.isPrivate(), s = C.Z.computePermissions(e), o = r.e$(s, I.Plq.CREATE_PUBLIC_THREADS) || r.e$(s, I.Plq.CREATE_PRIVATE_THREADS), c = (!(null === (n = t.permissions) || void 0 === n ? void 0 : n.requireCreateTherads) || o) && (!(null === (a = t.permissions) || void 0 === a ? void 0 : a.requireSendMessages) || r.e$(s, I.Plq.SEND_MESSAGES)), u = (0, f.xl)(e);
                    return { messagesDisabled: i || !l && !c || u };
                }, [
                    e,
                    t.permissions.requireCreateTherads,
                    t.permissions.requireSendMessages,
                    i
                ]);
            return a;
        }(t, n), {activeCommand: c} = (0, o.cj)([_.Z], () => {
            var e;
            return { activeCommand: (null === (e = n.commands) || void 0 === e ? void 0 : e.enabled) ? _.Z.getActiveCommand(t.id) : null };
        }), u = d.T.useExperiment({ location: 'chat_input' }, { autoTrackExposure: !0 }).enabled, p = (0, o.e7)([h.Z], () => h.Z.shouldShowPopup(), []);
    return u && null == c && !s ? (0, i.jsxs)('div', {
        className: N.channelAppLauncher,
        children: [
            (0, i.jsx)(v, { ref: l }),
            p ? (0, i.jsx)(m.Z, {
                positionTargetRef: l,
                channel: t
            }) : null
        ]
    }) : null;
}));
