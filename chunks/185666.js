var i = n(735250);
n(470079);
var l = n(481060),
	r = n(570140),
	a = n(317770),
	s = n(472365),
	o = n(590965);
let c = 'INVITE_MODAL_KEY';
class u extends a.Z {
	_initialize() {
		r.Z.subscribe('INVITE_MODAL_OPEN', this.handleOpenModal),
			r.Z.subscribe('INVITE_MODAL_CLOSE', this.handleCloseModal);
	}
	_terminate() {
		(0, l.closeModal)(c),
			r.Z.unsubscribe('INVITE_MODAL_OPEN', this.handleOpenModal),
			r.Z.unsubscribe('INVITE_MODAL_CLOSE', this.handleCloseModal);
	}
	handleOpenModal() {
		o.Z.isOpen() &&
			!(0, l.hasModalOpen)(c) &&
			(0, l.openModal)((e) => (0, i.jsx)(s.Z, { ...e }), {
				modalKey: c,
				onCloseRequest: () => r.Z.dispatch({ type: 'INVITE_MODAL_CLOSE' })
			});
	}
	handleCloseModal() {
		(0, l.closeModal)(c);
	}
}
t.Z = new u();
