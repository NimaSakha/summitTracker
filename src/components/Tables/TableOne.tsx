import { BRAND } from "@/types/brand";
import Image from "next/image";

const brandData: BRAND[] = [
  {
    logo: "/images/user/user-01.png",
    name: "Google",
    visitor: "Nima Sakha",
    revenues: "1",
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: "/images/user/user-02.png",
    name: "Twitter",
    visitor: "Adam Doe",
    revenues: "2",
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: "/images/user/user-04.png",
    name: "Github",
    visitor: "Remy White",
    revenues: "3",
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: "/images/user/user-03.png",
    name: "Vimeo",
    visitor: "Maddi Shore",
    revenues: "4",
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: "/images/user/user-05.png",
    name: "Facebook",
    visitor: "Chris Jet",
    revenues: "5",
    sales: 390,
    conversion: 4.2,
  },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Leader board
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 ">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              User
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Rank
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <Image src={brand.logo} alt="Brand" width={48} height={48} />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {brand.visitor}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.visitor}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">#{key + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
