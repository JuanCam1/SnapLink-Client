import { useAuth } from "@/hooks/useAuth";
import { db } from "@/lib/firebase";
import { catchError } from "@/utils/catchError";
import { generateNewUrl } from "@/utils/generateNewUrl";
import { generateSlug } from "@/utils/generateSlug";
import { notification } from "@/utils/notification";
import { addDoc, collection } from "firebase/firestore";
import { type FormEvent, useState, type RefObject } from "react"

const useLink = (formRef: RefObject<HTMLFormElement | null>) => {
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const { user, userName } = useAuth();

  const createLink = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    try {
      const formData = new FormData(evt.currentTarget);
      const url = formData.get("url") as string;

      if (!url) {
        notification("Los campos son obligatorios", "warning");
        return;
      }

      const creatorId = user?.uid;
      const username = userName?.username;

      if (!creatorId || !username) throw new Error("User not logged in");

      setLoadingSubmit(true);
      const shortUrl = generateSlug(8);
      const newUrl = generateNewUrl(username, shortUrl);


      await addDoc(collection(db, "link",), {
        creatorId: creatorId,
        url: url,
        newUrl: newUrl,
        shortUrl: shortUrl,
        createdAt: new Date().toISOString(),
      })
      setLoadingSubmit(false);
      formRef.current?.reset();
    } catch (error) {
      console.log("🚀 ~ createLink ~ error:", error);
      setLoadingSubmit(false);
      catchError(error);
    }
  }
  return {
    createLink,
    loadingSubmit
  }
}
export default useLink