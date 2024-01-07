(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["97203"], {
        295544: function(e, t, a) {
            "use strict";
            e.exports = a.p + "e866c0682a80de08f451.svg"
        },
        195272: function(e, t, a) {
            "use strict";
            e.exports = a.p + "e69c6ba7f0551970b560.svg"
        },
        907572: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                FriendsIcon: function() {
                    return r
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("669491"),
                i = a("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, i.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        className: s
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M3 5v-.75C3 3.56 3.56 3 4.25 3s1.24.56 1.33 1.25C6.12 8.65 9.46 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.2-.15 7.65 7.65 0 0 0-1.32-2.3c-.15-.2-.42-.06-.39.17l.25 2c.02.15-.1.28-.25.28H9a2 2 0 0 1-2-2v-2.22c0-1.57-.67-3.05-1.53-4.37A15.85 15.85 0 0 1 3 5Z",
                        className: s
                    })]
                })
            }
        },
        304983: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                MoreHorizontalIcon: function() {
                    return r
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("669491"),
                i = a("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, i.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        758946: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                createAudioMP4FromVideoMP4: function() {
                    return i
                }
            }), a("222007"), a("424973");
            var n = a("469520"),
                l = a.n(n);
            async function i(e) {
                let t = l.createFile(),
                    a = l.createFile(),
                    n = {};
                e.fileStart = 0, t.onReady = e => {
                    for (let l of (a.init({
                            duration: e.duration,
                            timescale: e.timescale
                        }), e.audioTracks)) n[l.id] = l, t.setExtractionOptions(l.id, null, {
                        nbSamples: 1 / 0
                    }), a.addTrack({
                        id: l.id,
                        timescale: l.timescale,
                        hdlr: "soun",
                        type: "mp4a",
                        duration: l.duration,
                        layer: l.layer,
                        channel_count: l.audio.channel_count,
                        samplerate: l.audio.sample_rate,
                        samplesize: l.audio.sample_size,
                        name: l.name
                    });
                    t.start()
                };
                let i = new Promise(e => {
                    t.onSamples = (l, i, r) => {
                        for (let e of r) a.addSample(l, e.data, e);
                        t.releaseUsedSamples(l, r.length), delete n[l];
                        let s = a.getTrackById(l),
                            u = t.getTrackById(l);
                        if (null != u.edts) {
                            let e = u.edts.elst;
                            s.add("edts").boxes.push(e)
                        }
                        0 === Object.keys(n).length && e()
                    }
                });
                return t.appendBuffer(e), t.flush(), await i, a.getBuffer()
            }
        },
        643290: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return m
                }
            }), a("222007");
            var n = a("37983"),
                l = a("884691"),
                i = a("446674"),
                r = a("77078"),
                s = a("442939"),
                u = a("915639"),
                o = a("953109"),
                d = a("299039"),
                c = a("782340"),
                f = a("258818");

            function m(e) {
                var t, a;
                let {
                    clip: m
                } = e, [v] = (0, s.default)([null !== (t = m.applicationId) && void 0 !== t ? t : ""]), E = (0, i.useStateFromStores)([u.default], () => u.default.locale), p = l.useMemo(() => new Date(d.default.extractTimestamp(m.id)), [m.id]);
                return (0, n.jsxs)("div", {
                    className: f.root,
                    children: [(0, n.jsxs)("div", {
                        className: f.nameSection,
                        children: [(0, n.jsx)(o.default, {
                            game: v
                        }), (0, n.jsx)(r.Text, {
                            className: f.name,
                            variant: "text-md/medium",
                            color: "interactive-active",
                            children: null !== (a = null == v ? void 0 : v.name) && void 0 !== a ? a : m.applicationName
                        })]
                    }), (0, n.jsxs)("div", {
                        className: f.timeContainer,
                        children: [(0, n.jsxs)("div", {
                            children: [(0, n.jsx)(r.FormTitle, {
                                className: f.timeTitle,
                                children: c.default.Messages.CLIPS_EDIT_DATE_TITLE
                            }), (0, n.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "interactive-active",
                                children: p.toLocaleDateString(E, {
                                    year: "2-digit",
                                    month: "2-digit",
                                    day: "2-digit"
                                })
                            })]
                        }), (0, n.jsxs)("div", {
                            children: [(0, n.jsx)(r.FormTitle, {
                                className: f.timeTitle,
                                children: c.default.Messages.CLIPS_EDIT_TIME_TITLE
                            }), (0, n.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "interactive-active",
                                children: p.toLocaleTimeString(E, {
                                    hour: "numeric",
                                    minute: "numeric"
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        488673: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return T
                }
            }), a("222007");
            var n = a("37983"),
                l = a("884691"),
                i = a("414456"),
                r = a.n(i),
                s = a("551042"),
                u = a("77078"),
                o = a("272030"),
                d = a("49671"),
                c = a("817963"),
                f = a("42203"),
                m = a("305961"),
                v = a("957255"),
                E = a("697218"),
                p = a("433487"),
                h = a("299039"),
                C = a("803725"),
                N = a("142485"),
                x = a("643290"),
                g = a("431734"),
                S = a("80028"),
                I = a("846325"),
                _ = a("782340"),
                L = a("515597"),
                M = a("446825").Buffer;

            function T(e) {
                let {
                    clip: t,
                    cropData: i,
                    channelId: T,
                    clipName: A,
                    voiceAudioEnabled: j,
                    applicationAudioEnabled: R,
                    onSetClipName: P,
                    onChangeVoiceAudioEnabled: b,
                    onChangeApplicationAudioEnabled: w,
                    onClose: y
                } = e, [D, k] = l.useState(null), {
                    onShareClick: O
                } = (0, N.default)({
                    channelId: T,
                    setExporting: e => k(null != e ? "share" : null)
                });
                async function G() {
                    let e = f.default.getChannel(T);
                    k("export");
                    try {
                        let l = await (0, C.exportClip)(t, {
                            ...i,
                            applicationAudio: R,
                            voiceAudio: j
                        });
                        (0, u.openModalLazy)(async () => {
                            let {
                                default: i
                            } = await a.el("823749").then(a.bind(a, "823749")), r = (null == e ? void 0 : e.guild_id) != null ? m.default.getGuild(e.guild_id) : null, s = null != r && (0, c.getManageResourcePermissions)(r, v.default, E.default).canCreateExpressions, u = null == A || "" === A ? (0, S.CLIP_NAME_TEMPLATE)(h.default.extractTimestamp(t.id)) : A, o = u.slice(0, I.MAX_LENGTH_SOUND_NAME);
                            return t => (0, n.jsx)(i, {
                                ...t,
                                showGuildPicker: !0,
                                guildId: s ? null == e ? void 0 : e.guild_id : void 0,
                                sourceFile: {
                                    file: new File([l], "".concat(u, ".mp4"), {
                                        type: "video/mp4"
                                    }),
                                    name: o
                                }
                            })
                        })
                    } catch (e) {} finally {
                        k(null)
                    }
                }
                async function F() {
                    k("export");
                    try {
                        let e = await (0, C.exportClip)(t, {
                                ...i,
                                applicationAudio: R,
                                voiceAudio: j
                            }),
                            a = await e.arrayBuffer();
                        await d.default.fileManager.saveWithDialog(M.from(a), (0, S.CLIPS_EXPORT_FILENAME)(t.id))
                    } catch (e) {} finally {
                        k(null)
                    }
                }

                function U() {
                    (0, u.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("386092").then(a.bind(a, "386092"));
                        return a => (0, n.jsx)(e, {
                            clip: t,
                            ...a,
                            onDelete: async () => {
                                await a.onClose(), y()
                            }
                        })
                    })
                }
                return (0, n.jsxs)("div", {
                    className: L.clipForm,
                    children: [(0, n.jsxs)("div", {
                        className: r(L.clipFormSection, L.editSection),
                        children: [(0, n.jsx)(u.FormItem, {
                            className: L.clipFormItem,
                            title: _.default.Messages.CLIPS_EDIT_TITLE,
                            children: (0, n.jsx)(u.TextInput, {
                                onChange: e => {
                                    "" === e ? P(void 0) : P(e)
                                },
                                value: A,
                                minLength: S.CLIP_NAME_MIN_CHAR_LENGTH,
                                maxLength: S.CLIP_NAME_MAX_CHAR_LENGTH,
                                placeholder: _.default.Messages.CLIPS_UNTITLED
                            })
                        }), (0, n.jsxs)("div", {
                            className: L.clipFormSwitches,
                            children: [(0, n.jsx)(u.FormSwitch, {
                                onChange: w,
                                value: R,
                                hideBorder: !0,
                                children: _.default.Messages.CLIPS_EDIT_GAME_AUDIO
                            }), (0, n.jsx)(u.FormSwitch, {
                                onChange: b,
                                value: j,
                                hideBorder: !0,
                                children: _.default.Messages.CLIPS_EDIT_VOICE_CHANNEL_AUDIO
                            })]
                        })]
                    }), (0, n.jsxs)("div", {
                        className: r(L.clipFormSection, L.metadataSection),
                        children: [(0, n.jsx)(x.default, {
                            clip: t
                        }), (0, n.jsx)(g.default, {
                            className: L.userList,
                            clip: t
                        })]
                    }), (0, n.jsxs)("div", {
                        className: L.clipFormFooter,
                        children: [(0, n.jsx)(u.Button, {
                            submitting: "share" === D,
                            disabled: null != D && "share" !== D,
                            color: u.Button.Colors.BRAND,
                            wrapperClassName: L.clipFormFooterButton,
                            onClick: () => O({
                                clip: {
                                    ...t,
                                    name: A
                                },
                                cropData: i,
                                applicationAudioEnabled: R,
                                voiceAudioEnabled: j,
                                onShareComplete: () => {
                                    s.closeModal(S.CLIPS_EDIT_MODAL_KEY), s.closeModal(S.CLIPS_GALLERY_MODAL_KEY)
                                }
                            }),
                            children: _.default.Messages.CLIPS_EDIT_SHARE_CLIP
                        }), (0, n.jsx)(u.Button, {
                            size: u.Button.Sizes.ICON,
                            className: L.clipFormFooterButton,
                            disabled: null != D,
                            wrapperClassName: r(L.clipFormFooterButton, {
                                [L.submittingWrapperFix]: null != D
                            }),
                            color: u.Button.Colors.PRIMARY,
                            onClick: y,
                            children: _.default.Messages.SAVE_CHANGES
                        }), (0, n.jsx)(u.Button, {
                            "aria-label": _.default.Messages.MORE_OPTIONS,
                            size: u.Button.Sizes.ICON,
                            wrapperClassName: r(L.clipFormFooterButton, {
                                [L.submittingWrapperFix]: null != D
                            }),
                            submitting: "export" === D,
                            disabled: null != D && "export" !== D,
                            color: u.Button.Colors.PRIMARY,
                            onClick: function(e) {
                                (0, o.openContextMenuLazy)(e, async () => {
                                    let {
                                        default: e
                                    } = await a.el("87102").then(a.bind(a, "87102"));
                                    return t => (0, n.jsx)(e, {
                                        ...t,
                                        onExportToSoundboard: G,
                                        onExportToFile: F,
                                        onDelete: U,
                                        channelId: T
                                    })
                                })
                            },
                            children: (0, n.jsx)(p.default, {})
                        })]
                    })]
                })
            }
        },
        473070: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return x
                }
            }), a("222007"), a("511434"), a("313619"), a("654714"), a("287168"), a("956660");
            var n = a("37983"),
                l = a("884691"),
                i = a("759843"),
                r = a("77078"),
                s = a("477566"),
                u = a("49671"),
                o = a("812204"),
                d = a("685665"),
                c = a("803725"),
                f = a("758946"),
                m = a("99366"),
                v = a("135284"),
                E = a("488673"),
                p = a("5431"),
                h = a("464135"),
                C = a("782340"),
                N = a("756458");

            function x(e) {
                var t, a, p, h, x, S, I, _;
                let {
                    clip: L,
                    channelId: M,
                    transitionState: T,
                    onClose: A
                } = e, [j, R] = l.useState(!0), [P, b] = l.useState(null), [w, y] = l.useState(null), {
                    AnalyticsLocationProvider: D
                } = (0, d.default)(o.default.CLIPS_EDITOR);
                l.useEffect(() => {
                    (async function e() {
                        let e;
                        try {
                            e = await u.default.clips.loadClip(L.filepath)
                        } catch {
                            A(), s.default.show({
                                title: C.default.Messages.CLIPS_LOAD_ERROR_TITLE,
                                body: C.default.Messages.CLIPS_LOAD_ERROR_BODY
                            });
                            return
                        }
                        let t = e.data.buffer,
                            a = await (0, f.createAudioMP4FromVideoMP4)(t),
                            n = URL.createObjectURL(new Blob([a], {
                                type: "audio/mp4"
                            })),
                            l = URL.createObjectURL(new Blob([e.data], {
                                type: "video/mp4"
                            }));
                        y(n), b(l)
                    })()
                }, [L.filepath, A]), l.useEffect(() => () => {
                    null != P && URL.revokeObjectURL(P)
                }, [P]), l.useEffect(() => () => {
                    null != w && URL.revokeObjectURL(w)
                }, [w]);
                let [k, O] = l.useState(null === (x = null === (t = L.editMetadata) || void 0 === t ? void 0 : t.voiceAudio) || void 0 === x || x), [G, F] = l.useState(null === (S = null === (a = L.editMetadata) || void 0 === a ? void 0 : a.applicationAudio) || void 0 === S || S), [U, B] = l.useState({
                    start: null !== (I = null === (p = L.editMetadata) || void 0 === p ? void 0 : p.start) && void 0 !== I ? I : 0,
                    end: null !== (_ = null === (h = L.editMetadata) || void 0 === h ? void 0 : h.end) && void 0 !== _ ? _ : 0
                }), [V, H] = l.useState(L.name), z = l.useRef({
                    name: V,
                    editMetadata: {
                        start: U.start,
                        end: U.end,
                        voiceAudio: k,
                        applicationAudio: G
                    }
                });
                z.current = {
                    name: V,
                    editMetadata: {
                        start: U.start,
                        end: U.end,
                        voiceAudio: k,
                        applicationAudio: G
                    }
                };
                let Z = (0, v.useClipProtocolURL)(L);
                return l.useEffect(() => {
                    async function e() {
                        let e = {};
                        null != Z && (e = {
                            thumbnail: await (0, m.createThumbnailFromVideo)(Z, z.current.editMetadata.start)
                        }), (0, c.updateClipMetadata)(L.id, {
                            ...z.current,
                            ...e
                        })
                    }
                    return () => {
                        e()
                    }
                }, [L.id, Z]), (0, n.jsx)(r.ModalRoot, {
                    impression: {
                        impressionName: i.ImpressionNames.CLIP_EDITOR_VIEWED
                    },
                    size: r.ModalSize.DYNAMIC,
                    className: N.modalRoot,
                    transitionState: T,
                    children: (0, n.jsx)(D, {
                        children: (0, n.jsx)(r.ModalContent, {
                            className: N.modalContent,
                            children: null == P || null == w ? (0, n.jsx)("div", {
                                className: N.spinnerContainer,
                                children: (0, n.jsx)(r.Spinner, {})
                            }) : (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(g, {
                                    voiceAudioEnabled: k,
                                    applicationAudioEnabled: G,
                                    videoURL: P,
                                    cropData: U,
                                    onSetCropData: B,
                                    isLoading: j,
                                    onDoneLoading: () => R(!1),
                                    audioURL: w,
                                    transitionState: T
                                }), !j && (0, n.jsx)(E.default, {
                                    voiceAudioEnabled: k,
                                    channelId: M,
                                    applicationAudioEnabled: G,
                                    onChangeApplicationAudioEnabled: F,
                                    onChangeVoiceAudioEnabled: O,
                                    cropData: U,
                                    onSetClipName: H,
                                    clipName: V,
                                    clip: L,
                                    onClose: A
                                })]
                            })
                        })
                    })
                })
            }

            function g(e) {
                let {
                    cropData: t,
                    onSetCropData: a,
                    voiceAudioEnabled: i,
                    applicationAudioEnabled: s,
                    isLoading: u,
                    onDoneLoading: o,
                    videoURL: d,
                    audioURL: c,
                    transitionState: f
                } = e, m = l.useRef(null), v = l.useCallback(() => {
                    var e;
                    null === (e = m.current) || void 0 === e || e.seek(t.start), o()
                }, [o, t.start]);
                return l.useEffect(() => {
                    function e(e) {
                        var a, n;
                        if ((null === (a = document.activeElement) || void 0 === a ? void 0 : a.tagName) === "INPUT") return;
                        let l = m.current;
                        if (null == l) return;
                        let i = null === (n = m.current) || void 0 === n ? void 0 : n.videoElement;
                        if (null == i) return;
                        let r = !1;
                        switch (e.key) {
                            case " ":
                                r = !0, i.paused ? l.play() : l.pause();
                                break;
                            case "ArrowLeft":
                                r = !0, l.seek(Math.max(i.currentTime - i.duration / 30, t.start));
                                break;
                            case "ArrowRight":
                                r = !0, l.seek(Math.min(i.currentTime + i.duration / 30, t.end))
                        }
                        r && (e.stopPropagation(), e.preventDefault())
                    }
                    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                }, [t.start, t.end]), (0, n.jsxs)("div", {
                    className: N.editorPane,
                    children: [(0, n.jsx)("div", {
                        className: N.videoSizer,
                        children: (0, n.jsx)(p.default, {
                            applicationAudioEnabled: s,
                            voiceAudioEnabled: i,
                            ref: m,
                            audioSrc: c,
                            src: d,
                            isLoading: u,
                            onDoneLoading: v,
                            startTime: t.start,
                            endTime: t.end
                        })
                    }), !u && f && [r.ModalTransitionState.ENTERED, r.ModalTransitionState.HIDDEN].includes(f) ? (0, n.jsx)(h.default, {
                        videoPlayerRef: m,
                        cropData: t,
                        setCropData: a,
                        sourceURL: d
                    }) : null]
                })
            }
        },
        5431: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            }), a("222007"), a("424973");
            var n = a("37983"),
                l = a("884691"),
                i = a("917351"),
                r = a("31695"),
                s = a("58608"),
                u = a("756458");

            function o(e) {
                let {
                    setRef: t,
                    audioTrackLabel: a,
                    src: i,
                    muted: r
                } = e, s = l.useCallback(e => {
                    t(e, a)
                }, [t, a]), o = l.useCallback(e => {
                    Object.values(e.currentTarget.audioTracks).forEach(e => {
                        e.enabled = a === e.label
                    })
                }, [a]);
                return (0, n.jsx)("audio", {
                    id: "ClipsPlayerAudioTrack:".concat(a),
                    className: u.hidden,
                    ref: s,
                    src: i,
                    muted: r,
                    preload: "auto",
                    onLoadedMetadata: o
                })
            }
            var d = l.forwardRef(function(e, t) {
                let {
                    src: a,
                    audioSrc: d,
                    applicationAudioEnabled: c,
                    voiceAudioEnabled: f,
                    isLoading: m,
                    onDoneLoading: v,
                    startTime: E = 0,
                    endTime: p
                } = e, h = l.useRef({}), [C, N] = l.useState([]), x = l.useRef(!1), g = l.useCallback(() => {
                    let e = h.current.main;
                    if (null == e) return;
                    let t = (0, i.round)(e.currentTime, 3),
                        a = (0, i.round)(E, 3),
                        n = null != p ? (0, i.round)(p, 3) : (0, i.round)(e.duration, 3);
                    if (t >= n || t < a) {
                        for (let e of Object.values(h.current)) null != e && (e.currentTime = E);
                        return !0
                    }
                }, [E, p]);
                (0, r.default)(() => {
                    if (x.current) {
                        let e = g();
                        e && S()
                    }
                });
                let S = l.useCallback(() => {
                        for (let e of (x.current = !0, g(), Object.values(h.current))) null != e && e.play()
                    }, [g]),
                    I = l.useCallback(() => {
                        for (let e of Object.values(h.current)) null != e && e.pause()
                    }, []),
                    _ = l.useCallback(e => {
                        var t;
                        for (let a of ((null === (t = h.current.main) || void 0 === t ? void 0 : t.paused) && (x.current = !1), Object.values(h.current))) null != a && (a.currentTime = e)
                    }, []),
                    L = l.useCallback(() => {
                        var e;
                        (null === (e = h.current.main) || void 0 === e ? void 0 : e.paused) ? S(): I()
                    }, [S, I]),
                    M = l.useCallback(e => {
                        h.current.main = e
                    }, []),
                    T = l.useCallback(e => {
                        let t = [];
                        for (let a of Object.values(e.currentTarget.audioTracks)) a.label.includes(":application") ? a.enabled = !0 : a.label.includes(":voice") ? (a.enabled = !1, !t.includes(a.label) && t.push(a.label)) : a.enabled = !1;
                        N(t)
                    }, []),
                    A = l.useCallback((e, t) => {
                        h.current[t] = e
                    }, []);
                return (l.useImperativeHandle(t, () => ({
                    play: S,
                    seek: _,
                    pause: I,
                    videoElement: h.current.main
                })), null == a) ? null : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(s.default, {
                        onClick: L,
                        className: m ? u.hidden : u.displayVideo,
                        ref: M,
                        src: a,
                        muted: !c,
                        onLoadedMetadata: T,
                        onLoadedData: v,
                        preload: "auto"
                    }), C.map(e => (0, n.jsx)(o, {
                        audioTrackLabel: e,
                        setRef: A,
                        src: d,
                        muted: !f
                    }, e))]
                })
            })
        },
        464135: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return C
                }
            }), a("222007");
            var n = a("37983"),
                l = a("884691"),
                i = a("414456"),
                r = a.n(i),
                s = a("917351"),
                u = a("65597"),
                o = a("77078"),
                d = a("731898"),
                c = a("31695"),
                f = a("471671"),
                m = a("830837"),
                v = a("132755"),
                E = a("58608"),
                p = a("80028"),
                h = a("766825");

            function C(e) {
                var t, a, i, C;
                let {
                    sourceURL: x,
                    cropData: g,
                    videoPlayerRef: S,
                    setCropData: I
                } = e, [_, L] = l.useState((C = !(null === (a = S.current) || void 0 === a ? void 0 : null === (t = a.videoElement) || void 0 === t ? void 0 : t.paused), C)), M = l.useRef(null), [T, A] = l.useState(null), [j, R] = l.useState(), P = l.useRef(null), b = l.useRef(null), [w, y] = l.useState(0), [D, k] = l.useState(!1), [O, G] = l.useState(null);
                (0, c.default)(() => {
                    var e;
                    let t = null === (e = S.current) || void 0 === e ? void 0 : e.videoElement;
                    null != t && w !== t.currentTime && y(t.currentTime)
                });
                let F = l.useMemo(() => g.end - g.start, [g]);
                l.useEffect(() => {
                    var e;
                    let t = null === (e = S.current) || void 0 === e ? void 0 : e.videoElement,
                        a = P.current,
                        n = b.current;
                    if (null == t || null == a || null == n) return;
                    let l = (0, s.debounce)(L, p.CLIP_PLAYING_DEBOUNCE_MS),
                        i = () => {
                            A(null), k(!1), l.cancel(), l(!0)
                        },
                        r = () => {
                            l.cancel(), l(!1)
                        };
                    return t.addEventListener("play", i), t.addEventListener("pause", r), () => {
                        t.removeEventListener("play", i), t.removeEventListener("pause", r)
                    }
                }, [S]);
                let {
                    ref: U,
                    width: B = 0,
                    height: V = 0
                } = (0, d.default)(), H = (0, u.default)([f.default], () => f.default.windowSize());
                l.useMemo(() => {
                    let e = U.current;
                    null != e && G(e.getBoundingClientRect())
                }, [H.width, H.height, B]);
                let z = l.useRef(null),
                    Z = l.useRef({}),
                    X = l.useCallback((e, t) => {
                        var a, n, l, i;
                        if (null == j) return;
                        if (null == O) return null;
                        let r = (0, s.clamp)(e, O.left, O.right),
                            u = (r - O.left) / O.width * j,
                            o = (0, s.clamp)(u, 0, j),
                            d = T;
                        if (null == d && t && (d = o <= g.start ? "start" : o >= g.end ? "end" : "playhead", null === (a = S.current) || void 0 === a || a.pause(), A(d), k(_)), "start" === d) {
                            let e = (0, s.clamp)(o, 0, g.end - p.MIN_CLIP_DURATION_SECONDS);
                            I({
                                ...g,
                                start: e
                            }), null === (n = S.current) || void 0 === n || n.seek(e)
                        } else if ("end" === d) {
                            let e = (0, s.clamp)(o, g.start + p.MIN_CLIP_DURATION_SECONDS, j);
                            I({
                                ...g,
                                end: e
                            }), null === (l = S.current) || void 0 === l || l.seek(e)
                        } else if ("playhead" === d) {
                            let e = (0, s.clamp)(o, g.start, g.end);
                            null === (i = S.current) || void 0 === i || i.seek(e)
                        }
                    }, [j, O, T, g, S, _, I]),
                    W = l.useCallback(e => {
                        X(e.clientX, !0)
                    }, [X]),
                    Y = l.useCallback(e => {
                        X(e.clientX, !1)
                    }, [X]),
                    K = l.useCallback(() => {
                        if (D) {
                            var e;
                            null === (e = S.current) || void 0 === e || e.play()
                        }
                        k(!1), A(null)
                    }, [S, D]);
                l.useEffect(() => (document.addEventListener("mousemove", Y), document.addEventListener("mouseup", K), () => {
                    document.removeEventListener("mousemove", Y), document.removeEventListener("mouseup", K)
                }), [Y, K]), l.useEffect(() => {
                    (async function e() {
                        var e;
                        let t = U.current,
                            a = M.current;
                        if (null == t || null == a || null == j) return;
                        t.height = V, t.width = B;
                        let n = t.getContext("2d");
                        if (null == n) return;
                        n.fillStyle = "#000", n.fillRect(0, 0, B, V);
                        let l = a.videoWidth / a.videoHeight,
                            i = Math.ceil(V * l),
                            r = Math.ceil(B / i),
                            s = z.current;
                        if (null == s) return;
                        s.width = i, s.height = V;
                        let u = null == s ? void 0 : s.getContext("2d", {
                            willReadFrequently: !0
                        });
                        if (null == u) return;
                        let o = Z.current;
                        if ((null === (e = o[r]) || void 0 === e ? void 0 : e.length) === r) {
                            for (let e = 0; e < r; e++) n.putImageData(o[r][e], i * e, 0);
                            return
                        }
                        for (let e = 0; e < r; e++) await new Promise(t => {
                            a.onseeked = () => {
                                n.drawImage(a, i * e, 0, i, V), u.drawImage(a, 0, 0, i, V);
                                let l = u.getImageData(0, 0, i, V);
                                null == o[r] && (o[r] = []), o[r][e] = l, t()
                            }, a.currentTime = i / B * j * e
                        })
                    })()
                }, [B, V, U, j, z]);
                let q = w - g.start,
                    J = null === (i = S.current) || void 0 === i ? void 0 : i.videoElement;
                return (0, n.jsx)("div", {
                    className: h.centeringWrapper,
                    children: (0, n.jsxs)("div", {
                        className: h.timelineContainer,
                        children: [(0, n.jsx)("div", {
                            className: h.playPauseButtonWrapper,
                            children: (0, n.jsx)(o.Clickable, {
                                onClick: () => {
                                    var e, t;
                                    return _ ? null === (e = S.current) || void 0 === e ? void 0 : e.pause() : null === (t = S.current) || void 0 === t ? void 0 : t.play()
                                },
                                className: h.playPauseButton,
                                children: _ ? (0, n.jsx)(m.default, {
                                    width: 24,
                                    height: 24,
                                    className: h.playPauseIcon
                                }) : (0, n.jsx)(v.default, {
                                    width: 24,
                                    height: 24,
                                    className: h.playPauseIcon
                                })
                            })
                        }), (0, n.jsxs)("div", {
                            className: r(h.timeline, {
                                [h.timelineDragging]: null != T
                            }),
                            onMouseDown: W,
                            children: [(0, n.jsx)("canvas", {
                                className: h.hiddenCanvas,
                                ref: z
                            }), (0, n.jsx)("canvas", {
                                className: h.timelineBackground,
                                ref: U
                            }), (0, n.jsx)("div", {
                                ref: P,
                                className: h.playhead,
                                style: {
                                    left: null != J ? "".concat(J.currentTime / J.duration * 100, "%") : 0
                                }
                            }), (0, n.jsx)(E.default, {
                                preload: "auto",
                                onLoadedMetadata: function() {
                                    let e = M.current;
                                    if (null != e) {
                                        if (R(e.duration), 0 === g.start && (0 === g.end || g.end === e.duration)) {
                                            var t;
                                            null === (t = S.current) || void 0 === t || t.seek(e.duration / 2), y(e.duration / 2)
                                        }
                                        0 === g.end && I(t => ({
                                            ...t,
                                            end: e.duration
                                        }))
                                    }
                                },
                                className: h.timelineVideo,
                                ref: M,
                                src: x,
                                muted: !0
                            }), (0, n.jsxs)("div", {
                                className: h.dragBox,
                                style: {
                                    left: null != j ? "".concat(g.start / j * 100, "%") : "0",
                                    right: null != j ? "".concat((j - g.end) / j * 100, "%") : "0"
                                },
                                children: [(0, n.jsx)("div", {
                                    className: h.timePillContainer,
                                    children: (0, n.jsx)("div", {
                                        ref: b,
                                        className: h.timePillBackground,
                                        children: (0, n.jsxs)(o.Text, {
                                            variant: "text-sm/normal",
                                            className: h.timePillText,
                                            color: "always-white",
                                            children: [N(q), (0, n.jsx)("span", {
                                                className: h.slashCharacter,
                                                children: " / "
                                            }), N(F)]
                                        })
                                    })
                                }), (0, n.jsx)("div", {
                                    className: r(h.dragHandleLeft, {
                                        [h.dragging]: "start" === T
                                    }),
                                    onMouseDown: W,
                                    children: (0, n.jsx)("div", {
                                        className: h.cropLeftArrow
                                    })
                                }), (0, n.jsx)("div", {
                                    className: r(h.dragHandleRight, {
                                        [h.dragging]: "end" === T
                                    }),
                                    onMouseDown: W,
                                    children: (0, n.jsx)("div", {
                                        className: h.cropRightArrow
                                    })
                                })]
                            })]
                        })]
                    })
                })
            }

            function N(e) {
                ((e = Math.round(100 * e) / 100) < 0 || .01 > Math.abs(e)) && (e = 0);
                let t = Math.floor(e / 60),
                    a = Math.floor(e % 60),
                    n = Math.floor(e % 1 * 100);
                return t = t < 10 ? "0" + t : t, a = a < 10 ? "0" + a : a, n = n < 10 ? "0" + n : n, "".concat(t, ":").concat(a, ".").concat(n)
            }
        },
        431734: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return h
                }
            });
            var n = a("37983"),
                l = a("884691"),
                i = a("414456"),
                r = a.n(i),
                s = a("446674"),
                u = a("77078"),
                o = a("308289"),
                d = a("697218"),
                c = a("564875"),
                f = a("449008"),
                m = a("387111"),
                v = a("782340"),
                E = a("887642");

            function p(e) {
                let {
                    user: t
                } = e, a = m.default.useName(null, null, t);
                return (0, n.jsxs)("div", {
                    className: E.userItem,
                    children: [(0, n.jsx)(o.default, {
                        user: t
                    }), (0, n.jsx)(u.Text, {
                        color: "header-primary",
                        variant: "text-sm/medium",
                        children: a
                    })]
                })
            }

            function h(e) {
                let {
                    clip: t,
                    className: a
                } = e, i = (0, s.useStateFromStoresArray)([d.default], () => t.users.map(d.default.getUser).filter(f.isNotNullish)), o = l.useCallback(e => {
                    let {
                        row: t
                    } = e, a = i[t];
                    return null == a ? null : (0, n.jsx)(p, {
                        user: a
                    }, t)
                }, [i]);
                return (0, n.jsxs)("div", {
                    className: r(a, E.root),
                    children: [(0, n.jsx)("div", {
                        className: E.header,
                        children: (0, n.jsxs)(u.FormTitle, {
                            className: E.title,
                            children: [v.default.Messages.CLIPS_EDIT_USER_LIST_TITLE, (0, n.jsxs)("div", {
                                className: E.userCountPill,
                                children: [(0, n.jsx)(u.Text, {
                                    color: "text-normal",
                                    variant: "text-xs/medium",
                                    children: i.length
                                }), (0, n.jsx)(c.default, {
                                    className: E.userCountIcon
                                })]
                            })]
                        })
                    }), (0, n.jsx)(u.List, {
                        className: E.userList,
                        sectionHeight: 0,
                        rowHeight: 40,
                        sections: [i.length],
                        renderRow: o
                    })]
                })
            }
        },
        270161: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
                    return r
                },
                CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
                    return s
                },
                CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
                    return u
                }
            });
            var n = a("316693"),
                l = a("923510"),
                i = a("49111");
            let r = i.Permissions.VIEW_CHANNEL,
                s = n.default.combine(r, i.Permissions.CONNECT),
                u = n.default.combine(r, l.MODERATE_STAGE_CHANNEL_PERMISSIONS)
        },
        817963: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useManageResourcePermissions: function() {
                    return E
                },
                getManageResourcePermissions: function() {
                    return p
                },
                useHasInventoryGuildSettingsPermission: function() {
                    return h
                },
                useShouldShowInventoryGuildSettingsCoachmark: function() {
                    return C
                }
            }), a("222007");
            var n = a("884691"),
                l = a("316693"),
                i = a("446674"),
                r = a("252931"),
                s = a("813006");
            a("923959");
            var u = a("957255"),
                o = a("697218");
            a("991170");
            var d = a("270161"),
                c = a("843455");
            let f = {
                    canCreateExpressions: !1,
                    canCreateGuildEvent: !1,
                    canManageAllExpressions: !1,
                    canManageAllEvents: !1,
                    canManageGuildExpression: () => !1,
                    canManageGuildEvent: () => !1
                },
                m = (e, t, a, n) => {
                    if (null == e) return !1;
                    if (a) return !0;
                    if ("creator_id" in e) return n && null != t && e.creator_id === t.id;
                    if ("userId" in e) return n && null != t && e.userId === t.id;
                    if ("user" in e) {
                        var l;
                        return n && null != t && (null === (l = e.user) || void 0 === l ? void 0 : l.id) === t.id
                    }
                    return !1
                },
                v = e => {
                    if (null == e) return [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS];
                    let t = d.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
                    return e.isGuildStageVoice() ? t = d.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = d.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [l.default.combine(t, c.Permissions.CREATE_EVENTS), l.default.combine(t, c.Permissions.MANAGE_EVENTS)]
                },
                E = e => {
                    let [t, a] = e instanceof s.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : v(e), [l, r, d, E] = (0, i.useStateFromStoresArray)([u.default], () => [u.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e), u.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e), u.default.can(t, e), u.default.can(a, e)]), p = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser()), h = n.useCallback(e => m(e, p, r, l), [l, r, p]), C = n.useCallback(e => m(e, p, E, d), [E, d, p]);
                    return null == e ? f : {
                        canCreateExpressions: l,
                        canCreateGuildEvent: d,
                        canManageAllExpressions: r,
                        canManageAllEvents: E,
                        canManageGuildExpression: h,
                        canManageGuildEvent: C
                    }
                },
                p = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default,
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.default,
                        [n, l] = e instanceof s.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : v(e),
                        i = t.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                        r = t.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                        d = t.can(n, e),
                        E = t.can(l, e),
                        p = a.getCurrentUser();
                    return null == e ? f : {
                        canCreateExpressions: i,
                        canCreateGuildEvent: d,
                        canManageAllExpressions: r,
                        canManageAllEvents: E,
                        canManageGuildExpression: e => m(e, p, r, i),
                        canManageGuildEvent: e => m(e, p, E, d)
                    }
                },
                h = e => {
                    let t = (0, i.useStateFromStores)([u.default], () => u.default.can(c.Permissions.MANAGE_GUILD, e)),
                        {
                            showSettingsToggle: a
                        } = (0, r.useInventoryGuildSettingsExperiment)({
                            guildId: null == e ? void 0 : e.id
                        });
                    return t && null != a
                },
                C = e => {
                    let t = (0, i.useStateFromStores)([u.default], () => u.default.can(c.Permissions.MANAGE_GUILD, e)),
                        {
                            showSettingsToggle: a,
                            getNewSettingsDescriptionLine1: n
                        } = (0, r.useInventoryGuildSettingsExperiment)({
                            guildId: null == e ? void 0 : e.id
                        });
                    return t && null != a && null != n()
                }
        },
        433487: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("469563"),
                i = a("304983"),
                r = a("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: a = 24,
                        color: l = "currentColor",
                        foreground: i,
                        ...s
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, r.default)(s),
                        width: t,
                        height: a,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            fill: l,
                            className: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"
                        })
                    })
                }, i.MoreHorizontalIcon, void 0, {
                    size: 24
                })
        },
        564875: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("469563"),
                i = a("907572"),
                r = a("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: a = 16,
                        color: l = "currentColor",
                        foreground: i,
                        ...s
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, r.default)(s),
                        width: t,
                        height: a,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, n.jsx)("path", {
                                fill: l,
                                className: i,
                                fillRule: "nonzero",
                                d: "M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z",
                                transform: "translate(2 4)"
                            }), (0, n.jsx)("path", {
                                d: "M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"
                            })]
                        })
                    })
                }, i.FriendsIcon, void 0, {
                    size: 16
                })
        }
    }
]);