export type RestBody = {
    desde: number;
    hasta: number;
    empresa: string | null;
    libro: number | null;
    ruc: number | string | null;
    tipoRubrica: 'MAYOR' | 'DIARIO' | 'VENTAS' | 'COMPRAS';
};

export type getPDF = (body: RestBody) => Promise<string>;
