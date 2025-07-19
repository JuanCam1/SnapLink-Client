import { useState, type FormEvent } from "react";

const useCreateLink = () => {
  // const mutationCreateLink = useMutation({
  //   mutationFn:
  // })

  const [isStatePassword, setIsStatePassword] =
    useState<LinkStateModelI>("public");
  const [isStateExpired, setIsStateExpired] = useState("not-date");
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { description, time, title, originalUrl, password } =
      e.target as typeof e.target & {
        description: { value: string };
        title: { value: string };
        originalUrl: { value: string };
        time: { value: string };
        password: { value: string };
      };

    // console.log(isState);
    console.log(
      description.value,
      time.value,
      title.value,
      originalUrl.value,
      password?.value ?? "publico",
    );
  };

  const onChangeStatePassword = (value: string) => {
    setIsStatePassword(value as LinkStateModelI);
    console.log("onChange", value);
  };

  const onChangeStateExpired = (value: string) => {
    setIsStateExpired(value);
    console.log("onChange", value);
  };

  const onChangeVisiblePassword = () => {
    setIsVisiblePassword((prev) => !prev);
  };

  return {
    isStatePassword,
    isStateExpired,
    isVisiblePassword,
    handleSubmit,
    onChangeStatePassword,
    onChangeStateExpired,
    onChangeVisiblePassword,
  };
};

export default useCreateLink;
