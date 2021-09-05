import { getSelectedTypes } from '../src/ts/handlers/SearchType.handler';

test('Search type "Registro de Accionistas"', () => {
    expect(getSelectedTypes('Registro de Accionistas')).toStrictEqual([
        'Registro de Accionistas',
    ]);
});
