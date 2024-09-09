var i = n(735250);
n(470079);
var l = n(399606),
    r = n(704215),
    a = n(481060),
    s = n(239091),
    o = n(765585),
    c = n(870569),
    u = n(819640),
    d = n(556296),
    h = n(13140),
    p = n(924557),
    _ = n(435064),
    f = n(39604),
    g = n(981631),
    m = n(689938),
    C = n(500256);
function I(e) {
    (0, s.jW)(e, async () => {
        let { default: e } = await n.e('21960').then(n.bind(n, 999466));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function E() {
    (0, f.C1)();
}
let N = (e) => {
    let { keybindString: t, children: n } = e,
        l = (e, t) => {
            e.stopPropagation(), e.preventDefault(), null == t || t();
        };
    return (0, i.jsx)(a.Popout, {
        shouldShow: !1,
        position: 'top',
        align: 'center',
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(o.Z, {
                dismissibleContent: r.z.CLIPS_ONBOARDING_CLIP_BUTTON_COACHMARK,
                shouldUseHorizontalButtons: !0,
                inlineArt: !0,
                artClassName: C.clipsEducationArt,
                position: 'top',
                header: (0, i.jsx)('div', {
                    className: C.header,
                    children: m.Z.Messages.CLIPS_ONBOARDING_CLIP_BUTTON_ACTIVITY_PANEL_COACHMARK_TITLE.format({
                        keybind: t,
                        keybindHook: () =>
                            (0, i.jsx)('span', {
                                className: C.keybindHintKeys,
                                children: (0, i.jsx)(a.KeyCombo, {
                                    className: C.keybindShortcut,
                                    shortcut: t
                                })
                            })
                    })
                }),
                headerClassName: C.clipsEducationHeader,
                body: (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(a.Text, {
                        variant: 'text-sm/normal',
                        color: 'always-white',
                        className: C.bodyText,
                        children: m.Z.Messages.CLIPS_ONBOARDING_CLIP_BUTTON_ACTIVITY_PANEL_COACHMARK_BODY.format({
                            keybindHook: () =>
                                (0, i.jsx)('div', {
                                    className: C.keyCombo,
                                    children: t
                                }),
                            keybind: t
                        })
                    })
                }),
                onClose: (e) => {
                    l(e, n);
                }
            });
        },
        children: () => n
    });
};
t.Z = () => {
    let e = (0, l.e7)([u.Z], () => u.Z.hasLayers()),
        t = (0, p.Go)(),
        { clipsEnabled: n, isAtMaxSavingClipsOperations: r } = (0, l.cj)([_.Z], () => ({
            clipsEnabled: _.Z.getSettings().clipsEnabled,
            isAtMaxSavingClipsOperations: _.Z.getIsAtMaxSaveClipOperations()
        })),
        s = (0, l.e7)([d.Z], () => d.Z.getKeybindForAction(g.kg4.SAVE_CLIP));
    if (!(t && n) || null == s || e) return null;
    let o = h.BB(s.shortcut, !0);
    return (0, i.jsx)(N, {
        keybindString: o,
        children: (0, i.jsx)(c.Z, {
            disabled: r,
            tooltipText: null != s ? m.Z.Messages.CLIPS_SAVE_CLIP_TOOLTIP.format({ hotkey: h.BB(null == s ? void 0 : s.shortcut, !0) }) : m.Z.Messages.CLIPS_EDIT_SAVE_CLIP,
            onClick: E,
            onContextMenu: I,
            icon: a.ClipsIcon
        })
    });
};
