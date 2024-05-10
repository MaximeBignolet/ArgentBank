// Model générique pour un user
export class User {
  email: string;
  firstname: string;
  lastname: string;

  constructor(params: { email: string; firstname: string; lastname: string }) {
    this.email = params.email;
    this.firstname = params.firstname;
    this.lastname = params.lastname;
  }

  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }
}
