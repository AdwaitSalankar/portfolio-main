import { DATA } from "@/data/resume";
import { IconCloud } from "./magicui/icon-cloud";

export function IconCloudDemo() {
  const images = DATA.skills.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
