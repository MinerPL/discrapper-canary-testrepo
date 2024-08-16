t.d(n, {
    Bm: function () {
        return g;
    },
    P7: function () {
        return I;
    },
    ae: function () {
        return x;
    }
});
var i = t(470079),
    a = t(392711),
    l = t.n(a),
    o = t(25209),
    r = t(481060),
    s = t(2052),
    c = t(542094),
    d = t(513202),
    u = t(367907),
    m = t(691424),
    p = t(428595),
    _ = t(364458),
    C = t(499254),
    f = t(541099),
    h = t(827498),
    A = t(981631),
    E = t(689938);
let N = {
        ...p.Z.RULES.commandMention,
        parse: (e, n, t) => ({ content: p.Z.RULES.commandMention.parse(e, n, t).content })
    },
    v = l().pick(
        (0, _.Z)([
            p.Z.RULES,
            { commandMention: N },
            (0, m.Z)({
                enableBuildOverrides: !1,
                enableEmojiClick: !1
            })
        ]),
        ['commandMention', 'customEmoji', 'em', 'emoji', 'emoticon', 'highlight', 'inlineCode', 'looseEm', 's', 'strong', 'text', 'timestamp', 'u', 'spoiler']
    ),
    x = o.w4(v);
function I(e) {
    let { channel: n, application: t, location: i, sectionName: a, commandName: l, autoDismissOnClick: o = !0, launchingComponentId: m, submitting: p = !1 } = e,
        _ = (0, s.O)(),
        N = (0, c.Qv)({
            channelId: n.id,
            applicationId: t.id
        }),
        v = (0, c.w1)({
            applicationId: t.id,
            embeddedActivitiesManager: d.Z,
            channelId: n.id,
            locationObject: _.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: n } = e,
                    t = f.Z.entrypoint();
                o && C.y(h.ti.ACTIVITY),
                    (0, u.yw)(A.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: i,
                        application_id: n,
                        section_name: a,
                        action: N,
                        source: t
                    });
            },
            launchingComponentId: m
        }),
        x = r.ButtonColors.BRAND,
        I = null != l ? l : E.Z.Messages.LAUNCH;
    return (
        N === c.JS.JOIN ? ((x = r.ButtonColors.GREEN), (I = E.Z.Messages.JOIN_ACTIVITY)) : N === c.JS.LEAVE && !p && ((x = r.ButtonColors.RED), (I = E.Z.Messages.LEAVE)),
        {
            onActivityItemSelected: v,
            activityAction: N,
            buttonColor: x,
            buttonText: I
        }
    );
}
function g(e, n) {
    let t = f.Z.entrypoint(),
        l = i.useMemo(
            () =>
                (0, a.debounce)(
                    (e, n) => {
                        (0, u.yw)(A.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
                            type: e,
                            source: n
                        });
                    },
                    400,
                    {
                        leading: !1,
                        trailing: !0
                    }
                ),
            []
        );
    i.useEffect(() => {
        null != e && l(e, t);
    }, [e, n, t, l]);
}
