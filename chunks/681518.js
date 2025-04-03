var s = i(200651);
i(192379);
var a = i(120356),
    n = i.n(a),
    r = i(442837),
    l = i(481060),
    o = i(434404),
    d = i(999382),
    c = i(259674),
    m = i(981631),
    u = i(388032),
    x = i(89388);
t.Z = (e) => {
    var t;
    let { guild: i, headerId: a } = e,
        g = (0, r.e7)([d.Z], () => 'description' in d.Z.getErrors()),
        h = g
            ? u.intl.format(u.t.loup7u, {
                  onLearnMoreClick: () => {
                      (0, c.lW)({
                          articleId: m.BhN.SERVER_DISCOVERY_GUIDELINES,
                          guildId: i.id,
                          modalStep: c.tK.DESCRIPTION
                      });
                  }
              })
            : null;
    return (0, s.jsxs)('div', {
        className: x.container,
        children: [
            (0, s.jsxs)('div', {
                className: x.content,
                children: [
                    (0, s.jsx)('div', { className: n()(x.stepImage, x.pencilImage) }),
                    (0, s.jsx)(l.Heading, {
                        variant: 'heading-xl/semibold',
                        className: x.header,
                        id: a,
                        children: u.intl.string(u.t.HY9iWF)
                    }),
                    (0, s.jsx)(l.Text, {
                        color: 'none',
                        variant: 'text-md/normal',
                        className: x.headerCaption,
                        children: u.intl.string(u.t.zTZSv7)
                    })
                ]
            }),
            (0, s.jsxs)(l.FormSection, {
                className: x.form,
                children: [
                    (0, s.jsx)(l.FormTitle, {
                        required: !0,
                        children: u.intl.string(u.t['RSfm+v'])
                    }),
                    (0, s.jsx)(l.FormText, {
                        type: l.FormTextTypes.DESCRIPTION,
                        className: x.description,
                        children: u.intl.string(u.t['6jNp19'])
                    }),
                    (0, s.jsx)(l.TextArea, {
                        autoFocus: !0,
                        value: null !== (t = i.description) && void 0 !== t ? t : '',
                        placeholder: u.intl.string(u.t.Nvfows),
                        onChange: (e) => {
                            o.Z.updateGuild({ description: e });
                        },
                        maxLength: 120,
                        className: x.textArea,
                        error: h
                    })
                ]
            })
        ]
    });
};
