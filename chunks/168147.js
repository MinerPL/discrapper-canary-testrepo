n.d(t, {
    Z: function () {
        return r;
    }
});
var r = {};
r = {
    buttonLabel: 'Suggesties weergeven',
    countAnnouncement: (e, t) =>
        `${t.plural(e.optionCount, {
            one: () => `${t.number(e.optionCount)} optie`,
            other: () => `${t.number(e.optionCount)} opties`
        })} beschikbaar.`,
    focusAnnouncement: (e, t) =>
        `${t.select(
            {
                true: () =>
                    `Groep ${e.groupTitle} ingevoerd met ${t.plural(e.groupCount, {
                        one: () => `${t.number(e.groupCount)} optie`,
                        other: () => `${t.number(e.groupCount)} opties`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${t.select(
            {
                true: ', geselecteerd',
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: 'Suggesties',
    selectedAnnouncement: (e) => `${e.optionText}, geselecteerd`
};
