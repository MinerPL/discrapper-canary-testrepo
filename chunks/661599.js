var i = n(735250),
	a = n(470079),
	s = n(230711),
	r = n(82950),
	l = n(981631),
	o = n(689938),
	c = n(510342);
class d extends a.PureComponent {
	render() {
		return (0, i.jsx)(r.Z, {
			guild: this.props.guild,
			onClick: () => s.Z.open(l.oAB.ACCOUNT),
			message: o.Z.Messages.TWO_FA_GUILD_MFA_WARNING_MESSAGE_WITH_SPACING.format(),
			cta: o.Z.Messages.TWO_FA_GUILD_MFA_WARNING_RESOLVE_BUTTON,
			trackingSource: l.PsQ.GUILD_MFA_WARNING,
			type: l.vID.MFA_WARNING,
			image: c,
			imageMarginX: 54,
			undismissable: !0
		});
	}
}
t.Z = d;
