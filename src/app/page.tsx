import Link from "next/link";
import Image from "next/image";

const mockUrls = [
  "https://utfs.io/f/10cdb25c-45d3-4fdd-83fb-fc3d98c38c15-65lqxx.png",
  "https://utfs.io/f/dc0288c4-4f5d-4b50-a2ce-e9d1ad62549b-99gc35.png",
  "https://utfs.io/f/8c30425e-7dfd-4a02-ac16-283771cb399f-9hsd0m.png",
  "https://utfs.io/f/856d4534-3d60-4701-a027-3b59652da3ef-xahm3y.png",
  "https://utfs.io/f/22868914-a58b-4e05-84c9-a06e4e250174-wjzcjg.png",
  "https://utfs.io/f/40d9e42f-89dd-4e7d-87aa-dd656a269f7c-bvme9k.png",
  "https://utfs.io/f/cf776ea9-9255-4873-a138-6aa0d08bfca3-e7a2y4.png",
  "https://utfs.io/f/ffab56c1-653f-4a7e-968f-576b86601bd2-ppd9zj.png",
];

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <Image src={image.url} width={200} height={200} alt="image" />
          </div>
        ))}
      </div>
      Hello
    </main>
  );
}
