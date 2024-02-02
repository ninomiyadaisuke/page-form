"use client";

import React, { useTransition } from "react";
import { FormElementInstance, FormElements } from "./FormElements";
import { Button } from "./ui/button";
import { HiCursorClick } from "react-icons/hi";
import { ImSpinner2 } from "react-icons/im";

const FormSubmitComponent = ({
  formUrl,
  content,
}: {
  content: FormElementInstance[];
  formUrl: string;
}) => {
  const [pending, startTransition] = useTransition();
  return (
    <div className="flex justify-center w-full h-full items-center p-8">
      <div className="max-w-[620px] flex flex-col gap-4 flex-grow bg-background w-full p-8 overflow-y-auto border shadow-xl shadow-blue-700 rounded">
        {content.map((element) => {
          const FormElement = FormElements[element.type].formComponent;
          console.log(element);

          return <FormElement key={element.id} elementInstance={element} />;
        })}
        <Button
          className="mt-8"
          // onClick={() => {
          //   startTransition(submitForm);
          // }}
          disabled={pending}
        >
          {!pending && (
            <>
              <HiCursorClick className="mr-2" />
              Submit
            </>
          )}
          {pending && <ImSpinner2 className="animate-spin" />}
        </Button>
      </div>
    </div>
  );
};

export default FormSubmitComponent;
