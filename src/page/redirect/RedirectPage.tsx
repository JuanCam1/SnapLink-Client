import Loading from "@/components/shared/loading";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const RedirectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const recoverLink = async () => {
      try {
        const linksRef = collection(db, "link");
        const q = query(linksRef, where("shortUrl", "==", slug));

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const data = doc.data();
          const originalUrl = data.url;
          console.log("🚀 ~ recoverLink ~ originalUrl:", originalUrl);
          window.location.href = originalUrl;
        }
      } catch (error) {
        navigate("/");
      }
    }
    recoverLink();
  }, [slug, navigate])


  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Loading svgStyle="size-20" />
    </div>
  )
}
export default RedirectPage