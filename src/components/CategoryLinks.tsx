import React from "react";
import CardLink from "./CardLink";

export default function CategoryLinks() {
  return (
    <div className="flex flex-col gap-20 sm:flex-row sm:gap-[10px]">
      <CardLink
        img={
          "https://utfs.io/f/5c8fa5bd-fb31-4139-b452-3e19d30bc3ca_image-earphones.png"
        }
        category={"earphones"}
      />
      <CardLink
        img={
          "https://utfs.io/f/d6ef4c86-9b56-480a-adff-aee157e462e9_image-speakers.png"
        }
        category={"speakers"}
      />
      <CardLink
        img={
          "https://utfs.io/f/1d977c1a-3f6d-41cd-90a0-c495dda5da2c_image-headphones.png"
        }
        category={"headphones"}
      />
    </div>
  );
}
