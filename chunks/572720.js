a.d(t, {
	l: function () {
		return s;
	}
});
var l = a(470079),
	n = a(579806);
function s(e) {
	return (0, l.useMemo)(
		() => (null == n.Z.clips.getClipProtocolURLFromPath ? null : n.Z.clips.getClipProtocolURLFromPath(e.filepath)),
		[e.filepath]
	);
}
