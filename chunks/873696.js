n.d(t, {
	D: function () {
		return l;
	}
});
var i = n(689938);
function l(e) {
	if (null == e) return null;
	switch (e.type) {
		case 'embedded-activities':
		case 'event':
			return { subtitle: e.name };
		case 'go-live':
			return { subtitle: i.Z.Messages.GO_LIVE_SUBTITLE };
	}
	return null;
}
