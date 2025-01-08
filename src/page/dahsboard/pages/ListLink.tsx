import { useEffect, useState } from "react";
import {
	collection,
	deleteDoc,
	doc,
	getDocs,
	query,
	where,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Files, Trash2 } from "lucide-react";

import { db } from "@/lib/firebase";
import { useAuth } from "@/hooks/useAuth";
import { catchError } from "@/utils/catchError";
import type { LinksFirebaseModel } from "../models/link-model";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { notification } from "@/utils/notification";
import { toast } from "sonner";

const ListLink = () => {
	const { user } = useAuth();
	const [links, setLinks] = useState<LinksFirebaseModel[]>([]);
	const navigate = useNavigate();

	const fetchLinks = async () => {
		try {
			if (!user) throw new Error("User not logged in");
			const linksRef = collection(db, "link");
			const q = query(linksRef, where("creatorId", "==", user?.uid));

			const querySnapshot = await getDocs(q);

			const linksData: LinksFirebaseModel[] = querySnapshot.docs.map((doc) => {
				const data = doc.data();
				return {
					id: doc.id,
					createdAt: data.createdAt,
					creatorId: data.creatorId,
					newUrl: data.newUrl,
					url: data.url,
				} as LinksFirebaseModel;
			});

			setLinks(linksData);
		} catch (error) {
			catchError(error);
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchLinks();
	}, []);

	const goListLink = () => {
		navigate(-1);
	};

	const deleteDocument = async (id: string) => {
		toast("Desea eliminar el enlace?", {
			action: {
				label: "Eliminar",
				onClick: async () => {
					try {
						await deleteDoc(doc(db, "link", id));
						notification("Enlace eliminado exitosamente", "success");
						fetchLinks();
					} catch (error) {
						notification("Error al eliminar el enlace", "error");
						catchError(error);
					}
				},
			},
		});
	};

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text);
		notification("Copiado exitosamente", "success");
	};

	return (
		<div className="relative flex flex-col justify-center items-center gap-6 px-6 w-full">
			<button
				className="top-5 right-5 absolute border-gray-300 dark:border-zinc-800 bg-white hover:dark:bg-zinc-900 hover:bg-zinc-100 dark:bg-zinc-800 p-1 border rounded-md text-black dark:text-white transform transition duration-300 cursor-pointer ease-in-out group hover:scale-105"
				type="button"
				onClick={goListLink}
			>
				<ChevronLeft className="text-black dark:text-white size-6" />
			</button>
			<div className="dark:border-zinc-800 opacity-0 px-6 py-16 border rounded-md w-full max-w-[1000px] animate-slide-up">
				<h2 className="mb-8 font-extrabold text-center text-pretty text-xl">
					Lista de Enlaces
				</h2>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Url</TableHead>
							<TableHead>NewUrl</TableHead>
							<TableHead className="text-left">Option</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{links.length > 0 ? (
							links.map((link) => (
								<TableRow key={link.id}>
									<TableCell>{link.url}</TableCell>
									<TableCell>{link.newUrl}</TableCell>
									<TableCell className="flex gap-2">
										<button
											onClick={() => deleteDocument(link.id)}
											type="button"
											className="border-gray-300 dark:border-zinc-800 bg-white hover:dark:bg-zinc-900 hover:bg-zinc-100 dark:bg-zinc-800 px-4 py-2 border rounded-md text-black dark:text-white transform transition duration-300 cursor-pointer ease-in-out group hover:scale-105"
										>
											<Trash2 className="h-5 text-red-400" />
										</button>
										<button
											onClick={() => copyToClipboard(link.newUrl)}
											type="button"
											className="border-gray-300 dark:border-zinc-800 bg-white hover:dark:bg-zinc-900 hover:bg-zinc-100 dark:bg-zinc-800 px-4 py-2 border rounded-md text-black dark:text-white transform transition duration-300 cursor-pointer ease-in-out group hover:scale-105"
										>
											<Files className="h-5 text-gray-400" />
										</button>
									</TableCell>
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell className="text-center" colSpan={4}>
									No hay enlaces
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
		</div>
	);
};
export default ListLink;
