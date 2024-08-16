o.d(t, {
    Z: function () {
        return l;
    }
}),
    o(653041);
var n,
    a,
    s = o(689938);
function l(e) {
    let t = [
        {
            label: s.Z.Messages.CALL_FEEDBACK_OPTION_COULD_NOT_HEAR_AUDIO,
            code: 2,
            value: "I couldn't hear audio at all"
        },
        {
            label: s.Z.Messages.CALL_FEEDBACK_OPTION_NOBODY_COULD_HEAR_ME,
            code: 3,
            value: 'Nobody could hear me'
        },
        {
            label: s.Z.Messages.CALL_FEEDBACK_OPTION_AUDIO_ECHOS,
            code: 4,
            value: 'Audio had echos or feedback'
        },
        {
            label: s.Z.Messages.CALL_FEEDBACK_OPTION_AUDIO_ROBOTIC,
            code: 5,
            value: 'Audio was robotic or distorted'
        },
        {
            label: s.Z.Messages.CALL_FEEDBACK_OPTION_AUDIO_CUT,
            code: 6,
            value: 'Audio cut in and out'
        },
        {
            label: s.Z.Messages.CALL_FEEDBACK_OPTION_BAD_VOLUME,
            code: 7,
            value: 'Volume was too low or high'
        },
        {
            label: s.Z.Messages.CALL_FEEDBACK_OPTION_BACKGROUND_NOISE,
            code: 8,
            value: 'Background noise was too loud'
        }
    ];
    return (
        e &&
            t.push({
                label: s.Z.Messages.CALL_FEEDBACK_OPTION_SPEAKERPHONE,
                code: 9,
                value: 'Issues with speakerphone'
            }),
        t.push(
            {
                label: s.Z.Messages.CALL_FEEDBACK_OPTION_HEADSET,
                code: 10,
                value: 'Issues with headset/bluetooth'
            },
            {
                label: s.Z.Messages.CALL_FEEDBACK_OPTION_OTHER,
                code: 1,
                value: 'Other'
            }
        ),
        t
    );
}
((a = n || (n = {})).COULD_NOT_HEAR_AUDIO = "I couldn't hear audio at all"), (a.NOBODY_COULD_HEAR_ME = 'Nobody could hear me'), (a.AUDIO_ECHOS = 'Audio had echos or feedback'), (a.AUDIO_ROBOTIC = 'Audio was robotic or distorted'), (a.AUDIO_CUT = 'Audio cut in and out'), (a.BAD_VOLUME = 'Volume was too low or high'), (a.BACKGROUND_NOISE = 'Background noise was too loud'), (a.SPEAKERPHONE = 'Issues with speakerphone'), (a.HEADSET = 'Issues with headset/bluetooth'), (a.OTHER = 'Other');
