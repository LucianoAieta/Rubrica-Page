declare module '*.html' {
    const content: string;
    export default content;
}

declare module '*.pug' {
    function pugFile(...args: any): string;
    export = pugFile;
}
