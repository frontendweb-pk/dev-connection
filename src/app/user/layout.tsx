import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header />
			<div className="container mx-auto py-5">
				<div className="grid grid-cols-12 gap-4">
					<div className="col-span-3">
						<Sidebar />
					</div>
					<div className="col-span-9">{children}</div>
				</div>
			</div>
		</>
	);
}
