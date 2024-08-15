n(47120);
var i = n(570140),
	a = n(996106),
	s = n(452426),
	r = n(186901),
	l = n(981631);
t.Z = {
	[l.Etm.SET_CONFIG]: {
		scope: r.wE,
		validation: (e) => (0, s.Z)(e).required().keys({ use_interactive_pip: e.boolean() }),
		handler(e) {
			let {
				socket: t,
				args: { use_interactive_pip: n }
			} = e;
			if (t.transport !== r.He.POST_MESSAGE)
				throw new a.Z(
					{ errorCode: l.lTL.INVALID_COMMAND },
					'command not available from "'.concat(t.transport, ' transport')
				);
			if (null == t.application.id) throw new a.Z({ errorCode: l.lTL.INVALID_COMMAND }, 'invalid application');
			return (
				i.Z.dispatch({
					type: 'EMBEDDED_ACTIVITY_SET_CONFIG',
					applicationId: t.application.id,
					config: { useInteractivePIP: n }
				}),
				Promise.resolve({ use_interactive_pip: n })
			);
		}
	}
};
