t.d(n, {
    Z: function () {
        return d;
    }
});
var i = t(735250);
t(470079);
var a = t(442837),
    l = t(481060),
    r = t(324701),
    s = t(768943),
    o = t(121254),
    u = t(689938);
function d(e) {
    let { enabled: n } = o.Z.useExperiment({ location: 'use_message_bookmarks_item' }, { autoTrackExposure: !1 }),
        t = (0, a.e7)([s.Z], () => s.Z.isMessageBookmarked(e.channel_id, e.id));
    return n
        ? (0, i.jsx)(l.MenuItem, {
              id: 'mark-bookmark',
              label: t ? u.Z.Messages.MESSAGE_BOOKMARKS_REMOVE : u.Z.Messages.MESSAGE_BOOKMARKS_CREATE,
              icon: t ? l.BookmarkIcon : l.BookmarkOutlineIcon,
              action: () =>
                  t
                      ? (0, r.x)({
                            channelId: e.channel_id,
                            messageId: e.id,
                            displayToast: !0
                        })
                      : (0, r.z)({
                            channelId: e.channel_id,
                            messageId: e.id,
                            displayToast: !0
                        })
          })
        : null;
}
