import React from "react";
import CardLink from "./CardLink";

export default function CategoryLinks() {
  return (
    <div className="flex flex-col gap-20 sm:flex-row sm:gap-[10px]">
      <CardLink
        img={
          "https://utfs.io/f/347b0477-306f-4e2e-aa0d-4d178c025212_image-earphones.png"
        }
        category={"earphones"}
      />
      <CardLink
        img={
          "https://utfs.io/f/04e9f336-61e3-47c7-a3df-847a68af3a7a_image-speakers.png"
        }
        category={"speakers"}
      />
      <CardLink
        img={
          "https://utfs.io/f/3d6150fe-fdbe-4002-b5ac-be73490c59fc_image-headphones.png"
        }
        category={"headphones"}
      />
    </div>
  );
}
