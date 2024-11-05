n.d(t, {
    iF: function () {
        return s;
    },
    iw: function () {
        return a;
    },
    km: function () {
        return d;
    }
});
var r,
    i,
    a,
    s,
    o = n(903797),
    l = n(60071),
    u = n(731965),
    c = n(433517);
((r = a || (a = {})).UNKNOWN = 'UNKNOWN'), (r.NOT_STARTED = 'NOT_STARTED'), (r.IN_PROGRESS = 'IN_PROGRESS'), (r.COMPLETED = 'COMPLETED'), ((i = s || (s = {})).NONE = 'NONE'), (i.FETCHING = 'FETCHING'), (i.SUCCESS = 'SUCCESS'), (i.FAILURE = 'FAILURE');
let d = (0, o.Z)(
    (0, l.tJ)(
        (e, t) => ({
            volume: 0.3,
            muted: !1,
            transcriptEnabled: !1,
            captionEnabled: !1,
            fullScreenEnabled: !1,
            videoProgress: {},
            transcript: null,
            setVolume: (t) => {
                (0, u.j)(() => e({ volume: t }));
            },
            setMuted: (t) => {
                (0, u.j)(() => e({ muted: t }));
            },
            setVideoProgress: (n, r, i) => {
                var a, s;
                let o = Math.max(null !== (s = null === (a = t().videoProgress[n]) || void 0 === a ? void 0 : a.maxTimestampSec) && void 0 !== s ? s : 0, Math.floor(r));
                (0, u.j)(() =>
                    e({
                        videoProgress: {
                            ...t().videoProgress,
                            [n]: {
                                timestampSec: r,
                                duration: i,
                                maxTimestampSec: o
                            }
                        }
                    })
                );
            },
            setTranscriptEnabled: (t) => {
                (0, u.j)(() => e({ transcriptEnabled: t }));
            },
            setCaptionEnabled: (t) => {
                (0, u.j)(() => e({ captionEnabled: t }));
            },
            setFullScreenEnabled: (t) => {
                (0, u.j)(() => e({ fullScreenEnabled: t }));
            },
            getVideoProgressState: (e) => {
                let n = t().videoProgress[e];
                return null == n ? 'UNKNOWN' : 0 === n.timestampSec ? 'NOT_STARTED' : n.timestampSec >= n.duration ? 'COMPLETED' : 'IN_PROGRESS';
            },
            resetQuest: (n) => {
                (0, u.j)(() => {
                    let { [n]: r, ...i } = t().videoProgress;
                    e({ videoProgress: i });
                });
            },
            setTranscriptAsset: (t) => {
                (0, u.j)(() => {
                    e({ transcript: t });
                });
            }
        }),
        {
            name: 'videoQuestUIState',
            getStorage: () => ({
                getItem: (e) => {
                    var t;
                    return null !== (t = c.K.get(e)) && void 0 !== t ? t : null;
                },
                setItem: (e, t) => c.K.set(e, t),
                removeItem: (e) => c.K.remove(e)
            }),
            partialize: (e) => ({
                volume: e.volume,
                muted: e.muted,
                videoProgress: e.videoProgress
            })
        }
    )
);
t.ZP = d;
