var i = n(735250);
n(470079);
var s = n(481060), a = n(570140), r = n(317770), l = n(689938);
class o extends r.Z {
    _initialize() {
        a.Z.subscribe('POGGERMODE_TEMPORARILY_DISABLED', this.handlePoggermodeTemporarilyDisabled);
    }
    _terminate() {
        a.Z.unsubscribe('POGGERMODE_TEMPORARILY_DISABLED', this.handlePoggermodeTemporarilyDisabled);
    }
    handlePoggermodeTemporarilyDisabled() {
        (0, s.openModal)(e => (0, i.jsx)(s.ConfirmModal, {
            ...e,
            header: l.Z.Messages.POGGERMODE_TEMPORARILY_DISABLED_TOAST_TITLE,
            confirmText: l.Z.Messages.CONFIRM,
            confirmButtonColor: s.Button.Colors.GREEN,
            children: (0, i.jsx)(s.Text, {
                variant: 'text-md/normal',
                children: l.Z.Messages.POGGERMODE_TEMPORARILY_DISABLED_TOAST_BODY
            })
        }));
    }
}
t.Z = new o();
