t.d(n, {
    Bm: function () {
        return S;
    },
    P7: function () {
        return L;
    },
    ae: function () {
        return P;
    }
});
var i = t(470079),
    a = t(392711),
    l = t.n(a),
    o = t(442837),
    r = t(25209),
    s = t(481060),
    c = t(2052),
    d = t(542094),
    u = t(513202),
    m = t(367907),
    p = t(895924),
    _ = t(691424),
    C = t(428595),
    h = t(364458),
    f = t(499254),
    A = t(541099),
    E = t(827498),
    N = t(346683),
    x = t(981631),
    v = t(689938);
let I = {
        ...C.Z.RULES.commandMention,
        parse: (e, n, t) => ({ content: C.Z.RULES.commandMention.parse(e, n, t).content })
    },
    g = l().pick(
        (0, h.Z)([
            C.Z.RULES,
            { commandMention: I },
            (0, _.Z)({
                enableBuildOverrides: !1,
                enableEmojiClick: !1
            })
        ]),
        ['commandMention', 'customEmoji', 'em', 'emoji', 'emoticon', 'highlight', 'inlineCode', 'looseEm', 's', 'strong', 'text', 'timestamp', 'u', 'spoiler']
    ),
    P = r.w4(g);
function L(e) {
    let { channel: n, application: t, location: i, sectionName: a, commandName: l, autoDismissOnClick: r = !0, launchingComponentId: _, submitting: C = !1 } = e,
        h = (0, c.O)(),
        I = (0, d.Qv)({
            channelId: n.id,
            applicationId: t.id
        }),
        g = (0, N.Q)(I),
        P = (0, o.e7)([A.Z], () => A.Z.entrypoint()),
        L = (0, d.w1)({
            applicationId: t.id,
            embeddedActivitiesManager: u.Z,
            channelId: n.id,
            locationObject: h.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: n } = e;
                r && f.yT(E.ti.ACTIVITY),
                    (0, m.yw)(x.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: i,
                        application_id: n,
                        section_name: a,
                        action: g,
                        source: P
                    });
            },
            launchingComponentId: _,
            commandOrigin: p.bB.APPLICATION_LAUNCHER,
            sectionName: a,
            source: P
        }),
        S = s.ButtonColors.BRAND,
        T = null != l ? l : v.Z.Messages.LAUNCH;
    return (
        g === d.JS.JOIN ? ((S = s.ButtonColors.GREEN), (T = v.Z.Messages.JOIN_ACTIVITY)) : g === d.JS.LEAVE && !C && ((S = s.ButtonColors.RED), (T = v.Z.Messages.LEAVE)),
        {
            onActivityItemSelected: L,
            activityAction: g,
            buttonColor: S,
            buttonText: T
        }
    );
}
function S(e, n) {
    let t = A.Z.entrypoint(),
        l = i.useMemo(
            () =>
                (0, a.debounce)(
                    (e, n) => {
                        (0, m.yw)(x.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
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
