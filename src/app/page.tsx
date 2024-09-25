import { data, otherData, TrangThai } from "./data";
import Popup from "@/components/popup";
import ImageCover from "@/components/image-cover";
import ProjectStatus from "@/components/project-status";
export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-30% to-emerald-50 to-90% ">
        <div className="bg-[url('/SPbackground.webp')] bg-no-repeat bg-center bg-cover bg-fixed min-h-screen">
          <div className="flex flex-col items-center max-w-6xl mx-auto">
            {/* Dự án chính */}
            <h1 className="text-xl md:text-4xl mt-8 font-bold text-center text-neutral">
              Vietnam Key FanClub
            </h1>
            <p className="text-md md:text-2xl pt-2 pb-4 text-center text-info-content">
              Dưới đây là bảng tiến độ các dự án dịch thuật visual novel của
              Vietnam Key FanClub.
            </p>
            <div className="flex flex-wrap justify-center">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="card card-compact w-40 sm:w-48 md:w-60 lg:w-64 xl:w-68 bg-base-100 shadow-xl m-2 md:m-4 backdrop-blur-sm bg-white/30"
                >
                  <ImageCover {...item} />
                  <div className="card-body !p-3">
                    <p className="card-title text-lg line-clamp-3 leading-6 text-center">
                      {item.ten}
                    </p>
                    <div className="leading text-[0.62rem] md:text-sm">
                      <div className="grid grid-cols-12 gap-1">
                        <span className="col-span-4 whitespace-nowrap">
                          Dịch thuật
                        </span>
                        <span className="col-span-6">
                          <progress
                            className="progress w-full"
                            value={item.dich_thuat}
                            max="100"
                          ></progress>
                        </span>
                        <span className="col-span-2">{item.dich_thuat}%</span>
                      </div>
                      <div className="grid grid-cols-12 gap-1">
                        <span className="col-span-4">Biên tập</span>
                        <span className="col-span-6">
                          <progress
                            className="progress w-full"
                            value={item.bien_tap}
                            max="100"
                          ></progress>
                        </span>
                        <span className="col-span-2">{item.bien_tap}%</span>
                      </div>
                      <div className="grid grid-cols-12 gap-1">
                        <span className="col-span-4">Kĩ thuật</span>
                        <span className="col-span-6">
                          <progress
                            className="progress w-full"
                            value={item.ki_thuat}
                            max="100"
                          ></progress>
                        </span>
                        <span className="col-span-2">{item.ki_thuat}%</span>
                      </div>
                      <div className="grid grid-cols-12 gap-1">
                        <span className="col-span-4">Mĩ thuật</span>
                        <span className="col-span-6">
                          <progress
                            className="progress w-full"
                            value={item.mi_thuat}
                            max="100"
                          ></progress>
                        </span>
                        <span className="col-span-2">{item.mi_thuat}%</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-center text-xs mb-2">
                        Cập nhật lần cuối: {item.cap_nhat_lan_cuoi}
                      </div>
                      <div className="flex justify-between">
                        <button className="hidden md:block btn btn-outline btn-sm rounded-lg mr-2">
                          <a href={item.vndb}>VNDB</a>
                        </button>

                        <ProjectStatus
                          trangThai={item.trang_thai}
                          link_patch={item.link_patch}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="divider"></div>

            {/* Dự án đối tác */}
            <h2 className="text-xl md:text-4xl mt-4 md:mt-8 mb-4 font-bold text-center text-neutral">
              Các dự án dịch thuật visual novel thuộc Key do đối tác thực hiện
            </h2>
            <div className="flex flex-wrap justify-center mb-8 lg:mb-16">
              {otherData.map((item, index) => (
                <div
                  key={index}
                  className="card card-compact w-40 sm:w-48 md:w-60 lg:w-64 xl:w-68 bg-base-100 shadow-xl m-2 md:m-4 backdrop-blur-sm bg-white/30"
                >
                  <ImageCover {...item} />
                  <div className="card-body !p-3">
                    <p className="card-title text-lg line-clamp-3 leading-6 text-center">
                      {item.ten}
                    </p>
                    <span className="text-center text-base italic">
                      Nhóm dịch: {item.nhom}
                    </span>
                    <div className="flex justify-between">
                      <button className="hidden md:block btn btn-outline btn-sm rounded-lg mr-2">
                        <a href={item.vndb}>VNDB</a>
                      </button>

                      <ProjectStatus
                        trangThai={item.trang_thai}
                        link_patch={item.link_patch}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Popup />
    </>
  );
}
