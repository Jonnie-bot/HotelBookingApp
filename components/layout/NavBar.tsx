"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import Container from "../ui/Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

function NavBar() {
	const router = useRouter();
	const { userId } = useAuth();

	return (
		<div className="sticky top-0 border border-b-primary/10 bg-secondary">
			<Container>
				<div className="flex justify-between items-center">
                <div
					className="flex gap-1 items-center cursor-pointer"
					onClick={() => router.push("/")}>
					<Image src="/beach1.svg" alt="logo" width="30" height="30" />
					<div className="font-bold text-xl">Relaxa</div>
				</div>
				<div className="flex items-center gap-3">
					<div>theme</div>
					<UserButton afterSignOutUrl="/" />
					{!userId && (
						<>
							<Button
								onClick={() => router.push("/sign-in")}
								variant="outline"
								size="sm">
								Sign In
							</Button>
							<Button onClick={() => router.push("/sign-up")} size="sm">
								Sign Out
							</Button>
						</>
					)}
				</div>
                </div>
			</Container>
		</div>
	);
}
export default NavBar;
