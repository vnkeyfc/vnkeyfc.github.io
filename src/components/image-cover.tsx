import { DuAn } from "@/app/data";
import Image from "next/image";
import React from "react";

export default function ImageCover(item: DuAn) {
  return (
    <div className="group rounded-t-2xl relative overflow-hidden transition-shadow hover:shadow-xl hover:shadow-green-300/20">
      <div className="aspect-[9/13]">
        <Image
          className="h-full w-full rounded-t-2xl object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
          src={item.hinh_anh}
          alt={item.ten}
          width={720}
          height={1280}
        />
      </div>
      {item.link_patch && (
        <>
          <div className="absolute inset-0 bg-gradient-to-tl opacity-0 from-transparent via-transparent to-transparent group-hover:from-cyan-500 group-hover:via-amber-500 group-hover:to-pink-500 group-hover:opacity-30"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0">
            <a
              href={item.link_patch}
              className="rounded-full bg-green-400 px-3.5 py-2 font-com text-sm capitalize text-black font-semibold shadow shadow-black/60"
            >
              Link patch
            </a>
          </div>
        </>
      )}
    </div>
  );
}
