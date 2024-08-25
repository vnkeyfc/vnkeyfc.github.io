"use client";
import { link_discord } from "@/app/data";
import Image from "next/image";
import React, { useState } from "react";

export default function Popup() {
  const [show, setShow] = useState(true);
  return (
    <>
      <div
        id="popup"
        className={`fixed bottom-2 right-2 w-full max-w-56 md:max-w-[18rem] p-3 md:p-4 bg-white rounded-lg shadow ${
          show ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <div className="w-8 h-8">
              <Image
                className="mask mask-squircle"
                src="/help.png"
                alt="help"
                width={50}
                height={50}
              />
            </div>
            <span className="text-sm md:text-base font-bold">
              Giải cứu nhóm dịch
            </span>
            <button
              type="button"
              className="ms-auto -mx-1.5 -my-1.5 bg-white items-center justify-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-9 w-9"
              data-dismiss-target="#toast-interactive"
              aria-label="Close"
              onClick={() => setShow(false)}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <div className="text-sm font-normal">
            <div className="text-sm md:text-base font-normal text-justify my-2 md:my-4">
              Nếu bạn muốn đẩy nhanh tiến độ của các dự án đang dở dang, hãy cân
              nhắc tham gia cùng Vietnam Key FanClub. Nhóm chiêu mộ thành viên ở
              tất cả vị trí từ dịch thuật đến kĩ thuật. Xin liên lạc với Vietnam
              Key FanClub qua kênh Discord chính thức của nhóm.
            </div>
          </div>
          <div className="ml-auto w-fit">
            <a
              href={link_discord}
              className="btn btn-success btn-xs md:btn-sm rounded-lg"
            >
              JOIN DISCORD
            </a>
          </div>
        </div>
      </div>
      <div
        className={`fixed bottom-2 right-2 rounded-lg shadow ${
          show ? "hidden" : "block"
        }`}
        onClick={() => setShow(true)}
      >
        <div className="w-14 h-14">
          <Image
            className="mask mask-squircle"
            src="/help.png"
            alt="help"
            width={150}
            height={150}
          />
        </div>
      </div>
    </>
  );
}
