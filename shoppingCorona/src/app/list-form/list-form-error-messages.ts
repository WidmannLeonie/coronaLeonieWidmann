export class ErrorMessage {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) {}
}
export const ListFormErrorMessages=[
  new ErrorMessage('name', 'required', 'You forgot the list name!'),
  new ErrorMessage('due_date', 'required', 'You forgot the due date!')
];
