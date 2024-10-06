n.r(t), n(411104);
var o = n(735250),
    r = n(470079),
    i = n(817080),
    a = n(442837),
    s = n(481060),
    u = n(668781),
    c = n(239091),
    d = n(883385),
    l = n(108843),
    f = n(100527),
    O = n(299206),
    p = n(496675),
    N = n(358085),
    w = n(998502),
    S = n(22382),
    b = n(51078),
    D = n(710111),
    g = n(981631),
    y = n(689938);
t.default = (0, l.Z)(
    (0, d.Z)(
        function (e) {
            let { soundGuild: t, sound: d, activeCallGuildId: l, onSelect: f } = e,
                g = (function (e, t) {
                    let { canManageGuildExpressions: i } = (0, a.cj)([p.Z], () => (null == t ? { canManageGuildExpressions: !1 } : p.Z.getGuildPermissionProps(t)), [t]),
                        u = r.useCallback(() => {
                            if ((null == t ? void 0 : t.id) == null) return null;
                            (0, s.openModalLazy)(async () => {
                                let { default: r } = await Promise.all([n.e('56035'), n.e('55876')]).then(n.bind(n, 758961));
                                return (n) =>
                                    (0, o.jsx)(r, {
                                        ...n,
                                        existingSound: e,
                                        guildId: t.id
                                    });
                            });
                        }, [t, e]);
                    return i
                        ? (0, o.jsx)(
                              s.MenuItem,
                              {
                                  id: 'edit-soundboard-sound',
                                  label: y.Z.Messages.SOUNDBOARD_CONTEXT_MENU_EDIT_SOUND,
                                  action: u
                              },
                              'edit-soundboard-sound'
                          )
                        : null;
                })(d, t),
                h = (function (e) {
                    let { soundId: t } = e,
                        n = r.useCallback(async () => {
                            try {
                                let e = (0, S.Z)(t),
                                    n = await fetch(e),
                                    o = await n.blob(),
                                    r = (function (e) {
                                        switch (e.type) {
                                            case 'audio/mpeg':
                                            case 'audio/mpeg3':
                                                return 'mp3';
                                            case 'audio/ogg':
                                                return 'ogg';
                                            default:
                                                throw Error('unable to determine file type');
                                        }
                                    })(o),
                                    a = ''.concat(t, '.').concat(r);
                                N.isPlatformEmbedded ? await w.ZP.saveFile(e, a) : (0, i.saveAs)(o, a);
                            } catch (e) {
                                u.Z.show({
                                    title: y.Z.Messages.SOUNDBOARD_DOWNLOAD_SOUND_FAILED_TITLE,
                                    body: y.Z.Messages.SOUNDBOARD_DOWNLOAD_SOUND_FAILED_BODY,
                                    confirmText: y.Z.Messages.OKAY
                                });
                            }
                        }, [t]);
                    return e.guildId === D.X8
                        ? null
                        : (0, o.jsx)(
                              s.MenuItem,
                              {
                                  id: 'download-soundboard-sound',
                                  label: y.Z.Messages.SOUNDBOARD_CONTEXT_MENU_DOWNLOAD_SOUND,
                                  action: n
                              },
                              'download-soundboard-sound'
                          );
                })(d),
                v = (0, b.Z)(d, l),
                E = (0, O.Z)({
                    id: d.soundId,
                    label: y.Z.Messages.COPY_ID_SOUND
                });
            return (0, o.jsx)(s.Menu, {
                navId: 'sound-button-context',
                onClose: c.Zy,
                'aria-label': y.Z.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: f,
                children: (0, o.jsxs)(s.MenuGroup, {
                    children: [g, v, h, E]
                })
            });
        },
        { object: g.qAy.CONTEXT_MENU }
    ),
    [f.Z.CONTEXT_MENU, f.Z.SOUNDBOARD_BUTTON]
);
