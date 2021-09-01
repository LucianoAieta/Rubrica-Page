export type RestBody = {
    desde: number;
    hasta: number;
    empresa: string | null;
    libro: string | null;
    ruc: number | string | null;
    tipoRubrica: string;
    logo: File;
};

export type getPDF = (body: RestBody) => Promise<Blob>;
