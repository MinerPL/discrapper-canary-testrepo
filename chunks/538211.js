n.d(a, {
	Z: function () {
		return l;
	}
});
var t = n(70722),
	s = n(689938);
function l(e, a) {
	return [
		{
			value: t.kr.BLACK_SCREEN,
			label: a ? s.Z.Messages.STREAM_REPORT_ENDED_BLACK : s.Z.Messages.STREAM_REPORT_BLACK
		},
		{
			value: t.kr.BLURRY,
			label: a ? s.Z.Messages.STREAM_REPORT_ENDED_BLURRY : s.Z.Messages.STREAM_REPORT_BLURRY
		},
		{
			value: t.kr.LAGGING,
			label: a ? s.Z.Messages.STREAM_REPORT_ENDED_LAGGING : s.Z.Messages.STREAM_REPORT_LAGGING
		},
		{
			value: t.kr.OUT_OF_SYNC,
			label: a ? s.Z.Messages.STREAM_REPORT_ENDED_OUT_OF_SYNC : s.Z.Messages.STREAM_REPORT_OUT_OF_SYNC
		},
		{
			value: t.kr.AUDIO_MISSING,
			label: a ? s.Z.Messages.STREAM_REPORT_ENDED_AUDIO_MISSING : s.Z.Messages.STREAM_REPORT_AUDIO_MISSING
		},
		{
			value: t.kr.AUDIO_POOR,
			label: a ? s.Z.Messages.STREAM_REPORT_ENDED_AUDIO_POOR : s.Z.Messages.STREAM_REPORT_AUDIO_POOR
		},
		{
			value: t.kr.STREAM_STOPPED,
			label: s.Z.Messages.STREAM_REPORT_ENDED_STREAM_STOPPED_UNEXPECTEDLY
		},
		{
			value: t.kr.OTHER,
			label: s.Z.Messages.CALL_FEEDBACK_OPTION_OTHER
		}
	];
}
