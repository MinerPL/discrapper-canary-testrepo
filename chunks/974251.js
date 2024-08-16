n(47120), n(411104);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(442837),
    o = n(704215),
    c = n(481060),
    u = n(53281),
    d = n(110924),
    h = n(40851),
    m = n(595519),
    p = n(620662),
    _ = n(424602),
    f = n(924557),
    E = n(435064),
    g = n(712114),
    C = n(605236),
    I = n(536442),
    x = n(79390),
    T = n(665906),
    N = n(706454),
    v = n(695346),
    S = n(433355),
    Z = n(819640),
    A = n(375954),
    M = n(496675),
    b = n(885110),
    R = n(627553),
    j = n(38761),
    L = n(585483),
    P = n(358085),
    O = n(127654),
    y = n(316595),
    D = n(193910),
    k = n(951211),
    U = n(981631),
    w = n(356659),
    B = n(921944),
    H = n(689938),
    G = n(135449);
t.Z = a.memo(function (e) {
    var t, s;
    let V,
        { className: F, channel: W, draftType: z, editorTextContent: Y, setValue: K, canOnlyUseTextCommands: q } = e,
        X = (0, h.bp)(),
        Q = a.useRef(null),
        J = (0, r.e7)([b.Z], () => b.Z.getActivities()),
        $ = (0, r.e7)([E.Z], () => E.Z.getSettings().clipsEnabled),
        ee = (0, r.e7)([E.Z], () => E.Z.getLastClipsSession()),
        et = (0, r.Wu)([E.Z], () => E.Z.getNewClipIds()),
        en = (0, r.e7)([S.ZP], () => null == S.ZP.getCurrentSidebarChannelId(W.id)),
        { showClipsHeaderEntrypoint: ei } = f.NV.useExperiment({ location: 'ChannelAttachButton' }, { autoTrackExposure: !1 }),
        { enabled: ea } = _.T.useExperiment({ location: 'ChannelAttachButton' }, { autoTrackExposure: !1 }),
        es = (0, r.e7)([I.qc], () => I.qc.hasHotspot(I.v6.CLIPS_CHANNEL_ATTACH_REMINDER)),
        el = (0, c.useModalsStore)((e) => (0, c.hasModalOpenSelector)(e, w.Qr)),
        er = (0, r.e7)([Z.Z], () => Z.Z.hasLayers()),
        eo = (0, r.e7)([E.Z], () => E.Z.hasClips()),
        [ec, eu] = a.useState(null),
        ed = (0, f.Go)() && ($ || eo),
        eh = W.isPrivate(),
        em = (0, r.e7)([M.Z], () => eh || (M.Z.can(U.Plq.ATTACH_FILES, W) && M.Z.can(U.Plq.SEND_MESSAGES, W))),
        ep = (0, r.e7)([N.default], () => N.default.locale),
        e_ = ['en-US', 'en-GB'].includes(ep) ? H.Z.Messages.CHAT_ATTACH_PLUS_BUTTON_A11Y_LABEL : H.Z.Messages.MORE_OPTIONS,
        ef = (0, d.Z)(ee);
    (null == ef ? void 0 : ef.newClipIds.length) !== (null == ee ? void 0 : ee.newClipIds.length) && (null !== (t = null == ee ? void 0 : ee.newClipIds.length) && void 0 !== t ? t : 0) > 0 && null == ec && es && en && !el && !ei && !er && eu('recentClips');
    let eE = (e, t, n) => {
            null != t && 'ETOOLARGE' === t.code
                ? (0, O.G)(W, [])
                : (0, O.d)(e, W, z, {
                      requireConfirm: !0,
                      showLargeMessageDialog: n
                  }),
                L.S.dispatchToLastSubscribed(U.CkL.TEXTAREA_FOCUS);
        },
        eg = (0, r.e7)([A.Z], () => A.Z.hasCurrentUserSentMessageSinceAppStart());
    function eC() {
        (0, c.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e('2668'), n.e('18963')]).then(n.bind(n, 542055));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        channelId: W.id
                    });
            },
            { modalKey: w.Qr }
        ),
            eu(null);
    }
    a.useEffect(() => {
        let e = () => {
            var e;
            return null === (e = Q.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
        };
        return (
            L.S.subscribe(U.CkL.UPLOAD_FILE, e),
            () => {
                L.S.unsubscribe(U.CkL.UPLOAD_FILE, e);
            }
        );
    });
    let eI = (0, T.NE)(W),
        ex = (0, T.Xu)(W),
        eT = !v.dN.useSetting() && !(0, P.isAndroidWeb)() && null != window.ResizeObserver,
        eN = (0, x.UI)(null != W ? W : void 0),
        ev = (0, c.useRedesignIconContext)().enabled,
        eS = (0, m.qB)(W.id, 'ChannelAttachButton'),
        eZ = null !== (s = null == et ? void 0 : et.length) && void 0 !== s ? s : 0,
        eA = (0, k.Z)({
            canAttachFiles: em,
            canStartThreads: eI || ex,
            useSlate: eT,
            hasClips: ed,
            canUseApplicationCommands: !q && !ea,
            channel: W,
            activities: J,
            newClipsCount: eZ,
            canPostPolls: eN,
            canLaunchActivities: eS,
            appContext: X
        });
    if (0 === eA.length) return null;
    let eM = J.some((e) => (0, p.Z)(e, U.xjy.SYNC)),
        eb = J.some((e) => (0, p.Z)(e, U.xjy.JOIN) && !(0, p.Z)(e, U.xjy.EMBEDDED)) || eM;
    V = ev
        ? (0, i.jsx)(c.CirclePlusIcon, {
              className: G.__invalid_attachButtonIcon,
              colorClass: G.attachButtonPlus
          })
        : eb
          ? (0, i.jsx)(j.Z, {
                className: G.__invalid_attachButtonIcon,
                foreground: G.attachButtonPlay,
                background: G.attachButtonPlus,
                width: 24,
                height: 24
            })
          : eZ > 0
            ? (0, i.jsx)(R.Z, {
                  className: G.__invalid_attachButtonIcon,
                  foreground: G.attachButtonClip,
                  background: G.attachButtonPlus,
                  width: 24,
                  height: 24
              })
            : (0, i.jsx)(c.CirclePlusIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: G.__invalid_attachButtonIcon,
                  colorClass: G.attachButtonPlus
              });
    let eR = (0, i.jsx)(c.Popout, {
        shouldShow: null != ec,
        animation: c.Popout.Animation.NONE,
        align: 'recentClips' === ec ? 'center' : 'left',
        position: 'top',
        positionKey: null != ec ? ec : 'null',
        onRequestOpen: () => {
            eg && (0, C.EW)(o.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, { dismissAction: B.L.TAKE_ACTION }), eu('attachMenu');
        },
        onRequestClose: () => {
            !(0, c.hasAnyModalOpen)() && (eg && (0, C.EW)(o.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: B.L.TAKE_ACTION }), eu(null));
        },
        renderPopout: (e) => {
            switch (ec) {
                case 'recentClips':
                    return (0, i.jsx)(g.Z, {
                        ...e,
                        onOpenClips: eC,
                        lastClipsSession: ee
                    });
                case 'attachMenu':
                    return (0, i.jsx)(D.Z, {
                        ...e,
                        onClose: () => eu(null),
                        options: eA,
                        channel: W,
                        onFileUpload: () => {
                            var e;
                            return null === (e = Q.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
                        },
                        draftType: z,
                        editorTextContent: Y,
                        setValue: K,
                        openClips: eC
                    });
                default:
                    throw Error('Invalid popout type provided');
            }
        },
        children: (e) =>
            (0, i.jsx)(c.Button, {
                look: c.Button.Looks.BLANK,
                size: c.Button.Sizes.NONE,
                className: l()(G.attachButton, F),
                innerClassName: G.attachButtonInner,
                'aria-label': e_,
                onDoubleClick: em
                    ? () => {
                          var e;
                          return null === (e = Q.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
                      }
                    : void 0,
                ...e,
                children: V
            })
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: G.uploadInput,
                children: (0, i.jsx)(u.Z, {
                    ref: Q,
                    onChange: (e) => {
                        eE(e.currentTarget.files, e.currentTarget.err), (e.currentTarget.value = '');
                    },
                    multiple: W.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    'aria-hidden': !0
                })
            }),
            (0, i.jsx)('div', {
                className: G.attachWrapper,
                children: (0, i.jsx)(y.Z, {
                    channel: W,
                    isOmniMenuOpen: 'attachMenu' === ec,
                    openOmniMenu: () => eu('attachMenu'),
                    enabled: eS,
                    animationContainerClassName: G.buttonAnimation,
                    glowClassName: G.buttonAnimationGlow,
                    trinketsClassName: G.buttonAnimationTrinkets,
                    children: eR
                })
            })
        ]
    });
});
