export class Todo {
  constructor(
    public id: number,
    public value: string,
    public isEditing: boolean,
    public isChecked: boolean
  ) {}
}
