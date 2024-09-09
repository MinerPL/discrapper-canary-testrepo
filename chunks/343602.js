n.r(t),
    n.d(t, {
        default: function () {
            return m;
        }
    }),
    n(47120);
var s = n(735250),
    u = n(470079),
    i = n(519953),
    l = n(442837),
    a = n(481060),
    c = n(239091),
    o = n(857595),
    r = n(607070),
    d = n(886036),
    E = n(877794),
    M = n(695346),
    S = n(626135),
    T = n(358085),
    b = n(998502),
    C = n(887490),
    p = n(981631),
    f = n(689938);
function m(e) {
    var t, n, m, h, Z, _, I, g, A;
    let { text: k, editor: x, target: v, onHeightUpdate: L, onSelect: N } = e,
        G = u.useCallback(() => {
            (0, c.Zy)(() => {
                i.F3.focus(x), setTimeout(() => C.bN.focus(x), 0);
            });
        }, [x]),
        [O, j] = (0, E.Z)({
            text: k,
            target: v,
            onHeightUpdate: L
        }),
        R = (0, l.e7)([r.Z], () => r.Z.isSubmitButtonEnabled),
        y = (0, d.Z)(),
        D = M.Xk.useSetting();
    if (!T.isPlatformEmbedded) return null;
    let U = null !== (I = null === (n = x.chatInputType) || void 0 === n ? void 0 : null === (t = n.commands) || void 0 === t ? void 0 : t.enabled) && void 0 !== I && I,
        P = null !== (g = null === (h = x.chatInputType) || void 0 === h ? void 0 : null === (m = h.stickers) || void 0 === m ? void 0 : m.autoSuggest) && void 0 !== g && g,
        H = null !== (A = null === (_ = x.chatInputType) || void 0 === _ ? void 0 : null === (Z = _.submit) || void 0 === Z ? void 0 : Z.button) && void 0 !== A && A,
        X = U || P,
        K =
            '' !== k
                ? [
                      (0, s.jsx)(
                          a.MenuItem,
                          {
                              id: 'copy',
                              label: f.Z.Messages.COPY,
                              hint: (0, T.isMac)() ? '\u2318C' : 'Ctrl+C',
                              action: () => setTimeout(() => b.ZP.copy(), 0)
                          },
                          'copy'
                      ),
                      (0, s.jsx)(
                          a.MenuItem,
                          {
                              id: 'cut',
                              label: f.Z.Messages.CUT,
                              hint: (0, T.isMac)() ? '\u2318X' : 'Ctrl+X',
                              action: () => setTimeout(() => b.ZP.cut(), 0)
                          },
                          'cut'
                      )
                  ]
                : null,
        B = (0, s.jsx)(a.MenuCheckboxItem, {
            id: 'command-suggestions',
            label: f.Z.Messages.SUGGEST_SLASH_COMMANDS,
            checked: D,
            action: () => {
                let e = !D;
                M.Xk.updateSetting(e),
                    S.default.track(p.rMx.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
                        enabled: e,
                        location: { object: p.qAy.CONTEXT_MENU }
                    });
            }
        });
    return (0, s.jsxs)(a.Menu, {
        navId: 'textarea-context',
        onClose: G,
        'aria-label': f.Z.Messages.TEXTAREA_ACTIONS_MENU_LABEL,
        onSelect: N,
        children: [
            X &&
                (0, s.jsxs)(a.MenuItem, {
                    id: 'suggestions',
                    label: f.Z.Messages.TEXTAREA_ACTIONS_SUGGESTIONS,
                    children: [P && y, U && B]
                }),
            H &&
                (0, s.jsx)(a.MenuCheckboxItem, {
                    id: 'submit-button',
                    label: f.Z.Messages.TEXTAREA_ACTIONS_SUBMIT_BUTTON,
                    checked: R,
                    action: () => {
                        (0, o.eN)();
                    }
                }),
            (0, s.jsx)(a.MenuGroup, { children: O }),
            (0, s.jsx)(a.MenuGroup, { children: j }),
            (0, s.jsxs)(a.MenuGroup, {
                children: [
                    K,
                    (0, s.jsx)(a.MenuItem, {
                        id: 'paste',
                        label: f.Z.Messages.PASTE,
                        hint: (0, T.isMac)() ? '\u2318V' : 'Ctrl+V',
                        action: () => setTimeout(() => b.ZP.paste(), 0)
                    })
                ]
            })
        ]
    });
}
