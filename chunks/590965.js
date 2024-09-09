let i;
n(47120), n(653041);
var l,
    r,
    a,
    s,
    o = n(442837),
    c = n(570140),
    u = n(413605),
    d = n(703656),
    h = n(131704),
    p = n(601964),
    _ = n(592125),
    f = n(430824),
    g = n(701190),
    m = n(496675),
    C = n(594174),
    I = n(998502),
    E = n(981631),
    N = n(176505);
let x = E.IlC.APP,
    S = !1,
    v = !1,
    Z = [];
function T() {
    S = !0;
}
class L extends (l = o.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, g.Z, C.default);
    }
    isOpen() {
        let e = __OVERLAY__ ? E.IlC.OVERLAY : E.IlC.APP;
        return !!(S && Z.length > 0 && x === e);
    }
    getProps() {
        return {
            invite: Z.length > 0 ? Z[0][0] : null,
            error: null != i && '' !== i ? i : null,
            submitting: v
        };
    }
}
(s = 'InviteModalStore'),
    (a = 'displayName') in (r = L)
        ? Object.defineProperty(r, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[a] = s),
    (t.Z = new L(c.Z, {
        OVERLAY_INITIALIZE: T,
        CONNECTION_OPEN: T,
        CONNECTION_CLOSED: function () {
            S = !1;
        },
        INVITE_MODAL_OPEN: function (e) {
            let t = e.invite;
            if (null == t) return !1;
            if (!(t.state === E.r2o.EXPIRED || t.state === E.r2o.BANNED || t.state === E.r2o.ERROR)) {
                let { channel: e, guild: n } = t;
                if (null == e) return !1;
                if ((0, h.bc)(e.type)) {
                    if (null != _.Z.getChannel(e.id)) return (0, d.XU)(E.ME, e.id), I.ZP.focus(), !1;
                } else {
                    if (null == n) return !1;
                    if (null != f.Z.getGuild(n.id) && !(0, u.TY)(t)) {
                        let e = (function (e) {
                            if ((0, u.W6)(e)) return N.oC.ROLE_SUBSCRIPTIONS;
                            let { channel: t } = e;
                            if (null != t) {
                                let e = _.Z.getChannel(t.id);
                                if (m.Z.can(E.Plq.VIEW_CHANNEL, e)) return t.id;
                            }
                            return null;
                        })(t);
                        return (0, d.XU)(n.id, e), I.ZP.focus(), !1;
                    }
                }
            }
            if (
                Z.some((e) => {
                    let [n] = e;
                    return n.code === t.code;
                })
            )
                return !1;
            (x = e.context), (v = !1);
            let n = (function (e) {
                let { approximate_member_count: t, approximate_presence_count: n, code: i, state: l, target_type: r, target_user: a, target_application: s, stage_instance: o, type: c, channel: u, guild: d } = e,
                    h = {
                        code: i,
                        state: l,
                        approximate_member_count: t,
                        approximate_presence_count: n,
                        target_type: r,
                        target_user: a,
                        target_application: s,
                        stage_instance: o,
                        type: c
                    };
                return null != u && (h.channel = { ...u }), null != d && (h.guild = new p.ZP(d)), null != e.inviter && (h.inviter = { ...e.inviter }), h;
            })(t);
            Z.push([n, e.resolve]);
        },
        INVITE_MODAL_CLOSE: function () {
            if (((i = null), (v = !1), Z.length > 0)) {
                let [, e] = Z.shift();
                null != e && e();
            }
        },
        INVITE_ACCEPT: function () {
            v = !0;
        },
        INVITE_MODAL_ERROR: function (e) {
            let { message: t } = e;
            (i = t), (v = !1);
        }
    }));
