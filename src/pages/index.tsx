import Navbar from "@/components/Navbar";

import { usePostsPreview } from "@/hooks";

export default function Home() {
  const { data, error } = usePostsPreview();

  if (error) return <p>Something went wrong</p>;

  return (
    <div>
      <Navbar />
    </div>
  );
}
