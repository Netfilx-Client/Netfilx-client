/** 회원 */
interface userType {
  user_id: string;
  email: string;
  password: string;
  phone_number: string;
  name: string;
  birth: string;
  membership: string;
  status: string;
  card_number: string;
  card_expiration_date: string;
  paid_at: string;
  created_at: string;
  withdray_at: string;
  role: string;
  //   isLogin: boolean;
}

export type { userType };
