n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(306680),
    i = n(70956),
    a = n(709054);
function s(e) {
    if (null == e.threadMetadata) return 0;
    let t = e.threadMetadata.autoArchiveDuration * i.Z.Millis.MINUTE;
    return (
        (function (e) {
            var t;
            if (null == e.threadMetadata) return 0;
            let n = null !== (t = r.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.id,
                i = a.default.extractTimestamp(n);
            return Math.max(i, null != e.threadMetadata.archiveTimestamp ? new Date(e.threadMetadata.archiveTimestamp).getTime() : 0);
        })(e) + t
    );
}
