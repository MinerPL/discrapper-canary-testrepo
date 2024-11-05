n.d(e, {
    B: function () {
        return x;
    },
    a: function () {
        return p;
    }
}),
    n(411104);
var i = n(570140),
    l = n(493683),
    r = n(957730),
    o = n(222677),
    a = n(995774),
    s = n(314897),
    u = n(592125),
    c = n(703558),
    d = n(62817),
    h = n(960048);
let f = (t) => {
        let e = d.Z.getFiles(t)[0];
        return null == d.Z.getMessageForFile(e.id)
            ? (h.Z.addBreadcrumb({ message: 'No message found for upload' }), Promise.reject())
            : new Promise((t, n) => {
                  let l = (r) => {
                      r.file.id === e.id && (i.Z.unsubscribe('UPLOAD_COMPLETE', l), i.Z.unsubscribe('UPLOAD_FAIL', l), 'UPLOAD_COMPLETE' === r.type ? t(r.messageRecord) : n(Error('Upload failed')));
                  };
                  i.Z.subscribe('UPLOAD_COMPLETE', l), i.Z.subscribe('UPLOAD_FAIL', l);
              });
    },
    v = async function (t, e) {
        var i;
        let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = arguments.length > 3 ? arguments[3] : void 0,
            a = arguments.length > 4 ? arguments[4] : void 0,
            d = u.Z.getChannel(e);
        if (((i = s.default.getToken()), r.ZP.parse(d, ''), l));
        else {
            if (null == u.Z.getChannel(e)) throw Error("AtomicReactor sendUtils: Couldn't resolve channel with id ".concat(e));
            {
                let i = n(966390).Z;
                (t.description = o),
                    await i.uploadFiles({
                        channelId: e,
                        uploads: [t],
                        draftType: c.d.ChannelMessage,
                        parsedMessage: a
                    });
            }
        }
    },
    p = async (t) => {
        let { file: e, reaction: n, user: i, altText: r, requireConfirmation: s = !1 } = t,
            u = await l.Z.openPrivateChannel(i.id, !1, !1);
        v(e, u, s, r);
        let c = await f(u);
        if (null != c) {
            let t = (0, a.g1)(n);
            await (0, o.rU)(u, c.id, t);
        }
    },
    x = (t) => {
        let { file: e, reply: n, channel: i, altText: l, requireConfirmation: o = !1 } = t,
            a = r.ZP.parse(i, n);
        return v(e, i.id, o, l, a);
    };
