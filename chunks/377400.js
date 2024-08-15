var i = n(735250);
n(470079);
var l = n(481060),
	r = n(570140),
	a = n(317770),
	s = n(175281),
	o = n(285371);
class c extends a.Z {
	_initialize() {
		r.Z.subscribe('SHOW_KEYBOARD_SHORTCUTS', this.showKeyboardShortcuts),
			r.Z.subscribe('HIDE_KEYBOARD_SHORTCUTS', this.hideKeyboardShortcuts);
	}
	_terminate() {
		r.Z.unsubscribe('SHOW_KEYBOARD_SHORTCUTS', this.showKeyboardShortcuts),
			r.Z.unsubscribe('HIDE_KEYBOARD_SHORTCUTS', this.hideKeyboardShortcuts);
	}
	showKeyboardShortcuts() {
		(0, l.openModal)((e) => (0, i.jsx)(s.Z, { ...e }), { modalKey: o.J });
	}
	hideKeyboardShortcuts() {
		(0, l.closeModal)(o.J);
	}
}
t.Z = new c();
