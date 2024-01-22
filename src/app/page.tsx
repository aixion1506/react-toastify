'use client'
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorToast } from "./toast";

export default function Home() {
  // const notify = () => {
  //   toast.info("test toasting", {
  //     position: "top-center",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });
  // };
  const errorMessage = 'Login'
  const notify = ErrorToast(errorMessage);
  notify();

  return (
    <>
      <button onClick={notify}>notinoty</button>
      <ToastContainer />
    </>
  );
}
