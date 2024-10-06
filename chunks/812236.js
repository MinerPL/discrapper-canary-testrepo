n.d(t, {
    Fs: function () {
        return _;
    },
    Xu: function () {
        return d;
    },
    ZP: function () {
        return c;
    },
    sV: function () {
        return u;
    }
}),
    n(411104);
var r = n(470079);
n(373793);
var i = n(911969);
n(404295);
var a = n(592125),
    s = n(963456),
    o = n(213459),
    l = n(367790);
let u = 'no primary app command for application';
async function c(e, t) {
    let n,
        r = a.Z.getChannel(e);
    if (
        (null != r &&
            null == (n = d(r, t)) &&
            (await (0, o.FN)({
                type: 'application',
                applicationId: t
            }),
            (n = d(r, t))),
        null != n)
    )
        return n;
    throw Error(u);
}
function d(e, t) {
    return o.ZP.query(
        e,
        { commandTypes: [i.yU.PRIMARY_ENTRY_POINT] },
        {
            placeholderCount: 1,
            scoreMethod: l.p.COMMAND_ONLY,
            applicationId: t,
            allowFetch: !1,
            allowApplicationState: !0
        }
    ).commands[0];
}
function _(e, t) {
    let { commands: n, loading: a } = (function (e, t) {
            return (0, o.v1)(
                e,
                { commandTypes: [i.yU.PRIMARY_ENTRY_POINT] },
                {
                    placeholderCount: 1,
                    scoreMethod: l.p.COMMAND_ONLY,
                    applicationId: t,
                    allowFetch: !1,
                    allowApplicationState: !0
                }
            );
        })(e, t),
        u = n[0],
        c = null != u;
    return (
        r.useEffect(() => {
            !c &&
                !a &&
                (0, s.j)({
                    type: 'application',
                    applicationId: t
                });
        }, [t, c, a]),
        u
    );
}
