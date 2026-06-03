"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

export default function ImageWithSpinner(props: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100/50">
          <div className="w-8 h-8 border-4 border-navy border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <Image
        {...props}
        className={`${props.className || ""} ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
        onLoad={(e) => {
          setIsLoading(false);
          if (props.onLoad) props.onLoad(e);
        }}
        loading="lazy"
      />
    </div>
  );
}
