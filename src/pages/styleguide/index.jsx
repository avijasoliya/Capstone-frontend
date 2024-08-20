import { SSButton } from "@/components";
import React from "react";

const StyleGuide = () => {
  return (
    <div className="d-flex flex-column gap-5 align-items-start my-5">
      <section className="border border-solid d-flex gap-3 container">
        <SSButton disabled variant="default">
          default
        </SSButton>
        <SSButton disabled variant="primary">
          primary
        </SSButton>
        <SSButton disabled variant="dashed">
          dashed
        </SSButton>
        <SSButton disabled variant="text">
          text
        </SSButton>
        <SSButton disabled variant="link">
          link
        </SSButton>
      </section>
      <section className="border border-solid d-flex gap-3 container">
        <SSButton variant="default">default</SSButton>
        <SSButton variant="primary">primary</SSButton>
        <SSButton variant="dashed">dashed</SSButton>
        <SSButton variant="text">text</SSButton>
        <SSButton variant="link">link</SSButton>
        <SSButton variant="default">ghost</SSButton>
      </section>
      <section className="border border-solid d-flex gap-3 container">
        <SSButton variant="default" danger>
          danger - default
        </SSButton>
        <SSButton variant="primary" danger>
          danger - primary
        </SSButton>
        <SSButton variant="dashed" danger>
          danger - dashed
        </SSButton>
        <SSButton variant="text" danger>
          danger - text
        </SSButton>
        <SSButton variant="link" danger>
          danger - link
        </SSButton>
      </section>
      <section className="border border-solid d-flex gap-3 container">
        <SSButton variant="default" size={"large"}>
          size - large
        </SSButton>
        <SSButton variant="default" size={"middle"}>
          size - middle
        </SSButton>
        <SSButton variant="default" size={"small"}>
          size - small
        </SSButton>
      </section>
      <section className="border border-solid d-flex gap-3 container">
        <SSButton loading variant="default">
          loading - default
        </SSButton>
        <SSButton loading variant="primary">
          loading - primary
        </SSButton>
        <SSButton loading variant="dashed">
          loading - dashed
        </SSButton>
        <SSButton loading variant="text">
          loading - text
        </SSButton>
        <SSButton loading variant="link">
          loading - link
        </SSButton>
        <SSButton loading variant="default">
          loading - ghost
        </SSButton>
      </section>
      <section className="border border-solid d-flex gap-3 container">
        <SSButton loading disabled variant="default">
          loading disabled - default
        </SSButton>
        <SSButton loading disabled variant="primary">
          loading disabled - primary
        </SSButton>
        <SSButton loading disabled variant="dashed">
          loading disabled - dashed
        </SSButton>
        <SSButton loading disabled variant="text">
          loading disabled - text
        </SSButton>
        <SSButton loading disabled variant="link">
          loading disabled - link
        </SSButton>
        <SSButton loading disabled variant="default">
          loading - ghost
        </SSButton>
      </section>
    </div>
  );
};

export default StyleGuide;
