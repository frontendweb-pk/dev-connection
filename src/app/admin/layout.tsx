import Header from "@/components/layout/Header";

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
}
