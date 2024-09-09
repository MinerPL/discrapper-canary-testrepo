n(47120), n(773603);
var r = n(735250),
    i = n(470079),
    a = n(481060),
    s = n(600164),
    o = n(155647),
    l = n(299443),
    u = n(185625),
    c = n(273389),
    d = n(816342),
    _ = n(15667),
    E = n(76264),
    f = n(822686),
    h = n(356110),
    p = n(730719),
    I = n(996701),
    m = n(320596),
    T = n(273514),
    S = n(995712),
    g = n(234937),
    A = n(473121),
    N = n(449413),
    O = n(266080),
    R = n(316617),
    v = n(15682),
    C = n(189472),
    y = n(749534),
    L = n(521332),
    D = n(905434),
    b = n(196627),
    M = n(739319),
    P = n(842401),
    U = n(375790),
    w = n(981631),
    x = n(689938),
    G = n(955145);
function k(e, t) {
    let { elements: n } = e;
    return n.find((e) => {
        let { type: n } = e;
        return n === t;
    });
}
function B(e, t) {
    let { elements: n } = e;
    return n.filter((e) => {
        let { type: n } = e;
        return n === t;
    });
}
t.Z = (e) => {
    let { node: t, reportType: n, reportSubType: F, history: V, onSelectChild: H, onModalClose: Z, onSubmit: Y, multiSelect: j, reportId: W, textInput: K } = e,
        z = k(t, 'checkbox'),
        q = k(t, 'text_line_resource'),
        Q = B(t, 'external_link'),
        X = B(t, 'free_text'),
        $ = B(t, 'dropdown'),
        [J, ee] = i.useState(!1),
        [et, en] = i.useState(!1),
        [er, ei] = i.useState(''),
        [ea, es] = i.useState(() => ({})),
        [eo, el] = i.useState(() => ({})),
        [eu, ec] = i.useState((0, u.VP)(X, $, z, K, j)),
        ed = function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = { ...eo };
            (r[e] = {
                value: t,
                isValid: n
            }),
                el(r),
                ec((0, u.VP)(X, $, z, r, ea));
        },
        e_ = i.useMemo(
            () => (e) => {
                H({
                    nodeRef: t.id,
                    destination: e,
                    textInput: null != X || null != $ ? eo : void 0,
                    multiSelect:
                        null != z
                            ? {
                                  name: z.name,
                                  state: ea
                              }
                            : void 0
                });
            },
            [t, H, z, ea, eo, X, $]
        );
    i.useEffect(() => {
        null != j && es(j), null != K && el(K);
    }, [j, K]);
    let eE = (e) => {
            if (e === w.evJ.INVALID_FORM_BODY) ei(x.Z.Messages.IN_APP_REPORTING_SUBMIT_VALIDATION_ERROR);
            else ei(x.Z.Messages.MOBILE_REPORTS_SUBMIT_FAILED);
        },
        ef = () =>
            Y({
                nodeRef: t.id,
                destination: ['', e.successNodeId]
            })
                .then(() => {
                    ei(''), e_(['', e.successNodeId]);
                })
                .catch((e) => {
                    var t;
                    eE(null === (t = e.body) || void 0 === t ? void 0 : t.code);
                })
                .finally(() => {
                    ee(!1);
                });
    i.useEffect(() => {
        t.is_auto_submit &&
            !et &&
            (en(!0),
            Y({
                nodeRef: t.id,
                destination: ['', t.id]
            }));
    }, [t.is_auto_submit, et, Y, t.id]);
    let eh = (0, o.fW)(F),
        ep = (0, l.A)({
            location: 'web_iar_node_view',
            settingsUpsells: null != eh ? eh : [],
            channelId: 'message' === n.name ? n.record.channel_id : void 0
        });
    return (0, r.jsxs)('div', {
        className: G.container,
        children: [
            (0, r.jsxs)(a.ModalHeader, {
                separator: !1,
                direction: s.Z.Direction.VERTICAL,
                className: G.header,
                children: [(0, r.jsx)(b.Z, { element: k(t, 'success') }), (0, r.jsx)(A.Z, { node: t }), (0, r.jsx)(N.Z, { node: t })]
            }),
            (0, r.jsxs)(a.ModalContent, {
                className: G.body,
                children: [
                    null != q ? (0, r.jsx)(M.Z, { element: q }) : null,
                    null != k(t, 'breadcrumbs') && (0, r.jsx)(_.Z, { history: V }),
                    null != k(t, 'message_preview') && ('message' === n.name || 'first_dm' === n.name) && (0, r.jsx)(R.Z, { message: n.record }),
                    null != k(t, 'user_preview') && 'user' === n.name ? (0, r.jsx)(P.Z, { user: n.record }) : null,
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return U.O.includes(t);
                        });
                    })(t) &&
                        (0, r.jsxs)(y.Z, {
                            children: [
                                null != k(t, 'block_users') &&
                                    ('message' === n.name || 'first_dm' === n.name || 'user' === n.name) &&
                                    (0, r.jsx)(d.Z, {
                                        user: 'user' === n.name ? n.record : n.record.author,
                                        reportId: W
                                    }),
                                null != k(t, 'mute_users') &&
                                    ('message' === n.name || 'first_dm' === n.name || 'user' === n.name) &&
                                    (0, r.jsx)(C.Z, {
                                        user: 'user' === n.name ? n.record : n.record.author,
                                        reportId: W
                                    }),
                                null != k(t, 'delete_message') &&
                                    'message' === n.name &&
                                    (0, r.jsx)(f.Z, {
                                        message: n.record,
                                        reportId: W
                                    }),
                                null != k(t, 'leave_guild') &&
                                    'guild' === n.name &&
                                    (0, r.jsx)(O.Z, {
                                        guildId: n.record.id,
                                        reportId: W
                                    })
                            ]
                        }),
                    null != k(t, 'settings_upsells') &&
                        'message' === n.name &&
                        null != eh &&
                        ep &&
                        (0, r.jsx)(L.Z, {
                            settingsUpsells: eh,
                            channelId: n.record.channel_id,
                            onModalClose: Z,
                            reportId: W,
                            reportType: n,
                            reportSubType: F
                        }),
                    null != k(t, 'channel_preview') && 'stage_channel' === n.name && (0, r.jsx)(D.Z, { stageInstance: n.record }),
                    null != k(t, 'guild_scheduled_event_preview') && 'guild_scheduled_event' === n.name && (0, r.jsx)(g.Z, { event: n.record }),
                    null != k(t, 'guild_directory_entry_preview') && 'guild_directory_entry' === n.name && (0, r.jsx)(T.Z, { entry: n.record }),
                    null != k(t, 'guild_discovery_preview') && 'guild_discovery' === n.name && (0, r.jsx)(S.Z, { entry: n.record }),
                    null != z &&
                        (0, r.jsx)(v.Z, {
                            element: z,
                            onChange: (e, t) => {
                                let n = { ...ea };
                                e in ea ? delete n[e] : (n[e] = t), es(n), ec((0, u.VP)(X, $, z, eo, n));
                            },
                            state: ea
                        }),
                    ('user_urf' === n.name || 'message_urf' === n.name) &&
                        null != $ &&
                        $.length > 0 &&
                        (0, r.jsx)(h.Z, {
                            elements: $,
                            onChange: ed,
                            state: eo
                        }),
                    ('user_urf' === n.name || 'message_urf' === n.name) &&
                        null != X &&
                        X.length > 0 &&
                        (0, r.jsx)(m.Z, {
                            elements: X,
                            onChange: ed,
                            state: eo
                        }),
                    (0, r.jsx)(E.Z, {
                        node: t,
                        onSelectChild: e_
                    }),
                    null != Q && Q.length > 0 ? (0, r.jsx)(I.Z, { elements: Q }) : null,
                    (0, r.jsx)(p.Z, {
                        errorMessage: er,
                        onClose: () => {
                            ei('');
                        }
                    })
                ]
            }),
            (0, r.jsx)(c.Z, {
                button: t.button,
                submitting: J,
                disableNext: eu,
                onClick: (e) => {
                    switch (e.type) {
                        case 'done':
                        case 'cancel':
                            Z();
                            break;
                        case 'next':
                            e_(['', e.target]);
                            break;
                        case 'submit':
                            ee(!0), ef();
                    }
                },
                onBackClicked: e.onNavigateBack,
                canNavigateBack: V.length > 0
            }),
            (0, r.jsx)(a.ModalCloseButton, {
                className: G.closeButton,
                onClick: Z
            })
        ]
    });
};
