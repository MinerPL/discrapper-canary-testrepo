n(47120);
var i = n(735250);
n(470079);
var s = n(481060), a = n(570140), r = n(988298), l = n(447543), o = n(13245), c = n(596223), d = n(293273), u = n(885110), _ = n(996106), E = n(914946), h = n(452426), I = n(852926), m = n(186901), p = n(981631);
t.Z = {
    [p.Etm.SET_OVERLAY_LOCKED]: {
        scope: m.lH,
        validation: e => (0, h.Z)(e).required().keys({
            locked: e.boolean().required(),
            pid: e.number().min(0).required()
        }),
        handler(e) {
            let {
                args: {
                    locked: t,
                    pid: n
                },
                socket: {application: i}
            } = e;
            if (null == i.id)
                throw new _.Z({ errorCode: p.lTL.INVALID_COMMAND }, 'No application.');
            o.Z.setLocked(t, n);
        }
    },
    [p.Etm.OPEN_OVERLAY_ACTIVITY_INVITE]: {
        scope: m.lH,
        validation: e => (0, h.Z)(e).required().keys({
            type: e.number().required().valid([p.mFx.JOIN]),
            pid: e.number().min(0).required()
        }),
        handler(e) {
            let {
                    socket: t,
                    args: {
                        type: n,
                        pid: i
                    }
                } = e, s = t.application.id;
            if (null == s)
                throw new _.Z({ errorCode: p.lTL.INVALID_COMMAND }, 'No application.');
            let a = d.Z.getApplicationActivity(s);
            if (null == a || null == a.secrets || !(0, E.t9)(n, a.party, a.secrets))
                throw new _.Z({ errorCode: p.lTL.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure an activity includes a party and appropriate secret.');
            let {lock: l} = (0, I.s0)(i), o = (0, c.Z)(a, u.Z);
            return (0, r.h7)(a, o).then(() => {
                if (l(), o)
                    throw new _.Z({ errorCode: p.lTL.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure user does have have privacy enabled.');
            });
        }
    },
    [p.Etm.OPEN_OVERLAY_GUILD_INVITE]: {
        scope: m.lH,
        validation: e => (0, h.Z)(e).required().keys({
            code: e.string().required(),
            pid: e.number().min(0).required()
        }),
        handler(e) {
            let {
                args: {
                    code: t,
                    pid: n
                },
                socket: i
            } = e;
            if (null == i.application.id)
                throw new _.Z({ errorCode: p.lTL.INVALID_COMMAND }, 'No application.');
            return l.Z.resolveInvite(t, 'Game SDK').then(e => {
                let {
                    invite: t,
                    code: i
                } = e;
                if (null == t)
                    throw new _.Z({ errorCode: p.lTL.INVALID_INVITE }, 'Invalid invite id: '.concat(i));
                let {
                    context: s,
                    lock: r
                } = (0, I.s0)(n);
                return new Promise(e => {
                    a.Z.dispatch({
                        type: 'INVITE_MODAL_OPEN',
                        invite: t,
                        code: i,
                        context: s,
                        resolve: e
                    });
                }).then(r);
            });
        }
    },
    [p.Etm.OPEN_OVERLAY_VOICE_SETTINGS]: {
        scope: m.lH,
        validation: e => (0, h.Z)(e).required().keys({ pid: e.number().min(0).required() }),
        handler(e) {
            let {
                    args: {pid: t},
                    socket: a
                } = e, r = a.application.id;
            if (null == r)
                throw new _.Z({ errorCode: p.lTL.INVALID_COMMAND }, 'No application.');
            let {lock: l} = (0, I.s0)(t);
            return new Promise(e => {
                (0, s.openModalLazy)(async () => {
                    let {default: t} = await n.e('66063').then(n.bind(n, 344516));
                    return n => (0, i.jsx)(t, {
                        ...n,
                        mediaEngineContext: r,
                        title: a.application.name,
                        onClose: () => {
                            n.onClose(), l(), e();
                        }
                    });
                });
            });
        }
    }
};
