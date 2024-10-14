import { SignIn } from "@/components/auth/SignIn";
import { auth } from "./auth";
import SignOut from "@/components/auth/SignOut";

export default async function Home() {
  const session = await auth();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Dev connection <SignOut />
      {JSON.stringify(session)}
      <SignIn />
    </div>
  );
}
