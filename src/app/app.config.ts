export class AppSettings {
  
  public static get REST_DATA_URL(): string {
    return 'http://localhost:8080/pfm/rest';
  }
  
  public static get USERS_URL(): string {
    return 'http://jsonplaceholder.typicode.com/users';
  }
  
  public static get LOGINS_URL(): string {
    return 'http://localhost:4000/logins';
  }
  
  public static get PFMFILE_URL(): string {
    return 'http://localhost:4000/pfmfiles';
  }
  
  public static get TRADE_URL(): string {
    return 'http://localhost:4000/trades';
  }
  
  public static get BORROWER_URL(): string {
    return 'http://localhost:4000/borrowers';
  }
  
}
