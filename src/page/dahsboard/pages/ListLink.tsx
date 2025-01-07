import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Files, Trash2 } from "lucide-react";

import { db } from "@/lib/firebase";
import { useAuth } from "@/hooks/useAuth";
import { catchError } from "@/utils/catchError";
import type { LinksFirebaseModel } from "../models/link-model";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ListLink = () => {
  const { user } = useAuth();
  const [links, setLinks] = useState<LinksFirebaseModel[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
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
            shortUrl: data.shortUrl,
            url: data.url,
            newUrl: data.newUrl,
          } as LinksFirebaseModel;
        });

        setLinks(linksData);
      } catch (error) {
        catchError(error);
      }
    }
    fetchLinks();
  }, [user])

  const goListLink = () => {
    navigate(-1);
  }

  return (
    <div className="relative flex flex-col justify-center items-center gap-6 w-full">
      <button className="top-5 right-5 absolute border-gray-300 dark:border-zinc-800 bg-white hover:dark:bg-zinc-900 hover:bg-zinc-100 dark:bg-zinc-800 p-1 border rounded-md text-black dark:text-white transform transition duration-300 cursor-pointer ease-in-out group hover:scale-105" type="button" onClick={goListLink}>
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
              <TableHead>New Url</TableHead>
              <TableHead className="text-left">Option</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              links.length > 0 ? (
                links.map((link) => (
                  <TableRow key={link.shortUrl}>
                    <TableCell>{link.url}</TableCell>
                    <TableCell>{link.newUrl}</TableCell>
                    <TableCell className="flex gap-2">
                      <button type="button" className="border-gray-300 dark:border-zinc-800 bg-white hover:dark:bg-zinc-900 hover:bg-zinc-100 dark:bg-zinc-800 px-4 py-2 border rounded-md text-black dark:text-white transform transition duration-300 cursor-pointer ease-in-out group hover:scale-105">
                        <Trash2 className="h-5 text-red-400" />
                      </button>
                      <button type="button" className="border-gray-300 dark:border-zinc-800 bg-white hover:dark:bg-zinc-900 hover:bg-zinc-100 dark:bg-zinc-800 px-4 py-2 border rounded-md text-black dark:text-white transform transition duration-300 cursor-pointer ease-in-out group hover:scale-105">
                        <Files className="h-5 text-gray-400" />
                      </button>
                    </TableCell>
                  </TableRow>
                ))
              )
                : (
                  <TableRow>
                    <TableCell className="text-center" colSpan={4}>No hay enlaces</TableCell>
                  </TableRow>
                )
            }
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
export default ListLink