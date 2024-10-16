import Screen from "@/components/ui/Screen";
import { auth } from "../auth";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (session?.user.role === "user") {
    redirect("/user");
  }
  return (
    <Screen>
      <div className="grid h-full grid-cols-2">{children}</div>
    </Screen>
  );
}
