"use client";
import React, { useEffect } from "react";
import CombinedItems from "../../item/CombinedItems";
import NotFound from "../../not-found";
import Link from "next/link";
import { IconChevronLeft } from "@tabler/icons-react";

interface DetailItemProps {
  detaiItem: string;
  onTitleChange: (typeItem: string) => void;
}

const DetailItem: React.FC<DetailItemProps> = ({
  detaiItem,
  onTitleChange,
}) => {
  const itemData = CombinedItems.find((detail) => detail.url === detaiItem);

  useEffect(() => {
    if (itemData) {
      document.title = `RV • ${itemData.typeItem}`;
      onTitleChange(itemData.typeItem);
    }
  }, [itemData, onTitleChange]);

  if (!itemData) {
    return (
      <main>
        <section>
          <div>
            <NotFound />
          </div>
        </section>
      </main>
    );
  }
  return (
    <div className="w-full px-4 md:px-6 lg:px-20">
      <div className="px-2 pb-4 md:pb-10">
        <Link
          href="/our-collection"
          className="flex items-center font-mono font-bold"
        >
          <IconChevronLeft className="w-4 h-4" />
          BACK TO OUR COLLECTION
        </Link>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between p-2">
        <div>
          <img src={itemData.picture} alt={itemData.title} />
        </div>

        <div className="flex flex-col items-center md:items-start justify-center p-2">
          <div className="text-center md:text-left p-2">
            <h1 className="font-mono font-bold md:text-lg">{itemData.title}</h1>

            <p className="font-mono text-xs md:text-sm">{itemData.sub}</p>
          </div>

          <div className="text-center md:text-left p-2">
            <p className="font-mono text-xs md:text-sm">
              {itemData.description}
            </p>
          </div>

          <div className="flex flex-col items-start justify-center p-2">
            <div className="flex items-center justify-center py-2 gap-[6px]">
              <div className="text-center">
                <p className="font-mono text-xs md:text-sm">Colors:</p>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {itemData.colors.split(", ").map((color, idx) => (
                  <div
                    key={idx}
                    className="px-[10px] md:px-4 py-[6px]"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="text-center md:text-left">
              <p className="font-mono font-bold text-xs md:text-sm">
                <span className="pr-[4px]">IDR</span>
                {itemData.price}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-end px-2 pt-4 md:pt-10">
        <p className="font-mono font-bold text-sm">&lsquo;RV24&lsquo;-25</p>
      </div>
    </div>
  );
};

export default DetailItem;
