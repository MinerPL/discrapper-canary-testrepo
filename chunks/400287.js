s.d(t, {
    Z: function () {
        return N;
    }
});
var n = s(735250);
s(470079);
var a = s(120356), i = s.n(a), r = s(481060), o = s(100527), l = s(906732), c = s(454585), d = s(921801), _ = s(626135), E = s(695346), u = s(726985), T = s(981631), I = s(689938), S = s(331651);
function N() {
    let e = E.up.useSetting(), t = E.fq.useSetting(), s = E.R$.useSetting(), a = E.cC.useSetting(), N = E.vF.useSetting(), C = E.H1.useSetting(), m = E.ev.useSetting(), A = E.x4.useSetting(), h = E.RS.useSetting(), g = E.NA.useSetting(), O = E.nc.useSetting(), {analyticsLocations: p} = (0, l.ZP)(o.Z.TEXT_AND_IMAGES);
    return (0, n.jsxs)(r.FormSection, {
        tag: r.FormTitleTags.H1,
        title: I.Z.Messages.CHAT,
        children: [
            (0, n.jsxs)(d.F, {
                setting: u.s6.CHAT_INLINE_MEDIA,
                children: [
                    (0, n.jsx)(r.FormTitle, {
                        className: S.marginBottom8,
                        children: I.Z.Messages.INLINE_MEDIA_LABEL
                    }),
                    (0, n.jsx)(d.F, {
                        setting: u.s6.CHAT_INLINE_MEDIA_LINKS,
                        children: (0, n.jsx)(r.FormSwitch, {
                            className: i()(S.marginTop8, S.marginBottom20),
                            value: h,
                            onChange: E.RS.updateSetting,
                            children: I.Z.Messages.INLINE_EMBED_MEDIA
                        })
                    }),
                    (0, n.jsx)(d.F, {
                        setting: u.s6.CHAT_INLINE_MEDIA_UPLOADS,
                        children: (0, n.jsx)(r.FormSwitch, {
                            className: i()(S.marginTop8, S.marginBottom20),
                            value: A,
                            note: I.Z.Messages.INLINE_ATTACHMENT_MEDIA_HELP.format({ maxSize: 10 }),
                            onChange: E.x4.updateSetting,
                            children: I.Z.Messages.INLINE_ATTACHMENT_MEDIA
                        })
                    }),
                    (0, n.jsx)(d.F, {
                        setting: u.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
                        children: (0, n.jsx)(r.FormSwitch, {
                            className: i()(S.marginTop8, S.marginBottom40),
                            value: C,
                            note: I.Z.Messages.IMAGE_DESCRIPTION_HELP,
                            onChange: E.H1.updateSetting,
                            children: I.Z.Messages.USER_SETTINGS_WITH_IMAGE_DESCRIPTIONS
                        })
                    })
                ]
            }),
            (0, n.jsxs)(d.F, {
                setting: u.s6.CHAT_EMBEDS,
                children: [
                    (0, n.jsx)(r.FormTitle, {
                        className: S.marginBottom8,
                        children: I.Z.Messages.RENDER_EMBEDS_LABEL
                    }),
                    (0, n.jsx)(d.F, {
                        setting: u.s6.CHAT_EMBEDS_LINK_PREVIEWS,
                        children: (0, n.jsx)(r.FormSwitch, {
                            className: i()(S.marginTop8, S.marginBottom40),
                            value: g,
                            onChange: E.NA.updateSetting,
                            children: I.Z.Messages.RENDER_EMBEDS
                        })
                    })
                ]
            }),
            (0, n.jsxs)(d.F, {
                setting: u.s6.CHAT_EMOJI,
                children: [
                    (0, n.jsx)(r.FormTitle, {
                        className: S.marginBottom8,
                        children: I.Z.Messages.EMOJI
                    }),
                    (0, n.jsx)(d.F, {
                        setting: u.s6.CHAT_EMOJI_REACTIONS,
                        children: (0, n.jsx)(r.FormSwitch, {
                            className: i()(S.marginTop8, S.marginBottom20),
                            value: O,
                            onChange: E.nc.updateSetting,
                            children: I.Z.Messages.RENDER_REACTIONS
                        })
                    }),
                    (0, n.jsx)(d.F, {
                        setting: u.s6.CHAT_EMOJI_EMOTICONS,
                        children: (0, n.jsx)(r.FormSwitch, {
                            className: S.marginBottom40,
                            value: m,
                            note: c.Z.parse(I.Z.Messages.CONVERT_EMOTICONS_HELP),
                            onChange: E.ev.updateSetting,
                            children: I.Z.Messages.CONVERT_EMOTICONS
                        })
                    })
                ]
            }),
            (0, n.jsx)(d.F, {
                setting: u.s6.CHAT_STICKERS,
                children: (0, n.jsxs)(r.FormSection, {
                    className: S.marginBottom8,
                    children: [
                        (0, n.jsx)(r.FormTitle, {
                            className: S.marginBottom8,
                            children: I.Z.Messages.STICKERS_AUTO_PLAY_HEADING
                        }),
                        (0, n.jsx)(d.F, {
                            setting: u.s6.CHAT_STICKERS_SUGGESTIONS,
                            children: (0, n.jsx)(r.FormSwitch, {
                                className: i()(S.marginTop8, S.marginBottom20),
                                value: e,
                                note: I.Z.Messages.AUTO_SUGGEST_STICKERS_DESCRIPTION,
                                onChange: t => {
                                    _.default.track(T.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                                        enabled: !e,
                                        location: { section: T.jXE.SETTINGS_TEXT_AND_IMAGES },
                                        location_stack: p
                                    }), E.up.updateSetting(!e);
                                },
                                children: I.Z.Messages.AUTO_SUGGEST_STICKERS
                            })
                        }),
                        (0, n.jsx)(d.F, {
                            setting: u.s6.CHAT_STICKERS_AUTOCOMPLETE,
                            children: (0, n.jsx)(r.FormSwitch, {
                                className: S.marginBottom40,
                                value: t,
                                note: I.Z.Messages.INCLUDE_STICKER_RESULTS_IN_AUTOCOMPLETE,
                                onChange: e => {
                                    _.default.track(T.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                        enabled: e,
                                        location: { section: T.jXE.SETTINGS_TEXT_AND_IMAGES },
                                        location_stack: p
                                    }), E.fq.updateSetting(e);
                                },
                                children: I.Z.Messages.STICKERS_IN_AUTOCOMPLETE
                            })
                        })
                    ]
                })
            }),
            (0, n.jsx)(d.F, {
                setting: u.s6.CHAT_TEXT_BOX,
                children: (0, n.jsxs)(r.FormSection, {
                    className: S.marginBottom8,
                    children: [
                        (0, n.jsx)(r.FormTitle, {
                            className: S.marginBottom8,
                            children: I.Z.Messages.FORM_LABEL_USE_RICH_CHAT_BOX
                        }),
                        (0, n.jsx)(d.F, {
                            setting: u.s6.CHAT_TEXT_BOX_PREVIEW,
                            children: (0, n.jsx)(r.FormSwitch, {
                                className: i()(S.marginTop8, S.marginBottom40),
                                value: s,
                                onChange: e => {
                                    _.default.track(T.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                                        enabled: e,
                                        location: { section: T.jXE.SETTINGS_TEXT_AND_IMAGES }
                                    }), E.R$.updateSetting(e);
                                },
                                children: I.Z.Messages.PREVIEW_MARKDOWN_DESCRIPTION
                            })
                        })
                    ]
                })
            }),
            (0, n.jsx)(d.F, {
                setting: u.s6.CHAT_THREADS,
                children: (0, n.jsxs)(r.FormSection, {
                    className: S.marginBottom40,
                    children: [
                        (0, n.jsx)(r.FormTitle, {
                            className: S.marginBottom8,
                            children: I.Z.Messages.THREADS
                        }),
                        (0, n.jsx)(d.F, {
                            setting: u.s6.CHAT_THREADS_SPLIT_VIEW,
                            children: (0, n.jsx)(r.FormSwitch, {
                                className: S.marginTop8,
                                value: N,
                                onChange: E.vF.updateSetting,
                                children: I.Z.Messages.USE_THREADS_SIDEBAR_DESCRIPTION
                            })
                        })
                    ]
                })
            }),
            (0, n.jsx)(d.F, {
                setting: u.s6.CHAT_SPOILERS,
                children: (0, n.jsxs)(r.FormItem, {
                    title: I.Z.Messages.SHOW_SPOILER_CONTENT,
                    children: [
                        (0, n.jsx)(r.FormText, {
                            type: r.FormText.Types.DESCRIPTION,
                            className: S.marginBottom8,
                            children: I.Z.Messages.SHOW_SPOILER_CONTENT_HELP
                        }),
                        (0, n.jsx)(r.RadioGroup, {
                            options: [
                                {
                                    name: I.Z.Messages.SHOW_SPOILER_ON_CLICK,
                                    value: T.A2N.ON_CLICK
                                },
                                {
                                    name: I.Z.Messages.SHOW_SPOILER_ON_SERVERS_I_MOD,
                                    value: T.A2N.IF_MODERATOR
                                },
                                {
                                    name: I.Z.Messages.SHOW_SPOILER_ALWAYS,
                                    value: T.A2N.ALWAYS
                                }
                            ],
                            onChange: e => E.cC.updateSetting(e.value),
                            value: a
                        })
                    ]
                })
            })
        ]
    });
}
