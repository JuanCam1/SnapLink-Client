import { type FormEvent, useState, type RefObject } from "react";
import { addDoc, collection } from "firebase/firestore";

import { db } from "@/lib/firebase";
import { useAuth } from "@/hooks/useAuth";
import { catchError } from "@/utils/catchError";
import { generateSlug } from "@/utils/generateSlug";
import { notification } from "@/utils/notification";
import { config } from "@/config/config";
import { generateNewUrl } from "@/utils/generateNewUrl";

const baseUrl = config.BASE_URL as string;

const useLink = (formRef: RefObject<HTMLFormElement | null>) => {
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const { user } = useAuth();

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

      if (!creatorId) throw new Error("User not logged in");

      setLoadingSubmit(true);
      const shortUrl = generateSlug(8);
      const newUrl = generateNewUrl(baseUrl, shortUrl);

      await addDoc(collection(db, "link"), {
        creatorId: creatorId,
        url: url,
        shortUrl: shortUrl,
        newUrl: newUrl,
        createdAt: new Date().toISOString(),
      });
      setLoadingSubmit(false);
      notification("Enlace creado exitosamente", "success");
      formRef.current?.reset();
    } catch (error) {
      setLoadingSubmit(false);
      catchError(error);
    }
  };
  return {
    createLink,
    loadingSubmit,
  };
};
export default useLink;
