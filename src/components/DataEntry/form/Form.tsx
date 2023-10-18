"use client";
import React from "react";
import PrimaryButton from "@/components/button/PrimaryButton";
import Select from "../select/select/Select";
import TextField from "../input/textfield/TextField";

const FormField = () => {
  const handleImage = () => {};
  return (
    <div className="mx-auto max-w-5xl space-y-10 shadow-lg p-4 rounded-lg">
      <h1 className="text-3xl font-bold text-center">Visa Form </h1>
      <form className="space-y-4">
        <Select name="Passport ID" />
        <Select name="Client" />
        <Select name="Company" />
        <Select name="Agent" />
        <Select name="Destination" />
        <Select name="Category" />
        <Select name="Type" />
        <Select name="Duration" />
        <TextField label="Processing" placeholder="Processing Fees"/>
        <TextField label="Confirmed" placeholder="Confirmed"/>
        <TextField label="Fee" placeholder="Paid"/>
        <TextField label="Currency" placeholder="Pkr"/>
        <PrimaryButton text="Submit" />
      </form>
    </div>
  );
};

export default FormField;
