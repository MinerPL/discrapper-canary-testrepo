t.d(n, {
    Bm: function () {
        return S;
    },
    P7: function () {
        return j;
    },
    ae: function () {
        return I;
    }
});
var i = t(192379),
    l = t(392711),
    a = t.n(l),
    o = t(442837),
    r = t(25209),
    s = t(481060),
    c = t(2052),
    d = t(542094),
    u = t(513202),
    m = t(367907),
    p = t(895924),
    h = t(691424),
    f = t(428595),
    C = t(364458),
    v = t(499254),
    x = t(541099),
    _ = t(827498),
    N = t(346683),
    g = t(981631),
    A = t(388032);
let b = {
        ...f.Z.RULES.commandMention,
        parse: (e, n, t) => ({ content: f.Z.RULES.commandMention.parse(e, n, t).content })
    },
    E = a().pick(
        (0, C.Z)([
            f.Z.RULES,
            { commandMention: b },
            (0, h.Z)({
                enableBuildOverrides: !1,
                enableEmojiClick: !1
            })
        ]),
        ['commandMention', 'customEmoji', 'em', 'emoji', 'emoticon', 'highlight', 'inlineCode', 'looseEm', 's', 'strong', 'text', 'timestamp', 'u', 'spoiler']
    ),
    I = r.w4(E);
function j(e) {
    let { channel: n, application: t, location: i, sectionName: l, commandName: a, autoDismissOnClick: r = !0, launchingComponentId: h, submitting: f = !1, fetchesApplication: C = !0 } = e,
        b = (0, c.O)(),
        E = (0, d.Qv)({
            channelId: n.id,
            applicationId: t.id,
            fetchesApplication: C
        }),
        I = (0, N.Q)(E),
        j = (0, o.e7)([x.Z], () => x.Z.entrypoint()),
        S = (0, d.w1)({
            applicationId: t.id,
            embeddedActivitiesManager: u.Z,
            channelId: n.id,
            locationObject: b.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: n } = e;
                r && v.yT(_.ti.ACTIVITY),
                    (0, m.yw)(g.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: i,
                        application_id: n,
                        section_name: l,
                        action: I,
                        source: j
                    });
            },
            launchingComponentId: h,
            commandOrigin: p.bB.APPLICATION_LAUNCHER,
            sectionName: l,
            source: j,
            fetchesApplication: C
        }),
        y = s.ButtonColors.BRAND,
        P = null != a ? a : A.intl.string(A.t.zKX8Nj);
    return (
        I === d.JS.JOIN ? ((y = s.ButtonColors.GREEN), (P = A.intl.string(A.t.d9PsMj))) : I === d.JS.LEAVE && !f && ((y = s.ButtonColors.RED), (P = A.intl.string(A.t['Hi1/aW']))),
        {
            onActivityItemSelected: S,
            activityAction: I,
            buttonColor: y,
            buttonText: P
        }
    );
}
function S(e, n) {
    let t = x.Z.entrypoint(),
        a = i.useMemo(
            () =>
                (0, l.debounce)(
                    (e, n) => {
                        (0, m.yw)(g.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
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
        null != e && a(e, t);
    }, [e, n, t, a]);
}
