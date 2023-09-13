class SessionManager {
  private static readonly isBrowser: boolean = ((): boolean =>
    typeof window !== 'undefined')();

  private static readonly KEYS = {
    token: 'token',
    userId: 'userId',
    username: 'username',
    roleId: 'roleId',
    roleName: 'roleName',
    companyId: 'companyId',
    companyName: 'companyName',
    profileImg: 'profileImg',
    fullName: 'fullName',
  };

  static setToken(token: string): void {
    localStorage.setItem(SessionManager.KEYS.token, token);
  }

  static getToken(): string | null {
    return SessionManager.isBrowser
      ? localStorage.getItem(SessionManager.KEYS.token)
      : '';
  }

  static removeToken(): void {
    localStorage.removeItem(SessionManager.KEYS.token);
  }

  static logout(): boolean {
    Object.keys(SessionManager.KEYS).map((key) => {
      localStorage.removeItem(key);
    });
    return true;
  }

  static getAuthenticatedToken(): string | null {
    const token = SessionManager.getToken();
    // Customize the authentication logic based on your application requirements
    const isExpired = token
      ? Date.now() >= JSON.parse(atob(token.split('.')[1])).exp * 1000
      : false;
    if (isExpired) {
      SessionManager.logout();
      return null;
    } else return token;
  }

  //Region
  static setUserId(value: string): void {
    localStorage.setItem(SessionManager.KEYS.userId, value);
  }

  static getUserId(): string | null {
    return localStorage.getItem(SessionManager.KEYS.userId);
  }

  static removeUserId(): void {
    localStorage.removeItem(SessionManager.KEYS.userId);
  }
  //EndRegion

  //Region
  static setUsername(value: string): void {
    localStorage.setItem(SessionManager.KEYS.username, value);
  }

  static getUsername(): string | null {
    return localStorage.getItem(SessionManager.KEYS.username);
  }

  static removeUsername(): void {
    localStorage.removeItem(SessionManager.KEYS.username);
  }
  //EndRegion

  //Region
  static setRoleId(value: string): void {
    localStorage.setItem(SessionManager.KEYS.roleId, value);
  }

  static getRoleId(): string | null {
    return localStorage.getItem(SessionManager.KEYS.roleId);
  }

  static removeRoleId(): void {
    localStorage.removeItem(SessionManager.KEYS.roleId);
  }
  //EndRegion

  //Region
  static setRoleName(value: string): void {
    localStorage.setItem(SessionManager.KEYS.roleName, value);
  }

  static getRoleName(): string | null {
    return SessionManager.isBrowser
      ? localStorage.getItem(SessionManager.KEYS.roleName)
      : '';
  }

  static removeRoleName(): void {
    localStorage.removeItem(SessionManager.KEYS.roleName);
  }
  //EndRegion

  //Region
  static setCompanyId(value: string): void {
    localStorage.setItem(SessionManager.KEYS.companyId, value);
  }

  static getCompanyId(): string | null {
    return localStorage.getItem(SessionManager.KEYS.companyId);
  }

  static removeCompanyId(): void {
    localStorage.removeItem(SessionManager.KEYS.companyId);
  }
  //EndRegion

  //Region
  static setCompanyName(value: string): void {
    localStorage.setItem(SessionManager.KEYS.companyName, value);
  }

  static getCompanyName(): string | null {
    return localStorage.getItem(SessionManager.KEYS.companyName);
  }

  static removeCompanyName(): void {
    localStorage.removeItem(SessionManager.KEYS.companyName);
  }
  //EndRegion

  //Region
  static setProfileImg(value: string): void {
    localStorage.setItem(SessionManager.KEYS.profileImg, value);
  }

  static getProfileImg(): string | null {
    return localStorage.getItem(SessionManager.KEYS.profileImg);
  }

  static removeProfileImg(): void {
    localStorage.removeItem(SessionManager.KEYS.profileImg);
  }
  //EndRegion

  //Region
  static setFullName(value: string): void {
    localStorage.setItem(SessionManager.KEYS.fullName, value);
  }

  static getFullName(): string | null {
    return localStorage.getItem(SessionManager.KEYS.fullName);
  }

  static removeFullName(): void {
    localStorage.removeItem(SessionManager.KEYS.fullName);
  }
  //EndRegion
}

export default SessionManager;
