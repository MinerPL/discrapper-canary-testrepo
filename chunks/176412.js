t.d(n, {
    Bm: function () {
        return S;
    },
    P7: function () {
        return P;
    },
    ae: function () {
        return g;
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
    f = t(364458),
    h = t(499254),
    A = t(541099),
    E = t(827498),
    N = t(981631),
    x = t(689938);
let v = {
        ...C.Z.RULES.commandMention,
        parse: (e, n, t) => ({ content: C.Z.RULES.commandMention.parse(e, n, t).content })
    },
    I = l().pick(
        (0, f.Z)([
            C.Z.RULES,
            { commandMention: v },
            (0, _.Z)({
                enableBuildOverrides: !1,
                enableEmojiClick: !1
            })
        ]),
        ['commandMention', 'customEmoji', 'em', 'emoji', 'emoticon', 'highlight', 'inlineCode', 'looseEm', 's', 'strong', 'text', 'timestamp', 'u', 'spoiler']
    ),
    g = r.w4(I);
function P(e) {
    let { channel: n, application: t, location: i, sectionName: a, commandName: l, autoDismissOnClick: r = !0, launchingComponentId: _, submitting: C = !1 } = e,
        f = (0, c.O)(),
        v = (0, d.Qv)({
            channelId: n.id,
            applicationId: t.id
        }),
        I = (0, o.e7)([A.Z], () => A.Z.entrypoint()),
        g = (0, d.w1)({
            applicationId: t.id,
            embeddedActivitiesManager: u.Z,
            channelId: n.id,
            locationObject: f.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: n } = e;
                r && h.y(E.ti.ACTIVITY),
                    (0, m.yw)(N.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: i,
                        application_id: n,
                        section_name: a,
                        action: v,
                        source: I
                    });
            },
            launchingComponentId: _,
            commandOrigin: p.bB.APPLICATION_LAUNCHER,
            sectionName: a,
            source: I
        }),
        P = s.ButtonColors.BRAND,
        S = null != l ? l : x.Z.Messages.LAUNCH;
    return (
        v === d.JS.JOIN ? ((P = s.ButtonColors.GREEN), (S = x.Z.Messages.JOIN_ACTIVITY)) : v === d.JS.LEAVE && !C && ((P = s.ButtonColors.RED), (S = x.Z.Messages.LEAVE)),
        {
            onActivityItemSelected: g,
            activityAction: v,
            buttonColor: P,
            buttonText: S
        }
    );
}
function S(e, n) {
    let t = A.Z.entrypoint(),
        l = i.useMemo(
            () =>
                (0, a.debounce)(
                    (e, n) => {
                        (0, m.yw)(N.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
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
