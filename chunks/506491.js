var t = a(735250);
a(470079);
var r = a(120356),
    i = a.n(r),
    n = a(442837),
    l = a(481060),
    o = a(434404),
    c = a(999382),
    d = a(219369),
    E = a(981631),
    S = a(689938),
    _ = a(457172);
s.Z = (e) => {
    var s;
    let { guild: a, headerId: r } = e,
        m = (0, n.e7)([c.Z], () => 'description' in c.Z.getErrors()),
        R = m
            ? S.Z.Messages.SERVER_DISCOVERY_BLOCKED_WORD_LEARN_MORE.format({
                  onLearnMoreClick: () => {
                      (0, d.lW)({
                          articleId: E.BhN.SERVER_DISCOVERY_GUIDELINES,
                          guildId: a.id,
                          modalStep: d.tK.DESCRIPTION
                      });
                  }
              })
            : null;
    return (0, t.jsxs)('div', {
        className: _.container,
        children: [
            (0, t.jsxs)('div', {
                className: _.content,
                children: [
                    (0, t.jsx)('div', { className: i()(_.stepImage, _.pencilImage) }),
                    (0, t.jsx)(l.Heading, {
                        variant: 'heading-xl/semibold',
                        className: _.header,
                        id: r,
                        children: S.Z.Messages.SERVER_DISCOVERY_DESCRIPTION_PAGE_HEADER
                    }),
                    (0, t.jsx)(l.Text, {
                        color: 'none',
                        variant: 'text-md/normal',
                        className: _.headerCaption,
                        children: S.Z.Messages.SERVER_DISCOVERY_DESCRIPTION_PAGE_SUBHEADING
                    })
                ]
            }),
            (0, t.jsxs)(l.FormSection, {
                className: _.form,
                children: [
                    (0, t.jsx)(l.FormTitle, {
                        required: !0,
                        children: S.Z.Messages.FORM_LABEL_SERVER_DESCRIPTION
                    }),
                    (0, t.jsx)(l.FormText, {
                        type: l.FormTextTypes.DESCRIPTION,
                        className: _.description,
                        children: S.Z.Messages.SERVER_DISCOVERY_SERVER_DESCRIPTION_INPUT_SUBLABEL
                    }),
                    (0, t.jsx)(l.TextArea, {
                        autoFocus: !0,
                        value: null !== (s = a.description) && void 0 !== s ? s : '',
                        placeholder: S.Z.Messages.SERVER_DESCIPTION_EMPTY,
                        onChange: (e) => {
                            o.Z.updateGuild({ description: e });
                        },
                        maxLength: 120,
                        className: _.textArea,
                        error: R
                    })
                ]
            })
        ]
    });
};
