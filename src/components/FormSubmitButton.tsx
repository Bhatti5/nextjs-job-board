"use client";

import { useFormStatus } from "react-dom";
import LoadingButton from "./LoadingButton.jsx";

export default function FormSubmitButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { pending } = useFormStatus();
  return ( 
       <LoadingButton loading={false}  > </LoadingButton>
  )
}