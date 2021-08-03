export type RestBody = {
    desde: number;
    hasta: number;
    empresa: string | null;
    libro: number | null;
    ruc: number | string | null;
};

export type getPDF = (body: RestBody) => Promise<string>;
