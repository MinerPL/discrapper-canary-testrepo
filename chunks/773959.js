n.d(t, {
    Z: function () {
        return r;
    }
});
var r = {};
r = {
    buttonLabel: 'Vis forslag',
    countAnnouncement: (e, t) =>
        `${t.plural(e.optionCount, {
            one: () => `${t.number(e.optionCount)} alternativ`,
            other: () => `${t.number(e.optionCount)} alternativer`
        })} finnes.`,
    focusAnnouncement: (e, t) =>
        `${t.select(
            {
                true: () =>
                    `Angitt gruppe ${e.groupTitle}, med ${t.plural(e.groupCount, {
                        one: () => `${t.number(e.groupCount)} alternativ`,
                        other: () => `${t.number(e.groupCount)} alternativer`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${t.select(
            {
                true: ', valgt',
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: 'Forslag',
    selectedAnnouncement: (e) => `${e.optionText}, valgt`
};
