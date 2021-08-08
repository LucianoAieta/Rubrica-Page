export type rubricaTypes = 'MAYOR' | 'DIARIO' | 'VENTAS' | 'COMPRAS';

export type RestBody = {
    desde: number;
    hasta: number;
    empresa: string | null;
    libro: string | null;
    ruc: number | string | null;
    tipoRubrica: rubricaTypes;
};

export type getPDF = (body: RestBody) => Promise<Blob>;
