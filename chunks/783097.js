n.d(t, {
    $d: function () {
        return C;
    },
    BQ: function () {
        return N;
    },
    Cb: function () {
        return x;
    },
    Hu: function () {
        return M;
    },
    Wx: function () {
        return h;
    },
    XZ: function () {
        return L;
    },
    Y$: function () {
        return R;
    },
    Yn: function () {
        return v;
    },
    jD: function () {
        return f;
    },
    lf: function () {
        return S;
    },
    nB: function () {
        return P;
    },
    pF: function () {
        return Z;
    },
    sl: function () {
        return O;
    },
    vJ: function () {
        return g;
    },
    yJ: function () {
        return A;
    },
    ye: function () {
        return p;
    }
}),
    n(789020),
    n(627494),
    n(757143),
    n(653041),
    n(47120);
var i = n(668781),
    s = n(904245),
    a = n(911969),
    r = n(895924),
    l = n(667204),
    o = n(957730),
    c = n(973616),
    u = n(768581),
    d = n(630388),
    _ = n(541099),
    E = n(827498),
    I = n(981631),
    m = n(689079),
    T = n(689938);
let h = { id: m.bi.BUILT_IN };
function N(e) {
    return e.id !== m.bi.BUILT_IN;
}
function C(e) {
    return N(e) ? e.name : T.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_NAME;
}
function f(e) {
    return N(e) ? e.description : T.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_DESCRIPTION;
}
function p(e) {
    var t;
    return N(e) && (0, d.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, I.udG.EMBEDDED);
}
function g(e) {
    var t;
    return N(e) && (0, d.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, I.udG.PARTNER);
}
function S(e) {
    var t;
    return N(e) && (0, d.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, I.udG.PROMOTED);
}
function A(e) {
    return N(e) && p(e) ? (e instanceof c.Z ? e.embeddedActivityConfig : e.embedded_activity_config) : null;
}
function R(e) {
    let { command: t, optionValues: n, context: a, commandTargetId: c, maxSizeCallback: u, sectionName: d } = e,
        { channel: E } = a,
        I = async () => {
            try {
                let i = await (0, l.Z)({
                    command: t,
                    optionValues: n,
                    context: a,
                    commandTargetId: c,
                    maxSizeCallback: u,
                    commandOrigin: r.bB.APPLICATION_LAUNCHER,
                    sectionName: d,
                    source: _.Z.entrypoint()
                });
                if (t.inputType === r.iw.BUILT_IN_TEXT && null != i) {
                    var e;
                    let t = o.ZP.parse(E, i.content);
                    (t.tts = null !== (e = i.tts) && void 0 !== e && e), s.Z.sendMessage(a.channel.id, t);
                }
            } catch (e) {
                throw (
                    (i.Z.show({
                        title: T.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_TITLE,
                        body: T.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_BODY,
                        confirmText: T.Z.Messages.RETRY,
                        onConfirm: () => I()
                    }),
                    e)
                );
            }
        };
    return I();
}
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { fakeAppIconURL: n, ...i } = t;
    return N(e)
        ? {
              iconURL: u.ZP.getApplicationIconURL({
                  ...i,
                  id: e.id,
                  icon: e.icon
              }),
              name: e.name,
              description: e.description
          }
        : {
              iconURL: null != n ? n : null,
              name: T.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_NAME,
              description: T.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_DESCRIPTION
          };
}
function x(e) {
    return !!N(e) && (e instanceof c.Z ? e.isMonetized : e.is_monetized);
}
function M(e) {
    let t = A(e);
    return null != t && t.displays_advertisements;
}
function v(e) {
    return e === E._b.TEXT;
}
function L(e) {
    return null == e ? '' : (e.charAt(0).toLocaleUpperCase() + e.slice(1)).replaceAll('_', ' ');
}
function Z(e) {
    let t = [];
    for (let n of e) {
        let e = n.items.filter((e) => {
            var t;
            let n = e.application,
                i = null !== (t = e.commands) && void 0 !== t ? t : [];
            return p(n) && i.some((e) => e.type === a.yU.PRIMARY_ENTRY_POINT);
        });
        if (0 !== e.length)
            t.push({
                ...n,
                items: e
            });
    }
    return t;
}
function P(e) {
    return e instanceof c.Z
        ? {
              applicationId: e.id,
              customInstallUrl: e.customInstallUrl,
              installParams: e.installParams,
              integrationTypesConfig: e.integrationTypesConfig
          }
        : {
              applicationId: e.id,
              customInstallUrl: e.custom_install_url,
              installParams: e.install_params,
              integrationTypesConfig: e.integration_types_config
          };
}
