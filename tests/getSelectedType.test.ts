import { getSelectedTypes, rubricaTypes } from '../src/ts/handlers/SearchType.handler';

test('Search each rubricaTypes', () => {
    rubricaTypes.forEach(RubricaType => {
        expect(getSelectedTypes(RubricaType)).toStrictEqual([RubricaType]);
    });
});

test('Search various rubricaTypes', () => {
    expect(getSelectedTypes('di')).toStrictEqual(['Diario', 'Acta de Directorio']);
});
