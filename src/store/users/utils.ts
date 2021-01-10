export default function checkIfUserAlreadyExists(users: Array<object>, userEmail: string): boolean {
  return users.some((user: Record<string, any>): boolean => user.email === userEmail);
}
