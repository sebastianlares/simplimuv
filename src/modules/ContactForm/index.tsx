/* eslint-disable no-console */
"use client";
import React, { useState, Suspense } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import Button from "@/common/components/Button";
import { isValidEmail } from "@/common/lib";
import Input from "@/common/components/Input";
// import { createdLead } from "@/services";

interface INITIAL_VALUES {
  values: {
    name: string;
    lastName: string;
    email: string;
    phone: string;
  };
  error: {
    name: boolean | string;
    lastName: boolean | string;
    email: boolean | string;
    phone: boolean | string;
  };
}

const INITIAL_VALUES = {
  values: { name: "", lastName: "", email: "", phone: "" },
  error: {
    name: false,
    lastName: false,
    email: false,
    phone: false,
  },
};

const ContactForm = ({
  motoId,
  accesoriesId,
}: {
  motoId: string;
  accesoriesId: string[];
}) => {
  const [form, setForm] = useState<INITIAL_VALUES>(INITIAL_VALUES);
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { push } = useRouter();
  const pathName = usePathname();
  const isDisabled = Object.values(form.values).some((value) => value === "");

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    const { values, error } = form;

    const newError = { ...error };

    if (!value && name in error) {
      newError[name as keyof typeof error] = "Campo requerido";
    } else if (value && name in error) {
      newError[name as keyof typeof error] = false;
    }
    if (
      (name === "name" && value.length > 50) ||
      (name === "lastName" && value.length > 60) ||
      (name === "email" && value.length > 35) ||
      (name === "phone" && value.length > 16)
    ) {
      return;
    }

    if (name === "email" && !isValidEmail(value)) {
      newError.email = "Por favor ingrese un email válido";
    }

    setForm({
      values: {
        ...values,
        [name]: value,
      },
      error: newError,
    });
  };

  const handleOnSubmit = async () => {
    try {
      const body = {
        uuid: motoId,
        accesories: accesoriesId,
        contact: {
          name: form.values.name,
          lastName: form.values.lastName,
          email: form.values.email,
          phone: form.values.phone,
          finance: false,
          trade: false,
        },
      };

      console.log(body);
      params.append("name", `${form.values.name} ${form.values.lastName}`);
      params.append("email", form.values.email);
      params.append("phone", form.values.phone);

      push(`${pathName}/recibo?${params}`);
      // const res = await createdLead(body);

      //   console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Suspense>
      <form className="flex flex-col gap-5">
        <Input
          error={form.error.name}
          label="Nombre"
          name="name"
          value={form.values.name}
          onChange={handleOnChange}
        />
        <Input
          error={form.error.lastName}
          label="Apellido"
          name="lastName"
          value={form.values.lastName}
          onChange={handleOnChange}
        />
        <Input
          error={form.error.email}
          label="Email"
          name="email"
          type="email"
          value={form.values.email}
          onChange={handleOnChange}
        />
        <Input
          error={form.error.phone}
          label="Teléfono"
          name="phone"
          type="number"
          value={form.values.phone}
          onChange={handleOnChange}
        />
        <Button content="Contactar" disabled={isDisabled} onClick={handleOnSubmit} />
      </form>
    </Suspense>
  );
};

export default ContactForm;
