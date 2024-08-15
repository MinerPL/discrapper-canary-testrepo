n.d(t, {
	Z: function () {
		return o;
	}
});
var i = n(735250);
n(470079);
var a = n(481060),
	s = n(846027),
	r = n(468026),
	l = n(689938);
function o(e) {
	if (e) {
		(0, a.openModal)((e) =>
			(0, i.jsx)(r.default, {
				...e,
				title: l.Z.Messages.SERVER_DEAFENED_DIALOG_TITLE,
				body: l.Z.Messages.SERVER_DEAFENED_DIALOG_BODY
			})
		);
		return;
	}
	s.Z.toggleSelfDeaf();
}
