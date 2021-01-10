export default function checkIfUserAlreadyExists(users: Array<object>, userEmail: string): boolean {
  console.log(users.some((user: Record<string, any>): boolean => user.email === userEmail));
  return users.some((user: Record<string, any>): boolean => user.email === userEmail);
}
