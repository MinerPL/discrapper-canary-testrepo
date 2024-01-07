(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["70048"], {
        352320: function(e, t, a) {
            "use strict";
            e.exports = a.p + "c3859ebb6176ea76913f.svg"
        },
        411723: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("866227"),
                s = a.n(l),
                i = a("446674"),
                r = a("77078"),
                o = a("442939"),
                d = a("730859"),
                u = a("697218"),
                c = a("953109"),
                m = a("449008"),
                h = a("782340"),
                g = a("127789"),
                f = function(e) {
                    let {
                        attachment: t,
                        guildId: a
                    } = e, {
                        application: l,
                        clip_participants: f,
                        title: _
                    } = t, A = (0, o.useGetOrFetchApplication)(null == l ? void 0 : l.id), x = (0, i.useStateFromStoresArray)([u.default], () => {
                        var e;
                        return null !== (e = null == f ? void 0 : f.map(e => {
                            let {
                                id: t
                            } = e;
                            return u.default.getUser(t)
                        }).filter(m.isNotNullish)) && void 0 !== e ? e : []
                    }), p = null == A ? void 0 : A.name, I = s(t.clip_created_at).fromNow();
                    return null == t.clip_created_at ? null : (0, n.jsxs)("div", {
                        className: g.container,
                        children: [(0, n.jsx)(c.default, {
                            game: A
                        }), (0, n.jsxs)("div", {
                            className: g.textSection,
                            children: [null != _ && "" !== _ ? (0, n.jsx)(r.Text, {
                                variant: "text-md/semibold",
                                color: "interactive-active",
                                children: _
                            }) : (0, n.jsx)(r.Text, {
                                variant: "text-md/semibold",
                                color: "text-muted",
                                children: h.default.Messages.CLIPS_UNTITLED
                            }), (0, n.jsxs)(r.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: g.subtitle,
                                children: [null != p ? "".concat(p, " • ") : null, I]
                            }), (0, n.jsx)(r.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: g.subtitle
                            })]
                        }), null != f && f.length > 0 && (0, n.jsx)(d.default, {
                            maxUsers: 4,
                            users: x,
                            className: g.facePile,
                            guildId: a
                        })]
                    })
                }
        },
        730859: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return g
                }
            }), a("222007");
            var n = a("37983"),
                l = a("884691"),
                s = a("414456"),
                i = a.n(s),
                r = a("917351"),
                o = a.n(r),
                d = a("77078"),
                u = a("272030"),
                c = a("427302"),
                m = a("158998"),
                h = a("393724");

            function g(e) {
                let {
                    className: t,
                    maxUsers: s,
                    users: r,
                    guildId: g,
                    onFocus: f
                } = e, [_, A] = l.useState(!1);

                function x() {
                    return (0, n.jsx)(d.Dialog, {
                        className: h.popoutWrapper,
                        children: (0, n.jsx)(d.Scroller, {
                            className: h.scroller,
                            children: r.map(e => (0, n.jsx)(c.default, {
                                guildId: g,
                                user: e,
                                nick: m.default.getName(e),
                                onContextMenu: t => (0, u.openContextMenuLazy)(t, async () => {
                                    let {
                                        default: t
                                    } = await a.el("406784").then(a.bind(a, "406784"));
                                    return a => (0, n.jsx)(t, {
                                        ...a,
                                        user: e
                                    })
                                }, {
                                    onClose: () => A(!1)
                                })
                            }, e.id))
                        })
                    })
                }
                return r.length <= 0 ? null : (0, n.jsx)("div", {
                    className: i(t, h.avatars),
                    children: function() {
                        let e = o(r).take(s).map(e => {
                                let t = m.default.getName(e);
                                return (0, n.jsx)(d.TooltipContainer, {
                                    text: t,
                                    className: h.avatar,
                                    children: (0, n.jsx)(d.Avatar, {
                                        src: e.getAvatarURL(g, 24),
                                        "aria-label": t,
                                        size: d.AvatarSizes.SIZE_24
                                    })
                                }, e.id)
                            }).value(),
                            t = r.length - s;
                        return t > 0 && (e[e.length - 1] = (0, n.jsx)(d.Popout, {
                            renderPopout: x,
                            shouldShow: _,
                            position: "bottom",
                            onRequestClose: () => A(!1),
                            children: () => (0, n.jsxs)(d.Button, {
                                className: i(h.avatar, h.overflow),
                                onFocus: f,
                                onClick: () => A(!0),
                                look: d.Button.Looks.BLANK,
                                size: d.Button.Sizes.NONE,
                                children: ["+", t + 1]
                            })
                        }, "overflow")), e
                    }()
                })
            }
        },
        467475: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var n = a("65597"),
                l = a("42203"),
                s = a("724210");

            function i(e) {
                let t = (0, n.default)([l.default], () => {
                    let t = l.default.getChannel(e);
                    return (null == t ? void 0 : t.parent_id) != null && t.isForumPost() ? l.default.getChannel(null == t ? void 0 : t.parent_id) : null
                });
                return (null == t ? void 0 : t.hasFlag(s.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0
            }
        },
        923873: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var n = a("862205");
            let l = (0, n.createExperiment)({
                kind: "user",
                id: "2023-10_thumbhash_messages",
                label: "Display thumbhash placeholders when loading message images",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Display thumbhashes",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var s = l
        },
        165405: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                logVoiceMessagePlaybackStarted: function() {
                    return r
                },
                logVoiceMessagePlaybackEnded: function() {
                    return o
                },
                logVoiceMessagePlaybackFailed: function() {
                    return d
                }
            });
            var n, l, s = a("599110"),
                i = a("49111");

            function r(e, t, a, n) {
                s.default.track(i.AnalyticEvents.VOICE_MESSAGE_PLAYBACK_STARTED, {
                    message_id: e,
                    total_duration_secs: t,
                    start_duration_secs: Math.min(null != t ? t : a, a),
                    sender_user_id: n
                })
            }

            function o(e, t, a, n, l) {
                s.default.track(i.AnalyticEvents.VOICE_MESSAGE_PLAYBACK_ENDED, {
                    message_id: e,
                    total_duration_secs: t,
                    end_duration_secs: Math.min(null != t ? t : a, a),
                    sender_user_id: n,
                    duration_listening_secs: l
                })
            }

            function d(e, t) {
                s.default.track(i.AnalyticEvents.VOICE_MESSAGE_PLAYBACK_FAILED, {
                    message_id: e,
                    error_message: t
                })
            }(n = l || (l = {})).SENT = "sent", n.CANCELLED_DURATION = "cancelled_duration", n.CANCELLED_USER_REQUESTED = "cancelled_user_requested", n.CANCELLED_GESTURE_CONFLICT = "cancelled_gesture_conflict", n.CANCELLED_ON_BACKGROUND = "cancelled_on_background"
        },
        994402: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                isMediaAttachment: function() {
                    return j
                },
                getAttachmentKind: function() {
                    return O
                },
                default: function() {
                    return D
                }
            }), a("222007"), a("702976"), a("511434"), a("313619"), a("654714"), a("287168"), a("956660");
            var n = a("37983"),
                l = a("884691"),
                s = a("414456"),
                i = a.n(s),
                r = a("77078"),
                o = a("963119"),
                d = a("467475"),
                u = a("651693"),
                c = a("605160"),
                m = a("903962"),
                h = a("923873"),
                g = a("165405"),
                f = a("410889"),
                _ = a("725962"),
                A = a("505684"),
                x = a("328620"),
                p = a("522049"),
                I = a("945330"),
                M = a("228220"),
                E = a("568734"),
                v = a("103603"),
                C = a("719347"),
                N = a("49111"),
                T = a("782340"),
                y = a("715968");
            let S = /\.(mp3|m4a|ogg|wav|flac)$/i,
                j = e => "IMAGE" === e || "VIDEO" === e;

            function O(e, t) {
                let {
                    filename: a,
                    width: n,
                    height: l
                } = e;
                if (t && null != n && n > 0 && null != l && l > 0) return (0, u.isImageFile)(a) ? "IMAGE" : (0, u.isVideoFile)(a) && null != e.proxy_url ? "VIDEO" : "INVALID";
                if (null != t && S.test(a) && null != e.url) return "AUDIO";
                if (null != e.url && (0, m.isPlaintextPreviewableFile)(a)) return "PLAINTEXT_PREVIEW";
                return "OTHER"
            }
            let b = e => {
                    let t, a, {
                        downloadURL: l,
                        downloadMimeType: s,
                        onRemoveAttachment: o,
                        isAttachmentMediaType: d
                    } = e;
                    return (null != l && null != s && (t = (0, n.jsx)(r.Tooltip, {
                        text: T.default.Messages.DOWNLOAD,
                        children: e => (0, n.jsx)(_.default, {
                            ...e,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            className: y.hoverButton,
                            iconClassName: y.downloadHoverButtonIcon,
                            focusProps: {
                                offset: 2
                            },
                            href: l,
                            mimeType: s
                        })
                    })), null != o && (a = (0, n.jsx)(r.Tooltip, {
                        text: T.default.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
                        children: e => (0, n.jsx)(r.Clickable, {
                            ...e,
                            className: i(y.hoverButton, y.removeAttachmentHoverButton),
                            focusProps: {
                                offset: 2
                            },
                            onClick: o,
                            "aria-label": T.default.Messages.REMOVE_MESSAGE_ATTACHMENT,
                            children: (0, n.jsx)(M.default, {
                                width: 20,
                                height: 20
                            })
                        })
                    })), null == a && null == t) ? null : (0, n.jsxs)("div", {
                        className: i(y.hoverButtonGroup, {
                            [y.nonMediaAttachment]: !d
                        }),
                        children: [t, a]
                    })
                },
                L = e => {
                    let {
                        message: t,
                        attachment: a,
                        inlineMedia: s,
                        autoPlayGif: o,
                        canRemoveAttachment: u,
                        onRemoveAttachment: c,
                        onClick: m,
                        onContextMenu: _,
                        onPlay: A,
                        renderImageComponent: M,
                        renderVideoComponent: S,
                        renderAudioComponent: j,
                        renderPlaintextFilePreview: L,
                        className: D,
                        imgContainerClassName: w,
                        imgClassName: F,
                        focusable: P,
                        hiddenSpoilers: k,
                        mediaLayoutType: B,
                        maxWidth: G,
                        maxHeight: V,
                        noBorderBottomRadius: R,
                        useFullWidth: H,
                        isAttachmentMediaType: K
                    } = e, {
                        width: W,
                        height: U,
                        description: z,
                        spoiler: X
                    } = a, Y = O(a, s), [q, J] = l.useState(!1), Q = (0, d.default)(t.getChannelId()), {
                        enabled: Z
                    } = h.default.useExperiment({
                        location: "MessageAttachment"
                    }, {
                        autoTrackExposure: !1
                    }), $ = l.useMemo(() => null != a.content_type && -1 !== a.content_type.indexOf("/") ? a.content_type.split("/") : ["unknown", "unknown"], [a.content_type]), ee = l.useCallback(() => {
                        c(a)
                    }, [a, c]), et = l.useCallback((e, n, l) => {
                        if (t.hasFlag(N.MessageFlags.IS_VOICE_MESSAGE)) {
                            var s;
                            (0, g.logVoiceMessagePlaybackStarted)(t.id, null !== (s = a.duration_secs) && void 0 !== s ? s : null, n, t.author.id)
                        } else null == A || A(e, n, l)
                    }, [t, a.duration_secs, A]), ea = l.useCallback((e, n) => {
                        var l;
                        t.hasFlag(N.MessageFlags.IS_VOICE_MESSAGE) && (0, g.logVoiceMessagePlaybackEnded)(t.id, null !== (l = a.duration_secs) && void 0 !== l ? l : null, e, t.author.id, n)
                    }, [t, a.duration_secs]), en = l.useCallback(e => {
                        var a;
                        t.hasFlag(N.MessageFlags.IS_VOICE_MESSAGE) && (0, g.logVoiceMessagePlaybackFailed)(t.id, null !== (a = null == e ? void 0 : e.message) && void 0 !== a ? a : null)
                    }, [t]), el = l.useCallback(() => {
                        if (B === C.MediaLayoutType.MOSAIC) {
                            let e = !Q && "VIDEO" === Y || !Q && "AUDIO" === Y || "OTHER" === Y;
                            if (K) {
                                if (null == W || null == U) return null;
                                let e = (0, v.getRatio)({
                                    width: W,
                                    height: U,
                                    maxWidth: C.MEDIA_MOSAIC_MAX_WIDTH,
                                    maxHeight: C.MEDIA_MOSAIC_MAX_HEIGHT
                                });
                                if (!H && (e * W < C.MINIMUM_MEDIA_MOSAIC_DIM || e * U < C.MINIMUM_MEDIA_MOSAIC_DIM)) return null
                            }
                            return !q && (0, n.jsx)(b, {
                                downloadURL: e ? a.url : void 0,
                                downloadMimeType: e ? $ : void 0,
                                onRemoveAttachment: u ? ee : void 0,
                                isAttachmentMediaType: K
                            })
                        }
                        return u && (0, n.jsx)(r.Clickable, {
                            className: X ? y.spoilerRemoveAttachmentButton : y.removeAttachmentButton,
                            focusProps: {
                                offset: {
                                    bottom: 4
                                }
                            },
                            onClick: () => c(a),
                            "aria-label": T.default.Messages.REMOVE_MESSAGE_ATTACHMENT,
                            children: (0, n.jsx)(I.default, {
                                width: 16,
                                height: 16
                            })
                        })
                    }, [B, u, X, Y, K, q, a, $, ee, W, U, H, c, Q]), es = l.useCallback(() => {
                        var e;
                        return (0, E.hasFlag)(null !== (e = a.flags) && void 0 !== e ? e : 0, N.MessageAttachmentFlags.IS_CLIP) ? (0, n.jsxs)(r.TooltipContainer, {
                            text: T.default.Messages.CLIPS_BETA_TAG_HOVER,
                            className: y.clipPill,
                            children: [(0, n.jsx)(p.default, {}), (0, n.jsx)(r.Text, {
                                variant: "text-xs/semibold",
                                color: "always-white",
                                children: T.default.Messages.CLIP_TAG
                            })]
                        }) : null
                    }, [a]);
                    switch (Y) {
                        case "IMAGE":
                            return (0, n.jsx)(x.GIFAccessoryContext.Consumer, {
                                children: e => M({
                                    alt: z,
                                    src: null != a.proxy_url && "" !== a.proxy_url ? a.proxy_url : a.url,
                                    original: a.url,
                                    placeholder: a.placeholder,
                                    placeholderVersion: a.placeholder_version,
                                    showThumbhashPlaceholder: Z,
                                    width: W,
                                    height: U,
                                    autoPlay: o && !k,
                                    onClick: m,
                                    onContextMenu: _,
                                    shouldHideMediaOptions: Q,
                                    renderAccessory: e,
                                    renderAdjacentContent: el,
                                    containerClassName: D,
                                    className: w,
                                    imageClassName: F,
                                    shouldLink: P,
                                    hiddenSpoilers: k,
                                    responsive: !0,
                                    mediaLayoutType: B,
                                    maxWidth: G,
                                    maxHeight: V,
                                    useFullWidth: H
                                })
                            });
                        case "VIDEO":
                            let ei = new URL(a.proxy_url);
                            return ei.searchParams.append("format", "jpeg"), S({
                                poster: ei.toString(),
                                fileSize: a.size,
                                fileName: a.filename,
                                src: a.url,
                                placeholder: a.placeholder,
                                placeholderVersion: a.placeholder_version,
                                showThumbhashPlaceholder: Z,
                                width: W,
                                height: U,
                                onClick: m,
                                onContextMenu: _,
                                renderOverlayContent: es,
                                renderAdjacentContent: el,
                                naturalWidth: W,
                                naturalHeight: U,
                                className: i(D, {
                                    [y.noBorderBottomRadius]: R
                                }),
                                playable: P,
                                responsive: !0,
                                mediaLayoutType: B,
                                maxWidth: G,
                                maxHeight: V,
                                useFullWidth: H,
                                mimeType: $,
                                onPlay: A,
                                downloadable: !Q,
                                mediaPlayerClassName: R ? y.noBorderBottomRadius : void 0
                            });
                        case "AUDIO":
                            return j({
                                fileSize: a.size,
                                fileName: a.filename,
                                src: a.url,
                                className: D,
                                playable: P,
                                mimeType: $,
                                durationSecs: a.duration_secs,
                                waveform: a.waveform,
                                renderAdjacentContent: el,
                                onVolumeShow: () => J(!0),
                                onVolumeHide: () => J(!1),
                                onPlay: et,
                                onPause: ea,
                                onError: en
                            });
                        case "PLAINTEXT_PREVIEW":
                            return L({
                                attachment: a,
                                className: D,
                                onClick: m,
                                onContextMenu: _,
                                renderAdjacentContent: el
                            });
                        case "OTHER":
                            return (0, n.jsx)(f.default, {
                                url: a.url,
                                filename: a.filename,
                                size: a.size,
                                onClick: m,
                                onContextMenu: _,
                                className: D,
                                renderAdjacentContent: el
                            });
                        case "INVALID":
                            return null
                    }
                };
            var D = e => {
                var t;
                let {
                    className: a,
                    attachment: s,
                    message: r,
                    inlineMedia: d,
                    useFullWidth: u,
                    mediaLayoutType: m,
                    canRemoveAttachment: h,
                    isSingleMosaicItem: g,
                    footer: f,
                    ..._
                } = e, {
                    width: x,
                    height: p
                } = s, I = (0, o.useShouldRedactExplicitContent)(r.channel_id, r.author.id), M = (0, c.getObscureReason)(s, I), [E, N] = l.useState(void 0 !== M), T = m === C.MediaLayoutType.MOSAIC, S = !T && (null != x && x < 200 || null != p && p < 50), b = O(s, d);
                let D = "IMAGE" === (t = b) || "VIDEO" === t,
                    w = j(O(s, d)),
                    F = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return (0, n.jsx)(L, {
                            ..._,
                            attachment: s,
                            message: r,
                            inlineMedia: d,
                            hiddenSpoilers: e,
                            canRemoveAttachment: h,
                            className: i(a, y.attachmentContentItem, {
                                [y.obscured]: E && !S,
                                [y.hiddenSpoiler]: E && M === c.ObscureReason.SPOILER,
                                [y.hiddenExplicit]: E && null != M && [c.ObscureReason.EXPLICIT_CONTENT, c.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(M),
                                [y.hiddenAttachment]: E && e,
                                [y.inline]: E && S
                            }),
                            focusable: !e,
                            mediaLayoutType: m,
                            noBorderBottomRadius: null != f,
                            useFullWidth: u,
                            isAttachmentMediaType: w
                        })
                    };
                return (0, n.jsxs)("div", {
                    children: [(0, n.jsx)("div", {
                        className: i(y.messageAttachment, {
                            [y.messageAttachmentNoJustify]: D,
                            [y.messageAttachmentFullWidth]: u,
                            [y.messageAttachmentMediaMosaic]: T,
                            [y.hideOverflow]: T && w,
                            [y.noBorderBottomRadius]: null != f
                        }),
                        children: null != M ? (0, n.jsx)(A.default, {
                            type: A.default.Types.ATTACHMENT,
                            inline: S,
                            reason: M,
                            isSingleMosaicItem: g,
                            obscured: E,
                            containerStyles: function(e, t, a) {
                                if (!t) return;
                                let n = e.width;
                                if (void 0 !== e.width && void 0 !== e.height) {
                                    let {
                                        width: t
                                    } = (0, v.fit)({
                                        width: e.width,
                                        height: e.height,
                                        maxWidth: 400,
                                        maxHeight: 300
                                    });
                                    n = t
                                }
                                return {
                                    ...a !== C.MediaLayoutType.MOSAIC && {
                                        maxWidth: null != n ? n : "400px"
                                    },
                                    width: "100%",
                                    height: "100%",
                                    justifySelf: "auto"
                                }
                            }(s, D, m),
                            obscurityControlClassName: i({
                                [y.obscureVideo]: "VIDEO" === b && g && !E
                            }),
                            onToggleObscurity: () => N(e => !e),
                            children: e => F(e)
                        }) : F()
                    }), f]
                })
            }
        },
        377502: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return w
                }
            }), a("222007"), a("702976");
            var n = a("37983"),
                l = a("884691"),
                s = a("414456"),
                i = a.n(s),
                r = a("627445"),
                o = a.n(r),
                d = a("917351"),
                u = a.n(d),
                c = a("446674"),
                m = a("411723"),
                h = a("42203"),
                g = a("328620"),
                f = a("568734"),
                _ = a("994402"),
                A = a("719347"),
                x = a("49111"),
                p = a("655793");
            let I = Math.round((A.MEDIA_MOSAIC_MAX_WIDTH - 8) / 3),
                M = Math.round((A.MEDIA_MOSAIC_MAX_WIDTH - 4) / 2),
                E = Math.round((A.MEDIA_MOSAIC_MAX_HEIGHT - 4) / 2),
                v = Math.round(2 * (A.MEDIA_MOSAIC_MAX_WIDTH - 4) / 3),
                C = v / 2,
                N = e => {
                    let {
                        mediaAttachments: t,
                        getAttachmentKind: a,
                        footer: l
                    } = e;
                    null != l && o(1 === t.length, "footer only gets applied to single attachments");
                    let s = t.length;
                    if (1 === s) return (0, n.jsx)(T, {
                        attachmentsForLayout: t,
                        getAttachmentKind: a,
                        isSingleImage: !0,
                        footer: l
                    });
                    if (2 === s) return (0, n.jsx)(y, {
                        attachmentsForLayout: t,
                        getAttachmentKind: a
                    });
                    if (3 === s) return (0, n.jsx)(S, {
                        attachmentsForLayout: t,
                        getAttachmentKind: a
                    });
                    if (4 === s) return (0, n.jsx)(j, {
                        attachmentsForLayout: t,
                        getAttachmentKind: a
                    });
                    let i = s % 3;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [1 === i && (0, n.jsx)(T, {
                            attachmentsForLayout: t.slice(0, i),
                            getAttachmentKind: a
                        }), 2 === i && (0, n.jsx)(y, {
                            attachmentsForLayout: t.slice(0, i),
                            getAttachmentKind: a
                        }), 0 === i ? (0, n.jsx)(O, {
                            attachmentsForLayout: t,
                            getAttachmentKind: a
                        }) : (0, n.jsx)(O, {
                            attachmentsForLayout: t.slice(i),
                            getAttachmentKind: a
                        })]
                    })
                },
                T = e => {
                    let {
                        attachmentsForLayout: t,
                        getAttachmentKind: a,
                        isSingleImage: l,
                        footer: s
                    } = e, r = t[0];
                    return (0, n.jsx)("div", {
                        className: i(p.oneByOneGrid, {
                            [p.oneByOneGridSingle]: l,
                            [p.oneByOneGridMosaic]: !l,
                            [p.hasFooter]: null != s
                        }),
                        children: (0, n.jsx)(D, {
                            props: r,
                            attachmentKind: a(r.attachment.id),
                            useFullWidth: !l,
                            isSingleItem: !0,
                            footer: s
                        })
                    })
                },
                y = e => {
                    let {
                        attachmentsForLayout: t,
                        getAttachmentKind: a
                    } = e;
                    return (0, n.jsx)("div", {
                        className: p.oneByTwoGrid,
                        children: t.map(e => (0, n.jsx)("div", {
                            className: p.oneByTwoGridItem,
                            children: (0, n.jsx)(D, {
                                props: e,
                                attachmentKind: a(e.attachment.id),
                                maxWidth: M,
                                maxHeight: M
                            })
                        }, e.attachment.id))
                    })
                },
                S = e => {
                    let {
                        attachmentsForLayout: t,
                        getAttachmentKind: a
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: i(p.oneByTwoGrid, p.oneByTwoLayoutThreeGrid),
                        children: [(0, n.jsx)("div", {
                            className: p.oneByTwoSoloItem,
                            children: (0, n.jsx)(D, {
                                props: t[0],
                                attachmentKind: a(t[0].attachment.id),
                                maxWidth: v
                            })
                        }), (0, n.jsx)("div", {
                            className: p.oneByTwoDuoItem,
                            children: (0, n.jsx)("div", {
                                className: p.twoByOneGrid,
                                children: t.splice(1).map(e => (0, n.jsx)("div", {
                                    className: p.twoByOneGridItem,
                                    children: (0, n.jsx)(D, {
                                        props: e,
                                        attachmentKind: a(e.attachment.id),
                                        maxWidth: C,
                                        maxHeight: E
                                    })
                                }, e.attachment.id))
                            })
                        })]
                    })
                },
                j = e => {
                    let {
                        attachmentsForLayout: t,
                        getAttachmentKind: a
                    } = e;
                    return (0, n.jsx)("div", {
                        className: p.twoByTwoGrid,
                        children: t.map(e => (0, n.jsx)(D, {
                            props: e,
                            attachmentKind: a(e.attachment.id),
                            maxWidth: M,
                            maxHeight: E
                        }, e.attachment.id))
                    })
                },
                O = e => {
                    let {
                        attachmentsForLayout: t,
                        getAttachmentKind: a
                    } = e;
                    return (0, n.jsx)("div", {
                        className: p.threeByThreeGrid,
                        children: t.map(e => (0, n.jsx)(D, {
                            props: e,
                            attachmentKind: a(e.attachment.id),
                            maxWidth: I,
                            maxHeight: I
                        }, e.attachment.id))
                    })
                },
                b = e => ({
                    className: i(e, p.attachmentContentContainer),
                    imgContainerClassName: p.lazyImgContainer,
                    imgClassName: p.lazyImg
                }),
                L = e => ({
                    className: i(e, p.lazyImg)
                }),
                D = e => {
                    let {
                        props: t,
                        attachmentKind: a,
                        maxWidth: l = A.MEDIA_MOSAIC_MAX_WIDTH,
                        maxHeight: s = A.MEDIA_MOSAIC_MAX_HEIGHT,
                        useFullWidth: i = !0,
                        isSingleItem: r = !1,
                        footer: o
                    } = e, d = {
                        ...t,
                        ..."IMAGE" === a && b(t.className),
                        ..."VIDEO" === a && L(t.className),
                        mediaLayoutType: A.MediaLayoutType.MOSAIC,
                        maxWidth: l,
                        maxHeight: s,
                        useFullWidth: i,
                        isSingleMosaicItem: r
                    };
                    return (0, n.jsx)(g.GIFAccessoryContext.Provider, {
                        value: t.gifFavoriteButton,
                        children: (0, n.jsx)(_.default, {
                            ...d,
                            footer: o
                        })
                    })
                };
            var w = e => {
                let {
                    attachments: t
                } = e, a = t[0].message.channel_id, s = (0, c.useStateFromStores)([h.default], () => {
                    var e;
                    return null === (e = h.default.getBasicChannel(a)) || void 0 === e ? void 0 : e.guild_id
                }), i = l.useMemo(() => new Map(t.map(e => [e.attachment.id, (0, _.getAttachmentKind)(e.attachment, e.inlineMedia)])), [t]), r = l.useCallback(e => {
                    var t;
                    return null !== (t = i.get(e)) && void 0 !== t ? t : "INVALID"
                }, [i]), [o, d] = l.useMemo(() => u.partition(t, e => {
                    var t;
                    return (0, f.hasFlag)(null !== (t = e.attachment.flags) && void 0 !== t ? t : 0, x.MessageAttachmentFlags.IS_CLIP)
                }), [t]), [g, A] = l.useMemo(() => u.partition(d, e => (0, _.isMediaAttachment)(r(e.attachment.id))), [d, r]);
                return (0, n.jsxs)(n.Fragment, {
                    children: [g.length > 0 && (0, n.jsx)("div", {
                        className: p.mediaAttachmentsContainer,
                        children: (0, n.jsx)(N, {
                            mediaAttachments: g,
                            getAttachmentKind: r
                        })
                    }), A.length > 0 && (0, n.jsx)("div", {
                        className: p.nonMediaAttachmentsContainer,
                        children: A.map(e => (0, n.jsx)("div", {
                            className: p.nonMediaAttachmentItem,
                            children: (0, n.jsx)(D, {
                                props: e,
                                attachmentKind: r(e.attachment.id)
                            })
                        }, e.attachment.id))
                    }), o.length > 0 && o.map(e => (0, n.jsx)("div", {
                        className: p.mediaAttachmentsContainer,
                        children: (0, n.jsx)(N, {
                            mediaAttachments: [e],
                            getAttachmentKind: r,
                            footer: (0, n.jsx)(m.default, {
                                attachment: e.attachment,
                                guildId: s
                            })
                        })
                    }, e.attachment.id))]
                })
            }
        }
    }
]);