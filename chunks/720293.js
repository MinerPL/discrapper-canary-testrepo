n.d(t, {
    i: function () {
        return i;
    },
    z: function () {
        return o;
    }
});
var r,
    i,
    a = n(475595),
    s = n(46140);
((r = i || (i = {})).VIDEO_PLAYER_VIDEO = 'video_player_video'), (r.VIDEO_PLAYER_VIDEO_LOW_RES = 'video_player_video_low_res'), (r.VIDEO_PLAYER_THUMBNAIL = 'video_player_thumbnail'), (r.VIDEO_PLAYER_CAPTION = 'video_player_caption'), (r.VIDEO_PLAYER_TRANSCRIPT = 'video_player_transcript'), (r.QUEST_BAR_PREVIEW_VIDEO = 'quest_bar_preview_video'), (r.QUEST_BAR_PREVIEW_THUMBNAIL = 'quest_bar_preview_thumbnail'), (r.QUEST_HOME_VIDEO = 'quest_home_video');
function o(e, t) {
    let n = (function (e, t) {
        var n, r, i, a, s, o, l, u;
        switch (e) {
            case 'video_player_video':
                return null === (n = t.config.videoMetadata) || void 0 === n ? void 0 : n.assets.videoPlayerVideo;
            case 'video_player_video_low_res':
                return null === (r = t.config.videoMetadata) || void 0 === r ? void 0 : r.assets.videoPlayerVideoLowRes;
            case 'video_player_thumbnail':
                return null === (i = t.config.videoMetadata) || void 0 === i ? void 0 : i.assets.videoPlayerThumbnail;
            case 'video_player_caption':
                return null === (a = t.config.videoMetadata) || void 0 === a ? void 0 : a.assets.videoPlayerCaption;
            case 'video_player_transcript':
                return null === (s = t.config.videoMetadata) || void 0 === s ? void 0 : s.assets.videoPlayerTranscript;
            case 'quest_bar_preview_video':
                return null === (o = t.config.videoMetadata) || void 0 === o ? void 0 : o.assets.questBarPreviewVideo;
            case 'quest_bar_preview_thumbnail':
                return null === (l = t.config.videoMetadata) || void 0 === l ? void 0 : l.assets.questBarPreviewThumbnail;
            case 'quest_home_video':
                return null === (u = t.config.videoMetadata) || void 0 === u ? void 0 : u.assets.questHomeVideo;
            default:
                return;
        }
    })(e, t);
    if (null == n) return null;
    let r = t.config.features.includes(s.S7.QUESTS_CDN),
        i = (0, a.Dm)(n);
    if (null == i) return null;
    let o = (0, a.Q2)(t.id, n, { newCdn: r }),
        l = a.N0.includes(i);
    return {
        url: o,
        mimetype: i,
        isAnimated: l
    };
}
