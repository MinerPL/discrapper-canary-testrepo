let r;
n(242167), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(411104), n(773603);
var i = n(512722),
    a = n.n(i),
    s = n(392711),
    o = n.n(s),
    l = n(544891),
    u = n(992774),
    c = n(649754),
    d = n(376398),
    _ = n(846519),
    E = n(570140),
    f = n(710845),
    h = n(977059),
    p = n(695346),
    I = n(199902),
    m = n(314897),
    T = n(358085),
    S = n(998502),
    g = n(569545),
    A = n(70722),
    N = n(981631),
    O = n(65154);
let R = {},
    v = new _.V7(),
    C = !1,
    y = window.document.createElement('canvas');
(y.width = 512), (y.height = 288);
let L = y.getContext('2d');
function D() {
    v.stop(), null != r && (c.Z.removeSink(r, R), (r = null));
}
let b = o().debounce((e, t, n, r) => {
    M(
        e,
        (0, g.V9)({
            streamType: null != t ? A.lo.GUILD : A.lo.CALL,
            guildId: t,
            channelId: n,
            ownerId: r
        })
    );
}, 500);
async function M(e, t) {
    if (r !== e) return;
    let { enabled: n } = (0, h.R)({ location: 'uploadStreamPreviews' }),
        i = ((0, T.isWeb)() && p.I0.getSetting()) || I.Z.getIsActiveStreamPreviewDisabled(t);
    if (n && i) return;
    let s = () => M(e, t);
    if (!C)
        try {
            let n = await (function (e, t) {
                let n = 0;
                return (
                    T.isPlatformEmbedded
                        ? function (e, t) {
                              let n = (0, u.zS)(),
                                  i = (null == n ? void 0 : n.getNextVideoOutputFrame) != null;
                              return new Promise((a, s) => {
                                  let o = (e) => {
                                      try {
                                          null != e && t(e) && a(e);
                                      } catch (e) {
                                          s(e);
                                      }
                                  };
                                  i
                                      ? n.getNextVideoOutputFrame(e).then(o, (t) => {
                                            if (r === e) throw t;
                                        })
                                      : c.Z.addSink(e, R, o);
                              }).finally(() => {
                                  !i && c.Z.removeSink(e, R);
                              });
                          }
                        : function (e, t) {
                              let n = (0, d.aG)(e);
                              if (null == n) return Promise.resolve(new ImageData(0, 0));
                              let { width: r, height: i } = n.getVideoTracks()[0].getSettings(),
                                  a = document.createElement('video'),
                                  s = document.createElement('canvas');
                              (a.width = s.width = null != r ? r : 512), (a.height = s.height = null != i ? i : 288), (a.srcObject = n), a.play();
                              let o = s.getContext('2d');
                              return new Promise((e, n) => {
                                  a.ontimeupdate = () => {
                                      null == o || o.drawImage(a, 0, 0, s.width, s.height);
                                      let r = null == o ? void 0 : o.getImageData(0, 0, s.width, s.height);
                                      try {
                                          null != r && t(r) && e(r);
                                      } catch (e) {
                                          n(e);
                                      }
                                  };
                              }).finally(() => {
                                  (a.ontimeupdate = null), a.removeAttribute('srcObject'), a.load();
                              });
                          }
                )(e, (e) => {
                    if (new Uint32Array(e.data.buffer).some((e) => 0 !== e)) return !0;
                    if (++n > t) throw Error('Timed out awaiting non-black frame after '.concat(t, ' frames'));
                    return !1;
                });
            })(e, 60);
            await (function (e) {
                let t = 512 / e.width,
                    n = Math.min(t, 288 / e.height),
                    r = e.width * n,
                    i = e.height * n;
                (y.width = r), (y.height = i);
                let a = window.document.createElement('canvas'),
                    s = a.getContext('2d');
                (a.width = e.width), (a.height = e.height);
                let o = new ImageData(e.data, e.width, e.height);
                return (
                    null == s || s.putImageData(o, 0, 0),
                    new Promise((t) => {
                        null == L || L.drawImage(a, 0, 0, e.width, e.height, 0, 0, r, i), t();
                    })
                );
            })(n);
            let i = y.toDataURL('image/jpeg');
            if (
                (E.Z.dispatch({
                    type: 'STREAM_PREVIEW_FETCH_SUCCESS',
                    streamKey: t,
                    previewURL: i
                }),
                T.isPlatformEmbedded)
            ) {
                let e = m.default.getToken();
                a()(null != e, 'Auth token was null while sending screenshot.'),
                    await S.ZP.makeChunkedRequest(
                        N.ANM.STREAM_PREVIEW(t),
                        { thumbnail: i },
                        {
                            method: 'POST',
                            token: e
                        }
                    );
            } else
                await l.tn.post({
                    url: N.ANM.STREAM_PREVIEW(t),
                    body: { thumbnail: i },
                    oldFormErrors: !0
                });
        } catch (t) {
            new f.Z('ApplicationStreamPreviewUploadManager').error('Failed to post stream preview', t), r === e && v.start(60000, s);
            return;
        }
    r === e && (C ? v.start(60000, s) : v.start(300000, s));
}
t.Z = {
    init() {
        E.Z.subscribe('CONNECTION_OPEN', D),
            E.Z.subscribe('LOGOUT', D),
            E.Z.subscribe('STREAM_DELETE', D),
            E.Z.subscribe('RTC_CONNECTION_VIDEO', (e) => {
                let { guildId: t, channelId: n, userId: i, streamId: a, context: s } = e;
                !(null == a || s !== O.Yn.STREAM || i !== m.default.getId() || __OVERLAY__) && (D(), (r = a), b(a, t, n, i));
            }),
            E.Z.subscribe('MEDIA_ENGINE_VIDEO_STATE_CHANGED', (e) => {
                let { videoState: t } = e;
                C = t === N.FQ1.PAUSED || !1;
            });
    }
};
