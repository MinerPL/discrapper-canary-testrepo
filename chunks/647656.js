n(47120), n(789020), n(411104);
var i = n(392711), s = n.n(i), a = n(243814), r = n(570140), l = n(626135), o = n(81063), c = n(70956), d = n(996106), u = n(914946), _ = n(452426), E = n(186901), h = n(981631);
let I = ['349134787773988865'];
t.Z = {
    [h.Etm.SET_ACTIVITY]: {
        scope: {
            [E.Gp.ANY]: [
                a.x.RPC,
                a.x.RPC_ACTIVITIES_WRITE,
                E.lH
            ]
        },
        validation: e => (0, _.Z)(e).required().keys({
            pid: e.number().min(0),
            activity: e.object().keys({
                state: e.string().min(2).max(128),
                details: e.string().min(2).max(128),
                timestamps: (0, _.Z)(e).keys({
                    start: e.number().min(1),
                    end: e.number().min(1)
                }),
                assets: (0, _.Z)(e).keys({
                    large_image: e.string().min(1).max(256),
                    large_text: e.string().min(2).max(128),
                    small_image: e.string().min(1).max(256),
                    small_text: e.string().min(2).max(128)
                }),
                party: (0, _.Z)(e).keys({
                    id: e.string().min(2).max(128),
                    size: e.array().items(e.number().min(1)).length(2),
                    privacy: e.number().default(h.RYY.PRIVATE).valid([
                        h.RYY.PRIVATE,
                        h.RYY.PUBLIC
                    ])
                }),
                secrets: (0, _.Z)(e).keys({
                    match: e.string().min(2).max(128),
                    join: e.string().min(2).max(128),
                    spectate: e.string().min(2).max(128)
                }),
                buttons: e.array().items((0, _.Z)(e).keys({
                    label: e.string().min(1).max(32).required(),
                    url: e.string().uri().min(1).max(512).required()
                })).min(1).max(2),
                instance: e.boolean(),
                supported_platforms: e.array().items(e.string().min(1).max(32)).min(1).max(3),
                type: e.number().default(h.IIU.PLAYING).valid(h.IIU.PLAYING, h.IIU.LISTENING, h.IIU.WATCHING)
            }).allow(null)
        }),
        handler(e) {
            var t;
            let n, {
                    socket: i,
                    args: {
                        pid: a,
                        activity: _
                    },
                    isSocketConnected: m
                } = e;
            if (![
                    E.He.IPC,
                    E.He.WEBSOCKET,
                    E.He.POST_MESSAGE
                ].includes(i.transport))
                throw new d.Z({ errorCode: h.lTL.INVALID_COMMAND }, 'command not available from "'.concat(i.transport, '" transport'));
            if (null == a && E.He.IPC === i.transport)
                throw new d.Z({ errorCode: h.lTL.INVALID_COMMAND }, 'nonzero pid required');
            if (null == _)
                return r.Z.dispatch({
                    type: 'LOCAL_ACTIVITY_UPDATE',
                    socketId: i.id,
                    pid: a,
                    activity: _
                }), Promise.resolve(_);
            _.name = i.application.name, _.application_id = i.application.id;
            let p = i.transport === E.He.POST_MESSAGE, g = (0, u.S5)(_, p);
            g > 0 && (_.flags = g), delete _.instance, null === (t = _.party) || void 0 === t || delete t.privacy;
            let {
                assets: T,
                party: S,
                secrets: C,
                timestamps: N,
                buttons: f,
                type: A
            } = _;
            if ((null == A || A !== h.IIU.PLAYING && !p) && (_.type = h.IIU.PLAYING), null != C) {
                let e = s().values(C).filter(e => !!e);
                if (null != S && s().intersection(e, [S.id]).length > 0 && !I.includes(i.application.id))
                    throw new d.Z({ errorCode: h.lTL.INVALID_ACTIVITY_SECRET }, 'secrets cannot match the party id');
                if (s().uniq(e).length < e.length)
                    throw new d.Z({ errorCode: h.lTL.INVALID_ACTIVITY_SECRET }, 'secrets must be unique');
                if (null != f)
                    throw new d.Z({ errorCode: h.lTL.INVALID_ACTIVITY_SECRET }, 'secrets cannot currently be sent with buttons');
            }
            if (null != f && (_.metadata = { button_urls: f.map(e => e.url) }, _.buttons = f.map(e => e.label)), null != N)
                for (let e of Object.keys(N))
                    Date.now().toString().length - N[e].toString().length > 2 && (N[e] = Math.floor(N[e] * c.Z.Millis.SECOND));
            if (null == T)
                n = Promise.resolve([]);
            else {
                if (null == i.application || null == i.application.id)
                    throw Error();
                n = (0, o.fetchAssetIds)(i.application.id, [
                    T.large_image,
                    T.small_image
                ]);
            }
            return n.then(e => {
                var t, n;
                let [s, o] = e;
                if (null != T && (null != s ? T.large_image = s : delete T.large_image, null != o ? T.small_image = o : delete T.small_image), !m())
                    return;
                r.Z.dispatch({
                    type: 'LOCAL_ACTIVITY_UPDATE',
                    socketId: i.id,
                    pid: a,
                    activity: _
                });
                let {
                        secrets: c,
                        party: d
                    } = _, u = {
                        application_id: i.application.id,
                        type: _.type,
                        name: _.name,
                        details: null !== (t = _.details) && void 0 !== t ? t : '',
                        state: null !== (n = _.state) && void 0 !== n ? n : ''
                    };
                return null != c && (u.has_match_secret = !!c.match, u.has_join_secret = !!c.join), null != T && (u.has_images = !!(T.large_image || T.small_image)), null != d && (u.party_max = null != d.size ? d.size[1] : void 0, u.party_id = d.id), l.default.track(h.rMx.ACTIVITY_UPDATED, u), _;
            });
        }
    }
};
