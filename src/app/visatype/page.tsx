import TextField from "@/components/DataEntry/input/textfield/TextField";
import PrimaryButton from "@/components/button/PrimaryButton";
import Layout from "@/components/layout/Layout";
import React from "react";

const page = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-5xl space-y-10 shadow-lg p-4 rounded-lg">
        <h1 className="text-3xl font-bold text-center">Visa Type</h1>
        <form className="space-y-4">
          <TextField label="Visa Type" />
          <PrimaryButton text="Submit" />
        </form>
      </div>
    </Layout>
  );
};

export default page;
