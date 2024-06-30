n(47120), n(653041);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(91192), l = n(536895), u = n(442837), c = n(570140), d = n(166459), _ = n(911969), E = n(607070), f = n(209613), h = n(998698), p = n(703558), m = n(117530), I = n(132338), T = n(459273), g = n(444282), S = n(898463), A = n(981631), N = n(547857), v = n(520076);
let O = [];
function R(e) {
    let {
            channelId: t,
            type: n
        } = e, a = (0, u.e7)([E.Z], () => E.Z.keyboardModeEnabled), R = (0, f.Z)('attachments', l.hy.HORIZONTAL), C = (0, u.e7)([m.Z], () => m.Z.getUploads(t, n.drafts.type)), {
            isApplicationCommand: y,
            commandOptions: D,
            commandOptionStates: L
        } = (0, u.cj)([h.Z], () => {
            let e = h.Z.getActiveCommand(t);
            if (null == e)
                return {
                    isApplicationCommand: !1,
                    commandOptions: O,
                    commandOptionStates: null
                };
            let n = h.Z.getOptionStates(t);
            return {
                isApplicationCommand: !0,
                commandOptions: e.options,
                commandOptionStates: n
            };
        }), b = i.useMemo(() => {
            var e;
            return null !== (e = null == D ? void 0 : D.filter(e => {
                var t;
                return e.type === _.jw.ATTACHMENT && (null == L ? void 0 : null === (t = L[e.name]) || void 0 === t ? void 0 : t.hasValue);
            })) && void 0 !== e ? e : [];
        }, [
            D,
            L
        ]), [M, P] = i.useState([]);
    i.useEffect(() => {
        let e = () => {
            d.Z.clearAll(t, n.drafts.type);
        };
        return c.Z.subscribe('APPLICATION_COMMAND_SET_ACTIVE_COMMAND', e), () => c.Z.unsubscribe('APPLICATION_COMMAND_SET_ACTIVE_COMMAND', e);
    }, [
        t,
        n
    ]);
    let U = i.useCallback(() => {
        R.focusFirstVisibleItem();
    }, [R]);
    return ((0, T.yp)({
        event: A.CkL.FOCUS_ATTACHMENT_AREA,
        handler: U
    }), i.useEffect(() => {
        if (y) {
            let e = [];
            M.forEach(t => {
                !b.some(e => t.name === e.name) && e.push(t);
            }), e.forEach(e => {
                d.Z.remove(t, e.name, n.drafts.type);
            }), P(b);
        }
    }, [
        t,
        b.length,
        n
    ]), !y && 0 === C.length || y && 0 === b.length) ? null : (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsx)(s.bG, {
                navigator: R,
                children: (0, r.jsx)(s.SJ, {
                    children: e => {
                        let {
                            ref: i,
                            ...s
                        } = e;
                        return (0, r.jsx)('ul', {
                            ref: i,
                            ...s,
                            className: o()(N.channelAttachmentArea, v.scrollbarGhost),
                            children: y ? b.map(e => (0, r.jsx)(g.Z, {
                                channelId: t,
                                keyboardModeEnabled: a,
                                option: e
                            }, e.name)) : C.map(e => (0, r.jsx)(S.Z, {
                                channelId: t,
                                draftType: n.drafts.type,
                                upload: e,
                                keyboardModeEnabled: a,
                                clip: e.clip
                            }, e.id))
                        });
                    }
                })
            }),
            n.drafts.type === p.d.FirstThreadMessage ? null : (0, r.jsx)(I.Z, {})
        ]
    });
}
t.Z = i.memo(function (e) {
    let {
        channelId: t,
        type: n,
        canAttachFiles: i
    } = e;
    return i ? (0, r.jsx)(R, {
        channelId: t,
        type: n
    }) : null;
});
