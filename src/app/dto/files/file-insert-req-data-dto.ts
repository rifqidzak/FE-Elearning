export class FileInsertReqDto{
    private extension!: string;
    private file!: string;

    get _file(): string {
        return this.file;
    }

    set _file(value: string) {
        this.file = value;
    }

    get _extension(): string {
        return this.extension;
    }

    set _extension(value: string) {
        this.extension = value;
    }
}
